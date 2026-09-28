<template>
  <div>
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <h1>Politică Cookies</h1>
          <p class="text-secondary-600">Ultima actualizare: {{ new Date().toLocaleDateString('ro-RO') }}</p>

          <h2>Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere text mici care sunt plasate pe computerul, tableta sau 
            telefonul dumneavoastră atunci când vizitați site-ul nostru web. Acestea ajută 
            site-ul să funcționeze eficient și să vă ofere o experiență mai bună.
          </p>

          <h2>Cum folosim cookie-urile?</h2>
          <p>Utilizăm următoarele tipuri de cookie-uri:</p>

          <h3>1. Cookie-uri strict necesare</h3>
          <p>
            Aceste cookie-uri sunt esențiale pentru funcționarea site-ului. Ele vă permit să 
            navigați și să utilizați funcțiile de bază.
          </p>
          <ul>
            <li>Cookie-uri de sesiune</li>
            <li>Cookie-uri de securitate</li>
          </ul>

          <h3>2. Cookie-uri de performanță</h3>
          <p>
            Aceste cookie-uri colectează informații despre modul în care vizitatorii utilizează 
            site-ul, pentru a ne ajuta să îmbunătățim funcționarea acestuia.
          </p>
          <ul>
            <li>Google Analytics (opțional, cu consimțământ)</li>
          </ul>

          <h3>3. Cookie-uri funcționale</h3>
          <p>
            Aceste cookie-uri permit site-ului să rețină alegerile făcute (cum ar fi limba) și să 
            ofere funcții îmbunătățite.
          </p>

          <h3>4. Cookie-uri de marketing</h3>
          <p>
            Aceste cookie-uri sunt folosite pentru a afișa reclame relevante. Sunt activate doar 
            cu consimțământul dumneavoastră.
          </p>

          <h2>Gestionarea cookie-urilor</h2>
          <p>
            Puteți controla și/sau șterge cookie-urile după dorință. Puteți șterge toate 
            cookie-urile de pe computerul dumneavoastră și puteți seta majoritatea browserelor 
            să le blocheze.
          </p>

          <h3>Cum să ștergeți cookie-urile:</h3>
          <ul>
            <li><strong>Chrome:</strong> Setări > Confidențialitate și securitate > Cookie-uri</li>
            <li><strong>Firefox:</strong> Opțiuni > Confidențialitate și securitate</li>
            <li><strong>Safari:</strong> Preferințe > Confidențialitate</li>
            <li><strong>Edge:</strong> Setări > Cookies și permisiuni site</li>
          </ul>

          <h2>Cookie-uri terțe părți</h2>
          <p>Site-ul nostru poate folosi servicii terțe care setează propriile cookie-uri:</p>
          <ul>
            <li><strong>Google Maps:</strong> Pentru afișarea hărții locației</li>
            <li><strong>Google Analytics:</strong> Pentru statistici (doar cu consimțământ)</li>
          </ul>

          <h2>Modificări ale politicii</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această politică. Vă încurajăm să o verificați 
            periodic.
          </p>

          <h2>Contact</h2>
          <p>Pentru întrebări despre cookie-uri: office@gsc-auto.ro</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Politică Cookies',
  meta: [
    { name: 'description', content: 'Politica de utilizare a cookies pe site-ul GSC Auto' }
  ]
})
</script>
