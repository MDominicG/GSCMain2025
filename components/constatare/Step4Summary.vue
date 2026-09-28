<template>
  <div class="space-y-6">
    <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-green-900">✓ Rezumat & Export</h3>
      <p class="text-sm text-green-800 mt-2">Revizuiește datele și exportă în format PDF</p>
    </div>

    <!-- Summary Sections -->
    <div class="space-y-6">
      <!-- Accident Summary -->
      <div class="border rounded-lg p-6">
        <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">📍</span>
          Detalii Accident
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-gray-600">Data:</span>
            <p class="font-medium">{{ formatDate(data.accidentDate) }}</p>
          </div>
          <div>
            <span class="text-gray-600">Ora:</span>
            <p class="font-medium">{{ data.accidentTime || 'Necunoscută' }}</p>
          </div>
          <div class="md:col-span-2">
            <span class="text-gray-600">Locul:</span>
            <p class="font-medium">{{ data.accidentLocation }}</p>
          </div>
          <div>
            <span class="text-gray-600">Țara:</span>
            <p class="font-medium">{{ data.country }}</p>
          </div>
          <div>
            <span class="text-gray-600">Răniți:</span>
            <p class="font-medium text-red-600">{{ data.injuries === 'yes' ? 'DA' : 'Nu' }}</p>
          </div>
          <div>
            <span class="text-gray-600">Alte daune:</span>
            <p class="font-medium">{{ data.otherDamages === 'yes' ? 'DA' : 'Nu' }}</p>
          </div>
          <div class="md:col-span-2" v-if="data.accidentDescription">
            <span class="text-gray-600">Descriere:</span>
            <p class="font-medium">{{ data.accidentDescription }}</p>
          </div>
        </div>
      </div>

      <!-- Vehicle Summary -->
      <div class="border rounded-lg p-6 bg-blue-50">
        <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">🚗</span>
          Date Vehicul
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-gray-600">Vehicul:</span>
            <p class="font-medium">{{ data.vehicle?.make }} {{ data.vehicle?.model }} ({{ data.vehicle?.year }})</p>
          </div>
          <div>
            <span class="text-gray-600">Înmatriculare:</span>
            <p class="font-medium">{{ data.vehicle?.licensePlate }}</p>
          </div>
          <div>
            <span class="text-gray-600">VIN:</span>
            <p class="font-medium">{{ data.vehicle?.vin || 'N/A' }}</p>
          </div>
          <div>
            <span class="text-gray-600">Asigurare:</span>
            <p class="font-medium">{{ data.vehicle?.insuranceCompany }}</p>
          </div>
          <div>
            <span class="text-gray-600">Poliță:</span>
            <p class="font-medium">{{ data.vehicle?.policyNumber }}</p>
          </div>
          <div>
            <span class="text-gray-600">Permis:</span>
            <p class="font-medium">{{ data.vehicle?.licenseNumber || 'N/A' }}</p>
          </div>
          <div class="md:col-span-2">
            <span class="text-gray-600">Șofer:</span>
            <p class="font-medium">{{ data.vehicle?.driverName }}</p>
            <p class="text-gray-600">{{ data.vehicle?.driverPhone }} / {{ data.vehicle?.driverEmail }}</p>
          </div>
          <div class="md:col-span-2" v-if="data.vehicle?.damageDescription">
            <span class="text-gray-600">Daune:</span>
            <p class="font-medium">{{ data.vehicle?.damageDescription }}</p>
          </div>
        </div>
      </div>

      <!-- Witnesses Summary -->
      <div class="border rounded-lg p-6 bg-purple-50" v-if="hasWitnesses">
        <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">👥</span>
          Martori ({{ data.witnesses?.filter(w => w.name)?.length }})
        </h4>
        <div class="space-y-3">
          <div v-for="(witness, idx) in data.witnesses?.filter(w => w.name)" :key="idx" class="text-sm">
            <p class="font-medium">{{ witness.name }}</p>
            <p class="text-gray-600">{{ witness.phone }} / {{ witness.email }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Notes Section -->
    <div class="border-t pt-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Note suplimentare
        </label>
        <textarea
          v-model="localData.notes"
          rows="4"
          placeholder="Adaugă orice informații suplimentare..."
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
          Confirm că datele furnizate sunt corecte și acord permisiunea pentru generarea și trimiterea constatării.
        </span>
      </label>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-between pt-6 border-t gap-4">
      <button
        @click="$emit('prev')"
        class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
      >
        ← Înapoi
      </button>
      <div class="flex gap-3">
        <button
          @click="downloadPDF"
          :disabled="!agreedToTerms"
          class="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          📥 Descarcă PDF
        </button>
        <button
          @click="submitForm"
          :disabled="!agreedToTerms"
          class="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ✓ Finalizează
        </button>
      </div>
    </div>

    <!-- Loading & Success Messages -->
    <Transition name="fade">
      <div v-if="isLoading || successMessage || errorMessage" :key="isLoading ? 'loading' : successMessage ? 'success' : 'error'" class="rounded-lg p-4 text-center" :class="isLoading ? 'bg-blue-50 border border-blue-200' : successMessage ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
        <p :class="isLoading ? 'text-blue-800' : successMessage ? 'text-green-800' : 'text-red-800'">
          <span v-if="isLoading">Se generează PDF...</span>
          <span v-else-if="successMessage">✓ {{ successMessage }}</span>
          <span v-else-if="errorMessage">✗ {{ errorMessage }}</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'prev'])

const localData = ref({
  notes: props.data?.notes || '',
})

const agreedToTerms = ref(false)
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const hasWitnesses = computed(() => {
  return props.data?.witnesses?.some((w: any) => w.name)
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'Necunoscută'
  const date = new Date(dateStr)
  return date.toLocaleDateString('ro-RO')
}

const emitUpdate = () => {
  emit('update', localData.value)
}

const generatePDF = async () => {
  try {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    let yPosition = 20

    // Title
    doc.setFontSize(20)
    doc.text('CONSTATARE', pageWidth / 2, yPosition, { align: 'center' })
    yPosition += 15

    // Date generated
    doc.setFontSize(10)
    doc.text(`Generat: ${new Date().toLocaleDateString('ro-RO')}`, 20, yPosition)
    yPosition += 10

    // Section: Accident
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text('DETALII ACCIDENT', 20, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    const accidentInfo = [
      `Data: ${formatDate(props.data?.accidentDate)}`,
      `Ora: ${props.data?.accidentTime || 'Necunoscută'}`,
      `Locul: ${props.data?.accidentLocation}`,
      `Țara: ${props.data?.country}`,
      `Răniți: ${props.data?.injuries === 'yes' ? 'DA' : 'Nu'}`,
      `Alte daune: ${props.data?.otherDamages === 'yes' ? 'DA' : 'Nu'}`,
    ]
    accidentInfo.forEach((line) => {
      doc.text(line, 20, yPosition)
      yPosition += 6
    })

    if (props.data?.accidentDescription) {
      yPosition += 3
      doc.text('Descriere:', 20, yPosition)
      yPosition += 6
      const descLines = doc.splitTextToSize(props.data.accidentDescription, pageWidth - 40)
      descLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 6
      })
    }

    yPosition += 5

    // Section: Vehicle
    doc.setFontSize(12)
    doc.setFont(undefined, 'bold')
    doc.text('DATE VEHICUL', 20, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont(undefined, 'normal')
    const vehicleInfo = [
      `Vehicul: ${props.data?.vehicle?.make} ${props.data?.vehicle?.model} (${props.data?.vehicle?.year})`,
      `Înmatriculare: ${props.data?.vehicle?.licensePlate}`,
      `VIN: ${props.data?.vehicle?.vin}`,
      `Asigurare: ${props.data?.vehicle?.insuranceCompany}`,
      `Poliță: ${props.data?.vehicle?.policyNumber}`,
      `Șofer: ${props.data?.vehicle?.driverName}`,
      `Telefon: ${props.data?.vehicle?.driverPhone}`,
      `Email: ${props.data?.vehicle?.driverEmail}`,
      `Permis: ${props.data?.vehicle?.licenseNumber}`,
    ]
    vehicleInfo.forEach((line) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage()
        yPosition = 20
      }
      doc.text(line, 20, yPosition)
      yPosition += 6
    })

    if (props.data?.vehicle?.damageDescription) {
      yPosition += 3
      if (yPosition > pageHeight - 30) {
        doc.addPage()
        yPosition = 20
      }
      doc.text('Daune:', 20, yPosition)
      yPosition += 6
      const damageLines = doc.splitTextToSize(props.data.vehicle.damageDescription, pageWidth - 40)
      damageLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 6
      })
    }

    // Section: Witnesses
    if (hasWitnesses.value) {
      yPosition += 5
      if (yPosition > pageHeight - 30) {
        doc.addPage()
        yPosition = 20
      }
      doc.setFontSize(12)
      doc.setFont(undefined, 'bold')
      doc.text('MARTORI', 20, yPosition)
      yPosition += 8

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      props.data?.witnesses?.filter((w: any) => w.name).forEach((witness: any, idx: number) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(`${idx + 1}. ${witness.name}`, 20, yPosition)
        yPosition += 6
        doc.text(`   Tel: ${witness.phone}`, 20, yPosition)
        yPosition += 6
        doc.text(`   Email: ${witness.email}`, 20, yPosition)
        yPosition += 8
      })
    }

    // Section: Notes
    if (localData.value.notes) {
      yPosition += 5
      if (yPosition > pageHeight - 30) {
        doc.addPage()
        yPosition = 20
      }
      doc.setFontSize(12)
      doc.setFont(undefined, 'bold')
      doc.text('NOTE SUPLIMENTARE', 20, yPosition)
      yPosition += 8

      doc.setFontSize(10)
      doc.setFont(undefined, 'normal')
      const noteLines = doc.splitTextToSize(localData.value.notes, pageWidth - 40)
      noteLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 6
      })
    }

    // Footer
    yPosition = pageHeight - 15
    doc.setFontSize(8)
    doc.text('Constatare generată online. Acceptată de societățile de asigurare din România.', 20, yPosition)

    // Save
    const filename = `constatare_${new Date().getTime()}.pdf`
    doc.save(filename)

    successMessage.value = `PDF descărcat cu succes: ${filename}`
    isLoading.value = false
  } catch (error) {
    console.error('PDF generation error:', error)
    errorMessage.value = 'Eroare la generarea PDF-ului'
    isLoading.value = false
  }
}

const downloadPDF = async () => {
  await generatePDF()
}

const submitForm = async () => {
  try {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    // Generate PDF first
    await generatePDF()

    // Then send to server
    const response = await $fetch('/api/constatare-amiabila', {
      method: 'POST',
      body: {
        type: 'constatare_amiabila',
        formData: props.data,
        notes: localData.value.notes,
        submittedAt: new Date().toISOString(),
      },
    })

    successMessage.value = 'Constatarea a fost trimisă cu succes! Veți primi confirmarea pe email.'
    isLoading.value = false

    // Clear localStorage after success
    localStorage.removeItem('constatare_amiabila_data')
  } catch (error) {
    console.error('Submission error:', error)
    errorMessage.value = 'Eroare la trimiterea constatării. Descarcă PDF și trimite manual.'
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
