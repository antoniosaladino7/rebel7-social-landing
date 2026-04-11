/**
 * Rebel7 — Pagina settoriale: Comuni e Enti Pubblici
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import SectorPage from "@/components/SectorPage";

export default function Comuni() {
  return (
    <SectorPage
      sector="Comuni"
      tagline="Rebel7 trasforma la partecipazione civica in dati strutturati: iniziative pubbliche, consultazioni e programmi territoriali documentati con evidenza verificabile per la rendicontazione istituzionale."
      headline="Partecipazione civica misurabile. Trasparenza amministrativa verificabile."
      subheadline="Rebel7 consente a comuni e enti pubblici di strutturare, tracciare e rendicontare ogni programma di partecipazione civica con dati verificabili, pronti per la rendicontazione istituzionale e l'accesso a fondi europei."
      problemTitle="Il problema che ogni comune affronta nella partecipazione civica"
      problemBody="I comuni investono risorse significative in programmi di partecipazione civica, consultazioni pubbliche, iniziative territoriali e progetti di coesione sociale. In assenza di un sistema strutturato, l'impatto di questi programmi rimane non misurabile: i dati di partecipazione sono frammentati, le rendicontazioni sono narrative e l'accesso a fondi europei e nazionali richiede evidenza verificabile che non è disponibile. Il risultato è l'impossibilità di dimostrare il valore delle iniziative ai cittadini, alle istituzioni superiori e agli enti finanziatori."
      capabilities={[
        { title: "Strutturazione delle iniziative pubbliche", desc: "Configura ogni programma con obiettivi, target di partecipazione, attività previste e criteri di verifica. Il sistema mantiene il perimetro operativo definito dall'ente." },
        { title: "Tracciamento della partecipazione civica", desc: "Ogni cittadino che partecipa a un'iniziativa viene registrato con identità verificata. I dati sono aggregati per zona, categoria demografica e tipologia di attività." },
        { title: "Verifica dell'impatto territoriale", desc: "Il sistema confronta la partecipazione registrata con gli obiettivi dichiarati e produce un indice di impatto verificabile per ogni programma." },
        { title: "Report per rendicontazione istituzionale", desc: "Report strutturati compatibili con i requisiti di rendicontazione verso Regione, Ministeri e Commissione Europea per l'accesso a fondi strutturali." },
        { title: "Trasparenza amministrativa", desc: "I dati di partecipazione sono disponibili in formato pubblico per i cittadini e in formato strutturato per gli organi di controllo." },
        { title: "Integrazione con sistemi PA", desc: "Il sistema è progettato per operare in contesti di pubblica amministrazione con standard di interoperabilità e sicurezza enterprise." },
      ]}
      useCases={[
        {
          label: "Programma di partecipazione civica",
          problem: "Il comune non riesce a misurare l'impatto reale del programma di partecipazione civica e non dispone di dati verificabili per la rendicontazione verso la Regione.",
          action: "Il comune attiva su Rebel7 il programma, definisce le attività previste per zona e categoria demografica, e registra la partecipazione di ogni cittadino.",
          outcome: "Il comune produce un report verificabile per la Regione, con dati aggregati per zona e attività. L'accesso al finanziamento regionale è documentato.",
        },
        {
          label: "Fondi europei — PNRR",
          problem: "Il comune ha accesso a fondi PNRR per programmi di coesione sociale ma non dispone di dati verificabili sulla partecipazione dei cittadini per la rendicontazione finale.",
          action: "Il comune configura su Rebel7 ogni iniziativa finanziata, traccia la partecipazione e genera report strutturati per ogni milestone del progetto.",
          outcome: "La rendicontazione finale al PNRR è supportata da dati verificabili. Il comune dimostra l'impatto reale delle iniziative con evidenza audit-ready.",
        },
      ]}
      proofPoints={[
        { metric: "Tasso di partecipazione civica", desc: "Percentuale verificata di cittadini attivi su totale target, per iniziativa e per zona territoriale." },
        { metric: "Azioni civiche verificate", desc: "Ogni azione registrata è tracciata con timestamp, identità verificata e contesto territoriale." },
        { metric: "Impatto territoriale documentato", desc: "Dati aggregati per zona, categoria demografica e tipologia di programma. Esportabili in formato audit." },
        { metric: "Conformità rendicontazione PNRR", desc: "Report strutturati compatibili con i requisiti di rendicontazione verso Ministeri e Commissione Europea." },
        { metric: "Trasparenza pubblica", desc: "Dati di partecipazione disponibili in formato pubblico per i cittadini e per gli organi di controllo." },
        { metric: "Eleggibilità fondi strutturali", desc: "Documentazione verificabile per accesso a fondi europei, nazionali e regionali dedicati alla coesione sociale." },
      ]}
      complianceItems={["GDPR", "CAD — Codice Amministrazione Digitale", "D.Lgs. 33/2013 Trasparenza", "Regolamento UE fondi strutturali", "Audit trail", "Interoperabilità PA"]}
      ctaLabel="Avvia un pilot nel tuo comune"
    />
  );
}
