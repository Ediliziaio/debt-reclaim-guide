// Auto-generates public/sitemap.xml from the real routes so it never drifts.
// Runs automatically before every build (see the "prebuild" npm script).
// Article slugs are derived from the files in src/data/articles/ (filename = slug).
// noindex utility pages (pre-diagnosi, post-consulenza) are intentionally excluded.

import { readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://tuteladebito.it";
const today = new Date().toISOString().slice(0, 10);

// path, changefreq, priority
const staticPages = [
  ["/", "weekly", "1.0"],
  ["/studio-legale-napoli", "monthly", "0.9"],
  ["/studio-legale-milano", "monthly", "0.9"],
  ["/studio-legale-torino", "monthly", "0.9"],
  ["/servizi", "monthly", "0.8"],
  ["/metodo", "monthly", "0.8"],
  ["/casi-risolti", "monthly", "0.7"],
  ["/chi-siamo", "monthly", "0.7"],
  ["/risorse", "weekly", "0.8"],
  ["/contatti", "monthly", "0.7"],
  ["/quiz", "monthly", "0.6"],
  ["/privacy", "yearly", "0.3"],
  ["/cookie", "yearly", "0.3"],
  ["/note-legali", "yearly", "0.3"],
];

const articleSlugs = readdirSync(join(root, "src/data/articles"))
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""))
  .sort();

const urls = [
  ...staticPages.map(([path, changefreq, priority]) => ({ loc: `${BASE}${path}`, changefreq, priority })),
  ...articleSlugs.map((slug) => ({ loc: `${BASE}/risorse/${slug}`, changefreq: "monthly", priority: "0.6" })),
];

const body = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf-8");
console.log(`[sitemap] wrote ${urls.length} URLs (${articleSlugs.length} articles) to public/sitemap.xml`);
