<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Accident Date -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Data accidentului <span class="text-red-500">*</span>
        </label>
        <input
          v-model="localData.accidentDate"
          type="date"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>

      <!-- Accident Time -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ora accidentului
        </label>
        <input
          v-model="localData.accidentTime"
          type="time"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          @change="emitUpdate"
        />
      </div>
    </div>

    <!-- Country -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Țara <span class="text-red-500">*</span>
      </label>
      <select
        v-model="localData.country"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        @change="emitUpdate"
      >
        <option value="Romania">România</option>
        <option value="Hungary">Ungaria</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Serbia">Serbia</option>
        <option value="Austria">Austria</option>
        <option value="Other">Altă țară</option>
      </select>
    </div>

    <!-- Accident Location -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Locul accidentului (stradă, localitate) <span class="text-red-500">*</span>
      </label>
      <textarea
        v-model="localData.accidentLocation"
        rows="3"
        placeholder="Ex: Strada Victoriei, nr. 45, București"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        @change="emitUpdate"
      />
    </div>

    <!-- Accident Description -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Descriere accident
      </label>
      <textarea
        v-model="localData.accidentDescription"
        rows="4"
        placeholder="Descrie cum s-a produs accidentul..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        @change="emitUpdate"
      />
    </div>

    <!-- Injuries -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-3">
        Răniți? (chiar și ușor) <span class="text-red-500">*</span>
      </label>
      <div class="flex gap-6">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="localData.injuries"
            type="radio"
            value="yes"
            class="w-4 h-4 text-indigo-600"
            @change="emitUpdate"
          />
          <span class="text-gray-700">Da</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="localData.injuries"
            type="radio"
            value="no"
            class="w-4 h-4 text-indigo-600"
            @change="emitUpdate"
          />
          <span class="text-gray-700">Nu</span>
        </label>
      </div>
    </div>

    <!-- Other Damages -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-3">
        Daune materiale altele decât vehiculele? <span class="text-red-500">*</span>
      </label>
      <div class="flex gap-6">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="localData.otherDamages"
            type="radio"
            value="yes"
            class="w-4 h-4 text-indigo-600"
            @change="emitUpdate"
          />
          <span class="text-gray-700">Da</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="localData.otherDamages"
            type="radio"
            value="no"
            class="w-4 h-4 text-indigo-600"
            @change="emitUpdate"
          />
          <span class="text-gray-700">Nu</span>
        </label>
      </div>
      <p v-if="localData.otherDamages === 'yes'" class="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
        ⚠️ În cazul daunelor la proprietăți terțe, se recomandă implicarea poliției rutiere.
      </p>
    </div>

    <!-- Navigation -->
    <div class="flex justify-end pt-6 border-t">
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
import { ref, computed, watch } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'next', 'prev'])

const localData = ref({
  accidentDate: props.data?.accidentDate || '',
  accidentTime: props.data?.accidentTime || '',
  country: props.data?.country || 'Romania',
  accidentLocation: props.data?.accidentLocation || '',
  injuries: props.data?.injuries || 'no',
  otherDamages: props.data?.otherDamages || 'no',
  accidentDescription: props.data?.accidentDescription || '',
})

// Watch for prop changes from parent
watch(() => props.data, (newData) => {
  if (newData) {
    localData.value = {
      accidentDate: newData.accidentDate || '',
      accidentTime: newData.accidentTime || '',
      country: newData.country || 'Romania',
      accidentLocation: newData.accidentLocation || '',
      injuries: newData.injuries || 'no',
      otherDamages: newData.otherDamages || 'no',
      accidentDescription: newData.accidentDescription || '',
    }
  }
}, { deep: true })

const isStepValid = computed(() => {
  return localData.value.accidentDate && localData.value.accidentLocation
})

const emitUpdate = () => {
  emit('update', localData.value)
}

const handleNext = () => {
  emitUpdate()
  emit('next')
}
</script>
