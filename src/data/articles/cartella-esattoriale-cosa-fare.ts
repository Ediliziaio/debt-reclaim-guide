import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "cartella-esattoriale-cosa-fare",
  title: "Cartella esattoriale: cosa fare nei primi 60 giorni dalla notifica",
  excerpt: "Hai ricevuto una cartella esattoriale dall'Agenzia Entrate Riscossione? I primi 60 giorni sono cruciali: ricorso, sospensione, rateizzazione, definizione agevolata, prescrizione. Una guida completa alle scelte da fare entro il termine.",
  category: "Tributario",
  date: "Aprile 2026",
  readTime: "15 min",
  author: "Studio Tutela Debito",
  cover: "from-gold to-gold-dark",
  coverImage: "/covers/cartella-esattoriale-cosa-fare.webp",
  keywords: ["cartella esattoriale", "ricorso cartella", "agenzia entrate riscossione", "AdER", "prescrizione cartella", "rateizzazione cartelle"],
  intro: "Una cartella esattoriale notificata dall'Agenzia Entrate Riscossione apre una finestra temporale precisa entro cui prendere decisioni rilevanti. I 60 giorni successivi alla notifica sono il momento in cui si può scegliere se contestare la pretesa, aderire a una rateizzazione, valutare una definizione agevolata o, nei casi più gravi, valutare l'accesso a una procedura di sovraindebitamento. Una scelta inconsapevole, o peggio l'inazione, può precludere strade che a posteriori sarebbero state preferibili.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cos'è una cartella esattoriale e come funziona", id: "cosa-e" },
    { type: "p", text: "La cartella esattoriale è l'atto con cui l'Agenzia delle Entrate Riscossione (AdER) richiede il pagamento di somme iscritte a ruolo dagli enti creditori: Agenzia delle Entrate, INPS, INAIL, Comuni, Regioni, altri enti pubblici. Non è essa stessa l'atto impositivo: deriva da un titolo (un avviso di accertamento, un ruolo INPS, un verbale di violazione del Codice della Strada) emesso a monte." },
    { type: "p", text: "Questo aspetto è cruciale: la cartella riflette un debito che è già stato 'formato' da un altro atto. La sua impugnazione può avere ad oggetto sia vizi propri della cartella (notifica, prescrizione, calcoli) sia vizi del titolo originario, ma in tempi e modi diversi." },

    { type: "image", src: authorityLegal, alt: "Analisi della cartella esattoriale prima del ricorso", caption: "L'esame puntuale della cartella e della relativa notifica è il primo passo per individuare eventuali vizi o termini di prescrizione decorsi." },

    { type: "h2", text: "Il termine di 60 giorni: perché è così importante", id: "termine-60-giorni" },
    { type: "p", text: "Dalla data di notifica della cartella decorrono 60 giorni entro i quali il contribuente può:" },
    { type: "ul", items: [
      "Pagare l'intera somma in via ordinaria",
      "Presentare ricorso alla competente Corte di Giustizia Tributaria",
      "Richiedere la rateizzazione del debito",
      "Aderire a eventuali definizioni agevolate aperte",
      "Presentare istanza di autotutela",
    ]},
    { type: "p", text: "Decorsi i 60 giorni senza alcuna azione, la cartella diventa definitiva e l'AdER può attivare le procedure esecutive: fermo amministrativo, ipoteca, pignoramento. Il debito iniziale viene anche maggiorato degli aggi di riscossione e degli interessi di mora, che continuano a maturare." },

    { type: "h2", text: "Le verifiche fondamentali da fare subito", id: "verifiche" },
    { type: "p", text: "Prima di prendere una decisione, è essenziale fare alcuni controlli che possono cambiare radicalmente lo scenario. Una cartella apparentemente dovuta può rivelarsi viziata; un'azione 'naturale' come la rateizzazione può non essere la scelta migliore." },

    { type: "h3", text: "1. Verifica della regolarità della notifica" },
    { type: "p", text: "La notifica deve avvenire nelle forme previste dall'art. 26 del DPR 602/1973 e dalle norme del codice di procedura civile richiamate. È il primo controllo perché è quello che, se dà esito positivo, travolge l'atto per intero: le forme ammesse e i vizi ricorrenti sono elencati più avanti, nella sezione dedicata alla notifica." },

    { type: "h3", text: "2. Verifica della prescrizione" },
    { type: "p", text: "Ogni credito ha un proprio termine di prescrizione, che continua a correre anche dopo la notifica della cartella e riparte da zero a ogni atto interruttivo. Lunghe inerzie dell'Agente della Riscossione fra un atto e il successivo possono averlo fatto maturare: la tabella dei termini per tipo di credito è più avanti, nella sezione sulla prescrizione." },

    { type: "h3", text: "3. Verifica della correttezza degli importi" },
    { type: "p", text: "Cartelle con interessi calcolati erroneamente, sanzioni non dovute, voci duplicate non sono rare. Un controllo analitico — voce per voce, anno per anno — è sempre opportuno. Se si trovano errori, il primo strumento è l'istanza di sgravio in autotutela, che però non sospende automaticamente i termini di ricorso." },

    { type: "h2", text: "Le opzioni a disposizione del contribuente", id: "opzioni" },

    { type: "h3", text: "Ricorso tributario" },
    { type: "p", text: "Il ricorso si propone alla Corte di Giustizia Tributaria di primo grado competente per territorio entro 60 giorni dalla notifica. Richiede il versamento del contributo unificato (variabile in base al valore della causa), eventualmente l'assistenza tecnica di un avvocato o di un dottore commercialista per importi superiori a una soglia, la redazione di un atto motivato. Per somme molto contenute è ammessa anche l'autodifesa." },
    { type: "p", text: "Il ricorso ha senso se esistono motivi concreti: vizi di notifica, prescrizione, errori sostanziali, decadenza dei termini di accertamento. Fare ricorso 'tanto per provare' è quasi sempre controproducente: i costi superano il presunto vantaggio." },

    { type: "h3", text: "Istanza di sospensione" },
    { type: "p", text: "Insieme al ricorso, o anche separatamente, si può chiedere alla Corte di Giustizia Tributaria la sospensione della riscossione (art. 47 D.lgs. 546/1992). La sospensione viene concessa se il giudice ravvisa il fumus boni iuris (probabile fondatezza del ricorso) e il periculum in mora (rischio di danno grave e irreparabile dall'esecuzione)." },
    { type: "p", text: "Esiste anche una sospensione amministrativa, richiesta direttamente all'AdER ex art. 1, c. 537-544 L. 228/2012, utilizzabile in casi specifici (ad esempio quando il debito sia già stato pagato, sgravato, prescritto)." },

    { type: "h3", text: "Rateizzazione" },
    { type: "p", text: "L'AdER concede la rateizzazione delle somme iscritte a ruolo con modalità diverse a seconda dell'importo. Per debiti fino a una certa soglia la rateizzazione è 'di diritto' su semplice richiesta; per importi superiori serve documentare la difficoltà economica. Il numero di rate può arrivare fino a 120, con quote mensili minime stabilite." },
    { type: "p", text: "Attenzione: aderire alla rateizzazione comporta il riconoscimento implicito del debito e interrompe la prescrizione. Se ci sono motivi validi per impugnare la cartella, è preferibile farlo prima di chiedere la rateizzazione, oppure presentare istanza di rateizzazione con espressa riserva." },

    { type: "h3", text: "Definizione agevolata (rottamazione)" },
    { type: "p", text: "Periodicamente il legislatore apre finestre di 'rottamazione' che consentono di pagare le cartelle senza sanzioni e senza interessi di mora. Il vantaggio è significativo, soprattutto per cartelle vecchie con sanzioni elevate. Vedi anche il nostro approfondimento sulla rottamazione." },
    { type: "p", text: "Aderendo alla rottamazione si rinuncia al contenzioso. Se la cartella è viziabile, è il caso di valutare se la rinuncia compensi il pagamento del solo capitale: non sempre la risposta è positiva." },

    { type: "h3", text: "Procedura di sovraindebitamento" },
    { type: "p", text: "Quando la cartella è solo una di molte voci debitorie e la situazione complessiva è insostenibile, lo strumento più efficace può essere una procedura di sovraindebitamento ex L. 3/2012 / CCII (piano del consumatore, liquidazione controllata, esdebitazione dell'incapiente). Queste procedure, una volta depositate, hanno effetti sospensivi sulle azioni esecutive in corso." },

    { type: "h2", text: "Decisione: una matrice di scelta", id: "decisione" },
    { type: "p", text: "Per orientarsi nella scelta, può essere utile schematizzare:" },
    { type: "table", headers: ["Situazione", "Opzione principale"], rows: [
      ["Notifica viziata o prescrizione decorsa", "Ricorso + sospensione"],
      ["Cartella legittima, capacità di pagamento", "Rateizzazione"],
      ["Cartella legittima, finestra di rottamazione aperta", "Definizione agevolata"],
      ["Cartella legittima ma quadro debitorio compromesso", "Sovraindebitamento"],
      ["Errore palese (importo, duplicato)", "Autotutela + monitoraggio termini"],
    ]},

    { type: "note", text: "La scelta dipende dalla singola situazione: una cartella di 5.000€ in un quadro altrimenti sano si gestisce diversamente da una cartella di 80.000€ che si aggiunge a finanziamenti, mutui, altre cartelle. Per questo conviene affrontare la valutazione con uno sguardo complessivo, non limitato alla singola pretesa." },

    { type: "h2", text: "Come si legge una cartella esattoriale", id: "come-leggerla" },
    { type: "p", text: "Prima di decidere qualsiasi cosa occorre capire che cosa si ha in mano. La cartella non è un atto unitario: è il contenitore di uno o più carichi, ciascuno con un ente creditore, un anno d'imposta e una causale propri. Due carichi nella stessa cartella possono avere sorti completamente diverse — uno prescritto, l'altro pienamente dovuto." },
    { type: "p", text: "Gli elementi da individuare sono sempre gli stessi. Il numero della cartella, che identifica il documento nei rapporti con l'Agente della Riscossione. L'ente creditore, che dice chi ha formato il ruolo: Agenzia delle Entrate, INPS, Comune, Regione, Prefettura. L'anno di riferimento e la causale, che dicono da dove nasce la pretesa. La data di consegna del ruolo, che è la data di affidamento rilevante per stabilire se un carico rientri in una definizione agevolata." },
    { type: "table", headers: ["Voce del dettaglio degli addebiti", "Che cos'è", "Si può contestare separatamente?"], rows: [
      ["Capitale (imposta o contributo)", "La somma dovuta all'ente creditore", "Sì, contestando il merito della pretesa"],
      ["Sanzioni", "La penalità per l'omesso o tardivo versamento", "Sì, anche in via autonoma (es. cause non imputabili)"],
      ["Interessi", "Maturati dalla scadenza originaria", "Sì, se calcolati su un capitale non dovuto o su periodi errati"],
      ["Interessi di mora", "Decorrono dalla notifica della cartella se non si paga nei 60 giorni", "Sì, sono azzerati dalle definizioni agevolate"],
      ["Oneri di riscossione", "Il compenso dell'Agente della Riscossione", "Sì, in misura ridotta se si paga entro 60 giorni"],
      ["Spese di notifica", "Il costo materiale della notifica", "Raramente contestabili in modo autonomo"],
    ]},
    { type: "note", text: "Nelle cartelle risalenti la somma di sanzioni, interessi e interessi di mora può superare il capitale originario. È la ragione per cui una definizione agevolata, quando aperta, produce effetti così rilevanti: non sconta l'imposta, ma cancella tutto ciò che le si è accumulato attorno." },

    { type: "h2", text: "La notifica: quando è valida e quali sono i vizi più frequenti", id: "notifica" },
    { type: "p", text: "La notifica non è una formalità: è il fatto giuridico che fa decorrere i termini e rende la pretesa opponibile. Una cartella non notificata validamente non produce effetti, e questo vale anche quando il contribuente ne è venuto a conoscenza per altra via — ad esempio consultando l'estratto di ruolo." },
    { type: "p", text: "Le forme ammesse dall'art. 26 del DPR 602/1973 sono la posta elettronica certificata verso gli indirizzi risultanti dai pubblici elenchi, per imprese e professionisti, la notifica a mezzo posta con raccomandata con avviso di ricevimento e la notifica tramite messo notificatore o ufficiale della riscossione. Ogni forma ha requisiti propri, e in ciascuna si annidano vizi ricorrenti." },
    { type: "ul", items: [
      "Notifica a un indirizzo PEC diverso da quello risultante dai pubblici elenchi, o a una PEC revocata o scaduta.",
      "Irreperibilità relativa gestita senza la raccomandata informativa che dà notizia del deposito: la notifica non si perfeziona.",
      "Notifica eseguita a un indirizzo non più attuale, quando la variazione di residenza era già opponibile all'ente.",
      "Consegna a persona diversa dal destinatario senza l'indicazione della qualità del ricevente nella relata.",
      "Relata di notifica mancante, incompleta o priva della sottoscrizione del soggetto notificatore.",
      "Cartella intestata a società estinta o a persona deceduta, notificata come se il destinatario esistesse ancora.",
    ]},
    { type: "p", text: "Il vizio di notifica non si deduce a parole: si prova con i documenti. Prima di qualunque contestazione servono l'estratto di ruolo aggiornato, la copia integrale della cartella con la relata e, per le notifiche telematiche, le ricevute di accettazione e di consegna. È la parte del lavoro che decide l'esito, molto più della formulazione del ricorso." },

    { type: "h2", text: "La prescrizione: termini per tipo di credito", id: "prescrizione" },
    { type: "p", text: "Dopo la notifica della cartella il credito non diventa imprescrittibile. Le Sezioni Unite della Cassazione (sent. n. 23397/2016) hanno chiarito che la cartella non impugnata non si trasforma in un titolo soggetto al termine decennale proprio delle sentenze: il credito conserva il proprio termine di prescrizione, che varia secondo la natura della somma iscritta a ruolo." },
    { type: "table", headers: ["Tipo di credito", "Termine di prescrizione", "Riferimento"], rows: [
      ["Imposte erariali (IRPEF, IVA, IRES)", "10 anni secondo l'orientamento prevalente", "Art. 2946 c.c."],
      ["Tributi locali (IMU, TARI, TASI)", "5 anni", "Art. 2948 n. 4 c.c."],
      ["Contributi previdenziali INPS e INAIL", "5 anni", "Art. 3, c. 9, L. 335/1995"],
      ["Sanzioni amministrative, incluse quelle del Codice della Strada", "5 anni", "Art. 28 L. 689/1981"],
      ["Tassa automobilistica (bollo auto)", "3 anni", "Art. 5 D.L. 953/1982"],
      ["Interessi e accessori", "5 anni", "Art. 2948 n. 4 c.c."],
    ]},
    { type: "p", text: "Il termine decorre dall'ultimo atto interruttivo validamente notificato e riparte da capo a ogni nuova interruzione: una intimazione di pagamento, un preavviso di fermo, un pignoramento. Anche il comportamento del debitore conta — una domanda di rateizzazione o il pagamento di un acconto valgono come riconoscimento del debito e azzerano il tempo trascorso. È il motivo per cui la verifica della prescrizione va fatta prima di qualsiasi mossa, non dopo. La materia è trattata in dettaglio nella guida sulla [prescrizione dei debiti](/risorse/prescrizione-debiti)." },

    { type: "h2", text: "Chi decide: il giudice competente cambia con il credito", id: "giudice-competente" },
    { type: "p", text: "Sbagliare giudice significa perdere tempo e, spesso, il termine. La competenza non dipende dall'atto — la cartella — ma dalla natura della somma che vi è iscritta." },
    { type: "table", headers: ["Natura del credito", "Giudice competente", "Termine"], rows: [
      ["Tributi erariali e locali", "Corte di Giustizia Tributaria di primo grado", "60 giorni dalla notifica"],
      ["Contributi previdenziali e assistenziali", "Tribunale, sezione lavoro", "40 giorni dalla notifica"],
      ["Sanzioni amministrative (es. Codice della Strada)", "Giudice di pace o Tribunale, secondo la materia", "30 giorni dalla notifica"],
      ["Vizi propri dell'atto di riscossione o dell'esecuzione", "Giudice ordinario dell'esecuzione", "Termini dell'opposizione esperita"],
    ]},
    { type: "note", text: "Quando una sola cartella contiene carichi di natura diversa — per esempio IRPEF e contributi INPS — le contestazioni vanno proposte davanti a giudici diversi, ciascuna nel proprio termine. È una delle ragioni per cui l'analisi va fatta carico per carico e non sulla cartella nel suo insieme." },

    { type: "h2", text: "Cosa succede dopo i 60 giorni", id: "dopo-60-giorni" },
    { type: "p", text: "Scaduto il termine senza pagamento, rateizzazione o impugnazione, la cartella diventa titolo per l'esecuzione forzata. L'Agente della Riscossione non deve chiedere autorizzazioni a un giudice: procede in via amministrativa, secondo una sequenza che il DPR 602/1973 scandisce con soglie e preavvisi." },
    { type: "ol", items: [
      "Intimazione di pagamento: se l'espropriazione non è iniziata entro un anno dalla notifica della cartella, deve essere preceduta da un'intimazione ad adempiere entro cinque giorni (art. 50 DPR 602/1973).",
      "Fermo amministrativo del veicolo: preceduto da un preavviso che assegna 30 giorni per pagare, rateizzare o dimostrare che il mezzo è strumentale all'attività (art. 86 DPR 602/1973).",
      "Ipoteca sugli immobili: ammessa solo per debiti complessivi superiori a 20.000 euro, preceduta da una comunicazione con 30 giorni di termine (art. 77 DPR 602/1973).",
      "Pignoramento presso terzi su conto corrente, stipendio o pensione, con i limiti di impignorabilità previsti dalla legge.",
      "Espropriazione immobiliare, esclusa sull'unico immobile di residenza non di lusso e comunque subordinata a soglie di debito e all'ipoteca già iscritta (art. 76 DPR 602/1973).",
    ]},
    { type: "p", text: "Ogni passaggio apre una nuova finestra difensiva, ma su un terreno più stretto: dopo la definitività della cartella non si discute più del merito della pretesa, si contestano i vizi dell'atto esecutivo o si eccepisce la prescrizione maturata dopo. Le difese specifiche sono trattate nelle guide su [fermo amministrativo](/risorse/fermo-amministrativo), [ipoteca esattoriale](/risorse/ipoteca-esattoriale) e [pignoramento del conto corrente](/risorse/pignoramento-conto-corrente)." },

    { type: "h2", text: "Casi particolari che cambiano la risposta", id: "casi-particolari" },
    { type: "h3", text: "Cartella intestata a una società cessata" },
    { type: "p", text: "La cancellazione della società dal registro delle imprese ne determina l'estinzione. L'Agente della Riscossione può agire verso i soci nei limiti di quanto riscosso in sede di liquidazione e verso i liquidatori secondo le regole di responsabilità proprie. Una cartella notificata alla società estinta come se fosse ancora esistente è aggredibile per difetto di legittimazione passiva." },
    { type: "h3", text: "Cartella a carico di un erede" },
    { type: "p", text: "L'erede che accetta puramente e semplicemente risponde dei debiti tributari del defunto. L'accettazione con beneficio d'inventario limita la responsabilità al valore dei beni ereditati. Le sanzioni tributarie, avendo natura personale, non si trasmettono agli eredi: è una delle verifiche da fare subito su una cartella ricevuta a seguito di successione." },
    { type: "h3", text: "Coobbligati e coniuge" },
    { type: "p", text: "La solidarietà nel debito tributario non è automatica: dipende dalla norma che la prevede. Il coniuge non risponde dei debiti fiscali dell'altro per il solo fatto del matrimonio; ne risponde quando è coobbligato per legge o per atto, oppure quando si tratta di beni in comunione aggredibili nei limiti previsti dal codice civile." },

    { type: "h2", text: "Cosa NON fare", id: "errori-comuni" },
    { type: "ul", items: [
      "Ignorare la cartella sperando che il problema sparisca: i termini scorrono e ogni giorno conta",
      "Aderire alla rateizzazione senza prima verificare la legittimità della cartella",
      "Pagare per intero senza un'analisi (potresti pagare un debito non dovuto o un importo errato)",
      "Affidarsi a operatori che promettono 'cancellazione garantita' senza vedere i documenti",
      "Lasciar passare il termine di 60 giorni senza alcuna azione formale",
    ]},

    { type: "h2", text: "Domande frequenti sulla cartella esattoriale", id: "faq" },
    { type: "faq", items: [
      {
        q: "Posso pagare in parte e contestare il resto?",
        a: "Sì. Il pagamento parziale non comporta la rinuncia al ricorso per la parte contestata, ma è importante che il pagamento sia accompagnato da una formale riserva, idealmente con un atto di pagamento 'con riserva di ripetizione' che mantenga il diritto di chiedere il rimborso in caso di vittoria nel ricorso."
      },
      {
        q: "Se faccio ricorso, devo comunque pagare?",
        a: "Il ricorso non sospende automaticamente la riscossione. Per evitare l'esecuzione durante il giudizio occorre presentare istanza di sospensione (giudiziale o amministrativa). Per somme molto elevate la sospensione giudiziale è di norma la strada da seguire. Nel frattempo possono comunque essere richiesti pagamenti parziali."
      },
      {
        q: "L'AdER può pignorarmi anche senza preavviso?",
        a: "Prima del pignoramento deve essere notificato un atto di intimazione (art. 50 D.P.R. 602/1973) se è trascorso oltre un anno dalla cartella. Altrimenti l'AdER può procedere direttamente al pignoramento. Per il fermo amministrativo e l'ipoteca esistono specifici preavvisi."
      },
      {
        q: "Quanto costa fare ricorso?",
        a: "Il contributo unificato varia a scaglioni in base al valore della causa: da circa 30€ per cause di poche centinaia di euro fino a oltre 1.500€ per cause di valore elevato. A questo si aggiungono i compensi del professionista che ti assiste. Per importi modesti l'autodifesa è ammessa."
      },
      {
        q: "Cosa succede se perdo il ricorso?",
        a: "Se perdi, oltre a dover pagare la cartella con interessi e aggi, sei condannato alle spese di giudizio (variabili). Esiste la possibilità di compensazione delle spese in casi specifici. Per questo è importante valutare con realismo le probabilità di accoglimento prima di promuovere il giudizio."
      },
      {
        q: "Ho scoperto la cartella dall'estratto di ruolo: posso impugnarla?",
        a: "L'estratto di ruolo di per sé non è impugnabile. Se però la cartella non è mai stata notificata validamente, se ne può far valere l'invalidità nei casi previsti dalla legge — in particolare quando il debito pregiudica la partecipazione a gare pubbliche, il pagamento da parte della pubblica amministrazione o l'accesso al credito. Fuori da questi casi la contestazione si propone quando arriva il primo atto successivo."
      },
      {
        q: "Quanto tempo ha l'Agente della Riscossione per notificare la cartella?",
        a: "Dipende dall'origine del carico. Per le somme derivanti da controllo automatizzato della dichiarazione la cartella va notificata entro il 31 dicembre del terzo anno successivo a quello di presentazione; per il controllo formale entro il quarto anno; per gli accertamenti divenuti definitivi entro il secondo anno successivo alla definitività. Superati questi termini si eccepisce la decadenza, che è cosa diversa dalla prescrizione."
      },
      {
        q: "La cartella è intestata a una società che ho chiuso: devo pagarla?",
        a: "L'estinzione della società cancella il soggetto passivo. I soci rispondono nei limiti di quanto riscosso in sede di liquidazione e i liquidatori secondo le regole di responsabilità loro proprie. Una cartella notificata alla società come se esistesse ancora è contestabile per difetto di legittimazione passiva: va però verificato se l'atto sia stato indirizzato ai soci in proprio."
      },
      {
        q: "Rispondo dei debiti fiscali di mio marito o di mia moglie?",
        a: "No, non per il solo fatto del matrimonio. La responsabilità sorge quando si è coobbligati per legge o per atto — ad esempio in una dichiarazione congiunta o in una garanzia prestata — oppure sui beni in comunione, nei limiti previsti dal codice civile. È una verifica da fare prima di qualunque pagamento."
      },
      {
        q: "Posso impugnare una cartella vecchia di più anni?",
        a: "Il ricorso entro 60 giorni dalla notifica è la via ordinaria. Tuttavia, anche cartelle vecchie possono essere oggetto di altre azioni: opposizione all'esecuzione se interviene un pignoramento (con specifici limiti), eccezione di prescrizione se sono trascorsi i termini. La valutazione va fatta sulla singola situazione."
      },
    ]},

    { type: "h2", text: "Conclusione: i 60 giorni come momento di scelta", id: "conclusione" },
    { type: "p", text: "Il termine di 60 giorni dalla notifica è il momento in cui hai il massimo numero di opzioni aperte. Dopo, molte si chiudono o diventano più costose. Per questo conviene attivarsi subito anche solo con una valutazione preliminare: capire se la cartella è viziata, se conviene impugnarla, se la rateizzazione è la scelta giusta, se è il caso di valutare uno strumento più ampio. Non sempre la prima opzione che sembra ovvia è la migliore." },
  ],
  }
