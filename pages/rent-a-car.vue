<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Rent-a-Car - Lipsă de Folosință</h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-4">
            Mașini de înlocuire pe perioada reparației
          </p>
          <p class="text-lg text-primary-200">
            În cazul unui accident auto, îți punem la dispoziție un vehicul de înlocuire pe toată perioada reparației vehiculului tău
          </p>
        </div>
      </div>
    </section>

    <!-- Vehicle Classes -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Clasele de Vehicule Disponibile</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Alegem vehiculul de înlocuire în funcție de categoria mașinii tale avariate
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Confort -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/confort.png" 
                alt="Confort class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">Confort</h3>
              <p class="text-secondary-600 mb-4">
                Sedanuri și limuzine de clasă premium pentru confort maxim
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Interior premium
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Sistem navigație
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Dotări complete
                </li>
              </ul>
            </div>
          </div>

          <!-- Compact -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/compact.png" 
                alt="Compact class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">Compact</h3>
              <p class="text-secondary-600 mb-4">
                Mașini compacte perfecte pentru oraș și consum redus
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Economic la combustibil
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Ușor de parcat
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Ideal pentru oraș
                </li>
              </ul>
            </div>
          </div>

          <!-- Hybrid -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/hybrid.png" 
                alt="Hybrid class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">Hybrid</h3>
              <p class="text-secondary-600 mb-4">
                Tehnologie eco-friendly pentru consum minim de carburant
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Consum foarte redus
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Emisii scăzute
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Tehnologie modernă
                </li>
              </ul>
            </div>
          </div>

          <!-- Sport -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/sport.png" 
                alt="Sport class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">Sport</h3>
              <p class="text-secondary-600 mb-4">
                Mașini sport pentru cei care apreciază performanța
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Performanță ridicată
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Design dinamic
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Experiență premium
                </li>
              </ul>
            </div>
          </div>

          <!-- Mini -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/mini.png" 
                alt="Mini class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">Mini</h3>
              <p class="text-secondary-600 mb-4">
                Mașini mici, ideale pentru mobilitate urbană
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Foarte economic
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Parcare ușoară
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Perfect pentru oraș
                </li>
              </ul>
            </div>
          </div>

          <!-- SUV -->
          <div class="card card-hover group">
            <div class="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/vehicles/suv.png" 
                alt="SUV class vehicle" 
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-secondary-900">SUV</h3>
              <p class="text-secondary-600 mb-4">
                SUV-uri spațioase pentru familia ta
              </p>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Spațiu generos
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Poziție înaltă
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-500 mr-2" />
                  Versatilitate maximă
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Cum Funcționează?</h2>
          <p class="text-xl text-secondary-600">Procesul simplu pentru obținerea mașinii de înlocuire</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              1
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Notificare Daună</h3>
            <p class="text-secondary-600">Contactează-ne pentru notificarea daunei și deschiderea dosarului</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              2
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Evaluare Clasă</h3>
            <p class="text-secondary-600">Stabilim clasa vehiculului de înlocuire potrivită pentru tine</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              3
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Predare Vehicul</h3>
            <p class="text-secondary-600">Îți predăm mașina de înlocuire pregătită și completă</p>
          </div>
          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              4
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Reparație & Returnare</h3>
            <p class="text-secondary-600">După finalizarea reparației, returnezi mașina de înlocuire</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6 text-secondary-900">Avantajele Serviciului Rent-a-Car</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:check-decagram" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Mobilitate Continuă</h3>
                  <p class="text-secondary-600">Nu rămâi fără mașină pe perioada reparației vehiculului tău</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-decagram" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Vehicule Moderne</h3>
                  <p class="text-secondary-600">Flota nouă cu toate dotările necesare pentru confortul tău</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-decagram" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Acoperire Asigurare</h3>
                  <p class="text-secondary-600">Costul lipsă de folosință acoperit de societatea de asigurare</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-decagram" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Proces Simplificat</h3>
                  <p class="text-secondary-600">Noi ne ocupăm de toate demersurile cu asigurarea</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-decagram" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-lg mb-1">Flexibilitate</h3>
                  <p class="text-secondary-600">Vehicul disponibil pe toată durata reparației</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card p-8 bg-gradient-to-br from-primary-50 to-primary-100">
            <h3 class="text-2xl font-bold mb-6 text-center text-secondary-900">Solicită Vehicul de Înlocuire</h3>
            <div class="space-y-4">
              <a href="tel:+40767517505" class="btn-primary w-full text-center text-lg">
                <Icon name="mdi:phone" class="mr-2" />
                Apelează: 0767 517 505
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
            <div class="mt-6 pt-6 border-t border-primary-200">
              <div class="bg-blue-50 rounded-lg p-4">
                <div class="flex items-start">
                  <Icon name="mdi:information" class="text-blue-600 text-2xl mr-3 flex-shrink-0" />
                  <div class="text-sm text-blue-900">
                    <strong class="block mb-1">Informație Importantă</strong>
                    Vehiculul de înlocuire este acoperit de societatea de asigurare în limita 
                    clauzei de lipsă de folosință din polița RCA a celui vinovat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center text-secondary-900">Întrebări Frecvente</h2>
          
          <div class="space-y-4">
            <details class="card p-6 group">
              <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
                Cine plătește pentru mașina de înlocuire?
                <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
              </summary>
              <p class="mt-4 text-secondary-700">
                Costul mașinii de înlocuire este acoperit de societatea de asigurare RCA a celui vinovat, 
                în limita clauzei de lipsă de folosință din polița acestuia.
              </p>
            </details>

            <details class="card p-6 group">
              <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
                Cât timp pot folosi mașina de înlocuire?
                <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
              </summary>
              <p class="mt-4 text-secondary-700">
                Pe toată perioada reparației vehiculului tău, conform timpilor de reparație agreați cu societatea de asigurare.
              </p>
            </details>

            <details class="card p-6 group">
              <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
                Ce documente sunt necesare?
                <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
              </summary>
              <p class="mt-4 text-secondary-700">
                Permis de conducere valabil, carte de identitate și dovada dosarului de daună deschis.
              </p>
            </details>

            <details class="card p-6 group">
              <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
                Pot alege clasa de vehicul?
                <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
              </summary>
              <p class="mt-4 text-secondary-700">
                Clasa vehiculului de înlocuire se stabilește în funcție de categoria mașinii tale avariate 
                și de limitele din polița RCA a celui vinovat.
              </p>
            </details>

            <details class="card p-6 group">
              <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
                Sunt incluse combustibilul și asigurarea?
                <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
              </summary>
              <p class="mt-4 text-secondary-700">
                Vehiculul este predat cu asigurare RCA și CASCO. Combustibilul este în responsabilitatea ta, 
                iar mașina se returnează cu nivelul de combustibil cu care a fost preluată.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="section-container text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ai nevoie de o mașină de înlocuire?</h2>
        <p class="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
          Contactează-ne acum și asigură-te că rămâi mobil pe toată perioada reparației
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+40767517505" class="bg-white text-primary-700 hover:bg-primary-50 font-semibold text-lg px-8 py-4 rounded-lg transition">
            <Icon name="mdi:phone" class="mr-2" />
            Sună: 0767 517 505
          </a>
          <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
            <Icon name="mdi:email" class="mr-2" />
            Formular Contact
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Rent-a-Car - Lipsă de Folosință',
  meta: [
    { 
      name: 'description', 
      content: 'Serviciu rent-a-car pentru lipsă de folosință - mașini de înlocuire pe perioada reparației. Clase disponibile: Confort, Compact, Hybrid, Sport, Mini, SUV. București.' 
    },
    {
      name: 'keywords',
      content: 'rent a car bucuresti, lipsa de folosinta, masina inlocuire, daune auto, vehicul inlocuire, confort, compact, hybrid, sport, suv'
    }
  ]
})

const handleImageError = (event) => {
  // Fallback to a placeholder icon if image fails to load
  event.target.style.display = 'none'
}
</script>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}

details[open] summary ~ * {
  animation: slideDown 0.3s ease-in-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
