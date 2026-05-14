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
  ShieldAlert,
  FileSearch,
  FileText,
  Scale,
  Users2,
  CreditCard,
  Building2,
  Headphones,
  XCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Award,
  Eye,
  Banknote,
  HelpCircle,
} from "lucide-react";
import logoTD from "@/assets/logo-tutela-debito.png";
import teamImg from "@/assets/team-tutela-debito.jpg";
import authorityImg from "@/assets/authority-legal.jpg";
import abstractHopeBgImg from "@/assets/abstract-hope-bg.jpg";
import handshakeImg from "@/assets/handshake-trust.jpg";
import ctaHandshakeImg from "@/assets/cta-handshake.jpg";
import heroLawyerImg from "@/assets/hero-lawyer.jpg";

const checklist = [
  {
    n: "01",
    icon: Building2,
    title: "Lo studio è realmente strutturato?",
    bad: "Un singolo professionista che fa tutto: legale, fiscale, contabile, gestione clienti. Sovraccarico = errori.",
    good: "Una struttura con dipartimenti distinti (legale, fiscale, assistenza clienti) e più professionisti che si coordinano sulla stessa pratica.",
    verify: "Chiedi quanti professionisti seguiranno il tuo caso e con quali ruoli. Una risposta vaga è un campanello d'allarme.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Ti hanno dato un preventivo scritto?",
    bad: "Cifre dette a voce, ricevute parziali, pagamenti richiesti senza un documento firmato che spieghi cosa stai pagando.",
    good: "Preventivo formale, scritto, dettagliato: onorari professionali, spese vive (contributo unificato, marche, OCC), eventuali rate.",
    verify: "Pretendi il preventivo SCRITTO prima di firmare qualunque cosa. Se non te lo danno, non firmare nulla.",
  },
  {
    n: "03",
    icon: Eye,
    title: "I casi che mostrano sono verificabili?",
    bad: "Testimonianze con foto stock, recensioni Google sospette tutte 5 stelle, nessun riferimento a sentenze o procedure reali.",
    good: "Casi presentati con cifre, procedura specifica (es. art. 67 CCII), Tribunale competente, durata. Anche se anonimi, sono ricostruibili.",
    verify: "Chiedi gli estremi di almeno una sentenza pubblica che possa essere consultata in banca dati.",
  },
  {
    n: "04",
    icon: Award,
    title: "Sono iscritti agli Ordini professionali?",
    bad: "Sedicenti 'consulenti del debito' senza iscrizione ad alcun ordine, che non possono firmare atti né sostenere udienze.",
    good: "Avvocati iscritti all'Ordine forense, commercialisti iscritti all'ODCEC. L'iscrizione è verificabile online sul sito dell'Ordine.",
    verify: "Chiedi il numero di iscrizione e l'ordine di appartenenza. Controlla sul sito ufficiale dell'Ordine.",
  },
  {
    n: "05",
    icon: ShieldAlert,
    title: "Hanno polizza RC professionale?",
    bad: "Operatori senza copertura assicurativa: se sbagliano, non hai tutele economiche.",
    good: "Polizza di responsabilità civile professionale obbligatoria per legge (art. 12 L. 247/2012), con massimali adeguati.",
    verify: "Chiedi gli estremi della polizza. Devono fornirli senza problemi.",
  },
  {
    n: "06",
    icon: Banknote,
    title: "Ti hanno chiesto soldi prima della diagnosi?",
    bad: "Acconti, 'spese di apertura pratica', 'spese di studio' richiesti prima di averti dato una valutazione tecnica per iscritto.",
    good: "Diagnosi gratuita prima dell'incarico. Se non si può procedere, te lo dicono senza fatturare un centesimo.",
    verify: "Allontanati immediatamente da chi ti chiede denaro prima di averti consegnato una valutazione scritta.",
  },
  {
    n: "07",
    icon: AlertTriangle,
    title: "Cosa ti hanno promesso?",
    bad: "'Cancelliamo i debiti', 'Risultato garantito', 'Riduzione del 90% sicura'. Promesse che nessun professionista serio può fare.",
    good: "Valutazione tecnica della procedura applicabile, stima realistica, indicazione dei rischi. Mai garanzie di risultato.",
    verify: "Diffida da chi promette un risultato certo. La legge stabilisce presupposti precisi: nessuno può garantire 'al 100%'.",
  },
  {
    n: "08",
    icon: Scale,
    title: "Hanno avvocato E commercialista?",
    bad: "Solo legali (che non gestiscono la dimensione fiscale) o solo commercialisti (che non depositano atti in Tribunale).",
    good: "Lo studio integra entrambe le figure. Il debito ha quasi sempre una componente legale E una fiscale, vanno trattate insieme.",
    verify: "Chiedi chi gestirà i rapporti con l'Agenzia Entrate Riscossione e chi depositerà gli atti. Se è la stessa persona, c'è un problema.",
  },
  {
    n: "09",
    icon: Headphones,
    title: "Ti rispondono quando chiami?",
    bad: "Numeri che squillano a vuoto, segreterie infinite, risposte solo via messaggio. Quando avrai un'urgenza non li raggiungerai.",
    good: "Numeri attivi negli orari dichiarati, segreteria organizzata, referente unico per la tua pratica raggiungibile.",
    verify: "Chiama una seconda volta prima di firmare. Se non rispondono, capisci cosa accadrà dopo che avrai pagato.",
  },
  {
    n: "10",
    icon: Building2,
    title: "Hanno sedi fisiche reali?",
    bad: "Solo un sito web e un numero. Indirizzo non verificabile su Google Maps. Nessuna possibilità di vederli in faccia.",
    good: "Sedi fisiche con indirizzi precisi, visitabili su appuntamento. Lo studio ha una presenza tangibile sul territorio.",
    verify: "Cerca l'indirizzo su Maps. Verifica che corrisponda a uno studio professionale, non a una casella postale.",
  },
];

const truffe = [
  {
    title: "Cancellazione 'magica' dei debiti",
    desc: "Chi promette di cancellare i debiti senza una procedura giudiziale o un accordo con i creditori sta mentendo. La cancellazione richiede strumenti precisi (L. 3/2012, CCII) con presupposti, tempi e costi.",
  },
  {
    title: "Promesse percentuali certe",
    desc: "'Ti riduco il debito del 90% garantito'. Nessun professionista può garantire un risultato: dipende dal Tribunale, dai creditori, dalle prove. Una promessa quantitativa è un indicatore di scam.",
  },
  {
    title: "Acconti senza valutazione",
    desc: "Richieste di 'spese di apertura pratica', 'oneri di studio', acconti prima di aver visto i documenti. Lo studio professionale fa prima la diagnosi gratuita, poi (eventualmente) firma l'incarico.",
  },
  {
    title: "Operatori non iscritti all'Albo",
    desc: "'Consulenti del debito', 'esperti di sovraindebitamento', 'patronati' che non sono avvocati né commercialisti. Non possono firmare atti, non possono comparire in udienza. Tu paghi, loro non rispondono di nulla.",
  },
  {
    title: "Pressione commerciale alla firma",
    desc: "'Devi decidere oggi', 'l'offerta scade', 'altrimenti perdi questa opportunità'. Una scelta del genere richiede tempo. La pressione commerciale è incompatibile con la serietà professionale.",
  },
];

const comparison = [
  { aspect: "Diagnosi iniziale", us: "Gratuita, sempre, con valutazione scritta", them: "A pagamento o vaga" },
  { aspect: "Preventivo", us: "Scritto, dettagliato, firmato prima dell'incarico", them: "Cifre dette a voce, integrazioni a sorpresa" },
  { aspect: "Struttura", us: "Avvocati + commercialisti + staff in dipartimenti", them: "Singolo professionista o operatori non abilitati" },
  { aspect: "Casi mostrati", us: "Con cifre, procedure e estremi verificabili", them: "Testimonianze generiche, foto stock" },
  { aspect: "Iscrizione Ordini", us: "Avvocati Ordine di Napoli, ODCEC", them: "Spesso non verificabile" },
  { aspect: "Polizza professionale", us: "Sì, copertura RC obbligatoria", them: "Spesso assente o non comunicata" },
  { aspect: "Sedi fisiche", us: "Napoli, Milano, Torino — indirizzi reali", them: "Solo sito web o casella postale" },
  { aspect: "Comunicazione", us: "Referente unico, aggiornamenti regolari", them: "Numeri che squillano a vuoto" },
];

const PostConsulenza = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      <Helmet>
        <title>Hai fatto la consulenza? Ecco come scegliere bene | Tutela Debito</title>
        <meta name="description" content="Guida onesta agli elementi da verificare prima di affidare la tua pratica di esdebitazione a uno studio legale. Per chi ha già fatto la consulenza e deve decidere." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Minimal header — no nav distractions */}
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
                  Richiedi richiamata
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
                    <FileSearch className="w-3.5 h-3.5" />
                    Pagina riservata — leggi prima di firmare
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                    Stai per fare una <span className="text-gold">scelta importante</span>.
                    <br />
                    Prima però leggi attentamente questa pagina.
                  </h1>
                  <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-6">
                    Quello che firmi nei prossimi giorni decide cosa succede al tuo debito nei prossimi anni. <strong className="text-white">Una scelta sbagliata costa tempo, denaro e — nei casi peggiori — l'aggravarsi del problema</strong>.
                  </p>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed mb-8">
                    Prenderti 10 minuti adesso, per capire come riconoscere uno studio serio, è il modo migliore di tutelarti. Qui sotto trovi 10 elementi tecnici da verificare, 3 casi reali, le 5 trappole più diffuse, i benefici concreti di una scelta consapevole e le risposte alle domande che probabilmente ti stai facendo. <strong className="text-white">Niente promozione commerciale</strong>: solo i criteri che applicheresti a qualunque studio — incluso il nostro.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-2">
                    <Button onClick={openContact} size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold h-13 px-7">
                      Voglio una seconda opinione <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <a href="tel:+390818671862">
                      <Button variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold h-13 px-7">
                        <Phone className="mr-2 w-4 h-4" /> 081 18671862
                      </Button>
                    </a>
                  </div>
                  <p className="text-xs text-white/50 mt-3">
                    Nessuna pressione · Nessun impegno · Solo informazioni che ti aiutano a decidere
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={heroLawyerImg}
                    alt="Una scelta legale ha bisogno di criteri tecnici di valutazione"
                    className="rounded-2xl w-full aspect-[4/5] object-cover shadow-soft border-2 border-white/10"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-gold text-navy px-4 py-3 rounded-xl shadow-card max-w-[220px] hidden md:block">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1">10 criteri tecnici</div>
                    <div className="text-sm font-semibold leading-snug">Per capire chi sta davanti a te</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STAKES — direct, dolor-driven */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-12">
                <Reveal>
                  <div>
                    <p className="text-destructive uppercase tracking-widest text-sm font-semibold mb-3">Quanto pesa una scelta sbagliata</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-6 leading-tight">
                      Tre cose che succedono se sbagli studio.
                    </h2>
                    <p className="text-foreground/75 leading-relaxed text-lg">
                      Una procedura mal gestita non è un fastidio amministrativo. È un'opportunità persa di sistemare la tua posizione — e spesso un peggioramento concreto. Ecco cosa abbiamo visto succedere nelle pratiche arrivate da noi dopo che il primo studio aveva sbagliato.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="right">
                  <div className="relative">
                    <img
                      src={authorityImg}
                      alt="Documenti legali e analisi della pratica"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-3 -left-3 bg-destructive/95 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-card">
                      Quando si sbaglia, costa.
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto mb-8">
                  {[
                    { n: "1.", title: "Perdi anni", desc: "Una procedura mal istruita può essere rigettata. Significa ricominciare daccapo — con tempi e nervi ancora più lunghi." },
                    { n: "2.", title: "Perdi soldi", desc: "Acconti versati a operatori non strutturati raramente vengono restituiti. A questo si sommano gli onorari del nuovo studio." },
                    { n: "3.", title: "Peggiori la posizione", desc: "Atti depositati male, omissioni di documenti, scadenze saltate: ogni errore può aggravare il quadro debitorio." },
                  ].map((s, i) => (
                    <Reveal key={s.title} delay={i * 100} direction="scale">
                      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 h-full">
                        <div className="text-2xl font-black text-destructive mb-2">{s.n}</div>
                        <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                        <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto text-center">
                  Non è teoria. <strong className="text-navy">Più sotto trovi tre casi reali</strong> di persone che hanno scelto male — e cosa è cambiato quando hanno verificato i criteri giusti. Prima però, i <strong className="text-navy">10 punti tecnici da controllare</strong>.
                </p>
              </Reveal>
            </div>
          </section>

          {/* CHECKLIST */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-12">
                <Reveal>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">L'elenco tecnico</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      10 elementi da verificare prima di firmare.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      Per ogni punto trovi: il <strong className="text-destructive">segnale negativo</strong> che dovresti riconoscere, il <strong className="text-success">comportamento corretto</strong> di uno studio serio, e una <strong className="text-navy">azione concreta</strong> che puoi fare adesso per verificare.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="right">
                  <div className="relative">
                    <img
                      src={ctaHandshakeImg}
                      alt="Verifica i criteri tecnici prima di firmare"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-navy text-white px-4 py-3 rounded-xl shadow-card max-w-[180px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold mb-0.5">10 criteri</div>
                      <div className="text-sm font-semibold leading-snug">Da verificare punto per punto</div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-5 max-w-5xl">
                {checklist.map((item, i) => (
                  <Reveal key={item.n} delay={i * 50}>
                    <article className="bg-white rounded-2xl border border-border shadow-card overflow-hidden hover:border-gold transition-colors duration-300">
                      <div className="grid lg:grid-cols-[auto_1fr] gap-6 p-6 lg:p-8">
                        <div className="flex lg:flex-col items-start gap-4">
                          <div className="text-4xl lg:text-5xl font-black text-gold/40 tabular-nums leading-none">{item.n}</div>
                          <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-navy mb-5">{item.title}</h3>

                          <div className="grid md:grid-cols-2 gap-4 mb-5">
                            <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-4 h-4 text-destructive shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-wider text-destructive">Segnale negativo</span>
                              </div>
                              <p className="text-sm text-foreground/80 leading-relaxed">{item.bad}</p>
                            </div>

                            <div className="bg-success/5 border-l-4 border-success rounded-r-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-wider text-success">Studio serio</span>
                              </div>
                              <p className="text-sm text-foreground/80 leading-relaxed">{item.good}</p>
                            </div>
                          </div>

                          <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">Come verificare</span>
                              <p className="text-sm text-navy leading-relaxed">{item.verify}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CASI STUDIO — cases from our practice, detailed */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Tre casi reali del nostro studio</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Cosa è successo a chi ha scelto senza verificare.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Tre pratiche realmente seguite dallo studio. I clienti sono arrivati da noi <strong className="text-navy">dopo</strong> aver versato denaro e perso tempo con operatori non strutturati. Per ogni caso trovi: il profilo iniziale, la trappola in cui sono cascati, i passi concreti che abbiamo fatto noi, il risultato finale con cifre e tempi, la lezione tecnica da portare a casa.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Marco",
                    role: "Imprenditore edile, 52 anni",
                    location: "Milano",
                    icon: Banknote,
                    profile: "Azienda chiusa nel 2020 dopo il blocco dei cantieri. Esposizione complessiva di 320.000€: 180.000€ verso Agenzia Entrate Riscossione (IVA, IRPEF, contributi INPS), 95.000€ verso fornitori, 45.000€ tra leasing e fidi bancari revocati. Casa di proprietà a rischio pignoramento. Due figli minori a carico. Il primo precetto era arrivato a marzo.",
                    trap: "Risponde a un annuncio sponsorizzato sui social che prometteva 'cancellazione del 90% dei debiti d'impresa'. Lo studio si presentava come 'Centro Sovraindebitamento Italia' — operatore senza iscrizione all'Albo, sede non identificabile su Maps. Acconto richiesto: 4.500€ versati con bonifico immediato per 'spese di apertura pratica e analisi preliminare'. Promessa contenuta in una 'lettera d'intenti' generica di una pagina, nessun preventivo dettagliato, nessuna valutazione documentale firmata. Dopo 8 mesi: nessun atto depositato in Tribunale, due telefonate ignorate, terzo contatto via WhatsApp con richiesta di ulteriori 1.500€ per 'spese di cancelleria'. Quando ha tentato di recuperare l'acconto, lo studio non rispondeva più.",
                    actions: [
                      "Prima diagnosi gratuita di 90 minuti con esame della documentazione (estratti AdER, contratti di finanziamento, situazione patrimoniale, dichiarazioni dei redditi degli ultimi 5 anni)",
                      "Verifica di compatibilità con gli strumenti del CCII: identificato il concordato minore (artt. 74-83 CCII) come strumento applicabile, data la natura imprenditoriale del debito e la presenza di un patrimonio aggredibile",
                      "Predisposizione del preventivo scritto: onorari professionali, contributo unificato del Tribunale di Milano, compenso dell'OCC, spese vive. Tutto dettagliato per voce, con possibilità di dilazione",
                      "Firma del mandato professionale solo dopo che Marco aveva letto, fatto domande e compreso ogni voce",
                    ],
                    outcome: {
                      time: "14 mesi dall'incarico all'omologazione",
                      money: "Debito ridotto da 320.000€ a 48.000€",
                      detail: "Procedura depositata in 6 settimane dalla firma. Misure protettive accordate dal Tribunale di Milano. Omologazione del piano dopo 14 mesi. Pagamento del 15% del debito originario in 5 rate annuali. Casa salvata. Marco ha riavviato un'attività di consulenza tecnica nel 2024.",
                    },
                    lesson: "Un acconto richiesto prima di una valutazione documentale scritta è quasi sempre un segnale di operatore non strutturato. La 'lettera d'intenti' generica non è un preventivo. Prima di firmare devi avere nero su bianco: strumento normativo applicabile, presupposti di legge, costi voce per voce, tempi indicativi.",
                  },
                  {
                    name: "Giulia",
                    role: "Pensionata, 67 anni",
                    location: "Napoli",
                    icon: FileText,
                    profile: "Pensione di 720€/mese. Debiti per 78.000€ accumulati in dieci anni tra cessioni del quinto sulla pensione, prestiti contratti per aiutare il figlio in difficoltà economica, cartelle TARI mai pagate e una piccola esposizione verso una società di recupero crediti. Nessun patrimonio immobiliare (vive in una casa di proprietà del figlio). Riceve atto di precetto per pignoramento sulla pensione.",
                    trap: "Presa dal panico chiama il primo numero trovato online. Lo 'studio' la convoca in una sede a Napoli (un appartamento privato presentato come ufficio professionale). Colloquio di 30 minuti senza esaminare i documenti. Le viene proposto di versare 2.800€ entro 7 giorni per 'spese di apertura pratica e diagnosi'. Promessa orale: 'lei non paga più nulla, le cancelliamo tutto'. Nessun preventivo scritto, nessun mandato professionale, nessuna identificazione del legale che avrebbe firmato gli atti. Giulia, dubbiosa, contatta altri due studi. Il secondo le promette '100% di cancellazione garantita' — promessa che nessun professionista serio può fare, dato che la legge stabilisce presupposti precisi e che è il Tribunale a decidere.",
                    actions: [
                      "Prima telefonata di orientamento: capito il profilo (assenza di patrimonio, reddito minimo, debiti misti) abbiamo indicato come potenzialmente applicabile l'esdebitazione del debitore incapiente ex art. 283 CCII",
                      "Secondo colloquio con esame documentale: estratto AdER, contratti di cessione del quinto, comunicazioni della società di recupero, documenti del nucleo familiare",
                      "Valutazione tecnica scritta consegnata in 12 giorni: presupposti soggettivi (meritevolezza, mancanza di precedente esdebitazione), presupposti oggettivi (assenza di utilità per i creditori), procedura da depositare, tempi stimati",
                      "Preventivo dettagliato: compenso dell'OCC (regolato da decreto ministeriale), spese vive del Tribunale di Napoli, contributo unificato, marche da bollo. Dilazione concordata in funzione della pensione",
                      "Predisposizione e deposito della domanda corredata da relazione particolareggiata dell'OCC",
                    ],
                    outcome: {
                      time: "11 mesi dal deposito al decreto",
                      money: "78.000€ cancellati integralmente",
                      detail: "Decreto di sospensione dell'esecuzione sulla pensione emesso dal Tribunale di Napoli entro 60 giorni dal deposito. Decreto di esdebitazione pronunciato dopo 11 mesi. Pensione integralmente nella disponibilità di Giulia. Obbligo di comunicazione sopravvenienze per i 4 anni successivi (come previsto dall'art. 283 CCII).",
                    },
                    lesson: "Il preventivo scritto e la valutazione tecnica firmata sono il filtro più semplice. La promessa di '100% garantito' è una bandiera rossa: nessun professionista può garantire l'esito di un procedimento giurisdizionale. Una sede in un appartamento privato senza targa professionale è un ulteriore segnale di operatore non strutturato.",
                  },
                  {
                    name: "Famiglia D.",
                    role: "Lavoratori dipendenti, 38 e 41 anni",
                    location: "Roma",
                    icon: ShieldAlert,
                    profile: "Marito e moglie entrambi dipendenti, due figli di 8 e 11 anni. Stipendi netti combinati di circa 2.700€/mese. Esposizione debitoria di 145.000€ accumulata in 7 anni: 65.000€ tra finanziarie (auto, mobili, prestiti personali con TAEG elevati), 35.000€ residuo mutuo prima casa con 4 rate insolute, 28.000€ in cartelle esattoriali (TARI, IMU, bollo auto), 17.000€ tra carte revolving e fido. Stipendio del marito già pignorato al 20% per finanziaria. Banca aveva minacciato decadenza dal beneficio del termine sul mutuo.",
                    trap: "Contattati via social da un 'patronato per il sovraindebitamento' trovato in un gruppo Facebook. Il referente si presentava come 'esperto di crisi familiari', vestito in modo professionale, ufficio luminoso. Propone un 'piano di emergenza' da 3.000€ versati immediatamente in contanti per 'bloccare tutto in 48 ore': stop al pignoramento, congelamento del mutuo, sospensione delle telefonate dei creditori. Quando la moglie chiede le credenziali professionali del referente, le mostra un tesserino plastificato di un'associazione di categoria — non una tessera di iscrizione all'Ordine Avvocati o all'Ordine Commercialisti. Verifica online: il nome del referente non risulta in alcun albo professionale.",
                    actions: [
                      "Prima telefonata di orientamento con cinque domande chiave (composizione del nucleo, esposizione totale stimata, stato del pignoramento, situazione del mutuo, tipologia dei creditori)",
                      "Secondo colloquio entro 4 giorni, in videocall: raccolta della documentazione necessaria — buste paga, contratti di finanziamento, atti notificati, estratti conto",
                      "Analisi documentale dell'OCC: verifica della qualifica di consumatore (debiti contratti per scopi personali/familiari), della meritevolezza, della sostenibilità di un piano di ristrutturazione",
                      "Identificazione del piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) come strumento applicabile, con mantenimento della prima casa garantendo il pagamento ai creditori privilegiati (banca mutuante)",
                      "Predisposizione del piano e della relazione particolareggiata dell'OCC, deposito in Tribunale di Roma",
                    ],
                    outcome: {
                      time: "9 mesi dal deposito all'omologazione",
                      money: "32.000€ pagati in 7 anni, casa salvata",
                      detail: "Sospensione del pignoramento sullo stipendio dal momento del deposito. Mutuo riconfermato con accordo con la banca. Piano omologato dal Tribunale di Roma dopo 9 mesi: rateazione di 380€/mese per 7 anni a copertura del debito privilegiato e di una quota dei chirografari. Al termine: esdebitazione del residuo non pagato.",
                    },
                    lesson: "Chi firma atti in Tribunale per procedure di sovraindebitamento deve essere iscritto a un Ordine professionale (Avvocati o Dottori Commercialisti). Patronati, associazioni di categoria, 'consulenti del debito' non hanno facoltà di firmare atti riservati ai professionisti abilitati. La verifica si fa in 30 secondi sul sito ufficiale dell'Ordine, cercando per nome e cognome.",
                  },
                ].map((c, i) => (
                  <Reveal key={c.name} delay={i * 100}>
                    <article className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                      {/* Header navy with large case number watermark */}
                      <header className="relative bg-navy text-white p-6 lg:p-8 overflow-hidden">
                        {/* Big case number watermark */}
                        <div className="absolute -right-4 -top-6 text-[180px] font-black text-white/5 leading-none tabular-nums select-none pointer-events-none" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="relative flex items-start gap-5">
                          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gold text-navy flex items-center justify-center shrink-0 shadow-card">
                            <c.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs uppercase tracking-wider text-gold font-bold mb-1">Caso {i + 1} · {c.location}</div>
                            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-1">{c.name}</h3>
                            <p className="text-white/70 text-sm">{c.role}</p>
                          </div>
                          {/* Quick outcome badges */}
                          <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                            <div className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 border border-white/15">
                              <div className="text-[9px] uppercase tracking-wider text-white/60 font-semibold">Tempi</div>
                              <div className="text-xs font-bold text-gold whitespace-nowrap">{c.outcome.time}</div>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div className="p-6 lg:p-8 space-y-5">
                        {/* Profile — full width */}
                        <div className="bg-muted/40 border border-border rounded-lg p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <FileSearch className="w-4 h-4 text-navy" />
                            <span className="text-xs font-bold uppercase tracking-wider text-navy">Profilo iniziale</span>
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed">{c.profile}</p>
                        </div>

                        {/* Trap + Actions — 2 columns side by side */}
                        <div className="grid lg:grid-cols-2 gap-5">
                          <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-lg p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <AlertTriangle className="w-4 h-4 text-destructive" />
                              <span className="text-xs font-bold uppercase tracking-wider text-destructive">La trappola in cui è caduto</span>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed">{c.trap}</p>
                          </div>

                          <div className="bg-success/5 border-l-4 border-success rounded-r-lg p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 className="w-4 h-4 text-success" />
                              <span className="text-xs font-bold uppercase tracking-wider text-success">Cosa abbiamo fatto noi</span>
                            </div>
                            <ol className="space-y-2.5">
                              {c.actions.map((a, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                                  <span className="font-bold text-success tabular-nums shrink-0 mt-px">{String(idx + 1).padStart(2, "0")}.</span>
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        {/* Outcome — full width navy box with stat cards */}
                        <div className="bg-navy text-white rounded-lg p-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/10 blur-2xl pointer-events-none" aria-hidden="true" />
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                              <Award className="w-5 h-5 text-gold" />
                              <span className="text-xs font-bold uppercase tracking-wider text-gold">L'esito</span>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mb-5">
                              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-gold/80" />
                                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Tempi</span>
                                </div>
                                <div className="font-bold text-gold text-lg leading-tight">{c.outcome.time}</div>
                              </div>
                              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Banknote className="w-4 h-4 text-gold/80" />
                                  <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Risultato economico</span>
                                </div>
                                <div className="font-bold text-gold text-lg leading-tight">{c.outcome.money}</div>
                              </div>
                            </div>
                            <p className="text-sm text-white/85 leading-relaxed">{c.outcome.detail}</p>
                          </div>
                        </div>

                        {/* Lesson — full width */}
                        <div className="bg-gold/10 border border-gold/40 rounded-lg p-5 flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-2">La lezione</div>
                            <p className="text-sm text-navy font-medium leading-relaxed">{c.lesson}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="text-xs text-foreground/55 italic mt-6 max-w-5xl">
                  Nomi e dettagli identificativi modificati per tutelare la riservatezza dei clienti. Cifre, tipologie di procedura, riferimenti normativi e tempi corrispondono alle pratiche effettivamente seguite dallo studio. Gli esiti dipendono dai presupposti normativi e fattuali della singola posizione e non costituiscono garanzia di risultati analoghi in situazioni diverse.
                </p>
              </Reveal>
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Confronto diretto</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Tutela Debito a confronto.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Mettiamo a confronto i nostri standard operativi con quelli che — purtroppo — si incontrano spesso nel settore. Verifica tu stesso.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="overflow-x-auto rounded-2xl border border-border shadow-card max-w-6xl">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-5 py-4 text-left font-semibold w-1/3">Aspetto</th>
                        <th className="px-5 py-4 text-left font-bold bg-gold text-navy">Tutela Debito</th>
                        <th className="px-5 py-4 text-left font-semibold">Operatori non strutturati</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((c, i) => (
                        <tr key={c.aspect} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                          <td className="px-5 py-4 font-semibold text-navy align-top">{c.aspect}</td>
                          <td className="px-5 py-4 align-top">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                              <span className="text-foreground/85">{c.us}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 align-top">
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                              <span className="text-foreground/70">{c.them}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </section>

          {/* TRUFFE */}
          <section className="py-14 lg:py-20 bg-navy text-white relative overflow-hidden">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Attenzione</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
                    Le 5 truffe più comuni nel settore.
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Il mondo dell'esdebitazione è un terreno fertile per operatori senza scrupoli. Riconoscere questi schemi è il primo passo per proteggerti. Se incontri uno di questi segnali — anche con noi — fermati e chiedi spiegazioni.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-5 max-w-6xl">
                {truffe.map((t, i) => (
                  <Reveal key={t.title} delay={i * 80}>
                    <div className="bg-white/5 border border-white/15 rounded-2xl p-6 lg:p-7 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <h3 className="font-bold text-white text-lg leading-tight pt-1.5">{t.title}</h3>
                      </div>
                      <p className="text-white/75 leading-relaxed text-sm">{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="mt-10 max-w-3xl bg-gold/15 border border-gold/40 rounded-2xl p-6 lg:p-7">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Hai dubbi su uno studio?</h4>
                      <p className="text-white/85 leading-relaxed">
                        Se uno studio (incluso il nostro) ha cercato di farti firmare qualcosa che ti suona strano, chiamaci. Ti diamo una seconda opinione gratuita, anche solo per orientarti. Numero diretto: <a href="tel:+390818671862" className="text-gold hover:text-gold-light font-semibold underline">081 18671862</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* WHY US (PROOF SECTION) */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa puoi verificare di noi</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Tutto quello che ti chiediamo di verificare degli altri, puoi verificarlo di noi.
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl">
                <Reveal direction="left">
                  <img
                    src={teamImg}
                    alt="Il team Tutela Debito"
                    className="rounded-2xl w-full aspect-[16/10] object-cover shadow-card"
                  />
                </Reveal>

                <Reveal delay={150}>
                  <div className="space-y-4">
                    {[
                      { icon: Building2, label: "Struttura organizzata", value: "4 dipartimenti, team di avvocati e commercialisti" },
                      { icon: Award, label: "Iscritti all'Ordine", value: "Avvocati Ordine di Napoli, ODCEC" },
                      { icon: Scale, label: "Sedi fisiche reali", value: "Napoli · Milano · Torino (indirizzi pubblicati)" },
                      { icon: FileText, label: "Preventivo scritto", value: "Sempre, prima dell'incarico, dettagliato per voce" },
                      { icon: CreditCard, label: "Diagnosi gratuita", value: "Senza acconti, senza condizioni" },
                      { icon: Clock, label: "Comunicazione", value: "Referente unico, aggiornamenti regolari, risposta in 24h" },
                      { icon: Users2, label: "Polizza professionale", value: "RC attiva, estremi forniti su richiesta" },
                      { icon: Eye, label: "Casi pubblici", value: "Procedure ricostruibili, sentenze citate" },
                    ].map((p, i) => (
                      <div key={p.label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                        <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <p.icon className="w-5 h-5 text-navy" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-0.5">{p.label}</div>
                          <div className="text-navy font-semibold text-sm">{p.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* BENEFICI — cosa ottieni con una scelta consapevole */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-14">
                <Reveal direction="left">
                  <div className="relative">
                    <img
                      src={abstractHopeBgImg}
                      alt="Vantaggi misurabili di una scelta consapevole"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-3 rounded-xl shadow-card max-w-[200px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider mb-0.5">Risultato concreto</div>
                      <div className="text-sm font-semibold leading-snug">Non promesse — vantaggi verificabili</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">I benefici concreti</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      Cosa ottieni scegliendo bene.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      Non sono promesse di risultato — quelle non si possono fare, dipendono dalla legge e dai presupposti del singolo caso. Sono <strong className="text-navy">vantaggi pratici e verificabili</strong> che derivano dal modo in cui lavora uno studio strutturato.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {[
                  {
                    icon: Clock,
                    title: "Tempi prevedibili",
                    desc: "Calendario scritto delle fasi: quando si raccolgono i documenti, quando si deposita, quando arriva la prima udienza. Niente sorprese.",
                  },
                  {
                    icon: FileText,
                    title: "Trasparenza totale sui costi",
                    desc: "Preventivo dettagliato voce per voce. Sai prima dell'incarico quanto pagherai, quando, in quante rate, per cosa.",
                  },
                  {
                    icon: ShieldAlert,
                    title: "Riservatezza professionale",
                    desc: "I tuoi dati sono protetti dal segreto professionale di avvocati e commercialisti. Familiari, datore di lavoro e creditori non vengono contattati senza il tuo via libera scritto.",
                  },
                  {
                    icon: Headphones,
                    title: "Un referente unico",
                    desc: "Una sola persona di riferimento conosce la tua pratica e ti aggiorna. Niente passaggi tra reparti, niente dover rispiegare ogni volta la situazione.",
                  },
                  {
                    icon: Scale,
                    title: "Sospensione delle azioni esecutive",
                    desc: "Dal deposito della procedura, dove la legge lo prevede, i pignoramenti in corso si fermano. Recuperi serenità subito, non al termine del percorso.",
                  },
                  {
                    icon: Users2,
                    title: "Doppio sguardo sulla pratica",
                    desc: "Avvocato e commercialista esaminano insieme la posizione. Niente angoli ciechi tra il piano legale e quello fiscale.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Documentazione conservata",
                    desc: "Tutti gli atti, le ricevute, le comunicazioni ai creditori vengono archiviati e ti restano a disposizione anche dopo la chiusura della procedura.",
                  },
                  {
                    icon: Award,
                    title: "Strumenti normativi corretti",
                    desc: "Lo strumento applicato è quello previsto dalla legge per il tuo caso (art. 67 CCII, art. 283 CCII, ecc.), non una formula generica scelta senza analisi.",
                  },
                  {
                    icon: Eye,
                    title: "Visibilità sull'andamento",
                    desc: "Aggiornamenti regolari sullo stato della pratica, accesso ai documenti depositati, possibilità di porre domande in qualunque fase.",
                  },
                ].map((b, i) => (
                  <Reveal key={b.title} delay={i * 60}>
                    <div className="bg-muted/40 rounded-2xl p-6 border border-border hover:border-gold hover:bg-white hover:shadow-card transition-all duration-300 h-full">
                      <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                        <b.icon className="w-5 h-5 text-navy" />
                      </div>
                      <h3 className="font-bold text-navy mb-2 leading-snug">{b.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ — answers to common doubts at the decision moment */}
          <section className="py-14 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Le domande che ti stai facendo</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Risposte concrete prima di firmare.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Le otto domande più frequenti di chi sta per scegliere uno studio. Risposte tecniche, senza giri di parole.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="max-w-3xl">
                  <Accordion type="single" collapsible className="space-y-3">
                    {[
                      {
                        q: "Quanto costa davvero una procedura completa?",
                        a: "Dipende dallo strumento e dalla complessità della pratica. In via indicativa, le voci sono: compenso del professionista (variabile in base alla procedura), spese vive (contributo unificato del Tribunale 43-518€, marche da bollo, eventuali compensi di OCC e gestore della crisi), eventuali consulenze tecniche. Lo studio serio ti consegna un preventivo scritto e dettagliato per ogni voce prima di farti firmare l'incarico. Se ti danno solo un 'costo unico tutto incluso' a voce, chiedi il dettaglio. In molti casi i costi sono dilazionabili."
                      },
                      {
                        q: "Ho già firmato con un altro studio e non sono soddisfatto. Posso cambiare?",
                        a: "Sì, ma con cautela. Il mandato professionale è revocabile in qualunque momento, ma se sono stati versati acconti potresti non recuperarli integralmente. Prima di disdire conviene: 1) richiedere per iscritto lo stato della pratica al primo studio; 2) farsi rilasciare una copia di tutti gli atti depositati; 3) farsi consegnare la documentazione originale. Solo dopo si valuta il passaggio. Chiamaci: ti aiutiamo a leggere la tua situazione, gratis."
                      },
                      {
                        q: "È normale che mi chiedano un acconto al primo incontro?",
                        a: "No. Uno studio serio fa la diagnosi gratuitamente. L'incarico (con relativo acconto, se previsto) viene firmato DOPO che ti è stata consegnata una valutazione scritta e un preventivo dettagliato — non prima. Se al primo colloquio ti chiedono soldi 'per aprire la pratica' o 'spese di studio' senza averti dato nulla per iscritto, alzati e vattene."
                      },
                      {
                        q: "Come faccio a verificare l'iscrizione all'Ordine di un professionista?",
                        a: "Per gli avvocati: vai sul sito dell'Ordine degli Avvocati della città dichiarata e cerca per nome/cognome (es. ordineavvocatinapoli.it). Per i commercialisti: sito dell'ODCEC competente. La verifica è online, gratuita, richiede 30 secondi. Se la persona non risulta iscritta, non può legittimamente svolgere attività riservata (deposito atti, patrocinio in udienza)."
                      },
                      {
                        q: "Posso confrontare due preventivi di studi diversi?",
                        a: "Sì, è anzi consigliabile. Quando confronti i preventivi non guardare solo il totale: verifica che entrambi specifichino le stesse voci (strumento applicato, spese vive, prevedibili spese accessorie, modalità di pagamento). A volte un preventivo 'più basso' nasconde costi non inclusi. Se ti porti due preventivi qui, te li leggiamo insieme, senza impegno."
                      },
                      {
                        q: "Quanto tempo serve dall'incarico alla risoluzione del debito?",
                        a: "Variabile per ogni procedura. Dalla raccolta documentale al deposito in Tribunale tipicamente 1-3 mesi; dall'omologa alla chiusura della procedura 1-5 anni a seconda dello strumento (esdebitazione dell'incapiente è generalmente più breve, concordato minore e liquidazione controllata richiedono più tempo). Diffida di chi promette 'tutto chiuso in 6 mesi': nella maggioranza dei casi non è realistico."
                      },
                      {
                        q: "Cosa succede se la procedura viene rigettata?",
                        a: "Dipende dal motivo. Se il rigetto è per insufficienza documentale o errori formali, talvolta si può ripresentare la domanda. Se è per mancanza dei presupposti di legge (es. assenza di stato di sovraindebitamento, mancanza di meritevolezza), il rigetto è di norma definitivo per quello strumento. Per questo la diagnosi iniziale deve essere accurata: presentare una domanda destinata al rigetto è uno spreco di tempo e denaro."
                      },
                      {
                        q: "Posso chiamarvi solo per una seconda opinione, anche se non vi affido la pratica?",
                        a: "Sì. Non vendiamo consulenze a chi non vuole comprarle. Se hai dubbi sulla proposta di un altro studio — preventivo, strategia, tempistiche — chiamaci. Te la leggiamo insieme, ti spieghiamo cosa significano le voci tecniche, ti diciamo se ti sembra ragionevole. Senza costi, senza pressione. Numero diretto: 081 18671862."
                      },
                    ].map((f, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="bg-muted/40 rounded-xl border border-border px-5 lg:px-6"
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

          {/* PROSSIMI PASSI — cosa succede ora */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-14">
                <Reveal>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa succede ora</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      I prossimi passi, uno per uno.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-4">
                      Se decidi di contattarci per una seconda valutazione — anche solo per leggere insieme il preventivo che ti ha dato un altro studio — ecco esattamente cosa succederà nei prossimi giorni.
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      <strong className="text-navy">Nessuna sorpresa, nessuna pressione</strong>: ogni fase ha un tempo e un risultato concreto.
                    </p>
                  </div>
                </Reveal>
                <Reveal direction="right">
                  <div className="relative">
                    <img
                      src={handshakeImg}
                      alt="Un percorso strutturato dalla prima chiamata alla firma dell'incarico"
                      className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card border border-border"
                    />
                    <div className="absolute -bottom-4 -left-4 bg-white border border-border px-4 py-3 rounded-xl shadow-card max-w-[200px] hidden md:block">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-0.5">5 passi chiari</div>
                      <div className="text-sm font-semibold text-navy leading-snug">Dalla prima chiamata alla firma</div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="relative max-w-4xl">
                {/* Vertical connector line */}
                <div className="absolute left-7 top-12 bottom-12 w-px bg-gradient-to-b from-gold via-gold-dark to-gold opacity-40 hidden sm:block" aria-hidden="true" />

                <div className="space-y-5">
                  {[
                    {
                      n: "01",
                      icon: Phone,
                      duration: "Entro 24 ore",
                      title: "Ti richiamiamo",
                      desc: "Compili il modulo o ci telefoni. Entro 24 ore lavorative un nostro referente ti ricontatta per fissare un breve colloquio telefonico (15 minuti circa) e capire la natura della tua situazione.",
                    },
                    {
                      n: "02",
                      icon: FileSearch,
                      duration: "Entro 1 settimana",
                      title: "Secondo colloquio approfondito",
                      desc: "Fissiamo un secondo incontro — in videocall o in una delle tre sedi (Napoli, Milano, Torino), come preferisci. In quest'occasione raccogliamo i documenti utili: cartelle, contratti di finanziamento, eventuali atti di precetto o pignoramenti, dichiarazioni dei redditi.",
                    },
                    {
                      n: "03",
                      icon: FileText,
                      duration: "Entro 10-15 giorni",
                      title: "Valutazione tecnica scritta",
                      desc: "Analizziamo la documentazione e ti consegniamo una valutazione tecnica scritta: quale strumento normativo può essere applicato, con quali presupposti, quali sono i tempi indicativi, quali i costi previsti per ogni voce. Tutto nero su bianco.",
                    },
                    {
                      n: "04",
                      icon: HelpCircle,
                      duration: "Quanto ti serve",
                      title: "Decidi con calma",
                      desc: "Prendi il tempo che ti serve. Ti consigliamo di confrontare la nostra proposta con quella di altri studi che hai eventualmente già contattato. Se hai dubbi, chiediamo che ce li poniate: rispondiamo a domande tecniche anche se poi non scegli noi.",
                    },
                    {
                      n: "05",
                      icon: Scale,
                      duration: "Solo se decidi di procedere",
                      title: "Firma dell'incarico e avvio",
                      desc: "Se decidi di affidarci la pratica, firmiamo il mandato professionale con il preventivo allegato. Iniziamo la fase operativa: raccolta degli ulteriori documenti necessari, redazione degli atti, deposito in Tribunale. Da questo momento sei seguito da un referente unico.",
                    },
                  ].map((step, i) => (
                    <Reveal key={step.n} delay={i * 100}>
                      <div className="relative bg-white rounded-2xl border border-border shadow-card hover:border-gold transition-colors duration-300 p-6 lg:p-7 flex items-start gap-5">
                        <div className="relative z-10 w-14 h-14 rounded-full bg-navy text-gold flex items-center justify-center shrink-0 font-bold border-4 border-muted/40">
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
                          <p className="text-foreground/75 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* What we don't do */}
              <Reveal>
                <div className="mt-12 max-w-4xl bg-white border border-border rounded-2xl p-7 lg:p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    Cosa NON succederà mai
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Non ti chiederemo soldi prima di averti consegnato una valutazione scritta.",
                      "Non ti faremo pressione per firmare subito o per 'cogliere un'offerta'.",
                      "Non ti prometteremo cancellazioni totali o percentuali garantite.",
                      "Non contatteremo i tuoi creditori, datore di lavoro o familiari senza il tuo permesso scritto.",
                      "Non firmeremo atti se la situazione non rientra nei presupposti previsti dalla legge — te lo diremo apertamente.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground/80">
                        <XCircle className="w-4 h-4 text-destructive mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  <p className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Prendi la tua decisione con consapevolezza</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                    Una scelta come questa<br />
                    <span className="text-gold">non si fa di fretta.</span>
                  </h2>
                  <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
                    Se hai dubbi, domande, o vuoi che un nostro professionista ti aiuti a leggere il preventivo di un altro studio — chiamaci. Senza impegno, senza costi.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <Button onClick={openContact} size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold h-13 px-8">
                      Voglio una seconda opinione <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href="tel:+390818671862">
                      <Button variant="outline" size="lg" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-bold h-13 px-8">
                        <Phone className="mr-2 w-4 h-4" /> 081 18671862
                      </Button>
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-white/70">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Nessun impegno
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Nessun costo
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Risposta in 24h
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

export default PostConsulenza;
