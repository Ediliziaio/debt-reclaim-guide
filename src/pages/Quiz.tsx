import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, RefreshCw, User, Euro, Users2, AlertTriangle, Briefcase, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Answer = string;

type Question = {
  id: string;
  text: string;
  helper?: string;
  icon: LucideIcon;
  options: { value: Answer; label: string; weight: number }[];
};

const questions: Question[] = [
  {
    id: "profile",
    text: "Innanzitutto: tu cosa sei?",
    helper: "Scegli la tua situazione attuale.",
    icon: User,
    options: [
      { value: "privato", label: "Privato cittadino / dipendente", weight: 1 },
      { value: "imprenditore", label: "Imprenditore o titolare di azienda", weight: 1 },
      { value: "ex-imprenditore", label: "Ex-imprenditore / partita IVA chiusa", weight: 1 },
      { value: "professionista", label: "Libero professionista", weight: 1 },
    ],
  },
  {
    id: "debt",
    text: "Quanto debito hai approssimativamente?",
    helper: "Considera la somma di tutti i debiti: cartelle, banche, fornitori.",
    icon: Euro,
    options: [
      { value: "lt-10", label: "Meno di 10.000 €", weight: 0 },
      { value: "10-30", label: "10.000 - 30.000 €", weight: 1 },
      { value: "30-100", label: "30.000 - 100.000 €", weight: 2 },
      { value: "100-300", label: "100.000 - 300.000 €", weight: 3 },
      { value: "gt-300", label: "Oltre 300.000 €", weight: 3 },
    ],
  },
  {
    id: "creditors",
    text: "Chi sono i tuoi creditori principali?",
    helper: "Anche più di uno.",
    icon: Users2,
    options: [
      { value: "ader", label: "Agenzia Entrate Riscossione / Fisco", weight: 2 },
      { value: "banche", label: "Banche e finanziarie", weight: 2 },
      { value: "fornitori", label: "Fornitori commerciali", weight: 2 },
      { value: "misto", label: "Più tipologie insieme", weight: 3 },
    ],
  },
  {
    id: "status",
    text: "C'è già qualcosa in corso?",
    helper: "Hai già ricevuto azioni esecutive?",
    icon: AlertTriangle,
    options: [
      { value: "none", label: "No, niente di ufficiale per ora", weight: 1 },
      { value: "cartelle", label: "Ho ricevuto cartelle e solleciti", weight: 2 },
      { value: "precetto", label: "Ho ricevuto un atto di precetto", weight: 3 },
      { value: "pignoramento", label: "Sono già pignorato", weight: 3 },
    ],
  },
  {
    id: "income",
    text: "Hai un reddito stabile?",
    helper: "Stipendio, pensione o entrata regolare.",
    icon: Briefcase,
    options: [
      { value: "yes-stable", label: "Sì, stipendio o pensione regolare", weight: 2 },
      { value: "yes-partial", label: "Sì, ma irregolare o basso", weight: 1 },
      { value: "no", label: "No, nessun reddito stabile", weight: 1 },
    ],
  },
  {
    id: "assets",
    text: "Hai patrimonio significativo?",
    helper: "Casa di proprietà, terreni, beni di valore.",
    icon: Home,
    options: [
      { value: "yes-house", label: "Sì, ho una casa di proprietà", weight: 1 },
      { value: "yes-other", label: "Sì, altri beni (terreni, auto di valore...)", weight: 1 },
      { value: "no", label: "No, nessun patrimonio rilevante", weight: 2 },
    ],
  },
];

const Quiz = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [step, setStep] = useState(0); // 0..questions.length-1 -> domande, questions.length -> form lead, questions.length+1 -> risultato
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [leadInfo, setLeadInfo] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const openContact = () => setIsContactOpen(true);

  const totalQuestions = questions.length;
  const isOnQuestion = step < totalQuestions;
  const isOnLead = step === totalQuestions;
  const isOnResult = step === totalQuestions + 1;

  const select = (qId: string, value: Answer) => {
    setAnswers((a) => ({ ...a, [qId]: value }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const restart = () => {
    setStep(0);
    setAnswers({});
    setLeadInfo({ name: "", email: "", phone: "" });
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setStep(totalQuestions + 1);
    toast({ title: "Risultato pronto", description: "Ti contattiamo entro 24h per la diagnosi gratuita." });
  };

  const computeResult = () => {
    let score = 0;
    let total = 0;
    questions.forEach((q) => {
      const a = answers[q.id];
      const opt = q.options.find((o) => o.value === a);
      if (opt) {
        score += opt.weight;
        total += Math.max(...q.options.map((o) => o.weight));
      }
    });
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    let outcome: { level: "high" | "medium" | "low"; title: string; desc: string; suggestion: string };
    if (pct >= 65) {
      outcome = {
        level: "high",
        title: "Profilo compatibile con le procedure",
        desc: "Dalle risposte fornite il tuo profilo presenta caratteristiche compatibili con gli strumenti previsti dalla normativa in materia di sovraindebitamento e crisi. Resta da approfondire il quadro documentale.",
        suggestion: "Una diagnosi gratuita con i nostri professionisti permette di verificare i presupposti specifici e individuare l'eventuale procedura applicabile.",
      };
    } else if (pct >= 40) {
      outcome = {
        level: "medium",
        title: "Profilo da approfondire",
        desc: "Alcuni elementi rendono ipotizzabile l'accesso a strumenti previsti dalla normativa. L'eventuale applicabilità va verificata su base documentale, esaminando i singoli rapporti debitori.",
        suggestion: "La diagnosi gratuita ha proprio la funzione di esaminare la pratica nello specifico e indicarti se e quale procedura è proponibile.",
      };
    } else {
      outcome = {
        level: "low",
        title: "Quadro che richiede analisi specifica",
        desc: "Il quadro che emerge non è immediatamente riconducibile a uno schema standard. Questo non significa che non esistano strumenti utili: significa che serve una valutazione caso per caso.",
        suggestion: "Ti suggeriamo di richiedere la diagnosi gratuita per analizzare i dettagli concreti della tua situazione.",
      };
    }
    return { score, total, pct, outcome };
  };

  const result = computeResult();

  return (
    <>
      <Helmet>
        <title>Test online di orientamento: posso esdebitarmi? | Tutela Debito</title>
        <meta name="description" content="Test online gratuito di orientamento: poche domande per capire se la tua situazione può rientrare nei presupposti delle procedure di sovraindebitamento previste dalla legge italiana." />
        <meta name="keywords" content="test esdebitazione, quiz sovraindebitamento, posso uscire dai debiti, orientamento legale" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tuteladebito.it/quiz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test online: posso esdebitarmi? | Tutela Debito" />
        <meta property="og:description" content="Test online di orientamento in 2 minuti." />
        <meta property="og:url" content="https://tuteladebito.it/quiz" />
        <meta property="og:image" content="https://tuteladebito.it/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tuteladebito.it/" },
            { "@type": "ListItem", "position": 2, "name": "Test online", "item": "https://tuteladebito.it/quiz" },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          {!isOnResult && (
            <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-20">
              <TDHeroBackdrop />
              <div className="container mx-auto px-4 relative">
                <div className="max-w-2xl mx-auto">
                  <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Test online di orientamento</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                    Posso accedere a una <span className="text-gold">procedura di esdebitazione</span>?
                  </h1>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {isOnQuestion ? "Alcune domande per capire se la tua situazione presenta elementi compatibili con gli strumenti previsti dalla legge. Risultato puramente orientativo." : "Ultimo passaggio: dove ti inviamo il risultato?"}
                  </p>
                </div>
              </div>
            </section>
          )}

          <div className="bg-muted/40 py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">

              {/* Progress */}
              {!isOnResult && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-2">
                    <span className="font-semibold">
                      {isOnQuestion ? `Domanda ${step + 1} di ${totalQuestions}` : "Quasi fatto"}
                    </span>
                    <span>{Math.round(((isOnLead ? totalQuestions : step) / totalQuestions) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-dark transition-all duration-500"
                      style={{ width: `${((isOnLead ? totalQuestions : step) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Question */}
              {isOnQuestion && (() => {
                const q = questions[step];
                const QIcon = q.icon;
                return (
                  <div className="bg-white rounded-2xl shadow-card border border-border p-6 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                        <QIcon className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-2 leading-tight">{q.text}</h2>
                        {q.helper && <p className="text-foreground/60">{q.helper}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => select(q.id, opt.value)}
                          className={`w-full text-left p-4 lg:p-5 rounded-xl border-2 transition-all hover:border-gold hover:bg-gold/5 ${
                            answers[q.id] === opt.value
                              ? "border-gold bg-gold/10 text-navy"
                              : "border-border bg-muted/30 text-foreground/80"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 shrink-0 transition-all ${
                                answers[q.id] === opt.value ? "border-gold-dark bg-gold-dark" : "border-foreground/30"
                              }`}
                            >
                              {answers[q.id] === opt.value && <CheckCircle2 className="w-full h-full text-white" />}
                            </div>
                            <span className="font-medium">{opt.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button
                        onClick={back}
                        className="mt-6 inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-navy transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Indietro
                      </button>
                    )}
                  </div>
                );
              })()}

              {/* Lead form */}
              {isOnLead && (
                <div className="bg-white rounded-2xl shadow-card border border-border p-6 lg:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-black text-navy">Il tuo risultato è pronto</h2>
                      <p className="text-sm text-foreground/60">Dove te lo inviamo?</p>
                    </div>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="q-name">Come ti chiami? *</Label>
                      <Input
                        id="q-name"
                        required
                        value={leadInfo.name}
                        onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="q-email">Email *</Label>
                        <Input
                          id="q-email"
                          type="email"
                          required
                          value={leadInfo.email}
                          onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                          placeholder="mario@email.it"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="q-phone">Telefono *</Label>
                        <Input
                          id="q-phone"
                          type="tel"
                          required
                          value={leadInfo.phone}
                          onChange={(e) => setLeadInfo({ ...leadInfo, phone: e.target.value })}
                          placeholder="+39 ___ _______"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-2 text-xs text-foreground/70">
                      <input type="checkbox" required className="mt-0.5" />
                      <span>Accetto la <a href="/privacy" className="text-navy underline">Privacy Policy</a> e voglio ricevere il risultato.</span>
                    </label>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-navy font-bold h-12 text-base"
                    >
                      {isSubmitting ? "Calcolo in corso..." : "Mostrami il risultato"}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-navy transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Torna alle domande
                    </button>

                    <p className="text-xs text-center text-foreground/50 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3 h-3" /> Dati riservati — Niente spam, niente chiamate non richieste
                    </p>
                  </form>
                </div>
              )}

              {/* Result */}
              {isOnResult && (
                <div className="bg-white rounded-2xl shadow-primary border border-border p-7 lg:p-12">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-5 ${
                      result.outcome.level === "high" ? "bg-success/15" : result.outcome.level === "medium" ? "bg-gold/15" : "bg-muted"
                    }`}>
                      <Sparkles className={`w-10 h-10 ${
                        result.outcome.level === "high" ? "text-success" : result.outcome.level === "medium" ? "text-gold-dark" : "text-navy"
                      }`} />
                    </div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-bold mb-3">Il tuo risultato</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-navy mb-4">{result.outcome.title}</h2>
                  </div>

                  <div className="bg-muted/40 rounded-xl p-6 mb-7">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm font-semibold text-navy">Compatibilità con esdebitazione</span>
                      <span className="text-3xl font-black text-gold-dark">{result.pct}%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold to-gold-dark transition-all duration-1000"
                        style={{ width: `${result.pct}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-5">{result.outcome.desc}</p>
                  <p className="text-foreground/80 leading-relaxed mb-8 font-medium">{result.outcome.suggestion}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={openContact}
                      size="lg"
                      className="flex-1 bg-gold hover:bg-gold-dark text-navy font-bold"
                    >
                      Prenota diagnosi gratuita
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      onClick={restart}
                      size="lg"
                      variant="outline"
                      className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    >
                      <RefreshCw className="mr-2 w-4 h-4" /> Rifai il quiz
                    </Button>
                  </div>

                  <p className="text-xs text-center text-foreground/50 mt-6">
                    Questo è uno strumento orientativo. La diagnosi gratuita di un professionista è l'unico modo per avere certezze sul tuo caso.
                  </p>
                </div>
              )}
            </div>
          </div>
          </div>
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default Quiz;
