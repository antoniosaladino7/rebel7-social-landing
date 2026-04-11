/**
 * Rebel7 — Pagina settoriale: ONG e Organizzazioni
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import SectorPage from "@/components/SectorPage";

export default function Organizzazioni() {
  return (
    <SectorPage
      sector="ONG e Fondazioni"
      tagline="Rebel7 trasforma i programmi di impatto sociale in dati verificabili: partecipazione dei beneficiari, attività documentate e report strutturati per donatori, enti finanziatori e valutazioni di impatto."
      headline="Impatto sociale verificabile. Evidenza per donatori e finanziatori."
      subheadline="Rebel7 consente a ONG e fondazioni di strutturare, tracciare e rendicontare ogni programma con dati verificabili, pronti per la rendicontazione ai donatori, l'accesso a bandi e le valutazioni di impatto indipendenti."
      problemTitle="Il problema che ogni ONG affronta nella dimostrazione dell'impatto"
      problemBody="Le organizzazioni non profit investono risorse significative in programmi di impatto sociale, attività con i beneficiari e iniziative di sviluppo della comunità. In assenza di un sistema strutturato, la partecipazione dei beneficiari viene documentata in modo frammentato — registri cartacei, dichiarazioni auto-compilate, report narrativi — senza tracciabilità verificabile. Il risultato è l'impossibilità di produrre evidenza credibile per la rendicontazione ai donatori, l'accesso a bandi istituzionali e le valutazioni di impatto indipendenti che sempre più spesso i finanziatori richiedono."
      capabilities={[
        { title: "Strutturazione dei programmi", desc: "Configura ogni programma con obiettivi, target di beneficiari, attività previste e indicatori di impatto. Il sistema mantiene il perimetro operativo definito dall'organizzazione." },
        { title: "Tracciamento partecipazione beneficiari", desc: "Ogni beneficiario che partecipa a un'attività viene registrato con identità verificata. I dati sono aggregati per tipologia di beneficiario, zona e programma." },
        { title: "Verifica dell'impatto", desc: "Il sistema confronta la partecipazione registrata con gli obiettivi dichiarati e produce un indice di impatto verificabile per ogni programma." },
        { title: "Report per donatori", desc: "Report strutturati e verificabili per la rendicontazione ai donatori privati, fondazioni erogatrici e enti finanziatori istituzionali." },
        { title: "Documentazione per bandi", desc: "Dati strutturati e verificabili per supportare le candidature a bandi pubblici, fondi europei e programmi istituzionali." },
        { title: "Valutazione di impatto indipendente", desc: "I dati prodotti da Rebel7 sono strutturati per supportare valutazioni di impatto indipendenti (SROI, teoria del cambiamento, framework IRIS+)." },
      ]}
      useCases={[
        {
          label: "Programma di inclusione — ONG",
          problem: "L'organizzazione non riesce a documentare la partecipazione dei beneficiari al programma di inclusione in modo verificabile per la rendicontazione alla fondazione erogatrice.",
          action: "L'organizzazione configura su Rebel7 il programma, definisce le attività previste per tipologia di beneficiario, e registra la partecipazione di ogni beneficiario.",
          outcome: "L'organizzazione produce un report verificabile per la fondazione erogatrice, con dati aggregati per tipologia di beneficiario e attività. Il rinnovo del finanziamento è supportato da evidenza strutturata.",
        },
        {
          label: "Bando europeo — Fondazione",
          problem: "La fondazione partecipa a un bando europeo per programmi di sviluppo della comunità ma non dispone di dati verificabili sulla partecipazione dei beneficiari per la rendicontazione finale.",
          action: "La fondazione attiva su Rebel7 il programma, traccia la partecipazione dei beneficiari e genera report strutturati per ogni milestone del progetto.",
          outcome: "La rendicontazione finale al bando europeo è supportata da dati verificabili. La fondazione dimostra l'impatto reale delle iniziative con evidenza audit-ready.",
        },
      ]}
      proofPoints={[
        { metric: "Partecipazione beneficiari verificata", desc: "Ogni beneficiario è registrato con identità verificata. Nessuna dichiarazione auto-compilata." },
        { metric: "Attività documentate", desc: "Ogni attività svolta è tracciata con timestamp, tipologia e contesto. Nessun dato orfano o non attribuito." },
        { metric: "Impatto verificabile", desc: "Dati aggregati per tipologia di beneficiario, zona e programma. Compatibili con framework SROI e IRIS+." },
        { metric: "Report per donatori", desc: "Documentazione strutturata e verificabile per la rendicontazione a donatori privati e fondazioni erogatrici." },
        { metric: "Eleggibilità bandi", desc: "Dati verificabili per supportare candidature a bandi pubblici, fondi europei e programmi istituzionali." },
        { metric: "Valutazione di impatto indipendente", desc: "Dati strutturati per supportare valutazioni di impatto indipendenti richieste da finanziatori istituzionali." },
      ]}
      complianceItems={["GDPR", "D.Lgs. 117/2017 CTS", "Regolamento UE fondi strutturali", "Framework IRIS+", "Standard SROI", "Audit trail", "Trasparenza donatori"]}
      ctaLabel="Avvia un pilot nella tua organizzazione"
    />
  );
}
