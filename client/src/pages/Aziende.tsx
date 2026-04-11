/**
 * Rebel7 — Pagina settoriale: Aziende
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import SectorPage from "@/components/SectorPage";

export default function Aziende() {
  return (
    <SectorPage
      sector="Aziende"
      tagline="Rebel7 trasforma le attività di responsabilità sociale in dati ESG verificabili: partecipazione dei dipendenti, programmi CSR e impatto documentato con evidenza audit-ready per CSRD e rating ESG."
      headline="Responsabilità sociale misurabile. Dati ESG verificabili, non dichiarazioni."
      subheadline="Rebel7 consente alle aziende di strutturare, tracciare e rendicontare ogni programma di coinvolgimento dei dipendenti e responsabilità sociale con dati verificabili, pronti per bilanci di sostenibilità, rating ESG e conformità CSRD."
      problemTitle="Il problema che ogni azienda affronta nella rendicontazione ESG"
      problemBody="Le aziende investono in programmi di volontariato d'impresa, iniziative di coesione interna, attività CSR e programmi di sviluppo della comunità. In assenza di un sistema strutturato, la partecipazione dei dipendenti viene documentata in modo frammentato — fogli di presenza, dichiarazioni auto-compilate, report narrativi — senza tracciabilità verificabile. Il risultato è l'impossibilità di produrre evidenza credibile per bilanci di sostenibilità, rating ESG, conformità CSRD e accesso a finanziamenti legati alla sostenibilità."
      capabilities={[
        { title: "Strutturazione programmi CSR", desc: "Configura ogni iniziativa con obiettivi, target di partecipazione, attività previste e indicatori di impatto. Il sistema mantiene il perimetro operativo definito dall'azienda." },
        { title: "Tracciamento partecipazione dipendenti", desc: "Ogni dipendente che partecipa a un'attività viene registrato con identità verificata. I dati sono aggregati per unità organizzativa, sede e tipologia di attività." },
        { title: "Verifica impatto ESG", desc: "Il sistema confronta la partecipazione registrata con gli obiettivi ESG dichiarati e produce un indice di impatto verificabile per ogni programma." },
        { title: "Report per bilancio di sostenibilità", desc: "Report strutturati compatibili con gli standard GRI, ESRS e i requisiti di rendicontazione CSRD. Pronti per audit di terze parti." },
        { title: "Documentazione per rating ESG", desc: "Dati strutturati e verificabili per supportare le valutazioni di rating ESG da parte di agenzie specializzate (MSCI, Sustainalytics, EcoVadis)." },
        { title: "Conformità CSRD", desc: "Il sistema è progettato per produrre dati compatibili con i requisiti della Corporate Sustainability Reporting Directive e degli European Sustainability Reporting Standards (ESRS)." },
      ]}
      useCases={[
        {
          label: "Volontariato d'impresa — Azienda manifatturiera",
          problem: "L'azienda non riesce a documentare le ore di volontariato d'impresa dei dipendenti in modo verificabile per il bilancio di sostenibilità e il rating ESG.",
          action: "L'azienda configura su Rebel7 il programma di volontariato, definisce le attività previste per sede e unità organizzativa, e registra la partecipazione di ogni dipendente.",
          outcome: "L'azienda produce un report verificabile per il bilancio di sostenibilità, con dati aggregati per sede e attività. Il rating ESG è supportato da evidenza audit-ready.",
        },
        {
          label: "Programma CSR — Azienda di servizi",
          problem: "L'azienda partecipa a un programma di sviluppo della comunità locale ma non dispone di dati verificabili sulla partecipazione dei dipendenti per la rendicontazione CSRD.",
          action: "L'azienda attiva su Rebel7 il programma CSR, traccia la partecipazione dei dipendenti e genera report strutturati per ogni milestone del progetto.",
          outcome: "La rendicontazione CSRD è supportata da dati verificabili. L'azienda dimostra l'impatto reale delle iniziative con evidenza compatibile con gli standard ESRS.",
        },
      ]}
      proofPoints={[
        { metric: "Ore di volontariato verificate", desc: "Ogni ora di volontariato d'impresa è registrata con timestamp e identità verificata. Nessuna dichiarazione auto-compilata." },
        { metric: "Tasso di partecipazione dipendenti", desc: "Percentuale verificata di dipendenti attivi su totale target, per unità organizzativa e sede." },
        { metric: "Impatto CSR documentato", desc: "Dati aggregati per tipologia di attività, sede e unità organizzativa. Esportabili in formato GRI e ESRS." },
        { metric: "Conformità CSRD", desc: "Report strutturati compatibili con i requisiti della Corporate Sustainability Reporting Directive e degli ESRS." },
        { metric: "Documentazione per rating ESG", desc: "Dati verificabili per supportare le valutazioni di rating ESG da parte di agenzie specializzate." },
        { metric: "Eleggibilità finanziamenti sostenibilità", desc: "Documentazione verificabile per accesso a finanziamenti legati alla sostenibilità, green bond e programmi EU." },
      ]}
      complianceItems={["GDPR", "CSRD", "ESRS S1 — Forza lavoro", "GRI 401 / GRI 413", "EBA ESG Risk", "Audit trail", "Rating ESG"]}
      ctaLabel="Avvia un pilot nella tua azienda"
    />
  );
}
