export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate form type
  if (body.type !== 'constatare_amiabila') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid form type',
    })
  }

  try {
    // Prepare email data
    const emailData = {
      type: 'Constatare Amiabilă Online',
      submittedAt: body.submittedAt,
      formData: body.formData,
      responsibility: body.agreedResponsibility,
      notes: body.notes,
    }

    // TODO: Integrate with your email service (Resend, SendGrid, Nodemailer, etc.)
    // Example with Nodemailer:
    // await sendEmail({
    //   to: 'support@yoursite.com',
    //   cc: body.formData?.vehicleA?.driverEmail,
    //   subject: `Constatare Amiabilă - ${body.formData?.vehicleA?.licensePlate} vs ${body.formData?.vehicleB?.licensePlate}`,
    //   html: generateEmailTemplate(emailData),
    // })

    // For now, log to console
    console.log('Constatare amiabilă submitted:', emailData)

    // Optional: Save to database
    // await db.constatari.create({ ...emailData })

    return {
      success: true,
      message: 'Constatarea a fost primită cu succes',
      submissionId: `CA-${Date.now()}`,
    }
  } catch (error) {
    console.error('Submission error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process submission',
    })
  }
})

// Helper to generate email template
function generateEmailTemplate(data: any) {
  return `
    <h2>Constatare Amiabilă Online</h2>
    <p><strong>Data trimiterii:</strong> ${data.submittedAt}</p>
    
    <h3>Accident Details</h3>
    <ul>
      <li>Data: ${data.formData.accidentDate}</li>
      <li>Locul: ${data.formData.accidentLocation}</li>
      <li>Țara: ${data.formData.country}</li>
    </ul>
    
    <h3>Vehiculul A (Reclamant)</h3>
    <ul>
      <li>Vehicul: ${data.formData.vehicleA.make} ${data.formData.vehicleA.model}</li>
      <li>Înmatriculare: ${data.formData.vehicleA.licensePlate}</li>
      <li>Asigurare: ${data.formData.vehicleA.insuranceCompany}</li>
      <li>Șofer: ${data.formData.vehicleA.driverName}</li>
    </ul>
    
    <h3>Vehiculul B (Tert)</h3>
    <ul>
      <li>Vehicul: ${data.formData.vehicleB.make} ${data.formData.vehicleB.model}</li>
      <li>Înmatriculare: ${data.formData.vehicleB.licensePlate}</li>
      <li>Asigurare: ${data.formData.vehicleB.insuranceCompany}</li>
      <li>Șofer: ${data.formData.vehicleB.driverName}</li>
    </ul>
    
    <h3>Responsabilitate</h3>
    <p>${data.responsibility}</p>
    
    <h3>Note</h3>
    <p>${data.notes}</p>
  `
}
