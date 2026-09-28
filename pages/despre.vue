<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">General Services Company</h1>
          <p class="text-xl text-primary-100">
            Peste 28 ani de experiență în service auto și gestionare daune în București
          </p>
        </div>
      </div>
    </section>

    <!-- Company Info -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 class="text-3xl font-bold mb-6">General Services Company</h2>
            <div class="prose prose-lg">
              <p class="text-lg text-secondary-700 mb-4">
                General Services Company 97 SRL este un service auto profesional 
                și centru autorizat de constatări și reparații daune auto în București, Sector 2.
              </p>
              <p class="text-lg text-secondary-700 mb-4">
                Cu peste 28 ani de experiență în domeniu, am devenit un partener de încredere pentru 
                mii de clienți și pentru toate societățile de asigurare din România.
              </p>
              <p class="text-lg text-secondary-700">
                Echipa noastră de specialiști autorizați utilizează echipamente moderne și tehnici 
                avansate pentru a oferi servicii de cea mai înaltă calitate în mecanică auto, 
                tinichigerie și vopsitorie.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white text-center">
            <Icon name="mdi:car-wrench" class="text-9xl mx-auto mb-6" />
            <h3 class="text-3xl font-bold mb-4">15+ Ani</h3>
            <p class="text-xl">De Experiență în Service Auto</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid md:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-group" class="text-4xl text-primary-700" />
            </div>
            <h3 class="text-4xl font-bold text-primary-700 mb-2">5000+</h3>
            <p class="text-secondary-600">Clienți Mulțumiți</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:car-multiple" class="text-4xl text-primary-700" />
            </div>
            <h3 class="text-4xl font-bold text-primary-700 mb-2">10000+</h3>
            <p class="text-secondary-600">Vehicule Reparate</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:shield-check" class="text-4xl text-primary-700" />
            </div>
            <h3 class="text-4xl font-bold text-primary-700 mb-2">7</h3>
            <p class="text-secondary-600">Asigurări Partenere</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:star" class="text-4xl text-primary-700" />
            </div>
            <h3 class="text-4xl font-bold text-primary-700 mb-2">4.8/5</h3>
            <p class="text-secondary-600">Rating Clienți</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-12 text-center">Valorile Noastre</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 text-center">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:handshake" class="text-3xl" />
            </div>
            <h3 class="text-xl font-bold mb-3">Profesionalism</h3>
            <p class="text-secondary-600">
              Abordăm fiecare proiect cu seriozitate și dedicare, asigurându-ne că fiecare 
              detaliu este perfect.
            </p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:shield-check" class="text-3xl" />
            </div>
            <h3 class="text-xl font-bold mb-3">Calitate</h3>
            <p class="text-secondary-600">
              Utilizăm doar piese și materiale de calitate superioară, garantând durabilitate 
              și siguranță.
            </p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-heart" class="text-3xl" />
            </div>
            <h3 class="text-xl font-bold mb-3">Orientare spre Client</h3>
            <p class="text-secondary-600">
              Satisfacția clientului este prioritatea noastră. Comunicăm transparent și 
              respectăm termene.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-12 text-center">Ce Oferim</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex items-start">
            <div class="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
              <Icon name="mdi:wrench" class="text-3xl text-primary-700" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Service Auto Complet</h3>
              <p class="text-secondary-600">
                Mecanică auto, tinichigerie, vopsitorie - toate serviciile pentru mașina ta într-un singur loc.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
              <Icon name="mdi:clipboard-check" class="text-3xl text-primary-700" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Gestionare Daune Auto</h3>
              <p class="text-secondary-600">
                Centru autorizat pentru toate asigurările - gestionăm dosarul complet, fără efort din partea ta.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
              <Icon name="mdi:tools" class="text-3xl text-primary-700" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Echipamente Moderne</h3>
              <p class="text-secondary-600">
                Tehnologie de ultimă generație pentru diagnostic și reparații de precizie.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
              <Icon name="mdi:certificate" class="text-3xl text-primary-700" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Specialiști Autorizați</h3>
              <p class="text-secondary-600">
                Echipă cu experiență vastă și certificări oficiale în domeniul auto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="section-container text-center">
        <h2 class="text-3xl font-bold mb-6">Hai să Colaborăm!</h2>
        <p class="text-xl mb-8 text-primary-100">
          Contactează-ne astăzi pentru servicii auto profesionale
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="bg-white text-primary-700 hover:bg-primary-50 font-semibold text-lg px-8 py-3 rounded-lg transition">
            <Icon name="mdi:phone" class="mr-2" />
            Contactează-ne
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Despre Noi',
  meta: [
    { 
      name: 'description', 
      content: 'GSC Auto - peste 15 ani experiență în service auto și gestionare daune București. Specialiști autorizați, echipamente moderne, partener pentru toate asigurările.' 
    },
    {
      name: 'keywords',
      content: 'despre gsc auto, service auto bucuresti, experienta service auto, centru daune autorizat'
    }
  ]
})
</script>
