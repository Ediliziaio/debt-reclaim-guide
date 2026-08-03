import { useState, useEffect, Fragment } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
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
  RefreshCw,
  Zap,
} from "lucide-react";
import {
  articlesMeta,
  getArticleMeta,
  getRelated,
  coverSources,
  toISODate,
  lastModifiedISO,
  formatISODateIT,
  type Block,
  type Article,
  type ArticleMeta,
} from "@/data/articles";
import { hubForCategory } from "@/data/categories";
import { getArticleContent } from "@/data/articlesContent";
import { getArticleSeo } from "@/data/articleSeo";

/**
 * Link interni scritti nel testo degli articoli come `[testo](/risorse/slug)`.
 * I link contestuali dentro il corpo valgono molto più dei correlati a fondo
 * pagina: sono il modo in cui motori e crawler AI capiscono che il sito copre
 * un tema in profondità e non un articolo isolato.
 */
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]+|https?:\/\/[^)\s]+)\)/g;

const renderText = (text: string): React.ReactNode => {
  if (!text.includes("](")) return text;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [, label, href] = m;
    nodes.push(
      href.startsWith("/") ? (
        <Link
          key={`${m.index}-${href}`}
          to={href}
          className="text-navy underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark font-medium"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`${m.index}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark font-medium"
        >
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

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
          {renderText(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-foreground/80 text-lg">
              <span className="text-gold-dark mt-2 text-xs">●</span>
              <span>{renderText(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-2.5 list-decimal pl-6 marker:text-gold-dark marker:font-bold">
          {block.items.map((it, j) => (
            <li key={j} className="text-foreground/80 text-lg pl-2 leading-relaxed">
              {renderText(it)}
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
          <p className="text-navy leading-relaxed">{renderText(block.text)}</p>
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
      // Domanda e risposta sempre visibili, mai dentro un accordion: un
      // accordion smonta il testo chiuso dal DOM, quindi la risposta sparisce
      // dall'HTML statico ed è invisibile ai crawler che non eseguono JS —
      // proprio il testo che gli engine di risposta dovrebbero citare.
      return (
        <div key={i} className="my-7 space-y-4">
          {block.items.map((f, j) => (
            <div
              key={j}
              className="bg-muted/40 rounded-xl border border-border p-5"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="font-bold text-navy text-base mb-2 leading-snug" itemProp="name">
                {f.q}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-foreground/75 leading-relaxed text-base" itemProp="text">
                  {renderText(f.a)}
                </p>
              </div>
            </div>
          ))}
        </div>
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

const wordCountOf = (blocks?: Block[]): number => {
  if (!blocks) return 0;
  const count = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;
  let n = 0;
  for (const b of blocks) {
    if ("text" in b && typeof b.text === "string") n += count(b.text);
    if ("items" in b && Array.isArray(b.items)) {
      for (const it of b.items) {
        if (typeof it === "string") n += count(it);
        else if (it && typeof it === "object") n += count(it.q) + count(it.a);
      }
    }
  }
  return n;
};

/**
 * Rimando ad articoli correlati inserito dentro il corpo, non a fondo pagina:
 * un link contestuale nel testo passa molto più segnale di uno nel footer, e
 * tiene il lettore dentro il cluster tematico invece di rimandarlo a Google.
 */
const InlineRelated = ({ items }: { items: ArticleMeta[] }) => {
  if (!items.length) return null;
  return (
    <aside className="my-9 rounded-2xl border border-border bg-muted/40 p-5 lg:p-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-gold-dark" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy m-0">Leggi anche</h3>
      </div>
      <ul className="space-y-2">
        {items.map((a) => (
          <li key={a.slug} className="flex items-start gap-2.5">
            <ChevronRight className="w-4 h-4 text-gold-dark mt-1 shrink-0" />
            <Link
              to={`/risorse/${a.slug}`}
              className="text-navy hover:text-gold-dark font-medium leading-snug underline decoration-gold/50 decoration-2 underline-offset-2"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const SITE = "https://www.tuteladebito.it";
/** Identità stabile dell'autore: la stessa @id è dichiarata in /chi-siamo. */
const AUTHOR_ID = `${SITE}/chi-siamo#avv-armando-rossi`;
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

const buildSchemas = (article: ArticleMeta, content?: Block[]) => {
  const url = `${SITE}/risorse/${article.slug}`;
  // Nello schema va il JPEG: è il formato che ogni consumatore di dati
  // strutturati (Google Discover incluso) sa leggere senza sorprese.
  const coverForSchema = coverSources(article.coverImage);
  const image = coverForSchema
    ? (coverForSchema.og.startsWith("http") ? coverForSchema.og : `${SITE}${coverForSchema.og}`)
    : `${SITE}/og-image.jpg`;
  const minutes = parseInt(article.readTime, 10);
  const isFounder = /armando rossi/i.test(article.author);
  const published = toISODate(article.date) ?? article.date;
  const modified = lastModifiedISO(article) ?? published;

  // Autore reale: persona quando l'articolo è firmato dall'avvocato, altrimenti
  // lo studio come organizzazione. Nessuna attribuzione inventata: per un tema
  // YMYL come i debiti, l'attendibilità dell'autore è metà del punteggio E-E-A-T.
  const author = isFounder
    ? {
        "@type": "Person",
        "@id": AUTHOR_ID,
        "name": article.author,
        "url": `${SITE}/chi-siamo`,
        "jobTitle": "Avvocato",
        "worksFor": { "@id": ORG_ID },
        "knowsAbout": [
          "Esdebitazione",
          "Sovraindebitamento",
          "Codice della Crisi d'Impresa e dell'Insolvenza",
          "Contenzioso tributario",
          "Esecuzioni immobiliari",
        ],
        "sameAs": ["https://www.linkedin.com/in/armando-rossi-0378083b/"],
      }
    : {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": article.author,
        "url": SITE,
      };

  // Il box "Risposta rapida" è il passaggio che un engine generativo deve
  // leggere per primo: lo si segnala esplicitamente con speakable.
  const speakable = {
    "@type": "SpeakableSpecification",
    "cssSelector": [".td-answer", "h1"],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": article.title,
    "description": article.excerpt,
    ...(article.answer ? { "abstract": article.answer } : {}),
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
    },
    "author": author,
    "publisher": {
      "@type": "Organization",
      "@id": ORG_ID,
      "name": "Tutela Debito",
      "url": SITE,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE}/logo-tutela-debito.png`,
      },
    },
    "datePublished": published,
    "dateModified": modified,
    "keywords": article.keywords?.join(", "),
    "articleSection": article.category,
    "inLanguage": "it-IT",
    "isAccessibleForFree": true,
    "isPartOf": { "@id": WEBSITE_ID },
    "speakable": speakable,
    // `about` dichiara di cosa parla la pagina in termini di entità, non di
    // parole chiave: è così che un motore generativo collega l'articolo al
    // concetto giuridico giusto invece che a una stringa di testo.
    ...(article.entities?.length
      ? { "about": article.entities.map((name) => ({ "@type": "Thing", name })) }
      : {}),
    ...(article.laws?.length
      ? {
          "citation": article.laws.map((name) => ({
            "@type": "Legislation",
            "name": name,
            "legislationJurisdiction": "IT",
          })),
        }
      : {}),
    ...(Number.isFinite(minutes) ? { "timeRequired": `PT${minutes}M` } : {}),
    ...(content ? { "wordCount": wordCountOf(content) } : {}),
    "mainEntityOfPage": { "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": "Risorse", "item": `${SITE}/risorse` },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": url },
    ],
  };

  // Tutti i blocchi FAQ dell'articolo, non solo il primo.
  const faqItems = (content ?? []).flatMap((b) => (b.type === "faq" ? b.items : []));
  const faqSchema = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "inLanguage": "it-IT",
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }
    : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    "url": url,
    "name": article.title,
    "description": article.excerpt,
    "inLanguage": "it-IT",
    "isPartOf": { "@id": WEBSITE_ID },
    "primaryImageOfPage": { "@type": "ImageObject", "url": image },
    "breadcrumb": { "@id": `${url}#breadcrumb` },
    "mainEntity": { "@id": `${url}#article` },
    "datePublished": published,
    "dateModified": modified,
    // Volutamente niente `lastReviewed`: dichiarerebbe una revisione legale
    // formale dei contenuti. Va aggiunto solo quando lo studio la esegue davvero.
    "speakable": speakable,
    "publisher": { "@id": ORG_ID },
  };

  return { articleSchema, breadcrumbSchema, faqSchema, webPageSchema };
};

interface SidebarProps {
  article: Article;
  related: ArticleMeta[];
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
  const allCategories = Array.from(new Set(articlesMeta.map((a) => a.category)));

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
                        <img src={coverSources(a.coverImage)?.card} alt="" loading="lazy" decoding="async" width={600} height={315} className="absolute inset-0 w-full h-full object-cover" />
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
            const count = articlesMeta.filter((a) => a.category === cat).length;
            const hub = hubForCategory(cat);
            return (
              <li key={cat}>
                <Link
                  // Ogni categoria porta al proprio hub, non all'indice
                  // generico: è il link che costruisce il cluster tematico.
                  to={hub ? `/risorse/categoria/${hub.slug}` : "/risorse"}
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
  // Full content is available synchronously so the article body is present in the
  // prerendered static HTML (SSG) — crawlers and AI engines read it without JS.
  const content = getArticleContent(slug);
  if (!content) return <Navigate to="/risorse" replace />;
  // I metadati canonici sono quelli di articlesMeta (la stessa fonte che
  // alimenta liste e correlati): sovrascrivono la copia dentro il file
  // dell'articolo, così i campi AEO si scrivono in un posto solo.
  const article: Article = { ...content, ...(getArticleMeta(slug) ?? {}) };

  const related = getRelated(slug, 3);
  const { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } = buildSchemas(
    article,
    article.content,
  );
  // I correlati vanno inseriti dopo le prime due sezioni: abbastanza in alto da
  // essere letti, abbastanza in basso da non interrompere la risposta iniziale.
  const h2Positions = article.content.reduce<number[]>((acc, b, i) => {
    if (b.type === "h2") acc.push(i);
    return acc;
  }, []);
  const inlineRelatedAt = h2Positions.length >= 4 ? h2Positions[2] : -1;

  const publishedISO = toISODate(article.date) ?? article.date;
  const modifiedISO = lastModifiedISO(article) ?? publishedISO;
  const updatedLabel = formatISODateIT(article.updatedISO);
  // SERP-length title/description (fallback to the long H1/excerpt if not tuned).
  const seo = getArticleSeo(slug);
  const seoTitle = seo?.seoTitle ?? `${article.title} | Tutela Debito`;
  const seoDescription = seo?.metaDescription ?? article.excerpt;
  const cover = coverSources(article.coverImage);
  const ogImage = cover
    ? (cover.og.startsWith("http") ? cover.og : `https://www.tuteladebito.it${cover.og}`)
    : "https://www.tuteladebito.it/og-image.jpg";

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={article.keywords?.join(", ")}
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical={`https://www.tuteladebito.it/risorse/${article.slug}`}
        ogType="article"
        ogTitle={article.title}
        ogDescription={article.excerpt}
        image={ogImage}
        extraMeta={[
          { name: "author", content: article.author },
          { property: "article:author", content: article.author },
          { property: "article:section", content: article.category },
          { property: "article:published_time", content: publishedISO },
          { property: "article:modified_time", content: modifiedISO },
        ]}
        jsonLd={[webPageSchema, articleSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Article Hero */}
          <section className="bg-white border-b border-border">
            <div className={`relative aspect-[40/21] overflow-hidden ${!article.coverImage ? `bg-gradient-to-br ${article.cover}` : ""}`}>
              {cover && (
                <img
                  src={cover.src}
                  srcSet={cover.srcSet}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  width={1200}
                  height={630}
                  alt={article.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                {/* Percorso visibile, con gli stessi passi dello schema
                    BreadcrumbList: Google chiede che il dato strutturato
                    corrisponda a qualcosa che l'utente vede, e il percorso
                    alimenta i sitelink sotto il risultato in SERP. */}
                <nav aria-label="Percorso di navigazione" className="mb-4">
                  <ol className="flex items-center gap-1.5 flex-wrap text-sm text-foreground/55">
                    <li>
                      <Link to="/" className="hover:text-gold-dark">Home</Link>
                    </li>
                    <li aria-hidden="true">›</li>
                    <li>
                      <Link to="/risorse" className="hover:text-gold-dark">Risorse</Link>
                    </li>
                    <li aria-hidden="true">›</li>
                    <li className="text-foreground/75 font-medium" aria-current="page">
                      {article.category}
                    </li>
                  </ol>
                </nav>
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="px-3 py-1 rounded-full bg-gold/15 text-navy text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                  {updatedLabel && (
                    // Freschezza dichiarata in chiaro: su materia giuridica in
                    // continua evoluzione è un criterio di selezione sia per
                    // Google sia per gli assistenti AI.
                    <span className="text-sm text-gold-dark font-semibold flex items-center gap-1.5">
                      <RefreshCw className="w-4 h-4" /> Aggiornato al{" "}
                      <time dateTime={article.updatedISO}>{updatedLabel}</time>
                    </span>
                  )}
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
                  <article>
                    {/* Blocco risposta: 40-70 parole autoconsistenti in cima al
                        corpo. È il passaggio che ChatGPT, Claude, Perplexity e
                        AI Overviews estraggono e citano; senza, l'engine deve
                        riassumere 5.000 parole e quasi sempre cita altri. */}
                    {article.answer && (
                      <div className="mb-9 rounded-2xl border border-gold/40 bg-gold/[0.07] p-6 lg:p-7">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-4 h-4 text-gold-dark" />
                          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-dark m-0">
                            Risposta rapida
                          </h2>
                        </div>
                        <p className="td-answer text-lg lg:text-xl text-navy leading-relaxed font-medium">
                          {renderText(article.answer)}
                        </p>

                        {!!article.takeaways?.length && (
                          <>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-navy/60 mt-6 mb-3">
                              In sintesi
                            </h3>
                            <ul className="space-y-2">
                              {article.takeaways.map((t, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-foreground/85 leading-relaxed">
                                  <Check className="w-4 h-4 text-gold-dark mt-1 shrink-0" />
                                  <span>{renderText(t)}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    )}

                    {article.content.map((b, i) => (
                      <Fragment key={i}>
                        {i === inlineRelatedAt && <InlineRelated items={related} />}
                        {renderBlock(b, i)}
                      </Fragment>
                    ))}
                  </article>

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
                              <img src={coverSources(a.coverImage)?.card} alt={a.title} loading="lazy" decoding="async" width={600} height={315} className="absolute inset-0 w-full h-full object-cover" />
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
