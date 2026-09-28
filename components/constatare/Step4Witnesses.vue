<template>
  <div class="space-y-6">
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-purple-900">Martori ai accidentului</h3>
      <p class="text-sm text-purple-800 mt-2">Adaugă datele martoriloa care au fost prezenți la accident (opțional)</p>
    </div>

    <!-- Witnesses List -->
    <div class="space-y-4">
      <div v-for="(witness, index) in localData.witnesses" :key="index" class="border rounded-lg p-6 bg-gray-50">
        <div class="flex justify-between items-center mb-4">
          <h4 class="font-semibold text-gray-900">Martor {{ index + 1 }}</h4>
          <button
            v-if="localData.witnesses.length > 1"
            @click="removeWitness(index)"
            class="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Șterge
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Witness Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Nume și prenume
            </label>
            <input
              v-model="witness.name"
              type="text"
              placeholder="Ex: Ana Popescu"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="emitUpdate"
            />
          </div>

          <!-- Witness Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Telefon
            </label>
            <input
              v-model="witness.phone"
              type="tel"
              placeholder="Ex: +40 745 999 888"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="emitUpdate"
            />
          </div>

          <!-- Witness Email -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              v-model="witness.email"
              type="email"
              placeholder="Ex: ana@example.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="emitUpdate"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Add Witness Button -->
    <button
      @click="addWitness"
      class="w-full px-4 py-3 border-2 border-dashed border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
    >
      + Adaugă martor
    </button>

    <!-- Info Box -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p class="text-sm text-blue-800">
        <strong>ℹ️ Notă:</strong> Dovada mărtoririi este importantă pentru a susține reclama. Se recomandă să obții declarații scrise sau dovezi de contact ale martorilormultiply
      </p>
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
        class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        Continuă →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'next', 'prev'])

const localData = ref({
  witnesses: props.data?.witnesses || [{ name: '', phone: '', email: '' }],
})

const addWitness = () => {
  localData.value.witnesses.push({ name: '', phone: '', email: '' })
  emitUpdate()
}

const removeWitness = (index: number) => {
  localData.value.witnesses.splice(index, 1)
  emitUpdate()
}

const emitUpdate = () => {
  emit('update', localData.value)
}

const handleNext = () => {
  emitUpdate()
  emit('next')
}
</script>
