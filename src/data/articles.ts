export type Category = "Privati" | "Imprese" | "Tributario" | "Procedure";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "note"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  coverImage?: string;
  intro: string;
  content: Block[];
  keywords?: string[];

  // --- Campi per l'estrazione da parte degli engine generativi (AEO) ---------
  //
  // I motori di risposta (ChatGPT, Claude, Perplexity, AI Overviews) non citano
  // "la pagina": citano il singolo passaggio che risponde alla domanda. Questi
  // campi rendono quel passaggio esplicito invece di lasciarlo dedurre.

  /**
   * Risposta diretta alla query principale, 40-70 parole, autoconsistente:
   * nomina il soggetto per esteso (mai "questo", "esso"), sta in piedi da sola
   * fuori dal contesto della pagina. È il testo mostrato nel box "Risposta
   * rapida" e usato come `abstract` nello schema Article.
   */
  answer?: string;
  /** 3-5 punti chiave estraibili come lista, ognuno autoconsistente. */
  takeaways?: string[];
  /** Data ISO (YYYY-MM-DD) dell'ultima revisione sostanziale del contenuto. */
  updatedISO?: string;
  /** Entità/concetti trattati → `about` nello schema Article. */
  entities?: string[];
  /** Norme citate ("Art. 283 CCII") → `citation` nello schema Article. */
  laws?: string[];
  /** Slug correlati scelti a mano; se assente si usa il calcolo per affinità. */
  related?: string[];
};

/** Article without the heavy `content` — used for listing, related cards, category counts. */
export type ArticleMeta = Omit<Article, "content">;

// Lightweight metadata for all articles (eager, tiny). Full `content` is NOT here.
import { articlesMeta as baseMeta } from "./articlesMeta";
import { ARTICLE_AEO } from "./articleAeo";

/**
 * Metadati canonici degli articoli: la scheda editoriale unita al livello AEO
 * (risposta diretta, takeaways, entità, norme, data di revisione). È l'unica
 * fonte da usare in pagina — la pagina articolo la fa vincere sulla copia
 * contenuta nel singolo file di contenuto.
 */
export const articlesMeta: ArticleMeta[] = baseMeta.map((m) => ({
  ...m,
  ...(ARTICLE_AEO[m.slug] ?? {}),
}));

// Lazy per-article loaders: each ./articles/<slug>.ts becomes its own chunk,
// loaded only when that article page is opened. Importing only the `article`
// export (never eagerly) keeps content out of the main bundle.
const articleLoaders = import.meta.glob("./articles/*.ts", {
  import: "article",
}) as Record<string, () => Promise<Article>>;

const loaderBySlug: Record<string, () => Promise<Article>> = {};
for (const [path, loader] of Object.entries(articleLoaders)) {
  const slug = path.slice("./articles/".length, -".ts".length);
  loaderBySlug[slug] = loader;
}

export const getArticleMeta = (slug: string): ArticleMeta | undefined =>
  articlesMeta.find((a) => a.slug === slug);

/** Load a full article (with content) on demand. Resolves undefined if the slug is unknown. */
export const getArticle = async (slug: string): Promise<Article | undefined> => {
  const loader = loaderBySlug[slug];
  if (!loader) return undefined;
  return loader();
};

/** Parole troppo comuni per indicare affinità tematica fra due articoli. */
const STOPWORDS = new Set([
  "come", "cosa", "quali", "sono", "delle", "della", "degli", "dello", "dell",
  "nel", "nei", "nella", "che", "con", "per", "una", "uno", "gli", "dei", "del",
  "sul", "sui", "sulla", "quando", "dopo", "prima", "tutte", "tutti", "guida",
  "art", "artt", "ccii", "legge", "2026", "2025", "e", "il", "la", "i", "le",
]);

const tokensOf = (a: ArticleMeta): Set<string> => {
  const raw = [a.title, a.slug.replace(/-/g, " "), ...(a.keywords ?? []), ...(a.entities ?? [])]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-zà-ù0-9\s]/g, " ")
    .split(/\s+/);
  return new Set(raw.filter((t) => t.length > 2 && !STOPWORDS.has(t)));
};

/**
 * Articoli correlati per affinità tematica reale.
 *
 * Prima si usano gli slug indicati a mano in `related`; il resto viene riempito
 * per punteggio: token condivisi fra titoli/slug/keywords/entità, più un bonus
 * di categoria. Serve sia all'utente (continua a leggere pertinente) sia ai
 * motori: i link interni fra articoli dello stesso tema sono ciò che costruisce
 * l'autorità topica del sito su "debiti / esdebitazione / riscossione".
 */
export const getRelated = (slug: string, limit = 3): ArticleMeta[] => {
  const current = articlesMeta.find((a) => a.slug === slug);
  if (!current) return articlesMeta.slice(0, limit);

  const manual = (current.related ?? [])
    .map((s) => articlesMeta.find((a) => a.slug === s))
    .filter((a): a is ArticleMeta => !!a && a.slug !== slug);
  if (manual.length >= limit) return manual.slice(0, limit);

  const chosen = new Set([slug, ...manual.map((a) => a.slug)]);
  const mine = tokensOf(current);

  const scored = articlesMeta
    .filter((a) => !chosen.has(a.slug))
    .map((a) => {
      const other = tokensOf(a);
      let overlap = 0;
      for (const t of other) if (mine.has(t)) overlap++;
      return { article: a, score: overlap * 2 + (a.category === current.category ? 3 : 0) };
    })
    .sort((x, y) => y.score - x.score || x.article.slug.localeCompare(y.article.slug));

  return [...manual, ...scored.map((s) => s.article)].slice(0, limit);
};

// Article `date` fields are human-readable Italian strings ("Maggio 2026").
// schema.org datePublished / OG article:published_time require ISO 8601, so
// convert to "YYYY-MM-01" for structured data. Returns undefined if unparseable.
const IT_MONTHS: Record<string, string> = {
  gennaio: "01",
  febbraio: "02",
  marzo: "03",
  aprile: "04",
  maggio: "05",
  giugno: "06",
  luglio: "07",
  agosto: "08",
  settembre: "09",
  ottobre: "10",
  novembre: "11",
  dicembre: "12",
};

export const toISODate = (display: string): string | undefined => {
  const m = display.trim().toLowerCase().match(/^([a-zà-ù]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const mm = IT_MONTHS[m[1]];
  if (!mm) return undefined;
  return `${m[2]}-${mm}-01`;
};

/**
 * Data dell'ultima revisione in ISO, per `dateModified` e per il `lastmod`
 * della sitemap. Usa `updatedISO` quando presente, altrimenti ricade sulla data
 * di pubblicazione: mai una data inventata, perché una freschezza dichiarata e
 * non vera è un segnale negativo tanto per Google quanto per gli engine AI.
 */
export const lastModifiedISO = (a: Pick<ArticleMeta, "date" | "updatedISO">): string | undefined =>
  a.updatedISO ?? toISODate(a.date);

/** Data di revisione leggibile ("3 agosto 2026") per il testo "Aggiornato al…". */
const IT_MONTH_NAMES = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

export const formatISODateIT = (iso?: string): string | undefined => {
  if (!iso) return undefined;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return undefined;
  const month = IT_MONTH_NAMES[Number(m[2]) - 1];
  if (!month) return undefined;
  return `${Number(m[3])} ${month} ${m[1]}`;
};
