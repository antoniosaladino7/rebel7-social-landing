/**
 * Rebel7 — Pagina: Dashboard Preview
 * URL: /rebel7/dashboard
 * Design: Swiss Typographic Style — coerente con landing principale
 * Mostra una dashboard simulata con metriche di partecipazione in tempo reale
 */

import { useState } from "react";
import { Link } from "wouter";

const INITIATIVES = [
  {
    id: "pcto-2025",
    name: "PCTO — Orientamento professionale",
    sector: "Scuola",
    status: "active",
    participants: 142,
    target: 180,
    actionsVerified: 1247,
    completionRate: 78.9,
    startDate: "15 Gen 2025",
    endDate: "30 Giu 2025",
    lastActivity: "2 ore fa",
  },
  {
    id: "civic-engagement",
    name: "Partecipazione civica — Bilancio partecipativo",
    sector: "Comune",
    status: "active",
    participants: 834,
    target: 1000,
    actionsVerified: 5621,
    completionRate: 83.4,
    startDate: "01 Feb 2025",
    endDate: "31 Mag 2025",
    lastActivity: "45 min fa",
  },
  {
    id: "csr-volontariato",
    name: "Volontariato d'impresa — Q1 2025",
    sector: "Azienda",
    status: "completed",
    participants: 312,
    target: 300,
    actionsVerified: 2890,
    completionRate: 96.1,
    startDate: "01 Gen 2025",
    endDate: "31 Mar 2025",
    lastActivity: "Completato",
  },
  {
    id: "beneficiari-ong",
    name: "Programma beneficiari — Ciclo 2025",
    sector: "ONG",
    status: "active",
    participants: 421,
    target: 600,
    actionsVerified: 3102,
    completionRate: 70.2,
    startDate: "01 Mar 2025",
    endDate: "31 Ago 2025",
    lastActivity: "1 ora fa",
  },
];

const COMPLIANCE_ITEMS = [
  { label: "GDPR", status: "compliant" },
  { label: "CSRD / ESRS S1", status: "compliant" },
  { label: "EBA ESG Risk", status: "compliant" },
  { label: "D.Lgs. 33/2013", status: "compliant" },
  { label: "Audit trail", status: "active" },
];

const SECTOR_COLORS: Record<string, string> = {
  Scuola: "#0A1F44",
  Comune: "#1B3A6B",
  Azienda: "#2D5A9B",
  ONG: "#4A5568",
};

export default function Dashboard() {
  const [selectedInitiative, setSelectedInitiative] = useState(INITIATIVES[0]);

  const totalParticipants = INITIATIVES.reduce((s, i) => s + i.participants, 0);
  const totalActions = INITIATIVES.reduce((s, i) => s + i.actionsVerified, 0);
  const activeInitiatives = INITIATIVES.filter((i) => i.status === "active").length;
  const avgCompletion = Math.round(INITIATIVES.reduce((s, i) => s + i.completionRate, 0) / INITIATIVES.length);

  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-[#0A1F44] font-bold text-xl tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            <span className="hidden sm:inline text-[#4A5568] text-sm font-medium border-l border-[#E2E8F0] pl-2 ml-1">Dashboard Preview</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Demo environment — dati simulati
            </span>
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Avvia pilot reale</Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <div className="bg-[#0A1F44] py-8 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Rebel7 Dashboard
              </span>
              <h1 className="text-white font-bold" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem" }}>
                Panoramica organizzativa
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[#A8C4E0] text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Live — aggiornato ora</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI STRIP */}
      <div className="bg-[#071530] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Partecipanti totali", value: totalParticipants.toLocaleString(), sub: "identità verificate" },
              { label: "Azioni verificate", value: totalActions.toLocaleString(), sub: "log immutabili" },
              { label: "Iniziative attive", value: activeInitiatives, sub: `su ${INITIATIVES.length} totali` },
              { label: "Completamento medio", value: `${avgCompletion}%`, sub: "tasso di partecipazione" },
            ].map((kpi) => (
              <div key={kpi.label} className="py-5 px-6">
                <div className="text-xs font-semibold text-[#7FA8D4] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {kpi.label}
                </div>
                <div className="text-white font-bold text-2xl mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {kpi.value}
                </div>
                <div className="text-[#4A5568] text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* INITIATIVE LIST */}
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Iniziative
            </div>
            <div className="flex flex-col gap-0 border border-[#E2E8F0]">
              {INITIATIVES.map((initiative, i) => (
                <button
                  key={initiative.id}
                  onClick={() => setSelectedInitiative(initiative)}
                  className={`flex flex-col gap-1.5 p-4 text-left transition-all duration-150 ${
                    i < INITIATIVES.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  } ${
                    selectedInitiative.id === initiative.id
                      ? "bg-[#0A1F44]"
                      : "bg-white hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold px-2 py-0.5"
                      style={{
                        backgroundColor: selectedInitiative.id === initiative.id ? "rgba(255,255,255,0.15)" : SECTOR_COLORS[initiative.sector] + "15",
                        color: selectedInitiative.id === initiative.id ? "#A8C4E0" : SECTOR_COLORS[initiative.sector],
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {initiative.sector}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        initiative.status === "active"
                          ? selectedInitiative.id === initiative.id ? "text-green-300" : "text-green-600"
                          : selectedInitiative.id === initiative.id ? "text-[#7FA8D4]" : "text-[#4A5568]"
                      }`}
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {initiative.status === "active" ? "● Attiva" : "✓ Completata"}
                    </span>
                  </div>
                  <div
                    className={`font-bold text-sm leading-tight ${
                      selectedInitiative.id === initiative.id ? "text-white" : "text-[#0A1F44]"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {initiative.name}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/20 h-1">
                      <div
                        className="h-1 transition-all duration-300"
                        style={{
                          width: `${initiative.completionRate}%`,
                          backgroundColor: selectedInitiative.id === initiative.id ? "rgba(255,255,255,0.7)" : "#0A1F44",
                        }}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        selectedInitiative.id === initiative.id ? "text-[#A8C4E0]" : "text-[#4A5568]"
                      }`}
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {initiative.completionRate}%
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* INITIATIVE DETAIL */}
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Dettaglio iniziativa
            </div>

            {/* Header */}
            <div className="border border-[#E2E8F0] p-6 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[#0A1F44] font-bold text-lg mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {selectedInitiative.name}
                  </div>
                  <div className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {selectedInitiative.startDate} → {selectedInitiative.endDate} · Ultimo aggiornamento: {selectedInitiative.lastActivity}
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 ${
                    selectedInitiative.status === "active"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-[#F8FAFC] text-[#4A5568] border border-[#E2E8F0]"
                  }`}
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {selectedInitiative.status === "active" ? "Attiva" : "Completata"}
                </span>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Partecipanti", value: selectedInitiative.participants, sub: `/ ${selectedInitiative.target} target` },
                  { label: "Azioni verificate", value: selectedInitiative.actionsVerified.toLocaleString(), sub: "log immutabili" },
                  { label: "Tasso completamento", value: `${selectedInitiative.completionRate}%`, sub: "partecipazione verificata" },
                  { label: "Settore", value: selectedInitiative.sector, sub: "tipologia organizzazione" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {m.label}
                    </div>
                    <div className="text-[#0A1F44] font-bold text-xl mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {m.value}
                    </div>
                    <div className="text-[#4A5568] text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {m.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar detail */}
            <div className="border border-[#E2E8F0] p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  Avanzamento partecipazione
                </div>
                <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {selectedInitiative.participants} / {selectedInitiative.target}
                </div>
              </div>
              <div className="w-full bg-[#E2E8F0] h-2 mb-2">
                <div
                  className="bg-[#0A1F44] h-2 transition-all duration-500"
                  style={{ width: `${(selectedInitiative.participants / selectedInitiative.target) * 100}%` }}
                />
              </div>
              <div className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {Math.round((selectedInitiative.participants / selectedInitiative.target) * 100)}% del target raggiunto · {selectedInitiative.target - selectedInitiative.participants} partecipanti rimanenti
              </div>
            </div>

            {/* Compliance */}
            <div className="border border-[#E2E8F0] p-6">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Stato conformità normativa
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPLIANCE_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 border border-[#E2E8F0] px-3 py-1.5"
                  >
                    <span className={`text-xs font-bold ${item.status === "compliant" ? "text-green-600" : "text-[#0A1F44]"}`}>
                      {item.status === "compliant" ? "✓" : "●"}
                    </span>
                    <span className="text-xs font-semibold text-[#0A1F44]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <p className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  Audit trail immutabile attivo · Report esportabile in formato standard · Dati verificabili da terze parti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Questa è una demo
            </div>
            <div className="text-[#0A1F44] font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Vuoi vedere la tua organizzazione in questa dashboard?
            </div>
            <p className="text-[#4A5568] text-sm mt-1">
              Avvia un pilot di 4 settimane. Dati reali, verificabili, dal primo giorno.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/rebel7/pilot" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#071530] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Avvia il pilot
            </Link>
            <Link href="/rebel7/demo" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-7 py-3.5 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Richiedi una demo
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/pilot" className="text-white/50 text-xs hover:text-white/80 no-underline">Pilot Program</Link>
            <Link href="/rebel7/casi" className="text-white/50 text-xs hover:text-white/80 no-underline">Casi studio</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
