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
};

/** Article without the heavy `content` — used for listing, related cards, category counts. */
export type ArticleMeta = Omit<Article, "content">;

// Lightweight metadata for all articles (eager, tiny). Full `content` is NOT here.
import { articlesMeta } from "./articlesMeta";
export { articlesMeta };

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

export const getRelated = (slug: string, limit = 3): ArticleMeta[] =>
  articlesMeta.filter((a) => a.slug !== slug).slice(0, limit);

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
