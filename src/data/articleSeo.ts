// SERP-optimized title + meta description per article.
//
// The article `title` (H1) and `excerpt` (card text) are intentionally long and
// descriptive for on-page readability, but they overflow Google's SERP limits
// (~60 chars for <title>, ~155 for the meta description) and get truncated.
// These values are the SEO-length versions used ONLY for <title> / meta
// description / og — keyword-first and within limits. Falls back to title/excerpt
// if a slug is missing here.

export type ArticleSeo = {
  /** Full <title> text, <= ~60 chars, primary keyword first. */
  seoTitle: string;
  /** Meta description, ~150-155 chars. */
  metaDescription: string;
};

export const ARTICLE_SEO: Record<string, ArticleSeo> = {
  "avviso-accertamento-opposizione": {
    seoTitle: "Avviso di accertamento: come opporsi nei termini",
    metaDescription:
      "Hai ricevuto un avviso di accertamento? Termini per il ricorso, autotutela, sospensione e strumenti di difesa. Guida pratica per opporsi correttamente.",
  },
  "cartella-esattoriale-cosa-fare": {
    seoTitle: "Cartella esattoriale: cosa fare nei primi 60 giorni",
    metaDescription:
      "Cartella dell'Agenzia Riscossione: ricorso, sospensione, rateizzazione, definizione agevolata e prescrizione. Le scelte da fare entro i primi 60 giorni.",
  },
  "cessione-del-quinto-problemi": {
    seoTitle: "Cessione del quinto: i diritti del debitore",
    metaDescription:
      "Problemi con la cessione del quinto? Diritti del debitore, rinegoziazione, estinzione anticipata e tutele in caso di difficoltà. Guida chiara e pratica.",
  },
  "composizione-negoziata": {
    seoTitle: "Composizione negoziata della crisi d'impresa: guida",
    metaDescription:
      "Composizione negoziata della crisi d'impresa (CCII): a chi serve, come funziona, misure protettive e ruolo dell'esperto. Guida completa per l'imprenditore.",
  },
  "concordato-minore": {
    seoTitle: "Concordato minore: la procedura di sovraindebitamento",
    metaDescription:
      "Concordato minore (artt. 74-83 CCII) per piccoli imprenditori e professionisti sovraindebitati: presupposti, piano, voto dei creditori e omologazione.",
  },
  "concordato-preventivo": {
    seoTitle: "Concordato preventivo: la procedura per imprese in crisi",
    metaDescription:
      "Concordato preventivo nel Codice della Crisi: continuità o liquidatorio, presupposti, piano, classi di creditori e omologazione. Guida per le imprese.",
  },
  "contenzioso-tributario-riforma": {
    seoTitle: "Contenzioso tributario: la riforma del processo",
    metaDescription:
      "Contenzioso tributario dopo la riforma: Corti di Giustizia Tributaria, gradi di giudizio, prova, conciliazione e novità del processo. Guida aggiornata.",
  },
  "debiti-agenzia-entrate": {
    seoTitle: "Debiti con l'Agenzia delle Entrate: come gestirli",
    metaDescription:
      "Debiti con l'Agenzia delle Entrate: rateizzazione, definizioni agevolate, ricorso e sovraindebitamento. Tutti gli strumenti legali per gestirli e ridurli.",
  },
  "debiti-banche-finanziarie": {
    seoTitle: "Debiti con banche e finanziarie: cosa fare",
    metaDescription:
      "Non riesci più a pagare banche e finanziarie? Rinegoziazione, saldo e stralcio, sovraindebitamento e difesa dai pignoramenti. Le soluzioni possibili.",
  },
  "debiti-condominiali": {
    seoTitle: "Debiti condominiali: rischi del condomino moroso",
    metaDescription:
      "Debiti condominiali e morosità: cosa rischia il condomino, decreto ingiuntivo, solidarietà e come gestire il recupero. Guida per condòmini e amministratori.",
  },
  "debiti-fornitori": {
    seoTitle: "Debiti con i fornitori: gestirli e tutelare l'impresa",
    metaDescription:
      "Debiti verso i fornitori: rinegoziazione, saldo e stralcio, decreti ingiuntivi e strumenti del CCII. Come gestire la difficoltà e salvare l'attività.",
  },
  "debiti-inps": {
    seoTitle: "Debiti con l'INPS: contributi non versati e sanzioni",
    metaDescription:
      "Debiti con l'INPS per contributi non versati: sanzioni civili, avvisi di addebito, rateizzazione e definizione. Come difendersi e regolarizzare la posizione.",
  },
  "decreto-ingiuntivo-opposizione": {
    seoTitle: "Decreto ingiuntivo: come opporsi entro 40 giorni",
    metaDescription:
      "Hai ricevuto un decreto ingiuntivo? Come fare opposizione entro 40 giorni, motivi validi, sospensione della provvisoria esecuzione e rischi dell'inerzia.",
  },
  "esdebitazione-incapiente": {
    seoTitle: "Esdebitazione del debitore incapiente (art. 283 CCII)",
    metaDescription:
      "Esdebitazione del debitore incapiente (art. 283 CCII): cancellazione dei debiti senza patrimonio. Requisiti, procedura, limiti e quando conviene richiederla.",
  },
  "fermo-amministrativo": {
    seoTitle: "Fermo amministrativo auto: opposizione e cancellazione",
    metaDescription:
      "Fermo amministrativo del veicolo: cos'è, quando è illegittimo, come opporsi e ottenere la cancellazione. Guida pratica per difendersi e liberare l'auto.",
  },
  "fideiussione-come-liberarsi": {
    seoTitle: "Fideiussione: come liberarsi dalla garanzia prestata",
    metaDescription:
      "Come liberarsi da una fideiussione: recesso, escussione, fideiussione omnibus e nullità. Diritti e strumenti del garante per limitare la responsabilità.",
  },
  "ipoteca-esattoriale": {
    seoTitle: "Ipoteca esattoriale: limiti, opposizione, cancellazione",
    metaDescription:
      "Ipoteca esattoriale dell'Agenzia Riscossione: soglie e limiti, preavviso, come opporsi e ottenerne la cancellazione. Guida per difendere il tuo immobile.",
  },
  "liquidazione-controllata-sovraindebitato": {
    seoTitle: "Liquidazione controllata del sovraindebitato: guida",
    metaDescription:
      "Liquidazione controllata del sovraindebitato (artt. 268-277 CCII): come funziona, durata triennale, beni esclusi ed esdebitazione finale. Guida completa.",
  },
  "liquidazione-giudiziale": {
    seoTitle: "Liquidazione giudiziale (ex fallimento): cosa cambia",
    metaDescription:
      "Liquidazione giudiziale, il nuovo fallimento del Codice della Crisi: presupposti, effetti per l'imprenditore, esdebitazione e differenze con il passato.",
  },
  "mutuo-non-pagato-cosa-fare": {
    seoTitle: "Mutuo non pagato: cosa fare prima del pignoramento",
    metaDescription:
      "Mutuo non pagato: rate arretrate, decadenza dal beneficio del termine, rinegoziazione e come evitare il pignoramento della casa. Le mosse da fare subito.",
  },
  "occ-organismo-composizione-crisi": {
    seoTitle: "OCC: l'Organismo di Composizione della Crisi",
    metaDescription:
      "OCC, Organismo di Composizione della Crisi: cos'è, cosa fa il gestore, come si accede e il suo ruolo nelle procedure di sovraindebitamento. Guida pratica.",
  },
  "piano-consumatore": {
    seoTitle: "Piano di ristrutturazione dei debiti del consumatore",
    metaDescription:
      "Piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII): requisiti, meritevolezza, contenuto del piano e omologazione senza voto dei creditori.",
  },
  "pignoramento-conto-corrente": {
    seoTitle: "Pignoramento del conto corrente: limiti e difese",
    metaDescription:
      "Pignoramento del conto corrente: somme impignorabili, limiti su stipendio e pensione accreditati e come difendersi. Guida pratica per tutelare i tuoi soldi.",
  },
  "pignoramento-immobiliare": {
    seoTitle: "Pignoramento immobiliare: le difese del debitore",
    metaDescription:
      "Pignoramento immobiliare: difese del proprietario in ogni fase, conversione, sospensione, prima casa e sovraindebitamento. Come evitare la vendita all'asta.",
  },
  "pignoramento-stipendio-limiti": {
    seoTitle: "Pignoramento stipendio: limiti e regola del quinto",
    metaDescription:
      "Pignoramento dello stipendio: limiti, regola del quinto, cumulo dei pignoramenti e strumenti di difesa. Quanto possono trattenere e come ridurlo legalmente.",
  },
  "prescrizione-debiti": {
    seoTitle: "Prescrizione dei debiti: tempi e come farla valere",
    metaDescription:
      "Prescrizione dei debiti: tempi per cartelle, bollette, tributi e finanziamenti, atti che la interrompono e come farla valere. Guida ai termini aggiornata.",
  },
  "rateizzazione-cartelle-esattoriali": {
    seoTitle: "Rateizzazione cartelle esattoriali: come ottenerla",
    metaDescription:
      "Rateizzazione delle cartelle esattoriali nel 2026: soglie, numero di rate, domanda all'Agenzia Riscossione e come non decadere dal piano. Guida aggiornata.",
  },
  "rottamazione-quater": {
    seoTitle: "Rottamazione quater: come funziona e a chi conviene",
    metaDescription:
      "Rottamazione quater: cartelle incluse, sconto su sanzioni e interessi, scadenze delle rate e alternative se non conviene. Guida pratica per decidere.",
  },
  "saldo-e-stralcio-debiti": {
    seoTitle: "Saldo e stralcio: chiudere il debito a importo ridotto",
    metaDescription:
      "Saldo e stralcio: come negoziare la chiusura definitiva del debito a importo ridotto con banche e finanziarie, tempistiche e cautele. Guida alla trattativa.",
  },
  "sovraindebitamento-cos-e": {
    seoTitle: "Sovraindebitamento: cos'è e le procedure del CCII",
    metaDescription:
      "Sovraindebitamento: cos'è e le procedure del Codice della Crisi — piano del consumatore, concordato minore, liquidazione controllata ed esdebitazione.",
  },
};

export const getArticleSeo = (slug: string): ArticleSeo | undefined => ARTICLE_SEO[slug];
