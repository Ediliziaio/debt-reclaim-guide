// Scarica Inter Tight da Google Fonts e la rende self-hosted.
//
// Il font è caricato prima di qualunque testo visibile: finché il CSS di
// Google non risponde, la pagina non dipinge nulla. Sono due connessioni a un
// dominio terzo (fonts.googleapis.com + fonts.gstatic.com) sul percorso
// critico di ogni pagina, più un problema di privacy/GDPR noto.
//
// Self-hostando il file variabile (un solo woff2 per tutti i pesi 100-900) si
// eliminano entrambe le connessioni e si può fare preload dal proprio dominio.
//
// Uso: `npm run fonts` — poi si committano public/fonts/ e src/styles/fonts.css.

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const fontsDir = join(root, "public/fonts");
mkdirSync(fontsDir, { recursive: true });
mkdirSync(join(root, "src/styles"), { recursive: true });

// Chrome UA: senza, Google Fonts restituisce TTF invece del woff2 variabile.
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const CSS_URL =
  "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap";

// Solo i sottoinsiemi che servono a un sito in italiano.
const WANTED = new Set(["latin", "latin-ext"]);

const css = await (await fetch(CSS_URL, { headers: { "User-Agent": UA } })).text();

// I blocchi sono preceduti da un commento con il nome del subset.
const blocks = css.split("/*").slice(1);
const out = [
  "/* Inter Tight self-hosted — rigenerato da `npm run fonts`, non modificare a mano. */",
];
let downloaded = 0;

for (const raw of blocks) {
  const subset = raw.slice(0, raw.indexOf("*/")).trim();
  if (!WANTED.has(subset)) continue;
  const body = raw.slice(raw.indexOf("*/") + 2);
  const url = body.match(/https:\/\/fonts\.gstatic\.com[^)]+\.woff2/)?.[0];
  if (!url) continue;

  const italic = /font-style:\s*italic/.test(body);
  const name = `inter-tight-${subset}${italic ? "-italic" : ""}.woff2`;
  const bytes = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(join(fontsDir, name), bytes);
  downloaded++;

  out.push(
    body
      .replace(/src:\s*url\([^)]+\)/, `src: url(/fonts/${name})`)
      .replace(/^\s*\n/gm, "")
      .trim()
      .replace(/^/, "@font-face {")
      .replace(/^@font-face \{@font-face/, "@font-face"),
  );
  console.log(`  ${name} — ${Math.round(bytes.length / 1024)} KB`);
}

writeFileSync(join(root, "src/styles/fonts.css"), out.join("\n\n") + "\n", "utf-8");
console.log(`[fonts] ${downloaded} file in public/fonts/ + src/styles/fonts.css`);
