# Rebel7 Landing Page — Design Brainstorm

## Brief
Infrastruttura per la partecipazione misurabile e l'impatto verificabile.
Target primario: scuole, comuni, aziende, ONG, enti pubblici.
Tono: istituzionale, chiaro, strutturato, enterprise-grade.

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Swiss International Typographic Style — rigore strutturale, gerarchia visiva assoluta, griglia modulare.

**Core Principles:**
1. Griglia a 12 colonne con proporzioni auree per ogni sezione
2. Tipografia come elemento architettonico primario, non decorativo
3. Dati e metriche come protagonisti visivi (numeri grandi, tabelle strutturate)
4. Separazione netta tra sezioni tramite linee sottili e spazio bianco abbondante

**Color Philosophy:**
- Background: bianco puro `#FFFFFF`
- Testo primario: quasi-nero `#0D0D0D`
- Accento istituzionale: blu navy profondo `#0A1F44`
- Accento secondario: grigio ardesia `#4A5568`
- Linee/bordi: grigio chiaro `#E2E8F0`
- Nessun gradiente. Colori piatti, contrastati, leggibili.

**Layout Paradigm:**
Asimmetrico a sinistra: headline e contenuto principale occupano 7/12 colonne, con una colonna verticale di metriche/dati a destra (5/12). Le sezioni alternano orientamento per creare ritmo visivo senza decorazioni.

**Signature Elements:**
1. Linea orizzontale sottile (1px, `#0A1F44`) come separatore tra sezioni — mai decorazioni grafiche
2. Numeri metrici in grande (es. "4.200+ partecipanti") come blocchi tipografici autonomi
3. Tabelle strutturate per use cases e compliance — dati, non storytelling

**Interaction Philosophy:**
Nessuna animazione decorativa. Scroll fluido. Hover sulle card: bordo sinistro blu navy che appare (2px). CTA con transizione colore 150ms. Tutto deve comunicare precisione e controllo.

**Animation:**
- Nessuna animazione di ingresso
- Hover su card: `border-left: 2px solid #0A1F44` con `transition: 150ms ease`
- CTA hover: inversione colore (sfondo navy, testo bianco) con `transition: 200ms`
- Nessun parallax, nessun fade-in

**Typography System:**
- Display/Headline: `DM Sans` 700/800 — autorità senza rigidità
- Body: `IBM Plex Sans` 400/500 — leggibilità tecnica, associazione con infrastruttura
- Monospace (metriche, codici): `IBM Plex Mono` 500
- Scala: 48px headline, 20px subheadline, 16px body, 14px label/caption

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Bauhaus Istituzionale — funzione come forma, struttura come messaggio.

**Core Principles:**
1. Ogni elemento visivo ha una funzione informativa precisa
2. Blocchi di contenuto come "moduli" indipendenti e ricomponibili
3. Contrasto cromatico alto come strumento di gerarchia, non di decorazione
4. Struttura a colonne verticali rigide, mai layout fluidi o organici

**Color Philosophy:**
- Background: bianco `#FAFAFA`
- Testo: nero assoluto `#111111`
- Accento primario: rosso mattone istituzionale `#8B1A1A` — autorità, non aggressività
- Accento secondario: grigio medio `#6B7280`
- Blocchi di sfondo alternati: grigio chiarissimo `#F5F5F5`

**Layout Paradigm:**
Colonne verticali rigide. Hero con testo a sinistra (60%) e blocco metrico a destra (40%). Sezioni alternate: testo pieno / griglia di card 3x2. Nessun elemento che "fluttua" fuori dalla griglia.

**Signature Elements:**
1. Blocchi numerici isolati (es. "Step 01", "Sezione 04") in rosso mattone come navigatori di sezione
2. Card con bordo superiore colorato (2px rosso) per differenziare categorie
3. Footer con griglia di loghi istituzionali e certificazioni di conformità

**Interaction Philosophy:**
Interazione minima e prevedibile. L'utente deve sentire che il sistema è sotto controllo. Nessuna sorpresa visiva. CTA chiari, grandi, con etichette precise.

**Animation:**
- Nessuna animazione decorativa
- Scroll: sticky header con bordo inferiore che appare dopo 80px di scroll
- CTA hover: sfondo pieno rosso mattone, testo bianco, `transition: 180ms`

**Typography System:**
- Headline: `Syne` 700 — geometrico, istituzionale, non generico
- Body: `Source Sans 3` 400/600 — leggibilità massima, associazione con documentazione pubblica
- Label/Caption: `Source Sans 3` 600 uppercase con letter-spacing 0.08em
- Scala: 52px hero, 18px subheadline, 16px body

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

**Design Movement:** Modernismo Governativo — estetica dei sistemi pubblici europei di nuova generazione (GOV.UK, design system italiano PA).

**Core Principles:**
1. Chiarezza informativa assoluta: ogni sezione risponde a una domanda specifica
2. Struttura a "documento" — la pagina si legge come un report istituzionale, non come un sito marketing
3. Gerarchia visiva costruita esclusivamente con dimensione del testo e spazio bianco
4. Nessun elemento visivo che non trasporti informazione

**Color Philosophy:**
- Background: bianco `#FFFFFF`
- Testo primario: `#1A1A2E` (blu-nero istituzionale)
- Accento primario: `#1B4F72` (blu istituzionale profondo)
- Accento secondario: `#2E86AB` (blu medio per CTA secondari)
- Sfondo sezioni alternate: `#F0F4F8`
- Bordi: `#CBD5E0`

**Layout Paradigm:**
Layout a documento con max-width 1100px, centrato. Sezioni con padding verticale generoso (120px). Griglia interna 2-3 colonne per card e use cases. Nessun elemento a piena larghezza eccetto hero e footer CTA.

**Signature Elements:**
1. Tag di categoria in uppercase (es. "INFRASTRUTTURA", "CONFORMITÀ") come label di sezione
2. Linea verticale sinistra (3px, `#1B4F72`) sulle citazioni e sui blocchi di evidenza
3. Tabella di compliance con checkmark strutturati (GDPR, CSRD, audit trail)

**Interaction Philosophy:**
Navigazione sticky con anchor link alle sezioni. Hover su card: elevazione sottile (box-shadow). CTA primario con sfondo pieno, CTA secondario con bordo e sfondo trasparente.

**Animation:**
- Nessuna animazione di ingresso o scroll
- Hover card: `box-shadow: 0 4px 12px rgba(27,79,114,0.12)` con `transition: 200ms`
- CTA primario hover: `background: #154360`, `transition: 150ms`
- Sticky nav: `border-bottom: 1px solid #CBD5E0` appare dopo scroll

**Typography System:**
- Headline: `Fraunces` 700 — serif istituzionale, autorità senza arcaismo
- Body: `Plus Jakarta Sans` 400/500 — moderna, leggibile, non generica
- Monospace/dati: `JetBrains Mono` 500
- Scala: 56px hero, 22px subheadline, 17px body, 13px label uppercase

</idea>
</response>

---

## Scelta finale

**Approccio selezionato: Swiss International Typographic Style (Risposta 1)**

Motivazione: massima coerenza con il posizionamento "infrastruttura, non progetto". La griglia rigida, la tipografia come architettura e l'assenza totale di decorazioni comunicano immediatamente serietà istituzionale. DM Sans + IBM Plex Sans trasmettono autorità tecnica senza rigidità burocratica. Il blu navy profondo è il colore dei sistemi pubblici europei di riferimento.
