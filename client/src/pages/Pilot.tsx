/**
 * Rebel7 — Pagina: Pilot Deployment Program
 * URL: /rebel7/pilot
 * Design: Swiss Typographic Style — coerente con landing principale
 * Navy #0A1F44 | IBM Plex Sans + DM Sans | Zero decorazioni
 */

import { Link } from "wouter";
import { PilotForm } from "@/components/SectorPage";

const PILOT_INCLUDES = [
  { num: "01", title: "Configurazione della piattaforma", desc: "Setup completo dell'ambiente: definizione degli obiettivi, configurazione dei ruoli, impostazione dei criteri di verifica e dei parametri di tracciamento." },
  { num: "02", title: "Onboarding dei partecipanti", desc: "Attivazione degli account con identità verificata. Formazione operativa per i referenti interni. Documentazione di accesso per i partecipanti." },
  { num: "03", title: "Attivazione dell'iniziativa", desc: "Lancio operativo del programma. Il sistema inizia a registrare le adesioni e le azioni con timestamp e contesto verificabile." },
  { num: "04", title: "Tracciamento della partecipazione", desc: "Registrazione automatica di ogni azione completata. Dashboard in tempo reale per il referente dell'organizzazione. Nessun dato auto-dichiarato." },
  { num: "05", title: "Verifica dei risultati", desc: "Il sistema confronta le azioni registrate con gli obiettivi dichiarati e produce un indice di conformità verificabile per ogni partecipante e per l'iniziativa." },
  { num: "06", title: "Generazione dei report", desc: "Report strutturati, esportabili in formato standard. Pronti per audit interni, rendicontazione istituzionale e accesso a finanziamenti." },
];

const PILOT_OUTPUT = [
  { label: "Registri di partecipazione verificati", desc: "Log immutabile di ogni azione completata, con timestamp e identità verificata." },
  { label: "Metriche di completamento", desc: "Tasso di partecipazione, azioni completate, indice di conformità agli obiettivi." },
  { label: "Report di impatto", desc: "Documentazione strutturata dell'impatto generato, esportabile in formato standard." },
  { label: "Dashboard operativa", desc: "Accesso permanente alla dashboard con i dati del pilot. Disponibile per audit interni." },
];

const PILOT_TIMELINE = [
  { week: "Settimana 1", activity: "Configurazione piattaforma e onboarding referenti" },
  { week: "Settimana 2", activity: "Attivazione partecipanti e lancio iniziativa" },
  { week: "Settimane 3–6", activity: "Tracciamento partecipazione e monitoraggio in tempo reale" },
  { week: "Settimana 7", activity: "Verifica risultati e consolidamento dati" },
  { week: "Settimana 8", activity: "Generazione report finale e presentazione esiti" },
];

export default function Pilot() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-[#0A1F44] font-bold text-xl tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            <span className="hidden sm:inline text-[#4A5568] text-sm font-medium border-l border-[#E2E8F0] pl-2 ml-1">Infrastructure Platform</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">← Home</Link>
            <Link href="/rebel7/demo" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline">Richiedi demo</Link>
            <a href="#pilot-form" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Avvia pilot</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Programma Pilot</span>
            <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              Pilot deployment program
            </h1>
            <p className="text-[#A8C4E0] text-lg leading-relaxed mb-8">Un percorso strutturato per attivare Rebel7 nella tua organizzazione, raccogliere dati verificabili e produrre la prima documentazione di impatto in 4–8 settimane.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#pilot-form" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Avvia il pilot</a>
              <Link href="/rebel7/demo" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Richiedi una demo prima</Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { val: "4–8 settimane", label: "Durata del pilot" },
              { val: "6 fasi", label: "Struttura operativa" },
              { val: "4 output", label: "Documentazione verificabile" },
            ].map((s) => (
              <div key={s.val} className="border border-white/20 p-5 bg-white/5">
                <div className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.val}</div>
                <div className="text-[#A8C4E0] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THE PILOT INCLUDES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Contenuto del pilot</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Cosa include il pilot</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {PILOT_INCLUDES.map((item, i) => (
              <div key={item.num} className={`flex gap-6 p-6 border-b border-[#E2E8F0] ${i % 2 === 0 ? "md:border-r" : ""}`}>
                <div className="flex-shrink-0">
                  <span className="text-[#0A1F44] font-bold text-3xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.num}</span>
                </div>
                <div>
                  <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</div>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Timeline</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>Durata del pilot</h2>
            <div className="border border-[#0A1F44] p-5">
              <div className="text-[#0A1F44] font-bold text-3xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>4–8</div>
              <div className="text-[#4A5568] text-sm">settimane</div>
              <div className="text-xs text-[#4A5568] mt-3 leading-relaxed">Configurabile in base alla complessità dell'iniziativa e al numero di partecipanti.</div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-[#E2E8F0]">
              {PILOT_TIMELINE.map((row, i) => (
                <div key={row.week} className={`grid grid-cols-12 gap-4 p-5 ${i < PILOT_TIMELINE.length - 1 ? "border-b border-[#E2E8F0]" : ""} hover:bg-[#F8FAFC] transition-colors duration-150`}>
                  <div className="col-span-12 sm:col-span-3">
                    <span className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{row.week}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-9">
                    <p className="text-[#4A5568] text-sm leading-relaxed">{row.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PILOT OUTPUT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output del pilot</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Al termine del pilot</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILOT_OUTPUT.map((o) => (
              <div key={o.label} className="border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{o.label}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PILOT FORM ── */}
      <section id="pilot-form" className="py-24 bg-[#0A1F44]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Avvia il deployment</span>
            <h2 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>Inizia il pilot deployment</h2>
            <p className="text-[#A8C4E0] text-sm">Compila il modulo. Sarai ricontattato entro 48 ore lavorative per definire la configurazione operativa.</p>
          </div>
          <PilotForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/demo" className="text-white/50 text-xs hover:text-white/80 no-underline">Richiedi demo</Link>
            <Link href="/rebel7/casi" className="text-white/50 text-xs hover:text-white/80 no-underline">Casi studio</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
