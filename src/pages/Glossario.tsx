import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Scale, Zap } from "lucide-react";
import { GLOSSARY, GLOSSARY_AREAS } from "@/data/glossary";
import { getArticleMeta } from "@/data/articles";

const SITE = "https://www.tuteladebito.it";
const URL = `${SITE}/glossario`;

/**
 * Glossario del debito.
 *
 * Serve due obiettivi insieme: intercettare le query "cos'è X", che sono
 * moltissime e a intento informativo puro, e dare a ogni termine un'ancora
 * citabile. Ogni voce è una definizione autoconsistente in chiaro nell'HTML —
 * niente accordion — e rimanda alla guida che la approfondisce, il che rende
 * questa pagina anche il maggiore snodo di link interni del sito.
 */
const Glossario = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": `${URL}#glossario`,
      "name": "Glossario del debito, del sovraindebitamento e della riscossione",
      "description":
        "Definizioni dei termini giuridici di esdebitazione, sovraindebitamento, crisi d'impresa, riscossione ed esecuzioni forzate nel diritto italiano.",
      "url": URL,
      "inLanguage": "it-IT",
      "publisher": { "@id": `${SITE}/#organization` },
      "hasDefinedTerm": GLOSSARY.map((e) => ({
        "@type": "DefinedTerm",
        "@id": `${URL}#${e.slug}`,
        "name": e.term,
        "description": e.definition,
        "inDefinedTermSet": { "@id": `${URL}#glossario` },
        "url": `${URL}#${e.slug}`,
        ...(e.law ? { "termCode": e.law } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
        { "@type": "ListItem", "position": 2, "name": "Glossario", "item": URL },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Glossario del debito: 57 termini spiegati"
        description="Esdebitazione, sovraindebitamento, precetto, liquidazione controllata: 57 termini di debito, riscossione ed esecuzioni spiegati con la norma."
        keywords="glossario debiti, cos'è l'esdebitazione, cos'è il sovraindebitamento, significato precetto, definizione pignoramento, termini giuridici debito"
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical={URL}
        ogTitle="Glossario del debito e della riscossione"
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
                    <li className="text-foreground/75 font-medium" aria-current="page">Glossario</li>
                  </ol>
                </nav>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
                  Glossario del debito, della riscossione e delle procedure
                </h1>

                <div className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-gold-dark" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gold-dark m-0">
                      Risposta rapida
                    </h2>
                  </div>
                  <p className="td-answer text-lg text-navy leading-relaxed font-medium">
                    Questo glossario raccoglie {GLOSSARY.length} termini di diritto del debito italiano —
                    sovraindebitamento, crisi d'impresa, riscossione ed esecuzioni forzate — con la
                    definizione, la norma di riferimento e il rimando alla guida che approfondisce
                    ciascun istituto.
                  </p>
                </div>

                <p className="text-lg text-foreground/75 leading-relaxed">
                  Le parole del debito non sono sinonimi intercambiabili: fra un pignoramento e un
                  precetto, fra una liquidazione controllata e una liquidazione giudiziale, fra
                  prescrizione e decadenza, cambiano i termini, i rimedi e le conseguenze. Ogni voce
                  è scritta per essere letta da sola e indica la fonte normativa.
                </p>
              </div>
            </div>
          </section>

          {/* Indice per area */}
          <section className="py-8 bg-muted/40 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs uppercase tracking-wider text-foreground/50 font-bold mb-3">
                  Vai alla sezione
                </div>
                <ul className="flex flex-wrap gap-2">
                  {GLOSSARY_AREAS.map((area) => (
                    <li key={area}>
                      <a
                        href={`#area-${area.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-navy hover:border-gold hover:text-gold-dark"
                      >
                        {area}
                        <span className="text-xs text-foreground/50">
                          {GLOSSARY.filter((e) => e.area === area).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Voci */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-14">
                {GLOSSARY_AREAS.map((area) => {
                  const entries = GLOSSARY.filter((e) => e.area === area);
                  if (!entries.length) return null;
                  return (
                    <div key={area} id={`area-${area.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="scroll-mt-24">
                      <div className="flex items-center gap-2 mb-6">
                        <Scale className="w-5 h-5 text-gold-dark" />
                        <h2 className="text-2xl md:text-3xl font-bold text-navy m-0">{area}</h2>
                      </div>

                      <dl className="space-y-5">
                        {entries.map((e) => {
                          const related = e.article ? getArticleMeta(e.article) : undefined;
                          return (
                            <div
                              key={e.slug}
                              id={e.slug}
                              className="bg-white rounded-2xl border border-border p-5 lg:p-6 scroll-mt-24"
                            >
                              <dt className="font-bold text-navy text-lg leading-snug mb-2">{e.term}</dt>
                              <dd className="text-foreground/80 leading-relaxed">{e.definition}</dd>
                              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                {e.law && (
                                  <span className="text-foreground/60">
                                    Riferimento: <span className="font-medium text-navy">{e.law}</span>
                                  </span>
                                )}
                                {related && (
                                  <Link
                                    to={`/risorse/${related.slug}`}
                                    className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-gold-dark"
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-gold-dark" />
                                    Approfondisci
                                  </Link>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </dl>
                    </div>
                  );
                })}

                <div className="bg-navy text-white rounded-2xl p-7 lg:p-9">
                  <h2 className="text-xl lg:text-2xl font-bold mb-3">
                    Hai trovato il termine che riguarda la tua situazione?
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Una definizione dice cosa significa un istituto, non se si applica al tuo caso.
                    Quello richiede l'esame dei documenti: la prima valutazione è gratuita e riservata.
                  </p>
                  <Button onClick={openContact} className="bg-gold hover:bg-gold-dark text-navy font-semibold">
                    Richiedi la diagnosi <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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

export default Glossario;
