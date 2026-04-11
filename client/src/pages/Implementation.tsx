/**
 * Rebel7 — Pagina: Implementation Model
 * URL: /rebel7/implementation
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const PHASES = [
  {
    num: "Phase 1",
    title: "Pilot setup",
    duration: "4 settimane",
    desc: "Configurazione della piattaforma su una singola iniziativa. Definizione degli obiettivi, dei partecipanti target e dei criteri di verifica. Onboarding dei referenti interni. Prima raccolta dati verificabili.",
    activities: [
      "Configurazione dell'ambiente operativo",
      "Definizione degli obiettivi e dei KPI",
      "Onboarding dei referenti con identità verificata",
      "Lancio dell'iniziativa pilot",
      "Monitoraggio e supporto operativo",
      "Generazione del report di validazione",
    ],
    output: "Report di validazione del pilot con dati verificabili",
  },
  {
    num: "Phase 2",
    title: "Operational deployment",
    duration: "6–8 settimane",
    desc: "Estensione del sistema all'intera organizzazione o a più unità operative. Integrazione con i flussi di dati esistenti. Formazione dei referenti. Primo ciclo completo di report strutturati.",
    activities: [
      "Estensione della configurazione a più iniziative",
      "Integrazione con i sistemi esistenti",
      "Formazione dei referenti per unità operativa",
      "Attivazione del tracciamento multi-iniziativa",
      "Generazione del primo ciclo di report aggregati",
      "Validazione della conformità normativa",
    ],
    output: "Sistema operativo su scala organizzativa con dati aggregati",
  },
  {
    num: "Phase 3",
    title: "Institutional integration",
    duration: "2–3 mesi",
    desc: "Integrazione con i sistemi istituzionali esistenti: database, portali, piattaforme di reporting. Configurazione dei flussi di esportazione dati. Attivazione della rendicontazione istituzionale sistematica.",
    activities: [
      "Integrazione con i sistemi di gestione esistenti",
      "Configurazione dei flussi di esportazione dati",
      "Attivazione della rendicontazione istituzionale",
      "Setup dei report per audit e finanziatori",
      "Configurazione degli alert automatici",
      "Validazione dell'audit trail completo",
    ],
    output: "Integrazione istituzionale completa con rendicontazione sistematica",
  },
  {
    num: "Phase 4",
    title: "Scaling",
    duration: "Continuativa",
    desc: "Deployment su scala completa. Gestione di più iniziative in parallelo, benchmark tra periodi e organizzazioni, rendicontazione istituzionale sistematica. Il sistema opera in autonomia con supervisione del referente.",
    activities: [
      "Attivazione di iniziative multiple in parallelo",
      "Benchmark tra periodi e unità organizzative",
      "Rendicontazione istituzionale automatica",
      "Monitoraggio continuo e alert operativi",
      "Aggiornamenti normativi e adeguamenti",
      "Supporto per audit e valutazioni esterne",
    ],
    output: "Sistema a regime con dati aggregati e rendicontazione continua",
  },
];

const ENTERPRISE_SIGNALS = [
  { label: "Deployment duration", value: "4–16 settimane", desc: "Dalla configurazione iniziale al sistema a regime, in base alla complessità organizzativa." },
  { label: "Supported participants", value: "100 – 10.000+", desc: "Il sistema scala da pilot su singola iniziativa a deployment enterprise su scala organizzativa completa." },
  { label: "Data verification", value: "100%", desc: "Ogni dato è verificato automaticamente. Nessun dato auto-dichiarato. Audit trail immutabile." },
  { label: "Reporting capability", value: "Automatica", desc: "Report strutturati generati automaticamente al termine di ogni ciclo. Esportabili in formato standard." },
  { label: "Scalability readiness", value: "Modulare", desc: "Architettura modulare. Ogni componente è indipendente e scalabile senza discontinuità operativa." },
];

export default function Implementation() {
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
            <Link href="/" className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">Home</Link>
            <Link href="/rebel7/demo" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline">Richiedi demo</Link>
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Avvia pilot</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Implementation model
            </span>
            <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              Implementation model
            </h1>
            <p className="text-[#A8C4E0] text-lg leading-relaxed mb-8">
              Un percorso strutturato in 4 fasi per portare Rebel7 dalla configurazione iniziale al sistema a regime su scala organizzativa completa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/rebel7/pilot" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Avvia Phase 1
              </Link>
              <Link href="/rebel7/readiness" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Valuta la tua prontezza
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { val: "4 fasi", label: "Percorso strutturato" },
              { val: "4–16 sett.", label: "Dalla configurazione al regime" },
              { val: "100%", label: "Dati verificabili dal giorno 1" },
            ].map((s) => (
              <div key={s.val} className="border border-white/20 p-5 bg-white/5">
                <div className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.val}</div>
                <div className="text-[#A8C4E0] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Fasi di implementazione
            </span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              Percorso di implementazione
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {PHASES.map((phase, i) => (
              <div key={phase.num} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 ${i < PHASES.length - 1 ? "border-b border-[#E2E8F0]" : ""} ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {phase.num}
                  </div>
                  <div className="text-[#0A1F44] font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {phase.title}
                  </div>
                  <div className="text-xs text-[#4A5568] mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Durata: {phase.duration}
                  </div>
                  <div className="w-6 h-0.5 bg-[#0A1F44] mb-4" />
                  <p className="text-[#4A5568] text-sm leading-relaxed">{phase.desc}</p>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Attività
                  </div>
                  <div className="flex flex-col gap-2">
                    {phase.activities.map((a) => (
                      <div key={a} className="flex items-start gap-2">
                        <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5">—</span>
                        <span className="text-[#0D0D0D] text-sm leading-relaxed">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="border border-[#E2E8F0] p-5 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        Output
                      </div>
                      <p className="text-[#0D0D0D] text-sm leading-relaxed font-medium">{phase.output}</p>
                    </div>
                    {i === 0 && (
                      <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                        <Link href="/rebel7/pilot" className="text-xs font-semibold text-[#0A1F44] hover:opacity-70 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          Avvia Phase 1 →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ENTERPRISE SIGNALS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Enterprise signals
            </span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              Capacità del sistema
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ENTERPRISE_SIGNALS.map((s) => (
              <div key={s.label} className="border border-[#E2E8F0] bg-white p-6">
                <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {s.label}
                </div>
                <div className="text-[#0A1F44] font-bold text-xl mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.value}
                </div>
                <p className="text-[#4A5568] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1F44]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Prossimo passo
          </span>
          <h2 className="text-white font-bold leading-tight mb-6 mx-auto max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Inizia con Phase 1
          </h2>
          <p className="text-[#A8C4E0] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Un pilot di 4 settimane su una singola iniziativa. Dati verificabili dal primo giorno.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rebel7/pilot" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-8 py-4 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Avvia il pilot
            </Link>
            <Link href="/rebel7/readiness" className="inline-block border border-white text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Valuta la tua prontezza
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
            <Link href="/rebel7/readiness" className="text-white/50 text-xs hover:text-white/80 no-underline">Readiness</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
