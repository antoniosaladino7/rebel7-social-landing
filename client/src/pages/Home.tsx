/**
 * Rebel7 Landing Page — Home (Extended Enterprise Version)
 * Design Philosophy: Swiss International Typographic Style
 * - Grid: 12-column modular, asymmetric (7/12 content + 5/12 data)
 * - Colors: White #FFFFFF, Near-black #0D0D0D, Navy #0A1F44, Slate #4A5568, Border #E2E8F0
 * - Typography: DM Sans (headlines, authority) + IBM Plex Sans (body, technical readability)
 * - Interactions: 150ms transitions, left-border hover on cards, no decorative animations
 *
 * NEW SECTIONS ADDED (do not remove existing):
 * - Real Use Cases (after Applicazioni per settore)
 * - Metrics Dashboard Preview (after Cosa puoi dimostrare)
 * - Who Is This For (after Infrastructure, not a project)
 * - Why Rebel7 (before Security and compliance)
 * - Pilot Program (after Come iniziare)
 * - Request Pilot Form (at bottom)
 */

import { useState } from "react";
import { Link } from "wouter";
import { PilotForm } from "@/components/SectorPage";

// Phase 3 — ReadinessIndicator component
const READINESS_ITEMS = [
  { id: "initiatives", label: "Ability to launch initiatives", desc: "La tua organizzazione può strutturare e lanciare iniziative con obiettivi, partecipanti e criteri di verifica definiti." },
  { id: "tracking", label: "Ability to track participation", desc: "Il sistema registra automaticamente ogni azione completata con timestamp e identità verificata." },
  { id: "verification", label: "Ability to verify results", desc: "I risultati vengono confrontati con gli obiettivi dichiarati e validati automaticamente dal sistema." },
  { id: "reports", label: "Ability to generate reports", desc: "Report strutturati, esportabili e audit-ready generati automaticamente al termine di ogni iniziativa." },
  { id: "impact", label: "Ability to demonstrate impact", desc: "Documentazione verificabile dell'impatto generato, pronta per rendicontazione istituzionale e finanziatori." },
];

function ReadinessIndicator() {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (id: string) => setChecked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const score = checked.length;
  const getRecommendation = () => {
    if (score === 0) return { level: "Not assessed", text: "Seleziona le capacità della tua organizzazione per ricevere una raccomandazione di deployment.", color: "#4A5568" };
    if (score <= 2) return { level: "Pilot recommended", text: "La tua organizzazione è pronta per un pilot su una singola iniziativa. Il sistema si configura in 4 settimane.", color: "#0A1F44" };
    if (score <= 4) return { level: "Standard deployment", text: "La tua organizzazione è pronta per un deployment standard su più iniziative. Attivazione in 6–8 settimane.", color: "#0A1F44" };
    return { level: "Enterprise deployment", text: "La tua organizzazione è pronta per un deployment enterprise su scala completa. Configurazione personalizzata disponibile.", color: "#0A1F44" };
  };
  const rec = getRecommendation();
  return (
    <section id="readiness" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Readiness assessment</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>Is your organization ready to deploy Rebel7?</h2>
            <p className="text-[#4A5568] text-sm leading-relaxed mb-6">Seleziona le capacità che la tua organizzazione ha già o di cui ha bisogno. Il sistema calcola il tuo readiness score e ti indica il percorso di deployment raccomandato.</p>
            <div className="border border-[#E2E8F0] bg-white p-5">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Readiness score</div>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-[#0A1F44] font-bold" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "3rem", lineHeight: 1 }}>{score}</span>
                <span className="text-[#4A5568] text-sm mb-1">/ 5</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-1.5 mb-4">
                <div className="bg-[#0A1F44] h-1.5 transition-all duration-300" style={{ width: `${(score / 5) * 100}%` }} />
              </div>
              <div className="text-xs font-bold text-[#0A1F44] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{rec.level}</div>
              <p className="text-[#4A5568] text-xs leading-relaxed">{rec.text}</p>
              {score > 0 && (
                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <Link href="/rebel7/readiness" className="text-xs font-semibold text-[#0A1F44] underline no-underline hover:opacity-70" style={{ fontFamily: "'DM Sans', sans-serif" }}>Valutazione completa →</Link>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-0 border border-[#E2E8F0]">
              {READINESS_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`flex items-start gap-4 p-5 text-left transition-all duration-150 ${
                    i < READINESS_ITEMS.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  } ${
                    checked.includes(item.id) ? "bg-[#0A1F44]" : "bg-white hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className={`flex-shrink-0 w-5 h-5 border mt-0.5 flex items-center justify-center transition-colors duration-150 ${
                    checked.includes(item.id) ? "border-white bg-white" : "border-[#CBD5E0] bg-white"
                  }`}>
                    {checked.includes(item.id) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#0A1F44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className={`font-bold text-sm mb-1 ${
                      checked.includes(item.id) ? "text-white" : "text-[#0A1F44]"
                    }`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
                    <p className={`text-xs leading-relaxed ${
                      checked.includes(item.id) ? "text-[#A8C4E0]" : "text-[#4A5568]"
                    }`}>{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663034106933/YHzzZyn2Y2892UHwZt8FXv/rebel7-hero-bg-N8ZAcStcqh5nE3wmxttUvp.webp";

const DEPLOY_DROPDOWN = [
  { label: "Pilot Program", href: "/rebel7/pilot", desc: "Avvia un deployment strutturato" },
  { label: "Pianifica una demo", href: "/rebel7/demo", desc: "Sessione operativa di 45 minuti" },
  { label: "Casi studio", href: "/rebel7/casi", desc: "Deployment in ambienti reali" },
  { label: "Readiness assessment", href: "/rebel7/readiness", desc: "Valuta la prontezza della tua org." },
  { label: "Implementation model", href: "/rebel7/implementation", desc: "Percorso in 4 fasi strutturate" },
  { label: "Dashboard preview", href: "/rebel7/dashboard", desc: "Anteprima live delle metriche" },
];

const SOLUTIONS_DROPDOWN = [
  { label: "Panoramica soluzioni", href: "/rebel7/solutions", desc: "Tutte le soluzioni per settore" },
  { label: "Scuole", href: "/rebel7/scuole", desc: "PCTO, extracurriculari, rendicontazione" },
  { label: "Comuni", href: "/rebel7/comuni", desc: "Partecipazione civica, fondi europei" },
  { label: "Aziende", href: "/rebel7/aziende", desc: "CSR, ESG, conformità CSRD" },
  { label: "ONG e Fondazioni", href: "/rebel7/organizzazioni", desc: "Impatto, donatori, bandi" },
];

const NAV_LINKS = [
  { label: "Il Problema", href: "#problem" },
  { label: "La Soluzione", href: "#solution" },
  { label: "Come Funziona", href: "#how-it-works" },
  { label: "Sicurezza", href: "#security" },
];

const PROOF_CARDS = [
  { metric: "Tasso di partecipazione", description: "Percentuale verificata di partecipanti attivi su totale iscritti, per iniziativa e per periodo." },
  { metric: "Azioni verificate", description: "Ogni azione registrata è tracciata con timestamp, ruolo e contesto. Nessun dato auto-dichiarato." },
  { metric: "Coinvolgimento strutturato", description: "Dati aggregati per categoria di partecipante, ente e territorio. Esportabili in formato audit." },
  { metric: "Esiti di impatto", description: "Risultati misurabili collegati a obiettivi dichiarati. Confrontabili tra iniziative e periodi." },
  { metric: "Conformità normativa", description: "Report strutturati compatibili con requisiti GDPR, CSRD, EBA e rendicontazione pubblica." },
  { metric: "Eleggibilità ai finanziamenti", description: "Documentazione verificabile per accesso a fondi pubblici, bandi e programmi istituzionali." },
];

const USE_CASES = [
  {
    type: "Scuole",
    problem: "Difficoltà a documentare la partecipazione degli studenti ad attività extracurriculari, progetti civici e percorsi PCTO in modo verificabile.",
    action: "Rebel7 struttura ogni iniziativa, registra le presenze e le azioni completate, genera report per ogni studente e per l'istituto.",
    outcome: "Documentazione verificabile per valutazioni, accreditamenti e rendicontazione verso enti finanziatori.",
  },
  {
    type: "Comuni",
    problem: "Impossibilità di misurare l'impatto reale di programmi di partecipazione civica, consultazioni pubbliche e iniziative territoriali.",
    action: "Rebel7 attiva le iniziative, traccia la partecipazione dei cittadini per zona e categoria demografica, verifica i risultati.",
    outcome: "Dati strutturati per rendicontazione istituzionale, accesso a fondi europei e trasparenza amministrativa.",
  },
  {
    type: "Aziende",
    problem: "Assenza di dati verificabili sulle attività di responsabilità sociale, volontariato d'impresa e programmi di coinvolgimento dei dipendenti.",
    action: "Rebel7 registra ogni attività, verifica la partecipazione effettiva e genera report compatibili con i requisiti di rendicontazione ESG.",
    outcome: "Evidenza audit-ready per bilanci di sostenibilità, rating ESG e conformità CSRD.",
  },
  {
    type: "ONG e Fondazioni",
    problem: "Difficoltà a dimostrare l'impatto reale delle attività ai finanziatori, alle istituzioni e al pubblico con dati verificabili.",
    action: "Rebel7 struttura i programmi, traccia i beneficiari e le attività, produce report verificabili per ogni stakeholder.",
    outcome: "Documentazione credibile per rendicontazione ai donatori, accesso a bandi e valutazioni di impatto.",
  },
];

const REAL_USE_CASES = [
  {
    type: "Scuola",
    problem: "Difficoltà nel tracciare la partecipazione degli studenti ai programmi extracurriculari.",
    action: "La scuola lancia un'iniziativa strutturata tramite Rebel7.",
    outcomes: ["Partecipazione registrata automaticamente", "Attività verificate", "Report generati"],
  },
  {
    type: "Comune",
    problem: "La partecipazione dei cittadini ai programmi pubblici non è misurabile.",
    action: "Il comune attiva un'iniziativa su Rebel7.",
    outcomes: ["Dati di partecipazione generati", "Azioni verificate", "Impatto documentato"],
  },
  {
    type: "Azienda",
    problem: "Le attività di coinvolgimento dei dipendenti non producono esiti misurabili.",
    action: "L'azienda lancia un programma interno di partecipazione.",
    outcomes: ["Partecipazione dipendenti tracciata", "Attività verificate", "Documentazione ESG generata"],
  },
  {
    type: "ONG",
    problem: "Difficoltà nel dimostrare l'impatto ai donatori.",
    action: "L'organizzazione attiva un programma tramite Rebel7.",
    outcomes: ["Partecipazione beneficiari registrata", "Attività verificate", "Report di impatto generati"],
  },
];

const STEPS = [
  { num: "01", title: "Crea l'iniziativa", desc: "L'organizzazione definisce obiettivi, partecipanti, azioni attese e criteri di verifica. Il sistema struttura il perimetro operativo." },
  { num: "02", title: "I partecipanti aderiscono", desc: "Ogni partecipante accede con identità verificata. Il sistema registra l'adesione con timestamp e contesto." },
  { num: "03", title: "Le azioni vengono registrate", desc: "Ogni azione completata è tracciata automaticamente: tipo, durata, contesto, ruolo del partecipante. Nessun dato auto-dichiarato." },
  { num: "04", title: "I risultati vengono verificati", desc: "Il sistema confronta le azioni registrate con gli obiettivi dichiarati. Produce un indice di conformità per ogni iniziativa." },
  { num: "05", title: "I report vengono generati", desc: "Report strutturati, esportabili e verificabili. Pronti per audit interni, rendicontazione istituzionale e accesso ai finanziamenti." },
];

const SECURITY_ITEMS = [
  { label: "GDPR", detail: "Conformità al Regolamento Europeo sulla protezione dei dati personali. Consenso esplicito, portabilità, diritto all'oblio." },
  { label: "Protezione dei dati", detail: "Crittografia end-to-end in transito e a riposo. Accesso ai dati limitato per ruolo e contesto." },
  { label: "Audit trail", detail: "Log immutabile di ogni operazione: chi ha fatto cosa, quando e con quale autorizzazione." },
  { label: "Tracciabilità", detail: "Ogni dato è collegato alla sua origine verificabile. Nessun dato orfano o non attribuito." },
  { label: "Permessi per ruolo", detail: "Controllo granulare degli accessi. Ogni utente vede e modifica solo ciò che il suo ruolo consente." },
];

const DEPLOYMENT_STEPS = [
  { phase: "Pilot", duration: "4–8 settimane", desc: "Attivazione su una singola iniziativa o unità organizzativa. Configurazione, formazione e prima raccolta dati verificabili." },
  { phase: "Attivazione", duration: "2–3 mesi", desc: "Estensione a più iniziative e partecipanti. Integrazione con i flussi operativi esistenti. Primo ciclo di report strutturati." },
  { phase: "Espansione", duration: "Continuativa", desc: "Deployment su scala organizzativa completa. Dati aggregati, benchmark e rendicontazione istituzionale sistematica." },
];

const PILOT_PHASES = [
  { num: "01", title: "Configurazione dell'iniziativa", desc: "Definizione degli obiettivi, dei partecipanti target, delle attività previste e dei criteri di verifica." },
  { num: "02", title: "Attivazione dei partecipanti", desc: "Onboarding dei partecipanti con identità verificata. Il sistema registra ogni adesione con timestamp." },
  { num: "03", title: "Tracciamento della partecipazione", desc: "Registrazione automatica di ogni azione completata. Nessun dato auto-dichiarato." },
  { num: "04", title: "Verifica dei risultati", desc: "Il sistema confronta le azioni registrate con gli obiettivi dichiarati e produce un indice di conformità." },
  { num: "05", title: "Generazione dei report", desc: "Report strutturati, esportabili e verificabili. Pronti per audit interni e rendicontazione istituzionale." },
];

const WHO_FOR_CARDS = [
  { type: "Scuole", desc: "Istituti di ogni ordine e grado per PCTO, attività extracurriculari e programmi civici.", href: "/rebel7/scuole" },
  { type: "Comuni", desc: "Enti locali per programmi di partecipazione civica, iniziative territoriali e fondi europei.", href: "/rebel7/comuni" },
  { type: "Aziende", desc: "Imprese per CSR, volontariato d'impresa, ESG reporting e conformità CSRD.", href: "/rebel7/aziende" },
  { type: "ONG", desc: "Organizzazioni non profit per tracciamento beneficiari, rendicontazione donatori e bandi.", href: "/rebel7/organizzazioni" },
  { type: "Fondazioni", desc: "Fondazioni erogatrici per valutazione dell'impatto dei programmi finanziati.", href: "/rebel7/organizzazioni" },
  { type: "Enti pubblici", desc: "Istituzioni pubbliche per rendicontazione istituzionale e trasparenza amministrativa.", href: "/rebel7/comuni" },
];

const WHY_CARDS = [
  { title: "Sistema standardizzato", desc: "Architettura modulare basata su standard aperti. Ogni componente è documentato, testato e replicabile." },
  { title: "Deployment scalabile", desc: "Da un pilot su singola iniziativa all'implementazione su scala organizzativa completa, senza discontinuità operativa." },
  { title: "Dati strutturati", desc: "Ogni dato è classificato, attribuito e conservato in formato standard. Esportabile, interoperabile, audit-ready." },
  { title: "Esiti misurabili", desc: "Ogni iniziativa produce output quantificabili. I risultati sono confrontabili nel tempo e tra organizzazioni." },
  { title: "Documentazione audit-ready", desc: "Report strutturati pronti per audit interni, rendicontazione istituzionale e valutazioni di terze parti." },
  { title: "Prontezza istituzionale", desc: "Il sistema è progettato per operare in contesti regolamentati: enti pubblici, istituti finanziari, organizzazioni certificate." },
];

const DASHBOARD_METRICS = [
  { label: "Tasso di partecipazione", value: "78%", sub: "su 1.240 partecipanti target", trend: "+12% vs periodo precedente" },
  { label: "Azioni completate", value: "3.847", sub: "azioni registrate e verificate", trend: "Aggiornato in tempo reale" },
  { label: "Partecipanti attivi", value: "968", sub: "su 1.240 iscritti", trend: "Identità verificata" },
  { label: "Risultati verificati", value: "94%", sub: "conformità agli obiettivi dichiarati", trend: "Indice di conformità" },
  { label: "Completamento programma", value: "61%", sub: "del percorso completato", trend: "Settimana 5 di 8" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [deployOpen, setDeployOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-[#0A1F44] font-bold text-xl tracking-tight">Rebel7</span>
            <span className="hidden sm:inline text-[#4A5568] text-sm font-medium border-l border-[#E2E8F0] pl-2 ml-1">Infrastructure Platform</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 no-underline font-medium">{l.label}</a>
            ))}
            {/* Deploy dropdown */}
            <div className="relative" onMouseEnter={() => setDeployOpen(true)} onMouseLeave={() => setDeployOpen(false)}>
              <button className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 font-medium flex items-center gap-1">
                Deploy
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" className={`transition-transform duration-150 ${deployOpen ? "rotate-180" : ""}`}>
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              {deployOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-[#E2E8F0] shadow-lg z-50">
                  {DEPLOY_DROPDOWN.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-5 py-3.5 hover:bg-[#F8FAFC] border-b border-[#E2E8F0] last:border-0 no-underline group">
                      <div className="text-[#0A1F44] font-semibold text-sm group-hover:text-[#0A1F44]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                      <div className="text-[#4A5568] text-xs mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Solutions dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors duration-150 font-medium flex items-center gap-1">
                Soluzioni
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" className={`transition-transform duration-150 ${solutionsOpen ? "rotate-180" : ""}`}>
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-[#E2E8F0] shadow-lg z-50">
                  {SOLUTIONS_DROPDOWN.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-5 py-3.5 hover:bg-[#F8FAFC] border-b border-[#E2E8F0] last:border-0 no-underline group">
                      <div className="text-[#0A1F44] font-semibold text-sm group-hover:text-[#0A1F44]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                      <div className="text-[#4A5568] text-xs mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/rebel7/demo" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline">Richiedi demo</Link>
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Avvia un pilot</Link>
          </div>
          <button className="md:hidden p-2 text-[#0A1F44]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileMenuOpen ? (<><line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" /></>) : (<><line x1="3" y1="6" x2="19" y2="6" /><line x1="3" y1="11" x2="19" y2="11" /><line x1="3" y1="16" x2="19" y2="16" /></>)}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] bg-white px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#4A5568] hover:text-[#0A1F44] no-underline font-medium" onClick={() => setMobileMenuOpen(false)}>{l.label}</a>
            ))}
            <div className="border-t border-[#E2E8F0] pt-3">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Soluzioni</div>
              {SOLUTIONS_DROPDOWN.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 text-sm text-[#0A1F44] no-underline font-medium" onClick={() => setMobileMenuOpen(false)}>{s.label}</Link>
              ))}
            </div>
            <div className="border-t border-[#E2E8F0] pt-3">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Deploy</div>
              {DEPLOY_DROPDOWN.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 text-sm text-[#0A1F44] no-underline font-medium" onClick={() => setMobileMenuOpen(false)}>{s.label}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#E2E8F0]">
              <Link href="/rebel7/demo" className="text-sm font-semibold text-[#0A1F44] border border-[#0A1F44] px-4 py-2 text-center no-underline">Richiedi demo</Link>
              <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 text-center no-underline">Avvia un pilot</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden" style={{ background: "#0A1F44" }}>
        <div className="absolute inset-0 bg-cover bg-right opacity-30" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Rebel7 Platform — v2.0</span>
            </div>
            <h1 className="text-white font-bold leading-[1.05] mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
              Infrastruttura per la Partecipazione e l'Impatto Misurabile
            </h1>
            <div className="text-[#A8C4E0] mb-8 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
              <p className="mb-1">Attiva le persone.</p>
              <p className="mb-1">Traccia la partecipazione.</p>
              <p className="mb-1">Verifica i risultati.</p>
              <p>Dimostra l'impatto.</p>
            </div>
            <ul className="mb-10 flex flex-col gap-3">
              {["Attiva iniziative in pochi minuti", "Misura la partecipazione automaticamente", "Genera report verificabili"].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7FA8D4] flex-shrink-0" />
                  <span className="text-[#C8DCF0] text-base font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#pilot-form" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-7 py-3.5 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Avvia un pilot</a>
              <a href="#pilot-form" className="inline-block border border-white text-white font-semibold text-sm px-7 py-3.5 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Richiedi demo</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { val: "5 tipologie", label: "di organizzazioni supportate", sub: "Scuole · Comuni · Aziende · ONG · Enti pubblici" },
              { val: "100%", label: "dati verificabili", sub: "Nessun dato auto-dichiarato. Ogni azione è tracciata." },
              { val: "< 12 min", label: "per attivare un'iniziativa", sub: "Configurazione guidata. Nessuna competenza tecnica richiesta." },
            ].map((s) => (
              <div key={s.val} className="border border-white/20 p-5 bg-white/5 backdrop-blur-sm">
                <div className="text-white font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.7rem" }}>{s.val}</div>
                <div className="text-[#A8C4E0] text-sm font-semibold mb-1">{s.label}</div>
                <div className="text-[#7FA8D4] text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 3: READINESS INDICATOR (after Hero) ────────────── */}
      <ReadinessIndicator />

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 1: PROBLEM ─────────────────────────────────── */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 01</span>
              <h2 className="text-[#0A1F44] font-bold leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Il problema che ogni organizzazione affronta</h2>
              <div className="w-8 h-0.5 bg-[#0A1F44]" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#4A5568] text-base leading-relaxed mb-8">Le organizzazioni — pubbliche e private — investono risorse significative in iniziative di partecipazione, programmi civici e attività di impatto sociale. Tuttavia, la maggior parte non dispone di strumenti per documentare questi processi in modo verificabile.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Attivazione inconsistente", desc: "Le persone vengono coinvolte in modo informale, senza struttura né tracciabilità. I tassi di partecipazione reale rimangono sconosciuti." },
                  { title: "Tracciamento inaffidabile", desc: "I dati di partecipazione sono auto-dichiarati, frammentati o assenti. Non esistono log verificabili delle azioni completate." },
                  { title: "Impatto non dimostrabile", desc: "Le organizzazioni non riescono a produrre evidenza quantificabile dell'impatto generato. Le rendicontazioni sono narrative, non strutturate." },
                  { title: "Evidenza non verificabile", desc: "In assenza di dati strutturati, l'accesso a finanziamenti pubblici, rating ESG e accreditamenti istituzionali rimane compromesso." },
                ].map((item) => (
                  <div key={item.title} className="border border-[#E2E8F0] p-5 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                    <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</div>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 2: SOLUTION ─────────────────────────────────── */}
      <section id="solution" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 02</span>
              <h2 className="text-[#0A1F44] font-bold leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Una piattaforma progettata per la partecipazione reale</h2>
              <p className="text-[#4A5568] text-base leading-relaxed mb-8">Rebel7 non è uno strumento di comunicazione né una piattaforma di engagement. È un sistema operativo per la partecipazione strutturata: registra, verifica e rendiconta ogni azione in modo automatico e verificabile.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "▸", title: "Struttura le iniziative", desc: "Ogni programma viene configurato con obiettivi, partecipanti, azioni attese e criteri di verifica. Il sistema mantiene il perimetro operativo definito." },
                  { icon: "▸", title: "Registra la partecipazione", desc: "Ogni adesione e ogni azione completata viene registrata con timestamp, identità verificata e contesto. Nessun dato auto-dichiarato." },
                  { icon: "▸", title: "Verifica i risultati", desc: "Il sistema confronta automaticamente le azioni registrate con gli obiettivi dichiarati e produce un indice di conformità verificabile." },
                  { icon: "▸", title: "Genera i report", desc: "Report strutturati, esportabili in formato standard, pronti per audit interni, rendicontazione istituzionale e accesso a finanziamenti." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-white border border-[#E2E8F0] hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                    <span className="text-[#0A1F44] font-bold text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[#0A1F44] font-bold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</div>
                      <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-[#0A1F44] text-white p-6">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#7FA8D4] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Posizionamento</div>
                <p className="text-white font-bold leading-snug" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem" }}>Rebel7 è l'infrastruttura che attiva le persone e dimostra la partecipazione.</p>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-5">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Non è</div>
                {["Motivazione", "Sensibilizzazione", "Storytelling"].map((x) => (
                  <div key={x} className="flex items-center gap-2 py-1.5 border-b border-[#E2E8F0] last:border-0">
                    <span className="text-[#CBD5E0] text-sm">✕</span>
                    <span className="text-[#4A5568] text-sm">{x}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-[#E2E8F0] p-5">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>È</div>
                {["Prova", "Verifica", "Evidenza", "Risultati"].map((x) => (
                  <div key={x} className="flex items-center gap-2 py-1.5 border-b border-[#E2E8F0] last:border-0">
                    <span className="text-[#0A1F44] text-sm font-bold">✓</span>
                    <span className="text-[#0A1F44] text-sm font-semibold">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 3: HOW IT WORKS ─────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 03</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Come funziona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col border-t-2 border-[#0A1F44] pt-6 pb-6 md:pr-6">
                <span className="text-[#0A1F44] font-bold text-3xl mb-3 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.num}</span>
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.title}</div>
                <p className="text-[#4A5568] text-xs leading-relaxed">{step.desc}</p>
                {i < STEPS.length - 1 && <div className="hidden md:block absolute top-6 right-0 w-4 h-0.5 bg-[#CBD5E0]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 4: WHAT YOU CAN PROVE ───────────────────────── */}
      <section id="proof" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 04</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Cosa la tua organizzazione può dimostrare</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROOF_CARDS.map((card) => (
              <div key={card.metric} className="bg-white border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-base mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.metric}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 4: EXPECTED RESULTS (after Cosa puoi dimostrare) ── */}
      <section id="expected-results" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Expected results</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Expected operational results</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Participation rate visibility", desc: "Tasso di partecipazione calcolato automaticamente per ogni iniziativa. Dati disaggregati per segmento, periodo e tipologia di azione." },
              { title: "Verified activity database", desc: "Database strutturato di tutte le attività verificate. Ogni record è attribuito, timestampato e non modificabile." },
              { title: "Completion metrics", desc: "Metriche di completamento per partecipante e per iniziativa. Confrontabili nel tempo e tra organizzazioni." },
              { title: "Impact documentation", desc: "Documentazione dell'impatto generata automaticamente. Strutturata per rendicontazione istituzionale, donatori e audit." },
              { title: "Compliance readiness", desc: "Dati strutturati per la conformità normativa: CSRD, ESRS, EBA, D.Lgs. 33/2013. Pronti per l'audit senza elaborazione aggiuntiva." },
              { title: "Funding eligibility", desc: "Documentazione strutturata per l'accesso a fondi pubblici e privati. Requisiti di rendicontazione soddisfatti automaticamente." },
            ].map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="w-4 h-0.5 bg-[#0A1F44] mb-4" />
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 3: OPERATIONAL OUTPUT (after Cosa puoi dimostrare) ── */}
      <section id="operational-output" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output operativi</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Operational outputs generated automatically</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Participation database", desc: "Database strutturato di ogni partecipante, con identità verificata, azioni completate e storico delle iniziative." },
              { title: "Verified activity log", desc: "Log immutabile di ogni azione registrata: tipo, timestamp, durata, contesto e ruolo del partecipante." },
              { title: "Completion metrics", desc: "Metriche di completamento per iniziativa: tasso di partecipazione, azioni verificate, indice di conformità." },
              { title: "Impact report", desc: "Report di impatto strutturato, esportabile in formato standard. Pronto per audit e rendicontazione istituzionale." },
              { title: "Compliance documentation", desc: "Documentazione di conformità normativa: GDPR, CSRD, EBA, rendicontazione pubblica. Generata automaticamente." },
              { title: "Audit trail", desc: "Traccia di audit completa e immutabile. Ogni operazione è registrata con chi, cosa, quando e con quale autorizzazione." },
            ].map((o) => (
              <div key={o.title} className="border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{o.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: METRICS DASHBOARD PREVIEW ──────────────────────── */}
      <section id="dashboard" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Dashboard — Anteprima</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Metriche di partecipazione in tempo reale</h2>
            <p className="text-[#4A5568] text-sm">Esempio di dashboard per un programma attivo. I dati sono aggiornati automaticamente dal sistema.</p>
          </div>
          {/* Dashboard frame */}
          <div className="border border-[#E2E8F0] bg-[#F8FAFC]">
            {/* Dashboard header */}
            <div className="border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <span className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Programma PCTO — Istituto Demo</span>
                <span className="border border-[#0A1F44] text-[#0A1F44] text-xs px-2 py-0.5 font-semibold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>ATTIVO</span>
              </div>
              <div className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Settimana 5 / 8 · Aggiornato: ora</div>
            </div>
            {/* Metrics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
              {DASHBOARD_METRICS.map((m, i) => (
                <div key={m.label} className={`p-6 bg-white ${i < DASHBOARD_METRICS.length - 1 ? "border-r border-[#E2E8F0]" : ""} border-b border-[#E2E8F0]`}>
                  <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.label}</div>
                  <div className="text-[#0A1F44] font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem" }}>{m.value}</div>
                  <div className="text-[#4A5568] text-xs mb-1">{m.sub}</div>
                  <div className="text-[#4A5568] text-xs border-t border-[#E2E8F0] pt-2 mt-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.trend}</div>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="px-6 py-5 bg-white border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Avanzamento programma</span>
                <span className="text-xs text-[#0A1F44] font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>61%</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-1.5">
                <div className="bg-[#0A1F44] h-1.5" style={{ width: "61%" }} />
              </div>
            </div>
          </div>
          <p className="text-xs text-[#4A5568] mt-4 text-center" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Dati di esempio. La dashboard reale è accessibile dall'area riservata dell'organizzazione.
          </p>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 5: USE CASES ────────────────────────────────── */}
      <section id="use-cases" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 05</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Applicazioni per settore</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.type} className="border border-[#E2E8F0] p-7 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#0A1F44] uppercase mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{uc.type}</div>
                <div className="flex flex-col gap-4">
                  {[{ label: "Problema", text: uc.problem }, { label: "Azione", text: uc.action }, { label: "Esito", text: uc.outcome }].map((row) => (
                    <div key={row.label} className="flex gap-4">
                      <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider w-16 flex-shrink-0 pt-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{row.label}</div>
                      <p className="text-[#0D0D0D] text-sm leading-relaxed">{row.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 4: PROOF OF OPERATION (after Applicazioni per settore) ── */}
      <section id="proof-of-operation" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Operational proof</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Operational proof in real environments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                env: "School deployment",
                participants: "420 students",
                initiative: "Community service program",
                duration: "6 weeks",
                outputs: ["Participation records generated", "Verification logs created", "Completion report produced"],
              },
              {
                env: "Municipality deployment",
                participants: "1,200 citizens",
                initiative: "Urban participation program",
                duration: "8 weeks",
                outputs: ["Participation metrics generated", "Actions verified", "Impact documented"],
              },
              {
                env: "Company deployment",
                participants: "350 employees",
                initiative: "Internal engagement program",
                duration: "5 weeks",
                outputs: ["Participation data recorded", "Activities verified", "ESG report generated"],
              },
              {
                env: "NGO deployment",
                participants: "800 beneficiaries",
                initiative: "Social support program",
                duration: "7 weeks",
                outputs: ["Participation tracked", "Activities verified", "Impact report generated"],
              },
            ].map((card) => (
              <div key={card.env} className="border border-[#E2E8F0] p-7">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#0A1F44] uppercase mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{card.env}</div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Participants", value: card.participants },
                    { label: "Duration", value: card.duration },
                    { label: "Initiative", value: card.initiative },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.label}</div>
                      <div className="text-[#0A1F44] font-bold text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#E2E8F0] pt-4">
                  <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output</div>
                  <div className="flex flex-col gap-1.5">
                    {card.outputs.map((o) => (
                      <div key={o} className="flex items-center gap-2">
                        <span className="text-[#0A1F44] font-bold text-xs">✓</span>
                        <span className="text-[#0D0D0D] text-sm">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: DEPLOYMENT SCENARIOS ──────────────────────────── */}
      <section id="deployment-scenarios" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Deployment scenarios</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Deployment scenarios in real environments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { env: "Scuola", participants: "320 studenti", initiative: "Community service program", duration: "6 settimane", outputs: ["Verified participation records", "Completion report", "Impact summary"] },
              { env: "Comune", participants: "1.240 cittadini", initiative: "Programma di partecipazione civica PNRR", duration: "8 settimane", outputs: ["Dati partecipazione per zona", "Report rendicontazione istituzionale", "Dashboard pubblica"] },
              { env: "Azienda", participants: "480 dipendenti", initiative: "Programma CSR e volontariato d'impresa", duration: "8 settimane", outputs: ["Ore volontariato verificate", "Report GRI/ESRS", "Documentazione rating ESG"] },
              { env: "ONG", participants: "680 beneficiari", initiative: "Programma di inclusione sociale", duration: "6 settimane", outputs: ["Registri partecipazione verificati", "Report per donatori", "Documentazione bandi"] },
            ].map((s) => (
              <div key={s.env} className="border border-[#E2E8F0] p-6 flex flex-col hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#0A1F44] uppercase mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s.env}</div>
                {[
                  { label: "Partecipanti", val: s.participants },
                  { label: "Iniziativa", val: s.initiative },
                  { label: "Durata", val: s.duration },
                ].map((f) => (
                  <div key={f.label} className="mb-3">
                    <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{f.label}</div>
                    <div className="text-[#0D0D0D] text-sm font-medium">{f.val}</div>
                  </div>
                ))}
                <div className="mt-auto pt-4 border-t border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output</div>
                  {s.outputs.map((o) => (
                    <div key={o} className="flex items-start gap-2 mb-1">
                      <span className="text-[#0A1F44] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-[#0D0D0D] text-xs leading-relaxed">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/rebel7/casi" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-6 py-3 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Vedi i casi studio completi</Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: REAL USE CASES ─────────────────────────────────── */}
      <section id="real-use-cases" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Scenari reali</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Use cases in ambienti reali</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REAL_USE_CASES.map((uc) => (
              <div key={uc.type} className="border border-[#E2E8F0] p-6 flex flex-col">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#0A1F44] uppercase mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{uc.type}</div>
                <div className="mb-3">
                  <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Problema</div>
                  <p className="text-[#0D0D0D] text-xs leading-relaxed">{uc.problem}</p>
                </div>
                <div className="mb-3">
                  <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Azione</div>
                  <p className="text-[#0D0D0D] text-xs leading-relaxed">{uc.action}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Esiti</div>
                  {uc.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 mb-1">
                      <span className="text-[#0A1F44] text-xs font-bold">✓</span>
                      <span className="text-[#0D0D0D] text-xs">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 6: WHY REBEL7 (original) ───────────────────── */}
      <section id="why" className="py-24 bg-[#0A1F44]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 06</span>
              <h2 className="text-white font-bold leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Infrastruttura, non un progetto</h2>
              <p className="text-[#A8C4E0] text-base leading-relaxed">Rebel7 è progettato per operare a scala istituzionale. Non è un tool sperimentale né un'applicazione verticale. È un sistema standardizzato, configurabile e scalabile che si adatta alle strutture organizzative esistenti senza richiedere trasformazioni operative.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Sistema standardizzato", desc: "Architettura modulare basata su standard aperti. Ogni componente è documentato, testato e replicabile." },
                { title: "Deployment scalabile", desc: "Da un pilot su singola iniziativa all'implementazione su scala organizzativa completa, senza discontinuità operativa." },
                { title: "Dati strutturati", desc: "Ogni dato è classificato, attribuito e conservato in formato standard. Esportabile, interoperabile, audit-ready." },
                { title: "Esiti misurabili", desc: "Ogni iniziativa produce output quantificabili. I risultati sono confrontabili nel tempo e tra organizzazioni." },
                { title: "Prontezza istituzionale", desc: "Il sistema è progettato per operare in contesti regolamentati: enti pubblici, istituti finanziari, organizzazioni certificate." },
                { title: "Governance integrata", desc: "Ruoli, permessi e flussi di approvazione sono configurabili. La governance del dato è parte del sistema, non un'aggiunta." },
              ].map((item) => (
                <div key={item.title} className="border border-white/20 p-5 hover:border-white/40 transition-all duration-150">
                  <div className="text-white font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</div>
                  <p className="text-[#A8C4E0] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1B3A6B]" />

      {/* ── PHASE 4: DEPLOYMENT CAPACITY (after Infrastruttura, non un progetto) ── */}
      <section id="deployment-capacity" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Deployment capacity</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Deployment capacity</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-[#E2E8F0]">
            {[
              { label: "Supported participants", value: "Unlimited" },
              { label: "Deployment duration", value: "4–8 weeks" },
              { label: "Verification capability", value: "Automatic" },
              { label: "Reporting capability", value: "Instant" },
              { label: "Scalability", value: "Multi-organization" },
            ].map((m, i) => (
              <div key={m.label} className={`p-6 ${i < 4 ? "border-r border-[#E2E8F0]" : ""} border-b border-[#E2E8F0] md:border-b-0`}>
                <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.label}</div>
                <div className="text-[#0A1F44] font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: WHO IS THIS FOR ─────────────────────────────────── */}
      <section id="who-for" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Progettato per</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Progettato per le organizzazioni</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHO_FOR_CARDS.map((card) => (
              <Link key={card.type} href={card.href} className="block border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150 no-underline group">
                <div className="text-[#0A1F44] font-bold text-base mb-2 group-hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.type}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{card.desc}</p>
                <div className="mt-4 text-xs font-semibold text-[#0A1F44]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Scopri la soluzione →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: WHY REBEL7 (extended) ───────────────────────────── */}
      <section id="why-rebel7" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Perché Rebel7</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Perché le organizzazioni scelgono Rebel7</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CARDS.map((card) => (
              <div key={card.title} className="bg-white border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 4: INSTITUTIONAL READINESS (before Security) ─── */}
      <section id="institutional-readiness" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Institutional readiness</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Institutional readiness</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Deployment-ready architecture", desc: "Architettura progettata per il deployment istituzionale. Nessuna personalizzazione strutturale richiesta. Configurabile in meno di 12 ore." },
              { title: "Standardized workflows", desc: "Flussi operativi standardizzati e documentati. Ogni processo è replicabile, verificabile e trasferibile tra organizzazioni." },
              { title: "Structured reporting", desc: "Report strutturati generati automaticamente. Compatibili con i requisiti di rendicontazione istituzionale, normativa e finanziaria." },
              { title: "Data verification", desc: "Ogni dato è verificato alla fonte. Il sistema non accetta auto-dichiarazioni: ogni azione è tracciata e attribuita." },
              { title: "Operational scalability", desc: "Il sistema scala da un pilot su singola iniziativa all'implementazione multi-organizzazione senza discontinuità operativa." },
              { title: "Audit readiness", desc: "Audit trail immutabile attivo dal primo giorno. Dati esportabili in formato standard per audit interni ed esterni." },
            ].map((card) => (
              <div key={card.title} className="border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="w-4 h-0.5 bg-[#0A1F44] mb-4" />
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 3: INTEGRATION LAYER (before Security) ────────── */}
      <section id="integration-layer" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Integration layer</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Integrates with your existing systems</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "School management systems", desc: "Integrazione con i sistemi di gestione scolastica esistenti: registro elettronico, piattaforme PCTO, sistemi di valutazione." },
              { title: "Municipal databases", desc: "Connessione con i database comunali e i sistemi di gestione dei servizi pubblici e della partecipazione civica." },
              { title: "HR platforms", desc: "Integrazione con le piattaforme HR aziendali per il tracciamento del volontariato d'impresa e dei programmi CSR." },
              { title: "CRM systems", desc: "Collegamento con i CRM per la gestione dei contatti, la segmentazione dei partecipanti e il follow-up operativo." },
              { title: "ESG reporting tools", desc: "Esportazione diretta verso i principali strumenti di ESG reporting: GRI, ESRS, EBA. Dati strutturati e audit-ready." },
              { title: "Government portals", desc: "Compatibilità con i portali istituzionali per la rendicontazione pubblica, l'accesso ai fondi e la trasparenza amministrativa." },
            ].map((s) => (
              <div key={s.title} className="bg-white border border-[#E2E8F0] p-6 hover:border-l-2 hover:border-l-[#0A1F44] transition-all duration-150">
                <div className="text-[#0A1F44] font-bold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.title}</div>
                <p className="text-[#4A5568] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 7: SECURITY ─────────────────────────────────── */}
      <section id="security" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 07</span>
              <h2 className="text-[#0A1F44] font-bold leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Sicurezza e conformità</h2>
              <p className="text-[#4A5568] text-sm leading-relaxed">Rebel7 è progettato per operare in contesti enterprise e istituzionali. La sicurezza del dato e la conformità normativa non sono funzionalità aggiuntive: sono parte integrante dell'architettura.</p>
            </div>
            <div className="lg:col-span-8">
              <div className="border border-[#E2E8F0]">
                {SECURITY_ITEMS.map((item, i) => (
                  <div key={item.label} className={`grid grid-cols-12 gap-4 p-5 ${i < SECURITY_ITEMS.length - 1 ? "border-b border-[#E2E8F0]" : ""} hover:bg-[#F8FAFC] transition-colors duration-150`}>
                    <div className="col-span-12 sm:col-span-3">
                      <span className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</span>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                      <p className="text-[#4A5568] text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0]">
                <p className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  Conformità verificabile: GDPR · CSRD · EBA · Rendicontazione pubblica · Audit trail immutabile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── SECTION 8: DEPLOYMENT ───────────────────────────────── */}
      <section id="deployment" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sezione 08</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Come iniziare</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOYMENT_STEPS.map((step, i) => (
              <div key={step.phase} className="bg-white border border-[#E2E8F0] p-7 relative">
                <div className="text-[#CBD5E0] font-bold text-5xl absolute top-5 right-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="text-[#0A1F44] font-bold text-lg mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.phase}</div>
                <div className="text-xs text-[#4A5568] mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{step.duration}</div>
                <div className="w-6 h-0.5 bg-[#0A1F44] mb-4" />
                <p className="text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 3: DEPLOYMENT TIMELINE (after pilot-structure) ──── */}
      <section id="deployment-timeline" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Deployment timeline</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Deployment timeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { week: "Week 1", phase: "Configuration", desc: "Setup della piattaforma, definizione degli obiettivi, configurazione dei ruoli e dei criteri di verifica." },
              { week: "Week 2", phase: "Participant onboarding", desc: "Attivazione dei partecipanti con identità verificata. Formazione operativa per i referenti interni." },
              { week: "Week 3", phase: "Activity tracking", desc: "Avvio del tracciamento automatico delle azioni. Dashboard operativa attiva per il monitoraggio in tempo reale." },
              { week: "Week 4", phase: "Verification and reporting", desc: "Verifica dei risultati, confronto con gli obiettivi dichiarati e generazione del primo report strutturato." },
            ].map((w, i) => (
              <div key={w.week} className="border border-[#E2E8F0] bg-white p-6 relative">
                <div className="text-[#CBD5E0] font-bold text-4xl absolute top-4 right-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="text-xs font-semibold text-[#0A1F44] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{w.week}</div>
                <div className="text-[#0A1F44] font-bold text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{w.phase}</div>
                <div className="w-6 h-0.5 bg-[#0A1F44] mb-3" />
                <p className="text-[#4A5568] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="border border-[#0A1F44] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Risultato</div>
              <div className="text-[#0A1F44] font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Operational system in production</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#E2E8F0]" />
            <p className="text-[#4A5568] text-sm leading-relaxed">Al termine della quarta settimana, il sistema è operativo in produzione con dati verificabili, dashboard attiva e primo report strutturato disponibile per audit e rendicontazione.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── NEW: PILOT PROGRAM STRUCTURE ────────────────────────── */}
      <section id="pilot-structure" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Struttura del pilot</span>
              <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Struttura del programma pilot</h2>
              <div className="border border-[#0A1F44] p-5 mt-6">
                <div className="text-xs font-semibold tracking-[0.12em] text-[#4A5568] uppercase mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Durata pilot</div>
                <div className="text-[#0A1F44] font-bold text-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>4–8 settimane</div>
                <div className="text-[#4A5568] text-xs mt-2">Configurabile in base alla complessità dell'iniziativa e al numero di partecipanti.</div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-0">
                {PILOT_PHASES.map((phase, i) => (
                  <div key={phase.num} className={`flex gap-6 p-5 ${i < PILOT_PHASES.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}>
                    <div className="flex-shrink-0">
                      <span className="text-[#0A1F44] font-bold text-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>{phase.num}</span>
                    </div>
                    <div>
                      <div className="text-[#0A1F44] font-bold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{phase.title}</div>
                      <p className="text-[#4A5568] text-sm leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 3: WHAT HAPPENS AFTER THE PILOT ─────────────── */}
      <section id="after-pilot" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Post-pilot</span>
              <h2 className="text-[#0A1F44] font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>What happens after the pilot</h2>
              <div className="w-8 h-0.5 bg-[#0A1F44] mb-6" />
              <div className="border border-[#E2E8F0] p-5">
                <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Output finali</div>
                {["Operational system", "Structured data", "Impact verification", "Institutional readiness"].map((o) => (
                  <div key={o} className="flex items-center gap-2 mb-2">
                    <span className="text-[#0A1F44] font-bold text-xs">&#10003;</span>
                    <span className="text-[#0D0D0D] text-sm">{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-0">
                {[
                  { num: "01", title: "Pilot validation", desc: "Analisi dei dati raccolti durante il pilot. Verifica del tasso di partecipazione, delle azioni completate e della conformità agli obiettivi dichiarati. Generazione del report di validazione." },
                  { num: "02", title: "Operational deployment", desc: "Estensione del sistema all'intera organizzazione o a più unità operative. Configurazione dei flussi di dati, integrazione con i sistemi esistenti e formazione dei referenti." },
                  { num: "03", title: "Multi-initiative activation", desc: "Attivazione di più iniziative in parallelo. Il sistema gestisce automaticamente la segmentazione dei partecipanti, il tracciamento per iniziativa e la generazione dei report aggregati." },
                  { num: "04", title: "Institutional reporting", desc: "Generazione sistematica di report strutturati per audit interni, rendicontazione istituzionale, accesso a finanziamenti e valutazioni di terze parti." },
                  { num: "05", title: "Continuous monitoring", desc: "Monitoraggio continuo della partecipazione, degli esiti e della conformità normativa. Dashboard aggiornata in tempo reale. Alert automatici per anomalie o scostamenti dagli obiettivi." },
                ].map((step, i, arr) => (
                  <div key={step.num} className={`flex gap-6 p-5 ${i < arr.length - 1 ? "border-b border-[#E2E8F0]" : ""}`}>
                    <div className="flex-shrink-0">
                      <span className="text-[#0A1F44] font-bold text-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.num}</span>
                    </div>
                    <div>
                      <div className="text-[#0A1F44] font-bold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.title}</div>
                      <p className="text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── FOOTER CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1F44]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Prossimo passo</span>
          <h2 className="text-white font-bold leading-tight mb-6 mx-auto max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Porta Rebel7 nella tua organizzazione</h2>
          <p className="text-[#A8C4E0] text-base leading-relaxed mb-10 max-w-xl mx-auto">Inizia con un pilot su una singola iniziativa. Nessuna integrazione complessa, nessun impegno a lungo termine. Dati verificabili dal primo giorno.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rebel7/pilot" className="inline-block bg-white text-[#0A1F44] font-bold text-sm px-8 py-4 hover:bg-[#E8F0FA] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Avvia un pilot</Link>
            <Link href="/rebel7/demo" className="inline-block border border-white text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-[#0A1F44] transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Richiedi una demo</Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1B3A6B]" />

      {/* ── NEW: REQUEST PILOT FORM ──────────────────────────────── */}
      <section id="pilot-form" className="py-24 bg-[#071530]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Richiesta pilot</span>
            <h2 className="text-white font-bold leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>Richiedi l'attivazione del pilot</h2>
            <p className="text-[#A8C4E0] text-sm">Compila il modulo. Sarai ricontattato entro 48 ore lavorative per definire la configurazione del pilot.</p>
          </div>
          <PilotForm />
        </div>
      </section>

      {/* ── PHASE 4: DECISION SUPPORT (near bottom) ─────────────── */}
      <section id="decision-support" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Decision support</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Decision support for organizations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#0A1F44]">
                  <th className="text-left py-4 pr-8 text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Capability</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold text-[#4A5568] uppercase tracking-wider bg-[#FFF5F5]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Without Rebel7</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold text-[#0A1F44] uppercase tracking-wider bg-[#F0F7FF]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>With Rebel7</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { capability: "Participation tracking", without: "Manual, incomplete, not verifiable", with: "Automatic, continuous, verified" },
                  { capability: "Result verification", without: "Self-declared, no audit trail", with: "System-verified, immutable log" },
                  { capability: "Impact reporting", without: "Narrative, non-structured", with: "Structured, exportable, audit-ready" },
                  { capability: "Data structure", without: "Fragmented, non-standard", with: "Standardized, interoperable" },
                  { capability: "Audit readiness", without: "Requires manual preparation", with: "Ready from day one" },
                  { capability: "Deployment speed", without: "Months of setup", with: "Operational in 4–8 weeks" },
                ].map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="py-4 pr-8 text-sm font-semibold text-[#0A1F44] border-b border-[#E2E8F0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.capability}</td>
                    <td className="py-4 px-6 text-sm text-[#4A5568] border-b border-[#E2E8F0] bg-[#FFF5F5]">{row.without}</td>
                    <td className="py-4 px-6 text-sm text-[#0A1F44] font-medium border-b border-[#E2E8F0] bg-[#F0F7FF]">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/rebel7/start" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#071530] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Start deployment</a>
            <a href="/rebel7/why" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-7 py-3.5 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Why organizations deploy</a>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── PHASE 4: WHO TRUSTS STRUCTURED SYSTEMS (before footer) ── */}
      <section id="who-trusts" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-[0.14em] text-[#4A5568] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Who requires structured participation</span>
            <h2 className="text-[#0A1F44] font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>Organizations that require structured participation</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Schools", "Municipalities", "Companies", "NGOs", "Universities", "Foundations", "Public institutions", "Government agencies"].map((org) => (
              <div key={org} className="border border-[#E2E8F0] px-5 py-3 text-sm font-semibold text-[#0A1F44]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {org}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-[#E2E8F0] flex flex-wrap gap-4">
            <a href="/rebel7/start" className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#071530] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Start deployment</a>
            <a href="/rebel7/capabilities" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-7 py-3.5 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>System capabilities</a>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E2E8F0]" />

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#040D1A] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
            <span className="text-white/30 text-sm">Infrastructure Platform</span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Termini di servizio", "Contatti"].map((l) => (
              <a key={l} href="#" className="text-white/50 text-xs hover:text-white/80 transition-colors duration-150 no-underline">{l}</a>
            ))}
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
