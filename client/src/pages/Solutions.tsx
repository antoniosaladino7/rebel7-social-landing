/**
 * Rebel7 — Pagina: Solutions Overview
 * URL: /rebel7/solutions
 * Design: Swiss Typographic Style — coerente con landing principale
 * Lead qualification: 3 percorsi (small/standard/enterprise) con routing verso pilot/demo
 */

import { useState } from "react";
import { Link } from "wouter";

const SECTORS = [
  {
    id: "scuole",
    label: "Scuole",
    href: "/rebel7/scuole",
    tagline: "PCTO, extracurriculari, rendicontazione",
    desc: "Tracciamento verificabile delle ore PCTO, delle attività extracurriculari e dei programmi di orientamento. Report strutturati per il MIUR e per le aziende partner.",
    participants: "100–500 studenti",
    norm: "PCTO · D.Lgs. 77/2005 · GDPR",
    timeline: "4 settimane",
    useCases: ["Tracciamento ore PCTO", "Attività extracurriculari", "Orientamento professionale", "Report per aziende partner"],
  },
  {
    id: "comuni",
    label: "Comuni",
    href: "/rebel7/comuni",
    tagline: "Partecipazione civica, fondi europei",
    desc: "Documentazione verificabile della partecipazione civica, del bilancio partecipativo e delle iniziative di coinvolgimento dei cittadini. Requisiti per i fondi europei.",
    participants: "500–5.000 cittadini",
    norm: "D.Lgs. 33/2013 · CAD · GDPR",
    timeline: "6 settimane",
    useCases: ["Bilancio partecipativo", "Consultazioni pubbliche", "Iniziative civiche", "Rendicontazione fondi europei"],
  },
  {
    id: "aziende",
    label: "Aziende",
    href: "/rebel7/aziende",
    tagline: "CSR, ESG, conformità CSRD",
    desc: "Dati ESG verificabili per la rendicontazione CSRD, il rating ESG e gli audit di terze parti. Tracciamento del volontariato d'impresa e dei programmi CSR.",
    participants: "100–2.000 dipendenti",
    norm: "CSRD · ESRS S1 · EBA · GRI",
    timeline: "6–8 settimane",
    useCases: ["Volontariato d'impresa", "Programmi CSR", "Rendicontazione CSRD", "Rating ESG"],
  },
  {
    id: "organizzazioni",
    label: "ONG e Fondazioni",
    href: "/rebel7/organizzazioni",
    tagline: "Impatto, donatori, bandi",
    desc: "Documentazione verificabile dell'impatto per i report ai donatori, i bandi pubblici e le valutazioni di terze parti. Dati strutturati per il fundraising istituzionale.",
    participants: "200–2.000 beneficiari",
    norm: "GDPR · Codice del Terzo Settore",
    timeline: "4–6 settimane",
    useCases: ["Report ai donatori", "Documentazione bandi", "Impatto verificabile", "Rendicontazione istituzionale"],
  },
];

const DEPLOYMENT_PATHS = [
  {
    id: "small",
    label: "Small deployment",
    participants: "100–300",
    initiatives: "1–2",
    timeline: "4 settimane",
    desc: "Un pilot su una singola iniziativa. Configurazione guidata, nessuna integrazione complessa. Dati verificabili dal primo giorno.",
    includes: [
      "Configurazione piattaforma",
      "Onboarding partecipanti",
      "Tracciamento automatico",
      "Report di validazione",
    ],
    cta: "/rebel7/pilot",
    ctaLabel: "Avvia small deployment",
    highlight: false,
  },
  {
    id: "standard",
    label: "Standard deployment",
    participants: "300–1.000",
    initiatives: "2–5",
    timeline: "6–8 settimane",
    desc: "Deployment su più iniziative in parallelo. Integrazione con i sistemi esistenti. Report aggregati e conformità normativa.",
    includes: [
      "Tutto di Small deployment",
      "Multi-iniziativa in parallelo",
      "Integrazione sistemi esistenti",
      "Report aggregati",
      "Conformità normativa",
    ],
    cta: "/rebel7/pilot",
    ctaLabel: "Avvia standard deployment",
    highlight: true,
  },
  {
    id: "enterprise",
    label: "Enterprise deployment",
    participants: "1.000+",
    initiatives: "Illimitate",
    timeline: "8–16 settimane",
    desc: "Deployment su scala organizzativa completa. Configurazione personalizzata, integrazione istituzionale, rendicontazione sistematica.",
    includes: [
      "Tutto di Standard deployment",
      "Configurazione personalizzata",
      "Integrazione istituzionale",
      "Rendicontazione sistematica",
      "SLA dedicato",
      "Supporto audit",
    ],
    cta: "/rebel7/demo",
    ctaLabel: "Pianifica demo enterprise",
    highlight: false,
  },
];

export default function Solutions() {
  const [activeSector, setActiveSector] = useState(SECTORS[0]);

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
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Solutions
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Soluzioni per ogni tipo di organizzazione
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Rebel7 si adatta alla struttura e alle esigenze di ogni organizzazione. Scegli il settore e il percorso di deployment più adatto alla tua realtà.
          </p>
        </div>
      </section>

      {/* SECTOR SELECTOR */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Soluzioni per settore
            </span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              Seleziona il tuo settore
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-0 border border-[#E2E8F0] mb-8">
            {SECTORS.map((sector, i) => (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`flex-1 min-w-[120px] py-3 px-4 text-sm font-semibold transition-all duration-150 ${
                  i < SECTORS.length - 1 ? "border-r border-[#E2E8F0]" : ""
                } ${
                  activeSector.id === sector.id
                    ? "bg-[#0A1F44] text-white"
                    : "bg-white text-[#4A5568] hover:bg-[#F8FAFC] hover:text-[#0A1F44]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {sector.label}
              </button>
            ))}
          </div>

          {/* Sector detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {activeSector.tagline}
              </div>
              <h3 className="text-[#0A1F44] font-bold text-2xl mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {activeSector.label}
              </h3>
              <p className="text-[#4A5568] text-base leading-relaxed mb-6">{activeSector.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeSector.useCases.map((uc) => (
                  <div key={uc} className="flex items-center gap-2 border border-[#E2E8F0] p-3">
                    <span className="text-[#0A1F44] font-bold text-xs">—</span>
                    <span className="text-[#0D0D0D] text-sm">{uc}</span>
                  </div>
                ))}
              </div>
              <Link href={activeSector.href} className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-6 py-3 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Scopri la soluzione per {activeSector.label} →
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-[#E2E8F0] p-6 h-full">
                <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  Specifiche
                </div>
                {[
                  { label: "Partecipanti tipici", value: activeSector.participants },
                  { label: "Conformità normativa", value: activeSector.norm },
                  { label: "Timeline deployment", value: activeSector.timeline },
                ].map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5 mb-4 pb-4 border-b border-[#E2E8F0] last:border-0 last:mb-0 last:pb-0">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {spec.label}
                    </div>
                    <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <Link href="/rebel7/pilot" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-5 py-2.5 hover:bg-[#071530] transition-colors duration-150 no-underline w-full text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Avvia pilot per {activeSector.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* DEPLOYMENT PATHS — Lead Qualification */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Percorsi di deployment
            </span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              Scegli il percorso di deployment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEPLOYMENT_PATHS.map((path) => (
              <div
                key={path.id}
                className={`border p-7 flex flex-col ${
                  path.highlight
                    ? "border-[#0A1F44] bg-white"
                    : "border-[#E2E8F0] bg-white"
                }`}
              >
                {path.highlight && (
                  <div className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider mb-3 pb-3 border-b border-[#E2E8F0]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Più comune
                  </div>
                )}
                <div className="text-[#0A1F44] font-bold text-lg mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {path.label}
                </div>
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-xs text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Partecipanti</div>
                    <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{path.participants}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Iniziative</div>
                    <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{path.initiatives}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Timeline</div>
                    <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{path.timeline}</div>
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-[#0A1F44] mb-4" />
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{path.desc}</p>
                <div className="flex flex-col gap-2 mb-6 flex-1">
                  {path.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-[#0D0D0D] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={path.cta}
                  className={`inline-block font-bold text-sm px-5 py-3 text-center transition-all duration-150 no-underline ${
                    path.highlight
                      ? "bg-[#0A1F44] text-white hover:bg-[#071530]"
                      : "border border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {path.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READINESS CTA */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Non sai quale percorso scegliere?
            </div>
            <div className="text-[#0A1F44] font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Valuta la prontezza della tua organizzazione
            </div>
            <p className="text-[#4A5568] text-sm mt-1">
              5 domande per identificare il percorso di deployment raccomandato.
            </p>
          </div>
          <Link href="/rebel7/readiness" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#071530] transition-colors duration-150 no-underline flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Valuta la tua prontezza
          </Link>
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
            <Link href="/rebel7/implementation" className="text-white/50 text-xs hover:text-white/80 no-underline">Implementation</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
