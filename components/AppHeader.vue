<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <!-- Top Bar -->
    <div class="bg-primary-700 text-white py-2">
      <div class="section-container">
        <div class="flex flex-wrap justify-between items-center text-sm gap-3">
          <div class="flex flex-wrap items-center gap-4">
            <a href="tel:+40799777357" class="flex items-center hover:text-primary-200 transition">
              <Icon name="mdi:phone" class="mr-2" />
              <span class="hidden sm:inline">Telefon:</span> 0799 777 357
            </a>
            <a href="tel:+40767517505" class="flex items-center hover:text-primary-200 transition">
              <Icon name="mdi:wrench" class="mr-2" />
              <span class="hidden sm:inline">Telefon: </span> 0767 517 505 
            </a>
            <a href="tel:+40725973595" class="flex items-center hover:text-primary-200 transition">
              <Icon name="mdi:wrench" class="mr-2" />
              <span class="hidden sm:inline">Telefon: </span> 0725 973 595 
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <span class="hidden md:flex items-center">
              <Icon name="mdi:clock-outline" class="mr-2" />
              Luni - Vineri: 09:00 - 18:00
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="section-container py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img src="/logos/logo.png" alt="GSC Auto" class="logo-img" loading="eager" width="60" height="60" />
          <!-- <div class="hidden sm:block">
            <h1 class="text-2xl font-bold text-primary-700">GSC Auto</h1>
            <p class="text-xs text-secondary-600">General Services Company</p>
          </div> -->
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/" class="nav-link">Acasă</NuxtLink>
          <NuxtLink to="/servicii" class="nav-link">Servicii</NuxtLink>
          <NuxtLink to="/daune-auto" class="nav-link">Daune Auto</NuxtLink>
          <!-- <NuxtLink to="/rent-a-car" class="nav-link">Rent-a-Car</NuxtLink> -->
          <NuxtLink to="/despre" class="nav-link">Despre Noi</NuxtLink>
          <NuxtLink to="/cariere" class="nav-link">Cariere</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <a href="tel:+40767517505" class="btn-primary text-sm">
            <Icon name="mdi:phone" class="mr-2" />
            0799 777 357
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-primary-700" aria-label="Toggle navigation">
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden mt-4 pb-4 border-t border-secondary-200">
        <div class="flex flex-col space-y-3 pt-4">
          <NuxtLink to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Acasă</NuxtLink>
          <NuxtLink to="/servicii" class="mobile-nav-link" @click="mobileMenuOpen = false">Servicii</NuxtLink>
          <NuxtLink to="/daune-auto" class="mobile-nav-link" @click="mobileMenuOpen = false">Daune Auto</NuxtLink>
          <NuxtLink to="/rent-a-car" class="mobile-nav-link" @click="mobileMenuOpen = false">Rent-a-Car</NuxtLink>
          <NuxtLink to="/despre" class="mobile-nav-link" @click="mobileMenuOpen = false">Despre Noi</NuxtLink>
          <NuxtLink to="/cariere" class="mobile-nav-link" @click="mobileMenuOpen = false">Cariere</NuxtLink>
          <NuxtLink to="/contact" class="mobile-nav-link" @click="mobileMenuOpen = false">Contact</NuxtLink>
          <a href="tel:+40767517505" class="btn-primary text-center" @click="mobileMenuOpen = false">
            0799 777 357
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.router-link-active {
  @apply text-primary-600;
}

.mobile-nav-link {
  @apply text-secondary-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors duration-200;
}
</style>
