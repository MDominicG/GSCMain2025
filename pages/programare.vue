<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Programare Online</h1>
          <p class="text-xl text-primary-100">
            Programează-te rapid și simplu pentru service auto sau constatare daune
          </p>
        </div>
      </div>
    </section>

    <!-- Appointment Form -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <div class="card p-8 md:p-12">
            <h2 class="text-3xl font-bold mb-8 text-center">Formular Programare</h2>
            
            <form @submit.prevent="submitAppointment" class="space-y-6">
              <!-- Service Type -->
              <div>
                <label class="block text-sm font-semibold mb-3">Tip Programare *</label>
                <div class="grid md:grid-cols-2 gap-4">
                  <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="form.type === 'daune' ? 'border-primary-600 bg-primary-50' : 'border-secondary-300 hover:border-primary-400'">
                    <input type="radio" v-model="form.type" value="daune" required class="mr-3" />
                    <div>
                      <p class="font-semibold">Constatare Daune</p>
                      <p class="text-sm text-secondary-600">Notificare și evaluare daună auto</p>
                    </div>
                  </label>
                  <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="form.type === 'service' ? 'border-primary-600 bg-primary-50' : 'border-secondary-300 hover:border-primary-400'">
                    <input type="radio" v-model="form.type" value="service" required class="mr-3" />
                    <div>
                      <p class="font-semibold">Service Auto</p>
                      <p class="text-sm text-secondary-600">Reparații, întreținere, diagnostic</p>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Personal Info -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-semibold mb-2">Nume Complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                    placeholder="Ion Popescu"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-semibold mb-2">Telefon *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  placeholder="email@exemplu.ro"
                />
              </div>

              <!-- Vehicle Info -->
              <div class="grid md:grid-cols-3 gap-4">
                <div>
                  <label for="carBrand" class="block text-sm font-semibold mb-2">Marcă Vehicul *</label>
                  <input 
                    type="text" 
                    id="carBrand" 
                    v-model="form.carBrand"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                    placeholder="Dacia"
                  />
                </div>
                <div>
                  <label for="carModel" class="block text-sm font-semibold mb-2">Model *</label>
                  <input 
                    type="text" 
                    id="carModel" 
                    v-model="form.carModel"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                    placeholder="Logan"
                  />
                </div>
                <div>
                  <label for="carYear" class="block text-sm font-semibold mb-2">An Fabricație</label>
                  <input 
                    type="number" 
                    id="carYear" 
                    v-model="form.carYear"
                    min="1990"
                    :max="new Date().getFullYear()"
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                    placeholder="2020"
                  />
                </div>
              </div>

              <!-- Insurance (if daune) -->
              <div v-if="form.type === 'daune'">
                <label for="insurance" class="block text-sm font-semibold mb-2">Societate Asigurare *</label>
                <select 
                  id="insurance" 
                  v-model="form.insurance"
                  :required="form.type === 'daune'"
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Selectează asigurarea</option>
                  <option value="grawe">Grawe</option>
                  <option value="omniasig">Omniasig</option>
                  <option value="allianz">Allianz-Țiriac</option>
                  <option value="asirom">Asirom</option>
                  <option value="generali">Generali</option>
                  <option value="groupama">Groupama</option>
                  <option value="axeria">Axeria</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              <!-- Service Type (if service) -->
              <div v-if="form.type === 'service'">
                <label for="serviceType" class="block text-sm font-semibold mb-2">Tip Service *</label>
                <select 
                  id="serviceType" 
                  v-model="form.serviceType"
                  :required="form.type === 'service'"
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Selectează tipul de service</option>
                  <option value="mecanica">Mecanică Auto</option>
                  <option value="tinichigerie">Tinichigerie</option>
                  <option value="vopsitorie">Vopsitorie</option>
                  <option value="diagnostic">Diagnostic</option>
                  <option value="revizie">Revizie Periodică</option>
                  <option value="altele">Altele</option>
                </select>
              </div>

              <!-- Date & Time -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="date" class="block text-sm font-semibold mb-2">Data Dorită *</label>
                  <input 
                    type="date" 
                    id="date" 
                    v-model="form.date"
                    :min="new Date().toISOString().split('T')[0]"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label for="time" class="block text-sm font-semibold mb-2">Ora Dorită *</label>
                  <select 
                    id="time" 
                    v-model="form.time"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Selectează ora</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold mb-2">Detalii Suplimentare</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none"
                  placeholder="Descrie problema sau solicitarea ta..."
                ></textarea>
              </div>

              <!-- GDPR -->
              <div class="flex items-start">
                <input 
                  type="checkbox" 
                  id="gdpr" 
                  v-model="form.gdpr"
                  required
                  class="mt-1 mr-3"
                />
                <label for="gdpr" class="text-sm text-secondary-600">
                  Sunt de acord cu procesarea datelor personale conform <NuxtLink to="/politica-confidentialitate" class="text-primary-600 hover:underline">Politicii de Confidențialitate</NuxtLink> *
                </label>
              </div>

              <!-- Honeypot and timestamp (hidden) -->
              <div class="hidden" aria-hidden="true">
                <label>Do not fill <input type="text" v-model="form.website" name="website" tabindex="-1" autocomplete="off" /></label>
                <input type="hidden" :value="form.ts" name="ts" />
              </div>

              <!-- Submit -->
              <button type="submit" :disabled="formStatus === 'sending'" class="btn-primary w-full text-lg">
                <Icon name="mdi:calendar-check" class="mr-2" />
                <span v-if="formStatus !== 'sending'">Trimite Programarea</span>
                <span v-else>Se trimite…</span>
              </button>
            </form>

            <div v-if="formStatus === 'success'" class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-green-800 flex items-center">
                <Icon name="mdi:check-circle" class="mr-2 text-xl" />
                Programarea a fost trimisă cu succes! Te vom contacta în cel mai scurt timp pentru confirmare.
              </p>
            </div>

            <div v-if="formStatus === 'error'" class="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p class="text-red-800 flex items-center">
                <Icon name="mdi:alert-circle" class="mr-2 text-xl" />
                {{ errorMessage || 'A apărut o eroare. Te rugăm să ne contactezi telefonic la 0767 517 505.' }}
              </p>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="mt-8 bg-primary-50 rounded-xl p-8 text-center">
            <h3 class="text-xl font-bold mb-4">Preferi să ne suni direct?</h3>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+40767517505" class="btn-primary">
                <Icon name="mdi:phone" class="mr-2" />
                0767 517 505 (Daune)
              </a>
              <a href="tel:+40799777357" class="btn-outline">
                <Icon name="mdi:phone" class="mr-2" />
                0799 777 357 (Service)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  type: '',
  name: '',
  phone: '',
  email: '',
  carBrand: '',
  carModel: '',
  carYear: '',
  insurance: '',
  serviceType: '',
  date: '',
  time: '',
  message: '',
  gdpr: false,
  website: '', // honeypot (should stay empty)
  ts: Date.now()
})

const formStatus = ref('') // '', 'sending', 'success', 'error'
const errorMessage = ref('')

onMounted(() => {
  form.value.ts = Date.now()
})

const submitAppointment = async () => {
  formStatus.value = 'sending'
  errorMessage.value = ''
  try {
    const res = await fetch('/api/programare', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (!res.ok) {
      const data = await res.json().catch(()=>({message: 'Server error'}))
      throw new Error(data?.message || 'Server error')
    }
    const data = await res.json()
    if (data?.status === 'ok') {
      formStatus.value = 'success'
      // Reset form after 3 seconds
      setTimeout(() => {
        form.value = {
          type: '',
          name: '',
          phone: '',
          email: '',
          carBrand: '',
          carModel: '',
          carYear: '',
          insurance: '',
          serviceType: '',
          date: '',
          time: '',
          message: '',
          gdpr: false,
          website: '',
          ts: Date.now()
        }
        formStatus.value = ''
      }, 3000)
    } else {
      throw new Error(data?.message || 'Eroare la trimitere')
    }
  } catch (err) {
    formStatus.value = 'error'
    errorMessage.value = err?.message || 'A apărut o eroare.'
    console.error('Appointment error:', err)
  }
}

useHead({
  title: 'Programare Online',
  meta: [
    { 
      name: 'description', 
      content: 'Programare online pentru service auto sau constatare daune la GSC Auto București. Alege data și ora dorită și te contactăm pentru confirmare.' 
    },
    {
      name: 'keywords',
      content: 'programare service auto, programare daune auto, programare online bucuresti, constatare daune'
    }
  ]
})
</script>
