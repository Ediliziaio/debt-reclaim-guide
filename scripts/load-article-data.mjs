// Carica i dati degli articoli (TypeScript) dentro uno script Node.
//
// Sitemap e llms.txt devono leggere le stesse identiche fonti che usa il sito —
// altrimenti divergono in silenzio al primo articolo aggiunto. Invece di
// riparsare i .ts con espressioni regolari (fragile), li si transpila con
// esbuild, che è già una dipendenza di Vite, e li si importa davvero.

import { build } from "esbuild";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/** Gli articoli importano immagini con l'alias `@/assets/...`: qui non servono. */
const stubAssets = {
  name: "stub-assets",
  setup(b) {
    b.onResolve({ filter: /^@\// }, (args) => ({ path: args.path, namespace: "stub" }));
    b.onResolve({ filter: /\.(png|jpe?g|svg|webp|avif)$/ }, (args) => ({
      path: args.path,
      namespace: "stub",
    }));
    b.onLoad({ filter: /.*/, namespace: "stub" }, () => ({
      contents: "export default '';",
      loader: "js",
    }));
  },
};

/**
 * Transpila un entry TS e ne restituisce il module namespace.
 * @param {string} entryContents sorgente ESM che importa i moduli del sito
 */
export const loadTs = async (entryContents) => {
  const dir = mkdtempSync(join(tmpdir(), "td-data-"));
  const entry = join(dir, "entry.ts");
  const out = join(dir, "out.mjs");
  writeFileSync(entry, entryContents, "utf-8");
  try {
    await build({
      entryPoints: [entry],
      outfile: out,
      bundle: true,
      format: "esm",
      platform: "node",
      target: "node18",
      logLevel: "silent",
      absWorkingDir: root,
      plugins: [stubAssets],
    });
    return await import(pathToFileURL(out).href);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
};

/** Metadati di tutti gli articoli, già uniti al livello AEO. */
export const loadArticles = async () => {
  const mod = await loadTs(`
    import { articlesMeta } from ${JSON.stringify(join(root, "src/data/articlesMeta.ts"))};
    import { ARTICLE_AEO } from ${JSON.stringify(join(root, "src/data/articleAeo.ts"))};
    export const articles = articlesMeta.map((m) => ({ ...m, ...(ARTICLE_AEO[m.slug] ?? {}) }));
  `);
  return mod.articles;
};

/** Contenuto completo di un articolo (blocchi tipizzati). */
export const loadArticleContent = async (slug) => {
  const mod = await loadTs(`
    export { article } from ${JSON.stringify(join(root, `src/data/articles/${slug}.ts`))};
  `);
  return mod.article;
};
