<template>
  <div class="space-y-6">
    <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
      <h3 class="font-semibold text-orange-900">Schita Accidentului</h3>
      <p class="text-sm text-orange-800 mt-2">Marcheaza pozitia vehiculului, directia de deplasare si punctul de impact</p>
    </div>

    <!-- Circumstance Selection -->
    <div class="border rounded-lg p-6 bg-yellow-50">
      <h4 class="font-semibold text-gray-900 mb-4">12. Circumstante Accidentului</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label v-for="(circ, idx) in circumstances" :key="idx" class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="localData.circumstances"
            type="checkbox"
            :value="circ.id"
            class="w-4 h-4 text-indigo-600"
            @change="emitUpdate"
          />
          <span class="text-sm text-gray-700">{{ circ.label }}</span>
        </label>
      </div>
    </div>

    <!-- Vehicle Rotation Slider -->
    <div class="border rounded-lg p-6">
      <h4 class="font-semibold text-gray-900 mb-4">Rotatie Vehicul</h4>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Unghi de rotatie: {{ localData.vehicleRotation }}°
          </label>
          <input
            v-model="localData.vehicleRotation"
            type="range"
            min="0"
            max="360"
            step="5"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            @change="emitUpdate"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-2">
            <span>0°</span>
            <span>90°</span>
            <span>180°</span>
            <span>270°</span>
            <span>360°</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sketch Canvas -->
    <div class="border rounded-lg p-6 bg-gray-50">
      <h4 class="font-semibold text-gray-900 mb-4">13. Schita Accidentului - Zona de Desenare</h4>
      <p class="text-sm text-gray-600 mb-4">
        Completeaza schita cu: 1. pozitia drumului 2. directia de deplasare 3. pozitia vehiculelor 4. semnele de circulatie 5. numele strazilor
      </p>
      
      <div class="flex gap-2 mb-4">
        <button
          @click="clearSketch"
          class="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm"
        >
          Sterge schita
        </button>
        <button
          @click="toggleDrawMode"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
          :class="{ 'opacity-50': !isDrawing }"
        >
          {{ isDrawing ? '✓ Mod desenare ON' : 'Mod desenare OFF' }}
        </button>
        <select v-model="brushColor" class="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option value="#000000">Negru</option>
          <option value="#FF0000">Rosu</option>
          <option value="#0000FF">Albastru</option>
          <option value="#FFA500">Portocaliu</option>
        </select>
        <select v-model="brushSize" class="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option value="2">Subtire (2px)</option>
          <option value="4">Normal (4px)</option>
          <option value="8">Gros (8px)</option>
        </select>
      </div>

      <canvas
        ref="canvasElement"
        width="700"
        height="400"
        class="border-2 border-gray-300 rounded-lg bg-white w-full cursor-crosshair"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseout="stopDrawing"
        @touchstart="startDrawing"
        @touchmove="draw"
        @touchend="stopDrawing"
      />
      <p class="text-xs text-gray-500 mt-2">Deseneaza direct pe canvas. Poti adauga note, sageti, si alte elemente.</p>
    </div>

    <!-- Impact Points -->
    <div class="border rounded-lg p-6">
      <h4 class="font-semibold text-gray-900 mb-4">Puncte de Impact & Pagube</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Indicati punctul initial de impact pentru vehicul
          </label>
          <select v-model="selectedImpactPoint" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option value="">-- Selectati punctul --</option>
            <option value="front">Fata</option>
            <option value="back">Spate</option>
            <option value="left">Stanga</option>
            <option value="right">Dreapta</option>
            <option value="roof">Acoperis</option>
            <option value="multiple">Multiple puncte</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Pagube vizibile (descriere)
          </label>
          <input
            v-model="visibleDamage"
            type="text"
            placeholder="Ex: Lovire fata, deformatie capota"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
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
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['update', 'next', 'prev'])

const canvasElement = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let isDrawingMode = ref(false)
let isDrawing = ref(false)
let lastX = 0
let lastY = 0

const brushColor = ref('#000000')
const brushSize = ref('4')
const selectedImpactPoint = ref('')
const visibleDamage = ref('')

const localData = ref({
  sketch: props.data?.sketch || '',
  vehicleRotation: props.data?.vehicleRotation || 0,
  impactPoints: props.data?.impactPoints || [],
  circumstances: props.data?.circumstances || [],
})

// Watch for prop changes from parent
watch(() => props.data, (newData) => {
  if (newData) {
    localData.value = {
      sketch: newData.sketch || '',
      vehicleRotation: newData.vehicleRotation || 0,
      impactPoints: newData.impactPoints || [],
      circumstances: newData.circumstances || [],
    }
  }
}, { deep: true })

const circumstances = [
  { id: 1, label: 'Drum drept' },
  { id: 2, label: 'Intersectie' },
  { id: 3, label: 'Sens giratoriu' },
  { id: 4, label: 'Parcane' },
  { id: 5, label: 'Intrand in parcare' },
  { id: 6, label: 'Plecand din parcare' },
  { id: 7, label: 'Depasire' },
  { id: 8, label: 'Viraj la dreapta' },
  { id: 9, label: 'Viraj la stanga' },
  { id: 10, label: 'Schimband banda' },
  { id: 11, label: 'Stationat' },
  { id: 12, label: 'Mergand cu spatele' },
  { id: 13, label: 'Intrand in sens opus' },
  { id: 14, label: 'Venind din dreapta' },
  { id: 15, label: 'Neobservand semaforul' },
]

const toggleDrawMode = () => {
  isDrawingMode.value = !isDrawingMode.value
}

const clearSketch = () => {
  if (ctx && canvasElement.value) {
    ctx.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height)
    localData.value.sketch = ''
    emitUpdate()
  }
}

const getMousePos = (e: MouseEvent | TouchEvent) => {
  const canvas = canvasElement.value
  if (!canvas) return { x: 0, y: 0 }
  
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height
  
  let x, y
  
  if (e instanceof TouchEvent) {
    x = (e.touches[0].clientX - rect.left) * scaleX
    y = (e.touches[0].clientY - rect.top) * scaleY
  } else {
    x = (e.clientX - rect.left) * scaleX
    y = (e.clientY - rect.top) * scaleY
  }
  
  return { x, y }
}

const startDrawing = (e: MouseEvent | TouchEvent) => {
  if (!isDrawingMode.value) return
  
  const { x, y } = getMousePos(e)
  lastX = x
  lastY = y
  isDrawing.value = true
  e.preventDefault()
}

const draw = (e: MouseEvent | TouchEvent) => {
  if (!isDrawing.value || !ctx || !isDrawingMode.value) return
  
  const { x, y } = getMousePos(e)
  
  ctx.strokeStyle = brushColor.value
  ctx.lineWidth = parseInt(brushSize.value)
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(x, y)
  ctx.stroke()
  
  lastX = x
  lastY = y
  e.preventDefault()
}

const stopDrawing = () => {
  isDrawing.value = false
  emitUpdate()
}

const emitUpdate = () => {
  if (canvasElement.value) {
    localData.value.sketch = canvasElement.value.toDataURL()
  }
  emit('update', localData.value)
}

const handleNext = () => {
  emitUpdate()
  emit('next')
}

onMounted(() => {
  const canvas = canvasElement.value
  if (canvas) {
    ctx = canvas.getContext('2d')
    // Draw grid
    if (ctx) {
      ctx.strokeStyle = '#f0f0f0'
      ctx.lineWidth = 1
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }
      
      // Load previous sketch if exists
      if (props.data?.sketch) {
        const img = new Image()
        img.src = props.data.sketch
        img.onload = () => {
          ctx?.drawImage(img, 0, 0)
        }
      }
    }
  }
})
</script>

<style scoped>
canvas {
  touch-action: none;
}
</style>
