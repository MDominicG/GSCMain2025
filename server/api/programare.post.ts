import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiter (suitable for single-instance deployment)
const rateLimit = new Map<string, { count: number; first: number }>()
const MAX_PER_HOUR = 20

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as any
  const req = event.node.req as any
  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown') as string

  // Honeypot
  if (body.website && String(body.website).trim() !== '') {
    throw createError({ statusCode: 400, statusMessage: 'Bot detected' })
  }

  // Timestamp anti-bot: ensure not submitted too quickly or too old
  if (!body.ts) throw createError({ statusCode: 400, statusMessage: 'Missing timestamp' })
  const elapsed = Date.now() - Number(body.ts)
  if (elapsed < 3000) throw createError({ statusCode: 400, statusMessage: 'Submitted too quickly' })
  if (elapsed > 24 * 3600 * 1000) throw createError({ statusCode: 400, statusMessage: 'Form expired' })

  // Rate limiting per IP
  const now = Date.now()
  let stat = rateLimit.get(ip) || { count: 0, first: now }
  if (now - stat.first > 3600000) stat = { count: 0, first: now }
  stat.count++
  rateLimit.set(ip, stat)
  if (stat.count > MAX_PER_HOUR) throw createError({ statusCode: 429, statusMessage: 'Too many requests' })

  // Basic validation
  const required = ['name', 'phone', 'email', 'date', 'time', 'gdpr']
  for (const field of required) {
    if (field === 'gdpr') {
      if (!body.gdpr) throw createError({ statusCode: 400, statusMessage: 'GDPR consent required' })
    } else if (!body[field]) {
      throw createError({ statusCode: 400, statusMessage: `Missing field: ${field}` })
    }
  }

  // SMTP config must be set in environment
  if (!process.env.SMTP_HOST) throw createError({ statusCode: 500, statusMessage: 'SMTP not configured on server' })

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  })

  const to = process.env.CONTACT_EMAIL || 'office@gsc-auto.ro'
  const subject = `Programare ${body.type || ''} - ${body.name}`
  const html = `
    <h3>Programare Online</h3>
    <p><strong>Tip:</strong> ${body.type}</p>
    <p><strong>Nume:</strong> ${body.name}</p>
    <p><strong>Telefon:</strong> ${body.phone}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Vehicul:</strong> ${body.carBrand || ''} ${body.carModel || ''} ${body.carYear || ''}</p>
    <p><strong>Asigurare:</strong> ${body.insurance || ''}</p>
    <p><strong>Data / Ora:</strong> ${body.date} ${body.time}</p>
    <p><strong>Mesaj:</strong> ${body.message || ''}</p>
    <p><strong>IP:</strong> ${ip}</p>
  `

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"GSC Auto" <no-reply@gsc-auto.ro>',
      to,
      subject,
      html
    })

    return { status: 'ok' }
  } catch (err) {
    console.error('SMTP send error', err)
    throw createError({ statusCode: 500, statusMessage: 'Eroare la trimiterea emailului' })
  }
})