<template>
  <div>
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <h1>Politică de Confidențialitate</h1>
          <p class="text-secondary-600">Ultima actualizare: {{ new Date().toLocaleDateString('ro-RO') }}</p>

          <h2>1. Introducere</h2>
          <p>
            General Services Company 97 SRL ("GSC Auto", "noi", "nostru") respectă confidențialitatea 
            datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu 
            Regulamentul (UE) 2016/679 (GDPR) și legislația română aplicabilă.
          </p>

          <h2>2. Date Colectate</h2>
          <p>Colectăm următoarele categorii de date personale:</p>
          <ul>
            <li>Date de identificare: nume, prenume</li>
            <li>Date de contact: telefon, email, adresă</li>
            <li>Date despre vehicul: marcă, model, an fabricație, număr înmatriculare</li>
            <li>Date referitoare la asigurare: societate de asigurare, număr poliță</li>
            <li>Date de navigare: adresă IP, cookie-uri (cu consimțământul dumneavoastră)</li>
          </ul>

          <h2>3. Scopul Prelucrării</h2>
          <p>Prelucrăm datele dumneavoastră personale pentru:</p>
          <ul>
            <li>Furnizarea serviciilor de reparații auto și gestionare dosare daune</li>
            <li>Comunicare și programări</li>
            <li>Îndeplinirea obligațiilor contractuale și legale</li>
            <li>Îmbunătățirea serviciilor noastre</li>
            <li>Marketing direct (doar cu consimțământul dumneavoastră)</li>
          </ul>

          <h2>4. Temei Juridic</h2>
          <p>Prelucrăm datele pe baza:</p>
          <ul>
            <li>Executării unui contract sau măsuri precontractuale</li>
            <li>Îndeplinirii obligațiilor legale</li>
            <li>Consimțământului dumneavoastră explicit</li>
            <li>Interesului legitim al companiei</li>
          </ul>

          <h2>5. Destinatarii Datelor</h2>
          <p>Datele pot fi comunicate către:</p>
          <ul>
            <li>Societăți de asigurare (pentru gestionarea dosarelor de daune)</li>
            <li>Furnizori de piese auto</li>
            <li>Autorități publice (la cererea legală)</li>
            <li>Furnizori de servicii IT (hosting, email)</li>
          </ul>

          <h2>6. Durata Păstrării</h2>
          <p>
            Păstrăm datele pe perioada necesară îndeplinirii scopurilor pentru care au fost colectate, 
            respectând termenele legale de arhivare (minimum 5 ani pentru documente fiscale).
          </p>

          <h2>7. Drepturile Dumneavoastră</h2>
          <p>Aveți următoarele drepturi:</p>
          <ul>
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul la rectificare</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul la opoziție</li>
            <li>Dreptul de a depune plângere la ANSPDCP</li>
          </ul>

          <h2>8. Contact</h2>
          <p>Pentru orice întrebări referitoare la prelucrarea datelor:</p>
          <p>
            <strong>General Services Company 97 SRL</strong><br>
            Strada Ritmului, nr. 8, Sector 2, București<br>
            Email: office@gsc-auto.ro<br>
            Telefon: 0730 778 633
          </p>

          <p>
            <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br>
            Website: www.dataprotection.ro
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Politică de Confidențialitate',
  meta: [
    { name: 'description', content: 'Politica de confidențialitate GSC Auto - informații despre prelucrarea datelor personale conform GDPR' }
  ]
})
</script>
