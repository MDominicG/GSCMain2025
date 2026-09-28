<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contactează-ne</h1>
          <p class="text-xl text-primary-100">
            Suntem aici să te ajutăm. Contactează-ne telefonic, prin email sau vizitează service-ul nostru
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Informații Contact</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Icon name="mdi:phone" class="text-2xl" />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Telefon</h3>
                  <a href="tel:+40799777357" class="text-primary-600 hover:text-primary-700 block">0799 777 357 (Constatare si solutionare daune auto)</a>
                  <a href="tel:+40767517505" class="text-primary-600 hover:text-primary-700 block">0767 517 505 (Service Auto)</a>
                  <a href="tel:+40725973595" class="text-secondary-600 hover:text-primary-700 block">0725 973 595 (Tinichigerie si vopsitorie)</a>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Icon name="mdi:email" class="text-2xl" />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:office@gsc-auto.ro" class="text-primary-600 hover:text-primary-700 block">office@gsc-auto.ro</a>
                  <a href="mailto:gsc97srl@yahoo.com" class="text-secondary-600 hover:text-primary-700 block">gsc97srl@yahoo.com</a>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Icon name="mdi:map-marker" class="text-2xl" />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Adresă</h3>
                  <p class="text-secondary-700">
                    Strada Ritmului, nr. 8<br>
                    (intrarea prin Aleea Magura Vulturului)<br>
                    Sector 2, București<br>
                    România
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Icon name="mdi:clock-outline" class="text-2xl" />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Program</h3>
                  <div class="text-secondary-700">
                    <p><strong>Luni - Vineri:</strong> 09:00 - 18:00</p>
                    <p><strong>Sâmbătă - Duminică:</strong> Închis</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 space-y-4">
              <a 
                href="https://www.google.com/maps/dir//General+Services+Company+97+SRL+Aleea+Magura+Vulturului+Strada+Ritmului+8" 
                target="_blank"
                class="btn-primary inline-flex items-center"
              >
                <Icon name="mdi:google-maps" class="mr-2" />
                Deschide în Google Maps
              </a>
              <a 
                href="https://waze.com/ul/hsxfsfdvbv" 
                target="_blank"
                class="btn-outline inline-flex items-center ml-4"
              >
                <Icon name="mdi:waze" class="mr-2" />
                Deschide în Waze
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold mb-6">Trimite-ne un Mesaj</h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-semibold mb-2">Nume Complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  placeholder="Introdu numele tău"
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

              <div>
                <label for="subject" class="block text-sm font-semibold mb-2">Subiect *</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Selectează subiectul</option>
                  <option value="daune">Notificare Daună Auto</option>
                  <option value="service">Programare Service</option>
                  <option value="info">Solicitare Informații</option>
                  <option value="oferta">Cerere Ofertă</option>
                  <option value="altele">Altele</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold mb-2">Mesaj *</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none"
                  placeholder="Descrie pe scurt cererea ta..."
                ></textarea>
              </div>

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

              <button type="submit" class="btn-primary w-full text-lg">
                <Icon name="mdi:send" class="mr-2" />
                Trimite Mesaj
              </button>
            </form>

            <div v-if="formStatus === 'success'" class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-green-800 flex items-center">
                <Icon name="mdi:check-circle" class="mr-2 text-xl" />
                Mesajul a fost trimis cu succes! Te vom contacta în curând.
              </p>
            </div>

            <div v-if="formStatus === 'error'" class="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p class="text-red-800 flex items-center">
                <Icon name="mdi:alert-circle" class="mr-2 text-xl" />
                A apărut o eroare. Te rugăm să ne contactezi telefonic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="py-20 bg-secondary-50">
      <div class="section-container">
        <h2 class="text-3xl font-bold mb-8 text-center">Cum Ajungi la Noi</h2>
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1234567890123!2d26.18307!3d44.44413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4681ed6897%3A0xd31ac188c034de48!2sGeneral%20Services%20Company%2097%20SRL!5e0!3m2!1sen!2sro!4v1234567890"
            width="100%" 
            height="500" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  gdpr: false
})

const formStatus = ref('')

const submitForm = () => {
  // In production, this would send to a backend API
  formStatus.value = 'success'
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      gdpr: false
    }
    formStatus.value = ''
  }, 3000)
}

useHead({
  title: 'Contact',
  meta: [
    { 
      name: 'description', 
      content: 'Contactează GSC Auto București - Strada Ritmului nr.8, Sector 2. Tel: 0767 517 505 (Daune), 0799 777 357 (Service). Email: office@gsc-auto.ro. Program: L-V 10:00-18:30.' 
    },
    {
      name: 'keywords',
      content: 'contact gsc auto, service auto bucuresti sector 2, daune auto contact, strada ritmului bucuresti'
    }
  ]
})
</script>
