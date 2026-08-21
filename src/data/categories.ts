import type { Category } from "./articles";

/**
 * Hub tematici delle risorse.
 *
 * Prima esisteva solo l'indice generale /risorse: nessuna pagina poteva
 * posizionarsi su una query di categoria ("debiti impresa cosa fare",
 * "procedure esecutive difesa"), e i link "esplora per categoria" nella sidebar
 * puntavano tutti allo stesso URL. Ogni hub raccoglie il proprio cluster di
 * articoli sotto un testo introduttivo originale: è la pagina che compete sulla
 * query larga e distribuisce autorità agli articoli che ci stanno sotto.
 */
export type CategoryHub = {
  slug: string;
  category: Category;
  /** H1 della pagina. */
  heading: string;
  /** <title> in lunghezza SERP. */
  seoTitle: string;
  metaDescription: string;
  /** Risposta diretta alla query di categoria, autoconsistente. */
  answer: string;
  /** Testo introduttivo originale: 2-3 paragrafi. */
  intro: string[];
  /** Domande a cui il cluster risponde: alimenta la sezione e lo schema. */
  faq: { q: string; a: string }[];
};

export const CATEGORY_HUBS: CategoryHub[] = [
  {
    slug: "privati",
    category: "Privati",
    heading: "Debiti dei privati e delle famiglie",
    seoTitle: "Debiti privati: guide e soluzioni legali",
    metaDescription:
      "Debiti di privati e famiglie: sovraindebitamento, saldo e stralcio, prescrizione, mutuo, cessione del quinto, fideiussione. Guide tecniche aggiornate.",
    answer:
      "Un privato che non riesce più a pagare i propri debiti ha tre famiglie di rimedi: la negoziazione stragiudiziale con i creditori (saldo e stralcio, piani di rientro), le eccezioni di diritto che possono far cadere in tutto o in parte la pretesa (prescrizione, vizi di notifica, nullità contrattuali) e le procedure di sovraindebitamento del Codice della Crisi, che chiudono la posizione con l'esdebitazione.",
    intro: [
      "Il debito di una famiglia raramente arriva da una sola fonte: si sommano rate di finanziamenti, scoperti bancari, cartelle esattoriali, spese condominiali, garanzie prestate per altri. Ognuna di queste voci segue regole proprie, ha termini di decadenza diversi e reagisce a strumenti diversi — motivo per cui una strategia costruita su un solo debito quasi sempre fallisce sugli altri.",
      "Le guide raccolte in questa sezione ricostruiscono i singoli istituti con i riferimenti normativi: cosa consente la legge, entro quali termini, con quali conseguenze in caso di inerzia. Sono scritte per essere lette prima di firmare o di pagare, perché è lì che si decide la maggior parte dei margini di manovra: un pagamento parziale su un debito prescritto lo fa rivivere, un'adesione a una definizione agevolata chiude la porta al contenzioso.",
    ],
    faq: [
      {
        q: "Quali procedure può usare un privato per uscire dai debiti?",
        a: "Il Codice della Crisi riserva ai privati non imprenditori il piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII), la liquidazione controllata (artt. 268-277 CCII) e l'esdebitazione del debitore incapiente (art. 283 CCII). Tutte passano da un Organismo di Composizione della Crisi e si chiudono con la liberazione dai debiti residui.",
      },
      {
        q: "Si può trattare con i creditori senza andare in tribunale?",
        a: "Sì: il saldo e stralcio è una transazione ai sensi degli artt. 1965 e ss. del codice civile, con cui il creditore accetta una somma inferiore e rinuncia a ogni ulteriore pretesa. Funziona quando i creditori sono pochi e l'accordo viene formalizzato per iscritto prima del pagamento; con molti creditori serve invece uno strumento che li vincoli tutti.",
      },
      {
        q: "Da dove conviene partire?",
        a: "Dalla ricostruzione completa della posizione: elenco dei creditori, importi, titoli, date di notifica e stato delle azioni esecutive. Senza questo quadro non è possibile sapere quali debiti sono ancora esigibili, quali sono contestabili e quale strumento produce il risultato migliore.",
      },
    ],
  },
  {
    slug: "imprese",
    category: "Imprese",
    heading: "Crisi d'impresa e debiti aziendali",
    seoTitle: "Crisi d'impresa: procedure e strumenti",
    metaDescription:
      "Debiti d'impresa e crisi aziendale: composizione negoziata, concordato preventivo, liquidazione giudiziale, debiti verso fornitori. Guide operative.",
    answer:
      "L'imprenditore in difficoltà dispone di strumenti graduati per intensità: la composizione negoziata (artt. 12-25 CCII), riservata e stragiudiziale, con l'esperto indipendente e le misure protettive; il concordato preventivo, in continuità o liquidatorio, che vincola i creditori dopo il voto e l'omologazione; la liquidazione giudiziale quando l'insolvenza è irreversibile. La scelta dipende da quanto presto si interviene.",
    intro: [
      "La differenza fra un'impresa che si salva e una che chiude non sta quasi mai nell'entità del debito: sta nel momento in cui l'imprenditore si muove. Il Codice della Crisi è costruito su questa idea — più la difficoltà viene intercettata presto, più gli strumenti disponibili sono leggeri, riservati e reversibili. L'art. 2086 del codice civile ha reso l'adozione di assetti adeguati a rilevare la crisi un obbligo dell'organo amministrativo, non una buona pratica.",
      "Queste guide coprono il percorso completo: dai segnali di allarme e dai debiti verso fornitori, che sono quasi sempre i primi a manifestarsi, fino alle procedure concorsuali vere e proprie, con il trattamento del debito fiscale e contributivo che spesso ne rappresenta la parte più pesante.",
    ],
    faq: [
      {
        q: "Qual è la differenza fra composizione negoziata e concordato preventivo?",
        a: "La composizione negoziata è volontaria, riservata e stragiudiziale: l'imprenditore mantiene la gestione e un esperto indipendente facilita le trattative. Il concordato preventivo è una procedura concorsuale pubblica, con voto dei creditori e omologazione del tribunale, che vincola anche i dissenzienti. La prima si usa prima dell'insolvenza conclamata, il secondo quando serve un effetto vincolante su tutti i creditori.",
      },
      {
        q: "Si possono trattare i debiti fiscali e contributivi dell'impresa?",
        a: "Sì. La transazione fiscale consente di proporre il pagamento parziale o dilazionato di tributi e contributi all'interno degli strumenti di regolazione della crisi. Fuori da questi strumenti restano la rateizzazione dei carichi a ruolo e, quando aperte, le definizioni agevolate.",
      },
      {
        q: "L'imprenditore risponde con il patrimonio personale?",
        a: "Dipende dalla forma giuridica e dalle garanzie prestate. Nelle società di capitali la responsabilità è in linea di principio limitata, ma fideiussioni personali a favore di banche e fornitori spostano l'esposizione sul patrimonio dell'amministratore o del socio: è il punto da verificare per primo.",
      },
    ],
  },
  {
    slug: "fisco-e-riscossione",
    category: "Tributario",
    heading: "Fisco, cartelle e riscossione",
    seoTitle: "Cartelle e debiti fiscali: difese e strumenti",
    metaDescription:
      "Cartelle esattoriali, avvisi di accertamento, fermi, ipoteche, rateizzazione e definizioni agevolate: come difendersi dai debiti fiscali. Guide aggiornate.",
    answer:
      "Contro un debito fiscale si può agire su tre piani: contestare l'atto nei termini perentori (60 giorni per cartelle e avvisi di accertamento davanti alla Corte di Giustizia Tributaria), ridurre l'importo con gli strumenti deflattivi e le definizioni agevolate, oppure diluirlo con la rateizzazione ex art. 19 DPR 602/1973, che sospende le azioni esecutive dell'Agente della Riscossione.",
    intro: [
      "Nel rapporto con il Fisco il fattore decisivo è il calendario. Ogni atto apre una finestra di reazione con una durata precisa, e la scadenza di quella finestra trasforma una pretesa contestabile in un debito definitivo: da quel momento le opzioni si riducono al pagamento o alla dilazione. È la ragione per cui la prima cosa da guardare su una cartella non è l'importo, ma la data di notifica.",
      "Queste guide seguono la sequenza reale: l'avviso di accertamento e il ricorso tributario, la cartella e i primi 60 giorni, le misure cautelari (fermo amministrativo e ipoteca esattoriale), gli strumenti di gestione del debito già consolidato (rateizzazione, definizioni agevolate) e i debiti previdenziali INPS, che seguono regole proprie in materia di sanzioni e prescrizione.",
    ],
    faq: [
      {
        q: "Quanto tempo c'è per contestare una cartella esattoriale?",
        a: "Il termine ordinario è di 60 giorni dalla notifica, davanti al giudice competente per la natura del credito: Corte di Giustizia Tributaria per i tributi, giudice ordinario per contributi previdenziali e sanzioni amministrative. Scaduto il termine la pretesa si consolida e restano gli strumenti di gestione del debito.",
      },
      {
        q: "La rateizzazione blocca pignoramenti e fermi?",
        a: "Sì: la rateizzazione accolta sospende le azioni esecutive e cautelari dell'Agente della Riscossione e ne impedisce di nuove, finché le rate vengono pagate. Comporta però il riconoscimento del debito, quindi va valutata dopo aver verificato notifica e prescrizione.",
      },
      {
        q: "Conviene sempre aderire a una definizione agevolata?",
        a: "No. L'adesione comporta la rinuncia al contenzioso sui carichi definiti e interrompe la prescrizione. Su cartelle mai notificate validamente, su crediti prescritti o su pretese contestabili nel merito, la verifica preventiva può portare a un risultato migliore dell'azzeramento delle sole sanzioni.",
      },
    ],
  },
  {
    slug: "procedure-esecutive",
    category: "Procedure",
    heading: "Procedure giudiziarie ed esecutive",
    seoTitle: "Pignoramenti e decreti ingiuntivi: le difese",
    metaDescription:
      "Pignoramento di stipendio, conto corrente e immobili, decreto ingiuntivo, piano del consumatore, ruolo dell'OCC: termini e difese del debitore.",
    answer:
      "Chi subisce un'azione esecutiva ha difese con termini stretti: 40 giorni per opporsi a un decreto ingiuntivo (art. 645 c.p.c.), 20 giorni per contestare gli atti esecutivi, la conversione del pignoramento ex art. 495 c.p.c. per sostituire il bene con una somma rateizzata. Sui redditi valgono limiti di impignorabilità precisi, di regola un quinto dello stipendio netto.",
    intro: [
      "L'esecuzione forzata è una sequenza di atti con termini perentori: ogni passaggio non contestato nei tempi consolida quello successivo. Conoscere la mappa — dal titolo esecutivo al precetto, dal pignoramento alla vendita — serve a capire dove ci si trova e quali difese sono ancora praticabili, perché la stessa eccezione proposta un mese prima o un mese dopo può valere tutto o niente.",
      "Questa sezione copre le tre forme di pignoramento più diffuse (stipendio, conto corrente, immobile), l'opposizione al decreto ingiuntivo che le precede quasi sempre, e le procedure di sovraindebitamento che possono bloccarle: il piano del consumatore e il ruolo dell'Organismo di Composizione della Crisi che ne è il presidio tecnico.",
    ],
    faq: [
      {
        q: "Quanto può essere pignorato dello stipendio?",
        a: "Di regola un quinto della retribuzione netta (art. 545 c.p.c.). Per i crediti alimentari la quota è fissata dal giudice, per i crediti tributari valgono soglie graduate in base all'importo. In caso di concorso di pignoramenti di natura diversa il prelievo complessivo non può superare la metà dello stipendio.",
      },
      {
        q: "Si può fermare un pignoramento già iniziato?",
        a: "Sì, per più vie: la conversione del pignoramento (art. 495 c.p.c.) sostituendo il bene con una somma versata anche a rate, le opposizioni quando vi sono vizi, l'accordo transattivo con il creditore procedente e, nei casi di insostenibilità complessiva, l'apertura di una procedura di sovraindebitamento che blocca le azioni esecutive.",
      },
      {
        q: "Cosa succede se non si fa nulla dopo un decreto ingiuntivo?",
        a: "Decorsi 40 giorni dalla notifica senza opposizione il decreto diventa definitivo ed esecutivo: il creditore può notificare il precetto e procedere al pignoramento. Le eccezioni non sollevate in quel termine, comprese prescrizione e vizi del contratto, non sono più proponibili.",
      },
    ],
  },
];

export const getCategoryHub = (slug: string): CategoryHub | undefined =>
  CATEGORY_HUBS.find((c) => c.slug === slug);

export const hubForCategory = (category: Category): CategoryHub | undefined =>
  CATEGORY_HUBS.find((c) => c.category === category);
