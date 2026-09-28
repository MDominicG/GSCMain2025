<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Test Data Button -->
      <div class="mb-4 flex justify-end">
        <button
          @click="loadTestData"
          class="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm"
        >
          🧪 Incarca date test
        </button>
      </div>

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Constatare Amiabilă Online</h1>
        <p class="text-xl text-gray-600 mb-6">
          Direct din browser · PDF gata de semnat în câteva minute · Acceptat de toate societățile de asigurare
        </p>
        <div class="flex justify-center gap-8 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="text-green-500">✓</span>
            <span>Datele se salvează automat</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-500">✓</span>
            <span>PDF în câteva minute</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-500">✓</span>
            <span>Acceptat de asigurări</span>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <div class="text-sm font-semibold text-gray-700">
            Pasul {{ currentStep }}/{{ totalSteps }} — {{ stepTitles[currentStep - 1] }}
          </div>
          <button
            v-if="canClearData"
            @click="clearAllData"
            class="text-sm text-red-600 hover:text-red-700 underline"
          >
            Șterge date
          </button>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
          />
        </div>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <KeepAlive>
          <component
            :is="currentStepComponent"
            :key="currentStep"
            :data="formData"
            @update="updateFormData"
            @next="nextStep"
            @prev="prevStep"
          />
        </KeepAlive>
      </div>

      <!-- Info Box -->
      <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 class="font-semibold text-blue-900 mb-2">ℹ️ De ce Constatare Amiabilă Online?</h3>
        <ul class="text-sm text-blue-800 space-y-1">
          <li>✓ Procesul este mai rapid și mai convenabil</li>
          <li>✓ Documentele se salvează și se generează automat în PDF</li>
          <li>✓ Poți completa din orice dispozitiv, oricând</li>
          <li>✓ Compatibil cu toate societățile de asigurare din România</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useHead } from '#app'
import Step1AccidentDetails from '~/components/constatare/Step1AccidentDetails.vue'
import Step2Vehicle from '~/components/constatare/Step2Vehicle.vue'
import Step3Witnesses from '~/components/constatare/Step3Witnesses.vue'
import Step4Sketch from '~/components/constatare/Step4Sketch.vue'
import Step5Summary from '~/components/constatare/Step5Summary.vue'

const currentStep = ref(1)
const totalSteps = 5
const stepTitles = [
  'Date accident',
  'Date vehicul',
  'Martori',
  'Schita accident',
  'Rezumat & Export'
]

const formData = ref({
  // Step 1: Accident Details
  accidentDate: '',
  accidentTime: '',
  country: 'Romania',
  accidentLocation: '',
  injuries: 'no',
  otherDamages: 'no',
  accidentDescription: '',
  
  // Step 2: Vehicle (single vehicle)
  vehicle: {
    make: '',
    model: '',
    year: '',
    vin: '',
    licensePlate: '',
    insuranceCompany: '',
    policyNumber: '',
    damageDescription: '',
    driverName: '',
    driverPhone: '',
    driverEmail: '',
    licenseNumber: '',
  },
  
  // Step 3: Witnesses
  witnesses: [
    { name: '', phone: '', email: '' }
  ],

  // Step 4: Sketch
  sketch: '',
  vehicleRotation: 0,
  impactPoints: [],
  circumstances: [],
  
  // Step 5: Summary
  notes: '',
})

const stepTitleEnum = ['Step1AccidentDetails', 'Step2Vehicle', 'Step3Witnesses', 'Step4Sketch', 'Step5Summary']
const stepComponents = [Step1AccidentDetails, Step2Vehicle, Step3Witnesses, Step4Sketch, Step5Summary]

const currentStepComponent = computed(() => stepComponents[currentStep.value - 1])

const canClearData = computed(() => {
  return Object.values(formData.value).some(val => {
    if (typeof val === 'object') {
      return JSON.stringify(val) !== '{}'
    }
    return val !== ''
  })
})

const updateFormData = (newData: any) => {
  formData.value = { ...formData.value, ...newData }
  saveToLocalStorage()
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const saveToLocalStorage = () => {
  try {
    localStorage.setItem('constatare_amiabila_data', JSON.stringify(formData.value))
  } catch (e) {
    console.error('Failed to save to localStorage', e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('constatare_amiabila_data')
    if (saved) {
      formData.value = JSON.parse(saved)
    }
  } catch (e) {
    console.error('Failed to load from localStorage', e)
  }
}

const clearAllData = () => {
  if (confirm('Ești sigur că vrei să ștergi toate datele? Această acțiune nu poate fi anulată.')) {
    formData.value = {
      accidentDate: '',
      accidentTime: '',
      country: 'Romania',
      accidentLocation: '',
      injuries: 'no',
      otherDamages: 'no',
      accidentDescription: '',
      vehicle: {
        make: '',
        model: '',
        year: '',
        vin: '',
        licensePlate: '',
        insuranceCompany: '',
        policyNumber: '',
        damageDescription: '',
        driverName: '',
        driverPhone: '',
        driverEmail: '',
        licenseNumber: '',
      },
      witnesses: [{ name: '', phone: '', email: '' }],
      sketch: '',
      vehicleRotation: 0,
      impactPoints: [],
      circumstances: [],
      notes: '',
    }
    currentStep.value = 1
    localStorage.removeItem('constatare_amiabila_data')
  }
}

const loadTestData = () => {
  console.log('Loading test data...')
  try {
    const today = new Date().toISOString().split('T')[0]
    const testData = {
      accidentDate: today,
      accidentTime: '14:30',
      country: 'Romania',
      accidentLocation: 'Str. Mihail Eminescu, Bucuresti, intersectie cu Str. Ion Creanga',
      injuries: 'no',
      otherDamages: 'yes',
      accidentDescription: 'Colizie in intersectie. Vehiculul meu a fost lovit de o masina care a trecut pe rosu.',
      vehicle: {
        make: 'Dacia',
        model: 'Logan',
        year: 2022,
        vin: 'VF73R68V242833219',
        licensePlate: 'BZ01ABC',
        insuranceCompany: 'Allianz',
        policyNumber: 'POL-2024-123456',
        damageDescription: 'Lovire fata-dreapta, deformatie capota, sticla fata sparta',
        driverName: 'Ion Popescu',
        driverPhone: '+40721123456',
        driverEmail: 'ion.popescu@email.com',
        licenseNumber: 'MD123456'
      },
      witnesses: [
        { name: 'Maria Gheorghe', phone: '+40722654321', email: 'maria@email.com' },
        { name: '', phone: '', email: '' }
      ],
      sketch: '',
      vehicleRotation: 0,
      impactPoints: [],
      circumstances: [2, 7],
      notes: 'Observatii: Semaforul era rosu pentru celalalt vehicul. Celalalt vehicul venea cu viteza mare.'
    }
    
    // Update via the update function to trigger proper reactivity
    updateFormData(testData)
    currentStep.value = 1
    
    console.log('Test data loaded successfully', formData.value)
  } catch (error) {
    console.error('Error loading test data:', error)
  }
}

onMounted(() => {
  loadFromLocalStorage()
})

useHead({
  title: 'Constatare Amiabilă Online',
  meta: [
    {
      name: 'description',
      content: 'Completează constatarea amiabilă online, generează PDF și trimite către asigurare.',
    }
  ]
})
</script>

<style scoped>
/* Smooth transitions */
:deep(.step-enter-active),
:deep(.step-leave-active) {
  transition: opacity 0.3s ease;
}

:deep(.step-enter-from),
:deep(.step-leave-to) {
  opacity: 0;
}
</style>
