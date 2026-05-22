import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Info,
  List,
  Share2,
  Linkedin,
  MessageCircle,
  Mail,
  Link as LinkIcon,
  Check,
  Tag,
  Phone,
  Sparkles,
  ChevronRight,
  FileText,
} from "lucide-react";
import { articles, getArticle, getRelated, type Block, type Article } from "@/data/articles";

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
            loading="lazy"
            decoding="async"
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

const buildSchemas = (article: Article) => {
  const url = `https://tuteladebito.it/risorse/${article.slug}`;
  const image = article.coverImage
    ? (article.coverImage.startsWith("http")
        ? article.coverImage
        : `https://tuteladebito.it${article.coverImage}`)
    : "https://tuteladebito.it/og-image.png";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": [image],
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://tuteladebito.it/chi-siamo",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tutela Debito",
      "url": "https://tuteladebito.it",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tuteladebito.it/favicon.png",
      },
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "keywords": article.keywords?.join(", "),
    "articleSection": article.category,
    "inLanguage": "it-IT",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tuteladebito.it/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Risorse",
        "item": "https://tuteladebito.it/risorse",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": url,
      },
    ],
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

  return { articleSchema, breadcrumbSchema, faqSchema };
};

interface SidebarProps {
  article: Article;
  related: Article[];
  onOpenContact: () => void;
}

const Sidebar = ({ article, related, onOpenContact }: SidebarProps) => {
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const headings = article.content.filter(
    (b): b is { type: "h2"; text: string; id?: string } => b.type === "h2" && !!b.id
  );

  const articleUrl = typeof window !== "undefined" ? window.location.href : "";

  // Scrollspy: track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id!);
      if (el) observer.observe(el);
    });
    observers.push(observer);
    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_e) {
      // ignore
    }
  };

  // Category counts across all articles
  const allCategories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <aside className="lg:sticky lg:top-24 space-y-5 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
      {/* Primary CTA card */}
      <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-5 lg:p-6 shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gold/15 blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/15 text-gold rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-gold/30">
            <Sparkles className="w-3 h-3" />
            Diagnosi gratuita
          </div>
          <h3 className="text-lg font-bold mb-2 leading-tight">Vuoi capire se si applica al tuo caso?</h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            Un colloquio di 30 minuti con un professionista. Senza costi, senza impegno.
          </p>
          <Button
            onClick={onOpenContact}
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

      {/* Author + meta card */}
      <div className="bg-white rounded-2xl p-5 border border-border">
        <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold mb-2">Autore</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-gold font-bold text-sm">
            {article.author.split(" ").slice(-2).map((s) => s[0]).join("")}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-navy text-sm leading-tight">{article.author}</div>
            <div className="text-xs text-foreground/60">Studio Tutela Debito</div>
          </div>
        </div>
        <div className="space-y-1.5 text-xs text-foreground/70 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Pubblicato: {article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Lettura: {article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Categoria: <strong className="text-navy">{article.category}</strong></span>
          </div>
        </div>
      </div>

      {/* Table of contents with scrollspy */}
      {headings.length >= 3 && (
        <div className="bg-muted/40 border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-4 h-4 text-gold-dark" />
            <h3 className="font-bold text-navy text-sm">In questo articolo</h3>
          </div>
          <ol className="space-y-1.5 text-sm">
            {headings.map((h, i) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-start gap-2 py-1 px-2 rounded-md transition-colors border-l-2 ${
                    activeId === h.id
                      ? "bg-gold/10 text-navy font-semibold border-gold"
                      : "text-foreground/70 hover:text-navy hover:bg-white border-transparent"
                  }`}
                >
                  <span className={`tabular-nums shrink-0 text-xs mt-0.5 ${activeId === h.id ? "text-gold-dark font-bold" : "text-gold-dark/60"}`}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="leading-tight">{h.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Share buttons */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Condividi l'articolo</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-trust hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-[10px] font-semibold">LinkedIn</span>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(article.title + " — " + articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-success hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent("Ti segnalo questo articolo: " + articleUrl)}`}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-navy hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi via email"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Email</span>
          </a>
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-gold hover:text-navy text-foreground/70 transition-colors"
            aria-label="Copia link"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <LinkIcon className="w-4 h-4" />}
            <span className="text-[10px] font-semibold">{copied ? "Copiato" : "Copia"}</span>
          </button>
        </div>
      </div>

      {/* Related articles compact */}
      {related.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-gold-dark" />
            <h3 className="font-bold text-navy text-sm">Articoli correlati</h3>
          </div>
          <ul className="space-y-3">
            {related.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/risorse/${a.slug}`}
                  className="group flex items-start gap-3 hover:bg-muted/60 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${a.cover} flex items-center justify-center relative overflow-hidden`}>
                    {a.coverImage ? (
                      <>
                        <img src={a.coverImage} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${a.cover} mix-blend-multiply opacity-70`} />
                      </>
                    ) : (
                      <BookOpen className="w-4 h-4 text-white relative" />
                    )}
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
          </ul>
          <Link
            to="/risorse"
            className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-navy hover:text-gold-dark"
          >
            Tutte le risorse <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Categories navigation */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Esplora per categoria</h3>
        </div>
        <ul className="space-y-1">
          {allCategories.map((cat) => {
            const count = articles.filter((a) => a.category === cat).length;
            return (
              <li key={cat}>
                <Link
                  to="/risorse"
                  className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted text-sm transition-colors group"
                >
                  <span className={`font-medium ${article.category === cat ? "text-gold-dark" : "text-foreground/75 group-hover:text-navy"}`}>
                    {cat}
                  </span>
                  <span className="text-xs text-foreground/50 tabular-nums">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Quiz mini-card */}
      <div className="bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Test online</h3>
        </div>
        <p className="text-xs text-foreground/75 leading-relaxed mb-3">
          Posso accedere a una procedura di esdebitazione? Scoprilo in 2 minuti.
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
    </aside>
  );
};

const Articolo = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  if (!slug) return <Navigate to="/risorse" replace />;
  const article = getArticle(slug);
  if (!article) return <Navigate to="/risorse" replace />;

  const related = getRelated(slug, 3);
  const { articleSchema, breadcrumbSchema, faqSchema } = buildSchemas(article);
  const ogImage = article.coverImage
    ? (article.coverImage.startsWith("http")
        ? article.coverImage
        : `https://tuteladebito.it${article.coverImage}`)
    : "https://tuteladebito.it/og-image.png";

  return (
    <>
      <Helmet>
        <title>{article.title} | Tutela Debito</title>
        <meta name="description" content={article.excerpt} />
        {article.keywords && <meta name="keywords" content={article.keywords.join(", ")} />}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={`https://tuteladebito.it/risorse/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Tutela Debito" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`https://tuteladebito.it/risorse/${article.slug}`} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:modified_time" content={article.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
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
              <div className="max-w-4xl">
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

          {/* Body with sidebar */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 max-w-7xl mx-auto">
                {/* Main content */}
                <div className="min-w-0">
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

                {/* Sidebar */}
                <Sidebar article={article} related={related} onOpenContact={openContact} />
              </div>
            </div>
          </section>

          {/* Related — full width grid below */}
          {related.length > 0 && (
            <section className="py-14 lg:py-20 bg-muted/40">
              <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
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
                              <img src={a.coverImage} alt={a.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
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
