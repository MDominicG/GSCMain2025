export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Content-Type', 'application/xml')
  
  const routes = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/servicii', priority: 0.9, changefreq: 'weekly' },
    { url: '/daune-auto', priority: 0.9, changefreq: 'weekly' },
    { url: '/daune-auto/grawe', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/omniasig', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/allianz', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/asirom', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/generali', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/groupama', priority: 0.8, changefreq: 'monthly' },
    { url: '/daune-auto/axeria', priority: 0.8, changefreq: 'monthly' },
    { url: '/servicii/mecanica', priority: 0.8, changefreq: 'monthly' },
    { url: '/servicii/tinichigerie', priority: 0.8, changefreq: 'monthly' },
    { url: '/servicii/vopsitorie', priority: 0.8, changefreq: 'monthly' },
    { url: '/despre', priority: 0.7, changefreq: 'monthly' },
    { url: '/cariere', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/programare', priority: 0.8, changefreq: 'weekly' },
    { url: '/politica-confidentialitate', priority: 0.5, changefreq: 'yearly' },
    { url: '/termeni-conditii', priority: 0.5, changefreq: 'yearly' },
    { url: '/cookies', priority: 0.5, changefreq: 'yearly' },
  ]

  const baseUrl = 'https://gsc-auto.ro'
  const lastmod = new Date().toISOString().split('T')[0]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
})
