import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { Button } from "@/components/ui/button";
import { FileText, Download, Clock, Calendar, User, ArrowRight, BookOpen, Users2, Scale, Building2, CheckCircle2 } from "lucide-react";
import { articles } from "@/data/articles";

const guides = [
  {
    icon: Users2,
    title: "Procedure di sovraindebitamento",
    subtitle: "Per privati e ex-imprenditori",
    desc: "Una panoramica completa degli strumenti previsti dalla L. 3/2012 e dal Codice della Crisi per le persone fisiche.",
    pages: 32,
    topics: [
      "Piano del consumatore (artt. 67-73 CCII)",
      "Liquidazione controllata",
      "Esdebitazione dell'incapiente",
      "Casi pratici e modulistica",
    ],
  },
  {
    icon: Scale,
    title: "Cartelle esattoriali: i 60 giorni",
    subtitle: "Per chi ha ricevuto un atto AdER",
    desc: "Checklist operativa: verifica della notifica, della prescrizione, degli importi e valutazione delle alternative.",
    pages: 18,
    topics: [
      "Tabella prescrizioni per tributo",
      "Vizi di notifica più frequenti",
      "Ricorso vs. rottamazione vs. sovraindebitamento",
      "Modello di istanza in autotutela",
    ],
  },
  {
    icon: Building2,
    title: "Composizione negoziata della crisi",
    subtitle: "Per imprenditori e PMI",
    desc: "Lo strumento riservato e stragiudiziale del CCII spiegato passo dopo passo, con riferimenti normativi e casi esemplificativi.",
    pages: 28,
    topics: [
      "Quando attivarla (indicatori di crisi)",
      "Ruolo dell'esperto e procedura",
      "Misure protettive del patrimonio",
      "Esiti e accordi di ristrutturazione",
    ],
  },
];

const categories = ["Tutti", "Privati", "Imprese", "Tributario", "Procedure"];

const Risorse = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [filter, setFilter] = useState<string>("Tutti");
  const openContact = () => setIsContactOpen(true);

  const filtered = filter === "Tutti" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <Helmet>
        <title>Risorse e blog | Tutela Debito</title>
        <meta name="description" content="Approfondimenti, guide e articoli su esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario." />
        <link rel="canonical" href="https://tuteladebito.it/risorse" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl">
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Risorse</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Approfondimenti tecnici e <span className="text-gold">guide pratiche</span>.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Articoli e guide redatti dai professionisti dello studio. Contenuti di carattere informativo: non costituiscono parere legale o fiscale e non sostituiscono una consulenza personalizzata.
                </p>
              </div>
            </div>
          </section>

          {/* Guides */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10">
                <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Guide scaricabili</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
                  Documenti operativi su singoli temi.
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  PDF gratuiti, redatti dai professionisti dello studio. Per riceverli compila il modulo: ti vengono inviati via email entro 24 ore.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {guides.map((g) => (
                  <article
                    key={g.title}
                    className="group bg-white rounded-2xl border border-border overflow-hidden flex flex-col hover:border-gold hover:shadow-card"
                  >
                    {/* Header */}
                    <div className="bg-navy p-7 text-white relative">
                      <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold text-navy text-xs font-bold uppercase tracking-wider">
                        <FileText className="w-3 h-3" />
                        PDF · {g.pages} pag.
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                        <g.icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-lg font-bold leading-snug mb-1.5">{g.title}</h3>
                      <p className="text-sm text-white/60">{g.subtitle}</p>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-foreground/70 leading-relaxed mb-5">{g.desc}</p>

                      <div className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-3">Cosa trovi dentro</div>
                      <ul className="space-y-2 mb-6 flex-1">
                        {g.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={openContact}
                        className="bg-gold hover:bg-gold-dark text-navy font-semibold w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Richiedi la guida gratuita
                      </Button>
                      <p className="text-xs text-center text-foreground/50 mt-3">
                        🔒 Riservato · Senza impegno
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Blog */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10">
                <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Blog</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
                  Articoli e approfondimenti.
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Aggiornamenti normativi, analisi di istituti, casi pratici e note operative.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      filter === c
                        ? "bg-navy text-white"
                        : "bg-muted text-navy hover:bg-gold/15"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/risorse/${a.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card flex flex-col"
                  >
                    <div className={`aspect-[16/9] relative overflow-hidden ${!a.coverImage ? `bg-gradient-to-br ${a.cover}` : ""}`}>
                      {a.coverImage ? (
                        <>
                          <img src={a.coverImage} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${a.cover} mix-blend-multiply opacity-70`} />
                        </>
                      ) : (
                        <BookOpen className="w-12 h-12 text-white/70 absolute inset-0 m-auto" />
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-navy text-xs font-semibold z-10">
                        {a.category}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{a.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-xs text-foreground/60 flex items-center gap-1">
                          <User className="w-3 h-3" /> {a.author}
                        </span>
                        <span className="text-sm font-semibold text-navy group-hover:text-gold-dark flex items-center gap-1">
                          Leggi <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-foreground/60 py-12">Nessun articolo in questa categoria.</p>
              )}
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

export default Risorse;
