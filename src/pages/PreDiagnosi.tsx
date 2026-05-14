import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import Reveal from "@/components/Reveal";
import {
  Phone,
  ShieldCheck,
  FileSearch,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Building2,
  Scale,
  Users2,
  Briefcase,
  Award,
  HelpCircle,
  CalendarCheck,
  ClipboardList,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import logoTD from "@/assets/logo-tutela-debito.png";
import teamImg from "@/assets/team-tutela-debito.jpg";
import authorityImg from "@/assets/authority-legal.jpg";
import heroHopeImg from "@/assets/hero-hope.jpg";
import avvRossiImg from "@/assets/avv-armando-rossi.jpg";

const PreDiagnosi = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      <Helmet>
        <title>Prima della tua diagnosi gratuita — Cosa aspettarti | Tutela Debito</title>
        <meta name="description" content="Cosa aspettarti dalla prima diagnosi: come si svolge, cosa portare, cosa otterrai, cosa NON ti chiederemo mai. Pagina riservata a chi sta per prenotare il primo colloquio." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Minimal header */}
        <header className="sticky top-0 z-50 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <Link to="/" className="flex items-center shrink-0">
                <img src={logoTD} alt="Tutela Debito" className="h-14 md:h-16 w-auto -my-2" />
              </Link>
              <div className="flex items-center gap-3">
                <a href="tel:+390818671862" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark">
                  <Phone className="w-4 h-4" />
                  081 18671862
                </a>
                <Button onClick={openContact} className="bg-gold hover:bg-gold-dark text-navy font-semibold">
                  Prenota diagnosi
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* HERO */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-gold/30">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    Pagina riservata — Prima del tuo colloquio
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                    Stai per fare la prima diagnosi.
                    <br />
                    <span className="text-gold">Ecco cosa aspettarti</span>.
                  </h1>
                  <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-6">
                    La diagnosi è il momento più importante del tuo percorso. <strong className="text-white">È qui che capisci se siamo lo studio giusto per te</strong> — e se la tua situazione può essere risolta con gli strumenti previsti dalla legge.
                  </p>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed mb-8">
                    Prima di prenotare il colloquio, leggi questa pagina. Trovi: cosa è (e cosa non è) una diagnosi seria, come si svolge passo per passo, quali domande dovresti farci, cosa porterai a casa. Niente promozione commerciale: solo informazioni operative.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-2">
                    <Button onClick={openContact} size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold h-13 px-7">
                      Prenota la diagnosi gratuita <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <a href="tel:+390818671862">
                      <Button variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold h-13 px-7">
                        <Phone className="mr-2 w-4 h-4" /> 081 18671862
                      </Button>
                    </a>
                  </div>
                  <p className="text-xs text-white/50 mt-3">
                    Diagnosi gratuita · Risposta in 24h · Senza impegno
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={avvRossiImg}
                    alt="Avv. Armando Rossi — chi ti riceverà alla diagnosi"
                    className="rounded-2xl w-full aspect-[4/5] object-cover shadow-soft border-2 border-white/10"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-gold text-navy px-4 py-3 rounded-xl shadow-card max-w-[220px] hidden md:block">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1">10 minuti di lettura</div>
                    <div className="text-sm font-semibold leading-snug">Ti risparmiano ore di confusione</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST STRIP — quick credentials right after hero */}
          <section className="bg-white border-b border-border py-6 lg:py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {[
                  { icon: Scale, value: "Avvocati + commercialisti", label: "Squadra integrata" },
                  { icon: Award, value: "Iscritti agli Ordini", label: "Napoli · ODCEC" },
                  { icon: ShieldCheck, value: "Polizza RC professionale", label: "ex L. 247/2012" },
                  { icon: Building2, value: "3 sedi operative", label: "Napoli · Milano · Torino" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-navy text-sm leading-tight">{item.value}</div>
                      <div className="text-xs text-foreground/60">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COSA È E COSA NON È UNA DIAGNOSI */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cominciamo dalle basi</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Cosa è — e cosa non è — una diagnosi seria.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    La parola "diagnosi" viene usata da molti operatori del settore in modi molto diversi. Prima di prenotare un colloquio con chiunque, è utile sapere distinguere.
                  </p>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Reveal direction="left">
                  <div className="bg-success/5 border-2 border-success/30 rounded-2xl p-7 lg:p-8 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-success/15 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">Una diagnosi seria È</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Una valutazione tecnica della tua situazione documentale",
                        "Un esame della tua esposizione (creditori, importi, eventuali pignoramenti)",
                        "Un'analisi degli strumenti normativi applicabili al tuo caso",
                        "Un colloquio di 30-60 minuti, gratuito e senza impegno",
                        "Una conversazione in cui anche tu fai domande",
                        "L'inizio di un percorso che si formalizza con una valutazione scritta",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-success mt-1 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal direction="right">
                  <div className="bg-destructive/5 border-2 border-destructive/30 rounded-2xl p-7 lg:p-8 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-destructive/15 flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-destructive" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">Una diagnosi seria NON È</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Un colloquio di vendita travestito da consulenza",
                        "Una promessa generica di 'cancellare i debiti'",
                        "Un incontro in cui ti viene chiesto un acconto al primo appuntamento",
                        "Una percentuale di riduzione garantita senza vedere i documenti",
                        "Una firma da apporre 'subito per non perdere l'occasione'",
                        "Un confronto con un operatore senza iscrizione all'Ordine professionale",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                          <XCircle className="w-4 h-4 text-destructive mt-1 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PER CHI È / PER CHI NON È QUESTA DIAGNOSI */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">A chi è rivolta</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Questa diagnosi è per te se…
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Non lavoriamo con chiunque. Riteniamo che alcune aspettative siano incompatibili con il nostro modo di operare — e prima di farti perdere tempo è meglio dirlo apertamente.
                  </p>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Reveal direction="left">
                  <div className="bg-white border-2 border-success/40 rounded-2xl p-7 lg:p-8 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-success/15 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">Sì, se…</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Hai debiti che non riesci più a gestire e cerchi una via legale d'uscita",
                        "Vuoi capire concretamente quali strumenti normativi si applicano al tuo caso",
                        "Cerchi onestà tecnica anche quando la risposta non è quella che speri",
                        "Sei disposto a fornire la documentazione necessaria (anche se incompleta)",
                        "Vuoi prendere una decisione con calma, senza pressioni commerciali",
                        "Apprezzi un preventivo scritto e dettagliato prima di firmare qualunque cosa",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-success mt-1 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal direction="right">
                  <div className="bg-white border-2 border-destructive/40 rounded-2xl p-7 lg:p-8 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-destructive/15 flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-destructive" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">No, se…</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Cerchi una promessa di cancellazione totale del debito a priori",
                        "Vuoi qualcuno che ti dica solo 'sì' senza valutare la fattibilità tecnica",
                        "Pensi che il debito si risolva senza una procedura strutturata",
                        "Cerchi la soluzione più economica indipendentemente dalla competenza",
                        "Non sei disposto a fornire documentazione veritiera e completa",
                        "Vuoi un risultato 'garantito' (nessuno può garantire l'esito di un procedimento)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                          <XCircle className="w-4 h-4 text-destructive mt-1 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* CHI STA DALL'ALTRA PARTE */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
                <Reveal direction="left">
                  <div className="relative">
                    <img
                      src={teamImg}
                      alt="Il team dello studio Tutela Debito"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-navy text-white px-4 py-3 rounded-xl shadow-card max-w-[200px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold mb-0.5">Studio strutturato</div>
                      <div className="text-sm font-semibold leading-snug">Non un singolo professionista</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Chi sta dall'altra parte del telefono</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      Chi siamo, in modo concreto.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                      Tutela Debito è un'azienda legale strutturata. Quando ci chiami, dall'altra parte non c'è un singolo professionista che fa tutto, ma una squadra organizzata in dipartimenti che lavorano in coordinamento.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: Building2, label: "Dipartimenti specializzati", value: "Legale · Fiscale · Crisi d'impresa · Assistenza clienti" },
                        { icon: Award, label: "Iscritti agli Ordini", value: "Avvocati Ordine di Napoli · ODCEC" },
                        { icon: ShieldCheck, label: "Polizza professionale", value: "Copertura RC attiva ex L. 247/2012" },
                        { icon: Scale, label: "Tre sedi operative", value: "Napoli · Milano · Torino" },
                      ].map((it) => (
                        <div key={it.label} className="flex items-start gap-3 bg-white border border-border rounded-lg p-3">
                          <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                            <it.icon className="w-4 h-4 text-navy" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-0.5">{it.label}</div>
                            <div className="text-sm text-navy font-semibold">{it.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* COSA SUCCEDERÀ NEL COLLOQUIO (TIMELINE) */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-14">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa succederà</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    La diagnosi, passo per passo.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Dal momento in cui ci scrivi al momento in cui ricevi la valutazione scritta. Tempi, attività, cosa ci aspettiamo da te, cosa otterrai.
                  </p>
                </div>
              </Reveal>

              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-7 top-12 bottom-12 w-px bg-gradient-to-b from-gold via-gold-dark to-gold opacity-40 hidden sm:block" aria-hidden="true" />

                <div className="space-y-5">
                  {[
                    {
                      n: "01",
                      icon: MessageSquare,
                      duration: "Subito",
                      title: "Compili il modulo o chiami",
                      desc: "Lasci nome, numero e una breve descrizione della tua situazione. Bastano due minuti. Nessun dato sensibile viene chiesto in questa fase.",
                      youDo: "Compili il modulo o chiami il numero diretto.",
                      weDo: "Riceviamo la richiesta in tempo reale, registriamo la prenotazione.",
                    },
                    {
                      n: "02",
                      icon: Phone,
                      duration: "Entro 24 ore lavorative",
                      title: "Ti richiamiamo",
                      desc: "Un nostro referente ti telefona per una prima conversazione di orientamento (10-15 minuti). Capiamo a grandi linee la natura della situazione: privato o impresa, tipologia di creditori, esistenza di azioni esecutive in corso.",
                      youDo: "Rispondi alle domande in modo schietto. Senza giudizio.",
                      weDo: "Ti diciamo già se il tuo caso rientra nei nostri ambiti. Fissiamo il colloquio approfondito.",
                    },
                    {
                      n: "03",
                      icon: FileSearch,
                      duration: "Entro una settimana",
                      title: "Colloquio approfondito (30-60 minuti)",
                      desc: "In videocall o in una delle tre sedi (Napoli, Milano, Torino), come preferisci. Esaminiamo insieme la documentazione che hai preparato: cartelle esattoriali, contratti, atti notificati, situazione patrimoniale.",
                      youDo: "Porti la documentazione (vedi sotto la lista) e le domande che vuoi farci.",
                      weDo: "Ascoltiamo, esaminiamo i documenti, formuliamo le prime ipotesi tecniche.",
                    },
                    {
                      n: "04",
                      icon: FileText,
                      duration: "Entro 10-15 giorni",
                      title: "Ricevi la valutazione tecnica scritta",
                      desc: "Ti consegniamo un documento scritto che indica: lo strumento normativo applicabile (con riferimenti agli articoli di legge), i presupposti che il tuo caso soddisfa, i tempi indicativi della procedura, i costi previsti voce per voce.",
                      youDo: "Leggi con calma. Confronti con eventuali altri preventivi.",
                      weDo: "Rimaniamo a disposizione per chiarire ogni voce del documento, anche se non procedi con noi.",
                    },
                    {
                      n: "05",
                      icon: Sparkles,
                      duration: "Quando ti senti pronto",
                      title: "Decidi (senza pressione)",
                      desc: "Se decidi di affidarci la pratica, firmiamo il mandato professionale con il preventivo allegato. Se decidi di rivolgerti altrove, va bene. Se preferisci pensarci, ti aspettiamo: non ti richiamiamo per chiederti se hai deciso.",
                      youDo: "Decidi quando e come vuoi, anche dopo settimane.",
                      weDo: "Rispettiamo i tuoi tempi. Niente solleciti commerciali, niente pressione.",
                    },
                  ].map((step, i) => (
                    <Reveal key={step.n} delay={i * 100}>
                      <div className="relative bg-white rounded-2xl border border-border shadow-card hover:border-gold transition-colors duration-300 p-6 lg:p-7 flex items-start gap-5">
                        <div className="relative z-10 w-14 h-14 rounded-full bg-navy text-gold flex items-center justify-center shrink-0 border-4 border-white">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
                            <h3 className="text-xl font-bold text-navy leading-tight">
                              <span className="text-gold-dark mr-2">{step.n}.</span>
                              {step.title}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-navy whitespace-nowrap">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-foreground/75 leading-relaxed mb-4">{step.desc}</p>
                          <div className="grid sm:grid-cols-2 gap-3">
                            <div className="bg-muted/40 border-l-2 border-gold rounded-r-lg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold mb-1">Cosa fai tu</div>
                              <div className="text-sm text-foreground/80">{step.youDo}</div>
                            </div>
                            <div className="bg-muted/40 border-l-2 border-navy rounded-r-lg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-navy font-bold mb-1">Cosa facciamo noi</div>
                              <div className="text-sm text-foreground/80">{step.weDo}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* LE PAURE PIÙ COMUNI — LE NOSTRE RISPOSTE */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Quello che probabilmente stai pensando</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Le paure più comuni — e le nostre risposte.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Chi affronta una situazione debitoria arriva al colloquio con dubbi, vergogna, paura di essere giudicato o di sentirsi un caso senza speranza. Sono reazioni umane normali. Ecco come le gestiamo.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                {[
                  {
                    fear: "«Mi sentirò giudicato per come sono arrivato a questo punto»",
                    response: "No. Lavoriamo con persone in difficoltà tutti i giorni. Le cause del sovraindebitamento sono spesso eventi della vita — perdita del lavoro, malattie, separazioni, crisi aziendali. Il nostro ruolo è tecnico, non morale: capire cosa si può fare ora, non giudicare quello che è stato.",
                  },
                  {
                    fear: "«Non ho tutti i documenti, mi cacceranno via»",
                    response: "Va bene comunque. Ti diciamo durante il colloquio cosa recuperare e come (estratto AdER, cassetto fiscale, eccetera). Una diagnosi può cominciare con documentazione parziale e completarsi nei giorni successivi. L'importante è la volontà di portarci nero su bianco la situazione.",
                  },
                  {
                    fear: "«La mia situazione è troppo grave, non c'è soluzione»",
                    response: "La normativa italiana prevede strumenti pensati specificamente per situazioni gravi: persino l'esdebitazione del debitore incapiente (art. 283 CCII) consente la cancellazione integrale del debito a chi non ha nulla. Più la situazione è grave, più conta arrivare a una diagnosi seria — non rimandare.",
                  },
                  {
                    fear: "«Costerà troppo, non posso permettermelo»",
                    response: "La diagnosi è gratuita: zero costi per il primo colloquio e per la valutazione tecnica scritta. Il preventivo per la procedura (se procedi) è dettagliato e prevede frequentemente dilazioni di pagamento. In alcuni casi i costi possono essere inseriti nel piano stesso.",
                  },
                  {
                    fear: "«Ho già parlato con altri, sono confuso»",
                    response: "Bene. Confrontare più studi è la cosa giusta da fare. Anzi: ti chiediamo di portare al colloquio gli eventuali preventivi ricevuti altrove. Te li leggiamo insieme, ti spieghiamo le voci tecniche, ti diciamo se ti sembrano ragionevoli — anche se poi non scegli noi.",
                  },
                  {
                    fear: "«Ho paura che mi vendano qualcosa che non mi serve»",
                    response: "La diagnosi serve esattamente a evitare questo. Ti consegniamo una valutazione scritta che indica se e quale procedura è applicabile. Se non ci sono i presupposti di legge, te lo diciamo apertamente. Non firmiamo incarichi per casi destinati al rigetto: per noi è un danno reputazionale.",
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="bg-muted/40 rounded-2xl border border-border p-6 hover:border-gold hover:bg-white hover:shadow-card transition-all duration-300 h-full">
                      <div className="flex items-start gap-3 mb-3 pb-3 border-b border-border">
                        <MessageSquare className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <p className="text-foreground/85 italic leading-snug">{item.fear}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/75 leading-relaxed">{item.response}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* QUOTE AVV. ROSSI — humanize */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center max-w-5xl mx-auto bg-white border border-border rounded-2xl p-7 lg:p-10 shadow-card">
                <Reveal direction="left">
                  <img
                    src={avvRossiImg}
                    alt="Avv. Armando Rossi"
                    className="rounded-2xl w-full max-w-[220px] aspect-[4/5] object-cover shadow-card"
                  />
                </Reveal>
                <Reveal delay={150}>
                  <div>
                    <div className="text-5xl text-gold-dark font-black leading-none mb-3">"</div>
                    <p className="text-lg lg:text-xl text-navy leading-relaxed italic mb-5">
                      Il debito è raramente solo un numero. Dietro c'è una storia, una vita, spesso una famiglia. Per questo prima di proporre uno strumento legale ci si deve sedere ad ascoltare. La diagnosi è il momento dell'ascolto — il resto viene dopo.
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div>
                        <div className="font-bold text-navy">Avv. Armando Rossi</div>
                        <div className="text-sm text-foreground/60">Direzione dello studio</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* COSA NON TROVERAI MAI (DIFFERENZIAZIONE) */}
          <section className="py-14 lg:py-20 bg-navy text-white relative overflow-hidden">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">La differenza</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
                    Cosa NON troverai mai parlando con noi.
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Queste sono le pratiche che riteniamo professionalmente scorrette — diffuse nel settore, ma incompatibili con la serietà di uno studio strutturato. Se trovi anche solo una di queste cose, alzati e vai via (anche da noi).
                  </p>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {[
                  {
                    title: "Promesse di risultato",
                    desc: "Nessun professionista può garantire l'esito di un procedimento. La legge stabilisce presupposti, il Tribunale decide. Chi promette '100% di cancellazione' sta mentendo.",
                  },
                  {
                    title: "Richieste di acconto al primo colloquio",
                    desc: "La diagnosi è gratuita. Nessun pagamento ti verrà chiesto prima di averti consegnato una valutazione scritta e un preventivo dettagliato.",
                  },
                  {
                    title: "Pressioni temporali",
                    desc: "Niente 'devi firmare oggi', niente 'l'offerta scade', niente 'altrimenti perdi quest'opportunità'. Una scelta del genere richiede tempo.",
                  },
                  {
                    title: "Operatori non iscritti all'Albo",
                    desc: "I tuoi atti li firma sempre un avvocato o un commercialista iscritto all'Ordine. Mai un 'consulente del debito' generico.",
                  },
                  {
                    title: "Comunicazioni non autorizzate",
                    desc: "Non contattiamo creditori, banche, datore di lavoro o familiari senza tua autorizzazione scritta. Mai.",
                  },
                  {
                    title: "Diagnosi a senso unico",
                    desc: "Il colloquio è un dialogo. Devi poter fare le tue domande, ottenere risposte, prendere il tempo che ti serve. Se non lasciamo spazio alle tue domande, qualcosa non va.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="bg-white/5 border border-white/15 rounded-xl p-5 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <XCircle className="w-5 h-5 text-destructive shrink-0" />
                        <h3 className="font-bold text-white leading-tight">{item.title}</h3>
                      </div>
                      <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* COSA PORTARE AL COLLOQUIO */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
                <Reveal direction="left">
                  <div className="relative">
                    <img
                      src={authorityImg}
                      alt="Documenti da raccogliere per la diagnosi"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-3 rounded-xl shadow-card max-w-[200px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider mb-0.5">Più documenti porti</div>
                      <div className="text-sm font-semibold leading-snug">Più precisa è la valutazione</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Come prepararti</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      Cosa portare con te al colloquio.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                      Non serve portare tutto già perfetto. Anche una raccolta parziale ci aiuta a fare una valutazione più precisa. Se non hai qualcosa, va bene — te lo diremo durante il colloquio.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        "Cartelle esattoriali ricevute",
                        "Contratti di finanziamento / mutuo",
                        "Estratti conto bancari (ultimi 6 mesi)",
                        "Dichiarazioni dei redditi (ultimi 2-3 anni)",
                        "Atti di precetto o pignoramento",
                        "Comunicazioni di società di recupero",
                        "Bollette e canoni rilevanti insoluti",
                        "Documento d'identità e codice fiscale",
                      ].map((doc) => (
                        <div key={doc} className="flex items-start gap-2 text-sm text-foreground/80">
                          <ClipboardList className="w-4 h-4 text-gold-dark mt-0.5 shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                      <p className="text-sm text-navy leading-relaxed">
                        <strong>Non sai dove trovare un documento?</strong> Chiamaci prima del colloquio: ti diciamo come recuperarlo (es. accesso al cassetto fiscale, richiesta estratto AdER).
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* 5 DOMANDE DA FARCI */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Domande che dovresti farci</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Cinque domande per capire chi hai davanti.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Queste sono le domande che faresti a noi — ma anche a qualunque altro studio tu stia valutando. Se uno studio non sa rispondere chiaramente, è un segnale.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {[
                  {
                    q: "Quanti professionisti seguiranno il mio caso?",
                    a: "La risposta deve includere figure specifiche (avvocato, commercialista, eventuale OCC) e i loro ruoli. Una risposta vaga è un campanello d'allarme.",
                  },
                  {
                    q: "Mi consegnerete un preventivo scritto?",
                    a: "Sì deve essere la risposta. Voce per voce: onorari professionali, contributo unificato, spese OCC, marche da bollo. Prima della firma del mandato.",
                  },
                  {
                    q: "Qual è lo strumento normativo che intendete applicare?",
                    a: "Deve poter citare articoli precisi del CCII o della L. 3/2012. Una risposta generica ('faremo una procedura') significa che non c'è stata analisi.",
                  },
                  {
                    q: "Quanto durerà indicativamente la procedura?",
                    a: "Variabile, ma deve poter fornire un intervallo realistico (es. 9-18 mesi dal deposito all'omologazione). Chi promette tempi troppo brevi non è credibile.",
                  },
                  {
                    q: "Cosa succede se rifiutate la mia pratica?",
                    a: "Risposta corretta: ti viene comunicato per iscritto, senza costi. Nessun professionista serio prende incarichi quando i presupposti di legge mancano.",
                  },
                  {
                    q: "Posso contattarvi anche tra qualche mese?",
                    a: "Sì. Uno studio serio resta disponibile per chiarimenti anche se non firmi subito. Chi ti spinge a decidere 'oggi o mai più' non ha il tuo interesse al primo posto.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.q} delay={i * 80}>
                    <div className="bg-white rounded-2xl p-6 border border-border hover:border-gold hover:shadow-card transition-all duration-300 h-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0 font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-bold text-navy leading-snug pt-1.5">{item.q}</h3>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed pl-11">{item.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* COSA PORTERAI A CASA */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
                <Reveal>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa porterai a casa</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      Al termine della diagnosi avrai quattro cose.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                      Anche se decidi di non procedere con noi, la diagnosi ti lascia degli strumenti concreti per orientarti.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: FileText, title: "Valutazione tecnica scritta", desc: "Documento con strumento applicabile, presupposti, tempi e costi." },
                        { icon: Briefcase, title: "Preventivo dettagliato", desc: "Voce per voce: onorari, spese vive, modalità di pagamento." },
                        { icon: Scale, title: "Indicazione normativa", desc: "Articoli specifici del CCII o L. 3/2012 applicabili al tuo caso." },
                        { icon: Users2, title: "Comprensione del percorso", desc: "Sai cosa succederà, quando, e cosa puoi aspettarti. Anche se procedi altrove." },
                      ].map((item, i) => (
                        <Reveal key={item.title} delay={i * 80}>
                          <div className="flex items-start gap-4 bg-muted/40 border border-border rounded-xl p-4">
                            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                              <item.icon className="w-5 h-5 text-navy" />
                            </div>
                            <div>
                              <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                              <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right">
                  <div className="relative">
                    <img
                      src={heroHopeImg}
                      alt="Dopo la diagnosi sai esattamente dove sei e dove puoi arrivare"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -left-4 bg-navy text-white px-4 py-3 rounded-xl shadow-card max-w-[200px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold mb-0.5">Tutto nero su bianco</div>
                      <div className="text-sm font-semibold leading-snug">Niente promesse a voce</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Domande prima del colloquio</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Le risposte alle domande più frequenti.
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-3">
                    {[
                      {
                        q: "La diagnosi è davvero gratuita o ci sono costi nascosti?",
                        a: "È davvero gratuita. Non ci sono spese di apertura pratica, spese di studio, contributi forfettari. Il primo colloquio e la valutazione tecnica scritta non comportano alcun costo. Se al termine decidi di affidarci la pratica, firmiamo un preventivo dettagliato con costi e tempi — solo allora si parla di pagamento.",
                      },
                      {
                        q: "Quanto dura il colloquio?",
                        a: "Generalmente 30-60 minuti. Dipende dalla complessità della situazione e dalla quantità di documenti da esaminare. Per i casi più articolati può rendersi necessario un secondo incontro entro pochi giorni.",
                      },
                      {
                        q: "Posso fare la diagnosi in videocall o devo venire in sede?",
                        a: "Entrambe le opzioni sono disponibili. La gran parte delle diagnosi si svolge in videocall (Zoom o Meet) per comodità del cliente. Se preferisci l'incontro in presenza, abbiamo sedi a Napoli, Milano e Torino.",
                      },
                      {
                        q: "Cosa succede se non ho tutta la documentazione?",
                        a: "Va bene comunque. Ti diciamo durante il colloquio quali documenti recuperare e come (es. estratto di ruolo AdER, cassetto fiscale dell'Agenzia Entrate). Una diagnosi può iniziare anche con documentazione parziale, l'importante è completarla prima di formulare la valutazione tecnica scritta.",
                      },
                      {
                        q: "I miei dati sono al sicuro?",
                        a: "Sì. Le informazioni che ci affidi sono protette dal segreto professionale di avvocati e commercialisti (artt. 622 c.p. e 200 c.p.p.) e dal trattamento ai sensi del GDPR. Nessuna comunicazione esterna senza tua autorizzazione scritta.",
                      },
                      {
                        q: "Posso registrare il colloquio?",
                        a: "Sì, se ti aiuta a riascoltare i passaggi tecnici. Ti chiediamo solo di comunicarcelo a inizio chiamata per correttezza. È più utile però prendere appunti delle domande aperte: ti rispondiamo per iscritto nella valutazione successiva.",
                      },
                      {
                        q: "E se la mia situazione non è risolvibile?",
                        a: "Te lo diciamo, apertamente e senza fattura. Se i presupposti di legge per una procedura non ci sono, prendiamo nota e ti orientiamo verso le alternative possibili (es. solo gestione del contenzioso tributario, o solo opposizione a un singolo atto). Ma non firmiamo incarichi per procedure che sappiamo destinate al rigetto.",
                      },
                      {
                        q: "Devo decidere subito dopo il colloquio?",
                        a: "No. Anzi: ti sconsigliamo di decidere subito. Prendi il tempo che ti serve per leggere la valutazione scritta, confrontarla con eventuali altri preventivi, parlarne con persone di cui ti fidi. Una decisione del genere si fa con calma.",
                      },
                    ].map((f, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="bg-white rounded-xl border border-border px-5 lg:px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-navy hover:text-gold-dark py-5 text-base">
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/75 leading-relaxed pb-5">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Reveal>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                  <p className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Ora hai le informazioni</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                    Pronto a fare la diagnosi?
                  </h2>
                  <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
                    Hai letto cosa aspettarti, come prepararti, quali domande farci. Adesso il passo è semplice: prenoti il primo colloquio, noi ti ricontattiamo entro 24 ore.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <Button onClick={openContact} size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold h-13 px-8">
                      Prenota la diagnosi gratuita <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="tel:+390818671862">
                      <Button variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-bold h-13 px-8">
                        <Phone className="mr-2 w-4 h-4" /> 081 18671862
                      </Button>
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-white/70">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Diagnosi gratuita
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-gold" /> Risposta in 24h
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold" /> Senza impegno
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default PreDiagnosi;
