<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      
      <div class="section-container relative z-10 py-20 md:py-28">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              General Services Company
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100">
              Centru de daune si service auto multimarca autorizat rar in Bucuresti, Sector 2
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Dosar Dauna RCA & Casco</h3>
                  <p class="text-primary-100">Oferim servicii complete pentru solutionarea dosarelor de dauna. Aceste servicii includ tractarea, 
                    deschiderea dosarului, masina de schimb , reparatia autoturismului dvs si decontare directa.</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Service auto autorizat RAR</h3>
                  <p class="text-primary-100">Service auto multimarca in Bucuresti, Sector 2, autorizat RAR pentru toate tipurile de reparatii. Oferim servicii de mecanica,
                    tinichigerie si vopsitorie auto.
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:check-circle" class="text-3xl text-green-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Decontare directa</h3>
                  <p class="text-primary-100">Societatea noastra lucreaza cu orice companie de asigurare. Astfel, dvs. nu trebuie sa platiti nimic, daca utilizati
                    serviciile noastre pentru reparatia autoturismului dumneavoastra.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+40767517505" 
                class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary-700 font-semibold shadow-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-white/70 text-lg"
              >
                <Icon name="mdi:phone" class="mr-2" />
                Sună Acum
              </a>
            </div>
          </div>
          <div class="hidden md:block">
            <img 
              src="/logos/new-logo.png" 
              alt="GSC Auto" 
              class="mx-auto w-auto max-h-64 md:max-h-80"
              loading="eager"
              width="300"
              height="320"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact Bar -->
    <section class="bg-secondary-800 text-white py-6">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <a href="tel:+40767517505" class="flex items-center justify-center space-x-3 hover:text-primary-400 transition">
            <Icon name="mdi:phone-in-talk" class="text-3xl" />
            <div class="text-left">
              <p class="text-sm text-secondary-400">Daune Auto</p>
              <p class="font-bold text-lg">0799 777 357</p>
            </div>
          </a>
          <a href="tel:+40799777357" class="flex items-center justify-center space-x-3 hover:text-primary-400 transition">
            <Icon name="mdi:car-cog" class="text-3xl" />
            <div class="text-left">
              <p class="text-sm text-secondary-400">Service Auto</p>
              <p class="font-bold text-lg">0767 517 505</p>
            </div>
          </a>
          <a href="tel:+40725973595" class="flex items-center justify-center space-x-3 hover:text-primary-400 transition">
            <Icon name="mdi:car-cog" class="text-3xl" />
            <div class="text-left">
              <p class="text-sm text-secondary-400">Vopsitorie & Tinichigerie</p>
              <p class="font-bold text-lg">0725 973 595</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Google Reviews Section
    <section class="py-16 bg-white" data-section="reviews">
      <div class="section-container">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-2 mb-4">
            <Icon name="mdi:google" class="text-5xl text-red-500" />
            <span class="text-3xl font-bold text-secondary-900">Recenziile clientilor</span>
          </div>
          <p class="text-xl text-secondary-600 mb-6">
            Vezi ce spun clienții noștri despre serviciile GSC Auto
          </p>
          <ClientOnly>
            <Suspense>
              <template #default>
                <div class="elfsight-app-462ca9b3-bfc1-4c56-afb6-7bf36f94f184" data-elfsight-app-lazy></div>
              </template>
              <template #fallback>
                <div class="text-secondary-400">Se încarcă recenziile...</div>
              </template>
            </Suspense>
          </ClientOnly>
          <a 
            href="https://g.page/r/CW9XxKHDKdSzEBM/review" 
            target="_blank"
            class="btn-primary inline-flex items-center mt-4"
          >
            <Icon name="mdi:star" class="mr-2" />
            Lasă-ne o recenzie
          </a>
        </div>

      </div>
    </section> -->

    <!-- Services Section -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Serviciile Noastre</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Oferim servicii complete de service auto și gestiune a dosarelor de dauna pentru toate tipurile de autovehicule.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Mecanica Auto -->
          <div class="card card-hover">
            <div class="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-secondary-900">Mecanică Auto</h3>
              <p class="text-secondary-600 mb-4">
                Servicii complete de mecanică auto și întreținere periodică. Diagnostic computerizat, 
                revizii motor, sistem transmisie, sistem de suspensie, sistem frânare și altele.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Diagnostic computerizat
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Revizii si intretinere motor si transmisie
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Sistem frânare și suspensie
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Întreținere periodică
                </li>
              </ul>
              <NuxtLink to="/servicii/mecanica" class="btn-outline w-full text-center">
                Detalii →
              </NuxtLink>
            </div>
          </div>

          <!-- Tinichigerie -->
          <div class="card card-hover">
            <div class="relative h-64 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
              <Icon name="mdi:car-side" class="text-8xl text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-secondary-900">Tinichigerie</h3>
              <p class="text-secondary-600 mb-4">
                Reparații profesionale de caroserie. Îndreptare tablă, sudură, înlocuire elemente 
                caroserie.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Reparatii caroserie in conformitate cu manualul producatorului
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Sudură și reparații caroserie - sasiu
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Înlocuire elemente caroserie
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Reparații conform standard si manual producator
                </li>
              </ul>
              <NuxtLink to="/servicii/tinichigerie" class="btn-outline w-full text-center">
                Detalii →
              </NuxtLink>
            </div>
          </div>

          <!-- Vopsitorie -->
          <div class="card card-hover">
            <div class="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <Icon name="mdi:spray" class="text-8xl text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-secondary-900">Vopsitorie</h3>
              <p class="text-secondary-600 mb-4">
                Vopsitorie profesională cu cabină de vopsit. Alegerea precisă a nuanței, 
                aplicare profesională, durabilitate cromatică garantată.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Cabină vopsit
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Alegere nuanță conform paletarului
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Vopsele de calitate
                </li>
                <li class="flex items-center text-sm">
                  <Icon name="mdi:check" class="text-green-500 mr-2" />
                  Garanție durabilitate
                </li>
              </ul>
              <NuxtLink to="/servicii/vopsitorie" class="btn-outline w-full text-center">
                Detalii →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Insurance Partners -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Toate Societățile de Asigurare</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Centru notificator si unitate de constatare - reparatie pentru daune auto RCA si CASCO. Ne ocupam de tot procesul de la intocmirea documentului
            amiabil pana la reparatia autovehiculului dumneavoastra, indiferent de societatea de asigurare.
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

        <div class="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-4 text-secondary-900">Ai fost implicat într-un accident?</h3>
              <p class="text-lg text-secondary-700 mb-6">
                Nu îți face griji! Te ajutăm cu intocmirea documentului amiabil și reparația autovehiculului. 
                Preluăm tot procesul, astfel incat sa nu fie nevoie de eforturi suplimentare.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-secondary-700">Intocmim impreuna toate actele necesare avizarii si reparației</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-secondary-700">Gestionam complet dosarul cu asiguratorul vinovatului, astfel incat tu sa nu ai batai de cap</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-secondary-700">Reparatii cu piese originale direct de la producator, in conformitate cu manualul de reparatie</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="text-2xl text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-secondary-700">Masina la schimb pe toata durata reparatiei, fara limita de KM sau costuri ascunse. (In limita masinilor disponibile)</span>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-xl shadow-xl p-8">
              <h4 class="text-2xl font-bold mb-6 text-center text-secondary-900">Notifică Dauna Acum</h4>
              <div class="space-y-4">
                <a href="tel:+40799777357" class="btn-primary w-full inline-flex items-center justify-center text-lg">
                  <Icon name="mdi:phone" class="mr-2" />
                  Sună: 0799 777 357
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">De ce să ne alegi pe noi?</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Experiență, profesionalism și dedicare pentru fiecare client. Intelegem cat de important este timpul in zilele noastre, mai ales si mijlocul de transport.
            De aceea ne straduim sa oferim servicii rapide, eficiente si de calitate, astfel incat sa te poti bucura cat mai curand de masina ta reparata ca noua.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-group" class="text-4xl" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Echipă Experimentată</h3>
            <p class="text-secondary-600">
              Specialiști autorizați cu peste 15 ani experiență în domeniu
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:tools" class="text-4xl" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Echipamente Moderne</h3>
            <p class="text-secondary-600">
              Tehnologie de ultimă generație pentru diagnostic și reparații
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:certificate" class="text-4xl" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Garanție Lucrări</h3>
            <p class="text-secondary-600">
              Garanție extinsă pentru toate lucrările efectuate
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:clock-fast" class="text-4xl" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-secondary-900">Rapiditate</h3>
            <p class="text-secondary-600">
              Termene respectate și comunicare transparentă pe tot parcursul
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rent-a-Car Section
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Rent-a-Car - Lipsă de Folosință</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Mașini de înlocuire moderne pentru confortul tău pe toată perioada reparației
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/confort.png" alt="Confort" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">Confort</p>
          </div>
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/compact.png" alt="Compact" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">Compact</p>
          </div>
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/hybrid.png" alt="Hybrid" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">Hybrid</p>
          </div>
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/sport.png" alt="Sport" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">Sport</p>
          </div>
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/mini.png" alt="Mini" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">Mini</p>
          </div>
          <div class="card p-4 text-center">
            <div class="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src="/vehicles/suv.png" alt="SUV" class="w-full h-full object-contain p-2" @error="handleImageError" />
            </div>
            <p class="font-semibold text-sm">SUV</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div class="flex items-start">
            <Icon name="mdi:car-key" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bold text-lg mb-2">Vehicule Moderne</h3>
              <p class="text-secondary-600">Flota nouă cu toate dotările necesare</p>
            </div>
          </div>
          <div class="flex items-start">
            <Icon name="mdi:shield-check" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bold text-lg mb-2">Acoperit de Asigurare</h3>
              <p class="text-secondary-600">Cost suportat de RCA celui vinovat</p>
            </div>
          </div>
          <div class="flex items-start">
            <Icon name="mdi:clock-fast" class="text-3xl text-primary-600 mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bold text-lg mb-2">Pe Toată Perioada</h3>
              <p class="text-secondary-600">Disponibil cât durează reparația</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/rent-a-car" class="btn-primary text-lg inline-flex items-center">
            <Icon name="mdi:car" class="mr-2" />
            Vezi Toate Clasele Disponibile
          </NuxtLink>
        </div>
      </div>
    </section> -->

    <!-- Location & Directions Section -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Cum Ajungi la Noi?</h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Bucuresti, Sector 2, Strada Ritmului, Nr. 8 (intrarea prin Aleea Magura Vulturului)<br>
            <span class="text-base">Repere: Autogara CDI, In apropiere de Colegiul National Iulia Hasdeu</span>
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 xl:gap-12 items-start lg:items-center">
          <!-- Map -->
          <div class="card overflow-hidden h-[22rem] md:h-[24rem] shadow-xl self-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1234567890123!2d26.18307!3d44.44413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4681ed6897%3A0xd31ac188c034de48!2sGeneral%20Services%20Company%2097%20SRL!5e0!3m2!1sen!2sro!4v1234567890"
              class="w-full h-full block"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Navigation Options -->
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold mb-6 text-secondary-900">Navighează către Service</h3>
              <div class="space-y-4">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=General%20Services%20Company%2097%20SRL%2C%20Strada%20Ritmului%208%2C%20Bucuresti&destination_place_id=0x40b1ff4681ed6897%3A0xd31ac188c034de48" 
                  target="_blank"
                  class="btn-primary w-full text-center flex items-center justify-center gap-3 h-14 rounded-xl shadow-md hover:shadow-lg"
                >
                  <Icon name="mdi:google-maps" class="text-2xl" />
                  <span>Deschide în Google Maps</span>
                </a>
                <a 
                  href="https://waze.com/ul?ll=44.44413%2C26.18307&navigate=yes" 
                  target="_blank"
                  class="btn-outline w-full text-center flex items-center justify-center gap-3 h-14 rounded-xl border-2 shadow-sm hover:shadow-md"
                >
                  <Icon name="mdi:waze" class="text-2xl" />
                  <span>Deschide în Waze</span>
                </a>
                <a 
                  href="https://maps.apple.com/?ll=44.44413,26.18307&q=General%20Services%20Company%2097%20SRL" 
                  target="_blank"
                  class="btn-secondary w-full text-center flex items-center justify-center gap-3 h-14 rounded-xl border-2 shadow-sm hover:shadow-md"
                >
                  <Icon name="mdi:apple" class="text-2xl" />
                  <span>Deschide în Apple Maps</span>
                </a>
              </div>
            </div>

            <div class="card p-6 bg-blue-50/70 border border-blue-100">
              <h4 class="font-bold text-lg mb-3 flex items-center text-secondary-900">
                <Icon name="mdi:information" class="text-blue-600 mr-2 text-2xl" />
                Cum să ajungi
              </h4>
              <ul class="space-y-2 text-sm text-secondary-700">
                <li class="flex items-start">
                  <Icon name="mdi:car" class="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Cu mașina:</strong> Intrare prin Aleea Magura Vulturului, parcare disponibilă în curte, dar si in fata unitatii</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:bus" class="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Transport în comun:</strong> Stații RATB în apropiere - liniile 101, 102, 330</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:map-marker" class="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Repere:</strong> Sunt doua intrari principale. O intrare cu porti albastre pe care scrie "Statie ITP", intrati in dreapta.
                  O intrare pe portile gri, cum intrati in partea dreapta sunt birourile.</span>
                </li>
              </ul>
            </div>

            <div class="card p-6 bg-green-50/70 border border-green-100">
              <h4 class="font-bold text-lg mb-3 flex items-center text-secondary-900">
                <Icon name="mdi:clock-outline" class="text-green-600 mr-2 text-2xl" />
                Program de Lucru
              </h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-secondary-600">Luni - Vineri:</span>
                  <span class="font-semibold text-secondary-900">09:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-secondary-600">Sâmbătă:</span>
                  <span class="font-semibold text-secondary-900">Închis</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-secondary-600">Duminică:</span>
                  <span class="font-semibold text-secondary-900">Închis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="section-container text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ai nevoie de un service auto de încredere?</h2>
        <p class="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
          Programează-te acum și beneficiază de servicii profesionale la prețuri competitive
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/programare" class="btn-secondary text-lg px-8 py-4">
            <Icon name="mdi:calendar-check" class="mr-2" />
            Programare Online
          </NuxtLink>
          <a href="tel:+40799777357" class="bg-white text-primary-700 hover:bg-primary-50 font-semibold text-lg px-8 py-4 rounded-lg transition">
            <Icon name="mdi:phone" class="mr-2" />
            Contactează-ne: 0799 777 357
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const partners = [
  { name: 'Grawe', href: '/daune-auto/grawe'  },
  { name: 'Omniasig', href: '/daune-auto/omniasig' },
  { name: 'Allianz-Țiriac', href: '/daune-auto/allianz' },
  { name: 'Asirom', href: '/daune-auto/asirom' },
  { name: 'Generali', href: '/daune-auto/generali'},
  { name: 'Groupama', href: '/daune-auto/groupama'},
  { name: 'Axeria', href: '/daune-auto/axeria'}
]

useHead({
  title: 'Acasă',
  meta: [
    { 
      name: 'description', 
      content: 'Service auto in Bucuresti, Sector 2, autorizat RAR. Centru de daune auto pentru toate societatile de asigurare de pe teritoriul Romaniei. Lucrari, rapide, calitative si de durata.' 
    },
    {
      name: 'keywords',
      content: 'service auto bucuresti, daune auto, reparatii auto, tinichigerie, vopsitorie, mecanica auto, asigurari auto, grawe, omniasig, allianz, sector 2'
    },
    { property: 'og:title', content: 'General Services Company - Service auto Bucuresti Sector 2' },
    { property: 'og:description', content: 'Service auto in Bucuresti, Sector 2, autorizat RAR. Centru de daune auto pentru toate societatile de asigurare de pe teritoriul Romaniei. Lucrari, rapide, calitative si d' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: 'General Services Company - Service auto Bucuresti Sector 2',
        description: 'Service auto in Bucuresti, Sector 2, autorizat RAR. Centru de daune auto pentru toate societatile de asigurare de pe teritoriul Romaniei. Lucrari, rapide, calitative si de durata',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Strada Ritmului, nr. 8',
          addressLocality: 'București',
          addressRegion: 'București',
          postalCode: '021675',
          addressCountry: 'RO'
        },
        telephone: '+40799777357',
        email: 'office@gsc-auto.ro',
        url: 'https://gsc-auto.ro',
        openingHours: 'Lu-Vi 09:00-18:00',
        priceRange: '$$',
        areaServed: {
          '@type': 'City',
          name: 'București'
        }
      })
    }
  ]
})
</script>
