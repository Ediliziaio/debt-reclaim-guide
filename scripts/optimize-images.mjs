// Ottimizza le cover degli articoli e le immagini social.
//
// Le cover sono l'elemento LCP delle pagine articolo: vengono caricate con
// priorità alta, prima di qualunque altra cosa. Servirle come PNG da 1,4 MB
// significa far aspettare l'utente (e il crawler) secondi su rete mobile, e
// LCP è un fattore di ranking dichiarato.
//
// Per ogni cover si producono:
//   <slug>.webp        1200x630 — pagina articolo (hero)
//   <slug>-600.webp     600x315 — card in elenco e correlati
//   <slug>.jpg         1200x630 — solo og:image, perché alcuni scraper social
//                                 non gestiscono ancora WebP
//
// I master a piena risoluzione stanno in `design/covers-src/`, fuori da
// `public/`: quella cartella viene copiata dentro dist e finirebbe online per
// intero (42 MB di PNG che nessuno scarica mai).
//
// Non gira nel build: si lancia a mano con `npm run images` quando si aggiunge
// una cover, e i file ottimizzati si committano. Così il build su Vercel resta
// leggero e non dipende dai binari nativi di sharp.

import sharp from "sharp";
import { readdirSync, statSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourceDir = join(root, "design/covers-src");
const coversDir = join(root, "public/covers");
mkdirSync(coversDir, { recursive: true });

const KB = (bytes) => Math.round(bytes / 1024);
const sizeOf = (p) => {
  try {
    return statSync(p).size;
  } catch {
    return 0;
  }
};

let before = 0;
let after = 0;

const sources = readdirSync(sourceDir).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of sources) {
  const slug = file.replace(/\.(png|jpe?g)$/i, "");
  const src = join(sourceDir, file);
  const srcSize = sizeOf(src);
  before += srcSize;

  const webp = join(coversDir, `${slug}.webp`);
  const webpSmall = join(coversDir, `${slug}-600.webp`);
  const jpg = join(coversDir, `${slug}.jpg`);

  await sharp(src).resize(1200, 630, { fit: "cover" }).webp({ quality: 82 }).toFile(webp);
  await sharp(src).resize(600, 315, { fit: "cover" }).webp({ quality: 80 }).toFile(webpSmall);
  await sharp(src)
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(jpg);

  after += sizeOf(webp) + sizeOf(webpSmall) + sizeOf(jpg);
  console.log(
    `  ${slug}: ${KB(srcSize)} KB → webp ${KB(sizeOf(webp))} KB · 600 ${KB(sizeOf(webpSmall))} KB · jpg ${KB(sizeOf(jpg))} KB`,
  );
}

// L'immagine social di default segue le stesse regole.
const ogSrc = join(root, "public/og-image.png");
if (sizeOf(ogSrc)) {
  const ogOut = join(root, "public/og-image.jpg");
  await sharp(ogSrc)
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toFile(ogOut);
  console.log(`  og-image: ${KB(sizeOf(ogSrc))} KB → jpg ${KB(sizeOf(ogOut))} KB`);
}

console.log(
  `[images] ${sources.length} cover: ${KB(before)} KB → ${KB(after)} KB (${Math.round((1 - after / before) * 100)}% in meno)`,
);
