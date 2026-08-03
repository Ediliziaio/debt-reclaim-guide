// Notifica a IndexNow gli URL aggiornati di recente.
//
// Perché conta: IndexNow è il canale di segnalazione istantanea di Bing (e
// Yandex, Seznam, Naver). L'indice di Bing è anche la fonte di ChatGPT Search,
// quindi un articolo nuovo può diventare citabile da un assistente AI in ore
// invece che in settimane, senza aspettare il passaggio spontaneo del crawler.
//
// Gira nel "postbuild", ma solo:
//   - in produzione (mai dai deploy di preview, che indicherebbero URL sbagliati)
//   - per gli URL con lastmod negli ultimi giorni, così non si ripresenta
//     l'intero sito a ogni deploy: risegnalare pagine immutate è esattamente
//     ciò che IndexNow chiede di non fare.
//
// Da locale non parte mai da sola: il build in locale non pubblica nulla, e
// segnalare URL non ancora online è peggio che non segnalarli. Per farlo a mano
// serve un flag esplicito: `npm run indexnow -- --force` (con `--all` per
// ripresentare tutti gli URL invece dei soli aggiornati).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const HOST = "www.tuteladebito.it";
const KEY = "3fbd727a420fcca8c3a6d4c627c886f4"; // = public/<KEY>.txt
const GIORNI = 7;

const isProduction = process.env.VERCEL_ENV === "production";
const forceAll = process.argv.includes("--all");
const forced = process.argv.includes("--force");

if (!isProduction && !forced) {
  console.log("[indexnow] non è un deploy di produzione: nessuna segnalazione");
  process.exit(0);
}

const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf-8");
const entries = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(
  ([, loc, lastmod]) => ({ loc, lastmod }),
);

const soglia = new Date(Date.now() - GIORNI * 86400_000).toISOString().slice(0, 10);
const urlList = entries.filter((e) => forceAll || e.lastmod >= soglia).map((e) => e.loc);

if (!urlList.length) {
  console.log("[indexnow] nessun URL aggiornato negli ultimi giorni: niente da segnalare");
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// Un errore qui non deve far fallire il deploy: è una segnalazione, non una
// dipendenza del sito.
console.log(
  res.ok || res.status === 202
    ? `[indexnow] segnalati ${urlList.length} URL (HTTP ${res.status})`
    : `[indexnow] segnalazione non riuscita (HTTP ${res.status}) — il sito resta pubblicato`,
);
