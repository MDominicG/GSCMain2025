<template>
  <div>
    <!-- Hero Section with Key Keywords -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Centru de Daune Allianz-Țiriac - Reparații Rapide în Regie Proprie
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-4">
            Notificare Daună pe Loc • Fără Costuri Ascunse • Reparație în 24-48 ore
          </p>
          <p class="text-lg text-primary-200 mb-8">
            Centru de constatări și unitate reparatoare autorizată Allianz-Țiriac în București, Sector 2. 
            Gestionare completă dosar daune cu zero efort din partea ta.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+40767517505" class="btn-primary text-lg text-center">
              <Icon name="mdi:phone" class="mr-2" />
              Notifică Daună Acum: 0767 517 505
            </a>
            <NuxtLink to="/programare" class="btn-secondary text-lg text-center">
              <Icon name="mdi:calendar-check" class="mr-2" />
              Programare Constatare
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Authority Section -->
    <section class="py-16 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <Icon name="mdi:check-decagram" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-secondary-900 mb-2">Unitate Autorizată Allianz</h3>
              <p class="text-secondary-600">Partner oficial cu acreditare completă pentru notificare și reparații</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <Icon name="mdi:clock-fast" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-secondary-900 mb-2">Reparație Rapidă în Regie Proprie</h3>
              <p class="text-secondary-600">Reparații completate în 24-48 ore cu echipamente moderne și specialiști autorizați</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <Icon name="mdi:zero-md" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-secondary-900 mb-2">Fără Costuri Ascunse</h3>
              <p class="text-secondary-600">Transparență totală - toate costurile sunt acoperite de Allianz conform polițelor active</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Flow Section -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <h2 class="text-4xl font-bold text-center mb-12 text-secondary-900">
          Procesul de Gestionare Daune Allianz-Țiriac
        </h2>
        
        <div class="grid md:grid-cols-5 gap-6 mb-12">
          <div class="bg-white rounded-xl p-6 text-center card">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 class="font-bold text-lg mb-2">Notificare pe Loc</h3>
            <p class="text-secondary-600 text-sm">Apelează 0767 517 505 și notifică daună direct la GSC Auto</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 class="font-bold text-lg mb-2">Evaluare Daune</h3>
            <p class="text-secondary-600 text-sm">Constatare profesională și deschidere dosar cu Allianz-Țiriac</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 class="font-bold text-lg mb-2">Gestionare Dosar</h3>
            <p class="text-secondary-600 text-sm">Noi comunicăm cu Allianz și urmărim aprobarea dosarului</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 class="font-bold text-lg mb-2">Reparație Rapidă</h3>
            <p class="text-secondary-600 text-sm">Reparații în regie proprie finalizate în 24-48 ore</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card">
            <div class="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              5
            </div>
            <h3 class="font-bold text-lg mb-2">Predare Vehicul</h3>
            <p class="text-secondary-600 text-sm">Primești mașina reparată conform standard Allianz</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Included -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-secondary-900 text-center">
          Servicii Complete Daune Allianz-Țiriac
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-6 text-secondary-900">Notificare și Constatare</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Notificare Daună pe Loc</strong>
                  <span class="text-secondary-600">Notificării imediate la Allianz-Țiriac prin GSC Auto</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Constatare Profesională</strong>
                  <span class="text-secondary-600">Evaluare completă a daunelor cu echipament modern</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Deschidere Dosar Rapid</strong>
                  <span class="text-secondary-600">Dosar deschis în maxim 2 ore de la constatare</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Fără Costuri pentru Client</strong>
                  <span class="text-secondary-600">Toate costurile acoperite de asigurare</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-6 text-secondary-900">Reparații în Regie Proprie</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Mecanică Auto Completă</strong>
                  <span class="text-secondary-600">Reparații motor, transmisie, suspensie, sistem frânare</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Tinichigerie Profesională</strong>
                  <span class="text-secondary-600">Îndreptare tablă, sudură, înlocuire elemente caroserie</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Vopsitorie în Cabină Modernă</strong>
                  <span class="text-secondary-600">Vopsire profesională cu alegere precisă a nuanței</span>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:check-circle" class="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong class="block">Reparație Rapidă 24-48 Ore</strong>
                  <span class="text-secondary-600">Termene respectate conform acordului inițial</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Towing Services 24/7 -->
    <section class="py-20 bg-primary-50 border-t-4 border-primary-600">
      <div class="section-container">
        <div class="flex justify-center mb-8">
          <Icon name="mdi:tow-truck" class="text-9xl text-primary-600 opacity-20" />
        </div>
        <h2 class="text-4xl font-bold mb-8 text-gray-900">Tractare Auto 24/7</h2>
        <p class="text-xl text-gray-600 mb-8">
          Nu ți-e frică dacă accidentul se întâmplă seara, noaptea sau weekend. Serviciul nostru de tractare este disponibil 24 de ore pe zi, 7 zile pe săptămână.
        </p>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:clock-24" class="text-5xl text-primary-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Disponibil 24/7</h3>
            <p class="text-gray-600">Orice zi, orice oră</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:timer-sand" class="text-5xl text-primary-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Sub 30 Minute</h3>
            <p class="text-gray-600">Răspunsul echipei în bucuresti</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:tag-off" class="text-5xl text-primary-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Fără Costuri Ascunse</h3>
            <p class="text-gray-600">Acoperit de asigurare</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:shield" class="text-5xl text-primary-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Transport Sigur</h3>
            <p class="text-gray-600">Echipament profesional</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Replacement Vehicle Conditions -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-8 text-white">
          ÎN CE CONDIȚII POȚI BENEFICIA DE MAȘINĂ DE ÎNLOCUIRE
        </h2>
        <p class="text-lg text-gray-300 mb-8 leading-relaxed">
          Se acordă mașină de înlocuire în baza legislației în vigoare, conform articolului de Lege nr. 132/2017 și modificărilor ulterioare privind asigurarea obligatorie de răspundere civilă auto pentru prejudicii produse terților:
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <Icon name="mdi:file-document-outline" class="text-orange-500 text-2xl mr-3 flex-shrink-0" />
                <div>
                  <p class="font-bold">Norma nr. 18/2022</p>
                  <p class="text-sm text-gray-400">Vezi link</p>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:file-document-outline" class="text-orange-500 text-2xl mr-3 flex-shrink-0" />
                <div>
                  <p class="font-bold">Hotărârea nr. 298 din 5 aprilie 2023</p>
                  <p class="text-sm text-gray-400">Vezi link</p>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:file-document-outline" class="text-orange-500 text-2xl mr-3 flex-shrink-0" />
                <div>
                  <p class="font-bold">Hotărârea nr. 1326 din 28.12.2023</p>
                  <p class="text-sm text-gray-400">Vezi link</p>
                </div>
              </li>
            </ul>
            <div class="mt-6 text-gray-300 text-sm space-y-3">
              <p><strong>1. Mașini indisponibile tehnic în urma accidentului:</strong> în termen de 30 de zile calendaristice de la data emiterii Notei de Constatare de către Asigurator sau a Autorizației de reparație emisă de către Poliție, fără a se depăși într-o timp efectiv de reparație;</p>
              <p><strong>2. Mașini declarate Daună Totală:</strong> cu mențiunea că acestea să fie și indisponibile tehnic, fără ca suma totală a încheierilor decontate de către Asigurator să depășească valoarea de 25% din valoarea de piață a mașinii asigurate.</p>
            </div>
          </div>
          <div class="bg-gray-800 border border-orange-500 rounded-lg p-6">
            <div class="flex items-start mb-4">
              <div class="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">i</div>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Pentru vehiculele care nu mai pot fi reparate și sunt clasificate ca daună totală economic, despăgubirile acoperi perioada dintre data constatării avarorilor și data înaintării ofertei de despăgubire, în conformitate cu termenele prevăzute de Legea nr. 132/2017, cu modificările și completările ulterioare.
            </p>
            <p class="text-gray-300 leading-relaxed mt-4">
              În acest caz, valoarea despăgubirii pentru acoperierea costurilor de înlocuire temporară a vehiculului avariat nu poate depăși 25% din valoarea de piață a acestuia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="section-container max-w-3xl">
        <h2 class="text-4xl font-bold mb-12 text-center text-secondary-900">
          Întrebări Frecvente - Daune Allianz-Țiriac
        </h2>
        
        <div class="space-y-4">
          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Cât costă notificarea daunei la GSC Auto?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-secondary-700">
              Notificarea daunei este complet gratuită. Nu sunt costuri ascunse. Toate costurile sunt acoperite de polița RCA a celui vinovat, conform clauzelor din poliță.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Care sunt documentele necesare pentru notificare?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-secondary-700">
              Pentru notificare daună la Allianz-Țiriac ai nevoie de: acte mașină, poliță RCA, act de identitate, și constatare amiabilă (dacă există). Noi te ajutăm cu toate demersurile.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Cât timp durează o reparație la GSC Auto?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-secondary-700">
              Reparații simple se finalizează în 24 ore, reparații mai complexe în maxim 48-72 de ore. Termenele sunt stabilite la intrare în service și respectate întocmai.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Pot fi în apropiere în timp ce mașina se repară?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-secondary-700">
              Da! Aveți posibilitatea de a fi în service-ul nostru și de a urmări reparația. De asemenea, oferim mașini de înlocuire (rent-a-car) pe durata reparației.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Ce se întâmplă dacă daunele depășesc limita poliței?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-secondary-700">
              Comunicăm imediat cu Allianz-Țiriac pentru o nouă evaluare. Dacă sunt costuri suplimentare, le discutăm cu voi înainte de a continua reparația.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="section-container text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Centru de Daune Allianz-Țiriac în București
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
          Notificare pe loc, reparație rapidă în regie proprie, fără costuri ascunse.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+40767517505" class="bg-white text-primary-700 hover:bg-primary-50 font-semibold text-lg px-8 py-4 rounded-lg transition inline-flex items-center justify-center">
            <Icon name="mdi:phone" class="mr-2" />
            Sună: 0767 517 505
          </a>
          <NuxtLink to="/programare" class="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
            <Icon name="mdi:calendar-check" class="mr-2" />
            Programare Online
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Centru de Daune Allianz-Țiriac București | Reparații Rapide în Regie Proprie',
  meta: [
    { 
      name: 'description', 
      content: 'Centru de daune Allianz-Țiriac în București, Sector 2. Notificare pe loc, reparații rapide în regie proprie 24-48 ore, fără costuri ascunse, tractare 24/7.' 
    },
    {
      name: 'keywords',
      content: 'centru de daune allianz, daune allianz bucuresti, notificare dauna pe loc, reparatie rapida allianz, reparatie in regie proprie, daune auto allianz tiriac, tractare 24/7, centru daune bucuresti'
    },
    { property: 'og:title', content: 'Centru de Daune Allianz-Țiriac - Reparații Rapide în Regie Proprie' },
    { property: 'og:description', content: 'Notificare pe loc, reparații rapide în regie proprie, fără costuri ascunse. Tractare 24/7.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: 'GSC Auto - Centru Daune Allianz-Țiriac',
        description: 'Centru de notificator și reparator autorizat Allianz-Țiriac cu reparații rapide în regie proprie',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Strada Ritmului, nr. 8',
          addressLocality: 'București',
          addressRegion: 'Sector 2',
          postalCode: '021675',
          addressCountry: 'RO'
        },
        telephone: '+40767517505',
        email: 'office@gsc-auto.ro',
        url: 'https://gsc-auto.ro/daune-auto/allianz',
        openingHours: 'Mo-Fr 10:00-18:30',
        areaServed: {
          '@type': 'City',
          name: 'București'
        },
        priceRange: 'FREE',
        knowsAbout: 'Notificare daune, reparații auto, tinichigerie, vopsitorie, mecanică'
      })
    }
  ]
})
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
