/**
 * Rebel7 — Pagina: Deployment Examples
 * URL: /rebel7/examples
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const EXAMPLES = [
  {
    id: "school-pcto",
    env: "Secondary school — 1,200 students",
    sector: "Education",
    participants: "420 students",
    initiative: "PCTO — Community service program",
    duration: "6 weeks",
    output: [
      "1,847 participation records generated",
      "Verification logs for each activity",
      "Individual completion reports per student",
      "Aggregated report for MIUR submission",
    ],
    result: "100% of students received verified PCTO documentation. Zero manual data entry required. Report submitted to MIUR within 24 hours of program completion.",
  },
  {
    id: "municipality-civic",
    env: "Municipality — 45,000 residents",
    sector: "Public administration",
    participants: "1,200 citizens",
    initiative: "Urban participation program — Participatory budget",
    duration: "8 weeks",
    output: [
      "Participation metrics for each consultation",
      "Verified action log per citizen",
      "Impact documentation for EU funding report",
      "Transparency report per D.Lgs. 33/2013",
    ],
    result: "Participation rate 2.7% of total residents — above EU benchmark. Documentation submitted for PNRR funding eligibility. Audit completed without additional data preparation.",
  },
  {
    id: "company-csr",
    env: "Manufacturing company — 1,800 employees",
    sector: "Corporate",
    participants: "350 employees",
    initiative: "Internal engagement program — Corporate volunteering Q1",
    duration: "5 weeks",
    output: [
      "Participation data recorded per employee",
      "Activities verified against CSR criteria",
      "ESG report generated for CSRD disclosure",
      "Data exported to GRI reporting framework",
    ],
    result: "ESRS S1 data requirements fully satisfied. ESG report ready for third-party audit. Zero additional data collection required at year-end.",
  },
  {
    id: "ngo-beneficiaries",
    env: "Social NGO — 3 regional offices",
    sector: "Non-profit",
    participants: "800 beneficiaries",
    initiative: "Social support program — Cycle 2025",
    duration: "7 weeks",
    output: [
      "Participation tracked per beneficiary",
      "Activities verified against program criteria",
      "Impact report generated for donors",
      "Documentation for public grant application",
    ],
    result: "Donor report delivered 3 weeks ahead of deadline. Grant application documentation complete and verified. Impact data accepted by third-party evaluator without revision.",
  },
  {
    id: "university-orientation",
    env: "University — 8,000 enrolled students",
    sector: "Higher education",
    participants: "680 students",
    initiative: "Career orientation program — Academic year 2024/25",
    duration: "10 weeks",
    output: [
      "Participation records per student",
      "Verification of orientation activities",
      "Completion certificates generated",
      "Aggregated report for accreditation body",
    ],
    result: "Accreditation documentation submitted on time. Student satisfaction data integrated with participation metrics. Program renewed for next academic year based on verified outcomes.",
  },
  {
    id: "foundation-grants",
    env: "Private foundation — National scope",
    sector: "Foundation",
    participants: "1,100 grant recipients",
    initiative: "Social impact grant program — Round 3",
    duration: "12 weeks",
    output: [
      "Participation data per grant recipient",
      "Activity verification against grant criteria",
      "Impact documentation per project",
      "Consolidated report for board and donors",
    ],
    result: "Grant compliance rate 97.3%. Board report delivered with full data traceability. Three grants renewed based on verified impact data.",
  },
];

export default function Examples() {
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
            Deployment examples
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Deployment examples
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Esempi operativi dettagliati di deployment Rebel7 in ambienti reali. Ogni esempio include ambiente, partecipanti, iniziativa, durata, output e risultati verificabili.
          </p>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-6">
            {EXAMPLES.map((ex, i) => (
              <div key={ex.id} className="border border-[#E2E8F0]">
                {/* Header */}
                <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {String(i + 1).padStart(2, "0")} · {ex.sector}
                    </div>
                    <div className="text-[#0A1F44] font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {ex.env}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="border border-[#E2E8F0] bg-white px-3 py-1.5">
                      <div className="text-xs text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Participants</div>
                      <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ex.participants}</div>
                    </div>
                    <div className="border border-[#E2E8F0] bg-white px-3 py-1.5">
                      <div className="text-xs text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Duration</div>
                      <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ex.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Initiative + Output */}
                  <div className="lg:col-span-7 p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Initiative</div>
                      <div className="text-[#0A1F44] font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ex.initiative}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output</div>
                      <div className="flex flex-col gap-2">
                        {ex.output.map((o) => (
                          <div key={o} className="flex items-start gap-2">
                            <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-[#0D0D0D] text-sm">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="lg:col-span-5 p-8">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Result</div>
                    <p className="text-[#0D0D0D] text-sm leading-relaxed">{ex.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[#0A1F44] font-bold text-xl mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Vuoi un deployment simile per la tua organizzazione?
            </div>
            <p className="text-[#4A5568] text-sm">Compila il modulo di richiesta. Sarai ricontattato entro 48 ore lavorative.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/rebel7/start" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#071530] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Start deployment
            </Link>
            <Link href="/rebel7/capabilities" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-7 py-3.5 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              System capabilities
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
            <Link href="/rebel7/why" className="text-white/50 text-xs hover:text-white/80 no-underline">Why deploy</Link>
            <Link href="/rebel7/capabilities" className="text-white/50 text-xs hover:text-white/80 no-underline">Capabilities</Link>
            <Link href="/rebel7/start" className="text-white/50 text-xs hover:text-white/80 no-underline">Start</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
