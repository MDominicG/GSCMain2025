<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Centru Daune Auto - Toate Asigurările</h1>
          <p class="text-xl text-primary-100">
            Unitate notificatoare și reparatoare autorizată. Gestionăm dosarul tău de daune de la A la Z
          </p>
        </div>
      </div>
    </section>

    <!-- Insurance Partners Grid -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Parteneri Asigurări</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Suntem centru autorizat pentru toate societățile de asigurare din România
          </p>
        </div>

        
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          <NuxtLink
            v-for="partner in partners"
            :key="partner.name"
            :to="partner.href"
            class="group flex items-center gap-3 rounded-xl border border-secondary-200/80 bg-white px-4 py-4 md:px-5 md:py-5 shadow-sm hover:border-primary-300 hover:bg-primary-50/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold shadow-sm group-hover:shadow group-hover:scale-105 transition-transform">
              {{ partner.name.charAt(0) }}
            </div>
            <div class="flex-1">
              <p class="font-semibold text-secondary-900 text-base md:text-lg tracking-tight">{{ partner.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-12 text-center">Procesul Complet de Gestionare Daune</h2>
        <div class="grid md:grid-cols-5 gap-6">
          <div class="bg-white rounded-xl p-6 text-center shadow-md">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 class="font-bold mb-2">Contact Inițial</h3>
            <p class="text-sm text-secondary-600">Ne contactezi telefonic pentru a putea lua contact si a te ajuta</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-md">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 class="font-bold mb-2">Programare</h3>
            <p class="text-sm text-secondary-600">Stabilim data si ora constatarii pentru autovehiculele care se pot deplasa, pentru cele imobilizate trimitem masian de tractare</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-md">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 class="font-bold mb-2">Constatare</h3>
            <p class="text-sm text-secondary-600">Evaluam daunele suferite la autoturismul tau si intocmim nota de notificare si solutiile tehnice recomandate
              in conformitate cu manualul de reparatie
            </p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-md">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 class="font-bold mb-2">Reparație</h3>
            <p class="text-sm text-secondary-600">Reparam autoturismul conform solutiilor tehnice reglementate de catre producator</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-md">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              5
            </div>
            <h3 class="font-bold mb-2">Predare</h3>
            <p class="text-sm text-secondary-600">Predăm autoturismul reparamat în conformitate cu normele de siguranță și calitate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Avantajele Colaborării cu noi</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Fără Efort din Partea Ta</h3>
                  <p class="text-secondary-600">Gestionăm întregul proces cu societatea de asigurare</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Reparații Rapide</h3>
                  <p class="text-secondary-600">Timp de reparație agreat la intrarea în service</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Calitate Garantată</h3>
                  <p class="text-secondary-600">Lucrări efectuate de specialiști autorizați</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Comunicare Transparentă</h3>
                  <p class="text-secondary-600">Te ținem la curent în fiecare etapă a procesului</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card p-8 bg-gradient-to-br from-primary-50 to-primary-100">
            <h3 class="text-2xl font-bold mb-6 text-center">Notifică Dauna Acum</h3>
            <div class="space-y-4 text-center">
              <a href="tel:+40799777357" class="btn-primary w-full text-center text-lg">
                <Icon name="mdi:phone" class="mr-2" />
                Apelează: 0799 777 357
              </a>
            </div>
            <div class="mt-6 pt-6 border-t border-primary-200">
              <p class="text-center text-sm text-secondary-700">
                <Icon name="mdi:clock-outline" class="inline mr-1" />
                Program: Luni - Vineri, 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Daune Auto - Toate Asigurările',
  meta: [
    { 
      name: 'description', 
      content: 'Centru daune auto București - notificare și reparații pentru toate asigurările: Grawe, Omniasig, Allianz, Asirom, Generali, Groupama, Axeria. Gestionare completă dosar.' 
    },
    {
      name: 'keywords',
      content: 'daune auto bucuresti, constatare daune, reparatii asigurari, grawe daune, omniasig daune, allianz daune, centru daune auto'
    }
  ]
})

const partners = [
  {
    name: 'Grawe',
    href: '/daune-auto/grawe',
    logo: '/logos/grawe.png',
    copy: 'Centru notificator și reparator autorizat Grawe România'
  },
  {
    name: 'Omniasig',
    href: '/daune-auto/omniasig',
    logo: '/logos/omniasig.png',
    copy: 'Partner oficial pentru dosare de daune Omniasig'
  },
  {
    name: 'Allianz-Țiriac',
    href: '/daune-auto/allianz',
    logo: '/logos/allianz.png',
    copy: 'Unitate reparatoare autorizată Allianz-Țiriac'
  },
  {
    name: 'Asirom',
    href: '/daune-auto/asirom',
    logo: '/logos/asirom.png',
    copy: 'Centru de constatări și reparații Asirom'
  },
  {
    name: 'Generali',
    href: '/daune-auto/generali',
    logo: '/logos/generali.png',
    copy: 'Partner autorizat Generali România'
  },
  {
    name: 'Groupama',
    href: '/daune-auto/groupama',
    logo: '/logos/groupama.png',
    copy: 'Unitate notificatoare și reparatoare Groupama'
  },
  {
    name: 'Axeria',
    href: '/daune-auto/axeria',
    logo: '/logos/axeria.png',
    copy: 'Centru constatări și reparații Axeria'
  }
]

import { onMounted, onBeforeUnmount, reactive } from 'vue'

const initials = (name) => {
  if (!name) return ''
  return name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()
}

// Logo load/error tracking
const logoLoaded = reactive({})
const logoError = reactive({})

let _logoObserver = null
onMounted(() => {
  // Observe images with data-src and set src when they enter viewport
  const imgs = Array.from(document.querySelectorAll('img.lazy-logo[data-src]'))
  if (!('IntersectionObserver' in window)) {
    // fallback: load all immediately
    imgs.forEach(img => startLoad(img))
    return
  }

  _logoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const img = entry.target
      startLoad(img)
      _logoObserver.unobserve(img)
    })
  }, { rootMargin: '200px' })

  imgs.forEach(img => _logoObserver.observe(img))
})

onBeforeUnmount(() => {
  if (_logoObserver) _logoObserver.disconnect()
})

function startLoad(img) {
  const partner = img.dataset.partner
  const src = img.dataset.src
  if (!src) return

  // Start a fallback timer: if not loaded within 2s, show initials
  const t = setTimeout(() => {
    if (!logoLoaded[partner]) logoError[partner] = true
  }, 2000)

  img.src = src
  img.addEventListener('load', () => {
    logoLoaded[partner] = true
    clearTimeout(t)
  }, { once: true })
  img.addEventListener('error', () => {
    logoError[partner] = true
    clearTimeout(t)
  }, { once: true })
}
</script>
