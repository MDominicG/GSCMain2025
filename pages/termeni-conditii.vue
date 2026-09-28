<template>
  <div>
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <h1>Termeni și Condiții</h1>
          <p class="text-secondary-600">Ultima actualizare: {{ new Date().toLocaleDateString('ro-RO') }}</p>

          <h2>1. Informații Generale</h2>
          <p>
            Prezentele Termene și Condiții reglementează utilizarea site-ului gsc-auto.ro și 
            prestarea serviciilor de către General Services Company 97 SRL ("GSC Auto").
          </p>
          <p>
            <strong>Denumire:</strong> General Services Company 97 SRL<br>
            <strong>CUI:</strong> RO [Completează]<br>
            <strong>Reg. Com.:</strong> J40/[Completează]<br>
            <strong>Adresă:</strong> Strada Ritmului, nr. 8, Sector 2, București<br>
            <strong>Email:</strong> office@gsc-auto.ro<br>
            <strong>Telefon:</strong> 0799 777 357
          </p>

          <h2>2. Servicii Oferite</h2>
          <p>GSC Auto oferă următoarele servicii:</p>
          <ul>
            <li>Reparații auto: mecanică, tinichigerie, vopsitorie</li>
            <li>Constatări și gestionare dosare daune auto</li>
            <li>Diagnostic și întreținere periodică</li>
            <li>Comercializare piese auto</li>
          </ul>

          <h2>3. Programări și Anulări</h2>
          <ul>
            <li>Programările se fac telefonic sau online prin intermediul site-ului</li>
            <li>Anulările trebuie comunicate cu minimum 24 ore înainte</li>
            <li>Ne rezervăm dreptul de a reprograma în cazuri excepționale</li>
          </ul>

          <h2>4. Prețuri și Plată</h2>
          <ul>
            <li>Prețurile sunt exprimate în RON și includ TVA</li>
            <li>Ofertele sunt valabile 7 zile de la emitere</li>
            <li>Plata se poate face cash, card sau transfer bancar</li>
            <li>Pentru dosarele de asigurări, plata se face conform acordului cu asigurătorul</li>
          </ul>

          <h2>5. Garanții</h2>
          <ul>
            <li>Oferim garanție pentru lucrările efectuate conform legislației în vigoare</li>
            <li>Garanția se aplică doar pentru defecte de execuție</li>
            <li>Garanția nu acoperă uzura normală sau utilizarea necorespunzătoare</li>
          </ul>

          <h2>6. Răspundere</h2>
          <ul>
            <li>Ne asumăm responsabilitatea pentru lucrările executate în service-ul nostru</li>
            <li>Nu suntem răspunzători pentru întârzierile cauzate de terțe părți (asigurări, furnizori)</li>
            <li>Nu răspundem pentru obiectele de valoare lăsate în vehicul</li>
          </ul>

          <h2>7. Proprietate Intelectuală</h2>
          <p>
            Conținutul site-ului (texte, imagini, logo) este proprietatea GSC Auto și este protejat 
            de legile privind drepturile de autor.
          </p>

          <h2>8. Modificări</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni. Modificările vor fi publicate pe site 
            și intră în vigoare imediat.
          </p>

          <h2>9. Legea Aplicabilă</h2>
          <p>
            Prezentul document este guvernat de legislația română. Orice litigiu va fi soluționat 
            de instanțele competente din București.
          </p>

          <h2>10. Contact</h2>
          <p>Pentru întrebări: office@gsc-auto.ro sau 0799 777 357</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Termeni și Condiții',
  meta: [
    { name: 'description', content: 'Termeni și condiții de utilizare a serviciilor GSC Auto București' }
  ]
})
</script>
