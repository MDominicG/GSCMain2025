// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
      ignore: ['/admin']
    },
    minify: true,
    compressPublicAssets: true
  },

  app: {
     baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ro'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Service auto in Bucuresti, Sector 2, autorizat RAR. Centru de daune auto pentru toate societatile de asigurare de pe teritoriul Romaniei. Lucrari, rapide, calitative si de durata' },
        { name: 'keywords', content: 'service auto bucuresti, daune auto, reparatii auto, tinichigerie, vopsitorie, mecanica auto, sector 2, service auto sector 2, centru de daune Allianz-Tiriac, centru de daune Allianz, Axeria-Iard, Groupama, Asirom, Omniasig' },
        { name: 'theme-color', content: '#1e40af' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'General Services Company 97 S.R.L' },
        { property: 'og:url', content: 'https://gsc-auto.ro' },
        { property: 'og:image', content: 'https://gsc-auto.ro/logos/new-logo.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://gsc-auto.ro' },
        { rel: 'preload', as: 'image', href: '/logos/new-logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://g.page' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  routeRules: {
    '/': { prerender: true, cache: { maxAge: 60 * 60 * 24 } },
    '/daune-auto/**': { swr: 3600 },
    '/servicii/**': { swr: 3600 },
    '/**': { cache: { maxAge: 60 * 60 } }
  }
})
