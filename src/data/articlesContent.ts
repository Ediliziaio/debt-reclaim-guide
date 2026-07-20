import type { Article } from "./articles";

/**
 * Full article content, available synchronously — required so vite-react-ssg can
 * render the complete article body into the prerendered static HTML.
 *
 * This module is imported ONLY by the Articolo route component, so the heavy
 * content bundle lands in the article route chunk and never in the homepage,
 * listing or city-page chunks (those use the lightweight ./articlesMeta).
 */
const modules = import.meta.glob<Article>("./articles/*.ts", {
  eager: true,
  import: "article",
});

const bySlug: Record<string, Article> = {};
for (const [path, article] of Object.entries(modules)) {
  const slug = path.slice("./articles/".length, -".ts".length);
  bySlug[slug] = article as Article;
}

export const getArticleContent = (slug: string): Article | undefined => bySlug[slug];
