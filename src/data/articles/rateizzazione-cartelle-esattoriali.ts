import type { Article } from "../articles";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";

export const article: Article = {
  slug: "rateizzazione-cartelle-esattoriali",
  title: "Rateizzazione delle cartelle esattoriali: come ottenerla e mantenerla nel 2026",
  excerpt: "Guida operativa alla rateizzazione delle cartelle esattoriali ex art. 19 DPR 602/73: soglie, procedura semplificata e documentata, decadenza, riammissione e novità del D.Lgs. 110/2024.",
  category: "Tributario",
  date: "Maggio 2026",
  readTime: "18 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: handshakeTrust,
  keywords: ["rateizzazione cartelle", "dilazione cartelle", "rate AdER", "piano rateale", "art 19 DPR 602/73"],
  intro: "La rateizzazione delle cartelle esattoriali rappresenta lo strumento ordinario di gestione del debito tributario per il contribuente in temporanea difficoltà economica. Disciplinata dall'art. 19 del DPR 29 settembre 1973 n. 602 e profondamente innovata dal D.Lgs. 29 luglio 2024 n. 110 (in attuazione della delega di riforma fiscale di cui alla L. 111/2023), consente al debitore di diluire fino a 120 mensilità il pagamento degli importi iscritti a ruolo, sospendendo le azioni esecutive e cautelari dell'Agente della Riscossione. La presente guida illustra i presupposti, le procedure e le conseguenze della decadenza secondo la disciplina vigente nel 2026.",
  content: [
    { type: "h2", text: "Il quadro normativo della rateizzazione nel 2026", id: "quadro-normativo" },
    { type: "p", text: "L'art. 19 del DPR 602/1973 costituisce la norma cardine in materia di dilazione di pagamento delle somme iscritte a ruolo. Il testo attualmente vigente è il risultato di una stratificazione di interventi normativi che ha conosciuto, da ultimo, una revisione organica con il D.Lgs. 110/2024, le cui disposizioni hanno trovato compiuta attuazione attraverso il decreto del Ministero dell'Economia e delle Finanze del 27 dicembre 2024, pubblicato in Gazzetta Ufficiale ed efficace per le domande presentate a decorrere dal 1° gennaio 2025." },
    { type: "p", text: "La ratio dell'istituto è duplice. Da un lato, l'amministrazione finanziaria persegue l'obiettivo di favorire l'adempimento spontaneo, sia pure dilazionato, evitando l'attivazione di costose e spesso inefficaci procedure esecutive. Dall'altro lato, il contribuente ottiene la sospensione delle misure cautelari ed esecutive e la possibilità di ottenere il documento unico di regolarità contributiva e fiscale, indispensabile per la partecipazione a gare pubbliche, l'ottenimento di rimborsi e l'accesso al credito." },
    { type: "p", text: "La nuova disciplina si caratterizza per un sistema progressivo che lega il numero massimo di rate concedibili alla data di presentazione della domanda: il legislatore ha previsto un incremento graduale del piano ordinario, destinato a raggiungere a regime le 108 rate dal 2027 e le 120 rate dal 2029, mantenendo per le ipotesi di comprovata e grave difficoltà la soglia massima delle 120 mensilità." },

    { type: "image", src: handshakeTrust, alt: "Accordo di rateizzazione con l'Agenzia delle Entrate Riscossione", caption: "La rateizzazione consente di sospendere le azioni esecutive e cautelari per tutta la durata del piano regolarmente onorato." },

    { type: "h2", text: "Soggetti legittimati a chiedere la dilazione", id: "soggetti-legittimati" },
    { type: "p", text: "Possono presentare istanza di rateizzazione tutti i contribuenti destinatari di cartelle di pagamento o avvisi di accertamento esecutivi affidati all'Agente della Riscossione. La legittimazione comprende persone fisiche, professionisti, imprese individuali, società di persone e di capitali, enti non commerciali e qualunque altro soggetto passivo di obbligazioni tributarie, contributive o di altra natura iscritte a ruolo." },
    { type: "p", text: "Restano esclusi dalla dilazione, in linea generale, gli importi derivanti da risorse proprie tradizionali dell'Unione Europea (dazi doganali) e quelli relativi a recuperi di aiuti di Stato dichiarati incompatibili. Per i debiti contributivi affidati alla riscossione esattoriale, l'INPS e l'INAIL applicano regole proprie in parte autonome rispetto a quelle dell'AdER, anche se concettualmente affini." },
    { type: "p", text: "La domanda può essere presentata dal contribuente personalmente, da un delegato munito di procura speciale, dal commercialista, dal consulente del lavoro o dall'avvocato. Per le società è necessario che la richiesta sia sottoscritta dal legale rappresentante o da un procuratore speciale i cui poteri risultino da atto pubblico o scrittura privata autenticata." },

    { type: "h2", text: "La soglia dei 120.000 euro e la doppia procedura", id: "soglia-120000" },
    { type: "p", text: "Il discrimine fondamentale del sistema 2026 ruota attorno alla soglia di 120.000 euro di debito iscritto a ruolo, riferita al complesso delle cartelle non saldate intestate al medesimo contribuente. Il superamento o meno di questa soglia determina la possibilità di accedere a una procedura semplificata oppure l'obbligo di seguire la procedura documentata, con presentazione di indici economici e patrimoniali che attestino la temporanea difficoltà." },
    { type: "p", text: "Al di sotto della soglia di 120.000 euro, il contribuente può ottenere la rateizzazione mediante semplice dichiarazione sostitutiva resa ai sensi degli articoli 46 e 47 del DPR 445/2000, nella quale attesta la propria temporanea situazione di obiettiva difficoltà economica. La domanda viene accolta automaticamente, salva la facoltà dell'Agente della Riscossione di effettuare controlli successivi sulla veridicità delle dichiarazioni." },
    { type: "p", text: "Al di sopra della soglia di 120.000 euro, la richiesta deve essere accompagnata da documentazione idonea a dimostrare la temporanea situazione di obiettiva difficoltà. Per le persone fisiche e le ditte individuali in contabilità semplificata il parametro di riferimento è l'ISEE (Indicatore della Situazione Economica Equivalente), mentre per le società e i contribuenti in contabilità ordinaria assumono rilievo l'indice di liquidità e il rapporto tra debito da rateizzare e valore della produzione." },

    { type: "h3", text: "L'ISEE come parametro per la persona fisica" },
    { type: "p", text: "Per il debitore persona fisica, il D.M. 27 dicembre 2024 ha individuato nell'ISEE il parametro oggettivo per la valutazione della temporanea difficoltà. La domanda con rateizzazione ordinaria fino a 84 rate è concessa quando il rapporto tra debito e ISEE del nucleo familiare risulti pari o superiore a determinate soglie, con un meccanismo che premia i nuclei con redditi e patrimoni più contenuti rispetto all'ammontare del debito." },
    { type: "p", text: "L'ISEE deve essere in corso di validità al momento della presentazione della domanda. La validità ordinaria è annuale e scade il 31 dicembre dell'anno di rilascio della dichiarazione sostitutiva unica. Se il contribuente presenta domanda con ISEE scaduto, l'AdER richiede integrazione documentale, sospendendo medio tempore l'istruttoria." },

    { type: "h3", text: "Indice di liquidità per società e imprese" },
    { type: "p", text: "Per i soggetti diversi dalle persone fisiche, il parametro tecnico è l'indice di liquidità calcolato come rapporto tra liquidità immediata e differita da un lato e passività correnti dall'altro. Un valore inferiore a 1 è indicativo di tensione finanziaria. A tale indice si affianca il rapporto tra debito complessivo da rateizzare e valore della produzione (voce A del conto economico, ex art. 2425 c.c.): un rapporto elevato evidenzia un'incidenza significativa del debito esattoriale sulla capacità produttiva dell'impresa." },

    { type: "h2", text: "Il piano ordinario e l'evoluzione temporale", id: "piano-ordinario" },
    { type: "p", text: "Il piano ordinario di rateizzazione conosce un'evoluzione temporale prevista dalla normativa. Per le domande presentate negli anni 2025 e 2026, il numero massimo di rate ordinarie è fissato in 84 mensilità (sette anni). Per il biennio 2027-2028 il piano ordinario si estende a 96 rate, raggiungendo a regime le 108 rate a partire dal 2029. Questo schema progressivo è stato adottato per consentire un graduale allineamento del sistema italiano agli standard europei più estesi." },
    { type: "p", text: "Le rate hanno cadenza mensile e importo costante. L'importo minimo della singola rata non può essere inferiore a 50 euro, fatto salvo il caso in cui il debito complessivo sia di entità tale per cui l'applicazione di tale soglia comporterebbe la concentrazione dell'intero importo in un'unica rata. Sul piano sono applicati gli interessi di dilazione previsti dall'art. 21 del DPR 602/1973, calcolati al tasso vigente per l'anno di riferimento e aggiornati periodicamente." },

    { type: "h2", text: "Il piano straordinario fino a 120 rate", id: "piano-straordinario" },
    { type: "p", text: "Il piano straordinario fino a 120 rate (dieci anni) è riservato alle ipotesi di comprovata e grave situazione di difficoltà legata alla congiuntura economica o a circostanze oggettive di carattere eccezionale ed estraneo alla responsabilità del contribuente. La concessione di questo piano è subordinata a una valutazione più stringente, che richiede in ogni caso documentazione completa indipendentemente dalla soglia di 120.000 euro." },
    { type: "p", text: "Costituiscono tipiche ipotesi di grave difficoltà la perdita del lavoro, la malattia grave che ha comportato un significativo abbattimento del reddito, calamità naturali, eventi traumatici personali o familiari, crisi settoriali che hanno colpito l'attività professionale o imprenditoriale del debitore. La giurisprudenza di merito ha riconosciuto la grave difficoltà anche in presenza di passività finanziarie eccessive rispetto al reddito netto residuo dopo le spese di sussistenza." },

    { type: "h2", text: "Confronto tra piano ordinario e straordinario", id: "confronto-piani" },
    { type: "table", headers: ["Caratteristica", "Piano ordinario", "Piano straordinario", "Riammissione post-decadenza"], rows: [
      ["Rate massime (2025-2026)", "84 mensili", "120 mensili", "fino a residue spettanti"],
      ["Soglia rilevante", "120.000 euro", "qualsiasi importo", "stesso piano precedente"],
      ["Documentazione", "non richiesta sotto soglia", "sempre richiesta", "comprovata difficoltà sopravvenuta"],
      ["Parametro persona fisica", "autocertificazione/ISEE", "ISEE + situazione documentata", "valutazione caso per caso"],
      ["Parametro società", "non richiesto sotto soglia", "indice liquidità + rapporto debito/produzione", "documentazione integrativa"],
      ["Sospensione esecuzioni", "sì, dalla presentazione", "sì, dalla presentazione", "sì, dalla riammissione"],
      ["Numero rate impagate per decadenza", "8 rate anche non consecutive", "8 rate anche non consecutive", "8 rate anche non consecutive"],
    ]},

    { type: "h2", text: "Procedura di presentazione della domanda", id: "procedura-domanda" },
    { type: "p", text: "La domanda di rateizzazione può essere presentata attraverso più canali, con prevalenza assoluta del canale telematico. L'Agenzia delle Entrate-Riscossione ha implementato una piattaforma online che consente la gestione integrale della pratica, dalla simulazione del piano fino alla notifica del provvedimento di concessione." },
    { type: "h3", text: "Canali disponibili" },
    { type: "ol", items: [
      "Area riservata del sito istituzionale agenziaentrateriscossione.gov.it, accessibile con SPID, CIE o CNS",
      "App Equiclick disponibile per dispositivi mobili",
      "PEC istituzionale agli indirizzi pubblicati per ciascuna direzione regionale",
      "Sportello territoriale, previa prenotazione",
      "Intermediario abilitato (commercialista, consulente del lavoro, CAF) mediante delega",
    ]},
    { type: "p", text: "Il canale telematico è di gran lunga il più efficiente. Il contribuente accede con le proprie credenziali, seleziona le cartelle da rateizzare, verifica l'importo complessivo, sceglie il numero di rate e ottiene immediatamente il piano provvisorio con il dettaglio degli importi mensili e degli interessi. Per le domande sotto soglia, l'accoglimento è automatico e contestuale alla presentazione." },

    { type: "h2", text: "Calcolo della rata e degli interessi", id: "calcolo-rata" },
    { type: "p", text: "L'importo della singola rata si determina applicando la formula di ammortamento alla francese sull'importo complessivo da rateizzare, comprensivo di tributi, sanzioni, interessi di mora maturati fino alla data di presentazione della domanda e aggio (oggi denominato 'oneri di riscossione'). Sul piano si applicano gli interessi di dilazione, attualmente fissati al 4,5% annuo, suscettibili di aggiornamento con decreto ministeriale." },
    { type: "p", text: "L'importo della rata può essere stimato preliminarmente attraverso il simulatore disponibile nell'area pubblica del sito dell'AdER, inserendo l'importo del debito e il numero di rate desiderate. La simulazione ha valore puramente indicativo: l'importo definitivo viene comunicato con il provvedimento di accoglimento della domanda." },

    { type: "note", text: "L'importo della rata non può essere inferiore a 50 euro. Tale soglia opera come limite minimo: laddove l'applicazione del numero massimo di rate richiesto comporterebbe rate inferiori a 50 euro, l'AdER ricalcola il piano riducendo il numero di rate fino a raggiungere la soglia. Il contribuente conserva la facoltà di chiedere un piano più breve con rate di importo superiore." },

    { type: "h2", text: "Effetti della presentazione della domanda", id: "effetti-domanda" },
    { type: "p", text: "La presentazione dell'istanza di rateizzazione produce effetti immediati e sostanziali sulla posizione del contribuente, indipendentemente dalla circostanza che la domanda venga successivamente accolta o rigettata. Il legislatore ha voluto evitare che, nell'attesa dell'istruttoria, l'AdER potesse procedere ad azioni esecutive vanificando l'intento del contribuente di regolarizzare la propria posizione." },
    { type: "ul", items: [
      "Sospensione automatica delle azioni esecutive in corso (pignoramenti, fermi, ipoteche in fase istruttoria)",
      "Divieto per l'AdER di avviare nuove azioni cautelari ed esecutive durante l'istruttoria",
      "Possibilità di ottenere il certificato di regolarità fiscale (DURC e analoghi) dopo l'accoglimento e il pagamento della prima rata",
      "Cessazione della qualifica di contribuente moroso ai fini dell'art. 48-bis DPR 602/1973 (verifica preventiva nei pagamenti PA)",
      "Possibilità di riprendere o avviare attività professionali e imprenditoriali soggette ad autorizzazione",
    ]},
    { type: "p", text: "Va tuttavia sottolineato che gli effetti sospensivi sulle esecuzioni in corso non operano in modo retroattivo. Pignoramenti già perfezionati prima della presentazione della domanda (somme già accantonate presso il terzo, beni mobili già sottoposti a custodia) conservano la propria efficacia, fatta salva la possibilità per il contribuente di chiedere lo svincolo delle somme eccedenti il debito residuo." },

    { type: "h2", text: "La decadenza dal beneficio e le sue conseguenze", id: "decadenza" },
    { type: "p", text: "La decadenza dalla rateizzazione rappresenta uno dei profili più critici dell'istituto. L'art. 19, comma 3, del DPR 602/1973 prevede che il contribuente decada automaticamente dal beneficio in caso di mancato pagamento di otto rate, anche non consecutive. Si tratta di un'innovazione significativa rispetto alla disciplina previgente, che fissava il numero in cinque rate, e mira a un equilibrio tra rigore e flessibilità." },
    { type: "p", text: "Il computo delle rate impagate è progressivo lungo tutta la durata del piano. Una volta raggiunta la soglia di otto inadempimenti, la decadenza si verifica ipso iure, senza necessità di provvedimento amministrativo formale. L'AdER comunica al contribuente l'intervenuta decadenza con apposita lettera, indicando l'importo residuo e i termini per il pagamento integrale." },

    { type: "h3", text: "Conseguenze immediate della decadenza" },
    { type: "ul", items: [
      "Obbligo di pagamento dell'intero importo residuo in un'unica soluzione",
      "Ripresa delle azioni esecutive e cautelari (pignoramenti, fermi, ipoteche)",
      "Iscrizione dell'AdER come contribuente moroso ai fini dell'art. 48-bis DPR 602/1973",
      "Impossibilità di ottenere il certificato di regolarità fiscale",
      "Perdita degli effetti sospensivi sui termini di prescrizione e decadenza",
    ]},
    { type: "p", text: "L'inserimento dell'art. 48-bis DPR 602/1973 nel circuito delle conseguenze della decadenza è particolarmente gravoso per il contribuente che intrattenga rapporti con la Pubblica Amministrazione: ogni pagamento superiore a 5.000 euro che la PA debba effettuare a favore del soggetto decaduto verrà sospeso e segnalato all'AdER, che potrà procedere al pignoramento delle somme." },

    { type: "h2", text: "La riammissione al beneficio", id: "riammissione" },
    { type: "p", text: "Il D.Lgs. 110/2024 ha innovato significativamente l'istituto della riammissione, ovvero la possibilità per il contribuente decaduto di rientrare nel piano di rateizzazione. La nuova disciplina, contenuta nel comma 1-quinquies dell'art. 19 DPR 602/1973, consente la riammissione al medesimo piano già concesso, alle stesse condizioni economiche originarie, purché ricorrano determinati presupposti." },
    { type: "p", text: "Il contribuente decaduto può chiedere la riammissione presentando nuova domanda entro il termine di trentasei mesi dalla decadenza. Durante questo periodo, la presentazione di una nuova domanda di rateizzazione per gli stessi importi non è ammissibile, salvo che il contribuente non versi contestualmente l'importo corrispondente alle rate scadute e non pagate." },

    { type: "h3", text: "Presupposti della riammissione" },
    { type: "ol", items: [
      "Sopravvenienza di nuova e comprovata difficoltà successiva alla decadenza",
      "Pagamento delle rate scadute al momento della nuova domanda",
      "Documentazione integrativa che attesti il mutamento della situazione",
      "Assenza di pignoramenti già perfezionati con vendita disposta",
      "Domanda presentata entro 36 mesi dalla decadenza precedente",
    ]},

    { type: "h2", text: "Confronto con altri canali di rateizzazione", id: "confronto-canali" },
    { type: "p", text: "La rateizzazione AdER non è l'unico strumento di dilazione disponibile per il contribuente in difficoltà. Esistono modalità alternative o complementari che è opportuno conoscere per una corretta gestione del debito complessivo, tenendo conto del fatto che debiti tributari, contributivi e bancari seguono regole diverse e che il sovraccarico finanziario complessivo va valutato in modo integrato." },
    { type: "table", headers: ["Tipologia debito", "Ente di riferimento", "Norma applicabile", "Rate massime", "Documentazione"], rows: [
      ["Cartelle esattoriali", "AdER", "art. 19 DPR 602/73", "84 (ordinaria) / 120 (straordinaria)", "Autocertificazione/ISEE sopra soglia"],
      ["Avvisi bonari Agenzia Entrate", "AdE", "art. 3-bis D.lgs. 462/97", "8 trimestrali (sotto 5.000 euro) / 20 (sopra)", "Domanda telematica"],
      ["Contributi INPS iscritti a ruolo", "INPS via AdER", "art. 116 L. 388/2000 + art. 19 DPR 602/73", "fino a 60 con AdER", "Domanda dual track"],
      ["Mutui bancari", "Banca", "contrattuale + L. 244/2007 (sospensione)", "rinegoziazione caso per caso", "Documentazione reddituale"],
      ["Prestiti al consumo", "Finanziaria", "contrattuale", "rinegoziazione", "Documentazione reddituale"],
      ["Cartelle multe stradali", "AdER", "art. 19 DPR 602/73", "stesso piano cartelle", "Stessa procedura"],
    ]},

    { type: "h2", text: "Casi particolari e fattispecie problematiche", id: "casi-particolari" },
    { type: "p", text: "Nella pratica professionale emergono numerose situazioni che richiedono un'attenta valutazione della disciplina della rateizzazione. Alcune di queste meritano una trattazione specifica per le peculiarità che presentano sotto il profilo procedurale e sostanziale." },

    { type: "h3", text: "Rateizzazione con coobbligati" },
    { type: "p", text: "Quando il debito iscritto a ruolo è imputabile a una pluralità di soggetti coobbligati, la domanda di rateizzazione può essere presentata da uno solo degli obbligati o da tutti congiuntamente. La concessione del piano produce effetti soltanto nei confronti del richiedente: gli altri coobbligati restano esposti all'azione esecutiva per l'intero importo, salvo che presentino a loro volta domanda di dilazione." },

    { type: "h3", text: "Cartelle prescritte o non dovute" },
    { type: "p", text: "Prima di presentare domanda di rateizzazione è sempre opportuno verificare l'effettiva esistenza e validità del debito. La rateizzazione, pur non comportando formalmente acquiescenza al merito, rende molto più difficile contestare successivamente la cartella per vizi originari (notifica viziata, prescrizione maturata, decadenza dei termini). La prudenza suggerisce di valutare preventivamente, mediante estratto di ruolo e analisi dei termini di notifica, se sussistano motivi di opposizione." },

    { type: "h3", text: "Sospensione amministrativa per autotutela" },
    { type: "p", text: "Se il contribuente ritiene che la cartella sia errata o non dovuta in tutto o in parte, può presentare istanza di sospensione amministrativa ai sensi dell'art. 1, commi 537-543, della L. 228/2012. Tale istanza, presentabile anche dopo la rateizzazione, sospende le azioni esecutive in attesa della verifica da parte dell'ente impositore. È compatibile con la rateizzazione in corso e può portare allo sgravio totale o parziale del debito." },

    { type: "h2", text: "La rateizzazione nel contesto delle procedure di sovraindebitamento", id: "sovraindebitamento" },
    { type: "p", text: "Per il debitore che si trovi in stato di sovraindebitamento e che non sia in grado di sostenere il piano massimo di 120 rate, la rateizzazione AdER non è la soluzione adeguata. In tali casi è opportuno valutare le procedure previste dal Codice della Crisi d'Impresa e dell'Insolvenza (D.Lgs. 14/2019): concordato minore, piano del consumatore, liquidazione controllata, esdebitazione dell'incapiente." },
    { type: "p", text: "Queste procedure consentono, in presenza dei presupposti soggettivi e oggettivi, di ottenere lo stralcio parziale del debito (non solo la dilazione), con effetto anche sui crediti tributari. L'AdER è soggetto vincolato alla decisione del Tribunale e non può opporre rifiuto se il piano è omologato. La scelta tra rateizzazione ordinaria e procedura di sovraindebitamento richiede una valutazione complessiva della situazione patrimoniale e reddituale del debitore, della consistenza e natura del debito complessivo, delle prospettive future di reddito." },

    { type: "note", text: "L'accesso alla procedura di sovraindebitamento è alternativo alla rateizzazione AdER per gli stessi debiti. Se il contribuente avvia una procedura ex CCII, le rateizzazioni in corso vengono ricondotte nel piano di ristrutturazione concordato con i creditori e omologato dal Tribunale. Le rate maturate prima dell'apertura della procedura vengono incluse nel debito complessivo, mentre quelle successive sono regolate dal piano omologato." },

    { type: "h2", text: "Aspetti operativi e gestione del piano nel tempo", id: "gestione-piano" },
    { type: "p", text: "Una volta ottenuta la rateizzazione, il contribuente deve adottare una gestione attenta del piano per evitare di incorrere nella decadenza. Alcune accortezze operative possono rivelarsi decisive nel garantire la regolare esecuzione del piano su orizzonti temporali che possono superare i dieci anni." },
    { type: "ul", items: [
      "Domiciliare l'addebito delle rate su conto corrente attivo e capiente, monitorando periodicamente la disponibilità",
      "Conservare le ricevute di pagamento o gli estratti conto che attestano l'avvenuto addebito",
      "Comunicare tempestivamente all'AdER eventuali variazioni di residenza o domicilio fiscale",
      "In caso di difficoltà temporanea su singola rata, contattare l'AdER per valutare le opzioni disponibili",
      "Verificare periodicamente il residuo dovuto attraverso l'area riservata, soprattutto in vista di operazioni straordinarie",
      "Coordinare la rateizzazione con eventuali rimborsi fiscali in compensazione, segnalando le situazioni di credito d'imposta",
    ]},

    { type: "h2", text: "Trattamento fiscale degli interessi di dilazione", id: "interessi-fiscali" },
    { type: "p", text: "Gli interessi di dilazione corrisposti sulle rate del piano hanno natura di interessi passivi e seguono il regime fiscale previsto per la categoria di reddito del soggetto debitore. Per le imprese in contabilità ordinaria, gli interessi sono deducibili nei limiti previsti dall'art. 96 del TUIR. Per le ditte individuali e i lavoratori autonomi, la deducibilità è ammessa nei limiti del principio di inerenza all'attività esercitata." },
    { type: "p", text: "Per le persone fisiche non imprenditori, gli interessi di dilazione su cartelle relative a tributi personali (IRPEF, addizionali, IMU) non sono deducibili dal reddito complessivo, in coerenza con la regola generale dell'indeducibilità degli interessi su debiti tributari personali. Costituisce eccezione la rateizzazione di cartelle relative a tributi inerenti all'attività di impresa o di lavoro autonomo." },

    { type: "h2", text: "Profili di tutela giurisdizionale", id: "tutela-giurisdizionale" },
    { type: "p", text: "Il provvedimento di rigetto della domanda di rateizzazione e il provvedimento che dichiara la decadenza sono atti impugnabili davanti alla Corte di Giustizia Tributaria competente, ai sensi dell'art. 19 del D.lgs. 546/1992. La giurisprudenza tributaria ha riconosciuto l'autonoma impugnabilità del rifiuto di rateizzazione quando il rigetto sia motivato da ragioni di merito sulla situazione del contribuente." },
    { type: "p", text: "Il ricorso deve essere proposto entro sessanta giorni dalla notifica del provvedimento, secondo le regole ordinarie del processo tributario. Il contribuente può chiedere la sospensione cautelare dell'atto impugnato, motivando la sussistenza del periculum in mora e del fumus boni iuris. La concessione della sospensione cautelare consente di evitare nelle more del giudizio l'avvio delle azioni esecutive." },
    { type: "p", text: "Per i debiti di natura non tributaria iscritti a ruolo (multe stradali, sanzioni amministrative non tributarie), la competenza si radica davanti al giudice ordinario, secondo le regole proprie della materia. La distinzione richiede sempre un'attenta verifica della natura del credito sottostante." },

    { type: "h2", text: "Effetti sul certificato di regolarità contributiva e fiscale", id: "regolarita" },
    { type: "p", text: "L'ottenimento della rateizzazione e il regolare pagamento della prima rata consentono al contribuente di ottenere il DURC (Documento Unico di Regolarità Contributiva) e il certificato di regolarità fiscale. Si tratta di documenti indispensabili per la partecipazione a gare di appalto pubblico, per l'erogazione di contributi pubblici, per l'ottenimento di rimborsi e per molteplici altre attività professionali e imprenditoriali." },
    { type: "p", text: "La regolarità è subordinata al rispetto delle scadenze. Se il contribuente accumula ritardi superiori alle rate consentite, ma non ancora tali da determinare la decadenza, il certificato può essere rilasciato con la dicitura 'regolare con piano di rateizzazione in corso'. In caso di decadenza, la regolarità viene meno e il certificato non può essere rilasciato fino al pagamento integrale del debito o alla riammissione al beneficio." },

    { type: "h2", text: "Domande frequenti sulla rateizzazione", id: "faq" },
    { type: "faq", items: [
      {
        q: "Posso rateizzare cartelle già oggetto di pignoramento?",
        a: "Sì, la rateizzazione è ammissibile anche dopo l'avvio del pignoramento. La presentazione della domanda determina la sospensione delle nuove azioni esecutive, ma non travolge automaticamente i pignoramenti già perfezionati. È possibile chiedere all'Agente della Riscossione lo svincolo delle somme già accantonate eccedenti il debito ridotto per effetto della rateizzazione, oppure la conversione del pignoramento. La giurisprudenza ha riconosciuto che il debitore può chiedere la sospensione del pignoramento immobiliare con istanza al giudice dell'esecuzione, allegando il provvedimento di concessione del piano rateale.",
      },
      {
        q: "Cosa succede se salto una rata?",
        a: "La singola rata non pagata non determina la decadenza, ma viene contabilizzata ai fini del raggiungimento della soglia di otto inadempimenti che invece comporta la perdita del beneficio. È buona prassi recuperare quanto prima la rata non pagata, anche con bonifico straordinario, riducendo così il rischio di decadenza. Sulla rata in ritardo maturano gli interessi di mora previsti dall'art. 30 del DPR 602/1973. L'AdER non invia solitamente avvisi puntuali per ogni rata non pagata, ragion per cui è essenziale monitorare autonomamente la regolarità dei pagamenti tramite l'area riservata.",
      },
      {
        q: "Posso chiedere una nuova rateizzazione per cartelle diverse mentre ne ho già una in corso?",
        a: "Sì, è possibile cumulare più rateizzazioni relative a cartelle diverse notificate in tempi differenti. Ogni piano è autonomo e segue le proprie regole. Tuttavia, l'AdER verifica la complessiva sostenibilità del carico mensile rispetto alla situazione economica del contribuente. Se il numero complessivo di rate maturate appare incompatibile con la capacità reddituale, può richiedere documentazione integrativa. È sempre opportuno valutare l'unificazione delle posizioni quando i debiti si riferiscono a contribuenti con situazione omogenea.",
      },
      {
        q: "La rateizzazione interrompe la prescrizione del debito?",
        a: "Sì, la presentazione della domanda di rateizzazione costituisce atto di riconoscimento del debito ai sensi dell'art. 2944 c.c. e produce effetto interruttivo della prescrizione. Da quel momento decorre un nuovo termine di prescrizione, di durata pari a quello originario. Il pagamento di ciascuna rata costituisce ulteriore atto interruttivo. Questa circostanza richiede particolare attenzione: se il contribuente sospetta che la cartella sia prescritta o presenti vizi originari, deve valutare attentamente l'opportunità di accedere alla rateizzazione, che potrebbe pregiudicare future contestazioni.",
      },
      {
        q: "Quanto costa la rateizzazione in termini di interessi?",
        a: "Sul piano sono applicati gli interessi di dilazione previsti dall'art. 21 del DPR 602/1973, attualmente fissati al tasso del 4,5% annuo. L'importo è calcolato sull'intero residuo dovuto e capitalizzato secondo il sistema dell'ammortamento alla francese. Su un debito di 30.000 euro rateizzato in 84 mensilità, gli interessi complessivi ammontano a circa 5.000 euro, con un onere totale di circa 35.000 euro. Va considerato che il tasso può essere aggiornato con decreto ministeriale; le rate del piano possono pertanto subire ricalcolo.",
      },
      {
        q: "Posso estinguere anticipatamente il piano?",
        a: "Sì, il contribuente può estinguere anticipatamente in tutto o in parte il piano di rateizzazione mediante pagamento del residuo dovuto. L'estinzione anticipata comporta lo sgravio degli interessi di dilazione non maturati relativi alle rate future. È possibile chiedere all'AdER il calcolo del valore residuo aggiornato, che può essere onorato in unica soluzione. L'estinzione parziale è ammessa, ma richiede ricalcolo del piano sulle rate residue. Sotto il profilo finanziario, l'estinzione anticipata è generalmente conveniente quando il contribuente disponga di liquidità.",
      },
      {
        q: "Sono escluso dalla rateizzazione se ho debiti contributivi?",
        a: "No, anche i debiti contributivi affidati alla riscossione esattoriale possono essere rateizzati ai sensi dell'art. 19 DPR 602/1973. Per i contributi INPS, occorre tuttavia distinguere: le somme già affidate all'AdER seguono la procedura ordinaria, mentre quelle ancora gestite direttamente dall'INPS seguono le regole previste dall'art. 116 L. 388/2000 e dalle delibere del Consiglio di Amministrazione INPS. In presenza di entrambe le tipologie, è opportuno coordinare le due rateizzazioni per ottenere un quadro complessivo sostenibile.",
      },
      {
        q: "Cosa devo fare se cambio residenza durante il piano?",
        a: "Il contribuente è tenuto a comunicare tempestivamente all'Agente della Riscossione la variazione di residenza o domicilio fiscale. La comunicazione può essere effettuata tramite area riservata, PEC o sportello. La mancata comunicazione non determina la decadenza del piano, ma può comportare problemi di notifica per eventuali atti successivi (avvisi di pagamento, comunicazioni di decadenza, atti esecutivi). La regolarità delle comunicazioni è particolarmente importante per i piani di lunga durata, in cui è frequente che il contribuente cambi residenza nell'arco dei dieci anni di durata.",
      },
      {
        q: "Posso rateizzare se sono in concordato preventivo o sovraindebitamento?",
        a: "L'apertura di una procedura di concordato preventivo, di concordato minore o di liquidazione controllata determina l'arresto delle azioni esecutive individuali e l'inserimento del debito tributario nel piano di ristrutturazione. La rateizzazione AdER preesistente confluisce nella procedura concorsuale, con possibili ricalcoli o ristrutturazioni del debito. Non è possibile chiedere una nuova rateizzazione AdER durante la procedura concorsuale: il debito sarà regolato secondo il piano omologato dal Tribunale. È fondamentale coordinare le tempistiche per evitare conflitti procedurali.",
      },
      {
        q: "Quanto incide l'ISEE sulla valutazione della domanda?",
        a: "Per i debiti superiori a 120.000 euro presentati da persone fisiche, l'ISEE è il parametro principale di valutazione. Il D.M. 27 dicembre 2024 ha previsto soglie di rapporto debito/ISEE che, se superate, comportano l'accoglimento del piano richiesto. Maggiore è il rapporto tra debito e ISEE, maggiori sono le possibilità di accedere ai piani più estesi. È fondamentale che l'ISEE sia in corso di validità e rappresenti fedelmente la situazione del nucleo familiare. La presentazione di ISEE non veritiero costituisce reato di falsa dichiarazione ai sensi dell'art. 76 DPR 445/2000.",
      },
    ]},

    { type: "image", src: ctaHandshake, alt: "Consulenza professionale sulla rateizzazione cartelle", caption: "Una valutazione professionale preliminare consente di scegliere la strategia più adatta alla situazione specifica del contribuente." },

    { type: "h2", text: "Conclusioni operative", id: "conclusioni" },
    { type: "p", text: "La rateizzazione delle cartelle esattoriali rappresenta uno strumento flessibile ed efficace per il contribuente in temporanea difficoltà economica. La disciplina del 2026, frutto della riforma del D.Lgs. 110/2024, ha innalzato significativamente il livello di tutela del debitore attraverso l'estensione del piano fino a 120 mensilità in caso di grave difficoltà, l'introduzione di parametri oggettivi di valutazione (ISEE, indice di liquidità) e un sistema di riammissione più favorevole." },
    { type: "p", text: "Tuttavia, la decisione di accedere alla rateizzazione richiede una valutazione preliminare attenta. La presentazione della domanda costituisce riconoscimento implicito del debito e interrompe la prescrizione: se la cartella presenta vizi originari (notifica viziata, prescrizione maturata, errore sostanziale), la rateizzazione può pregiudicare future contestazioni. È sempre opportuno, prima di presentare domanda, verificare l'effettiva esistenza e validità del debito tramite estratto di ruolo e analisi documentale dei termini di notifica." },
    { type: "p", text: "Per situazioni di grave e strutturale sovraindebitamento, in cui anche il piano massimo di 120 rate apparisse insostenibile, è preferibile valutare le procedure previste dal Codice della Crisi (concordato minore, piano del consumatore, liquidazione controllata, esdebitazione dell'incapiente), che consentono lo stralcio parziale o integrale del debito. La scelta dello strumento ottimale richiede una valutazione tecnica complessiva, che tenga conto della composizione del debito, della situazione patrimoniale e delle prospettive reddituali del debitore." },
  ],
};
