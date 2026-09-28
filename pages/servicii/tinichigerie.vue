<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Tinichigerie Auto Profesională</h1>
          <p class="text-xl text-orange-100">
            Reparații caroserie cu echipamente moderne și specialiști cu experiență
          </p>
        </div>
      </div>
    </section>

    <!-- Services Details -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-secondary-900">Servicii de Tinichigerie Auto</h2>
            <p class="text-lg text-secondary-700 mb-6">
              Atelierul nostru de tinichigerie oferă servicii profesionale pentru repararea și remodelarea 
              caroseriilor vehiculelor. Garantăm că mașina dvs. va arăta impecabil după intervenția noastră.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Îndreptare Tablă</h3>
                  <p class="text-secondary-600">Reparații fără vopsire pentru lovituri ușoare și gropi</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Sudură Caroserie</h3>
                  <p class="text-secondary-600">Sudură MIG/MAG pentru toate tipurile de metal</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Înlocuire Elemente</h3>
                  <p class="text-secondary-600">Aripi, uși, capote, haion - piese originale sau aftermarket</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Reparații Post-Accident</h3>
                  <p class="text-secondary-600">Evaluare daune și reparație completă caroserie</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Geometrie Caroserie</h3>
                <p class="text-secondary-600">Verificare și ajustare dimensiuni conform standard</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-lg mb-1">Pregătire pentru Vopsit</h3>
                  <p class="text-secondary-600">Șlefuire, spacluire, grund pentru finisaj perfect</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card p-8 sticky top-24">
              <h3 class="text-2xl font-bold mb-6 text-center">Evaluare Daune Gratuit</h3>
              <p class="text-center text-secondary-600 mb-6">
                Oferim evaluare gratuită a daunelor și deviz detaliat pentru reparații
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
                <div class="bg-primary-50 rounded-lg p-4">
                  <h4 class="font-bold mb-2 text-primary-900">Partner Asigurări</h4>
                  <p class="text-sm text-primary-800">
                    Suntem unitate reparatoare autorizată pentru toate societățile de asigurare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Process -->
        <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-12 text-center">Procesul de Reparație</h2>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="font-bold mb-2">Evaluare</h3>
              <p class="text-sm text-secondary-600">Inspectare detaliată și identificare daune</p>
            </div>
            <div class="text-center">
              <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="font-bold mb-2">Deviz</h3>
              <p class="text-sm text-secondary-600">Ofertă detaliată cu piese și manoperă</p>
            </div>
            <div class="text-center">
              <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="font-bold mb-2">Reparație</h3>
              <p class="text-sm text-secondary-600">Îndreptare, sudură, înlocuire elemente</p>
            </div>
            <div class="text-center">
              <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 class="font-bold mb-2">Finalizare</h3>
              <p class="text-sm text-secondary-600">Verificare calitate și predare vehicul</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment -->
    <section class="py-20 bg-secondary-900 text-white">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-12 text-center">Echipamente Moderne</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="mdi:hammer-wrench" class="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Bancuri Îndreptare</h3>
            <p class="text-secondary-300">Pentru reparații de precizie ale caroseriei</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:fire" class="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Echipamente Sudură</h3>
            <p class="text-secondary-300">MIG/MAG pentru toate tipurile de metal</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:ruler" class="text-5xl text-orange-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-3">Sisteme Măsurare</h3>
            <p class="text-secondary-300">Verificare geometrie conform standard producător</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Tinichigerie Auto București',
  meta: [
    { 
      name: 'description', 
      content: 'Tinichigerie auto profesională în București - reparații caroserie, îndreptare tablă, sudură, înlocuire elemente. Echipamente moderne, specialiști autorizați.' 
    },
    {
      name: 'keywords',
      content: 'tinichigerie auto bucuresti, reparatii caroserie, indreptare tabla, sudura auto, daune auto, service caroserie'
    }
  ]
})
</script>
