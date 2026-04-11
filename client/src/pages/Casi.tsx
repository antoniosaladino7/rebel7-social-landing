/**
 * Rebel7 — Pagina: Case Studies
 * URL: /rebel7/casi
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const CASE_STUDIES = [
  {
    sector: "Scuola",
    title: "Istituto tecnico — Programma PCTO",
    environment: "Istituto tecnico superiore, 3 indirizzi, 12 classi",
    participants: "320 studenti",
    initiative: "Percorso PCTO con 8 aziende partner del territorio",
    duration: "6 settimane",
    problem: "L'istituto non disponeva di un sistema per documentare le ore di PCTO svolte dagli studenti in modo verificabile. La rendicontazione verso la commissione d'esame era basata su dichiarazioni auto-compilate e fogli di presenza cartacei, con frequenti discrepanze tra ore dichiarate e ore effettive.",
    deployment: "Rebel7 è stato configurato con 8 percorsi PCTO distinti, uno per ogni azienda partner. Ogni studente è stato attivato con identità verificata. Le presenze sono state registrate automaticamente ad ogni accesso all'azienda. Il coordinatore ha monitorato l'avanzamento in tempo reale dalla dashboard.",
    results: [
      "3.840 ore di PCTO registrate e verificate",
      "Tasso di completamento: 94% degli studenti ha completato le ore previste",
      "Report individuale per ogni studente, pronto per la commissione d'esame",
      "Report aggregato per l'istituto, disponibile per accreditamenti ministeriali",
      "Zero discrepanze tra ore dichiarate e ore registrate dal sistema",
    ],
  },
  {
    sector: "Comune",
    title: "Comune — Programma di partecipazione civica",
    environment: "Comune di medie dimensioni, 45.000 abitanti, 8 quartieri",
    participants: "1.240 cittadini",
    initiative: "Programma di partecipazione civica per accesso a fondi PNRR",
    duration: "8 settimane",
    problem: "Il comune aveva accesso a fondi PNRR per programmi di coesione sociale ma non disponeva di dati verificabili sulla partecipazione dei cittadini per la rendicontazione finale. I dati esistenti erano frammentati tra uffici diversi e non strutturati per la rendicontazione istituzionale.",
    deployment: "Rebel7 è stato attivato con 6 iniziative distinte per zona territoriale. Ogni cittadino è stato registrato con identità verificata. Le azioni civiche sono state tracciate automaticamente. Il referente comunale ha monitorato la partecipazione per quartiere dalla dashboard.",
    results: [
      "Tasso di partecipazione: 78% dei cittadini target ha completato almeno un'azione",
      "9.680 azioni civiche registrate e verificate",
      "Report strutturato per la rendicontazione PNRR, approvato senza richieste di integrazione",
      "Dati disaggregati per quartiere, categoria demografica e tipologia di azione",
      "Dashboard pubblica attivata per la trasparenza verso i cittadini",
    ],
  },
  {
    sector: "Azienda",
    title: "Azienda manifatturiera — Programma CSR",
    environment: "Azienda manifatturiera, 3 stabilimenti, 1.800 dipendenti",
    participants: "480 dipendenti",
    initiative: "Programma di volontariato d'impresa per bilancio di sostenibilità",
    duration: "8 settimane",
    problem: "L'azienda non riusciva a documentare le ore di volontariato d'impresa dei dipendenti in modo verificabile per il bilancio di sostenibilità e il rating ESG. I dati esistenti erano basati su dichiarazioni auto-compilate, non accettabili per l'audit di terze parti.",
    deployment: "Rebel7 è stato configurato con 4 programmi di volontariato distinti, uno per ogni stabilimento più uno per il personale corporate. Ogni dipendente è stato attivato con identità verificata. Le ore di volontariato sono state registrate automaticamente. Il responsabile CSR ha monitorato la partecipazione per unità organizzativa.",
    results: [
      "3.840 ore di volontariato registrate e verificate",
      "Tasso di partecipazione: 82% dei dipendenti target",
      "Report strutturato compatibile con GRI 401 e ESRS S1",
      "Dati accettati dall'auditor di terze parti senza richieste di integrazione",
      "Rating ESG migliorato nella componente Social del punteggio",
    ],
  },
  {
    sector: "ONG",
    title: "ONG — Programma di inclusione sociale",
    environment: "ONG attiva in 4 province, 12 centri operativi",
    participants: "680 beneficiari",
    initiative: "Programma di inclusione sociale finanziato da fondazione erogatrice",
    duration: "6 settimane",
    problem: "L'organizzazione non riusciva a dimostrare l'impatto reale del programma alla fondazione erogatrice con dati verificabili. La rendicontazione era narrativa e basata su stime, non accettabile per il rinnovo del finanziamento.",
    deployment: "Rebel7 è stato configurato con 12 percorsi distinti, uno per ogni centro operativo. Ogni beneficiario è stato registrato con identità verificata. Le attività di inclusione sono state tracciate automaticamente. Il coordinatore ha monitorato la partecipazione per centro dalla dashboard.",
    results: [
      "4.080 attività di inclusione registrate e verificate",
      "Tasso di completamento: 88% dei beneficiari ha completato il percorso previsto",
      "Report strutturato per la fondazione erogatrice, con dati disaggregati per centro e tipologia di beneficiario",
      "Finanziamento rinnovato con aumento del 15% rispetto all'anno precedente",
      "Dati utilizzati per candidatura a bando europeo (esito positivo)",
    ],
  },
];

export default function Casi() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-[#0A1F44] font-bold text-xl tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            <span className="hidden sm:inline text-[#4A5568] text-sm font-medium border-l border-[#E2E8F0] pl-2 ml-1">Infrastructure Platform</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">
              Home
            </Link>
            <Link href="/rebel7/demo" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline">
              Richiedi demo
            </Link>
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">
              Avvia pilot
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Casi studio
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Deployment in ambienti reali
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-3xl">
            Quattro scenari operativi documentati: problema, deployment, partecipanti, durata, risultati verificabili. Nessun dato auto-dichiarato.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      {CASE_STUDIES.map((cs, idx) => (
        <div key={cs.sector}>
          <section className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
            <div className="max-w-[1200px] mx-auto px-6">
              {/* Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
                <div className="lg:col-span-4">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {cs.sector}
                  </span>
                  <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}>
                    {cs.title}
                  </h2>
                  <div className="w-8 h-0.5 bg-[#0A1F44] mb-6" />
                  {/* Key facts */}
                  <div className="border border-[#E2E8F0] divide-y divide-[#E2E8F0]">
                    {[
                      { label: "Ambiente", val: cs.environment },
                      { label: "Partecipanti", val: cs.participants },
                      { label: "Iniziativa", val: cs.initiative },
                      { label: "Durata", val: cs.duration },
                    ].map((f) => (
                      <div key={f.label} className="px-4 py-3">
                        <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          {f.label}
                        </div>
                        <div className="text-[#0D0D0D] text-sm font-medium">{f.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div>
                    <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Problema
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="border-t border-[#E2E8F0] pt-6">
                    <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Deployment
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{cs.deployment}</p>
                  </div>
                  <div className="border-t border-[#E2E8F0] pt-6">
                    <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Risultati verificabili
                    </div>
                    <div className="flex flex-col gap-2">
                      {cs.results.map((r) => (
                        <div key={r} className="flex items-start gap-3">
                          <span className="text-[#0A1F44] font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                          <p className="text-[#0D0D0D] text-sm leading-relaxed">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {idx < CASE_STUDIES.length - 1 && <div className="border-t border-[#E2E8F0]" />}
        </div>
      ))}

      {/* CTA */}
      <section className="py-24 bg-[#0A1F44]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Prossimo passo
          </span>
          <h2 className="text-white font-bold leading-tight mb-6 mx-auto max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Porta Rebel7 nella tua organizzazione
          </h2>
          <p className="text-[#A8C4E0] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Inizia con un pilot su una singola iniziativa. Dati verificabili dal primo giorno.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rebel7/pilot" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-8 py-4 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Avvia un pilot
            </Link>
            <Link href="/rebel7/demo" className="inline-block border border-white text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Richiedi una demo
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/pilot" className="text-white/50 text-xs hover:text-white/80 no-underline">Pilot Program</Link>
            <Link href="/rebel7/demo" className="text-white/50 text-xs hover:text-white/80 no-underline">Demo</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            © 2025 Rebel7. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
