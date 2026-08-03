import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "rottamazione-quinquies",
  title: "Rottamazione quinquies 2026: quali debiti rientrano, come si paga e cosa succede se si salta una rata",
  excerpt:
    "La rottamazione quinquies (Legge di Bilancio 2026) azzera sanzioni, interessi di mora e aggio sui carichi affidati dal 2000 al 2023 da omesso versamento. Piano fino a 54 rate bimestrali, calendario 2026, regole di decadenza e alternative per chi non ha aderito entro il 30 aprile 2026.",
  category: "Tributario",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-gold-dark to-gold",
  coverImage: "/covers/rottamazione-quinquies.png",
  keywords: [
    "rottamazione quinquies",
    "definizione agevolata 2026",
    "rottamazione cartelle 2026",
    "54 rate bimestrali",
    "decadenza rottamazione",
  ],
  intro:
    "La rottamazione quinquies è la definizione agevolata dei carichi affidati all'Agente della Riscossione introdotta dalla Legge di Bilancio 2026. Consente di pagare il solo capitale, azzerando sanzioni, interessi di mora e aggio, con una dilazione che può arrivare a nove anni. Rispetto alle edizioni precedenti ha un perimetro più stretto — riguarda i debiti da omesso versamento, non quelli da accertamento — e un calendario di pagamento che è già entrato nel vivo. Questa guida ricostruisce ambito applicativo, importi, scadenze, cause di decadenza e le alternative per chi non ha presentato domanda nei termini.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cos'è la rottamazione quinquies", id: "cosa-e" },
    {
      type: "p",
      text: "La rottamazione quinquies è la quinta definizione agevolata dei carichi affidati ad Agenzia delle Entrate-Riscossione (AdER), introdotta dalla Legge di Bilancio 2026. Il meccanismo è quello consolidato delle precedenti edizioni: il contribuente paga le somme dovute a titolo di capitale e di rimborso spese, mentre vengono meno le sanzioni, gli interessi di mora e l'aggio di riscossione.",
    },
    {
      type: "p",
      text: "La differenza sostanziale rispetto alla [rottamazione quater](/risorse/rottamazione-quater) non sta nello sconto, ma nel perimetro: la quinquies riguarda i carichi derivanti da omesso versamento di somme già dichiarate dal contribuente e i contributi INPS, non le pretese nate da attività di accertamento. È una definizione pensata per chi ha dichiarato correttamente e non ha pagato, non per chi ha subito una contestazione.",
    },
    {
      type: "note",
      text: "La rottamazione non è uno sconto sul debito: il capitale si paga per intero. Ciò che si azzera sono le voci accessorie — sanzioni, interessi di mora, aggio — che nelle cartelle più risalenti possono però rappresentare una quota molto rilevante dell'importo complessivo.",
    },

    { type: "h2", text: "Quali debiti rientrano e quali restano fuori", id: "ambito" },
    {
      type: "p",
      text: "Rientrano nella rottamazione quinquies i carichi affidati all'Agente della Riscossione dal 1° gennaio 2000 al 31 dicembre 2023. Il riferimento è alla data di affidamento del carico ad AdER, non alla data di notifica della cartella né all'anno d'imposta: è il primo controllo da fare sull'estratto di ruolo prima di qualunque valutazione.",
    },
    {
      type: "table",
      headers: ["Tipologia di carico", "Rientra nella quinquies"],
      rows: [
        ["Imposte dichiarate e non versate, emerse da controllo automatizzato o formale (artt. 36-bis e 36-ter DPR 600/1973)", "Sì"],
        ["Contributi previdenziali INPS non versati, non derivanti da accertamento", "Sì"],
        ["Sanzioni per violazioni del Codice della Strada irrogate da amministrazioni statali", "Sì, con le regole proprie delle sanzioni non tributarie"],
        ["Somme richieste a seguito di avviso di accertamento", "No"],
        ["Carichi affidati dopo il 31 dicembre 2023", "No"],
        ["Debiti già inclusi in un piano di rottamazione quater con tutte le rate scadute al 30 settembre 2025 regolarmente pagate", "No"],
      ],
    },
    {
      type: "p",
      text: "Per le sanzioni del Codice della Strada e per le altre sanzioni amministrative non tributarie la definizione agevolata non cancella la sanzione principale: elimina interessi e maggiorazioni. Il vantaggio economico è quindi più contenuto rispetto a un debito puramente tributario, e va calcolato prima di decidere.",
    },

    { type: "h2", text: "Chi poteva aderire e cosa è successo il 30 aprile 2026", id: "domanda" },
    {
      type: "p",
      text: "La domanda di adesione andava presentata in via telematica ad Agenzia delle Entrate-Riscossione entro il 30 aprile 2026. Il termine è perentorio ed è scaduto: chi non ha presentato la dichiarazione di adesione entro quella data non può più accedere alla rottamazione quinquies, e deve ragionare sulle alternative ordinarie descritte più avanti.",
    },
    {
      type: "p",
      text: "Chi ha presentato domanda ha ricevuto da AdER la comunicazione delle somme dovute, con l'importo definitivo e il piano di pagamento. È il documento su cui verificare che i carichi inclusi siano effettivamente quelli attesi: la domanda poteva riguardare anche solo alcune cartelle, lasciandone fuori altre.",
    },
    {
      type: "note",
      text: "Poteva aderire alla quinquies anche chi era decaduto da una precedente definizione agevolata, compresa la rottamazione quater, purché i carichi rientrassero nell'ambito applicativo della nuova misura. Restano invece esclusi i debiti già inseriti in piani di rottamazione quater per i quali risultavano pagate tutte le rate scadute al 30 settembre 2025.",
    },

    { type: "h2", text: "Quanto si paga: il piano fino a 54 rate", id: "piano" },
    {
      type: "p",
      text: "Il pagamento può avvenire in un'unica soluzione oppure in forma rateale. La rateazione massima prevista dalla rottamazione quinquies è di 54 rate bimestrali di pari importo, distribuite su nove anni: è la dilazione più lunga mai concessa da una definizione agevolata. Sulle somme dilazionate si applicano interessi nella misura del 3% annuo a decorrere dal 1° agosto 2026.",
    },
    {
      type: "table",
      headers: ["Elemento", "Disciplina"],
      rows: [
        ["Pagamento in unica soluzione", "Entro il 31 luglio 2026"],
        ["Numero massimo di rate", "54 rate bimestrali di pari importo (9 anni)"],
        ["Interessi sulla dilazione", "3% annuo dal 1° agosto 2026"],
        ["Prime tre scadenze 2026", "31 luglio, 30 settembre, 30 novembre"],
        ["Scadenze successive", "Cadenza bimestrale a partire dal 2027"],
        ["Tolleranza sui versamenti", "Cinque giorni di ritardo, con differimento se la scadenza cade di sabato o in giorno festivo"],
      ],
    },
    {
      type: "p",
      text: "La tolleranza dei cinque giorni non è una proroga discrezionale: è un margine tecnico previsto dalla disciplina delle definizioni agevolate. Il versamento eseguito entro il quinto giorno successivo alla scadenza è considerato tempestivo; oltre quel termine il pagamento è tardivo e produce la decadenza.",
    },

    { type: "h2", text: "Decadenza: quando si perde il beneficio", id: "decadenza" },
    {
      type: "p",
      text: "Il beneficio della rottamazione quinquies si perde in tre casi: mancato o insufficiente pagamento dell'unica rata per chi ha scelto la soluzione in un'unica soluzione; mancato pagamento di due rate, anche non consecutive, nel piano rateale; mancato pagamento dell'ultima rata del piano. La decadenza opera automaticamente, senza necessità di alcun provvedimento.",
    },
    {
      type: "p",
      text: "Le conseguenze della decadenza sono pesanti. Il debito torna esigibile per l'intero importo originario, con sanzioni e interessi di mora ripristinati; le somme già versate restano acquisite a titolo di acconto ma non danno diritto ad alcun rimborso; l'Agente della Riscossione può riprendere immediatamente le procedure cautelari ed esecutive — [fermo amministrativo](/risorse/fermo-amministrativo), [ipoteca](/risorse/ipoteca-esattoriale), [pignoramento del conto corrente](/risorse/pignoramento-conto-corrente) e dello stipendio.",
    },
    {
      type: "p",
      text: "Dopo la decadenza il carico residuo non può più essere riammesso alla definizione agevolata, ma può essere oggetto di una [rateizzazione ordinaria ex art. 19 DPR 602/1973](/risorse/rateizzazione-cartelle-esattoriali). L'importo da dilazionare, però, viene ricalcolato con tutte le voci accessorie: è la ragione per cui, quando la rata della rottamazione diventa insostenibile, conviene intervenire prima della decadenza e non dopo.",
    },

    { type: "h2", text: "Non ho aderito entro il termine: quali alternative restano", id: "alternative" },
    {
      type: "p",
      text: "Il termine del 30 aprile 2026 è scaduto, ma la chiusura della finestra della rottamazione non lascia il contribuente senza strumenti. Le alternative sono quattro, e non sono alternative fra loro: spesso si combinano.",
    },
    {
      type: "ol",
      items: [
        "Rateizzazione ordinaria dei carichi a ruolo (art. 19 DPR 602/1973): per le domande presentate nel 2026 il piano ordinario arriva a 84 rate, con procedura semplificata sotto la soglia dei 120.000 euro di debito. Sospende le azioni esecutive e cautelari.",
        "Verifica della notifica e della prescrizione: molte cartelle risalenti sono aggredibili non nel merito, ma per vizi di notifica o per l'avvenuto decorso del termine di prescrizione del credito iscritto a ruolo.",
        "Impugnazione dell'atto davanti al giudice competente, quando la pretesa è contestabile nel merito o l'atto è viziato. La competenza dipende dalla natura del credito: giudice tributario per i tributi, giudice ordinario per contributi e sanzioni amministrative.",
        "Procedure di sovraindebitamento previste dal Codice della Crisi, quando il debito fiscale è solo una parte di un'esposizione complessiva insostenibile: consentono di trattare in un unico procedimento fisco, banche e fornitori.",
      ],
    },
    {
      type: "p",
      text: "La quarta strada è quella che i contribuenti conoscono meno e che, nelle situazioni gravemente compromesse, produce l'effetto più radicale: procedure come il [piano di ristrutturazione dei debiti del consumatore](/risorse/piano-consumatore), la [liquidazione controllata](/risorse/liquidazione-controllata-sovraindebitato) e l'[esdebitazione del debitore incapiente](/risorse/esdebitazione-incapiente) possono ridurre o azzerare anche il debito fiscale residuo, cosa che nessuna rottamazione consente.",
    },

    { type: "h2", text: "Rottamazione e procedure di sovraindebitamento", id: "sovraindebitamento" },
    {
      type: "p",
      text: "La rottamazione agisce su una voce del debito: le somme accessorie di ciò che è iscritto a ruolo. Le procedure di sovraindebitamento agiscono sulla posizione complessiva del debitore, comprese le esposizioni bancarie e commerciali, e possono prevedere il pagamento parziale del capitale. Sono strumenti di ordine diverso, e la scelta dipende dal rapporto fra debito complessivo e capacità di rimborso reale.",
    },
    {
      type: "p",
      text: "Un criterio pratico: se il piano di rottamazione, calcolato sulla rata effettiva, è sostenibile con il reddito disponibile dopo le spese necessarie, la definizione agevolata è la strada più semplice. Se la rata assorbe una quota di reddito incompatibile con il mantenimento del nucleo familiare, la rottamazione produce solo un rinvio della decadenza: in quel caso la valutazione va spostata sulle procedure del Codice della Crisi.",
    },

    { type: "h2", text: "Cosa verificare prima di pagare", id: "verifiche" },
    {
      type: "ul",
      items: [
        "L'estratto di ruolo aggiornato, per sapere quali carichi sono effettivamente affidati e in quale data.",
        "La comunicazione delle somme dovute ricevuta da AdER, confrontata con le cartelle che si intendeva definire.",
        "La regolarità della notifica delle cartelle incluse: una cartella mai notificata validamente non diventa legittima per il fatto di essere stata rottamata.",
        "La prescrizione dei crediti più risalenti: aderire alla definizione agevolata di un debito prescritto significa riconoscerlo e rinunciare a farne valere l'estinzione.",
        "La sostenibilità reale della rata bimestrale sull'intero arco del piano, non solo sulle prime scadenze.",
      ],
    },

    { type: "h2", text: "Domande frequenti sulla rottamazione quinquies", id: "faq" },
    {
      type: "faq",
      items: [
        {
          q: "Posso ancora aderire alla rottamazione quinquies?",
          a: "No. Il termine per presentare la dichiarazione di adesione era il 30 aprile 2026 ed è perentorio. Chi non ha presentato domanda entro quella data può accedere alla rateizzazione ordinaria dei carichi a ruolo, valutare l'impugnazione degli atti o, se l'esposizione complessiva è insostenibile, una procedura di sovraindebitamento.",
        },
        {
          q: "Quali debiti rientrano nella rottamazione quinquies?",
          a: "I carichi affidati all'Agente della Riscossione dal 1° gennaio 2000 al 31 dicembre 2023 derivanti da omesso versamento di imposte dichiarate e da contributi INPS non versati, oltre alle sanzioni del Codice della Strada irrogate da amministrazioni statali. Restano fuori le somme richieste a seguito di avviso di accertamento.",
        },
        {
          q: "Quante rate sono previste e con quali interessi?",
          a: "Il pagamento può avvenire in unica soluzione entro il 31 luglio 2026 oppure in un massimo di 54 rate bimestrali di pari importo distribuite su nove anni, con interessi del 3% annuo a decorrere dal 1° agosto 2026. Le prime tre scadenze del 2026 sono il 31 luglio, il 30 settembre e il 30 novembre.",
        },
        {
          q: "Cosa succede se salto una rata della rottamazione quinquies?",
          a: "Si decade dal beneficio con il mancato pagamento di due rate, anche non consecutive, oppure dell'ultima rata del piano. Esiste una tolleranza di cinque giorni sul singolo versamento. Con la decadenza il debito torna dovuto per intero con sanzioni e interessi di mora, le somme versate valgono come acconto e l'Agente della Riscossione può riprendere pignoramenti, fermi e ipoteche.",
        },
        {
          q: "Ero decaduto dalla rottamazione quater: potevo entrare nella quinquies?",
          a: "Sì, la decadenza da una precedente definizione agevolata non precludeva l'accesso alla rottamazione quinquies, purché i carichi rientrassero nel suo ambito applicativo. Erano invece esclusi i debiti già inseriti in piani di rottamazione quater per i quali erano state pagate tutte le rate scadute al 30 settembre 2025.",
        },
        {
          q: "La rottamazione blocca i pignoramenti in corso?",
          a: "L'adesione alla definizione agevolata sospende le procedure cautelari ed esecutive avviate dall'Agente della Riscossione e impedisce l'avvio di nuove azioni, finché il piano è rispettato. In caso di decadenza le procedure riprendono, e riprendono sull'importo integrale del debito.",
        },
        {
          q: "Conviene sempre aderire a una rottamazione?",
          a: "No. Aderire comporta la rinuncia al contenzioso sui carichi definiti e il riconoscimento del debito, con effetto interruttivo della prescrizione. Su cartelle mai notificate correttamente, su crediti prescritti o su pretese contestabili nel merito, la verifica tecnica preventiva può portare a un risultato migliore dell'azzeramento delle sole sanzioni.",
        },
      ],
    },

    { type: "h2", text: "In sintesi", id: "conclusione" },
    {
      type: "p",
      text: "La rottamazione quinquies è uno strumento utile per chi ha un debito da omesso versamento sostenibile nel medio periodo: azzera sanzioni, interessi di mora e aggio, e distribuisce il capitale su un arco temporale lungo. Non è una soluzione per chi ha un'esposizione strutturalmente superiore alla propria capacità di rimborso, perché in quel caso la decadenza è solo questione di tempo e riporta il debito al valore pieno. Prima di impostare qualsiasi strategia — rottamazione, rateizzazione, ricorso o procedura di sovraindebitamento — la verifica da fare è sempre la stessa: quali carichi sono effettivamente dovuti, quali sono ancora esigibili e quale rata è realmente sostenibile.",
    },
  ],
};
