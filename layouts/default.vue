<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
import CookieConsent from '~/components/CookieConsent.vue'
useHead({
  titleTemplate: '%s | General Services Company',
  meta: [
    { name: 'description', content: 'Service auto profesional și centru de constatări daune în București, Sector 2' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'General Services Company' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
