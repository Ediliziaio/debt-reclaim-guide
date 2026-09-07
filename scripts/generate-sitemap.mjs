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
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadArticles, loadCategoryHubs } from "./load-article-data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.tuteladebito.it";

const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Le pagine statiche cambiano quando le si tocca: la data si aggiorna a mano,
// esattamente come si farebbe con un changelog.

/**
 * Data dell'ultima modifica reale di una pagina, letta da git.
 *
 * Scriverla a mano non funziona: le pagine città sono state riscritte il 21
 * agosto continuando a dichiarare il 20 luglio, cioè dicendo a Google che non
 * erano cambiate — e Google, giustamente, non le ha ricontrollate. Un lastmod
 * sbagliato è peggio di nessun lastmod, perché è un segnale attivo e falso.
 *
 * Qui la data viene dedotta dall'ultimo commit che ha toccato i file da cui la
 * pagina è generata. Se git non è disponibile (build su una copia senza
 * cronologia) si ricade sulla data dichiarata, che resta l'ultima risorsa.
 */
const gitDate = (...files) => {
  let latest;
  for (const f of files) {
    try {
      const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", f], {
        cwd: root,
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (d && (!latest || d > latest)) latest = d;
    } catch {
      /* git assente o file non tracciato: si passa oltre */
    }
  }
  return latest;
};

/** Componenti che compongono la home: la sua data è quella del più recente. */
const HOME_SOURCES = [
  "src/pages/Index.tsx",
  "src/components/TDHero.tsx",
  "src/components/TDFAQ.tsx",
  "src/components/TDServicesCards.tsx",
  "src/components/TDCoverage.tsx",
];

/** Da quali sorgenti dipende ciascuna pagina statica. */
const PAGE_SOURCES = {
  "/": HOME_SOURCES,
  "/servizi": ["src/pages/Servizi.tsx"],
  "/metodo": ["src/pages/Metodo.tsx", "src/components/TDMethod.tsx"],
  "/chi-siamo": ["src/pages/ChiSiamo.tsx"],
  "/casi-risolti": ["src/pages/CasiRisolti.tsx"],
  "/contatti": ["src/pages/Contatti.tsx"],
  "/quiz": ["src/pages/Quiz.tsx"],
  "/risorse": ["src/pages/Risorse.tsx", "src/data/articlesMeta.ts"],
  "/glossario": ["src/pages/Glossario.tsx", "src/data/glossary.ts"],
  "/studio-legale-napoli": ["src/pages/StudioLegaleCitta.tsx", "src/data/cities.ts"],
  "/studio-legale-milano": ["src/pages/StudioLegaleCitta.tsx", "src/data/cities.ts"],
  "/studio-legale-torino": ["src/pages/StudioLegaleCitta.tsx", "src/data/cities.ts"],
  "/privacy": ["src/pages/Privacy.tsx"],
  "/cookie": ["src/pages/CookiePolicy.tsx"],
  "/note-legali": ["src/pages/NoteLegali.tsx"],
};

// path, changefreq, priority, lastmod di riserva
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
  ["/glossario", "monthly", "0.8", "2026-08-03"],
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
const hubs = await loadCategoryHubs();

// Il lastmod di un hub è quello dell'articolo più recente che contiene: la
// pagina cambia davvero quando cambia il suo cluster.
const hubLastmod = (hub) =>
  articles
    .filter((a) => a.category === hub.category)
    .map((a) => a.updatedISO ?? toISODate(a.date))
    .filter(Boolean)
    .sort()
    .pop() ?? "2026-08-03";

const urls = [
  ...staticPages.map(([path, changefreq, priority, fallback]) => ({
    loc: `${BASE}${path}`,
    lastmod: gitDate(...(PAGE_SOURCES[path] ?? [])) ?? fallback,
    changefreq,
    priority,
  })),
  ...hubs.map((hub) => ({
    loc: `${BASE}/risorse/categoria/${hub.slug}`,
    lastmod: [gitDate("src/data/categories.ts"), hubLastmod(hub)].filter(Boolean).sort().pop(),
    changefreq: "weekly",
    priority: "0.8",
  })),
  ...articles
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((a) => ({
      loc: `${BASE}/risorse/${a.slug}`,
      lastmod:
        gitDate(`src/data/articles/${a.slug}.ts`) ??
        a.updatedISO ??
        toISODate(a.date) ??
        "2026-08-03",
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
