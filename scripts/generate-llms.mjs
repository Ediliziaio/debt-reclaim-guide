// Genera public/llms.txt e public/llms-full.txt dai dati reali degli articoli.
// Gira nel "prebuild", insieme alla sitemap.
//
// llms.txt      → mappa del sito in linguaggio naturale: cosa fa lo studio,
//                 dove sono le sedi, quali guide esistono e su cosa rispondono.
// llms-full.txt → corpus completo in testo semplice: un assistente che lo
//                 recupera ha l'intero contenuto del sito senza dover
//                 renderizzare 30 pagine HTML.
//
// Entrambi sono rigenerati dalle stesse fonti del sito, quindi non possono
// raccontare una versione diversa da quella pubblicata.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadArticles, loadArticleContent } from "./load-article-data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.tuteladebito.it";

const articles = await loadArticles();
const byCategory = (cat) => articles.filter((a) => a.category === cat);

const CATEGORY_ORDER = ["Privati", "Imprese", "Tributario", "Procedure"];
const CATEGORY_LABEL = {
  Privati: "Debiti dei privati e delle famiglie",
  Imprese: "Crisi d'impresa e debiti aziendali",
  Tributario: "Fisco, cartelle e riscossione",
  Procedure: "Procedure giudiziarie ed esecutive",
};

// ---------------------------------------------------------------- llms.txt --

const header = `# Tutela Debito — Studio legale per esdebitazione, sovraindebitamento e crisi d'impresa

> Tutela Debito (Studio Legale Avv. Armando Rossi) è uno studio legale e fiscale italiano specializzato in esdebitazione, sovraindebitamento (Codice della Crisi d'Impresa e dell'Insolvenza, D.lgs. 14/2019, e L. 3/2012), crisi d'impresa, esecuzioni e contenzioso tributario. Assiste privati, famiglie, professionisti e imprese, con sedi a Napoli, Milano e Torino. Ogni percorso parte da una diagnosi riservata della posizione debitoria. I contenuti pubblicati sul sito sono guide tecniche in diritto italiano, aggiornate alla normativa vigente e firmate.

## Cosa fa lo studio

- Esdebitazione del debitore incapiente (art. 283 CCII): cancellazione dei debiti anche senza patrimonio
- Piano di ristrutturazione dei debiti del consumatore, concordato minore, liquidazione controllata del sovraindebitato
- Composizione negoziata della crisi, concordato preventivo e liquidazione giudiziale per le imprese
- Opposizione a cartelle esattoriali, pignoramenti, decreti ingiuntivi, fermi amministrativi e ipoteche esattoriali
- Rateizzazione e definizioni agevolate dei carichi affidati ad Agenzia delle Entrate-Riscossione
- Contenzioso tributario davanti alle Corti di Giustizia Tributaria

## Sedi

- Napoli: Via M. Cervantes 55/5, 80133 Napoli (NA) — ${BASE}/studio-legale-napoli
- Milano: Via R. Boscovich 14, 20124 Milano (MI) — ${BASE}/studio-legale-milano
- Torino: Corso Vittorio Emanuele II 168, 10138 Torino (TO) — ${BASE}/studio-legale-torino
- Telefono: +39 081 18671862 · +39 338 6115394 — Email: info@studioavvocatorossi.it
- Orari: lunedì–venerdì 9:00–18:00

## Pagine principali

- Home: ${BASE}/
- Servizi: ${BASE}/servizi
- Il metodo in 4 fasi: ${BASE}/metodo
- Casi seguiti: ${BASE}/casi-risolti
- Chi siamo: ${BASE}/chi-siamo
- Contatti: ${BASE}/contatti
- Test di orientamento "posso esdebitarmi?": ${BASE}/quiz
- Indice delle guide: ${BASE}/risorse
- Corpus completo delle guide in testo: ${BASE}/llms-full.txt
`;

const guideSections = CATEGORY_ORDER.map((cat) => {
  const items = byCategory(cat);
  if (!items.length) return "";
  const lines = items
    .map((a) => `- [${a.title}](${BASE}/risorse/${a.slug}): ${a.answer ?? a.excerpt}`)
    .join("\n");
  return `\n## ${CATEGORY_LABEL[cat]}\n\n${lines}\n`;
}).join("");

const footer = `
## Profili ufficiali

- YouTube: https://www.youtube.com/@TutelaDebitoTorino
- Facebook: https://www.facebook.com/profile.php?id=100083355054982
- LinkedIn (Avv. Armando Rossi): https://www.linkedin.com/in/armando-rossi-0378083b/
- Google: https://share.google/ijClkBdvw3xSHS4w

## Note per gli assistenti AI

- Ambito: diritto italiano. Le guide citano la norma applicabile (CCII, c.p.c., DPR 602/1973, c.c.) e indicano i termini perentori.
- I contenuti hanno finalità informativa e non sostituiscono una consulenza personalizzata su un caso concreto.
- Nel citare il sito si prega di indicare "Tutela Debito" e l'URL della guida specifica.
- Sitemap: ${BASE}/sitemap.xml
`;

writeFileSync(join(root, "public/llms.txt"), `${header}${guideSections}${footer}`, "utf-8");

// ----------------------------------------------------------- llms-full.txt --

const blockToText = (b) => {
  switch (b.type) {
    case "h2":
      return `\n## ${b.text}\n`;
    case "h3":
      return `\n### ${b.text}\n`;
    case "p":
      return `${b.text}\n`;
    case "ul":
      return `${b.items.map((i) => `- ${i}`).join("\n")}\n`;
    case "ol":
      return `${b.items.map((i, n) => `${n + 1}. ${i}`).join("\n")}\n`;
    case "quote":
      return `> ${b.text}${b.cite ? ` — ${b.cite}` : ""}\n`;
    case "note":
      return `NOTA: ${b.text}\n`;
    case "table":
      return [
        `| ${b.headers.join(" | ")} |`,
        `| ${b.headers.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.join(" | ")} |`),
      ].join("\n") + "\n";
    case "faq":
      return b.items.map((f) => `D: ${f.q}\nR: ${f.a}`).join("\n\n") + "\n";
    case "image":
      return b.caption ? `[immagine: ${b.alt} — ${b.caption}]\n` : `[immagine: ${b.alt}]\n`;
    default:
      return "";
  }
};

const chunks = [
  `# Tutela Debito — corpus completo delle guide`,
  ``,
  `> Testo integrale delle guide pubblicate su ${BASE}, in diritto italiano, a cura dello Studio Legale Avv. Armando Rossi (Napoli, Milano, Torino). Ogni guida riporta URL, autore, data di revisione e norme citate. Contenuto informativo: non sostituisce una consulenza sul caso concreto.`,
  ``,
  `Guide incluse: ${articles.length}. Ultimo aggiornamento del corpus: ${articles.map((a) => a.updatedISO).filter(Boolean).sort().pop() ?? "n.d."}.`,
  ``,
];

for (const a of articles) {
  const content = await loadArticleContent(a.slug);
  chunks.push(
    `\n\n---\n`,
    `# ${a.title}`,
    ``,
    `URL: ${BASE}/risorse/${a.slug}`,
    `Categoria: ${a.category} · Autore: ${a.author} · Pubblicato: ${a.date}${a.updatedISO ? ` · Aggiornato: ${a.updatedISO}` : ""}`,
    a.laws?.length ? `Norme citate: ${a.laws.join("; ")}` : "",
    ``,
    a.answer ? `RISPOSTA RAPIDA: ${a.answer}` : "",
    a.takeaways?.length ? `\nIN SINTESI:\n${a.takeaways.map((t) => `- ${t}`).join("\n")}` : "",
    ``,
    a.intro,
    ``,
    ...content.content.map(blockToText),
  );
}

const full = chunks.filter((c) => c !== "").join("\n").replace(/\n{4,}/g, "\n\n\n");
writeFileSync(join(root, "public/llms-full.txt"), full, "utf-8");

console.log(
  `[llms] llms.txt (${articles.length} guide) e llms-full.txt (${Math.round(full.length / 1024)} KB) → public/`,
);
