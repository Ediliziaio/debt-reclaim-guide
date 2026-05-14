import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDNumbers from "@/components/TDNumbers";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import Reveal from "@/components/Reveal";
import { Scale, Briefcase, Heart, Target, Users2, Building2, ShieldCheck, Award } from "lucide-react";
import avvRossiImg from "@/assets/avv-armando-rossi.jpg";
import teamImg from "@/assets/team-tutela-debito.jpg";
import authorityImg from "@/assets/authority-legal.jpg";

const values = [
  {
    icon: Scale,
    title: "Strumenti previsti dalla legge",
    desc: "Operiamo esclusivamente con gli strumenti normativi disciplinati dalla L. 3/2012, dal Codice della Crisi (D.lgs. 14/2019) e dalle leggi tributarie. Nessuna scorciatoia.",
  },
  {
    icon: Heart,
    title: "Ascolto della persona",
    desc: "Affrontare un debito è anche un peso personale. Il primo colloquio serve a capire la situazione e — altrettanto importante — a darti un'idea concreta di cosa puoi aspettarti.",
  },
  {
    icon: Target,
    title: "Approccio multidisciplinare",
    desc: "Avvocati e commercialisti valutano insieme la posizione: il debito ha quasi sempre una dimensione legale E una fiscale che vanno affrontate in modo coordinato.",
  },
  {
    icon: Briefcase,
    title: "Trasparenza professionale",
    desc: "Preventivo scritto prima dell'incarico, aggiornamenti regolari, accesso alla documentazione. Niente formule promozionali, solo informazioni.",
  },
];

const competenze = [
  {
    icon: Scale,
    title: "Avvocati",
    desc: "Specializzati in diritto della crisi d'impresa, sovraindebitamento, esecuzioni, contenzioso tributario e bancario.",
  },
  {
    icon: Briefcase,
    title: "Dottori Commercialisti",
    desc: "Esperti in pianificazione fiscale, ristrutturazione del debito, composizione negoziata e procedure concorsuali.",
  },
  {
    icon: Users2,
    title: "Consulenti del lavoro",
    desc: "A supporto per la gestione di rapporti di lavoro pendenti e per gli aspetti previdenziali e contributivi.",
  },
  {
    icon: Building2,
    title: "OCC accreditati",
    desc: "Collaborazioni stabili con Organismi di Composizione della Crisi per il deposito e la gestione delle procedure di sovraindebitamento.",
  },
];

const credentials = [
  "Iscritto all'Ordine degli Avvocati di Napoli",
  "Patrocinante in Cassazione",
  "Specializzazione in diritto della crisi d'impresa e sovraindebitamento",
  "Esperienza pluriennale in contenzioso tributario e bancario",
];

const ChiSiamo = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      <Helmet>
        <title>Chi siamo | Tutela Debito — Studio legale e fiscale</title>
        <meta name="description" content="Tutela Debito è uno studio legale e fiscale strutturato come azienda professionale, specializzato in esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario." />
        <link rel="canonical" href="https://tuteladebito.it/chi-siamo" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero with founder photo */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
                <div>
                  <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Chi siamo</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                    Un'<span className="text-gold">azienda legale</span> dedicata all'esdebitazione e alla crisi d'impresa.
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Tutela Debito è uno studio legale e fiscale strutturato come azienda professionale: dipartimenti specializzati, processi definiti, team multidisciplinare. Operiamo in esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario — tre aree che spesso si intrecciano e richiedono competenze combinate.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={teamImg}
                    alt="Il team dello studio Tutela Debito"
                    className="rounded-2xl w-full aspect-[4/5] object-cover shadow-soft border-2 border-white/10"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white text-navy p-4 rounded-xl shadow-card max-w-[220px] hidden md:block">
                    <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold mb-1">Studio Tutela Debito</div>
                    <div className="font-bold text-sm leading-snug">Avvocati · Commercialisti</div>
                    <div className="text-xs text-foreground/60">Esdebitazione · Crisi d'impresa</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Il nostro approccio</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                    Perché serve un'analisi tecnica, non promesse.
                  </h2>
                  <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                    <p>
                      Chi si trova con debiti che non riesce a gestire incontra spesso messaggi semplici e accattivanti: "ti cancelliamo i debiti", "soluzione garantita", "soddisfatti o rimborsati". La realtà professionale è diversa.
                    </p>
                    <p>
                      La normativa italiana — Legge 3/2012 prima e Codice della Crisi d'Impresa poi — prevede strumenti puntuali per chi si trova in stato di sovraindebitamento o di crisi d'impresa. Ognuno di questi strumenti ha presupposti precisi, una procedura definita e termini specifici.
                    </p>
                    <p>
                      Per questo il nostro lavoro non comincia con una promessa, ma con un'analisi: quali sono i debiti, chi sono i creditori, qual è il reddito, qual è il patrimonio, c'è un'attività d'impresa, ci sono azioni esecutive in corso. Solo dopo questa diagnosi possiamo dire se e quale procedura può essere proposta.
                    </p>
                    <p>
                      Quando lo strumento c'è, lo utilizziamo seguendo le procedure di legge. Quando non c'è, lo diciamo. Riteniamo che la trasparenza sia parte integrante del nostro lavoro.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <TDNumbers />

          {/* L'organizzazione dello studio */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-12">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">L'organizzazione</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Uno studio strutturato come un'azienda professionale.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Non siamo lo studio di un singolo professionista. Tutela Debito è organizzato in dipartimenti specializzati che lavorano in modo coordinato su ogni pratica: ognuno porta competenze specifiche, tutti seguono lo stesso metodo.
                  </p>
                </div>
              </Reveal>

              {/* Departments grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mb-16">
                {[
                  { icon: Scale, title: "Dipartimento Legale", desc: "Avvocati specializzati in diritto della crisi, sovraindebitamento ed esecuzioni." },
                  { icon: Briefcase, title: "Dipartimento Fiscale", desc: "Commercialisti che curano analisi tributaria, contenzioso AdER e piani fiscali." },
                  { icon: Building2, title: "Crisi d'Impresa", desc: "Team dedicato a composizione negoziata, concordato, ristrutturazione." },
                  { icon: Users2, title: "Assistenza clienti", desc: "Personale di staff che gestisce documentazione, scadenze e comunicazioni." },
                ].map((d, i) => (
                  <Reveal key={d.title} delay={i * 100} direction="scale">
                    <div className="bg-muted/40 rounded-2xl p-6 border border-border hover:border-gold hover:bg-white hover:shadow-card transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center mb-4">
                        <d.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-navy mb-2 leading-snug">{d.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{d.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Managing partner — small card, not the whole focus */}
              <Reveal>
                <div className="max-w-5xl">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Direzione</p>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy mb-8 leading-tight">
                    Chi dirige lo studio.
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center bg-muted/40 rounded-2xl p-6 lg:p-10 border border-border max-w-5xl">
                <Reveal direction="left">
                  <img
                    src={avvRossiImg}
                    alt="Avv. Armando Rossi — Direzione dello studio"
                    className="rounded-2xl w-full max-w-[260px] aspect-[4/5] object-cover shadow-card"
                  />
                </Reveal>

                <Reveal delay={150}>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-dark font-bold mb-1">Direzione dello studio</div>
                    <h3 className="text-2xl font-bold text-navy mb-1">Avv. Armando Rossi</h3>
                    <p className="text-foreground/60 text-sm mb-5">Responsabile dello studio</p>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Coordina i dipartimenti e supervisiona la gestione complessiva dello studio. Si occupa in prima persona dei casi a maggiore complessità e mantiene i rapporti istituzionali con Tribunali e Ordini professionali.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
                      {credentials.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-sm text-foreground/75">
                          <Award className="w-3.5 h-3.5 text-gold-dark mt-1 shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Team section with group photo */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Il team</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                    Una squadra di professionisti al tuo fianco.
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Lo studio è composto da avvocati, dottori commercialisti, consulenti del lavoro e personale di staff. Ogni pratica viene seguita dalle figure più adatte, secondo un metodo condiviso e procedure interne strutturate.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="relative rounded-2xl overflow-hidden shadow-primary border border-border max-w-5xl">
                  <img
                    src={teamImg}
                    alt="Il team dello Studio Tutela Debito"
                    className="w-full aspect-[16/10] object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-6 lg:p-8 text-white">
                    <div className="max-w-2xl">
                      <p className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Lo studio al completo</p>
                      <p className="text-lg lg:text-xl font-semibold leading-tight">
                        Avvocati e commercialisti uniti da un unico metodo di lavoro.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Competenze grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                {competenze.map((c, i) => (
                  <Reveal key={c.title} delay={i * 100} direction="scale">
                    <div className="bg-white rounded-2xl p-7 border border-border hover:border-gold hover:shadow-card transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center mb-4">
                        <c.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2">{c.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 mb-12">
                <Reveal direction="left">
                  <img
                    src={authorityImg}
                    alt="Analisi documentale dei debiti"
                    className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card"
                  />
                </Reveal>
                <Reveal delay={150}>
                  <div>
                    <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa ci guida</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                      I quattro principi del nostro lavoro.
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      Non sono slogan da brochure: sono il modo in cui gestiamo ogni pratica, dalla prima telefonata all'ultima udienza.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 80}>
                    <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                      <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                        <v.icon className="w-5 h-5 text-navy" />
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{v.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Riservatezza box */}
          <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-4xl mx-auto bg-gold/10 border-l-4 border-gold rounded-r-xl p-7 flex items-start gap-4">
                  <ShieldCheck className="w-7 h-7 text-gold-dark mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Tutela e riservatezza</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Le informazioni che ci affidi vengono trattate ai sensi del GDPR e nel rispetto del segreto professionale che vincola avvocati e commercialisti. Nessuna comunicazione esterna senza tua autorizzazione scritta.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <TDFinalCTA onOpenContact={openContact} />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default ChiSiamo;
