<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Alătură-te Echipei
            </h1>
            <p class="text-xl text-primary-100 mb-8">
              Suntem în căutare de profesioniști pasionați de mecanică auto și service de calitate.
            </p>
            <p class="text-lg text-primary-200 mb-8 leading-relaxed">
              Povestea GSC Auto a început cu pasiunea pentru masini și experiență în domeniu. Dacă și tu îți petreci viața în lume auto, dacă ți-e drag să lucrezi cu oameni și să fii parte a unei echipe dedicate, atunci ai găsit locul potrivit pentru a te dezvolta și crește profesional.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="mailto:office@gsc-auto.ro" class="btn-primary text-lg inline-flex items-center justify-center">
                <Icon name="mdi:email" class="mr-2" />
                Trimite CV-ul Tău
              </a>
              <a href="tel:+40799777357" class="btn-secondary text-lg inline-flex items-center justify-center">
                <Icon name="mdi:phone" class="mr-2" />
                Sună-ne: 0799 777 357
              </a>
            </div>
          </div>
          <div>
            <img src="/logos/new-logo.png" alt="Garage tools and hands" class="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          De Ce Să Te Alături GSC Auto?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card p-8">
            <Icon name="mdi:heart" class="text-5xl text-primary-600 mb-4" />
            <h3 class="text-2xl font-bold mb-4">Pasiune pentru Meserie</h3>
            <p class="text-gray-600">
              Lucrezi în echipa unei companii care iubește ceea ce face. Pasiunea pentru mecanică auto și service de calitate este DNA-ul nostru.
            </p>
          </div>
          <div class="card p-8">
            <Icon name="mdi:briefcase" class="text-5xl text-primary-600 mb-4" />
            <h3 class="text-2xl font-bold mb-4">Dezvoltare Profesională</h3>
            <p class="text-gray-600">
              Oferim oportunități de creștere continuă. Antrenament, cursuri de specialitate și promovare pe merit.
            </p>
          </div>
          <div class="card p-8">
            <Icon name="mdi:people" class="text-5xl text-primary-600 mb-4" />
            <h3 class="text-2xl font-bold mb-4">Echipa Unită</h3>
            <p class="text-gray-600">
              Lucrezi alături de profesionisti dedicati cu spirit de echipă, integritate și responsabilitate.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Available Positions -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          Posturi Disponibile
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Mecanic Auto -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <Icon name="mdi:wrench" class="text-4xl text-primary-600 mr-4" />
              <h3 class="text-2xl font-bold">Mecanic Auto</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Suntem în căutare de mecanici cu experiență și pasiune pentru a lucra la reparații și mentenanță auto.
            </p>
            <div class="space-y-2 mb-6">
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Experiență:</strong> Minim 1 an în domeniu</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Abilități:</strong> Reparații motor, transmisie, suspensie</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Permis:</strong> Minim categoria B</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Atribute:</strong> Responsabilitate, spirit de echipă, calitate</span>
              </p>
            </div>
            <a href="mailto:office@gsc-auto.ro?subject=Aplicatie%20Mecanic%20Auto" class="btn-primary inline-flex items-center">
              <Icon name="mdi:email" class="mr-2" />
              Aplică Acum
            </a>
          </div>

          <!-- Tinichigiu -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <Icon name="mdi:hammer" class="text-4xl text-primary-600 mr-4" />
              <h3 class="text-2xl font-bold">Tinichigiu</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Căutăm tinichigii cu experiență pentru reparații de caroserie și lucrări de precizie.
            </p>
            <div class="space-y-2 mb-6">
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Experiență:</strong> Minim 2 ani în tinichigerie auto</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Abilități:</strong> Îndreptare tablă, sudură MIG, solzi</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Permis:</strong> Minim categoria B</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Atribute:</strong> Precizie, atenție la detalii, responsabilitate</span>
              </p>
            </div>
            <a href="mailto:office@gsc-auto.ro?subject=Aplicatie%20Tinichigiu" class="btn-primary inline-flex items-center">
              <Icon name="mdi:email" class="mr-2" />
              Aplică Acum
            </a>
          </div>

          <!-- Vopsitor -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <Icon name="mdi:palette" class="text-4xl text-primary-600 mr-4" />
              <h3 class="text-2xl font-bold">Vopsitor Auto</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Căutăm vopsitori calificați care să muncească în cabine profesionale cu echipament modern.
            </p>
            <div class="space-y-2 mb-6">
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Experiență:</strong> Minim 2 ani în domeniu</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Abilități:</strong> Pregătire, vopsire, finisaje în cabină</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Permis:</strong> Minim categoria B</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Atribute:</strong> Calitate, precizie, siguranță</span>
              </p>
            </div>
            <a href="mailto:office@gsc-auto.ro?subject=Aplicatie%20Vopsitor%20Auto" class="btn-primary inline-flex items-center">
              <Icon name="mdi:email" class="mr-2" />
              Aplică Acum
            </a>
          </div>

          <!-- Administrator Service -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <Icon name="mdi:clipboard-list" class="text-4xl text-primary-600 mr-4" />
              <h3 class="text-2xl font-bold">Administrator Service</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Căutăm administrator pentru coordonarea operațiunilor și comunicarea cu clienții și asigurări.
            </p>
            <div class="space-y-2 mb-6">
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Experiență:</strong> Minim 1 an în administrare service auto</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Abilități:</strong> Microsoft Office, comunicare, organizare</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Limba:</strong> Română și Engleză fluent</span>
              </p>
              <p class="flex items-start">
                <Icon name="mdi:check" class="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Atribute:</strong> Profesionalism, atentie la detalii, amabilitate</span>
              </p>
            </div>
            <a href="mailto:office@gsc-auto.ro?subject=Aplicatie%20Administrator%20Service" class="btn-primary inline-flex items-center">
              <Icon name="mdi:email" class="mr-2" />
              Aplică Acum
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          Cerințe Generale
        </h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="card p-6">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3" />
                Cunoștințe și Experiență
              </h3>
              <p class="text-gray-600 ml-9">
                Experiență demonstrabilă în domeniu sau diploma de specialitate. Cunoașterea metodelor de reparație specifice meseriei și a normativelor constructorului.
              </p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3" />
                Abilități Tehnice
              </h3>
              <p class="text-gray-600 ml-9">
                Cunoștințe solide ale instrumentelor și echipamentelor specifice. Capacitate de a lucra cu precizie și atenție la detalii.
              </p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3" />
                Atribute Personale
              </h3>
              <p class="text-gray-600 ml-9">
                Pronunțat simț al răspunderii, spirit de echipă, corectitudine și integritate. Respectarea normelor de timp și a tehnologiilor impuse.
              </p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3" />
                Condiții de Lucru
              </h3>
              <p class="text-gray-600 ml-9">
                Menținerea curățeniei și ordinii la postul de lucru. Respectarea standardelor de siguranță și sănătate ocupațională.
              </p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3" />
                Calitate și Control
              </h3>
              <p class="text-gray-600 ml-9">
                Efectuarea controlului final la terminarea ciclului de reparații. Asigurarea calității lucrarilor și satisfacției clienților.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Apply -->
    <section class="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div class="section-container max-w-2xl">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          Cum Aplici?
        </h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg mr-4">
              1
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Pregătește CV-ul</h3>
              <p class="text-gray-600">
                Asigură-te că CV-ul tău incluie experiența relevantă, calificările și certificatele profesionale.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg mr-4">
              2
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Trimite-ne CV-ul</h3>
              <p class="text-gray-600">
                Trimite CV-ul direct la <a href="mailto:office@gsc-auto.ro" class="text-primary-600 font-semibold hover:underline">office@gsc-auto.ro</a> cu poztura la care aplici.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg mr-4">
              3
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Evaluare și Interviu</h3>
              <p class="text-gray-600">
                Vom evalua profilul tău și, dacă se potrivește cu cerințele noastre, te vom contacta pentru un interviu.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg mr-4">
              4
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Bun Venit la Echipă!</h3>
              <p class="text-gray-600">
                După evaluare pozitivă, vei deveni parte a echipei GSC Auto și vei incepe o nouă aventură profesională.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-primary-300">
          <a href="mailto:office@gsc-auto.ro" class="btn-primary w-full text-lg text-center py-4">
            <Icon name="mdi:email" class="mr-2" />
            Trimite CV-ul Tău Acum
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          Întrebări?
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div class="card p-8 text-center">
            <Icon name="mdi:email" class="text-5xl text-primary-600 mx-auto mb-4" />
            <h3 class="font-bold mb-2">Email</h3>
            <a href="mailto:office@gsc-auto.ro" class="text-primary-600 hover:underline font-semibold">
              office@gsc-auto.ro
            </a>
          </div>

          <div class="card p-8 text-center">
            <Icon name="mdi:phone" class="text-5xl text-primary-600 mx-auto mb-4" />
            <h3 class="font-bold mb-2">Telefon</h3>
            <a href="tel:+40799777357" class="text-primary-600 hover:underline font-semibold">
              0799 777 357
            </a>
          </div>

          <div class="card p-8 text-center">
            <Icon name="mdi:map-marker" class="text-5xl text-primary-600 mx-auto mb-4" />
            <h3 class="font-bold mb-2">Locație</h3>
            <p class="text-gray-600">
              Strada Ritmului, nr. 8<br />
              Sector 2, București
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Cariere GSC Auto | Alătură-te Echipei Noastre',
  meta: [
    { 
      name: 'description', 
      content: 'Alătură-te echipei GSC Auto! Suntem în căutare de mecanici, tinichigii, vopsitori și administratori service. Ofere oportunități de dezvoltare profesională și lucru în echipă dedicată.' 
    },
    {
      name: 'keywords',
      content: 'cariere auto, mecanici auto, tinichigiu, vopsitor auto, locuri de munca service auto, GSC Auto cariere'
    },
    { property: 'og:title', content: 'Cariere la GSC Auto - Alătură-te Echipei Noastre' },
    { property: 'og:description', content: 'Oferte de locuri de munca la GSC Auto: mecanici, tinichigii, vopsitori, administratori.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
</style>
