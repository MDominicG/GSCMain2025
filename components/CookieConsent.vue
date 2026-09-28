<template>
  <transition name="slide-up">
    <div v-if="visible" class="fixed inset-x-4 sm:inset-x-8 bottom-6 z-50">
      <div class="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-4 flex items-center space-x-4">
        <div class="flex-1 text-sm text-gray-800">
          Site-ul nostru folosește cookies pentru a îmbunătăți experiența. Vezi
          <NuxtLink to="/politica-confidentialitate" class="underline ml-1">politica de confidențialitate</NuxtLink>.
        </div>
        <div class="flex items-center space-x-2">
          <button @click="decline" class="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Refuz</button>
          <button @click="accept" class="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Sunt de acord</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const STORAGE_KEY = 'gsc_cookie_consent'

onMounted(() => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (!v) visible.value = true
  } catch (e) {
    visible.value = true
  }
})

function accept() {
  try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
  visible.value = false
}

function decline() {
  try { localStorage.setItem(STORAGE_KEY, 'declined') } catch {}
  visible.value = false
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
