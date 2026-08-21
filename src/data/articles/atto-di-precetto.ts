import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "atto-di-precetto",
  title: "Atto di precetto: cosa fare nei 10 giorni prima del pignoramento",
  excerpt:
    "Il precetto è l'ultimo avviso prima dell'esecuzione forzata: intima il pagamento entro dieci giorni e apre la finestra più stretta e più utile per intervenire. Requisiti di validità, vizi ricorrenti, opposizioni e cosa si può ancora ottenere prima del pignoramento.",
  category: "Procedure",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Avv. Armando Rossi",
  cover: "from-destructive to-navy",
  coverImage: "/covers/atto-di-precetto.webp",
  keywords: ["atto di precetto", "precetto 10 giorni", "opposizione a precetto", "art 480 cpc", "pignoramento dopo precetto"],
  intro:
    "L'atto di precetto è l'avviso formale che precede l'esecuzione forzata: con esso il creditore, munito di titolo esecutivo, intima al debitore di adempiere entro un termine non inferiore a dieci giorni, avvertendolo che in mancanza si procederà al pignoramento. È un atto che spaventa e che, proprio per questo, viene spesso messo in un cassetto. È invece il momento in cui restano aperte più strade che in qualunque fase successiva: dieci giorni sono pochi, ma sono l'ultima finestra in cui si decide invece di subire.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cos'è il precetto e a cosa serve", id: "cosa-e" },
    { type: "p", text: "Il precetto è disciplinato dagli artt. 479 e seguenti del codice di procedura civile. Non è un provvedimento del giudice: è un atto del creditore, redatto dal suo legale e notificato al debitore, con cui gli si intima di adempiere l'obbligo risultante dal titolo esecutivo entro un termine non inferiore a dieci giorni. Scaduto il termine senza pagamento, il creditore può procedere al pignoramento senza ulteriori avvisi." },
    { type: "p", text: "Va tenuto distinto dal titolo esecutivo, che è il documento da cui nasce il diritto di procedere: una sentenza, un [decreto ingiuntivo](/risorse/decreto-ingiuntivo-opposizione) divenuto esecutivo, un assegno o una cambiale protestati, un atto pubblico. Il titolo dice che il credito esiste ed è esigibile; il precetto avvisa che sta per essere riscosso con la forza." },
    { type: "note", text: "Il precetto va notificato insieme al titolo esecutivo, o dopo che questo è già stato notificato. Ricevere un precetto senza aver mai visto il titolo che lo fonda è una delle anomalie più frequenti, ed è un vizio da far valere subito." },

    { type: "h2", text: "Cosa deve contenere per essere valido", id: "requisiti" },
    { type: "table", headers: ["Elemento", "Perché conta"], rows: [
      ["Indicazione delle parti", "Creditore e debitore devono essere identificati esattamente: un errore sul soggetto è un vizio sostanziale"],
      ["Titolo esecutivo su cui si fonda", "Deve essere indicato con precisione ed essere già notificato"],
      ["Intimazione ad adempiere", "Con termine non inferiore a dieci giorni dalla notifica"],
      ["Importo dettagliato", "Capitale, interessi e spese devono essere distinti e calcolabili, non indicati in blocco"],
      ["Data e sottoscrizione", "Del creditore o del difensore munito di procura"],
      ["Dichiarazione di residenza o elezione di domicilio", "Nel comune in cui ha sede il giudice competente per l'esecuzione"],
      ["Avvertimento sulla composizione della crisi", "L'atto deve avvisare il debitore della possibilità di rivolgersi a un OCC per una procedura di sovraindebitamento"],
    ]},
    { type: "p", text: "Quest'ultimo requisito è meno conosciuto degli altri ed è tutt'altro che formale: il precetto deve contenere l'avvertimento che il debitore può porre rimedio alla situazione di sovraindebitamento concludendo un accordo o proponendo un piano con l'ausilio di un [Organismo di Composizione della Crisi](/risorse/occ-organismo-composizione-crisi). È il legislatore stesso a indicare la via d'uscita nell'atto che minaccia il pignoramento." },

    { type: "h2", text: "I vizi che si incontrano più spesso", id: "vizi" },
    { type: "ul", items: [
      "Titolo esecutivo mai notificato o notificato irregolarmente, con conseguente inefficacia del precetto.",
      "Importi non dettagliati: un totale unico senza distinzione fra capitale, interessi e spese impedisce al debitore di verificare il dovuto.",
      "Interessi calcolati a un tasso diverso da quello del titolo o su periodi non spettanti.",
      "Precetto notificato oltre novanta giorni prima del pignoramento: perde efficacia e va rinnovato (art. 481 c.p.c.).",
      "Credito già prescritto al momento della notifica: la prescrizione continua a correre anche dopo il titolo, con termini che dipendono dalla natura del credito.",
      "Spese legali liquidate in misura superiore ai parametri, o duplicate rispetto a quelle già riconosciute nel titolo.",
    ]},
    { type: "p", text: "L'inefficacia per decorso dei novanta giorni è la più semplice da verificare e la più trascurata: basta confrontare la data di notifica del precetto con quella dell'atto di pignoramento. Se sono passati più di novanta giorni, il pignoramento è viziato e va contestato con l'opposizione agli atti esecutivi." },

    { type: "h2", text: "Le due opposizioni, e quale scegliere", id: "opposizioni" },
    { type: "table", headers: ["Rimedio", "Quando si usa", "Termine"], rows: [
      ["Opposizione all'esecuzione (art. 615 c.p.c.)", "Si contesta il diritto del creditore di procedere: credito inesistente, già pagato, prescritto, titolo inefficace", "Prima dell'inizio dell'esecuzione non c'è un termine fisso; dopo, va proposta senza ritardo"],
      ["Opposizione agli atti esecutivi (art. 617 c.p.c.)", "Si contesta un vizio formale del precetto o della notifica", "Venti giorni dalla notifica dell'atto viziato: è un termine perentorio"],
    ]},
    { type: "p", text: "La distinzione conta perché sbagliare rimedio significa quasi sempre perdere. Se il problema è che il debito non è dovuto si va di opposizione all'esecuzione; se il problema è come è stato scritto o notificato l'atto, si va di opposizione agli atti esecutivi, e lì i venti giorni non ammettono ritardi. Nel dubbio le due opposizioni possono essere proposte insieme." },
    { type: "note", text: "Né l'una né l'altra sospendono automaticamente l'esecuzione: la sospensione va chiesta al giudice con istanza motivata. Proporre opposizione e restare fermi in attesa dell'udienza è il modo più comune di vedersi comunque notificare il pignoramento." },

    { type: "h2", text: "Cosa si può ancora ottenere in dieci giorni", id: "cosa-fare" },
    { type: "ol", items: [
      "Verificare il titolo e i conteggi: capitale, interessi e spese vanno ricalcolati, perché gli errori aritmetici in questa fase sono frequenti e riducono l'importo.",
      "Controllare la prescrizione, che continua a decorrere anche dopo il titolo esecutivo secondo i termini propri del credito.",
      "Proporre un accordo a saldo e stralcio: il creditore che ha appena sostenuto le spese del precetto ha un interesse concreto a incassare subito invece di anticipare quelle del pignoramento.",
      "Chiedere una dilazione formalizzata per iscritto, con impegno del creditore a sospendere l'esecuzione finché il piano è rispettato.",
      "Valutare l'accesso a una procedura di sovraindebitamento, che sospende le azioni esecutive: è la strada quando i creditori sono più di uno e l'esposizione è strutturalmente insostenibile.",
    ]},
    { type: "p", text: "Il vantaggio negoziale di questa fase è reale e dura poco: dopo il pignoramento il creditore ha già speso, ha già bloccato il bene e ha molte meno ragioni per accettare uno sconto. Le percentuali che si ottengono prima e dopo sono raramente le stesse, e il metodo per costruire una proposta credibile è descritto nella guida sul [saldo e stralcio](/risorse/saldo-e-stralcio-debiti)." },

    { type: "h2", text: "Cosa succede se non si fa nulla", id: "inerzia" },
    { type: "p", text: "Scaduti i dieci giorni il creditore può procedere. La forma dipende da ciò che intende aggredire: pignoramento presso terzi su conto corrente, stipendio o pensione, pignoramento mobiliare presso l'abitazione, espropriazione immobiliare. Ciascuna ha regole e limiti propri, trattati nelle guide su [pignoramento del conto corrente](/risorse/pignoramento-conto-corrente), [pignoramento dello stipendio](/risorse/pignoramento-stipendio-limiti) e [pignoramento immobiliare](/risorse/pignoramento-immobiliare)." },
    { type: "p", text: "Da quel momento le difese non spariscono, ma si restringono: non si discute più se il debito sia dovuto — quella partita si è chiusa con il titolo — bensì se l'atto esecutivo sia regolare, se i limiti di impignorabilità siano rispettati e se il bene possa essere sostituito con una somma tramite la conversione del pignoramento." },

    { type: "h2", text: "Domande frequenti sull'atto di precetto", id: "faq" },
    { type: "faq", items: [
      {
        q: "Dopo il precetto quanto tempo ho davvero?",
        a: "Almeno dieci giorni dalla notifica: è il termine minimo che il creditore deve concedere. Dal giorno successivo può procedere al pignoramento, ma deve farlo entro novanta giorni dalla notifica del precetto, altrimenti l'atto perde efficacia e va rinnovato (art. 481 c.p.c.)."
      },
      {
        q: "Il precetto blocca il conto corrente?",
        a: "No. Il precetto è solo un'intimazione: non produce alcun vincolo sui beni. Il blocco arriva con il pignoramento, che è l'atto successivo. È proprio questa la ragione per cui i giorni fra precetto e pignoramento sono quelli in cui conviene muoversi."
      },
      {
        q: "Posso pagare solo una parte per fermare il pignoramento?",
        a: "Il pagamento parziale non impedisce di per sé al creditore di procedere per il residuo. Per fermare l'esecuzione serve un accordo scritto che impegni il creditore a sospenderla: un versamento senza accordo vale come acconto, riduce il debito e nient'altro. Va inoltre considerato che il pagamento interrompe la prescrizione."
      },
      {
        q: "Ho ricevuto il precetto ma non ho mai visto la sentenza: è regolare?",
        a: "No. Il titolo esecutivo deve essere notificato prima del precetto o insieme a esso. Se il titolo non è mai stato notificato validamente, il precetto è inefficace e il vizio si fa valere con l'opposizione agli atti esecutivi entro venti giorni, o con l'opposizione all'esecuzione se si contesta il diritto stesso di procedere."
      },
      {
        q: "L'opposizione sospende il pignoramento?",
        a: "Non automaticamente. La sospensione dell'efficacia esecutiva del titolo o dell'esecuzione va chiesta espressamente al giudice con istanza motivata, che la concede valutando la fondatezza dell'opposizione e il pregiudizio che il debitore subirebbe. Senza quella istanza, il creditore può procedere mentre l'opposizione è pendente."
      },
    ]},

    { type: "h2", text: "In sintesi", id: "conclusione" },
    { type: "p", text: "Il precetto non è ancora un'esecuzione: è l'avviso che l'esecuzione può iniziare. Chi lo riceve ha davanti la finestra più stretta e insieme più ricca di alternative dell'intera vicenda, perché il credito non è ancora stato aggredito e il creditore non ha ancora sostenuto i costi maggiori. Verificare titolo, conteggi e prescrizione, e in parallelo aprire una trattativa o valutare una procedura di sovraindebitamento, è ciò che distingue chi gestisce da chi subisce." },
  ],
};
