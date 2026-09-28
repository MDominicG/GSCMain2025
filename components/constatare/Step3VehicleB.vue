<template>
  <div class="space-y-6">
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-red-900">Vehiculul B - Tert (Partea Reclamată)</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Vehicle Make -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Marca <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.vehicleB.make"
          type="text"
          placeholder="Ex: Mercedes"
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
          v-model="localData.vehicleB.model"
          type="text"
          placeholder="Ex: C-Class"
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
          v-model="localData.vehicleB.year"
          type="number"
          placeholder="2021"
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
          v-model="localData.vehicleB.licensePlate"
          type="text"
          placeholder="Ex: B 456 XYZ"
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
          v-model="localData.vehicleB.vin"
          type="text"
          placeholder="Ex: WDB2050051A123456"
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
          v-model="localData.vehicleB.insuranceCompany"
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
          v-model="localData.vehicleB.policyNumber"
          type="text"
          placeholder="Ex: RCA-20231234568"
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
          v-model="localData.vehicleB.licenseNumber"
          type="text"
          placeholder="Ex: RO XYZ 789012"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase"
          @change="emitUpdate"
        />
      </div>
    </div>

    <!-- Driver Info -->
    <div class="border-t pt-6">
      <h4 class="font-semibold text-gray-900 mb-4">Informații șofer tert</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Driver Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Numele și prenumele <span class="text-red-500">*</span>
          </label>
          <input
            v-model="localData.vehicleB.driverName"
            type="text"
            placeholder="Ex: Maria Ionescu"
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
            v-model="localData.vehicleB.driverPhone"
            type="tel"
            placeholder="Ex: +40 745 654 321"
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
            v-model="localData.vehicleB.driverEmail"
            type="email"
            placeholder="Ex: maria@example.com"
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
        v-model="localData.vehicleB.damageDescription"
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
  vehicleB: props.data?.vehicleB || {
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
    localData.value.vehicleB.make &&
    localData.value.vehicleB.model &&
    localData.value.vehicleB.year &&
    localData.value.vehicleB.licensePlate &&
    localData.value.vehicleB.insuranceCompany &&
    localData.value.vehicleB.policyNumber &&
    localData.value.vehicleB.driverName &&
    localData.value.vehicleB.driverPhone &&
    localData.value.vehicleB.driverEmail
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
