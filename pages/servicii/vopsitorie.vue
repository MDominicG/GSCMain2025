<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Vopsitorie Auto Profesională</h1>
          <p class="text-xl text-purple-100">
            Vopsire de calitate superioară cu alegere precisă a nuanței și durabilitate garantată
          </p>
        </div>
      </div>
    </section>

    <!-- Services Details -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-secondary-900">Servicii de Vopsitorie Auto</h2>
            <p class="text-lg text-secondary-700 mb-6">
              Vopsitoria noastră oferă servicii specializate de vopsire și retușare auto pentru a vă asigura 
              că mașina dvs. arată mereu impecabil. Cu tehnici avansate și vopsele de înaltă calitate, 
              vă redăm strălucirea inițială a vehiculului.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Vopsire Completă</h3>
                  <p class="text-secondary-600">Vopsire integrală vehicul în cabină modernă</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Vopsire Parțială</h3>
                  <p class="text-secondary-600">Reparație zone afectate cu racordare perfectă</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Alegere Nuanță</h3>
                  <p class="text-secondary-600">Sistem computerizat pentru potrivire exactă culoare</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Pregătire Suprafață</h3>
                  <p class="text-secondary-600">Șlefuire, spacluire, aplicare grund protector</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Lac Protector</h3>
                  <p class="text-secondary-600">Straturi multiple de lac UV pentru durabilitate</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Polizare Finală</h3>
                  <p class="text-secondary-600">Finisaj lucios și protecție de lungă durată</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card p-8 sticky top-24">
              <h3 class="text-2xl font-bold mb-6 text-center">Solicită Ofertă Vopsire</h3>
              <p class="text-center text-secondary-600 mb-6">
                Testare culoare gratuită și consultanță pentru alegerea celei mai bune soluții
              </p>
              <div class="space-y-4">
                <a href="tel:+40799777357" class="btn-primary w-full text-center text-lg">
                  <Icon name="mdi:phone" class="mr-2" />
                  Sună: 0799 777 357
                </a>
                <NuxtLink to="/programare" class="btn-outline w-full text-center">
                  <Icon name="mdi:calendar-check" class="mr-2" />
                  Programare Evaluare
                </NuxtLink>
                <a href="mailto:office@gsc-auto.ro" class="btn-secondary w-full text-center">
                  <Icon name="mdi:email" class="mr-2" />
                  Trimite Email
                </a>
              </div>
              <div class="mt-8 pt-8 border-t border-secondary-200">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <Icon name="mdi:shield-check" class="text-purple-600 mr-3" />
                    <span class="text-sm">Garanție lucrări vopsitorie</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:water-check" class="text-purple-600 mr-3" />
                    <span class="text-sm">Vopsele rezistente la UV</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:palette" class="text-purple-600 mr-3" />
                    <span class="text-sm">Mii de nuanțe disponibile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Paint Process -->
        <div class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-12 text-center">Procesul de Vopsire</h2>
          <div class="grid md:grid-cols-5 gap-6">
            <div class="text-center">
              <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="font-bold mb-2">Pregătire</h3>
              <p class="text-sm text-secondary-600">Demontare elemente, protecție zone</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="font-bold mb-2">Șlefuire</h3>
              <p class="text-sm text-secondary-600">Pregătire suprafață pentru vopsire</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="font-bold mb-2">Grund</h3>
              <p class="text-sm text-secondary-600">Aplicare grund protector anticoroz</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 class="font-bold mb-2">Vopsire</h3>
              <p class="text-sm text-secondary-600">Aplicare straturi culoare + lac</p>
            </div>
            <div class="text-center">
              <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 class="font-bold mb-2">Finisare</h3>
              <p class="text-sm text-secondary-600">Polizare și montare elemente</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Paint Booth Features -->
    <section class="py-20 bg-secondary-900 text-white">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-12 text-center">Cabină de Vopsit Modernă</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="mdi:air-filter" class="text-5xl text-purple-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Filtrare Aer</h3>
            <p class="text-secondary-300">Sistem modern de filtrare pentru finisaj perfect</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:thermometer" class="text-5xl text-purple-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Control Temperatură</h3>
            <p class="text-secondary-300">Condiții optime pentru uscare vopsea</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:lightbulb-on" class="text-5xl text-purple-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Iluminare Profesională</h3>
            <p class="text-secondary-300">LED pentru vizualizare perfectă a nuanței</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Vopsitorie Auto București',
  meta: [
    { 
      name: 'description', 
      content: 'Vopsitorie auto profesională București - cabină modernă, alegere nuanță computerizată, vopsele premium, garanție durabilitate. Vopsire completă sau parțială.' 
    },
    {
      name: 'keywords',
      content: 'vopsitorie auto bucuresti, vopsire auto, cabina vopsit, retusare auto, vopsea auto, lac protector'
    }
  ]
})
</script>
