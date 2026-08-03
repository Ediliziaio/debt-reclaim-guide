import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, ChevronRight } from "lucide-react";
import { articlesMeta, coverSources, lastModifiedISO } from "@/data/articles";
import { CATEGORY_HUBS, getCategoryHub } from "@/data/categories";

const SITE = "https://www.tuteladebito.it";

/**
 * Hub di categoria: la pagina che compete sulla query larga ("debiti impresa",
 * "pignoramento difese") e raccoglie sotto di sé il cluster di articoli.
 * Ha testo originale proprio — un semplice elenco di link non si posiziona e
 * non dà a un motore di risposta niente da citare.
 */
const CategoriaRisorse = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const hub = slug ? getCategoryHub(slug) : undefined;
  if (!hub) return <Navigate to="/risorse" replace />;

  const articles = articlesMeta.filter((a) => a.category === hub.category);
  const url = `${SITE}/risorse/categoria/${hub.slug}`;
  const updated = articles
    .map((a) => lastModifiedISO(a))
    .filter(Boolean)
    .sort()
    .pop();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": url,
      "url": url,
      "name": hub.heading,
      "description": hub.metaDescription,
      "abstract": hub.answer,
      "inLanguage": "it-IT",
      "isPartOf": { "@id": `${SITE}/#website` },
      "publisher": { "@id": `${SITE}/#organization` },
      ...(updated ? { "dateModified": updated } : {}),
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".td-answer", "h1"] },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": articles.length,
        "itemListElement": articles.map((a, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${SITE}/risorse/${a.slug}`,
          "name": a.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
        { "@type": "ListItem", "position": 2, "name": "Risorse", "item": `${SITE}/risorse` },
        { "@type": "ListItem", "position": 3, "name": hub.heading, "item": url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "inLanguage": "it-IT",
      "mainEntity": hub.faq.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={`${hub.seoTitle} | Tutela Debito`}
        description={hub.metaDescription}
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical={url}
        ogTitle={hub.heading}
        jsonLd={schemas}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          <section className="bg-white border-b border-border py-10 lg:py-14">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <nav aria-label="Percorso di navigazione" className="mb-4">
                  <ol className="flex items-center gap-1.5 flex-wrap text-sm text-foreground/55">
                    <li><Link to="/" className="hover:text-gold-dark">Home</Link></li>
                    <li aria-hidden="true">›</li>
                    <li><Link to="/risorse" className="hover:text-gold-dark">Risorse</Link></li>
                    <li aria-hidden="true">›</li>
                    <li className="text-foreground/75 font-medium" aria-current="page">{hub.heading}</li>
                  </ol>
                </nav>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
                  {hub.heading}
                </h1>

                <div className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-6 mb-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-gold-dark" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gold-dark m-0">
                      Risposta rapida
                    </h2>
                  </div>
                  <p className="td-answer text-lg text-navy leading-relaxed font-medium">{hub.answer}</p>
                </div>

                {hub.intro.map((p, i) => (
                  <p key={i} className="text-lg text-foreground/75 leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                  Le guide di questa sezione ({articles.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/risorse/${a.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card flex flex-col"
                    >
                      <div className={`aspect-[16/9] relative overflow-hidden ${!a.coverImage ? `bg-gradient-to-br ${a.cover}` : ""}`}>
                        {a.coverImage ? (
                          <img
                            src={coverSources(a.coverImage)?.card}
                            alt={a.title}
                            loading="lazy"
                            decoding="async"
                            width={600}
                            height={315}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <BookOpen className="w-10 h-10 text-white/70 absolute inset-0 m-auto" />
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-bold text-navy mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-3 flex-1">
                          {a.answer ?? a.excerpt}
                        </p>
                        <span className="text-sm font-semibold text-navy group-hover:text-gold-dark flex items-center gap-1 mt-auto">
                          Leggi <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-7">Domande frequenti</h2>
                <div className="space-y-4">
                  {hub.faq.map((f, i) => (
                    <div key={i} className="bg-white rounded-xl border border-border p-5">
                      <h3 className="font-bold text-navy mb-2 leading-snug">{f.q}</h3>
                      <p className="text-foreground/75 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-navy text-white rounded-2xl p-7 lg:p-9">
                  <h2 className="text-xl lg:text-2xl font-bold mb-3">La tua situazione è in questa sezione?</h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Le guide hanno carattere informativo. Per capire quale strumento si applica al tuo caso serve
                    l'esame dei documenti: la prima valutazione è gratuita e riservata.
                  </p>
                  <Button onClick={openContact} className="bg-gold hover:bg-gold-dark text-navy font-semibold">
                    Richiedi la diagnosi <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-bold text-navy mb-4">Le altre sezioni</h2>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {CATEGORY_HUBS.filter((c) => c.slug !== hub.slug).map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/risorse/categoria/${c.slug}`}
                          className="flex items-center gap-2 text-navy hover:text-gold-dark font-medium"
                        >
                          <ChevronRight className="w-4 h-4 text-gold-dark shrink-0" />
                          {c.heading}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default CategoriaRisorse;
