export default defineNuxtPlugin(() => {
  useHead({
    htmlAttrs: {
      lang: 'ro'
    },
    meta: [
      { name: 'theme-color', content: '#1e40af' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' }
    ]
  })
})
