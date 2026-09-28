<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Servicii Complete de Service Auto</h1>
          <p class="text-xl text-primary-100">
            Mecanică, tinichigerie, vopsitorie - toate serviciile de care mașina ta are nevoie
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <NuxtLink to="/servicii/mecanica" class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden">
              <Icon name="mdi:engine" class="text-9xl text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-3">Mecanică Auto</h2>
              <p class="text-secondary-600">
                Reparații și întreținere completă pentru sistemele mecanice ale autovehiculului
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/servicii/tinichigerie" class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center overflow-hidden">
              <Icon name="mdi:car-side" class="text-9xl text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-3">Tinichigerie Auto</h2>
              <p class="text-secondary-600">
                Reparații profesionale de caroserie cu echipamente moderne și specialiști autorizați
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/servicii/vopsitorie" class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center overflow-hidden">
              <Icon name="mdi:spray" class="text-9xl text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-3">Vopsitorie Auto</h2>
              <p class="text-secondary-600">
                Vopsire profesională în cabină modernă, cu alegere precisă a nuanței
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="section-container text-center">
        <h2 class="text-3xl font-bold mb-6">Programează-te pentru service auto</h2>
        <NuxtLink to="/programare" class="btn-secondary text-lg">
          <Icon name="mdi:calendar-check" class="mr-2" />
          Programare Online
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Servicii Service Auto',
  meta: [
    { 
      name: 'description', 
      content: 'Servicii complete de service auto în București: mecanică auto, tinichigerie, vopsitorie. Echipamente moderne, specialiști autorizați, prețuri competitive.' 
    },
    {
      name: 'keywords',
      content: 'mecanica auto bucuresti, tinichigerie auto, vopsitorie auto, service auto complet, reparatii auto'
    }
  ]
})
</script>
