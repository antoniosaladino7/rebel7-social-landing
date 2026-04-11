/**
 * Rebel7 — Pagina: System Capabilities
 * URL: /rebel7/capabilities
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const CAPABILITIES = [
  {
    id: "participation-tracking",
    title: "Participation tracking",
    subtitle: "Tracciamento della partecipazione",
    desc: "Il sistema traccia automaticamente ogni azione di partecipazione. Nessun dato auto-dichiarato: ogni record è generato dal sistema, attribuito a un'identità verificata e conservato in modo immutabile.",
    specs: [
      { label: "Tracking method", value: "Automatic — no manual input" },
      { label: "Identity verification", value: "Required for each participant" },
      { label: "Data attribution", value: "Per participant, per action, per initiative" },
      { label: "Real-time visibility", value: "Dashboard updated continuously" },
    ],
  },
  {
    id: "action-verification",
    title: "Action verification",
    subtitle: "Verifica delle azioni",
    desc: "Ogni azione registrata è verificata rispetto ai criteri dell'iniziativa. Il sistema applica regole di verifica configurabili: nessuna azione non conforme viene accettata nel database.",
    specs: [
      { label: "Verification criteria", value: "Configurable per initiative" },
      { label: "Verification method", value: "Automatic — rule-based" },
      { label: "Non-compliant actions", value: "Rejected and logged" },
      { label: "Verification log", value: "Immutable, exportable" },
    ],
  },
  {
    id: "result-measurement",
    title: "Result measurement",
    subtitle: "Misurazione dei risultati",
    desc: "Il sistema misura i risultati di ogni iniziativa in tempo reale: tasso di partecipazione, completamento, distribuzione per segmento. I risultati sono confrontabili nel tempo e tra organizzazioni.",
    specs: [
      { label: "Participation rate", value: "Calculated automatically" },
      { label: "Completion metrics", value: "Per participant and initiative" },
      { label: "Segmentation", value: "By group, period, activity type" },
      { label: "Benchmarking", value: "Cross-initiative and cross-organization" },
    ],
  },
  {
    id: "report-generation",
    title: "Report generation",
    subtitle: "Generazione di report",
    desc: "I report sono generati automaticamente al termine di ogni iniziativa o su richiesta. Sono strutturati per soddisfare i requisiti di rendicontazione istituzionale, normativa e finanziaria.",
    specs: [
      { label: "Report types", value: "Operational, compliance, impact, donor" },
      { label: "Generation time", value: "Instant — no manual preparation" },
      { label: "Formats", value: "PDF, CSV, JSON, structured XML" },
      { label: "Compliance", value: "CSRD, ESRS, EBA, GRI, D.Lgs. 33/2013" },
    ],
  },
  {
    id: "data-storage",
    title: "Data storage",
    subtitle: "Conservazione dei dati",
    desc: "I dati sono conservati in un database strutturato, ridondante e conforme ai requisiti normativi. Ogni record è classificato, attribuito e conservato per il periodo richiesto dalla normativa applicabile.",
    specs: [
      { label: "Storage architecture", value: "Redundant, encrypted at rest" },
      { label: "Data classification", value: "Automatic — per record type" },
      { label: "Retention period", value: "Configurable — regulatory compliant" },
      { label: "Data sovereignty", value: "EU-based infrastructure" },
    ],
  },
  {
    id: "audit-trail",
    title: "Audit trail",
    subtitle: "Audit trail",
    desc: "Ogni operazione sul sistema è registrata in un audit trail immutabile. L'audit trail è accessibile, esportabile e accettato dai principali framework di audit istituzionale e normativo.",
    specs: [
      { label: "Trail coverage", value: "100% of system operations" },
      { label: "Immutability", value: "Cryptographically guaranteed" },
      { label: "Accessibility", value: "Real-time, role-based access" },
      { label: "Export format", value: "Standard audit formats" },
    ],
  },
];

export default function Capabilities() {
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
            <Link href="/rebel7/start" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Start deployment</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            System capabilities
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            System capabilities
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Specifiche operative complete del sistema Rebel7. Ogni capability è documentata con metodo, formato e requisiti normativi applicabili.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
            {CAPABILITIES.map((cap) => (
              <a key={cap.id} href={`#${cap.id}`} className="border border-white/20 px-4 py-3 text-white/80 text-sm hover:border-white/60 hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {cap.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-0">
            {CAPABILITIES.map((cap, i) => (
              <div key={cap.id} id={cap.id} className={`border border-[#E2E8F0] ${i > 0 ? "border-t-0" : ""}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[#0A1F44] font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cap.title}
                    </div>
                    <div className="text-[#4A5568] text-sm">{cap.subtitle}</div>
                  </div>
                  {/* Right */}
                  <div className="lg:col-span-8 p-8">
                    <p className="text-[#4A5568] text-base leading-relaxed mb-6">{cap.desc}</p>
                    <div className="border border-[#E2E8F0]">
                      {cap.specs.map((spec, si) => (
                        <div key={spec.label} className={`flex gap-0 ${si < cap.specs.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}>
                          <div className="w-48 flex-shrink-0 px-4 py-3 bg-[#F8FAFC] border-r border-[#E2E8F0]">
                            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{spec.label}</div>
                          </div>
                          <div className="px-4 py-3">
                            <div className="text-[#0A1F44] font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{spec.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Vuoi queste capabilities nella tua organizzazione?
            </div>
            <p className="text-[#A8C4E0] text-sm">Avvia un pilot. Tutte le capabilities sono attive dal primo giorno.</p>
          </div>
          <Link href="/rebel7/start" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Start deployment
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040D1A] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/why" className="text-white/50 text-xs hover:text-white/80 no-underline">Why deploy</Link>
            <Link href="/rebel7/examples" className="text-white/50 text-xs hover:text-white/80 no-underline">Examples</Link>
            <Link href="/rebel7/start" className="text-white/50 text-xs hover:text-white/80 no-underline">Start</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
