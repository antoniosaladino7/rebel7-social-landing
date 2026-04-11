/**
 * Rebel7 — Pagina: Start Deployment
 * URL: /rebel7/start
 * Design: Swiss Typographic Style — coerente con landing principale
 * Form: 11 campi strutturati per la richiesta di deployment
 */

import { useState } from "react";
import { Link } from "wouter";

const ORG_TYPES = ["School / Educational institution", "Municipality / Public administration", "Company / Corporation", "NGO / Non-profit", "University / Higher education", "Foundation", "Government agency", "Other"];
const SECTORS = ["Education", "Public administration", "Corporate / CSR", "Non-profit / Social", "Healthcare", "Finance", "Other"];
const PARTICIPANT_RANGES = ["< 100", "100–300", "300–1,000", "1,000–5,000", "> 5,000"];

export default function Start() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    orgName: "",
    orgType: "",
    sector: "",
    participants: "",
    city: "",
    country: "",
    contactPerson: "",
    email: "",
    phone: "",
    startDate: "",
    objective: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-[#0D0D0D]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center h-16">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="text-[#0A1F44] font-bold text-xl tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            </Link>
          </div>
        </nav>
        <div className="max-w-[700px] mx-auto px-6 py-32 text-center">
          <div className="w-12 h-0.5 bg-[#0A1F44] mx-auto mb-8" />
          <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Richiesta ricevuta
          </div>
          <h1 className="text-[#0A1F44] font-bold text-3xl mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Deployment request submitted
          </h1>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            La richiesta di deployment per <strong>{form.orgName}</strong> è stata ricevuta. Sarai ricontattato entro 48 ore lavorative per definire la configurazione operativa.
          </p>
          <div className="border border-[#E2E8F0] p-6 text-left mb-8">
            <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Prossimi passi</div>
            {[
              "Riceverai una email di conferma entro 1 ora lavorativa",
              "Un referente Rebel7 ti contatterà entro 48 ore per un briefing operativo",
              "Definirete insieme la configurazione del deployment e la timeline",
              "Il sistema sarà operativo entro 4–8 settimane dall'avvio",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[#0D0D0D] text-sm">{step}</span>
              </div>
            ))}
          </div>
          <Link href="/" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-7 py-3.5 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Torna alla home
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/rebel7/why" className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">Why deploy</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Start deployment
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Start deployment
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Compila il modulo per avviare il processo di deployment. Sarai ricontattato entro 48 ore lavorative per definire la configurazione operativa.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* FORM */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-0 border border-[#E2E8F0]">

                {/* Section: Organization */}
                <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-8 py-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    01 · Organization
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-[#E2E8F0]">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#E2E8F0]">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Organization name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="orgName"
                      value={form.orgName}
                      onChange={handleChange}
                      required
                      placeholder="Nome dell'organizzazione"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                  <div className="p-6">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Organization type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="orgType"
                      value={form.orgType}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150 bg-white"
                    >
                      <option value="">Seleziona tipo</option>
                      {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-[#E2E8F0]">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#E2E8F0]">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Sector <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sector"
                      value={form.sector}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150 bg-white"
                    >
                      <option value="">Seleziona settore</option>
                      {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="p-6">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Expected participants <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="participants"
                      value={form.participants}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150 bg-white"
                    >
                      <option value="">Seleziona range</option>
                      {PARTICIPANT_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-[#E2E8F0]">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#E2E8F0]">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Città"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                  <div className="p-6">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Country</label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Paese"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                </div>

                {/* Section: Contact */}
                <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-8 py-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    02 · Contact
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-[#E2E8F0]">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#E2E8F0]">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Contact person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={handleChange}
                      required
                      placeholder="Nome e cognome"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                  <div className="p-6">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@organizzazione.it"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-[#E2E8F0]">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#E2E8F0]">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+39 000 000 0000"
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                  <div className="p-6">
                    <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Preferred start date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150"
                    />
                  </div>
                </div>

                {/* Section: Objective */}
                <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-8 py-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    03 · Deployment objective
                  </div>
                </div>
                <div className="p-6 border-b border-[#E2E8F0]">
                  <label className="block text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Deployment objective <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="objective"
                    value={form.objective}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descrivi l'obiettivo del deployment: tipo di iniziativa, partecipanti target, requisiti normativi o di rendicontazione specifici."
                    className="w-full border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0D0D0D] focus:outline-none focus:border-[#0A1F44] transition-colors duration-150 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <p className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    I dati sono trattati in conformità al GDPR. Nessuna condivisione con terze parti.
                  </p>
                  <button
                    type="submit"
                    className="flex-shrink-0 bg-[#0A1F44] text-white font-bold text-sm px-8 py-3.5 hover:bg-[#071530] transition-colors duration-150"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Start deployment
                  </button>
                </div>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-4">
                <div className="border border-[#E2E8F0] p-6">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Cosa succede dopo
                  </div>
                  {[
                    { step: "01", label: "Conferma email", desc: "Entro 1 ora lavorativa" },
                    { step: "02", label: "Briefing operativo", desc: "Entro 48 ore — call con referente Rebel7" },
                    { step: "03", label: "Configurazione", desc: "Definizione della configurazione e timeline" },
                    { step: "04", label: "Deployment attivo", desc: "Sistema operativo in 4–8 settimane" },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3 mb-4 last:mb-0">
                      <div className="text-xs font-semibold text-[#4A5568] w-6 flex-shrink-0 mt-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s.step}</div>
                      <div>
                        <div className="text-[#0A1F44] font-bold text-sm mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                        <div className="text-[#4A5568] text-xs">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border border-[#E2E8F0] p-6">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Deployment capacity
                  </div>
                  {[
                    { label: "Partecipanti", value: "Illimitati" },
                    { label: "Timeline", value: "4–8 settimane" },
                    { label: "Verifica", value: "Automatica" },
                    { label: "Report", value: "Istantanei" },
                  ].map((m) => (
                    <div key={m.label} className="flex justify-between items-center mb-3 last:mb-0 pb-3 last:pb-0 border-b last:border-0 border-[#E2E8F0]">
                      <div className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.label}</div>
                      <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="border border-[#E2E8F0] p-6">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Hai domande?
                  </div>
                  <p className="text-[#4A5568] text-sm mb-3">Consulta le risorse disponibili prima di compilare il modulo.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/rebel7/why" className="text-[#0A1F44] text-sm font-semibold hover:underline no-underline">Why organizations deploy →</Link>
                    <Link href="/rebel7/examples" className="text-[#0A1F44] text-sm font-semibold hover:underline no-underline">Deployment examples →</Link>
                    <Link href="/rebel7/capabilities" className="text-[#0A1F44] text-sm font-semibold hover:underline no-underline">System capabilities →</Link>
                  </div>
                </div>
              </div>
            </div>
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
            <Link href="/rebel7/examples" className="text-white/50 text-xs hover:text-white/80 no-underline">Examples</Link>
            <Link href="/rebel7/capabilities" className="text-white/50 text-xs hover:text-white/80 no-underline">Capabilities</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
