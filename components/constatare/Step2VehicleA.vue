<template>
  <div class="space-y-6">
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-blue-900">Vehiculul A - Dvs. (Partea Reclamantă)</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Vehicle Make -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Marca <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleA.make"
          type="text"
          placeholder="Ex: BMW"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>

      <!-- Vehicle Model -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Model <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleA.model"
          type="text"
          placeholder="Ex: X5"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>

      <!-- Year -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Anul fabricației <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleA.year"
          type="number"
          placeholder="2020"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>

      <!-- License Plate -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Numărul de înmatriculare <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleA.licensePlate"
          type="text"
          placeholder="Ex: B 123 ABC"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase"
          @change="emitUpdate"
        />
      </div>

      <!-- VIN -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Numărul VIN
        </label>
        <input
          v-model="localData.vehicleA.vin"
          type="text"
          placeholder="Ex: WBADT43452G906404"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase"
          @change="emitUpdate"
        />
      </div>

      <!-- Insurance Company -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Societatea de asigurare <span class="text-red-500">*</span>
        </label>
        <select
          v-model="localData.vehicleA.insuranceCompany"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        >
          <option value="">-- Selectează --</option>
          <option value="Allianz">Allianz</option>
          <option value="Axa">Axa</option>
          <option value="Generali">Generali</option>
          <option value="Groupama">Groupama</option>
          <option value="Omniasig">Omniasig</option>
          <option value="ASIROM">ASIROM</option>
          <option value="Axeria">Axeria</option>
          <option value="GRAWE">GRAWE</option>
          <option value="Other">Altă societate</option>
        </select>
      </div>

      <!-- Policy Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Numărul poliței <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleA.policyNumber"
          type="text"
          placeholder="Ex: RCA-20231234567"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>

      <!-- License Number -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Seria și numărul permisului
        </label>
        <input
          v-model="localData.vehicleA.licenseNumber"
          type="text"
          placeholder="Ex: RO ABC 123456"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase"
          @change="emitUpdate"
        />
      </div>
    </div>

    <!-- Driver Info -->
    <div class="border-t pt-6">
      <h4 class="font-semibold text-gray-900 mb-4">Informații șofer</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Driver Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Numele și prenumele <span class="text-red-500">*</span>
          </label>
          <input
            v-model="localData.vehicleA.driverName"
            type="text"
            placeholder="Ex: Ion Popescu"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            @change="emitUpdate"
          />
        </div>

        <!-- Driver Phone -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Telefon <span class="text-red-500">*</span>
          </label>
          <input
            v-model="localData.vehicleA.driverPhone"
            type="tel"
            placeholder="Ex: +40 745 123 456"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            @change="emitUpdate"
          />
        </div>

        <!-- Driver Email -->
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            v-model="localData.vehicleA.driverEmail"
            type="email"
            placeholder="Ex: ion@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            @change="emitUpdate"
          />
        </div>
      </div>
    </div>

    <!-- Damage Description -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Descrierea daunelor la vehicul
      </label>
      <textarea
        v-model="localData.vehicleA.damageDescription"
        rows="4"
        placeholder="Descrie în detaliu daunele la vehicul..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        @change="emitUpdate"
      />
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6 border-t">
      <button
        @click="$emit('prev')"
        class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        ← Înapoi
      </button>
      <button
        @click="handleNext"
        :disabled="!isStepValid"
        class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Continuă →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'next', 'prev'])

const localData = ref({
  vehicleA: props.data?.vehicleA || {
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
})

const isStepValid = computed(() => {
  return (
    localData.value.vehicleA.make &&
    localData.value.vehicleA.model &&
    localData.value.vehicleA.year &&
    localData.value.vehicleA.licensePlate &&
    localData.value.vehicleA.insuranceCompany &&
    localData.value.vehicleA.policyNumber &&
    localData.value.vehicleA.driverName &&
    localData.value.vehicleA.driverPhone &&
    localData.value.vehicleA.driverEmail
  )
})

const emitUpdate = () => {
  emit('update', localData.value)
}

const handleNext = () => {
  emitUpdate()
  emit('next')
}
</script>
