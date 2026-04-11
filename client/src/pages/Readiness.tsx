/**
 * Rebel7 — Pagina: Deployment Readiness Assessment
 * URL: /rebel7/readiness
 * Design: Swiss Typographic Style — coerente con landing principale
 */

import { useState } from "react";
import { Link } from "wouter";

const QUESTIONS = [
  {
    id: "structured",
    question: "Do you run structured initiatives?",
    desc: "La tua organizzazione lancia programmi con obiettivi definiti, partecipanti identificati e criteri di verifica.",
    yesLabel: "Sì, abbiamo iniziative strutturate",
    noLabel: "No, le nostre iniziative sono informali",
  },
  {
    id: "tracking",
    question: "Do you track participation?",
    desc: "Disponi di un sistema per registrare chi partecipa, quando e con quale ruolo.",
    yesLabel: "Sì, tracciamo la partecipazione",
    noLabel: "No, non abbiamo un sistema di tracciamento",
  },
  {
    id: "reports",
    question: "Do you produce reports?",
    desc: "Generi report strutturati sulla partecipazione e sull'impatto delle tue iniziative.",
    yesLabel: "Sì, produciamo report regolari",
    noLabel: "No, non abbiamo un processo di reporting",
  },
  {
    id: "impact",
    question: "Do you need impact verification?",
    desc: "Hai necessità di dimostrare l'impatto delle tue iniziative a finanziatori, enti o stakeholder istituzionali.",
    yesLabel: "Sì, dobbiamo dimostrare l'impatto",
    noLabel: "No, non è richiesto al momento",
  },
  {
    id: "audit",
    question: "Do you require audit documentation?",
    desc: "Le tue attività sono soggette ad audit interni, rendicontazione istituzionale o valutazioni di terze parti.",
    yesLabel: "Sì, siamo soggetti ad audit",
    noLabel: "No, non abbiamo requisiti di audit",
  },
];

type Answer = "yes" | "no" | null;

function getReadinessResult(answers: Record<string, Answer>) {
  const yesCount = Object.values(answers).filter((a) => a === "yes").length;
  const answered = Object.values(answers).filter((a) => a !== null).length;

  if (answered < QUESTIONS.length) {
    return null;
  }

  if (yesCount >= 4) {
    return {
      level: "Enterprise deployment",
      score: yesCount,
      path: "La tua organizzazione è pronta per un deployment enterprise completo. Il sistema può essere attivato su scala organizzativa con configurazione personalizzata.",
      timeline: "6–10 settimane",
      recommendation: "Avvia un pilot enterprise con configurazione personalizzata. Il team di Rebel7 definirà con te l'architettura di deployment ottimale.",
      cta: "/rebel7/pilot",
      ctaLabel: "Avvia deployment enterprise",
    };
  }
  if (yesCount >= 2) {
    return {
      level: "Standard deployment",
      score: yesCount,
      path: "La tua organizzazione è pronta per un deployment standard. Il sistema può essere attivato su più iniziative con configurazione guidata.",
      timeline: "4–8 settimane",
      recommendation: "Inizia con un pilot su una singola iniziativa. Espandi progressivamente alle altre aree operative.",
      cta: "/rebel7/pilot",
      ctaLabel: "Avvia deployment standard",
    };
  }
  return {
    level: "Pilot recommended",
    score: yesCount,
    path: "La tua organizzazione è nelle fasi iniziali. Un pilot su una singola iniziativa è il percorso raccomandato per iniziare a raccogliere dati verificabili.",
    timeline: "4 settimane",
    recommendation: "Avvia un pilot su una singola iniziativa per costruire le prime evidenze verificabili e valutare il sistema in un contesto reale.",
    cta: "/rebel7/pilot",
    ctaLabel: "Avvia il pilot",
  };
}

export default function Readiness() {
  const [answers, setAnswers] = useState<Record<string, Answer>>(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null]))
  );
  const [currentQ, setCurrentQ] = useState(0);

  const answer = (id: string, val: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ((c) => c + 1), 300);
    }
  };

  const result = getReadinessResult(answers);
  const answered = Object.values(answers).filter((a) => a !== null).length;
  const progress = (answered / QUESTIONS.length) * 100;

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
            <Link href="/rebel7/pilot" className="text-sm font-semibold text-white bg-[#0A1F44] px-4 py-2 hover:bg-[#071530] transition-all duration-150 no-underline">Avvia pilot</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A1F44] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-[#7FA8D4] uppercase block mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Readiness assessment
          </span>
          <h1 className="text-white font-bold leading-[1.05] mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Deployment readiness assessment
          </h1>
          <p className="text-[#A8C4E0] text-lg leading-relaxed max-w-2xl">
            Cinque domande per valutare la prontezza della tua organizzazione al deployment di Rebel7 e identificare il percorso raccomandato.
          </p>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">

          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Progresso
              </span>
              <span className="text-xs font-semibold text-[#0A1F44]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {answered} / {QUESTIONS.length}
              </span>
            </div>
            <div className="w-full bg-[#E2E8F0] h-1">
              <div className="bg-[#0A1F44] h-1 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Questions */}
          <div className="flex flex-col gap-6">
            {QUESTIONS.map((q, i) => (
              <div
                key={q.id}
                className={`border p-6 transition-all duration-200 ${
                  i === currentQ
                    ? "border-[#0A1F44]"
                    : answers[q.id] !== null
                    ? "border-[#E2E8F0] bg-[#F8FAFC] opacity-70"
                    : "border-[#E2E8F0] opacity-40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 border border-[#E2E8F0] flex items-center justify-center mt-0.5">
                    {answers[q.id] !== null ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <polyline points="1.5,6 5,9.5 10.5,2.5" stroke="#0A1F44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span className="text-[#CBD5E0] text-xs font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#0A1F44] font-bold text-base mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {q.question}
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{q.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => answer(q.id, "yes")}
                        className={`flex-1 py-2.5 px-4 text-sm font-semibold border transition-all duration-150 text-left sm:text-center ${
                          answers[q.id] === "yes"
                            ? "bg-[#0A1F44] text-white border-[#0A1F44]"
                            : "bg-white text-[#0A1F44] border-[#0A1F44] hover:bg-[#0A1F44] hover:text-white"
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {q.yesLabel}
                      </button>
                      <button
                        onClick={() => answer(q.id, "no")}
                        className={`flex-1 py-2.5 px-4 text-sm font-semibold border transition-all duration-150 text-left sm:text-center ${
                          answers[q.id] === "no"
                            ? "bg-[#4A5568] text-white border-[#4A5568]"
                            : "bg-white text-[#4A5568] border-[#E2E8F0] hover:bg-[#F8FAFC]"
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {q.noLabel}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          {result && (
            <div className="mt-12 border border-[#0A1F44] p-8">
              <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Risultato della valutazione
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                <div className="sm:col-span-4">
                  <div className="text-[#0A1F44] font-bold text-3xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {result.score} / 5
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-1.5 mb-3">
                    <div className="bg-[#0A1F44] h-1.5" style={{ width: `${(result.score / 5) * 100}%` }} />
                  </div>
                  <div className="text-[#0A1F44] font-bold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {result.level}
                  </div>
                  <div className="text-xs text-[#4A5568]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    Timeline: {result.timeline}
                  </div>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{result.path}</p>
                  <div className="border-l-2 border-[#0A1F44] pl-4 mb-6">
                    <div className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      Raccomandazione
                    </div>
                    <p className="text-[#0D0D0D] text-sm leading-relaxed">{result.recommendation}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={result.cta} className="inline-block bg-[#0A1F44] text-white font-bold text-sm px-6 py-3 hover:bg-[#071530] transition-colors duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {result.ctaLabel}
                    </Link>
                    <Link href="/rebel7/demo" className="inline-block border border-[#0A1F44] text-[#0A1F44] font-semibold text-sm px-6 py-3 hover:bg-[#0A1F44] hover:text-white transition-all duration-150 no-underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Pianifica una demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071530] border-t border-white/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rebel7</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/50 text-xs hover:text-white/80 no-underline">Home</Link>
            <Link href="/rebel7/pilot" className="text-white/50 text-xs hover:text-white/80 no-underline">Pilot Program</Link>
            <Link href="/rebel7/implementation" className="text-white/50 text-xs hover:text-white/80 no-underline">Implementation Model</Link>
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>© 2025 Rebel7. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
