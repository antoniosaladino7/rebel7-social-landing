/**
 * Rebel7 — Pagina: Demo Booking
 * URL: /rebel7/demo
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { Link } from "wouter";

const DEMO_INCLUDES = [
  { num: "01", title: "Panoramica della piattaforma", desc: "Presentazione dell'architettura operativa: come Rebel7 struttura, traccia e rendiconta la partecipazione." },
  { num: "02", title: "Configurazione di un'iniziativa", desc: "Dimostrazione live della configurazione di un programma: obiettivi, partecipanti, criteri di verifica." },
  { num: "03", title: "Tracciamento in tempo reale", desc: "Visualizzazione della dashboard operativa con dati di partecipazione aggiornati in tempo reale." },
  { num: "04", title: "Generazione dei report", desc: "Dimostrazione della generazione di report strutturati: esportazione, formato audit, rendicontazione istituzionale." },
];

export default function Demo() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Richiesta di demo inviata. Sarai ricontattato entro 48 ore lavorative per confermare data e ora.");
  };

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
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline">
              Avvia pilot
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Demo della piattaforma
            </span>
            <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              Pianifica una dimostrazione della piattaforma
            </h1>
            <p className="text-[#A8C4E0] text-lg leading-relaxed mb-8">
              Una sessione operativa di 45 minuti per vedere Rebel7 in funzione: configurazione, tracciamento e reportistica su un caso d'uso reale del tuo settore.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#demo-form" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Pianifica la demo
              </a>
              <Link href="/rebel7/pilot" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Avvia direttamente un pilot
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { val: "45 min", label: "Durata della sessione" },
              { val: "Live", label: "Dimostrazione operativa" },
              { val: "48h", label: "Tempo di risposta" },
            ].map((s) => (
              <div key={s.val} className="border border-white/20 p-5 bg-white/5">
                <div className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.val}</div>
                <div className="text-[#A8C4E0] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE DEMO INCLUDES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Contenuto della demo
            </span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              Cosa include la sessione
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEMO_INCLUDES.map((item) => (
              <div key={item.num} className="border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-3xl mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.num}</div>
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* DEMO FORM */}
      <section id="demo-form" className="py-24 bg-[#0A1F44]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Pianifica la sessione
            </span>
            <h2 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
              Pianifica una demo
            </h2>
            <p className="text-[#A8C4E0] text-sm">
              Compila il modulo. Sarai ricontattato entro 48 ore lavorative per confermare data e ora della sessione.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "org", label: "Organizzazione", type: "text", placeholder: "Es. Comune di Milano", full: true },
              { id: "contact", label: "Referente", type: "text", placeholder: "Nome e cognome" },
              { id: "email", label: "Email istituzionale", type: "email", placeholder: "nome@ente.it" },
              { id: "phone", label: "Telefono", type: "tel", placeholder: "+39 02 0000000" },
              { id: "participants", label: "Numero di partecipanti stimato", type: "number", placeholder: "Es. 200" },
              { id: "country", label: "Paese", type: "text", placeholder: "Es. Italia" },
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

            <div>
              <label htmlFor="sector" className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Settore
              </label>
              <select
                id="sector"
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors duration-150"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                defaultValue=""
              >
                <option value="" className="bg-[#0A1F44]">Seleziona...</option>
                <option value="Scuola" className="bg-[#0A1F44]">Scuola / Istituto scolastico</option>
                <option value="Comune" className="bg-[#0A1F44]">Comune / Ente pubblico</option>
                <option value="Azienda" className="bg-[#0A1F44]">Azienda</option>
                <option value="ONG" className="bg-[#0A1F44]">ONG / Fondazione</option>
                <option value="Universita" className="bg-[#0A1F44]">Università / Centro di formazione</option>
                <option value="Altro" className="bg-[#0A1F44]">Altro ente istituzionale</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferred-date" className="block text-xs font-semibold text-[#A8C4E0] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Data preferita
              </label>
              <input
                id="preferred-date"
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
                Pianifica demo
              </button>
              <p className="text-white/30 text-xs mt-3 text-center" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                I dati sono trattati in conformità al GDPR. Nessun dato commerciale. Solo comunicazioni operative.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/pilot" className="text-white/50 text-xs hover:text-white/80 no-underline">Pilot Program</Link>
            <Link href="/rebel7/casi" className="text-white/50 text-xs hover:text-white/80 no-underline">Casi studio</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            © 2025 Rebel7. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
