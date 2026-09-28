<template>
  <div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Constatări / reparații daune {{ insuranceName }} - Reparații Rapide și Notificare pe Loc
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-4">
            Centru Notificator & Reparator Autorizat {{ insuranceName }} • Reparație într-un singur loc • Fără Costuri Ascunse
          </p>
          <p class="text-lg text-blue-200 mb-8">
            Gestionare completă dosar daune {{ insuranceName }} cu notificare pe loc. Zero efort din partea ta.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+40799777357" class="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-lg px-8 py-4 rounded-lg transition inline-flex items-center justify-center">
              <Icon name="mdi:phone" class="mr-2" />
              Notifică Daună: 0799 777 357
            </a>
          </div>
        </div>
      </div>
    </section>

        <!-- Trust & Authority -->
    <section class="py-16 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-5">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Icon name="mdi:shield-check" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Unitate reparatoare agreata de {{ insuranceName }}</h3>
              <p class="text-gray-600">Acreditare completa de catre societatea de asigurari pentru reparatii complete, dar si pentru decontare directa.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Icon name="mdi:face-agent" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Suport</h3>
              <p class="text-gray-600">Pe tot parcursul reparatiei, va tinem la curent cu toate demersurile (Constatare, Reconstatare, Piese, Stadiul reparatiei etc.)</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Icon name="mdi:shield-check" class="text-2xl" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Transparență 100%</h3>
              <p class="text-gray-600">Fără costuri ascunse - toate costurile acoperite de asigurare</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 bg-grey">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6">Unitate reparatoare agreata de {{ insuranceName }}</h2>
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-secondary-700 mb-6">
                General Services Company 97 S.R.L este o unitate reparatoare agreata de catre {{ insuranceName }}. 
                Initiem / Gestionam dosarele de dauna ale pagubitilor, cu notificare pe loc, fara costuri ascunse si cu reparații complete în service autorizat.
                Ne ocupam de tot procesul, de la constatare până la predarea mașinii reparate, astfel încât tu să nu ai niciun stres.
              </p>
              
              <h3 class="text-2xl font-bold mb-4 mt-8">Servicii Oferite</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon name="mdi:check-decagram" class="text-2xl text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Notificare daună:</strong> In baza unei programari de constatare, pregaim toate documentele si le transmitem catre {{ insuranceName }}</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-decagram" class="text-2xl text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Evaluare daune:</strong> Constatam profesional toate daunele produse autoturismului dvs. si notificam asiguratorul cu solutiile tehnice
                  impuse de catre producator</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-decagram" class="text-2xl text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Gestionare dosar:</strong> Comunicare cu asigurarea și urmărire dosar până la aprobare, astfel dumneavoastra sa nu aveti
                    nici o problema</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-decagram" class="text-2xl text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Reparații complete:</strong> Tinichigerie, vopsitorie, mecanică într-un singur loc, intr-un service autorizat</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-decagram" class="text-2xl text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Finalizare:</strong> Predare vehicul reparat conform standardelor invigoare</span>
                </li>
              </ul>

              <h3 class="text-2xl font-bold mb-4 mt-8">De Ce Să Ne Alegi?</h3>
              <div class="grid grid-cols-1 gap-4">
                <div class="bg-primary-50 rounded-lg p-4">
                  <h4 class="font-bold mb-2 flex items-center">
                    <Icon name="mdi:shield-check" class="text-primary-600 mr-2" />
                    Unitate Autorizată R.A.R si agreata de {{ insuranceName }}
                  </h4>
                  <p class="text-sm text-secondary-700">General Services Company 97 S.R.L este un service auto autorizat R.A.R pentru toate lucrarile 
                    necesare reparatiei autoturismului dvs.</p>
                </div>
                <div class="bg-primary-50 rounded-lg p-4">
                  <h4 class="font-bold mb-2 flex items-center">
                    <Icon name="mdi:clock-fast" class="text-primary-600 mr-2" />
                    Procesare Rapidă
                  </h4>
                  <p class="text-sm text-secondary-700">Incercam sa procesam dosarul catre asigurator in termen, iar reparatia sa fie cat mai rapidă.</p>
                </div>
                <div class="bg-primary-50 rounded-lg p-4">
                  <h4 class="font-bold mb-2 flex items-center">
                    <Icon name="mdi:account-tie" class="text-primary-600 mr-2" />
                    Fără Efort
                  </h4>
                  <p class="text-sm text-secondary-700">Preluăm toate demersurile cu societatea de asigurare</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card p-8 lg:sticky lg:top-24">
              <h3 class="text-2xl font-bold mb-6 text-center">Notifică Dauna {{ insuranceName }}</h3>
              <p class="text-center text-secondary-600 mb-6">
                Ai suferit un accident? Contacteaza-ne pentru a stabilirea unei constatări rapide și gestionarea completă a dosarului tău de daună {{ insuranceName }}.
              </p>
                <a href="tel:+40799777357" class="btn-outline w-full text-center">
                  <Icon name="mdi:phone" class="mr-2" />
                  Contacteaza-ne: 0799 777 357
                </a>

              <div class="mt-8 pt-8 border-t border-secondary-200">
                <h4 class="font-bold mb-4 text-center">Program Constatări</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-secondary-600">Luni - Vineri:</span>
                    <span class="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-secondary-600">Sâmbătă - Duminică:</span>
                    <span class="font-semibold">Închis</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-green-50 rounded-lg p-4">
                <div class="flex items-start">
                  <Icon name="mdi:information" class="text-green-600 text-2xl mr-3 flex-shrink-0" />
                  <div class="text-sm text-green-900">
                    <strong class="block mb-1">Informație Importantă</strong>
                    Pentru dosarele {{ insuranceName }}, asigură-te că ai la tine: acte mașină, 
                    poliță de asigurare, act identitate și constatare amiabilă (dacă există).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="section-container text-center">
        <h2 class="text-3xl font-bold mb-4">Ai o daună {{ insuranceName }}?</h2>
        <p class="text-xl mb-8 text-primary-100">Contactează-ne acum pentru o soluționare rapidă</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+40799777357" class="btn-secondary text-lg">
            <Icon name="mdi:phone" class="mr-2" />
            Sună: 0799 777 357
          </a>
        </div>
      </div>
    </section>
    
    <!-- Process -->
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

    
    <!-- 24/7 Towing -->
    <section class="py-20 bg-blue-50 border-t-4 border-blue-600">
      <div class="section-container">
        <div class="flex justify-center mb-8">
          <Icon name="mdi:tow-truck" class="text-9xl text-blue-600" />
        </div>
        <h2 class="text-4xl font-bold mb-8 text-gray-900 text-center">Tractare Auto 24/7</h2>
        <p class="text-xl text-gray-600 mb-8">
          Nu ți-e frică dacă accidentul se întâmplă seara, noaptea sau weekend. Serviciul nostru de tractare, atat intern cat si extern, este disponibil 24 de ore pe zi, 7 zile pe săptămână.
        </p>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:clock-digital" class="text-5xl text-blue-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Disponibil 24/7</h3>
            <p class="text-gray-600">Orice zi, orice oră, pregatiti sa vina sa te ajute</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:timer-sand" class="text-5xl text-blue-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Sub 30 Minute</h3>
            <p class="text-gray-600">Incercam sa ne incadram sub 30 de minute. Astfel incat, in momentele neplacute, sa nu fii nevoit sa astepti.</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:tag-off" class="text-5xl text-blue-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Fără Costuri Ascunse</h3>
            <p class="text-gray-600">Costul tractarii este acoperit integral de catre societatea de asigurare.</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center">
            <Icon name="mdi:shield" class="text-5xl text-blue-600 mx-auto mb-3" />
            <h3 class="font-bold mb-2">Transport Sigur</h3>
            <p class="text-gray-600">Atat serviciul de tractare intern cat si cel extern sunt sigure si profesionale.</p>
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
                  <a href="https://asfromania.ro/uploads/articole/attachments/6315e3c22c857687271828.pdf" target="_blank" class="text-sm text-gray-400">Vezi link</a>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:file-document-outline" class="text-orange-500 text-2xl mr-3 flex-shrink-0" />
                <div>
                  <p class="font-bold">Hotărârea nr. 298 din 5 aprilie 2023</p>
                  <a href="https://legislatie.just.ro/Public/DetaliiDocument/266652" target="_blank" class="text-sm text-gray-400">Vezi link</a>
                </div>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:file-document-outline" class="text-orange-500 text-2xl mr-3 flex-shrink-0" />
                <div>
                  <p class="font-bold">Hotărârea nr. 1326 din 28.12.2023</p>
                  <a href="https://legislatie.just.ro/Public/DetaliiDocument/277838" target="_blank" class="text-sm text-gray-400">Vezi link</a>
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

    <!-- FAQ -->
    <section class="py-20 bg-white">
      <div class="section-container max-w-3xl">
        <h2 class="text-4xl font-bold mb-12 text-center text-gray-900">
          Întrebări Frecvente - Daune Grawe
        </h2>
        
        <div class="space-y-4">
          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Sunt costuri ascunse pentru notificare la Grawe?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-gray-700">
              Nu! Notificarea daunei la sediul nostru este complet gratuită. 
              Toate costurile de reparație sunt acoperite de polița RCA a celui vinovat, conform clauzelor din contract.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Ce se întâmplă dacă am accident seara sau weekend?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-gray-700">
              Puteți apela serviciul de tractare 24/7. Echipa noastră incearca sa raspunda sub 30 de minute și sa transporte mașina la service-ul nostru. Luni dimineață vom face constatarea și deschiderea dosarului la Grawe.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Cum obțin o mașină de înlocuire?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-gray-700">
              Putem pune la dispoziție mașini de înlocuire (rent-a-car) pe toată durata reparației. Costul este acoperit de {{ insuranceName }} conform 
              clauzei de lipsă de folosință din polița RCA a celui vinovat.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Ce documente am nevoie pentru notificare?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-gray-700">
              Pentru notificare daună la {{ insuranceName }}: acte mașină (Talon, cartea de identitate), poliță RCA, act de identitate, permis de conducere,
              imputernicire / contract de comodat ( dacă este cazul ) și constatare amiabilă (dacă există). 
              Noi vă ajutăm cu toate demersurile necesare.
            </p>
          </details>

          <details class="card p-6 group">
            <summary class="font-bold text-lg cursor-pointer flex justify-between items-center">
              Pot monitoriza reparația online?
              <Icon name="mdi:chevron-down" class="text-2xl transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-4 text-gray-700">
              Sigur! Puteți veni la service oricând pentru a monitoriza reparația. Aveți și posibilitatea să cereți fotografii de progres. 
              Comunicarea cu voi este una din prioritățile noastre.
            </p>
          </details>
        </div>
      </div>
    </section>

<!-- CTA -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="section-container text-center">
        <h2 class="text-3xl font-bold mb-4">Ai o daună {{ insuranceName }}?</h2>
        <p class="text-xl mb-8 text-primary-100">Contactează-ne acum pentru o soluționare rapidă</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+40799777357" class="btn-secondary text-lg">
            <Icon name="mdi:phone" class="mr-2" />
            Sună: 0799 777 357
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  insuranceName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>
