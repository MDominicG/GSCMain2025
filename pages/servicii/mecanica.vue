<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Mecanică Auto Profesională</h1>
          <p class="text-xl text-blue-100">
            Diagnostic, reparații și întreținere completă pentru toate sistemele mecanice ale autovehiculului
          </p>
        </div>
      </div>
    </section>

    <!-- Services Details -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-secondary-900">Servicii de Mecanică Auto</h2>
            <p class="text-lg text-secondary-700 mb-6">
              Oferim servicii complete de mecanică auto pentru toate mărcile și modelele de autovehicule. 
              Echipa noastră de mecanici autorizați utilizează echipamente moderne de diagnostic și reparații.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Diagnostic Computerizat</h3>
                  <p class="text-secondary-600">Identificare rapidă și precisă a problemelor tehnice</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Reparații Motor</h3>
                  <p class="text-secondary-600">Revizie motor, distribuție, culbutori, chiulasă</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Sistem Transmisie</h3>
                  <p class="text-secondary-600">Cutie de viteze, ambreiaj, planetară, diferențial</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Sistem Frânare</h3>
                  <p class="text-secondary-600">Discuri, plăcuțe, etrieri, servo frână</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Suspensie</h3>
                  <p class="text-secondary-600">Amortizoare, arcuri, silent-blocuri, bielete</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Sistem Răcire</h3>
                  <p class="text-secondary-600">Radiator, pompă apă, termostat, ventilatoare</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card p-8 sticky top-24">
              <h3 class="text-2xl font-bold mb-6 text-center">Solicită Ofertă</h3>
              <div class="space-y-4">
                <a href="tel:+40799777357" class="btn-primary w-full text-center text-lg">
                  <Icon name="mdi:phone" class="mr-2" />
                  Sună: 0799 777 357
                </a>
                <NuxtLink to="/programare" class="btn-outline w-full text-center">
                  <Icon name="mdi:calendar-check" class="mr-2" />
                  Programare Online
                </NuxtLink>
                <a href="mailto:office@gsc-auto.ro" class="btn-secondary w-full text-center">
                  <Icon name="mdi:email" class="mr-2" />
                  Trimite Email
                </a>
              </div>
              <div class="mt-8 pt-8 border-t border-secondary-200">
                <h4 class="font-bold mb-4">Program Service</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-secondary-600">Luni - Vineri:</span>
                    <span class="font-semibold">10:00 - 18:30</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-secondary-600">Sâmbătă - Duminică:</span>
                    <span class="font-semibold">Închis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Maintenance Services -->
        <div class="bg-secondary-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-8 text-center">Întreținere Periodică</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl p-6 text-center">
              <Icon name="mdi:oil" class="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 class="font-bold mb-2">Schimb Ulei & Filtre</h3>
              <p class="text-sm text-secondary-600">Ulei motor, filtru ulei, filtru aer, filtru polen</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center">
              <Icon name="mdi:car-brake-alert" class="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 class="font-bold mb-2">Revizie Frâne</h3>
              <p class="text-sm text-secondary-600">Verificare și înlocuire placuțe, discuri</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center">
              <Icon name="mdi:car-tire-alert" class="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 class="font-bold mb-2">Schimb Anvelope</h3>
              <p class="text-sm text-secondary-600">Sezon, echilibrare, geometrie</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center">
              <Icon name="mdi:car-battery" class="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 class="font-bold mb-2">Baterie & Alternat</h3>
              <p class="text-sm text-secondary-600">Testare, încărcare, înlocuire</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 bg-secondary-900 text-white">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="mdi:certificate-outline" class="text-5xl text-primary-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Mecanici Autorizați</h3>
            <p class="text-secondary-300">Echipă cu experiență și certificări oficiale</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:tools" class="text-5xl text-primary-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Echipamente Moderne</h3>
            <p class="text-secondary-300">Tehnologie de ultimă generație pentru diagnostic</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:shield-check" class="text-5xl text-primary-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Piese Originale</h3>
            <p class="text-secondary-300">Utilizăm doar piese de calitate certificată</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Mecanică Auto București',
  meta: [
    { 
      name: 'description', 
      content: 'Service mecanică auto în București - diagnostic computerizat, reparații motor, transmisie, frâne, suspensie. Mecanici autorizați, echipamente moderne, prețuri competitive.' 
    },
    {
      name: 'keywords',
      content: 'mecanica auto bucuresti, diagnostic auto, reparatii motor, revizie auto, schimb ulei, service auto sector 2'
    }
  ]
})
</script>
