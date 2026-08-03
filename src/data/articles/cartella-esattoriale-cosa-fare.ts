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
  readTime: "14 min",
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
    { type: "p", text: "La notifica della cartella deve avvenire nelle forme previste dalla legge (artt. 137 e ss. c.p.c. richiamati dall'art. 26 D.P.R. 602/1973). I vizi più frequenti sono: notifica a persona non legittimata a riceverla, notifica per compiuta giacenza con omessa raccomandata informativa, notifica a domicilio non più attuale, errori formali nell'avviso di ricevimento. Una notifica invalida è motivo di ricorso con elevate probabilità di accoglimento." },

    { type: "h3", text: "2. Verifica della prescrizione" },
    { type: "p", text: "Ogni tributo ha un proprio termine di prescrizione, decorrente dalla data in cui il diritto poteva essere esercitato. I termini sono:" },
    { type: "table", headers: ["Tipologia", "Prescrizione"], rows: [
      ["IRPEF, IRES, IVA (imposte erariali)", "10 anni"],
      ["IMU, TASI, TARI, tributi locali", "5 anni"],
      ["Contributi INPS, INAIL", "5 anni"],
      ["Sanzioni amministrative (es. Codice della Strada)", "5 anni"],
      ["Bollo auto", "3 anni"],
      ["Interessi", "5 anni"],
    ]},
    { type: "p", text: "La prescrizione si interrompe con la notifica della cartella e con altri atti formali. Tuttavia, lunghe inerzie dell'AdER tra cartella e successivi atti possono determinare la prescrizione del credito. Verificare le date è una delle prime cose da fare." },

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
        q: "Posso impugnare una cartella vecchia di più anni?",
        a: "Il ricorso entro 60 giorni dalla notifica è la via ordinaria. Tuttavia, anche cartelle vecchie possono essere oggetto di altre azioni: opposizione all'esecuzione se interviene un pignoramento (con specifici limiti), eccezione di prescrizione se sono trascorsi i termini. La valutazione va fatta sulla singola situazione."
      },
    ]},

    { type: "h2", text: "Conclusione: i 60 giorni come momento di scelta", id: "conclusione" },
    { type: "p", text: "Il termine di 60 giorni dalla notifica è il momento in cui hai il massimo numero di opzioni aperte. Dopo, molte si chiudono o diventano più costose. Per questo conviene attivarsi subito anche solo con una valutazione preliminare: capire se la cartella è viziata, se conviene impugnarla, se la rateizzazione è la scelta giusta, se è il caso di valutare uno strumento più ampio. Non sempre la prima opzione che sembra ovvia è la migliore." },
  ],
  }
