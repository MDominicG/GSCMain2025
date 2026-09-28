<template>
  <div class="space-y-6">
    <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-green-900">✓ Rezumat & Export PDF</h3>
      <p class="text-sm text-green-800 mt-2">Revizuieste datele si exporta in format oficial</p>
    </div>

    <!-- Summary Sections -->
    <div class="space-y-6">
      <!-- Accident Summary -->
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold text-gray-900 mb-4">1. Detalii Accident</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="border-b pb-3">
            <span class="text-gray-600 text-xs uppercase font-semibold">Data</span>
            <p class="font-medium">{{ formatDate(data.accidentDate) }}</p>
          </div>
          <div class="border-b pb-3">
            <span class="text-gray-600 text-xs uppercase font-semibold">Ora</span>
            <p class="font-medium">{{ data.accidentTime || 'Necunoscuta' }}</p>
          </div>
          <div class="border-b pb-3">
            <span class="text-gray-600 text-xs uppercase font-semibold">Tara</span>
            <p class="font-medium">{{ data.country }}</p>
          </div>
          <div class="md:col-span-3 border-b pb-3">
            <span class="text-gray-600 text-xs uppercase font-semibold">Locul Accidentului</span>
            <p class="font-medium">{{ data.accidentLocation }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Raniti?</span>
            <p class="font-medium" :class="data.injuries === 'yes' ? 'text-red-600' : 'text-green-600'">
              {{ data.injuries === 'yes' ? 'DA' : 'NU' }}
            </p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Daune Materiale Altele</span>
            <p class="font-medium">{{ data.otherDamages === 'yes' ? 'DA' : 'NU' }}</p>
          </div>
        </div>
      </div>

      <!-- Vehicle Summary - Blue Card Style -->
      <div class="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
        <div class="bg-blue-600 text-white px-4 py-2 rounded-t-lg -m-6 mb-4 font-bold">VEHICUL</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Marca, Tip</span>
            <p class="font-medium">{{ data.vehicle?.make }} {{ data.vehicle?.model }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Anul</span>
            <p class="font-medium">{{ data.vehicle?.year }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Nr. Inmatriculare</span>
            <p class="font-medium text-lg font-mono">{{ data.vehicle?.licensePlate }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">VIN</span>
            <p class="font-medium">{{ data.vehicle?.vin || 'N/A' }}</p>
          </div>
          <div class="md:col-span-2">
            <span class="text-gray-600 text-xs uppercase font-semibold">Asigurator</span>
            <p class="font-medium">{{ data.vehicle?.insuranceCompany }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Nr. Polita</span>
            <p class="font-medium">{{ data.vehicle?.policyNumber }}</p>
          </div>
          <div>
            <span class="text-gray-600 text-xs uppercase font-semibold">Carte Verde Valabila pana la</span>
            <p class="font-medium">{{ data.accidentDate }}</p>
          </div>
          <div class="md:col-span-2">
            <span class="text-gray-600 text-xs uppercase font-semibold">Conducator Auto</span>
            <p class="font-medium">{{ data.vehicle?.driverName }}</p>
            <p class="text-gray-600">{{ data.vehicle?.driverPhone }}</p>
          </div>
        </div>
      </div>

      <!-- Witnesses Summary -->
      <div class="border rounded-lg p-6 bg-purple-50" v-if="hasWitnesses">
        <h4 class="font-semibold text-gray-900 mb-4">5. Martori ({{ data.witnesses?.filter(w => w.name)?.length }})</h4>
        <div class="space-y-2 text-sm">
          <div v-for="(witness, idx) in data.witnesses?.filter(w => w.name)" :key="idx">
            <p class="font-medium">{{ witness.name }}</p>
            <p class="text-gray-600">{{ witness.phone }} / {{ witness.email }}</p>
          </div>
        </div>
      </div>

      <!-- Circumstances -->
      <div class="border rounded-lg p-6 bg-yellow-50">
        <h4 class="font-semibold text-gray-900 mb-4">12. Circumstante Selectate</h4>
        <p class="text-sm text-gray-700">
          {{ data.circumstances?.length > 0 ? data.circumstances.join(', ') : 'Nicio circumstanta selectata' }}
        </p>
      </div>

      <!-- Sketch Preview -->
      <div class="border rounded-lg p-6" v-if="data.sketch">
        <h4 class="font-semibold text-gray-900 mb-4">13. Schita Accidentului</h4>
        <img :src="data.sketch" alt="Accident sketch" class="max-w-full border rounded-lg" />
      </div>
    </div>

    <!-- Agreement & Notes -->
    <div class="border-t pt-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          14. Observatii
        </label>
        <textarea
          v-model="localData.notes"
          rows="4"
          placeholder="Adauga observatii suplimentare..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          @change="emitUpdate"
        />
      </div>

      <label class="flex items-start gap-3 cursor-pointer">
        <input
          v-model="agreedToTerms"
          type="checkbox"
          class="w-4 h-4 mt-1 text-indigo-600"
        />
        <span class="text-sm text-gray-700">
          Confirm ca datele furnizate sunt corecte si acord permisiunea pentru generarea constatarii amiabile in formatul oficial.
        </span>
      </label>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-between pt-6 border-t gap-4">
      <button
        @click="$emit('prev')"
        class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        ← Inapoi
      </button>
      <div class="flex gap-3">
        <button
          @click="downloadPDF"
          :disabled="!agreedToTerms"
          class="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          📥 Descarca PDF
        </button>
        <button
          @click="submitForm"
          :disabled="!agreedToTerms"
          class="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ✓ Finalizeaza
        </button>
      </div>
    </div>

    <!-- Loading & Success Messages -->
    <Transition name="fade">
      <div v-if="isLoading || successMessage || errorMessage" :key="isLoading ? 'loading' : successMessage ? 'success' : 'error'" class="rounded-lg p-4 text-center" :class="isLoading ? 'bg-blue-50 border border-blue-200' : successMessage ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
        <p :class="isLoading ? 'text-blue-800' : successMessage ? 'text-green-800' : 'text-red-800'">
          <span v-if="isLoading">Se genereaza PDF...</span>
          <span v-else-if="successMessage">✓ {{ successMessage }}</span>
          <span v-else-if="errorMessage">✗ {{ errorMessage }}</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'prev'])

const localData = ref({
  notes: props.data?.notes || '',
})

// Watch for prop changes from parent
watch(() => props.data, (newData) => {
  if (newData) {
    localData.value = {
      notes: newData.notes || '',
    }
  }
}, { deep: true })

const agreedToTerms = ref(false)
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const hasWitnesses = computed(() => {
  return props.data?.witnesses?.some((w: any) => w.name)
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'Necunoscuta'
  const date = new Date(dateStr)
  return date.toLocaleDateString('ro-RO')
}

const emitUpdate = () => {
  emit('update', localData.value)
}

const generateOfficialPDF = async () => {
  try {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    let yPos = 15

    // Title
    doc.setFontSize(14)
    doc.setFont(undefined, 'bold')
    doc.text('CONSTATARE AMIABILA DE ACCIDENT', pageWidth / 2, yPos, { align: 'center' })
    yPos += 6

    doc.setFontSize(9)
    doc.setFont(undefined, 'normal')
    doc.text('Se completeaza de catre AMBII conducatori auto', pageWidth / 2, yPos, { align: 'center' })
    yPos += 8

    // Section 1: Accident Details
    doc.setFont(undefined, 'bold')
    doc.text('1. DATA ACCIDENTULUI', 15, yPos)
    doc.setFont(undefined, 'normal')
    doc.text(`Data: ${formatDate(props.data?.accidentDate)}`, 20, yPos + 5)
    doc.text(`Ora: ${props.data?.accidentTime || 'Necunoscuta'}`, 90, yPos + 5)
    yPos += 12

    // Section 2: Location
    doc.setFont(undefined, 'bold')
    doc.text('2. LOCALIZARE', 15, yPos)
    doc.setFont(undefined, 'normal')
    doc.text(`Locul: ${props.data?.accidentLocation}`, 20, yPos + 5)
    doc.text(`Tara: ${props.data?.country}`, 20, yPos + 10)
    yPos += 15

    // Section 3: Injuries
    doc.setFont(undefined, 'bold')
    doc.text('3. RANITI?', 15, yPos)
    doc.setFont(undefined, 'normal')
    const injuryStatus = props.data?.injuries === 'yes' ? 'DA [X]' : 'NU [X]'
    doc.text(injuryStatus, 20, yPos + 5)
    yPos += 10

    // Section 4: Other Damages
    doc.setFont(undefined, 'bold')
    doc.text('4. DAUNE MATERIALE altele decat la vehiculele', 15, yPos)
    doc.setFont(undefined, 'normal')
    const damageStatus = props.data?.otherDamages === 'yes' ? 'DA [X]' : 'NU [X]'
    doc.text(damageStatus, 20, yPos + 5)
    yPos += 10

    // Section 5: Witnesses
    doc.setFont(undefined, 'bold')
    doc.text('5. MARTORI: nume, adrese, tel.:', 15, yPos)
    doc.setFont(undefined, 'normal')
    const witnessText = props.data?.witnesses?.filter((w: any) => w.name).map((w: any) => `${w.name} - ${w.phone}`).join('; ') || 'Fara martori'
    const witnessLines = doc.splitTextToSize(witnessText, pageWidth - 30)
    witnessLines.forEach((line: string) => {
      doc.text(line, 20, yPos + 5)
      yPos += 4
    })
    yPos += 8

    // Vehicle Section
    doc.setFont(undefined, 'bold')
    doc.setFillColor(51, 122, 183) // Blue
    doc.rect(15, yPos - 3, pageWidth - 30, 7, 'F')
    doc.setTextColor(255, 255, 255)
    doc.text('VEHICUL', 20, yPos + 2)
    doc.setTextColor(0, 0, 0)
    yPos += 8

    doc.setFont(undefined, 'normal')
    doc.text(`Marca, tip: ${props.data?.vehicle?.make} ${props.data?.vehicle?.model}`, 20, yPos)
    doc.text(`Nr. Inmatriculare: ${props.data?.vehicle?.licensePlate}`, 20, yPos + 5)
    doc.text(`VIN: ${props.data?.vehicle?.vin || 'N/A'}`, 20, yPos + 10)
    doc.text(`Asigurator: ${props.data?.vehicle?.insuranceCompany}`, 20, yPos + 15)
    doc.text(`Nr. Polita: ${props.data?.vehicle?.policyNumber}`, 20, yPos + 20)
    doc.text(`Conducator: ${props.data?.vehicle?.driverName}`, 20, yPos + 25)
    doc.text(`Telefon: ${props.data?.vehicle?.driverPhone}`, 20, yPos + 30)
    doc.text(`Email: ${props.data?.vehicle?.driverEmail}`, 20, yPos + 35)
    yPos += 45

    // Section 12: Circumstances
    if (props.data?.circumstances && props.data.circumstances.length > 0) {
      doc.setFont(undefined, 'bold')
      doc.setFillColor(255, 193, 7) // Yellow
      doc.rect(15, yPos - 3, pageWidth - 30, 7, 'F')
      doc.setTextColor(0, 0, 0)
      doc.text('12. CIRCUMSTANTE', 20, yPos + 2)
      doc.setFont(undefined, 'normal')
      yPos += 8
      const circText = props.data.circumstances.join(', ')
      const circLines = doc.splitTextToSize(circText, pageWidth - 30)
      circLines.forEach((line: string) => {
        doc.text(line, 20, yPos)
        yPos += 5
      })
      yPos += 5
    }

    // Section 13: Sketch
    if (props.data?.sketch) {
      if (yPos > pageHeight - 50) {
        doc.addPage()
        yPos = 15
      }
      doc.setFont(undefined, 'bold')
      doc.text('13. SCHITA ACCIDENTULUI', 15, yPos)
      yPos += 8
      
      try {
        const img = new Image()
        img.src = props.data.sketch
        img.onload = () => {
          doc.addImage(props.data.sketch, 'PNG', 20, yPos, 170, 80)
        }
      } catch (e) {
        doc.setFont(undefined, 'normal')
        doc.text('[Schita anexata in format imagine]', 20, yPos)
      }
      yPos += 90
    }

    // Section 14: Observations
    if (localData.value.notes) {
      if (yPos > pageHeight - 40) {
        doc.addPage()
        yPos = 15
      }
      doc.setFont(undefined, 'bold')
      doc.text('14. OBSERVATII', 15, yPos)
      doc.setFont(undefined, 'normal')
      yPos += 5
      const obsLines = doc.splitTextToSize(localData.value.notes, pageWidth - 30)
      obsLines.forEach((line: string) => {
        if (yPos > pageHeight - 20) {
          doc.addPage()
          yPos = 15
        }
        doc.text(line, 20, yPos)
        yPos += 5
      })
    }

    // Footer
    yPos = pageHeight - 10
    doc.setFontSize(8)
    doc.text('Constatare generata online. Acceptata de toate societatile de asigurare din Romania.', pageWidth / 2, yPos, { align: 'center' })

    // Save
    const filename = `constatare_amiabila_${new Date().getTime()}.pdf`
    doc.save(filename)

    successMessage.value = `PDF descarcat cu succes: ${filename}`
    isLoading.value = false
  } catch (error) {
    console.error('PDF generation error:', error)
    errorMessage.value = 'Eroare la generarea PDF-ului'
    isLoading.value = false
  }
}

const downloadPDF = async () => {
  await generateOfficialPDF()
}

const submitForm = async () => {
  try {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    await generateOfficialPDF()

    const response = await $fetch('/api/constatare-amiabila', {
      method: 'POST',
      body: {
        type: 'constatare_amiabila',
        formData: props.data,
        notes: localData.value.notes,
        submittedAt: new Date().toISOString(),
      },
    })

    successMessage.value = 'Constatarea a fost trimisa cu succes! Veti primi confirmarea pe email.'
    isLoading.value = false

    localStorage.removeItem('constatare_amiabila_data')
  } catch (error) {
    console.error('Submission error:', error)
    errorMessage.value = 'Eroare la trimiterea constatarii. Descarca PDF si trimite manual.'
    isLoading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
