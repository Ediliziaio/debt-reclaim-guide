// Genera public/sitemap.xml dalle rotte reali, così non va mai fuori sincrono.
// Gira automaticamente prima di ogni build (script "prebuild").
//
// Due scelte deliberate:
// - `lastmod` è la data di revisione vera dell'articolo (updatedISO, altrimenti
//   la data di pubblicazione). Mettere ovunque la data di build significa
//   dichiarare a Google che tutto il sito cambia a ogni deploy: il segnale di
//   freschezza viene ignorato, e con esso quello degli articoli davvero
//   aggiornati.
// - ogni URL di articolo porta con sé la sua cover via image:image, così le
//   immagini entrano nell'indice con il contesto della pagina.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadArticles } from "./load-article-data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.tuteladebito.it";

const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Le pagine statiche cambiano quando le si tocca: la data si aggiorna a mano,
// esattamente come si farebbe con un changelog.
// path, changefreq, priority, lastmod
const staticPages = [
  ["/", "weekly", "1.0", "2026-08-03"],
  ["/studio-legale-napoli", "monthly", "0.9", "2026-07-20"],
  ["/studio-legale-milano", "monthly", "0.9", "2026-07-20"],
  ["/studio-legale-torino", "monthly", "0.9", "2026-07-20"],
  ["/servizi", "monthly", "0.8", "2026-07-20"],
  ["/metodo", "monthly", "0.8", "2026-07-20"],
  ["/casi-risolti", "monthly", "0.7", "2026-07-20"],
  ["/chi-siamo", "monthly", "0.7", "2026-08-03"],
  ["/risorse", "weekly", "0.8", "2026-08-03"],
  ["/contatti", "monthly", "0.7", "2026-07-20"],
  ["/quiz", "monthly", "0.6", "2026-07-20"],
  ["/privacy", "yearly", "0.3", "2026-07-20"],
  ["/cookie", "yearly", "0.3", "2026-07-20"],
  ["/note-legali", "yearly", "0.3", "2026-07-20"],
];

const IT_MONTHS = {
  gennaio: "01", febbraio: "02", marzo: "03", aprile: "04", maggio: "05", giugno: "06",
  luglio: "07", agosto: "08", settembre: "09", ottobre: "10", novembre: "11", dicembre: "12",
};

const toISODate = (display = "") => {
  const m = display.trim().toLowerCase().match(/^([a-zà-ù]+)\s+(\d{4})$/);
  const mm = m && IT_MONTHS[m[1]];
  return mm ? `${m[2]}-${mm}-01` : undefined;
};

const articles = await loadArticles();

const urls = [
  ...staticPages.map(([path, changefreq, priority, lastmod]) => ({
    loc: `${BASE}${path}`,
    lastmod,
    changefreq,
    priority,
  })),
  ...articles
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((a) => ({
      loc: `${BASE}/risorse/${a.slug}`,
      lastmod: a.updatedISO ?? toISODate(a.date) ?? "2026-08-03",
      changefreq: "monthly",
      priority: "0.7",
      image: a.coverImage ? { loc: `${BASE}${a.coverImage}`, title: a.title } : undefined,
    })),
];

const body = urls
  .map((u) => {
    const image = u.image
      ? `\n    <image:image>\n      <image:loc>${escapeXml(u.image.loc)}</image:loc>\n      <image:title>${escapeXml(u.image.title)}</image:title>\n    </image:image>`
      : "";
    return `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>${image}\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf-8");
console.log(`[sitemap] ${urls.length} URL (${articles.length} articoli) → public/sitemap.xml`);
