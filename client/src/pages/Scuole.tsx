/**
 * Rebel7 — Pagina settoriale: Scuole
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import SectorPage from "@/components/SectorPage";

export default function Scuole() {
  return (
    <SectorPage
      sector="Scuole"
      tagline="Rebel7 trasforma la partecipazione scolastica in dati verificabili: PCTO, attività extracurriculari e programmi civici documentati con evidenza audit-ready."
      headline="Partecipazione scolastica verificabile. Dati, non dichiarazioni."
      subheadline="Rebel7 consente agli istituti scolastici di strutturare, tracciare e rendicontare ogni programma di partecipazione studentesca con dati verificabili e report pronti per accreditamenti e finanziamenti."
      problemTitle="Il problema che ogni istituto scolastico affronta"
      problemBody="Gli istituti scolastici gestiscono programmi PCTO, attività extracurriculari, progetti civici e percorsi di educazione alla cittadinanza. In assenza di un sistema strutturato, la partecipazione degli studenti viene documentata in modo frammentato — fogli di presenza, dichiarazioni auto-compilate, email — senza tracciabilità verificabile. Il risultato è l'impossibilità di produrre evidenza credibile per valutazioni, accreditamenti istituzionali e accesso a finanziamenti pubblici."
      capabilities={[
        { title: "Strutturazione dei programmi PCTO", desc: "Configura ogni percorso con obiettivi, ore previste, attività e criteri di verifica. Il sistema mantiene il perimetro operativo definito dal coordinatore." },
        { title: "Registrazione automatica delle presenze", desc: "Ogni presenza e ogni attività completata viene registrata con timestamp e identità verificata. Nessun foglio cartaceo, nessun dato auto-dichiarato." },
        { title: "Tracciamento attività extracurriculari", desc: "Progetti civici, attività sportive, programmi culturali: ogni iniziativa è strutturata e tracciata con gli stessi standard del PCTO." },
        { title: "Report per studente e per istituto", desc: "Ogni studente dispone di un profilo di partecipazione verificabile. L'istituto genera report aggregati per classe, anno e tipologia di programma." },
        { title: "Documentazione per accreditamenti", desc: "Report strutturati compatibili con i requisiti di valutazione INVALSI, accreditamenti ministeriali e rendicontazione verso enti finanziatori." },
        { title: "Conformità normativa", desc: "Dati trattati in conformità al GDPR con attenzione specifica ai minori. Consenso documentato, accesso limitato per ruolo, audit trail completo." },
      ]}
      useCases={[
        {
          label: "PCTO — Istituto tecnico",
          problem: "L'istituto non riesce a documentare le ore effettive di PCTO svolte dagli studenti in modo verificabile per la valutazione finale.",
          action: "L'istituto configura su Rebel7 ogni percorso PCTO con azienda partner, ore previste e attività. Gli studenti registrano le presenze tramite il sistema.",
          outcome: "Ogni studente dispone di un registro verificabile delle ore svolte. Il coordinatore genera il report per la commissione d'esame in pochi minuti.",
        },
        {
          label: "Programma civico — Liceo",
          problem: "Il liceo partecipa a un bando regionale per l'educazione alla cittadinanza ma non dispone di dati verificabili sulla partecipazione degli studenti.",
          action: "Il liceo attiva su Rebel7 il programma civico, definisce le attività previste e registra la partecipazione di ogni studente.",
          outcome: "Il liceo produce un report verificabile per il bando, con dati aggregati per classe e attività. L'accesso al finanziamento è documentato.",
        },
      ]}
      proofPoints={[
        { metric: "Ore PCTO verificate", desc: "Ogni ora di PCTO è registrata con timestamp e contesto. Nessuna dichiarazione auto-compilata." },
        { metric: "Tasso di completamento", desc: "Percentuale di studenti che hanno completato le attività previste, per programma e per classe." },
        { metric: "Attività extracurriculari documentate", desc: "Registro verificabile di ogni attività extracurriculare svolta, per studente e per istituto." },
        { metric: "Report per accreditamento", desc: "Documentazione strutturata per valutazioni INVALSI, accreditamenti ministeriali e bandi regionali." },
        { metric: "Conformità GDPR minori", desc: "Trattamento dati conforme al GDPR con attenzione specifica alla tutela dei dati degli studenti minorenni." },
        { metric: "Eleggibilità ai finanziamenti", desc: "Documentazione verificabile per accesso a fondi pubblici, bandi e programmi istituzionali dedicati alle scuole." },
      ]}
      complianceItems={["GDPR", "D.Lgs. 196/2003", "Linee guida MIUR PCTO", "Rendicontazione ministeriale", "Audit trail", "Accesso per ruolo"]}
      ctaLabel="Avvia un pilot nella tua scuola"
    />
  );
}
