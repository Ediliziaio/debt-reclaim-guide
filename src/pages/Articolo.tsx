import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, Info, List } from "lucide-react";
import { getArticle, getRelated, type Block, type Article } from "@/data/articles";

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} id={block.id} className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-5 leading-tight scroll-mt-24">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-navy mt-8 mb-3 leading-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-lg">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-foreground/80 text-lg">
              <span className="text-gold-dark mt-2 text-xs">●</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-2.5 list-decimal pl-6 marker:text-gold-dark marker:font-bold">
          {block.items.map((it, j) => (
            <li key={j} className="text-foreground/80 text-lg pl-2 leading-relaxed">
              {it}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-4 border-gold pl-5 my-7 italic text-foreground/80">
          <p className="text-lg leading-relaxed">"{block.text}"</p>
          {block.cite && <cite className="text-sm text-foreground/60 not-italic block mt-2">— {block.cite}</cite>}
        </blockquote>
      );
    case "note":
      return (
        <div key={i} className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-5 my-7 flex items-start gap-3">
          <Info className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
          <p className="text-navy leading-relaxed">{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="my-7 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead className="bg-navy text-white">
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-sm font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, j) => (
                <tr key={j} className="border-t border-border">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 text-foreground/80">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <Accordion key={i} type="single" collapsible className="my-7 space-y-3">
          {block.items.map((f, j) => (
            <AccordionItem
              key={j}
              value={`faq-${i}-${j}`}
              className="bg-muted/40 rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-gold-dark py-4 text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed pb-4 text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      );
    case "image":
      return (
        <figure key={i} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-2xl shadow-card border border-border aspect-[16/9] object-cover"
          />
          {block.caption && (
            <figcaption className="text-sm text-foreground/60 mt-3 italic text-center leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
};

const TableOfContents = ({ article }: { article: Article }) => {
  const headings = article.content.filter(
    (b): b is { type: "h2"; text: string; id?: string } => b.type === "h2" && !!b.id
  );
  if (headings.length < 3) return null;

  return (
    <nav className="bg-muted/40 border border-border rounded-2xl p-6 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-gold-dark" />
        <h3 className="font-bold text-navy">In questo articolo</h3>
      </div>
      <ol className="space-y-2 text-sm">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-foreground/75 hover:text-gold-dark flex items-start gap-2"
            >
              <span className="text-gold-dark font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Generate JSON-LD schemas for SEO
const buildSchemas = (article: Article) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": { "@type": "Person", "name": article.author },
    "publisher": {
      "@type": "Organization",
      "name": "Tutela Debito",
      "url": "https://tuteladebito.it",
    },
    "datePublished": article.date,
    "keywords": article.keywords?.join(", "),
    "articleSection": article.category,
    "mainEntityOfPage": `https://tuteladebito.it/risorse/${article.slug}`,
  };

  const faqBlock = article.content.find((b) => b.type === "faq");
  const faqSchema = faqBlock?.type === "faq"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqBlock.items.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }
    : null;

  return { articleSchema, faqSchema };
};

const Articolo = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  if (!slug) return <Navigate to="/risorse" replace />;
  const article = getArticle(slug);
  if (!article) return <Navigate to="/risorse" replace />;

  const related = getRelated(slug, 3);
  const { articleSchema, faqSchema } = buildSchemas(article);

  return (
    <>
      <Helmet>
        <title>{article.title} | Tutela Debito</title>
        <meta name="description" content={article.excerpt} />
        {article.keywords && <meta name="keywords" content={article.keywords.join(", ")} />}
        <link rel="canonical" href={`https://tuteladebito.it/risorse/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://tuteladebito.it/risorse/${article.slug}`} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Article Hero */}
          <section className="bg-white border-b border-border">
            <div className={`relative aspect-[16/6] md:aspect-[16/5] overflow-hidden ${!article.coverImage ? `bg-gradient-to-br ${article.cover}` : ""}`}>
              {article.coverImage && (
                <>
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.cover} mix-blend-multiply opacity-70`} />
                </>
              )}
              {!article.coverImage && (
                <BookOpen className="w-20 h-20 text-white/40 absolute inset-0 m-auto" />
              )}
              <div className="absolute top-6 left-6 z-10">
                <Link to="/risorse" className="inline-flex items-center gap-1.5 text-white hover:text-gold text-sm font-semibold bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                  <ArrowLeft className="w-4 h-4" /> Tutte le risorse
                </Link>
              </div>
            </div>

            <div className="container mx-auto px-4 py-10 lg:py-14">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="px-3 py-1 rounded-full bg-gold/15 text-navy text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
                  {article.title}
                </h1>
                <p className="text-xl text-foreground/75 leading-relaxed">
                  {article.intro}
                </p>
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <TableOfContents article={article} />

                <article>{article.content.map(renderBlock)}</article>

                {/* CTA box */}
                <div className="mt-12 bg-navy text-white rounded-2xl p-7 lg:p-9">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">Vuoi capire come si applica al tuo caso?</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Gli articoli del blog hanno carattere informativo. Per una valutazione concreta della tua posizione è sempre necessario un colloquio individuale con esame della documentazione.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={openContact}
                      className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                    >
                      Richiedi diagnosi gratuita <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Link to="/quiz">
                      <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold w-full sm:w-auto">
                        Fai il test online
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-foreground/50 mt-10 leading-relaxed">
                  <strong>Disclaimer.</strong> Il presente articolo ha carattere meramente informativo. Non costituisce parere legale o fiscale né sostituisce in alcun modo una consulenza personalizzata. La normativa è in costante evoluzione: per applicazioni concrete è necessario rivolgersi a un professionista abilitato.
                </p>
              </div>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="py-14 lg:py-20 bg-muted/40">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Continua a leggere</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                    {related.map((a) => (
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
                            <BookOpen className="w-10 h-10 text-white/70 absolute inset-0 m-auto" />
                          )}
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-navy text-xs font-semibold z-10">
                            {a.category}
                          </span>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-bold text-navy mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-3 flex-1">{a.excerpt}</p>
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
          )}
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Articolo;
