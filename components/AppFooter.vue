<template>
  <footer class="bg-secondary-900 text-white">
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <img src="/logos/new-logo.png" alt="GSC Auto" class="logo-img" loading="lazy" width="60" height="60" />
            <!-- <div>
              <h3 class="text-xl font-bold">GSC Auto</h3>
              <p class="text-sm text-secondary-400">General Services Company</p>
            </div> -->
          </div>
          <p class="text-secondary-400 text-sm leading-relaxed">
            Service auto multimarca autorizat R.A.R și centru de constatări & notificare daune în București, Sector 2, agreat de catre toate 
            societatile de asigurare din România. Oferim servicii complete de reparații auto, întreținere, diagnoză și rent-a-car.

            
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/GeneralServices97/" class="text-secondary-400 hover:text-primary-400 transition">
              <Icon name="mdi:facebook" class="text-2xl" />
            </a>
            <a href="https://www.instagram.com/gsc.97" class="text-secondary-400 hover:text-primary-400 transition">
              <Icon name="mdi:instagram" class="text-2xl" />
            </a>
            <a href="https://share.google/l2RnPNlpAgb76LAUM" class="text-secondary-400 hover:text-primary-400 transition">
              <Icon name="mdi:google" class="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/company/104351394/" class="text-secondary-400 hover:text-primary-400 transition">
              <Icon name="mdi:linkedin" class="text-2xl" />
            </a>
          </div>
        </div>

        <!-- Daune Auto -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-primary-400">Daune Auto</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/daune-auto/grawe" class="footer-link">Daune Grawe</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/omniasig" class="footer-link">Daune Omniasig</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/allianz" class="footer-link">Daune Allianz-Țiriac</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/asirom" class="footer-link">Daune Asirom</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/generali" class="footer-link">Daune Generali</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/groupama" class="footer-link">Daune Groupama</NuxtLink></li>
            <li><NuxtLink to="/daune-auto/axeria" class="footer-link">Daune Axeria</NuxtLink></li>
            <!-- <li><NuxtLink to="/rent-a-car" class="footer-link">Rent-a-Car</NuxtLink></li> -->
          </ul>
        </div>

        <!-- Program & Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-primary-400">Program</h4>
          <ul class="space-y-2 text-sm text-secondary-400">
            <li class="flex justify-between">
              <span>Luni - Vineri:</span>
              <span class="font-semibold text-white">10:00 - 18:30</span>
            </li>
            <li class="flex justify-between">
              <span>Sâmbătă:</span>
              <span class="font-semibold text-white">Închis</span>
            </li>
            <li class="flex justify-between">
              <span>Duminică:</span>
              <span class="font-semibold text-white">Închis</span>
            </li>
          </ul>
          <div class="mt-6 space-y-2">
            
            <a href="tel:+40799777357" class="flex items-center text-sm hover:text-primary-400 transition">
              <Icon name="mdi:phone" class="mr-2" />
              0799 777 357
            </a>
            <a href="tel:+40767517505" class="flex items-center text-sm hover:text-primary-400 transition">
              <Icon name="mdi:phone" class="mr-2" />
              0767 517 505
            </a>
            <a href="tel:+40725973595" class="flex items-center text-sm hover:text-primary-400 transition">
              <Icon name="mdi:phone" class="mr-2" />
              0725 973 595
            </a>
            <a href="mailto:office@gsc-auto.ro" class="flex items-center text-sm hover:text-primary-400 transition">
              <Icon name="mdi:email" class="mr-2" />
              office@gsc-auto.ro
            </a>
            <a href="mailto:gsc97srl@yahoo.com" class="flex items-center text-sm hover:text-primary-400 transition">
              <Icon name="mdi:email" class="mr-2" />
              gsc97srl@yahoo.com
            </a>
          </div>
        </div>

        <!-- Location -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-primary-400">Locație</h4>
          <div class="text-sm text-secondary-400 space-y-3">
            <div class="flex items-start">
              <Icon name="mdi:map-marker" class="mr-2 mt-1 text-primary-400 flex-shrink-0" />
              <span>Strada Ritmului, nr. 8, Sector 2<br>(intrarea prin Aleea Magura Vulturului)<br>București</span>
            </div>
            <a 
              href="https://www.google.com/maps/dir//General+Services+Company+97+SRL+Aleea+Magura+Vulturului+Strada+Ritmului+8" 
              target="_blank"
              class="inline-flex items-center text-primary-400 hover:text-primary-300 transition font-semibold"
            >
              <Icon name="mdi:google-maps" class="mr-2" />
              Deschide în Google Maps
            </a>
            <a 
              href="https://waze.com/ul/hsxfsfdvbv" 
              target="_blank"
              class="inline-flex items-center text-primary-400 hover:text-primary-300 transition font-semibold"
            >
              <Icon name="mdi:waze" class="mr-2" />
              Deschide în Waze
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-secondary-800">
      <div class="section-container py-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-400">
          <p>&copy; {{ new Date().getFullYear() }} GSC Auto - General Services Company. Toate drepturile rezervate.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/politica-confidentialitate" class="footer-link">Politică Confidențialitate</NuxtLink>
            <NuxtLink to="/termeni-conditii" class="footer-link">Termeni și Condiții</NuxtLink>
            <NuxtLink to="/cookies" class="footer-link">Politică Cookies</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-secondary-400 hover:text-primary-400 transition-colors duration-200;
}
</style>
