/**
 * Glossario del debito.
 *
 * Le query "cos'è X" sono quelle su cui un motore di risposta restituisce una
 * definizione secca, spesso senza che l'utente apra alcun risultato: se la
 * definizione citata è la tua, il brand entra nella risposta. Ogni voce è
 * scritta per stare in piedi da sola — nomina il termine per esteso, cita la
 * norma quando esiste, e non rimanda a un "come visto sopra" che nel contesto
 * di un assistente AI non esiste.
 *
 * Ogni voce ha un'ancora propria (/glossario#slug), quindi è citabile come URL
 * singolo, e alimenta uno schema DefinedTerm dentro un DefinedTermSet.
 */

export type GlossaryArea =
  | "Sovraindebitamento"
  | "Crisi d'impresa"
  | "Fisco e riscossione"
  | "Esecuzioni"
  | "Credito e garanzie";

export type GlossaryEntry = {
  slug: string;
  term: string;
  /** Definizione autoconsistente, 25-50 parole. */
  definition: string;
  /** Riferimento normativo principale, quando esiste. */
  law?: string;
  /** Slug dell'articolo che approfondisce il termine. */
  article?: string;
  area: GlossaryArea;
};

export const GLOSSARY: GlossaryEntry[] = [
  // --- Sovraindebitamento ---------------------------------------------------
  {
    slug: "sovraindebitamento",
    term: "Sovraindebitamento",
    definition:
      "Il sovraindebitamento è lo stato di crisi o insolvenza del debitore che non può accedere alla liquidazione giudiziale: consumatore, professionista, imprenditore minore, imprenditore agricolo e start-up innovativa. È il presupposto per accedere alle procedure dedicate del Codice della Crisi.",
    law: "Art. 2, lett. c) CCII",
    article: "sovraindebitamento-cos-e",
    area: "Sovraindebitamento",
  },
  {
    slug: "esdebitazione",
    term: "Esdebitazione",
    definition:
      "L'esdebitazione è la liberazione del debitore persona fisica dai debiti non soddisfatti al termine di una procedura concorsuale o di sovraindebitamento. I creditori rimasti insoddisfatti non possono più pretendere il pagamento della parte residua.",
    law: "Artt. 278-283 CCII",
    article: "sovraindebitamento-cos-e",
    area: "Sovraindebitamento",
  },
  {
    slug: "esdebitazione-del-debitore-incapiente",
    term: "Esdebitazione del debitore incapiente",
    definition:
      "L'esdebitazione del debitore incapiente cancella integralmente i debiti del debitore persona fisica meritevole che non ha alcun patrimonio né reddito aggredibile, senza pagare nulla ai creditori. È concessa una sola volta nella vita e obbliga a dichiarare per quattro anni le sopravvenienze rilevanti.",
    law: "Art. 283 CCII",
    article: "esdebitazione-incapiente",
    area: "Sovraindebitamento",
  },
  {
    slug: "piano-del-consumatore",
    term: "Piano del consumatore",
    definition:
      "Il piano di ristrutturazione dei debiti del consumatore è la procedura di sovraindebitamento riservata a chi ha contratto debiti per scopi estranei all'attività d'impresa o professionale. È l'unica in cui i creditori non votano: il tribunale omologa valutando fattibilità e assenza di colpa grave.",
    law: "Artt. 67-73 CCII",
    article: "piano-consumatore",
    area: "Sovraindebitamento",
  },
  {
    slug: "concordato-minore",
    term: "Concordato minore",
    definition:
      "Il concordato minore è la procedura di sovraindebitamento con cui imprenditori minori, professionisti e imprenditori agricoli propongono ai creditori un piano di ristrutturazione alternativo alla liquidazione. Richiede il voto favorevole della maggioranza dei crediti ammessi e l'omologazione del tribunale.",
    law: "Artt. 74-83 CCII",
    article: "concordato-minore",
    area: "Sovraindebitamento",
  },
  {
    slug: "liquidazione-controllata",
    term: "Liquidazione controllata",
    definition:
      "La liquidazione controllata del sovraindebitato è la procedura liquidatoria per chi non è assoggettabile a liquidazione giudiziale: un liquidatore nominato dal tribunale realizza il patrimonio a favore dei creditori. Il debitore persona fisica è liberato di diritto dai debiti residui dopo tre anni.",
    law: "Artt. 268-277 CCII",
    article: "liquidazione-controllata-sovraindebitato",
    area: "Sovraindebitamento",
  },
  {
    slug: "occ",
    term: "OCC (Organismo di Composizione della Crisi)",
    definition:
      "L'OCC è l'organismo che assiste obbligatoriamente il debitore in tutte le procedure di sovraindebitamento: nomina un gestore, ricostruisce la posizione debitoria, verifica la documentazione, attesta la fattibilità del piano e relaziona al tribunale. Senza la sua relazione la domanda è inammissibile.",
    law: "D.lgs. 14/2019 e DM 202/2014",
    article: "occ-organismo-composizione-crisi",
    area: "Sovraindebitamento",
  },
  {
    slug: "gestore-della-crisi",
    term: "Gestore della crisi",
    definition:
      "Il gestore della crisi è il professionista che l'OCC designa per seguire il singolo caso di sovraindebitamento. È terzo e indipendente rispetto al debitore: redige la relazione particolareggiata sulle cause dell'indebitamento e attesta la fattibilità del piano.",
    law: "DM 202/2014",
    article: "occ-organismo-composizione-crisi",
    area: "Sovraindebitamento",
  },
  {
    slug: "meritevolezza",
    term: "Meritevolezza",
    definition:
      "La meritevolezza è la valutazione della condotta del debitore che condiziona l'accesso ai benefici delle procedure di sovraindebitamento. Escludono il beneficio gli atti in frode ai creditori e l'indebitamento assunto con colpa grave o malafede, non la semplice imprudenza economica.",
    article: "esdebitazione-incapiente",
    area: "Sovraindebitamento",
  },

  // --- Crisi d'impresa ------------------------------------------------------
  {
    slug: "composizione-negoziata",
    term: "Composizione negoziata della crisi",
    definition:
      "La composizione negoziata è un percorso volontario, riservato e stragiudiziale in cui l'imprenditore in difficoltà chiede la nomina di un esperto indipendente che agevola le trattative con i creditori. L'imprenditore conserva la gestione dell'impresa e può ottenere misure protettive dal tribunale.",
    law: "Artt. 12-25 CCII",
    article: "composizione-negoziata",
    area: "Crisi d'impresa",
  },
  {
    slug: "esperto-indipendente",
    term: "Esperto indipendente",
    definition:
      "L'esperto indipendente è il professionista nominato da una commissione nella composizione negoziata della crisi. Non decide e non gestisce: facilita le trattative fra imprenditore e creditori e valuta se esistono concrete prospettive di risanamento.",
    law: "Art. 13 CCII",
    article: "composizione-negoziata",
    area: "Crisi d'impresa",
  },
  {
    slug: "misure-protettive",
    term: "Misure protettive",
    definition:
      "Le misure protettive sono i provvedimenti con cui il tribunale blocca le azioni esecutive e cautelari dei creditori sul patrimonio dell'impresa durante un percorso di regolazione della crisi. Vanno richieste espressamente e pubblicate nel registro delle imprese per essere efficaci.",
    law: "Artt. 18-19 CCII",
    article: "composizione-negoziata",
    area: "Crisi d'impresa",
  },
  {
    slug: "concordato-preventivo",
    term: "Concordato preventivo",
    definition:
      "Il concordato preventivo è la procedura con cui l'imprenditore in crisi o insolvenza propone ai creditori un piano di ristrutturazione alternativo alla liquidazione giudiziale. Può essere in continuità aziendale o liquidatorio, è votato dai creditori suddivisi in classi e omologato dal tribunale.",
    law: "Artt. 84 e ss. CCII",
    article: "concordato-preventivo",
    area: "Crisi d'impresa",
  },
  {
    slug: "continuita-aziendale",
    term: "Continuità aziendale",
    definition:
      "La continuità aziendale è la prosecuzione dell'attività d'impresa durante e dopo la procedura di regolazione della crisi, diretta quando prosegue lo stesso imprenditore o indiretta quando l'azienda passa a un terzo. Il Codice della Crisi la favorisce rispetto alla mera liquidazione.",
    law: "Art. 84 CCII",
    article: "concordato-preventivo",
    area: "Crisi d'impresa",
  },
  {
    slug: "attestatore",
    term: "Attestatore",
    definition:
      "L'attestatore è il professionista indipendente che certifica la veridicità dei dati aziendali e la fattibilità del piano di risanamento o di concordato. La sua relazione è il documento su cui creditori e tribunale misurano l'attendibilità della proposta.",
    law: "Art. 87 CCII",
    article: "concordato-preventivo",
    area: "Crisi d'impresa",
  },
  {
    slug: "transazione-fiscale",
    term: "Transazione fiscale",
    definition:
      "La transazione fiscale è lo strumento che consente, all'interno degli strumenti di regolazione della crisi, di proporre il pagamento parziale o dilazionato di tributi e contributi previdenziali. È la via con cui il debito fiscale entra in un piano di ristrutturazione.",
    law: "Art. 63 e art. 88 CCII",
    article: "concordato-preventivo",
    area: "Crisi d'impresa",
  },
  {
    slug: "liquidazione-giudiziale",
    term: "Liquidazione giudiziale",
    definition:
      "La liquidazione giudiziale è la procedura che dal 2022 ha sostituito il fallimento: si apre con sentenza del tribunale verso l'imprenditore commerciale insolvente sopra le soglie di legge, comporta lo spossessamento del patrimonio e la nomina di un curatore.",
    law: "Artt. 121 e ss. CCII",
    article: "liquidazione-giudiziale",
    area: "Crisi d'impresa",
  },
  {
    slug: "curatore",
    term: "Curatore",
    definition:
      "Il curatore è l'organo nominato dal tribunale nella liquidazione giudiziale: amministra il patrimonio del debitore, forma lo stato passivo, liquida l'attivo e ripartisce il ricavato fra i creditori sotto la vigilanza del giudice delegato.",
    law: "Artt. 125 e ss. CCII",
    article: "liquidazione-giudiziale",
    area: "Crisi d'impresa",
  },
  {
    slug: "stato-passivo",
    term: "Stato passivo",
    definition:
      "Lo stato passivo è l'elenco dei crediti ammessi alla procedura concorsuale, con il rispettivo grado di privilegio, formato dal curatore ed esecutivo dopo il decreto del giudice delegato. Chi non vi è ammesso non partecipa ai riparti.",
    law: "Artt. 200 e ss. CCII",
    article: "liquidazione-giudiziale",
    area: "Crisi d'impresa",
  },
  {
    slug: "assetti-adeguati",
    term: "Assetti adeguati",
    definition:
      "Gli assetti adeguati sono l'organizzazione amministrativa e contabile che l'imprenditore ha l'obbligo di adottare per rilevare tempestivamente la crisi e la perdita di continuità aziendale. Non è una buona pratica: è un dovere dell'organo amministrativo.",
    law: "Art. 2086 c.c.",
    article: "debiti-fornitori",
    area: "Crisi d'impresa",
  },

  // --- Fisco e riscossione --------------------------------------------------
  {
    slug: "cartella-esattoriale",
    term: "Cartella esattoriale",
    definition:
      "La cartella esattoriale è l'atto con cui l'Agente della Riscossione intima il pagamento delle somme iscritte a ruolo. Dalla notifica decorrono 60 giorni per pagare, chiedere la rateizzazione o impugnarla davanti al giudice competente per la natura del credito.",
    law: "DPR 602/1973",
    article: "cartella-esattoriale-cosa-fare",
    area: "Fisco e riscossione",
  },
  {
    slug: "ruolo",
    term: "Ruolo",
    definition:
      "Il ruolo è l'elenco dei debitori e delle somme dovute che l'ente creditore forma e affida all'Agente della Riscossione. È il titolo in forza del quale la riscossione può procedere: la cartella ne è la comunicazione al contribuente.",
    law: "Art. 10 DPR 602/1973",
    article: "cartella-esattoriale-cosa-fare",
    area: "Fisco e riscossione",
  },
  {
    slug: "estratto-di-ruolo",
    term: "Estratto di ruolo",
    definition:
      "L'estratto di ruolo è il documento che riepiloga tutti i carichi affidati all'Agente della Riscossione a nome di un contribuente, con date di affidamento, importi e stato. È il primo documento da acquisire per sapere che cosa è realmente dovuto ed esigibile.",
    article: "cartella-esattoriale-cosa-fare",
    area: "Fisco e riscossione",
  },
  {
    slug: "agente-della-riscossione",
    term: "Agente della Riscossione (AdER)",
    definition:
      "L'Agenzia delle Entrate-Riscossione è l'ente pubblico che riscuote per conto dello Stato e di altri enti le somme iscritte a ruolo. Notifica cartelle e intimazioni, concede rateizzazioni e adotta misure cautelari ed esecutive come fermo, ipoteca e pignoramento.",
    article: "cartella-esattoriale-cosa-fare",
    area: "Fisco e riscossione",
  },
  {
    slug: "definizione-agevolata",
    term: "Definizione agevolata (rottamazione)",
    definition:
      "La definizione agevolata, comunemente detta rottamazione, consente di estinguere i carichi affidati alla riscossione pagando il capitale senza sanzioni, interessi di mora e aggio. È una misura temporanea: si applica ai carichi e ai termini indicati dalla legge che la introduce.",
    law: "Legge di Bilancio 2026 (rottamazione quinquies)",
    article: "rottamazione-quinquies",
    area: "Fisco e riscossione",
  },
  {
    slug: "rateizzazione",
    term: "Rateizzazione delle cartelle",
    definition:
      "La rateizzazione consente di dilazionare gli importi iscritti a ruolo e sospende le azioni esecutive e cautelari dell'Agente della Riscossione. Fino a 120.000 euro si ottiene con semplice dichiarazione di temporanea difficoltà; oltre tale soglia serve documentazione.",
    law: "Art. 19 DPR 602/1973",
    article: "rateizzazione-cartelle-esattoriali",
    area: "Fisco e riscossione",
  },
  {
    slug: "fermo-amministrativo",
    term: "Fermo amministrativo",
    definition:
      "Il fermo amministrativo è il vincolo che l'Agente della Riscossione iscrive sul Pubblico Registro Automobilistico a garanzia di un credito a ruolo. Il veicolo sottoposto a fermo non può circolare né essere venduto; l'iscrizione è preceduta da un preavviso con 30 giorni di tempo.",
    law: "Art. 86 DPR 602/1973",
    article: "fermo-amministrativo",
    area: "Fisco e riscossione",
  },
  {
    slug: "ipoteca-esattoriale",
    term: "Ipoteca esattoriale",
    definition:
      "L'ipoteca esattoriale è il vincolo che l'Agente della Riscossione iscrive sugli immobili del debitore a garanzia dei crediti a ruolo, solo per debiti complessivi superiori a 20.000 euro. Ha durata ventennale ed è un atto conservativo, non di espropriazione.",
    law: "Art. 77 DPR 602/1973",
    article: "ipoteca-esattoriale",
    area: "Fisco e riscossione",
  },
  {
    slug: "avviso-di-accertamento",
    term: "Avviso di accertamento",
    definition:
      "L'avviso di accertamento è l'atto con cui l'Amministrazione finanziaria contesta al contribuente maggiori imposte, sanzioni e interessi rispetto al dichiarato. Va impugnato entro 60 giorni dalla notifica davanti alla Corte di Giustizia Tributaria, pena la definitività della pretesa.",
    law: "D.lgs. 546/1992",
    article: "avviso-accertamento-opposizione",
    area: "Fisco e riscossione",
  },
  {
    slug: "autotutela",
    term: "Autotutela",
    definition:
      "L'autotutela è il potere dell'Amministrazione finanziaria di annullare o correggere d'ufficio un proprio atto illegittimo, anche su istanza del contribuente. È gratuita ma non sospende i termini di impugnazione: va usata insieme al ricorso, non al suo posto.",
    law: "L. 212/2000",
    article: "avviso-accertamento-opposizione",
    area: "Fisco e riscossione",
  },
  {
    slug: "accertamento-con-adesione",
    term: "Accertamento con adesione",
    definition:
      "L'accertamento con adesione è il procedimento in contraddittorio con cui contribuente e Amministrazione finanziaria definiscono la pretesa evitando il giudizio, con riduzione delle sanzioni. L'istanza sospende per 90 giorni il termine per proporre ricorso.",
    law: "D.lgs. 218/1997",
    article: "debiti-agenzia-entrate",
    area: "Fisco e riscossione",
  },
  {
    slug: "ravvedimento-operoso",
    term: "Ravvedimento operoso",
    definition:
      "Il ravvedimento operoso consente al contribuente di regolarizzare spontaneamente omessi o tardivi versamenti pagando una sanzione ridotta, tanto più bassa quanto prima interviene. È precluso dopo la notifica di atti di accertamento o di liquidazione.",
    law: "Art. 13 D.lgs. 472/1997",
    article: "debiti-agenzia-entrate",
    area: "Fisco e riscossione",
  },
  {
    slug: "corte-di-giustizia-tributaria",
    term: "Corte di Giustizia Tributaria",
    definition:
      "Le Corti di Giustizia Tributaria di primo e secondo grado sono gli organi giurisdizionali che dal 2022 hanno sostituito le Commissioni tributarie, composti da magistrati professionali. Decidono le controversie fra contribuente e Amministrazione finanziaria.",
    law: "L. 130/2022",
    article: "contenzioso-tributario-riforma",
    area: "Fisco e riscossione",
  },
  {
    slug: "durc",
    term: "DURC",
    definition:
      "Il DURC è il documento che attesta la regolarità dei versamenti contributivi di un'impresa o di un professionista. Un DURC negativo blocca appalti pubblici, pagamenti dei SAL e incentivi; una rateizzazione regolarmente pagata ne consente il rilascio.",
    article: "debiti-inps",
    area: "Fisco e riscossione",
  },
  {
    slug: "sanzioni-civili-inps",
    term: "Sanzioni civili INPS",
    definition:
      "Le sanzioni civili sono le somme aggiuntive dovute all'INPS per il mancato o tardivo versamento dei contributi. La misura cambia a seconda che si tratti di omissione contributiva, con i dati regolarmente denunciati, o di evasione, con occultamento del rapporto di lavoro.",
    law: "Art. 116 L. 388/2000",
    article: "debiti-inps",
    area: "Fisco e riscossione",
  },

  // --- Esecuzioni -----------------------------------------------------------
  {
    slug: "titolo-esecutivo",
    term: "Titolo esecutivo",
    definition:
      "Il titolo esecutivo è l'atto che attribuisce al creditore il diritto di procedere all'esecuzione forzata: una sentenza, un decreto ingiuntivo esecutivo, una cambiale, un atto notarile. Senza titolo esecutivo non può esserci pignoramento.",
    law: "Art. 474 c.p.c.",
    article: "decreto-ingiuntivo-opposizione",
    area: "Esecuzioni",
  },
  {
    slug: "precetto",
    term: "Atto di precetto",
    definition:
      "Il precetto è l'intimazione, notificata in base a un titolo esecutivo, ad adempiere entro un termine non inferiore a dieci giorni. È l'ultimo atto prima del pignoramento e perde efficacia se l'esecuzione non inizia entro novanta giorni.",
    law: "Artt. 480-481 c.p.c.",
    article: "decreto-ingiuntivo-opposizione",
    area: "Esecuzioni",
  },
  {
    slug: "decreto-ingiuntivo",
    term: "Decreto ingiuntivo",
    definition:
      "Il decreto ingiuntivo è il provvedimento con cui il giudice, su ricorso del creditore e in base a prova scritta, ordina al debitore di pagare. Il debitore ha 40 giorni dalla notifica per proporre opposizione, dopo i quali il decreto diventa definitivo.",
    law: "Artt. 633 e ss. c.p.c.",
    article: "decreto-ingiuntivo-opposizione",
    area: "Esecuzioni",
  },
  {
    slug: "opposizione-a-decreto-ingiuntivo",
    term: "Opposizione a decreto ingiuntivo",
    definition:
      "L'opposizione a decreto ingiuntivo è il giudizio ordinario, introdotto con atto di citazione entro 40 giorni dalla notifica, in cui il debitore può far valere ogni eccezione: prescrizione, pagamento già avvenuto, nullità del contratto, difetto di prova.",
    law: "Art. 645 c.p.c.",
    article: "decreto-ingiuntivo-opposizione",
    area: "Esecuzioni",
  },
  {
    slug: "pignoramento",
    term: "Pignoramento",
    definition:
      "Il pignoramento è l'atto con cui inizia l'espropriazione forzata: rende indisponibili determinati beni o crediti del debitore, che vengono destinati a soddisfare il creditore procedente e gli altri creditori intervenuti.",
    law: "Artt. 491 e ss. c.p.c.",
    article: "pignoramento-conto-corrente",
    area: "Esecuzioni",
  },
  {
    slug: "pignoramento-presso-terzi",
    term: "Pignoramento presso terzi",
    definition:
      "Il pignoramento presso terzi colpisce crediti che il debitore vanta verso un terzo — lo stipendio presso il datore di lavoro, il saldo presso la banca. Il terzo pignorato è obbligato a rendere la dichiarazione e a vincolare le somme.",
    law: "Art. 543 c.p.c.",
    article: "pignoramento-conto-corrente",
    area: "Esecuzioni",
  },
  {
    slug: "impignorabilita",
    term: "Impignorabilità",
    definition:
      "L'impignorabilità è il limite legale che sottrae all'esecuzione forzata determinati beni e quote di reddito. Sullo stipendio la quota pignorabile è di regola un quinto del netto; sulle somme già accreditate in conto è impignorabile l'importo pari al triplo dell'assegno sociale.",
    law: "Art. 545 c.p.c.",
    article: "pignoramento-stipendio-limiti",
    area: "Esecuzioni",
  },
  {
    slug: "conversione-del-pignoramento",
    term: "Conversione del pignoramento",
    definition:
      "La conversione del pignoramento consente al debitore di sostituire i beni pignorati con una somma di denaro, versata anche a rate, previo deposito di una cauzione. È lo strumento con cui si evita la vendita forzata del bene mantenendone la proprietà.",
    law: "Art. 495 c.p.c.",
    article: "pignoramento-immobiliare",
    area: "Esecuzioni",
  },
  {
    slug: "opposizione-allesecuzione",
    term: "Opposizione all'esecuzione",
    definition:
      "L'opposizione all'esecuzione è il rimedio con cui si contesta il diritto del creditore a procedere: credito inesistente, già pagato, prescritto, o bene impignorabile. Si distingue dall'opposizione agli atti esecutivi, che riguarda i vizi formali e ha un termine di venti giorni.",
    law: "Artt. 615-617 c.p.c.",
    article: "pignoramento-immobiliare",
    area: "Esecuzioni",
  },
  {
    slug: "custode-giudiziario",
    term: "Custode giudiziario",
    definition:
      "Il custode giudiziario è il soggetto nominato dal giudice dell'esecuzione per amministrare l'immobile pignorato: ne cura la conservazione, gestisce le visite degli interessati all'acquisto e riscuote eventuali canoni fino alla vendita.",
    law: "Art. 559 c.p.c.",
    article: "pignoramento-immobiliare",
    area: "Esecuzioni",
  },

  // --- Credito e garanzie ---------------------------------------------------
  {
    slug: "prescrizione",
    term: "Prescrizione",
    definition:
      "La prescrizione estingue il diritto del creditore che non lo esercita entro il termine di legge: dieci anni nel caso ordinario, cinque per canoni, interessi e contributi previdenziali. Non opera d'ufficio: deve essere eccepita dal debitore.",
    law: "Artt. 2934-2963 c.c.",
    article: "prescrizione-debiti",
    area: "Credito e garanzie",
  },
  {
    slug: "interruzione-della-prescrizione",
    term: "Interruzione della prescrizione",
    definition:
      "L'interruzione della prescrizione azzera il tempo già trascorso e fa ripartire il termine da capo. La provocano gli atti di costituzione in mora del creditore e il riconoscimento del debito da parte del debitore, compreso il pagamento di un semplice acconto.",
    law: "Artt. 2943-2945 c.c.",
    article: "prescrizione-debiti",
    area: "Credito e garanzie",
  },
  {
    slug: "saldo-e-stralcio",
    term: "Saldo e stralcio",
    definition:
      "Il saldo e stralcio è l'accordo con cui il creditore accetta una somma inferiore al dovuto e rinuncia a ogni ulteriore pretesa, chiudendo la posizione. È una transazione: produce effetti solo se formalizzata per iscritto prima del pagamento, con liberazione espressa del debitore.",
    law: "Artt. 1965 e ss. c.c.",
    article: "saldo-e-stralcio-debiti",
    area: "Credito e garanzie",
  },
  {
    slug: "decadenza-dal-beneficio-del-termine",
    term: "Decadenza dal beneficio del termine",
    definition:
      "La decadenza dal beneficio del termine fa perdere al debitore la rateizzazione: il creditore può pretendere immediatamente l'intero capitale residuo. Nei finanziamenti scatta al verificarsi degli inadempimenti previsti dal contratto o dalla legge.",
    law: "Art. 1186 c.c.",
    article: "mutuo-non-pagato-cosa-fare",
    area: "Credito e garanzie",
  },
  {
    slug: "mutuo-fondiario",
    term: "Mutuo fondiario",
    definition:
      "Il mutuo fondiario è il finanziamento a medio-lungo termine garantito da ipoteca di primo grado su immobili, soggetto a una disciplina speciale del Testo Unico Bancario. La banca può chiederne la risoluzione dopo sette ritardi nei pagamenti, anche non consecutivi.",
    law: "Art. 38 e art. 40 D.lgs. 385/1993",
    article: "mutuo-non-pagato-cosa-fare",
    area: "Credito e garanzie",
  },
  {
    slug: "fideiussione",
    term: "Fideiussione",
    definition:
      "La fideiussione è la garanzia personale con cui un soggetto si obbliga, accanto al debitore principale, ad adempiere l'obbligazione altrui. Il fideiussore risponde con tutto il proprio patrimonio e, se paga, ha diritto di regresso verso il debitore garantito.",
    law: "Artt. 1936-1957 c.c.",
    article: "fideiussione-come-liberarsi",
    area: "Credito e garanzie",
  },
  {
    slug: "fideiussione-omnibus",
    term: "Fideiussione omnibus",
    definition:
      "La fideiussione omnibus garantisce tutti i debiti, presenti e futuri, di un cliente verso la banca entro un importo massimo. Le Sezioni Unite della Cassazione hanno dichiarato nulle le clausole riprese dal modello ABI 2003 in materia di reviviscenza, sopravvivenza e deroga all'art. 1957 c.c.",
    law: "Cass. SS.UU. n. 41994/2021",
    article: "fideiussione-come-liberarsi",
    area: "Credito e garanzie",
  },
  {
    slug: "cessione-del-quinto",
    term: "Cessione del quinto",
    definition:
      "La cessione del quinto è il finanziamento rimborsato con trattenuta diretta sulla busta paga o sulla pensione, entro il limite di un quinto della retribuzione netta. Il contratto deve essere assistito da assicurazione obbligatoria sul rischio vita e impiego.",
    law: "D.P.R. 180/1950",
    article: "cessione-del-quinto-problemi",
    area: "Credito e garanzie",
  },
  {
    slug: "npl",
    term: "NPL (crediti deteriorati)",
    definition:
      "Gli NPL sono i crediti che la banca classifica come deteriorati per il persistente inadempimento del debitore. Vengono spesso ceduti in blocco a operatori specializzati a una frazione del valore nominale: è la ragione per cui, dopo la cessione, i margini di trattativa si allargano.",
    article: "debiti-banche-finanziarie",
    area: "Credito e garanzie",
  },
  {
    slug: "centrale-dei-rischi",
    term: "Centrale dei Rischi",
    definition:
      "La Centrale dei Rischi è il sistema informativo della Banca d'Italia che raccoglie le esposizioni dei clienti verso banche e intermediari. La segnalazione a sofferenza presuppone una valutazione della situazione complessiva del debitore, non un singolo ritardo di pagamento.",
    article: "debiti-banche-finanziarie",
    area: "Credito e garanzie",
  },
  {
    slug: "morosita-condominiale",
    term: "Morosità condominiale",
    definition:
      "La morosità condominiale è il mancato pagamento dei contributi approvati dall'assemblea. L'amministratore può ottenere un decreto ingiuntivo immediatamente esecutivo in base allo stato di ripartizione e, dopo sei mesi di ritardo, sospendere i servizi comuni suscettibili di godimento separato.",
    law: "Art. 63 disp. att. c.c.",
    article: "debiti-condominiali",
    area: "Credito e garanzie",
  },
];

export const GLOSSARY_AREAS: GlossaryArea[] = [
  "Sovraindebitamento",
  "Crisi d'impresa",
  "Fisco e riscossione",
  "Esecuzioni",
  "Credito e garanzie",
];
