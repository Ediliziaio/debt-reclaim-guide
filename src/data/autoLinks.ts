/**
 * Link interni contestuali generati sulla prosa reale degli articoli.
 *
 * Il grafo dei link era il punto debole del sito: 21 articoli su 31 avevano
 * come unici collegamenti i tre "correlati" calcolati automaticamente, e sei
 * guide ricevevano un solo link in entrata da tutto il resto. Un link dentro
 * una frase vale molto più di uno in fondo alla pagina — per il lettore, che lo
 * segue mentre sta leggendo di quel tema, e per i motori, che da lì capiscono
 * come i contenuti si tengono insieme.
 *
 * Invece di scrivere i link a mano in trenta file, qui si dichiara quali
 * espressioni rimandano a quale guida: alla prima occorrenza nel corpo del
 * testo il rendering la trasforma in link. Le espressioni sono già presenti
 * nei testi, quindi il collegamento nasce nella frase e non è appiccicato.
 *
 * L'ordine conta: la lista è ordinata dai bersagli oggi più isolati ai più
 * linkati, e ogni articolo ha un tetto massimo di collegamenti. Così la spinta
 * va a chi ne ha bisogno invece di concentrarsi sempre sulle stesse due o tre
 * guide pilastro.
 *
 * Regole per le espressioni: devono essere inequivocabili (mai una parola sola
 * ambigua) e vanno scritte in minuscolo, il confronto ignora le maiuscole e
 * l'etichetta del link conserva la forma trovata nel testo.
 */

export type AutoLink = { slug: string; terms: string[] };

/** Numero massimo di link automatici per articolo. */
export const MAX_AUTO_LINKS = 7;

export const AUTO_LINKS: AutoLink[] = [
  // --- bersagli oggi più isolati: hanno la precedenza --------------------
  { slug: "debiti-condominiali", terms: ["spese condominiali", "morosità condominiale", "condomino moroso"] },
  { slug: "rottamazione-quinquies", terms: ["rottamazione quinquies"] },
  { slug: "rottamazione-quater", terms: ["rottamazione quater"] },
  { slug: "cessione-del-quinto-problemi", terms: ["cessione del quinto"] },
  { slug: "fideiussione-come-liberarsi", terms: ["fideiussione omnibus", "fideiussione", "fideiussore"] },
  { slug: "contenzioso-tributario-riforma", terms: ["corte di giustizia tributaria", "contenzioso tributario"] },
  { slug: "debiti-inps", terms: ["contributi previdenziali", "durc"] },
  { slug: "pignoramento-stipendio-limiti", terms: ["pignoramento dello stipendio", "regola del quinto"] },
  { slug: "ipoteca-esattoriale", terms: ["ipoteca esattoriale"] },
  { slug: "avviso-accertamento-opposizione", terms: ["avviso di accertamento"] },
  { slug: "occ-organismo-composizione-crisi", terms: ["organismo di composizione della crisi"] },
  { slug: "saldo-e-stralcio-debiti", terms: ["saldo e stralcio", "saldo a stralcio"] },
  { slug: "mutuo-non-pagato-cosa-fare", terms: ["mutuo ipotecario", "rate del mutuo"] },
  { slug: "esdebitazione-incapiente", terms: ["esdebitazione del debitore incapiente", "debitore incapiente"] },
  { slug: "debiti-fornitori", terms: ["debiti commerciali", "piano di rientro"] },
  { slug: "debiti-banche-finanziarie", terms: ["centrale dei rischi", "credito deteriorato"] },
  { slug: "fermo-amministrativo", terms: ["fermo amministrativo"] },
  { slug: "pignoramento-immobiliare", terms: ["pignoramento immobiliare", "espropriazione immobiliare"] },
  { slug: "pignoramento-conto-corrente", terms: ["pignoramento del conto corrente"] },
  { slug: "decreto-ingiuntivo-opposizione", terms: ["decreto ingiuntivo"] },
  { slug: "composizione-negoziata", terms: ["composizione negoziata"] },
  { slug: "liquidazione-giudiziale", terms: ["liquidazione giudiziale"] },
  { slug: "concordato-preventivo", terms: ["concordato preventivo"] },
  { slug: "debiti-agenzia-entrate", terms: ["agenzia delle entrate-riscossione"] },
  { slug: "rateizzazione-cartelle-esattoriali", terms: ["rateizzazione ordinaria", "dilazione"] },

  // --- guide pilastro: ricevono già molti link, restano in coda ----------
  { slug: "concordato-minore", terms: ["concordato minore"] },
  { slug: "liquidazione-controllata-sovraindebitato", terms: ["liquidazione controllata"] },
  { slug: "piano-consumatore", terms: ["piano del consumatore"] },
  { slug: "prescrizione-debiti", terms: ["termine di prescrizione", "prescrizione del credito"] },
  { slug: "cartella-esattoriale-cosa-fare", terms: ["cartella esattoriale"] },
  { slug: "sovraindebitamento-cos-e", terms: ["procedure di sovraindebitamento", "stato di sovraindebitamento"] },
];
