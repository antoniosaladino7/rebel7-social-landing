/**
 * SectorPage — Componente riutilizzabile per le landing page settoriali Rebel7
 * Design: Swiss Typographic Style — Navy #0A1F44 | IBM Plex Sans + DM Sans
 * Nessuna modifica al sistema di design esistente.
 */

import { Link } from "wouter";

export interface SectorPageProps {
  sector: string;
  tagline: string;
  headline: string;
  subheadline: string;
  problemTitle: string;
  problemBody: string;
  capabilities: { title: string; desc: string }[];
  useCases: { label: string; problem: string; action: string; outcome: string }[];
  proofPoints: { metric: string; desc: string }[];
  complianceItems: string[];
  ctaLabel: string;
}

export default function SectorPage({
  sector,
  tagline,
  headline,
  subheadline,
  problemTitle,
  problemBody,
  capabilities,
  useCases,
  proofPoints,
  complianceItems,
  ctaLabel,
}: SectorPageProps) {
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
            <Link href="/" className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">← Torna alla home</Link>
            <a href="#pilot-form" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">
              Avvia un pilot
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Rebel7 per {sector}
            </span>
            <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              {headline}
            </h1>
            <p className="text-[#A8C4E0] text-lg leading-relaxed mb-8">{subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#pilot-form" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {ctaLabel}
              </a>
              <a href="#use-cases" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Vedi i casi d'uso
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="border border-white/20 p-6 bg-white/5">
              <div className="text-xs font-semibold tracking-[0.12em] text-[#7FA8D4] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Posizionamento</div>
              <p className="text-white text-sm leading-relaxed font-medium">{tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Il problema</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              {problemTitle}
            </h2>
            <div className="w-8 h-0.5 bg-[#0A1F44]" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-[#4A5568] text-base leading-relaxed">{problemBody}</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── CAPABILITIES ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Funzionalità</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              Cosa fa Rebel7 per {sector}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── USE CASES ── */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Scenari reali</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              Casi d'uso verificabili
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.label} className="border border-[#E2E8F0] p-7 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#0A1F44] uppercase mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{uc.label}</div>
                {[{ label: "Problema", text: uc.problem }, { label: "Azione", text: uc.action }, { label: "Esito", text: uc.outcome }].map((row) => (
                  <div key={row.label} className="flex gap-4 mb-3 last:mb-0">
                    <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider w-16 flex-shrink-0 pt-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{row.label}</div>
                    <p className="text-[#0D0D0D] text-sm leading-relaxed">{row.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PROOF POINTS ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Cosa puoi dimostrare</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
              Evidenza verificabile per {sector}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofPoints.map((p) => (
              <div key={p.metric} className="bg-white border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.metric}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── COMPLIANCE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Conformità</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
              Standard normativi supportati
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-3 items-start content-start">
            {complianceItems.map((item) => (
              <span key={item} className="border border-[#0A1F44] text-[#0A1F44] text-xs font-semibold px-3 py-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PILOT FORM ── */}
      <section id="pilot-form" className="py-24 bg-[#0A1F44]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Prossimo passo</span>
            <h2 className="text-white font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
              Richiedi l'attivazione del pilot
            </h2>
            <p className="text-[#A8C4E0] text-sm mt-4">Compila il modulo. Sarai ricontattato entro 48 ore lavorative.</p>
          </div>
          <PilotForm sectorDefault={sector} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            <span className="text-white/30 text-sm">Infrastructure Platform</span>
          </div>
          <Link href="/" className="text-white/50 text-xs hover:text-white/80 transition-colors duration-150 no-underline">← Torna alla landing principale</Link>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

/* ── Pilot Form Component ── */
export function PilotForm({ sectorDefault = "" }: { sectorDefault?: string }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert("Richiesta inviata. Sarai ricontattato entro 48 ore lavorative."); }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {[
        { id: "org", label: "Nome dell'organizzazione", type: "text", placeholder: "Es. Comune di Milano", full: true },
        { id: "city", label: "Città", type: "text", placeholder: "Es. Milano" },
        { id: "contact", label: "Referente", type: "text", placeholder: "Nome e cognome" },
        { id: "email", label: "Email istituzionale", type: "email", placeholder: "nome@ente.it" },
        { id: "phone", label: "Telefono", type: "tel", placeholder: "+39 02 0000000" },
        { id: "participants", label: "Numero di partecipanti stimato", type: "number", placeholder: "Es. 200" },
      ].map((f) => (
        <div key={f.id} className={f.full ? "sm:col-span-2" : ""}>
          <label htmlFor={f.id} className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            placeholder={f.placeholder}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors duration-150"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          />
        </div>
      ))}

      {/* Tipo di organizzazione */}
      <div>
        <label htmlFor="org-type" className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          Tipo di organizzazione
        </label>
        <select
          id="org-type"
          defaultValue={sectorDefault}
          className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors duration-150"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          <option value="" className="bg-[#0A1F44]">Seleziona...</option>
          <option value="Scuola" className="bg-[#0A1F44]">Scuola</option>
          <option value="Comune" className="bg-[#0A1F44]">Comune / Ente pubblico</option>
          <option value="Azienda" className="bg-[#0A1F44]">Azienda</option>
          <option value="ONG" className="bg-[#0A1F44]">ONG / Fondazione</option>
          <option value="Altro" className="bg-[#0A1F44]">Altro</option>
        </select>
      </div>

      {/* Tipo di iniziativa */}
      <div>
        <label htmlFor="initiative" className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          Tipo di iniziativa
        </label>
        <input
          id="initiative"
          type="text"
          placeholder="Es. PCTO, programma civico, CSR..."
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors duration-150"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        />
      </div>

      {/* Data di avvio */}
      <div className="sm:col-span-2">
        <label htmlFor="start-date" className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          Data di avvio prevista
        </label>
        <input
          id="start-date"
          type="date"
          className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors duration-150"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif", colorScheme: "dark" }}
        />
      </div>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          className="w-full bg-white text-[#0A1F44] font-bold text-sm py-4 hover:bg-[#E8F0FA] transition-colors duration-150"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Richiedi pilot
        </button>
        <p className="text-white/30 text-xs mt-3 text-center" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          I dati sono trattati in conformità al GDPR. Nessun dato commerciale. Solo comunicazioni operative.
        </p>
      </div>
    </form>
  );
}
