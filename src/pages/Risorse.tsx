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
import { FileText, Download, Clock, Calendar, User, ArrowRight, BookOpen, Users2, Scale, Building2, CheckCircle2, Sparkles, Phone, Mail, Tag, TrendingUp, Bookmark } from "lucide-react";
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
        <title>Risorse, guide e blog su esdebitazione e crisi d'impresa | Tutela Debito</title>
        <meta name="description" content="Approfondimenti, guide pratiche e articoli aggiornati su esdebitazione, sovraindebitamento, cartelle esattoriali, crisi d'impresa e contenzioso tributario. Redatti dallo studio." />
        <meta name="keywords" content="blog esdebitazione, guide sovraindebitamento, articoli crisi d'impresa, cartella esattoriale, pignoramento, composizione negoziata, rottamazione" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tuteladebito.it/risorse" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Risorse, guide e blog | Tutela Debito" />
        <meta property="og:description" content="Approfondimenti tecnici e guide pratiche su esdebitazione, sovraindebitamento e crisi d'impresa." />
        <meta property="og:url" content="https://tuteladebito.it/risorse" />
        <meta property="og:image" content="https://tuteladebito.it/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": "https://tuteladebito.it/risorse#blog",
          "name": "Risorse Tutela Debito",
          "description": "Guide e approfondimenti su esdebitazione, sovraindebitamento e crisi d'impresa.",
          "url": "https://tuteladebito.it/risorse",
          "inLanguage": "it-IT",
          "publisher": {
            "@type": "Organization",
            "name": "Tutela Debito",
            "url": "https://tuteladebito.it",
          },
          "blogPost": articles.map((a) => ({
            "@type": "BlogPosting",
            "headline": a.title,
            "url": `https://tuteladebito.it/risorse/${a.slug}`,
            "datePublished": a.date,
            "author": { "@type": "Person", "name": a.author },
            "articleSection": a.category,
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tuteladebito.it/" },
            { "@type": "ListItem", "position": 2, "name": "Risorse", "item": "https://tuteladebito.it/risorse" },
          ],
        })}</script>
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
              <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Blog</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
                  Articoli e approfondimenti.
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Aggiornamenti normativi, analisi di istituti, casi pratici e note operative.
                </p>
              </div>

              <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 max-w-7xl mx-auto">
                {/* Articles column */}
                <div className="min-w-0">
                  {/* Filters */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                          filter === c
                            ? "bg-navy text-white"
                            : "bg-muted text-navy hover:bg-gold/15"
                        }`}
                      >
                        {c} <span className="text-xs opacity-70 ml-1">({c === "Tutti" ? articles.length : articles.filter((a) => a.category === c).length})</span>
                      </button>
                    ))}
                  </div>

                  {/* Featured article — first one bigger */}
                  {filtered.length > 0 && filter === "Tutti" && (
                    <Link
                      to={`/risorse/${filtered[0].slug}`}
                      className="group block bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card mb-6"
                    >
                      <div className="grid sm:grid-cols-[1fr_1.3fr] gap-0">
                        <div className={`aspect-video sm:aspect-[3/4] relative overflow-hidden ${!filtered[0].coverImage ? `bg-gradient-to-br ${filtered[0].cover}` : ""}`}>
                          {filtered[0].coverImage ? (
                            <>
                              <img src={filtered[0].coverImage} alt={filtered[0].title} loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
                              <div className={`absolute inset-0 bg-gradient-to-br ${filtered[0].cover} mix-blend-multiply opacity-70`} />
                            </>
                          ) : (
                            <BookOpen className="w-12 h-12 text-white/70 absolute inset-0 m-auto" />
                          )}
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gold text-navy text-xs font-bold uppercase tracking-wider z-10 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> In evidenza
                          </span>
                        </div>
                        <div className="p-6 lg:p-8 flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-2">{filtered[0].category}</span>
                          <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3 leading-tight group-hover:text-gold-dark">{filtered[0].title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{filtered[0].excerpt}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-3 text-xs text-foreground/60">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {filtered[0].date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {filtered[0].readTime}</span>
                            </div>
                            <span className="text-sm font-semibold text-navy group-hover:text-gold-dark flex items-center gap-1">
                              Leggi <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Articles grid */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {(filter === "Tutti" ? filtered.slice(1) : filtered).map((a) => (
                      <Link
                        key={a.slug}
                        to={`/risorse/${a.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card flex flex-col"
                      >
                        <div className={`aspect-[16/9] relative overflow-hidden ${!a.coverImage ? `bg-gradient-to-br ${a.cover}` : ""}`}>
                          {a.coverImage ? (
                            <>
                              <img src={a.coverImage} alt={a.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                              <div className={`absolute inset-0 bg-gradient-to-br ${a.cover} mix-blend-multiply opacity-70`} />
                            </>
                          ) : (
                            <BookOpen className="w-12 h-12 text-white/70 absolute inset-0 m-auto" />
                          )}
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-navy text-xs font-semibold z-10">
                            {a.category}
                          </span>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-xs text-foreground/60 mb-2">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                          </div>
                          <h3 className="text-base font-bold text-navy mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1 line-clamp-3">{a.excerpt}</p>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
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

                {/* Sidebar */}
                <aside className="lg:sticky lg:top-24 space-y-5 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
                  {/* CTA card */}
                  <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-5 lg:p-6 shadow-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gold/15 blur-2xl pointer-events-none" aria-hidden="true" />
                    <div className="relative">
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/15 text-gold rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-gold/30">
                        <Sparkles className="w-3 h-3" />
                        Diagnosi gratuita
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-tight">Hai bisogno di una valutazione del tuo caso?</h3>
                      <p className="text-white/75 text-sm leading-relaxed mb-4">
                        I contenuti del blog sono informativi. Per il tuo caso specifico serve un colloquio.
                      </p>
                      <Button
                        onClick={openContact}
                        className="w-full bg-gold hover:bg-gold-dark text-navy font-bold mb-2"
                      >
                        Richiedi diagnosi <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <a href="tel:+390818671862" className="flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-gold mt-2">
                        <Phone className="w-3.5 h-3.5" />
                        081 18671862
                      </a>
                    </div>
                  </div>

                  {/* Quiz card */}
                  <div className="bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/40 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-gold-dark" />
                      <h3 className="font-bold text-navy text-sm">Test online</h3>
                    </div>
                    <p className="text-xs text-foreground/75 leading-relaxed mb-3">
                      Posso accedere a una procedura di esdebitazione? Scoprilo in 2 minuti, 6 domande.
                    </p>
                    <Link to="/quiz">
                      <Button
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy hover:text-white font-semibold text-xs h-9"
                      >
                        Fai il test <ArrowRight className="ml-1.5 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>

                  {/* Most read */}
                  <div className="bg-white border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-gold-dark" />
                      <h3 className="font-bold text-navy text-sm">Più letti</h3>
                    </div>
                    <ol className="space-y-3">
                      {articles.slice(0, 4).map((a, i) => (
                        <li key={a.slug}>
                          <Link
                            to={`/risorse/${a.slug}`}
                            className="group flex items-start gap-3 hover:bg-muted/60 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                          >
                            <div className="shrink-0 w-7 h-7 rounded-full bg-navy text-gold flex items-center justify-center text-xs font-bold tabular-nums">
                              {i + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold leading-tight mb-0.5">
                                {a.category}
                              </div>
                              <div className="text-sm font-semibold text-navy leading-snug group-hover:text-gold-dark line-clamp-2">
                                {a.title}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Categories with counts */}
                  <div className="bg-white border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-gold-dark" />
                      <h3 className="font-bold text-navy text-sm">Esplora per categoria</h3>
                    </div>
                    <ul className="space-y-1">
                      {categories.filter((c) => c !== "Tutti").map((cat) => {
                        const count = articles.filter((a) => a.category === cat).length;
                        const isActive = filter === cat;
                        return (
                          <li key={cat}>
                            <button
                              onClick={() => setFilter(cat)}
                              className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted text-sm transition-colors text-left ${
                                isActive ? "bg-gold/10 text-gold-dark font-semibold" : "text-foreground/75 hover:text-navy"
                              }`}
                            >
                              <span className="font-medium">{cat}</span>
                              <span className="text-xs text-foreground/50 tabular-nums">{count}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Newsletter / contact card */}
                  <div className="bg-muted/40 border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-gold-dark" />
                      <h3 className="font-bold text-navy text-sm">Non sai da dove iniziare?</h3>
                    </div>
                    <p className="text-xs text-foreground/75 leading-relaxed mb-3">
                      Scrivici una mail con la tua situazione. Ti risponde un professionista entro 24h.
                    </p>
                    <a href="mailto:info@studioavvocatorossi.it" className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark group">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="break-all text-xs">info@studioavvocatorossi.it</span>
                    </a>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-white border border-border rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Bookmark className="w-4 h-4 text-gold-dark" />
                      <h3 className="font-bold text-navy text-sm">Nota</h3>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Tutti gli articoli sono redatti da professionisti dello studio. Hanno carattere informativo e non sostituiscono una consulenza personalizzata.
                    </p>
                  </div>
                </aside>
              </div>
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
