/**
 * Livello AEO (Answer Engine Optimization) degli articoli.
 *
 * Un motore di risposta — ChatGPT, Claude, Perplexity, Google AI Overviews —
 * non cita una pagina: cita il passaggio che risponde alla domanda. Se quel
 * passaggio non esiste, l'engine riassume da sé e nella quasi totalità dei casi
 * finisce per citare un'altra fonte. Qui il passaggio è scritto esplicitamente.
 *
 * Regole per scrivere una voce nuova:
 * - `answer`: 40-70 parole, deve stare in piedi da sola fuori dalla pagina.
 *   Nomina per esteso il soggetto ("La liquidazione controllata…", mai "Questa
 *   procedura…"), cita la norma, dà almeno un dato concreto (termine, soglia,
 *   durata). Niente promesse commerciali: è una risposta, non uno slogan.
 * - `takeaways`: 3-5 punti, ognuno autoconsistente e verificabile.
 * - `entities` alimenta `about`, `laws` alimenta `citation` nello schema.
 * - `updatedISO`: data reale dell'ultima revisione, mai una data di comodo.
 *
 * I valori qui dichiarati sovrascrivono quelli dei singoli file articolo
 * (vedi il merge in ./articles.ts), quindi si scrivono in un posto solo.
 */

export type ArticleAeo = {
  answer: string;
  takeaways?: string[];
  updatedISO?: string;
  entities?: string[];
  laws?: string[];
  related?: string[];
};

const REVISIONE = "2026-08-03";

export const ARTICLE_AEO: Record<string, ArticleAeo> = {
  "sovraindebitamento-cos-e": {
    answer:
      "Il sovraindebitamento è lo stato di crisi o insolvenza del debitore che non può accedere alla liquidazione giudiziale: consumatori, professionisti, imprenditori minori e agricoltori. Il Codice della Crisi (D.lgs. 14/2019) mette a disposizione quattro procedure — ristrutturazione dei debiti del consumatore, concordato minore, liquidazione controllata ed esdebitazione del debitore incapiente — tutte gestite con l'assistenza di un OCC e chiuse dall'esdebitazione.",
    takeaways: [
      "Il sovraindebitamento riguarda chi non è assoggettabile a liquidazione giudiziale: consumatori, professionisti, imprenditori minori, imprenditori agricoli e start-up innovative.",
      "Le quattro procedure sono ristrutturazione dei debiti del consumatore (artt. 67-73 CCII), concordato minore (artt. 74-83), liquidazione controllata (artt. 268-277) ed esdebitazione dell'incapiente (art. 283).",
      "L'accesso passa sempre dall'Organismo di Composizione della Crisi, che attesta la fattibilità del percorso e relaziona al tribunale.",
      "L'esito finale è l'esdebitazione: la liberazione dai debiti residui non soddisfatti dalla procedura.",
    ],
    updatedISO: REVISIONE,
    entities: ["Sovraindebitamento", "Esdebitazione", "Codice della Crisi d'Impresa e dell'Insolvenza", "Organismo di Composizione della Crisi"],
    laws: ["D.lgs. 14/2019 (Codice della Crisi d'Impresa e dell'Insolvenza)", "L. 3/2012"],
    related: ["piano-consumatore", "concordato-minore", "liquidazione-controllata-sovraindebitato"],
  },

  "liquidazione-controllata-sovraindebitato": {
    answer:
      "La liquidazione controllata del sovraindebitato (artt. 268-277 CCII) è la procedura concorsuale liquidatoria per consumatori, professionisti e piccoli imprenditori non fallibili: il patrimonio del debitore viene affidato a un liquidatore nominato dal tribunale e distribuito ai creditori. Il debitore persona fisica è liberato di diritto dai debiti residui decorsi tre anni dall'apertura della procedura.",
    takeaways: [
      "La liquidazione controllata può essere chiesta dal debitore sovraindebitato e, in presenza dei presupposti, anche da un creditore.",
      "Restano esclusi dalla liquidazione i beni impignorabili, i crediti alimentari e ciò che serve al mantenimento del debitore e della famiglia.",
      "L'esdebitazione del debitore persona fisica opera di diritto decorsi tre anni dall'apertura (art. 282 CCII), salvo i casi di frode o malafede.",
      "L'apertura della procedura blocca le azioni esecutive individuali dei creditori sul patrimonio del debitore.",
    ],
    updatedISO: REVISIONE,
    entities: ["Liquidazione controllata", "Sovraindebitamento", "Esdebitazione", "Liquidatore giudiziale"],
    laws: ["Artt. 268-277 CCII", "Art. 282 CCII"],
    related: ["sovraindebitamento-cos-e", "esdebitazione-incapiente", "concordato-minore"],
  },

  "concordato-minore": {
    answer:
      "Il concordato minore (artt. 74-83 CCII) è la procedura di sovraindebitamento con cui imprenditori minori, professionisti e imprenditori agricoli propongono ai creditori un piano di ristrutturazione alternativo alla liquidazione del patrimonio. La proposta è approvata con il voto favorevole dei creditori che rappresentano la maggioranza dei crediti ammessi al voto, e diventa vincolante con l'omologazione del tribunale.",
    takeaways: [
      "Il concordato minore è riservato ai debitori sovraindebitati diversi dal consumatore: imprenditori minori, professionisti, imprenditori agricoli, start-up innovative.",
      "A differenza del piano del consumatore, il concordato minore richiede il voto dei creditori, non solo la valutazione del giudice.",
      "La domanda va presentata con l'assistenza di un OCC, che redige la relazione sulla fattibilità del piano.",
      "Con l'omologazione il piano vincola tutti i creditori anteriori, anche quelli che hanno votato contro.",
    ],
    updatedISO: REVISIONE,
    entities: ["Concordato minore", "Sovraindebitamento", "Imprenditore minore", "Omologazione"],
    laws: ["Artt. 74-83 CCII", "D.lgs. 14/2019"],
    related: ["sovraindebitamento-cos-e", "liquidazione-controllata-sovraindebitato", "occ-organismo-composizione-crisi"],
  },

  "occ-organismo-composizione-crisi": {
    answer:
      "L'Organismo di Composizione della Crisi (OCC) è il soggetto tecnico che assiste obbligatoriamente il debitore in tutte le procedure di sovraindebitamento previste dal Codice della Crisi. L'OCC nomina un gestore, ricostruisce la posizione debitoria, verifica la documentazione, attesta la fattibilità del piano e relaziona al tribunale. Senza la relazione dell'OCC la domanda è inammissibile.",
    takeaways: [
      "Gli OCC sono costituiti presso ordini professionali, camere di commercio e organismi iscritti nell'apposito registro tenuto dal Ministero della Giustizia.",
      "Il gestore della crisi è il professionista designato dall'OCC per il singolo caso: è terzo e indipendente rispetto al debitore.",
      "I compensi dell'OCC sono prededucibili e determinati secondo i parametri del DM 202/2014.",
      "La scelta dell'OCC territorialmente competente segue la residenza o la sede principale del debitore.",
    ],
    updatedISO: REVISIONE,
    entities: ["Organismo di Composizione della Crisi", "Gestore della crisi", "Sovraindebitamento"],
    laws: ["D.lgs. 14/2019 (CCII)", "DM 202/2014"],
    related: ["sovraindebitamento-cos-e", "piano-consumatore", "concordato-minore"],
  },

  "saldo-e-stralcio-debiti": {
    answer:
      "Il saldo e stralcio è l'accordo con cui il creditore accetta una somma inferiore all'importo dovuto e rinuncia a ogni ulteriore pretesa, chiudendo definitivamente la posizione debitoria. Sul piano giuridico è una transazione ai sensi degli artt. 1965 e ss. del codice civile: produce effetti solo se formalizzata per iscritto, con indicazione espressa della liberazione del debitore e della rinuncia alle azioni esecutive.",
    takeaways: [
      "Le percentuali di chiusura dipendono dall'anzianità del credito e da chi lo detiene: i crediti ceduti a società di recupero (NPL) lasciano margini di trattativa più ampi di quelli ancora in mano alla banca originaria.",
      "L'accordo va sempre messo per iscritto prima del pagamento: un versamento fatto senza liberatoria vale come semplice acconto e non estingue il debito.",
      "Il saldo e stralcio è stragiudiziale: non richiede il tribunale, ma nemmeno vincola il creditore ad accettare.",
      "Quando i creditori sono numerosi e la trattativa individuale non è realistica, le procedure di sovraindebitamento offrono un risultato analogo con effetti vincolanti per tutti.",
    ],
    updatedISO: REVISIONE,
    entities: ["Saldo e stralcio", "Transazione", "NPL", "Negoziazione stragiudiziale"],
    laws: ["Artt. 1965 e ss. c.c."],
    related: ["debiti-banche-finanziarie", "prescrizione-debiti", "sovraindebitamento-cos-e"],
  },

  "prima-casa-pignoramento": {
    answer:
      "La prima casa non è impignorabile in generale: il divieto dell'art. 76 DPR 602/1973 vale solo per l'Agenzia delle Entrate-Riscossione e solo se l'immobile è l'unico di proprietà, a uso abitativo, con residenza anagrafica del debitore e non di lusso. Banche, finanziarie, fornitori e creditori privati possono espropriarlo senza incontrare quel limite.",
    takeaways: [
      "Il divieto riguarda un solo creditore: per tutti gli altri l'abitazione principale è un bene aggredibile come ogni altro.",
      "Anche quando l'espropriazione è vietata, l'Agente della Riscossione può iscrivere ipoteca sopra i 20.000 euro di debito complessivo (art. 77 DPR 602/1973).",
      "Se una delle quattro condizioni manca, l'Agente della Riscossione può procedere oltre i 120.000 euro di debito e con ipoteca iscritta da almeno sei mesi.",
      "Fondo patrimoniale e trust costituiti a debiti già in essere sono esposti a revocatoria e all'art. 2929-bis c.c., e pregiudicano la meritevolezza nelle procedure di sovraindebitamento.",
    ],
    updatedISO: REVISIONE,
    entities: ["Pignoramento della prima casa", "Impignorabilità", "Ipoteca esattoriale", "Fondo patrimoniale"],
    laws: ["Art. 76 DPR 602/1973", "Art. 77 DPR 602/1973", "Art. 170 c.c.", "Art. 2929-bis c.c."],
    related: ["pignoramento-immobiliare", "mutuo-non-pagato-cosa-fare", "ipoteca-esattoriale"],
  },

  "prescrizione-debiti": {
    answer:
      "La prescrizione estingue il diritto del creditore che non lo esercita entro il termine di legge. Il termine ordinario è di dieci anni (art. 2946 c.c.), ma numerosi crediti si prescrivono in cinque anni — canoni, interessi, contributi previdenziali — e altri in tempi più brevi. Ogni atto di costituzione in mora interrompe la prescrizione e fa ripartire il termine da capo.",
    takeaways: [
      "La prescrizione non opera automaticamente: il giudice non può rilevarla d'ufficio, deve essere eccepita dal debitore (art. 2938 c.c.).",
      "Un sollecito, una raccomandata di messa in mora o un atto giudiziario interrompono la prescrizione; il silenzio del creditore la lascia decorrere.",
      "Per le cartelle esattoriali il termine dipende dalla natura del credito iscritto a ruolo, non dalla cartella in sé: cinque anni per contributi e tributi locali, dieci anni per le imposte erariali accertate con sentenza definitiva.",
      "Pagare anche solo un acconto su un debito prescritto equivale a riconoscerlo e fa ripartire il termine.",
    ],
    updatedISO: REVISIONE,
    entities: ["Prescrizione", "Interruzione della prescrizione", "Cartella esattoriale"],
    laws: ["Artt. 2934-2963 c.c.", "Art. 2946 c.c.", "Art. 2948 c.c."],
    related: ["cartella-esattoriale-cosa-fare", "saldo-e-stralcio-debiti", "decreto-ingiuntivo-opposizione"],
  },

  "mutuo-non-pagato-cosa-fare": {
    answer:
      "Quando le rate del mutuo restano insolute la banca può dichiarare la decadenza dal beneficio del termine e chiedere l'intero capitale residuo. Nel mutuo fondiario l'art. 40, comma 2, del Testo Unico Bancario consente alla banca di invocare la risoluzione del contratto dopo sette ritardi nei pagamenti, anche non consecutivi. Prima del pignoramento restano percorribili sospensione, rinegoziazione, surroga e saldo a stralcio.",
    takeaways: [
      "Il ritardo rilevante ai fini dell'art. 40 T.U.B. è il pagamento effettuato tra il trentesimo e il centottantesimo giorno dalla scadenza della rata.",
      "Il Fondo di solidarietà per i mutui prima casa consente, in presenza dei requisiti, la sospensione del pagamento delle rate.",
      "Dopo la risoluzione la banca agisce con il precetto e poi con il pignoramento immobiliare: fra i due passaggi c'è ancora spazio per una trattativa.",
      "Muoversi prima della decadenza dal beneficio del termine amplia molto le alternative disponibili: dopo, la banca tratta su capitale, interessi e spese già maturati.",
    ],
    updatedISO: REVISIONE,
    entities: ["Mutuo fondiario", "Decadenza dal beneficio del termine", "Pignoramento immobiliare", "Rinegoziazione"],
    laws: ["Art. 40 D.lgs. 385/1993 (T.U.B.)", "Artt. 555 e ss. c.p.c."],
    related: ["pignoramento-immobiliare", "debiti-banche-finanziarie", "saldo-e-stralcio-debiti"],
  },

  "cessione-del-quinto-problemi": {
    answer:
      "La cessione del quinto è il finanziamento rimborsato con trattenuta diretta in busta paga o sulla pensione, entro il limite di un quinto della retribuzione netta, disciplinato dal D.P.R. 180/1950. Il contratto deve essere assistito da assicurazione obbligatoria sul rischio vita e impiego. In caso di estinzione anticipata il debitore ha diritto al rimborso dei costi non maturati, secondo la sentenza Lexitor della Corte di giustizia UE.",
    takeaways: [
      "Il limite di un quinto si calcola sulla retribuzione netta; con delegazione di pagamento si può arrivare a due quinti complessivi.",
      "L'assicurazione contro il rischio di premorienza e di perdita dell'impiego è obbligatoria e a carico del finanziatore nel rapporto con il cedente.",
      "In caso di estinzione anticipata vanno restituiti i costi non maturati, inclusi quelli up-front (Corte di giustizia UE, sentenza Lexitor).",
      "La perdita del lavoro non estingue il debito: interviene la garanzia assicurativa o il TFR accantonato, secondo le condizioni di polizza.",
    ],
    updatedISO: REVISIONE,
    entities: ["Cessione del quinto", "Delegazione di pagamento", "Estinzione anticipata", "Credito al consumo"],
    laws: ["D.P.R. 180/1950", "Sentenza CGUE Lexitor (C-383/18)"],
    related: ["debiti-banche-finanziarie", "pignoramento-stipendio-limiti", "sovraindebitamento-cos-e"],
  },

  "fideiussione-come-liberarsi": {
    answer:
      "Il fideiussore risponde con tutto il proprio patrimonio dei debiti del garantito, ma la garanzia non è inattaccabile. Le Sezioni Unite della Cassazione (sent. 41994/2021) hanno dichiarato la nullità parziale delle clausole del modello ABI 2003 riprodotte nelle fideiussioni omnibus. Il garante può inoltre invocare la liberazione ex art. 1955 c.c. e la decadenza ex art. 1957 c.c. quando il creditore non agisce nei termini.",
    takeaways: [
      "La nullità riguarda le clausole di reviviscenza, rinuncia ai termini ex art. 1957 c.c. e sopravvivenza riprese dallo schema ABI: la fideiussione resta valida per il resto.",
      "L'art. 1955 c.c. libera il fideiussore quando è il comportamento del creditore a rendere impossibile la surrogazione nei suoi diritti.",
      "L'art. 1957 c.c. fa decadere la garanzia se il creditore non propone le sue istanze entro sei mesi dalla scadenza dell'obbligazione principale.",
      "Il fideiussore che paga ha diritto di regresso verso il debitore principale, spesso però su un patrimonio ormai incapiente.",
    ],
    updatedISO: REVISIONE,
    entities: ["Fideiussione", "Fideiussione omnibus", "Modello ABI 2003", "Regresso"],
    laws: ["Artt. 1936-1957 c.c.", "Art. 1955 c.c.", "Cass. SS.UU. n. 41994/2021"],
    related: ["debiti-banche-finanziarie", "decreto-ingiuntivo-opposizione", "prescrizione-debiti"],
  },

  "debiti-condominiali": {
    answer:
      "Il condomino moroso rischia un decreto ingiuntivo immediatamente esecutivo, che l'amministratore ottiene in base allo stato di ripartizione approvato (art. 63 disp. att. c.c.), la sospensione dei servizi comuni suscettibili di godimento separato e, a seguire, l'ipoteca giudiziale e il pignoramento. Chi acquista un immobile risponde in solido delle spese dell'anno in corso e di quello precedente.",
    takeaways: [
      "Il decreto ingiuntivo per spese condominiali è immediatamente esecutivo: l'opposizione non ne sospende automaticamente l'efficacia.",
      "La sospensione dei servizi comuni è ammessa solo per quelli suscettibili di godimento separato e dopo un ritardo nel pagamento di almeno sei mesi.",
      "L'acquirente è obbligato in solido con il venditore per i contributi dell'anno in corso e di quello precedente.",
      "Contestare la delibera assembleare è cosa diversa dal contestare il riparto: i termini e i rimedi non coincidono.",
    ],
    updatedISO: REVISIONE,
    entities: ["Morosità condominiale", "Decreto ingiuntivo", "Spese condominiali", "Amministratore di condominio"],
    laws: ["Art. 63 disp. att. c.c.", "Artt. 1118 e 1123 c.c."],
    related: ["decreto-ingiuntivo-opposizione", "pignoramento-immobiliare", "prescrizione-debiti"],
  },

  "debiti-agenzia-entrate": {
    answer:
      "Contro i debiti con l'Agenzia delle Entrate l'ordinamento mette a disposizione strumenti diversi a seconda della fase: ravvedimento operoso prima della contestazione, accertamento con adesione e autotutela dopo l'avviso, ricorso alle Corti di Giustizia Tributaria entro 60 giorni, rateizzazione e definizione agevolata sulle cartelle, procedure di sovraindebitamento quando il debito complessivo è insostenibile.",
    takeaways: [
      "Il ravvedimento operoso (art. 13 D.lgs. 472/1997) riduce le sanzioni tanto più quanto prima si regolarizza, ed è precluso dopo la notifica di atti di accertamento.",
      "L'accertamento con adesione sospende per 90 giorni il termine per fare ricorso e consente di ridurre le sanzioni.",
      "L'autotutela è gratuita ma non sospende i termini di impugnazione: va usata insieme al ricorso, non al suo posto.",
      "Quando il debito fiscale è solo una parte di un'esposizione complessiva insostenibile, le procedure di sovraindebitamento consentono di trattarlo insieme a tutti gli altri.",
    ],
    updatedISO: REVISIONE,
    entities: ["Agenzia delle Entrate", "Ravvedimento operoso", "Accertamento con adesione", "Autotutela", "Definizione agevolata"],
    laws: ["Art. 13 D.lgs. 472/1997", "D.lgs. 218/1997", "DPR 602/1973"],
    related: ["rottamazione-quinquies", "rateizzazione-cartelle-esattoriali", "avviso-accertamento-opposizione"],
  },

  "debiti-inps": {
    answer:
      "I contributi previdenziali non versati generano sanzioni civili calcolate secondo l'art. 116 della L. 388/2000, con misure diverse a seconda che si tratti di omissione o di evasione contributiva, e bloccano il rilascio del DURC. Il credito contributivo si prescrive in cinque anni. Il debito può essere rateizzato con l'INPS o, se già iscritto a ruolo, con l'Agenzia delle Entrate-Riscossione.",
    takeaways: [
      "L'omissione contributiva (dati denunciati ma non versati) è sanzionata meno gravemente dell'evasione (occultamento del rapporto di lavoro).",
      "La prescrizione dei contributi è quinquennale ai sensi dell'art. 3, comma 9, della L. 335/1995.",
      "Un DURC negativo blocca appalti pubblici, SAL, agevolazioni e incentivi: spesso il danno indiretto supera il debito.",
      "La rateizzazione in corso e regolarmente pagata consente il rilascio del DURC.",
    ],
    updatedISO: REVISIONE,
    entities: ["INPS", "Contributi previdenziali", "DURC", "Sanzioni civili", "Evasione contributiva"],
    laws: ["Art. 116 L. 388/2000", "Art. 3, comma 9, L. 335/1995"],
    related: ["rateizzazione-cartelle-esattoriali", "cartella-esattoriale-cosa-fare", "debiti-agenzia-entrate"],
  },

  "rateizzazione-cartelle-esattoriali": {
    answer:
      "La rateizzazione delle cartelle esattoriali (art. 19 DPR 602/1973) consente di dilazionare gli importi iscritti a ruolo e sospende le azioni esecutive dell'Agente della Riscossione. Fino a 120.000 euro di debito la dilazione si ottiene con semplice dichiarazione di temporanea difficoltà; oltre tale soglia serve documentazione (ISEE per le persone fisiche, indice di liquidità per le imprese). Per le domande del 2026 il piano ordinario arriva a 84 rate.",
    takeaways: [
      "Sotto i 120.000 euro la domanda è accolta automaticamente, salvi i controlli successivi dell'Agente della Riscossione.",
      "Il piano ordinario cresce nel tempo: 84 rate per le domande 2025-2026, 96 rate nel 2027-2028, 108 rate dal 2029.",
      "Il piano straordinario fino a 120 rate resta riservato ai casi di comprovata e grave difficoltà, sempre con documentazione.",
      "La decadenza scatta con il mancato pagamento di otto rate, anche non consecutive: da quel momento il debito torna esigibile per intero.",
    ],
    updatedISO: REVISIONE,
    entities: ["Rateizzazione", "Agenzia delle Entrate-Riscossione", "Cartella esattoriale", "ISEE"],
    laws: ["Art. 19 DPR 602/1973", "D.lgs. 110/2024", "D.M. 27 dicembre 2024"],
    related: ["cartella-esattoriale-cosa-fare", "debiti-agenzia-entrate", "rottamazione-quater"],
  },

  "fermo-amministrativo": {
    answer:
      "Il fermo amministrativo è il vincolo che l'Agente della Riscossione iscrive sul Pubblico Registro Automobilistico per garantire un credito a ruolo (art. 86 DPR 602/1973). È preceduto da un preavviso che assegna 30 giorni per pagare o rateizzare. Il veicolo sottoposto a fermo non può circolare né essere venduto; la rateizzazione accolta impedisce l'iscrizione e consente la circolazione.",
    takeaways: [
      "Il preavviso di fermo assegna 30 giorni: è la finestra utile per pagare, rateizzare o contestare.",
      "Sono esclusi dal fermo i veicoli strumentali all'attività di impresa o professione, previa dichiarazione del debitore.",
      "La rateizzazione accolta prima dell'iscrizione blocca il fermo; se il fermo è già iscritto, il pagamento del debito ne consente la cancellazione.",
      "La competenza a decidere sull'opposizione dipende dalla natura del credito: giudice tributario per i tributi, giudice ordinario per sanzioni e contributi.",
    ],
    updatedISO: REVISIONE,
    entities: ["Fermo amministrativo", "Pubblico Registro Automobilistico", "Agenzia delle Entrate-Riscossione"],
    laws: ["Art. 86 DPR 602/1973"],
    related: ["cartella-esattoriale-cosa-fare", "rateizzazione-cartelle-esattoriali", "ipoteca-esattoriale"],
  },

  "ipoteca-esattoriale": {
    answer:
      "L'ipoteca esattoriale è il vincolo che l'Agente della Riscossione iscrive sugli immobili del debitore a garanzia dei crediti a ruolo (art. 77 DPR 602/1973). Può essere iscritta solo per debiti complessivi superiori a 20.000 euro ed è preceduta da una comunicazione che assegna 30 giorni. L'ipoteca ha durata ventennale e non è, di per sé, un atto di espropriazione.",
    takeaways: [
      "La soglia dei 20.000 euro si calcola sul complesso dei carichi affidati, non sulla singola cartella.",
      "L'ipoteca è un atto conservativo: garantisce il credito ma non avvia la vendita dell'immobile.",
      "Sull'unico immobile di residenza non di lusso l'Agente della Riscossione non può procedere all'espropriazione, ma può comunque iscrivere ipoteca.",
      "Estinto il debito, la cancellazione dell'ipoteca è a cura dell'Agente della Riscossione e senza oneri per il contribuente.",
    ],
    updatedISO: REVISIONE,
    entities: ["Ipoteca esattoriale", "Agenzia delle Entrate-Riscossione", "Prima casa", "Espropriazione immobiliare"],
    laws: ["Art. 77 DPR 602/1973", "Art. 76 DPR 602/1973"],
    related: ["pignoramento-immobiliare", "cartella-esattoriale-cosa-fare", "fermo-amministrativo"],
  },

  "avviso-accertamento-opposizione": {
    answer:
      "L'avviso di accertamento è l'atto con cui l'Amministrazione finanziaria contesta maggiori imposte, sanzioni e interessi. Il contribuente ha 60 giorni dalla notifica per impugnarlo davanti alla Corte di Giustizia Tributaria di primo grado. Nello stesso termine può presentare istanza di accertamento con adesione, che sospende i termini per ulteriori 90 giorni, oppure chiedere l'annullamento in autotutela.",
    takeaways: [
      "I 60 giorni sono perentori: scaduti, la pretesa si cristallizza e diventa definitiva.",
      "L'istanza di accertamento con adesione sospende il termine di impugnazione per 90 giorni, a cui si somma la sospensione feriale dal 1° al 31 agosto.",
      "L'avviso deve essere motivato: l'obbligo di motivazione discende dall'art. 7 dello Statuto del Contribuente e la sua violazione è un vizio deducibile.",
      "L'autotutela non sospende i termini: va presentata in parallelo al ricorso, mai al suo posto.",
    ],
    updatedISO: REVISIONE,
    entities: ["Avviso di accertamento", "Corte di Giustizia Tributaria", "Accertamento con adesione", "Autotutela"],
    laws: ["Art. 7 L. 212/2000 (Statuto del Contribuente)", "D.lgs. 218/1997", "D.lgs. 546/1992"],
    related: ["contenzioso-tributario-riforma", "debiti-agenzia-entrate", "cartella-esattoriale-cosa-fare"],
  },

  "contenzioso-tributario-riforma": {
    answer:
      "Il processo tributario si svolge davanti alle Corti di Giustizia Tributaria di primo e secondo grado, che dal 2022 hanno sostituito le Commissioni tributarie e sono composte da magistrati professionali. La L. 130/2022 ha introdotto il giudice monocratico per le liti minori e la prova testimoniale scritta; il D.lgs. 220/2023 ha eliminato il reclamo-mediazione obbligatorio.",
    takeaways: [
      "Il ricorso si propone entro 60 giorni dalla notifica dell'atto impugnato e si deposita in via telematica sul PTT.",
      "L'onere della prova grava sull'Amministrazione finanziaria, che deve provare in giudizio le violazioni contestate.",
      "La prova testimoniale è ammessa solo in forma scritta e nei limiti fissati dalla legge.",
      "La conciliazione giudiziale consente di chiudere la lite con una riduzione delle sanzioni variabile secondo il grado in cui interviene.",
    ],
    updatedISO: REVISIONE,
    entities: ["Contenzioso tributario", "Corte di Giustizia Tributaria", "Processo tributario telematico", "Conciliazione giudiziale"],
    laws: ["D.lgs. 546/1992", "L. 130/2022", "D.lgs. 220/2023"],
    related: ["avviso-accertamento-opposizione", "cartella-esattoriale-cosa-fare", "debiti-agenzia-entrate"],
  },

  "decreto-ingiuntivo-opposizione": {
    answer:
      "Chi riceve un decreto ingiuntivo ha 40 giorni dalla notifica per proporre opposizione ai sensi dell'art. 645 c.p.c., con atto di citazione davanti allo stesso ufficio giudiziario che lo ha emesso. L'opposizione apre un giudizio ordinario a cognizione piena in cui si possono far valere tutte le eccezioni: prescrizione, pagamento già avvenuto, nullità del contratto, difetto di prova scritta.",
    takeaways: [
      "Il termine è di 40 giorni dalla notifica; l'inerzia rende il decreto definitivo ed esecutivo.",
      "Se il decreto è provvisoriamente esecutivo, occorre chiedere al giudice la sospensione dell'esecuzione provvisoria con istanza motivata.",
      "L'opposizione tardiva è ammessa solo per irregolarità della notifica o caso fortuito e forza maggiore (art. 650 c.p.c.).",
      "Nel giudizio di opposizione l'onere di provare il credito resta a carico del creditore che ha chiesto il decreto.",
    ],
    updatedISO: REVISIONE,
    entities: ["Decreto ingiuntivo", "Opposizione a decreto ingiuntivo", "Provvisoria esecutorietà"],
    laws: ["Art. 645 c.p.c.", "Art. 650 c.p.c.", "Artt. 633 e ss. c.p.c."],
    related: ["debiti-condominiali", "debiti-fornitori", "prescrizione-debiti"],
  },

  "pignoramento-immobiliare": {
    answer:
      "Il pignoramento immobiliare è la procedura con cui il creditore fa vendere all'asta un immobile del debitore per soddisfarsi sul ricavato (artt. 555 e ss. c.p.c.). Inizia con la notifica dell'atto di pignoramento e la sua trascrizione nei registri immobiliari, prosegue con perizia, custodia e vendita. Il debitore può chiedere la conversione del pignoramento versando una somma in rate.",
    takeaways: [
      "La conversione del pignoramento (art. 495 c.p.c.) consente di sostituire il bene con una somma di denaro versata anche ratealmente.",
      "L'Agente della Riscossione non può espropriare l'unico immobile del debitore adibito a residenza, se non di lusso, ma altri creditori sì.",
      "Le opposizioni all'esecuzione e agli atti esecutivi hanno termini stretti: gli atti si contestano entro 20 giorni.",
      "Fino al decreto di trasferimento restano praticabili accordi a stralcio e procedure di sovraindebitamento che bloccano la vendita.",
    ],
    updatedISO: REVISIONE,
    entities: ["Pignoramento immobiliare", "Esecuzione forzata", "Conversione del pignoramento", "Asta giudiziaria"],
    laws: ["Artt. 555 e ss. c.p.c.", "Art. 495 c.p.c.", "Art. 76 DPR 602/1973"],
    related: ["mutuo-non-pagato-cosa-fare", "ipoteca-esattoriale", "debiti-condominiali"],
  },

  "pignoramento-conto-corrente": {
    answer:
      "Il pignoramento del conto corrente è un pignoramento presso terzi (art. 543 c.p.c.) in cui la banca è il terzo pignorato e blocca le somme fino alla concorrenza del credito. Sulle somme accreditate a titolo di stipendio o pensione prima del pignoramento resta impignorabile l'importo pari al triplo dell'assegno sociale; sugli accrediti successivi si applicano i limiti ordinari, di regola un quinto.",
    takeaways: [
      "Il blocco riguarda il saldo esistente al momento della notifica: gli accrediti successivi seguono regole diverse.",
      "L'impignorabilità del triplo dell'assegno sociale vale per stipendi e pensioni già accreditati sul conto.",
      "La dichiarazione del terzo della banca è il momento in cui si conosce l'importo effettivamente vincolato.",
      "Conti cointestati: il pignoramento colpisce di regola la quota presunta del debitore, salvo prova contraria.",
    ],
    updatedISO: REVISIONE,
    entities: ["Pignoramento presso terzi", "Conto corrente", "Impignorabilità", "Assegno sociale"],
    laws: ["Art. 543 c.p.c.", "Art. 545 c.p.c."],
    related: ["pignoramento-stipendio-limiti", "cartella-esattoriale-cosa-fare", "sovraindebitamento-cos-e"],
  },

  "concordato-preventivo": {
    answer:
      "Il concordato preventivo è la procedura con cui l'imprenditore in stato di crisi o insolvenza propone ai creditori un piano di ristrutturazione alternativo alla liquidazione giudiziale, disciplinata dal Codice della Crisi (D.lgs. 14/2019). Può essere in continuità aziendale, quando l'attività prosegue, oppure liquidatorio. Il piano è attestato da un professionista indipendente, votato dai creditori suddivisi in classi e omologato dal tribunale.",
    takeaways: [
      "Il concordato in continuità mira a conservare l'attività e i posti di lavoro; quello liquidatorio richiede un apporto di risorse esterne che aumenti la soddisfazione dei creditori.",
      "L'attestatore indipendente certifica la veridicità dei dati aziendali e la fattibilità del piano.",
      "La domanda produce misure protettive che bloccano le azioni esecutive dei creditori.",
      "La transazione fiscale consente di proporre il pagamento parziale o dilazionato dei tributi e dei contributi.",
    ],
    updatedISO: REVISIONE,
    entities: ["Concordato preventivo", "Continuità aziendale", "Transazione fiscale", "Attestatore"],
    laws: ["D.lgs. 14/2019 (CCII)", "Art. 84 CCII"],
    related: ["composizione-negoziata", "liquidazione-giudiziale", "debiti-fornitori"],
  },

  "liquidazione-giudiziale": {
    answer:
      "La liquidazione giudiziale è la procedura che dal 2022 ha sostituito il fallimento, disciplinata dal Codice della Crisi (D.lgs. 14/2019). Si apre con sentenza del tribunale nei confronti dell'imprenditore commerciale insolvente che supera le soglie di legge, comporta lo spossessamento del patrimonio e la nomina di un curatore. L'imprenditore persona fisica può ottenere l'esdebitazione dai debiti residui.",
    takeaways: [
      "Restano esclusi dalla liquidazione giudiziale gli imprenditori minori, che accedono invece alle procedure di sovraindebitamento.",
      "Il curatore gestisce il patrimonio, forma lo stato passivo e liquida l'attivo sotto la vigilanza del giudice delegato.",
      "L'esdebitazione del debitore persona fisica opera di diritto decorsi tre anni dall'apertura della procedura (art. 278 CCII).",
      "Le azioni revocatorie consentono al curatore di recuperare atti pregiudizievoli compiuti prima dell'apertura.",
    ],
    updatedISO: REVISIONE,
    entities: ["Liquidazione giudiziale", "Fallimento", "Curatore", "Stato passivo", "Esdebitazione"],
    laws: ["D.lgs. 14/2019 (CCII)", "Art. 278 CCII"],
    related: ["concordato-preventivo", "composizione-negoziata", "sovraindebitamento-cos-e"],
  },

  "esdebitazione-incapiente": {
    answer:
      "L'esdebitazione del debitore incapiente (art. 283 CCII) consente al debitore persona fisica meritevole, che non dispone di alcun patrimonio né di redditi aggredibili, di ottenere la cancellazione integrale dei debiti senza pagare nulla ai creditori. È concessa una sola volta nella vita, su domanda presentata tramite un OCC, e obbliga il debitore a comunicare per quattro anni le sopravvenienze rilevanti.",
    takeaways: [
      "Il beneficio è riservato al debitore incapiente meritevole: nessun atto in frode, nessun indebitamento colposo e grave.",
      "L'esdebitazione dell'incapiente può essere concessa una sola volta nella vita.",
      "Nei quattro anni successivi il debitore deve dichiarare le utilità rilevanti sopravvenute, che vanno destinate ai creditori.",
      "La domanda si presenta con l'assistenza dell'OCC, che redige la relazione particolareggiata sulle cause del sovraindebitamento.",
    ],
    updatedISO: REVISIONE,
    entities: ["Esdebitazione del debitore incapiente", "Sovraindebitamento", "Meritevolezza", "OCC"],
    laws: ["Art. 283 CCII", "D.lgs. 14/2019"],
    related: ["sovraindebitamento-cos-e", "liquidazione-controllata-sovraindebitato", "piano-consumatore"],
  },

  "cartella-esattoriale-cosa-fare": {
    answer:
      "Dalla notifica di una cartella esattoriale decorrono 60 giorni per pagare, chiedere la rateizzazione o impugnarla davanti al giudice competente. Scaduto il termine senza iniziative, l'Agenzia delle Entrate-Riscossione può iscrivere fermi e ipoteche e avviare i pignoramenti. Prima di pagare conviene verificare la regolarità della notifica e la prescrizione del credito iscritto a ruolo.",
    takeaways: [
      "I 60 giorni servono per scegliere: pagamento, rateizzazione, ricorso o definizione agevolata quando aperta.",
      "La rateizzazione sospende le azioni esecutive ma comporta il riconoscimento del debito.",
      "La verifica della notifica e della prescrizione va fatta prima di qualsiasi pagamento: un pagamento parziale interrompe la prescrizione.",
      "Il giudice competente dipende dalla natura del credito: tributario per le imposte, ordinario per contributi e sanzioni amministrative.",
    ],
    updatedISO: REVISIONE,
    entities: ["Cartella esattoriale", "Agenzia delle Entrate-Riscossione", "Prescrizione", "Rateizzazione"],
    laws: ["DPR 602/1973", "D.lgs. 546/1992"],
    related: ["rateizzazione-cartelle-esattoriali", "prescrizione-debiti", "rottamazione-quater"],
  },

  "composizione-negoziata": {
    answer:
      "La composizione negoziata della crisi (artt. 12-25 CCII) è un percorso volontario, riservato e stragiudiziale con cui l'imprenditore in difficoltà chiede la nomina di un esperto indipendente tramite la piattaforma telematica nazionale. L'esperto agevola le trattative con creditori, banche e fisco. L'imprenditore conserva la gestione dell'impresa e può chiedere al tribunale misure protettive che bloccano le azioni esecutive.",
    takeaways: [
      "L'accesso è volontario e non produce lo spossessamento: l'imprenditore resta alla guida dell'azienda.",
      "L'esperto indipendente è nominato da una commissione e non decide, ma facilita le trattative.",
      "Le misure protettive vanno chieste al tribunale e pubblicate nel registro delle imprese per essere efficaci.",
      "La composizione negoziata si attiva prima dell'insolvenza conclamata: tardare riduce drasticamente le alternative disponibili.",
    ],
    updatedISO: REVISIONE,
    entities: ["Composizione negoziata", "Esperto indipendente", "Misure protettive", "Crisi d'impresa"],
    laws: ["Artt. 12-25 CCII", "D.L. 118/2021"],
    related: ["concordato-preventivo", "debiti-fornitori", "liquidazione-giudiziale"],
  },

  "pignoramento-stipendio-limiti": {
    answer:
      "Lo stipendio può essere pignorato di regola nel limite di un quinto del netto (art. 545 c.p.c.). Per i crediti alimentari la quota è stabilita dal giudice, mentre per i crediti tributari valgono soglie graduate in base all'importo della retribuzione. In caso di concorso di più pignoramenti di natura diversa il prelievo complessivo non può comunque superare la metà dello stipendio.",
    takeaways: [
      "Il quinto si calcola sulla retribuzione netta, non sul lordo.",
      "Sulla pensione è impignorabile una quota pari all'assegno sociale aumentato della metà; solo l'eccedenza è aggredibile nei limiti ordinari (art. 545, comma 7, c.p.c.).",
      "Il datore di lavoro, come terzo pignorato, è obbligato a trattenere e versare la quota: non ha discrezionalità.",
      "Il debitore può chiedere la conversione del pignoramento o proporre opposizione se i limiti non sono rispettati.",
    ],
    updatedISO: REVISIONE,
    entities: ["Pignoramento dello stipendio", "Regola del quinto", "Impignorabilità", "Pignoramento presso terzi"],
    laws: ["Art. 545 c.p.c.", "Art. 72-ter DPR 602/1973"],
    related: ["pignoramento-conto-corrente", "cessione-del-quinto-problemi", "sovraindebitamento-cos-e"],
  },

  "rottamazione-quater": {
    answer:
      "La rottamazione quater è la definizione agevolata introdotta dalla L. 197/2022: consente di pagare i carichi affidati alla riscossione dal 2000 al 30 giugno 2022 senza sanzioni né interessi di mora. I termini di adesione sono chiusi e restano in corso solo i piani già attivi. Per i debiti affidati fino al 31 dicembre 2023 la definizione oggi disponibile è la rottamazione quinquies, prevista dalla Legge di Bilancio 2026.",
    takeaways: [
      "Con la rottamazione si paga il capitale e si azzerano sanzioni, interessi di mora e aggio.",
      "Chi è già in rottamazione quater deve rispettare le scadenze del proprio piano: il mancato pagamento di una rata comporta la decadenza e la ripresa del debito integrale.",
      "La rottamazione quinquies riguarda i carichi affidati dal 2000 al 31 dicembre 2023, con piano fino a 54 rate bimestrali in nove anni.",
      "Aderire significa rinunciare al contenzioso: conviene verificare prima notifica e prescrizione delle cartelle incluse.",
    ],
    updatedISO: REVISIONE,
    entities: ["Rottamazione quater", "Rottamazione quinquies", "Definizione agevolata", "Agenzia delle Entrate-Riscossione"],
    laws: ["L. 197/2022", "Legge di Bilancio 2026"],
    related: ["rateizzazione-cartelle-esattoriali", "cartella-esattoriale-cosa-fare", "prescrizione-debiti"],
  },

  "rottamazione-quinquies": {
    answer:
      "La rottamazione quinquies è la definizione agevolata introdotta dalla Legge di Bilancio 2026: azzera sanzioni, interessi di mora e aggio sui carichi affidati alla riscossione dal 1° gennaio 2000 al 31 dicembre 2023 derivanti da omesso versamento di imposte dichiarate e contributi INPS. Il pagamento avviene in unica soluzione entro il 31 luglio 2026 o in un massimo di 54 rate bimestrali, con interessi del 3% annuo.",
    takeaways: [
      "Il termine per aderire era il 30 aprile 2026 ed è perentorio: chi non ha presentato domanda resta con la rateizzazione ordinaria, l'impugnazione o le procedure di sovraindebitamento.",
      "Restano fuori dalla quinquies le somme richieste con avviso di accertamento: la misura riguarda i carichi da omesso versamento e i contributi INPS non da accertamento.",
      "Le prime tre scadenze del 2026 sono il 31 luglio, il 30 settembre e il 30 novembre; poi la cadenza è bimestrale dal 2027, con tolleranza di cinque giorni sul singolo versamento.",
      "Si decade con il mancato pagamento di due rate anche non consecutive o dell'ultima rata: il debito torna dovuto per intero con sanzioni e interessi di mora.",
    ],
    updatedISO: REVISIONE,
    entities: ["Rottamazione quinquies", "Definizione agevolata", "Agenzia delle Entrate-Riscossione", "Decadenza"],
    laws: ["Legge di Bilancio 2026", "DPR 602/1973"],
    related: ["rottamazione-quater", "rateizzazione-cartelle-esattoriali", "cartella-esattoriale-cosa-fare"],
  },

  "piano-consumatore": {
    answer:
      "Il piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) è la procedura di sovraindebitamento riservata a chi ha contratto debiti per scopi estranei all'attività d'impresa o professionale. Il consumatore propone un piano di pagamento sostenibile e il tribunale lo omologa senza voto dei creditori, valutata la fattibilità e l'assenza di colpa grave, malafede o frode.",
    takeaways: [
      "È l'unica procedura di sovraindebitamento in cui i creditori non votano: decide il giudice.",
      "Il piano può prevedere il pagamento parziale e dilazionato dei debiti, anche di quelli fiscali e contributivi.",
      "La domanda si presenta con la relazione di un OCC, che ricostruisce le cause dell'indebitamento.",
      "Con l'omologazione le azioni esecutive dei creditori anteriori restano bloccate e, eseguito il piano, si ottiene l'esdebitazione.",
    ],
    updatedISO: REVISIONE,
    entities: ["Piano del consumatore", "Ristrutturazione dei debiti del consumatore", "Sovraindebitamento", "OCC"],
    laws: ["Artt. 67-73 CCII", "D.lgs. 14/2019"],
    related: ["sovraindebitamento-cos-e", "esdebitazione-incapiente", "cessione-del-quinto-problemi"],
  },

  "debiti-banche-finanziarie": {
    answer:
      "Quando un finanziamento resta insoluto la banca segnala il credito in Centrale dei Rischi, revoca gli affidamenti, dichiara la decadenza dal beneficio del termine e agisce con decreto ingiuntivo o precetto. Il credito deteriorato viene spesso ceduto a operatori NPL, che trattano transazioni a saldo e stralcio. Per il debitore la scelta è fra rinegoziazione, accordo transattivo e procedure di sovraindebitamento.",
    takeaways: [
      "La segnalazione a sofferenza in Centrale dei Rischi non è automatica: presuppone una valutazione della situazione complessiva del debitore, non un singolo ritardo.",
      "Dopo la cessione a un operatore NPL il credito è normalmente acquistato a una frazione del nominale: i margini di trattativa si allargano.",
      "Ogni accordo va formalizzato per iscritto con la liberazione espressa del debitore prima di effettuare il pagamento.",
      "Quando i creditori sono più di uno e l'esposizione è insostenibile, le procedure di sovraindebitamento producono effetti vincolanti per tutti.",
    ],
    updatedISO: REVISIONE,
    entities: ["Debiti bancari", "Centrale dei Rischi", "NPL", "Saldo e stralcio", "Decadenza dal beneficio del termine"],
    laws: ["D.lgs. 385/1993 (T.U.B.)", "D.lgs. 14/2019 (CCII)"],
    related: ["saldo-e-stralcio-debiti", "mutuo-non-pagato-cosa-fare", "fideiussione-come-liberarsi"],
  },

  "debiti-fornitori": {
    answer:
      "I debiti verso fornitori si trasformano rapidamente in decreti ingiuntivi provvisoriamente esecutivi e blocco delle forniture. L'imprenditore può negoziare piani di rientro e transazioni stragiudiziali, opporsi al decreto entro 40 giorni quando la pretesa è contestabile e, se la difficoltà è strutturale, accedere alla composizione negoziata o al concordato preventivo, che sospendono le azioni esecutive.",
    takeaways: [
      "Un piano di rientro scritto e rispettato vale più di qualunque rassicurazione verbale: interrompe l'escalation e mantiene la fornitura.",
      "Il decreto ingiuntivo va valutato entro 40 giorni: dopo diventa definitivo, anche se il credito era contestabile.",
      "Gli indicatori di crisi vanno monitorati: gli assetti adeguati sono un obbligo dell'imprenditore ai sensi dell'art. 2086 c.c.",
      "La composizione negoziata consente di trattare con tutti i fornitori sotto la guida di un esperto indipendente, mantenendo la gestione dell'impresa.",
    ],
    updatedISO: REVISIONE,
    entities: ["Debiti commerciali", "Piano di rientro", "Composizione negoziata", "Decreto ingiuntivo"],
    laws: ["Art. 2086 c.c.", "Artt. 633 e ss. c.p.c.", "Artt. 12-25 CCII"],
    related: ["composizione-negoziata", "decreto-ingiuntivo-opposizione", "concordato-preventivo"],
  },
};
