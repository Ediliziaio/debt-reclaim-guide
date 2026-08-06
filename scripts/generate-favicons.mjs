// Genera l'intera famiglia di favicon dal marchio del logo Tutela Debito.
//
// Il favicon precedente era una "TD" in Arial su quadrato blu: non compare da
// nessuna parte nell'identità del brand. Il logo ha invece un simbolo proprio —
// due foglie intrecciate, oro e navy — ed è quello che deve stare nella tab,
// perché è l'unico elemento che rende il sito riconoscibile a 16 pixel.
//
// Il marchio dentro logo-tutela-debito.png misura appena 38x45 px, troppo poco
// per essere ritagliato e riscalato. Qui viene ricampionato x8, separato per
// colore, tracciato come contorni vettoriali e riemesso come SVG: da lì si
// rasterizzano tutte le dimensioni, nitide a qualsiasi risoluzione.
//
// Uso: npm run favicons

import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SRC = join(root, "public/logo-tutela-debito.png");

// Colori campionati dal logo originale, non inventati.
const GOLD = "#f8c20d";
const NAVY = "#1a375b";

// Riquadro del marchio dentro il logo 500x500, con un margine di sicurezza.
const MARK = { left: 366, top: 170, width: 46, height: 53 };
const UP = 8; // fattore di ricampionamento prima del tracciamento

// ---------------------------------------------------------------- maschere --

const { data, info } = await sharp(SRC)
  .extract(MARK)
  .resize(MARK.width * UP, MARK.height * UP, { kernel: "lanczos3" })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: W, height: H, channels: C } = info;
const at = (x, y) => {
  const i = (y * W + x) * C;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
};

/** Distanza euclidea nel cubo RGB. */
const dist = (p, [r, g, b]) => Math.hypot(p[0] - r, p[1] - g, p[2] - b);

const goldRGB = [248, 194, 13];
const navyRGB = [26, 55, 91];

/** true dove il pixel appartiene al colore indicato più che al bianco. */
const maskOf = (target) => {
  const m = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const p = at(x, y);
      if (p[3] < 30) continue;
      const dTarget = dist(p, target);
      const dWhite = dist(p, [255, 255, 255]);
      const dOther = dist(p, target === goldRGB ? navyRGB : goldRGB);
      if (dTarget < dWhite && dTarget < dOther) m[y * W + x] = 1;
    }
  }
  return m;
};

// -------------------------------------------------------------- contorni ----

/**
 * Estrae i contorni di una maschera binaria seguendo il bordo (Moore
 * neighborhood). Restituisce una lista di anelli in coordinate pixel.
 */
const traceContours = (mask) => {
  const get = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? 0 : mask[y * W + x]);
  const visited = new Uint8Array(W * H);
  const contours = [];
  const NB = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (!get(x, y) || visited[y * W + x]) continue;
      // Bordo esterno: pixel pieno con il vicino di sinistra vuoto.
      if (get(x - 1, y)) continue;

      const ring = [];
      let cx = x, cy = y, dir = 6; // si parte guardando verso l'alto
      const startX = x, startY = y;
      let guard = 0;
      do {
        ring.push([cx, cy]);
        visited[cy * W + cx] = 1;
        let found = false;
        for (let k = 0; k < 8; k++) {
          const d = (dir + 6 + k) % 8; // riparte dal vicino "a sinistra"
          const nx = cx + NB[d][0];
          const ny = cy + NB[d][1];
          if (get(nx, ny)) {
            cx = nx; cy = ny; dir = d; found = true;
            break;
          }
        }
        if (!found) break;
      } while ((cx !== startX || cy !== startY) && ++guard < W * H);

      if (ring.length > 40) contours.push(ring);
    }
  }
  return contours;
};

/** Ramer-Douglas-Peucker: toglie i punti che non cambiano la forma. */
const simplify = (pts, eps) => {
  if (pts.length < 3) return pts;
  const d2 = (p, a, b) => {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const len = dx * dx + dy * dy;
    if (!len) return Math.hypot(p[0] - a[0], p[1] - a[1]);
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / len));
    return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
  };
  const rec = (s, e) => {
    let maxD = 0, idx = -1;
    for (let i = s + 1; i < e; i++) {
      const d = d2(pts[i], pts[s], pts[e]);
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > eps) return [...rec(s, idx), ...rec(idx, e).slice(1)];
    return [pts[s], pts[e]];
  };
  return rec(0, pts.length - 1);
};

/** Chaikin: arrotonda gli spigoli lasciati dalla semplificazione. */
const chaikin = (pts, passes = 2) => {
  let out = pts;
  for (let p = 0; p < passes; p++) {
    const next = [];
    for (let i = 0; i < out.length; i++) {
      const a = out[i];
      const b = out[(i + 1) % out.length];
      next.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25]);
      next.push([a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
    }
    out = next;
  }
  return out;
};

// Bounding box comune ai due colori, per non sfasarli fra loro.
const masks = { gold: maskOf(goldRGB), navy: maskOf(navyRGB) };
let bx0 = W, by0 = H, bx1 = 0, by1 = 0;
for (const m of Object.values(masks)) {
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (!m[y * W + x]) continue;
      if (x < bx0) bx0 = x;
      if (y < by0) by0 = y;
      if (x > bx1) bx1 = x;
      if (y > by1) by1 = y;
    }
  }
}
const bw = bx1 - bx0 + 1;
const bh = by1 - by0 + 1;
const scale = 1 / Math.max(bw, bh); // marchio normalizzato in un quadrato 0..1

const pathOf = (mask) =>
  traceContours(mask)
    .map((ring) => chaikin(simplify(ring, 2.2), 2))
    .map((ring) => {
      const pt = ([x, y]) =>
        `${(((x - bx0) - (bw - Math.max(bw, bh)) / 2) * scale).toFixed(4)} ` +
        `${(((y - by0) - (bh - Math.max(bw, bh)) / 2) * scale).toFixed(4)}`;
      return `M${pt(ring[0])}L${ring.slice(1).map(pt).join("L")}Z`;
    })
    .join("");

const goldPath = pathOf(masks.gold);
const navyPath = pathOf(masks.navy);
console.log(`[favicon] tracciato: oro ${goldPath.length} byte, navy ${navyPath.length} byte`);

// ------------------------------------------------------------------- SVG ----

/**
 * Il marchio su fondo navy: alle dimensioni di una tab il contrasto conta più
 * della fedeltà cromatica, e la foglia navy su fondo navy sparirebbe. La foglia
 * inferiore diventa quindi bianca, quella superiore resta oro.
 */
const buildSvg = ({
  size = 64,
  pad = 0.16,
  bg = NAVY,
  upper = GOLD,
  lower = "#ffffff",
  radius = 0.22,
  simple = false,
}) => {
  const inner = 1 - pad * 2;
  const t = `translate(${(pad * size).toFixed(2)} ${(pad * size).toFixed(2)}) scale(${(inner * size).toFixed(4)})`;
  // `simple`: sotto i 32px le due foglie si fondono in una macchia, quindi ne
  // resta una sola, in oro, grande quanto tutto il riquadro.
  const shapes = simple
    ? `<path d="${goldPath}" fill="${upper}"/>`
    : `<path d="${navyPath}" fill="${lower}"/><path d="${goldPath}" fill="${upper}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${(radius * size).toFixed(2)}" fill="${bg}"/>
  <g transform="${t}" fill-rule="evenodd">${shapes}</g>
</svg>`;
};

// Due varianti, ciascuna per il contesto in cui viene davvero guardata.
//
// `tab` — una sola foglia oro su fondo navy. È quella delle schede del browser:
// a 16px le due foglie intrecciate si fondono in una macchia illeggibile,
// mentre una forma sola con il massimo contrasto resta riconoscibile.
// È anche il contenuto di favicon.svg, perché i browser che supportano
// l'icona vettoriale la preferiscono a ogni altra e la disegnano proprio lì.
const tabIcon = buildSvg({ size: 64, pad: 0.06, radius: 0.18, simple: true });

// `app` — il marchio completo, entrambe le foglie. Vale dove l'icona viene
// mostrata grande: schermata home iOS, segnalibri, anteprime.
const appIcon = buildSvg({ size: 64, pad: 0.16, radius: 0.22 });

// iOS applica da sé la maschera agli angoli e non gestisce la trasparenza:
// l'apple-touch-icon deve essere un quadrato pieno, altrimenti gli angoli
// arrotondati diventano neri sulla schermata home.
const appleIcon = buildSvg({ size: 64, pad: 0.18, radius: 0 });

// Per Android il marchio deve stare nel 60% centrale: qualunque forma il
// launcher applichi (cerchio, goccia, squircle) non taglia nulla di rilevante.
const maskableIcon = buildSvg({ size: 64, pad: 0.26, radius: 0 });

writeFileSync(join(root, "public/favicon.svg"), tabIcon + "\n", "utf-8");

// ---------------------------------------------------------------- raster ----

const render = async (svgText, size) =>
  sharp(Buffer.from(svgText), { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

const targets = [
  ["public/favicon-16.png", 16, tabIcon],
  ["public/favicon-32.png", 32, tabIcon],
  ["public/favicon.png", 180, appIcon],
  ["public/apple-touch-icon.png", 180, appleIcon],
  // Icone del manifest: Android le usa per "aggiungi alla schermata Home".
  ["public/icon-192.png", 192, appIcon],
  ["public/icon-512.png", 512, appIcon],
  // Variante maskable: Android ritaglia l'icona con forme diverse a seconda
  // del launcher, quindi il fondo deve essere pieno fino al bordo e il marchio
  // stare dentro la "safe zone" centrale, altrimenti viene tagliato.
  ["public/icon-maskable-512.png", 512, maskableIcon],
];

for (const [file, size, source] of targets) {
  writeFileSync(join(root, file), await render(source, size));
  console.log(`[favicon] ${file} ${size}x${size}`);
}

// ------------------------------------------------------------------- ICO ----

/** Contenitore ICO con payload PNG (supportato da tutti i browser moderni). */
const buildIco = (pngs) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + pngs.length * 16;
  const entries = [];
  for (const { size, buf } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += buf.length;
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
};

// Tutte e tre le misure usano la variante da scheda: l'ICO è il fallback dei
// browser che non leggono l'SVG, e viene mostrato negli stessi posti piccoli.
const ico = buildIco([
  { size: 16, buf: await render(tabIcon, 16) },
  { size: 32, buf: await render(tabIcon, 32) },
  { size: 48, buf: await render(tabIcon, 48) },
]);
writeFileSync(join(root, "public/favicon.ico"), ico);
console.log(`[favicon] public/favicon.ico (16, 32, 48) ${(ico.length / 1024).toFixed(1)} KB`);
