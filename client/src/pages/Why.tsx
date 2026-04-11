/**
 * Rebel7 — Pagina: Why Organizations Deploy
 * URL: /rebel7/why
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const REASONS = [
  {
    id: "operational-clarity",
    title: "Operational clarity",
    subtitle: "Chiarezza operativa",
    desc: "Le organizzazioni che gestiscono programmi di partecipazione senza un sistema strutturato operano con dati incompleti, non verificabili e non confrontabili. Rebel7 fornisce una visione operativa completa: chi ha partecipato, a cosa, quando e con quale esito.",
    points: [
      "Dashboard operativa in tempo reale",
      "Dati disaggregati per segmento e periodo",
      "Confrontabilità tra iniziative e organizzazioni",
      "Nessun dato auto-dichiarato",
    ],
  },
  {
    id: "data-verification",
    title: "Data verification",
    subtitle: "Verifica dei dati",
    desc: "I dati non verificati non hanno valore istituzionale. Rebel7 verifica ogni azione alla fonte: ogni partecipazione è attribuita a un'identità verificata, registrata con timestamp immutabile e conservata in un audit trail accessibile.",
    points: [
      "Verifica automatica di ogni azione",
      "Identità verificate, non auto-dichiarate",
      "Timestamp immutabili su ogni record",
      "Audit trail accessibile e esportabile",
    ],
  },
  {
    id: "reporting-capability",
    title: "Reporting capability",
    subtitle: "Capacità di rendicontazione",
    desc: "La rendicontazione manuale è lenta, costosa e soggetta a errori. Rebel7 genera report strutturati automaticamente, compatibili con i requisiti di rendicontazione istituzionale, normativa e finanziaria.",
    points: [
      "Report generati automaticamente",
      "Compatibili con CSRD, ESRS, EBA, GRI",
      "Esportabili in formato standard",
      "Pronti per audit di terze parti",
    ],
  },
  {
    id: "institutional-compliance",
    title: "Institutional compliance",
    subtitle: "Conformità istituzionale",
    desc: "Le organizzazioni operano in contesti normativi sempre più stringenti. Rebel7 è progettato per soddisfare i requisiti di conformità normativa senza elaborazione aggiuntiva: i dati sono strutturati per l'audit dal primo giorno.",
    points: [
      "CSRD / ESRS S1, S3",
      "EBA ESG Risk Framework",
      "D.Lgs. 33/2013 (trasparenza PA)",
      "GDPR — privacy by design",
    ],
  },
  {
    id: "funding-readiness",
    title: "Funding readiness",
    subtitle: "Prontezza per i finanziamenti",
    desc: "L'accesso a fondi pubblici e privati richiede documentazione strutturata e verificabile. Rebel7 produce automaticamente la documentazione necessaria per i bandi, i report ai donatori e le valutazioni di impatto.",
    points: [
      "Documentazione per bandi pubblici",
      "Report strutturati per donatori",
      "Valutazione di impatto verificabile",
      "Requisiti di rendicontazione soddisfatti",
    ],
  },
];

export default function Why() {
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
            Why deploy
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Why organizations deploy structured participation systems
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Le organizzazioni che gestiscono programmi di partecipazione senza un sistema strutturato operano con dati incompleti, non verificabili e non confrontabili. Ecco perché scelgono Rebel7.
          </p>
        </div>
      </section>

      {/* REASONS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-0">
            {REASONS.map((reason, i) => (
              <div key={reason.id} className={`border border-[#E2E8F0] ${i > 0 ? "border-t-0" : ""}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left: number + title */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[#0A1F44] font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {reason.title}
                    </div>
                    <div className="text-[#4A5568] text-sm">{reason.subtitle}</div>
                  </div>
                  {/* Right: desc + points */}
                  <div className="lg:col-span-8 p-8">
                    <p className="text-[#4A5568] text-base leading-relaxed mb-6">{reason.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {reason.points.map((p) => (
                        <div key={p} className="flex items-start gap-2">
                          <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5">—</span>
                          <span className="text-[#0D0D0D] text-sm">{p}</span>
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
              Pronto a deployare un sistema strutturato?
            </div>
            <p className="text-[#A8C4E0] text-sm">Avvia un pilot di 4–8 settimane. Dati reali, verificabili, dal primo giorno.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/rebel7/start" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Start deployment
            </Link>
            <Link href="/rebel7/examples" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              View examples
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040D1A] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/examples" className="text-white/50 text-xs hover:text-white/80 no-underline">Examples</Link>
            <Link href="/rebel7/capabilities" className="text-white/50 text-xs hover:text-white/80 no-underline">Capabilities</Link>
            <Link href="/rebel7/start" className="text-white/50 text-xs hover:text-white/80 no-underline">Start</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
