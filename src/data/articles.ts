import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export type Category = "Privati" | "Imprese" | "Tributario" | "Procedure";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "note"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  coverImage?: string;
  intro: string;
  content: Block[];
  keywords?: string[];
};

export const articles: Article[] = [
  // ============ ARTICLE 1 ============
  {
    slug: "esdebitazione-incapiente",
    title: "Esdebitazione del debitore incapiente: cosa significa, requisiti e procedura (art. 283 CCII)",
    excerpt: "L'esdebitazione del debitore incapiente è uno strumento del Codice della Crisi che consente la cancellazione integrale dei debiti anche in assenza di patrimonio. Guida ai requisiti, alla procedura e ai limiti previsti dall'art. 283 CCII.",
    category: "Privati",
    date: "Aprile 2026",
    readTime: "12 min",
    author: "Avv. Armando Rossi",
    cover: "from-navy to-navy-light",
    coverImage: heroHope,
    keywords: ["esdebitazione incapiente", "art 283 CCII", "cancellazione debiti", "debitore incapiente", "sovraindebitamento"],
    intro: "L'esdebitazione del debitore incapiente è uno degli istituti più innovativi introdotti dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Disciplinata dall'art. 283 CCII, consente — in presenza di precisi presupposti — la cancellazione integrale dei debiti anche quando il debitore non dispone di alcun patrimonio aggredibile né di redditi sufficienti a soddisfare i creditori. È uno strumento riservato alle situazioni in cui ogni altra procedura sarebbe priva di utilità concreta.",
    content: [
      { type: "h2", text: "Cosa si intende per debitore incapiente", id: "definizione" },
      { type: "p", text: "Nella terminologia del Codice della Crisi è considerato 'incapiente' il debitore persona fisica che si trova in stato di sovraindebitamento e che, pur essendo meritevole, non è in grado di offrire ai creditori alcuna utilità diretta o indiretta, neppure in prospettiva futura. In altri termini: una persona che ha debiti, ma non ha né patrimonio aggredibile né redditi che, depurati delle spese di sussistenza, consentano di destinare somme ai creditori." },
      { type: "p", text: "L'art. 283 CCII è la norma di riferimento. Si tratta di un'evoluzione di quanto già previsto, nella vecchia disciplina, dall'art. 14-quaterdecies della Legge 3/2012, ma con presupposti procedurali aggiornati e una collocazione organica all'interno del nuovo Codice." },

      { type: "image", src: heroHope, alt: "Persona che guarda al futuro dopo l'esdebitazione", caption: "L'esdebitazione restituisce al debitore la possibilità concreta di ripartire, una volta che la sua situazione patrimoniale lo giustifica." },

      { type: "h2", text: "Presupposti per accedere all'esdebitazione dell'incapiente", id: "requisiti" },
      { type: "p", text: "L'accesso a questo strumento è subordinato alla compresenza di più presupposti, sia di tipo soggettivo sia di tipo oggettivo. Il Tribunale verifica analiticamente ciascuno di essi prima di concedere il beneficio." },

      { type: "h3", text: "Presupposti soggettivi" },
      { type: "ul", items: [
        "Persona fisica (sono escluse società ed enti)",
        "Stato di sovraindebitamento accertato in via documentale",
        "Meritevolezza del debitore (assenza di frode, dolo o colpa grave nella formazione del debito)",
        "Non aver già beneficiato dell'esdebitazione dell'incapiente in precedenza",
        "Aver collaborato lealmente con gli organi della procedura",
      ]},

      { type: "h3", text: "Presupposti oggettivi" },
      { type: "ul", items: [
        "Assenza di patrimonio aggredibile dai creditori",
        "Reddito disponibile non sufficiente a garantire alcuna utilità ai creditori, neppure parziale",
        "Mancanza di prospettive future di miglioramento documentabili al momento della domanda",
      ]},

      { type: "note", text: "Il giudizio di meritevolezza è uno degli aspetti più delicati: il Tribunale valuta come si è formato il debito, se vi sono stati comportamenti dolosi (ad esempio occultamento del patrimonio, frode ai creditori) o colpa grave (sproporzionato indebitamento rispetto al reddito). In questa valutazione la documentazione raccolta dall'OCC e la condotta processuale del debitore pesano in modo determinante." },

      { type: "h2", text: "Il limite della 'una sola volta nella vita'", id: "una-volta" },
      { type: "p", text: "L'art. 283, comma 1, CCII è esplicito: il beneficio dell'esdebitazione del debitore incapiente può essere concesso una sola volta nella vita. Una volta ottenuta, non è più possibile ricorrervi in futuro. È una scelta del legislatore che mira a evitare un uso strumentale e ripetuto della procedura." },
      { type: "p", text: "Questo limite va valutato con attenzione: prima di richiedere l'esdebitazione dell'incapiente conviene verificare se non esistano alternative — concordato minore, piano del consumatore, liquidazione controllata — che potrebbero risolvere la situazione attuale lasciando aperta la possibilità di un futuro intervento, qualora dovesse rendersi necessario." },

      { type: "h2", text: "Le sopravvenienze nei quattro anni successivi", id: "sopravvenienze" },
      { type: "p", text: "Per i quattro anni successivi al decreto che dispone l'esdebitazione, il debitore ha l'obbligo di comunicare al giudice eventuali sopravvenienze rilevanti. Si tratta tipicamente di:" },
      { type: "ul", items: [
        "Eredità o donazioni ricevute",
        "Vincite di una certa entità",
        "Miglioramenti sensibili della situazione reddituale (nuovo lavoro stabile con reddito elevato)",
        "Acquisizione di patrimonio per causa diversa dal lavoro",
      ]},
      { type: "p", text: "Se nel quadriennio si verificano sopravvenienze che consentirebbero di soddisfare almeno il 10% dei debiti, il giudice può revocare l'esdebitazione. La logica è chiara: il beneficio è concesso a chi non ha nulla, e se la situazione cambia significativamente l'equilibrio iniziale viene meno." },

      { type: "h2", text: "Come si svolge la procedura", id: "procedura" },
      { type: "p", text: "L'iter dell'esdebitazione del debitore incapiente è articolato e prevede l'intervento di più soggetti: l'OCC (Organismo di Composizione della Crisi), il debitore stesso, eventualmente l'esperto e infine il Tribunale che pronuncia sul beneficio." },

      { type: "h3", text: "1. Contatto con l'OCC" },
      { type: "p", text: "Il punto di partenza è il contatto con un Organismo di Composizione della Crisi accreditato. L'OCC ha il compito di raccogliere la documentazione, ricostruire la situazione debitoria, redigere la relazione particolareggiata che accompagnerà la domanda al Tribunale." },

      { type: "h3", text: "2. Raccolta documentale" },
      { type: "p", text: "Il debitore deve fornire all'OCC tutta la documentazione utile: estratti AdER, contratti di finanziamento, atti di precetto e pignoramento, estratti conto bancari, dichiarazioni dei redditi, certificazioni patrimoniali. La completezza documentale è essenziale: l'eventuale occultamento, anche involontario, può compromettere la procedura." },

      { type: "h3", text: "3. Relazione dell'OCC" },
      { type: "p", text: "L'OCC redige una relazione particolareggiata che descrive: cause del sovraindebitamento, condotta del debitore, situazione patrimoniale e reddituale attuale, prospettive future. La relazione contiene anche il giudizio dell'OCC sulla meritevolezza." },

      { type: "h3", text: "4. Deposito della domanda in Tribunale" },
      { type: "p", text: "La domanda di esdebitazione viene depositata presso il Tribunale competente (di norma quello del luogo di residenza del debitore) corredata dalla relazione OCC e da tutta la documentazione. Da questo momento i creditori vengono informati e possono presentare osservazioni." },

      { type: "h3", text: "5. Decreto del giudice" },
      { type: "p", text: "Il giudice esamina la domanda, valuta i presupposti e decide. Se la domanda è accolta, il decreto dichiara la cancellazione dei debiti residui. Il decreto è impugnabile dai creditori entro i termini di legge." },

      { type: "h2", text: "Quali debiti vengono cancellati e quali no", id: "debiti-esclusi" },
      { type: "p", text: "L'esdebitazione produce l'effetto di rendere inesigibili i crediti concorsuali nei confronti del debitore. Vengono cancellati pressoché tutti i debiti pregressi, ma esistono alcune eccezioni espressamente previste dalla legge." },

      { type: "h3", text: "Debiti che vengono cancellati" },
      { type: "ul", items: [
        "Debiti verso banche e finanziarie (mutui non garantiti, prestiti personali, carte revolving)",
        "Debiti commerciali verso fornitori",
        "Debiti tributari e contributivi (cartelle AdER, INPS, INAIL)",
        "Debiti per somme dovute a titolo di sanzione amministrativa",
        "Debiti familiari diversi da quelli alimentari",
      ]},

      { type: "h3", text: "Debiti che restano esclusi" },
      { type: "ul", items: [
        "Obblighi di mantenimento e alimentari",
        "Debiti per il risarcimento dei danni da fatto illecito extracontrattuale",
        "Sanzioni penali e amministrative di carattere pecuniario non accessorie a debiti estinti",
        "Debiti fiscali per imposte, sanzioni e interessi conseguenti a comportamenti fraudolenti",
      ]},

      { type: "note", text: "Le esclusioni dell'art. 283 CCII vanno applicate caso per caso. Ad esempio, una sanzione penale può essere esclusa se è ancora pendente, ma può essere ricompresa se accessoria a un debito tributario tipico. L'analisi puntuale dei singoli rapporti è parte integrante del lavoro preliminare." },

      { type: "h2", text: "Quando l'esdebitazione dell'incapiente è la scelta giusta", id: "quando-conviene" },
      { type: "p", text: "Lo strumento è utile in situazioni specifiche. Non si applica a chi può, anche faticosamente, pagare una parte del debito: per quei casi esistono il piano del consumatore, il concordato minore, la liquidazione controllata. L'art. 283 CCII è pensato per chi è oggettivamente al di sotto della soglia di capienza." },
      { type: "p", text: "I profili tipici che possono accedere sono:" },
      { type: "ul", items: [
        "Pensionati con pensioni minime o sociali e debiti accumulati",
        "Persone in stato di disoccupazione prolungata senza patrimonio",
        "Ex-imprenditori la cui posizione patrimoniale è ormai irreversibilmente compromessa",
        "Lavoratori con reddito molto basso e nucleo familiare numeroso a carico",
      ]},

      { type: "h2", text: "Costi e tempi della procedura", id: "costi-tempi" },
      { type: "p", text: "Le procedure di sovraindebitamento, e quindi anche l'esdebitazione dell'incapiente, prevedono costi articolati: compenso dell'OCC, spese vive del Tribunale (contributo unificato, marche da bollo), eventuali oneri di pubblicazione. I compensi dell'OCC sono regolati da apposito decreto ministeriale e variano a seconda dell'entità del debito e della complessità." },
      { type: "p", text: "I tempi medi, dalla raccolta documentale al decreto finale, sono variabili: dipendono dal Tribunale competente, dalla completezza della documentazione e dall'eventuale opposizione di creditori. In via indicativa, da alcuni mesi a oltre un anno." },

      { type: "h2", text: "Domande frequenti sull'esdebitazione dell'incapiente", id: "faq" },
      { type: "faq", items: [
        {
          q: "Posso accedere all'esdebitazione se ho la casa di proprietà?",
          a: "L'esdebitazione del debitore incapiente presuppone l'assenza di patrimonio aggredibile. Se hai una casa di proprietà, normalmente la procedura applicabile è la liquidazione controllata (che prevede la cessione dei beni) seguita eventualmente da esdebitazione. La presenza di una prima casa con specifiche caratteristiche può richiedere valutazioni puntuali."
        },
        {
          q: "Posso ricevere un'eredità dopo l'esdebitazione?",
          a: "Sì, ma con un vincolo. Per quattro anni dal decreto hai l'obbligo di comunicare al giudice eventuali sopravvenienze. Se l'eredità ricevuta consentirebbe di pagare almeno il 10% dei debiti cancellati, il giudice può revocare l'esdebitazione. Trascorsi i quattro anni, le sopravvenienze non hanno più effetto."
        },
        {
          q: "L'esdebitazione cancella anche i debiti verso l'Agenzia Entrate Riscossione?",
          a: "Sì. I debiti tributari e contributivi gestiti dall'AdER rientrano tra i debiti concorsuali e vengono cancellati dall'esdebitazione, salve le eccezioni espressamente previste (ad esempio debiti derivanti da comportamenti fraudolenti accertati)."
        },
        {
          q: "Quanto costa attivare la procedura?",
          a: "I costi sono composti dal compenso dell'OCC (regolato da DM e variabile in base alla complessità), dalle spese vive del Tribunale e da eventuali costi di assistenza legale. In molti casi i costi possono essere dilazionati. Una valutazione preventiva permette di avere un quadro chiaro prima di procedere."
        },
        {
          q: "Posso lavorare dopo aver ottenuto l'esdebitazione?",
          a: "Sì, l'esdebitazione non comporta alcuna limitazione professionale né interdizione. Puoi lavorare, aprire un'attività, percepire stipendi e pensioni come prima. L'unico vincolo è l'obbligo di comunicare le sopravvenienze rilevanti per i quattro anni successivi."
        },
        {
          q: "Cosa succede se ho omesso di dichiarare un bene?",
          a: "L'omissione di dichiarazione di un bene, se accertata, può portare alla revoca dell'esdebitazione. Per questo è essenziale che la fase di raccolta documentale sia completa: l'OCC e il legale che ti assiste hanno proprio il compito di assicurarsi che nulla venga trascurato."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "L'esdebitazione del debitore incapiente è uno strumento di rilevante valore sociale: consente a chi è in condizione di reale incapienza di riprendere in mano la propria vita senza più il peso di debiti impagabili. È però uno strumento tecnico, con presupposti specifici e procedure articolate. L'analisi della singola posizione, condotta da professionisti che conoscono la materia, è il primo passo per capire se rientra tra i casi in cui può essere applicato." },
    ],
  },

  // ============ ARTICLE 2 ============
  {
    slug: "cartella-esattoriale-cosa-fare",
    title: "Cartella esattoriale: cosa fare nei primi 60 giorni dalla notifica",
    excerpt: "Hai ricevuto una cartella esattoriale dall'Agenzia Entrate Riscossione? I primi 60 giorni sono cruciali: ricorso, sospensione, rateizzazione, definizione agevolata, prescrizione. Una guida completa alle scelte da fare entro il termine.",
    category: "Tributario",
    date: "Aprile 2026",
    readTime: "14 min",
    author: "Studio Tutela Debito",
    cover: "from-gold to-gold-dark",
    coverImage: authorityLegal,
    keywords: ["cartella esattoriale", "ricorso cartella", "agenzia entrate riscossione", "AdER", "prescrizione cartella", "rateizzazione cartelle"],
    intro: "Una cartella esattoriale notificata dall'Agenzia Entrate Riscossione apre una finestra temporale precisa entro cui prendere decisioni rilevanti. I 60 giorni successivi alla notifica sono il momento in cui si può scegliere se contestare la pretesa, aderire a una rateizzazione, valutare una definizione agevolata o, nei casi più gravi, valutare l'accesso a una procedura di sovraindebitamento. Una scelta inconsapevole, o peggio l'inazione, può precludere strade che a posteriori sarebbero state preferibili.",
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
  },

  // ============ ARTICLE 3 ============
  {
    slug: "composizione-negoziata",
    title: "Composizione negoziata della crisi d'impresa: guida completa allo strumento del CCII",
    excerpt: "La composizione negoziata è lo strumento riservato e stragiudiziale del Codice della Crisi per affrontare la difficoltà aziendale in fase precoce. Guida completa: presupposti, procedura, ruolo dell'esperto, misure protettive ed esiti possibili.",
    category: "Imprese",
    date: "Marzo 2026",
    readTime: "16 min",
    author: "Avv. Armando Rossi",
    cover: "from-trust to-trust-dark",
    coverImage: handshakeTrust,
    keywords: ["composizione negoziata", "crisi d'impresa", "CCII", "codice della crisi", "ristrutturazione debito impresa", "esperto indipendente"],
    intro: "La composizione negoziata della crisi d'impresa è una delle innovazioni più rilevanti introdotte nel nostro ordinamento. Nata nel 2021 con il D.L. 118 come risposta alla crisi pandemica e oggi pienamente integrata nel Codice della Crisi d'Impresa e dell'Insolvenza (artt. 12-25 CCII), si caratterizza per essere riservata, stragiudiziale e attivabile in via volontaria dall'imprenditore. È pensata per affrontare la difficoltà aziendale prima che si trasformi in insolvenza, quando ancora è possibile salvare il valore dell'impresa.",
    content: [
      { type: "h2", text: "Cos'è la composizione negoziata", id: "cosa-e" },
      { type: "p", text: "La composizione negoziata è un percorso assistito di trattativa tra l'imprenditore in difficoltà e i suoi creditori, condotto con il supporto di un esperto indipendente nominato dalla Camera di Commercio. L'obiettivo è raggiungere un accordo che permetta il risanamento dell'impresa e la prosecuzione dell'attività, evitando il ricorso a procedure concorsuali tradizionali (concordato preventivo, liquidazione giudiziale)." },
      { type: "p", text: "A differenza delle procedure concorsuali, la composizione negoziata non prevede l'intervento del Tribunale nella conduzione della trattativa (salvo per l'eventuale concessione delle misure protettive) e mantiene un carattere prevalentemente riservato. L'imprenditore conserva la gestione ordinaria dell'azienda durante tutta la procedura." },

      { type: "image", src: handshakeTrust, alt: "Trattativa tra imprenditore e creditori nella composizione negoziata", caption: "La composizione negoziata si fonda su un percorso di dialogo strutturato tra imprenditore e creditori, mediato dalla figura dell'esperto indipendente." },

      { type: "h2", text: "Quando si attiva: lo squilibrio patrimoniale", id: "quando" },
      { type: "p", text: "L'art. 12 CCII individua il presupposto oggettivo nella condizione di 'squilibrio patrimoniale o economico-finanziario che renda probabile la crisi o l'insolvenza'. La formula è ampia: copre situazioni in cui l'impresa non è ancora insolvente ma presenta segnali che, se non gestiti, porteranno alla crisi conclamata." },
      { type: "p", text: "Indicatori tipici che giustificano l'attivazione:" },
      { type: "ul", items: [
        "Tensioni di liquidità ricorrenti",
        "Ritardi nei pagamenti a fornitori, banche o erario",
        "Perdita di una commessa o di un cliente strategico",
        "Calo significativo dei ricavi non recuperato",
        "Difficoltà nell'accesso al credito",
        "Indici di bilancio in deterioramento (rapporto PFN/EBITDA, capacità di servizio del debito)",
      ]},
      { type: "p", text: "Il presupposto deve essere accompagnato dalla possibilità concreta di risanamento: se l'impresa è già decotta, in stato di insolvenza irreversibile, gli strumenti appropriati sono altri (liquidazione giudiziale, concordato liquidatorio)." },

      { type: "h2", text: "Chi può attivare la procedura", id: "soggetti" },
      { type: "p", text: "Possono accedere alla composizione negoziata tutti gli imprenditori commerciali e agricoli, di qualsiasi dimensione, comprese le imprese che non sono assoggettabili a liquidazione giudiziale (le cosiddette imprese 'sotto soglia'). Possono accedervi anche le società di capitali, di persone, le cooperative e le imprese agricole, incluse quelle individuali." },
      { type: "p", text: "L'iniziativa è esclusiva dell'imprenditore: né i creditori né il pubblico ministero possono attivare il percorso. È una procedura strettamente volontaria, in linea con la sua natura negoziale." },

      { type: "h2", text: "La procedura passo dopo passo", id: "procedura" },

      { type: "h3", text: "1. Istanza tramite piattaforma telematica" },
      { type: "p", text: "L'imprenditore presenta l'istanza tramite la piattaforma telematica nazionale gestita da Unioncamere. L'istanza è corredata dai documenti contabili (bilanci degli ultimi tre esercizi, situazione patrimoniale aggiornata), da una relazione sulla situazione economico-finanziaria, dall'elenco dei creditori, dal piano di risanamento ipotizzato." },

      { type: "h3", text: "2. Nomina dell'esperto" },
      { type: "p", text: "Entro pochi giorni dalla presentazione dell'istanza, la Commissione presso la CCIAA competente nomina l'esperto indipendente, scegliendolo da un albo nazionale di professionisti accreditati. L'esperto è una figura terza, di provata indipendenza, con competenze specifiche in materia di crisi d'impresa." },

      { type: "h3", text: "3. Primo incontro e valutazione di fattibilità" },
      { type: "p", text: "L'esperto convoca l'imprenditore, esamina la documentazione e valuta la concreta possibilità di risanamento. Se ritiene che non vi siano prospettive concrete, lo dichiara: la composizione negoziata si chiude senza ulteriori sviluppi (e l'imprenditore deve valutare strumenti alternativi)." },
      { type: "p", text: "Se invece le prospettive ci sono, l'esperto avvia le trattative: contatta i creditori principali, raccoglie informazioni, propone le linee di un possibile accordo." },

      { type: "h3", text: "4. Trattative con i creditori" },
      { type: "p", text: "Il cuore della procedura sono le trattative. Si svolgono in modo riservato, sotto la regia dell'esperto, e possono riguardare diversi profili: dilazioni di pagamento, stralci di interessi, riduzioni del capitale, conversione del debito in equity, finanziamenti ponte, accordi con specifiche categorie di creditori (banche, fornitori strategici, AdER)." },

      { type: "h3", text: "5. Conclusione" },
      { type: "p", text: "La procedura può concludersi in diversi modi: con un contratto che soddisfa una parte dei creditori, con accordi ad efficacia estesa, con il deposito di una domanda di concordato o di accordo di ristrutturazione, oppure con la dichiarazione di impossibilità a proseguire (se le trattative falliscono). La scelta dipende dall'esito delle trattative e dalla strategia complessiva." },

      { type: "h2", text: "Il ruolo dell'esperto indipendente", id: "esperto" },
      { type: "p", text: "L'esperto non è un consulente dell'imprenditore né un rappresentante dei creditori: è una figura terza con il compito di favorire le trattative garantendo correttezza informativa e parità di trattamento. Non assume decisioni: non firma contratti, non delibera, non vincola le parti. Il suo ruolo è metodologico e di garanzia." },
      { type: "p", text: "Ha però poteri rilevanti:" },
      { type: "ul", items: [
        "Acquisire dall'imprenditore tutte le informazioni necessarie",
        "Convocare creditori e operatori finanziari",
        "Esprimere parere sulla coerenza degli atti dell'imprenditore con la procedura",
        "Riferire al Tribunale in caso di richiesta di misure protettive",
        "Dichiarare la chiusura della procedura per impossibilità di risanamento",
      ]},
      { type: "p", text: "L'indipendenza dell'esperto è tutelata da rigorose norme di incompatibilità: non può aver intrattenuto rapporti professionali con l'imprenditore o con i creditori principali negli anni precedenti." },

      { type: "h2", text: "Le misure protettive (art. 18-19 CCII)", id: "misure-protettive" },
      { type: "p", text: "Uno degli aspetti più rilevanti è la possibilità, per l'imprenditore, di richiedere al Tribunale misure protettive del patrimonio. Si tratta di provvedimenti che possono includere:" },
      { type: "ul", items: [
        "Sospensione delle azioni esecutive in corso",
        "Divieto di iniziare nuove azioni esecutive",
        "Divieto di acquisire diritti di prelazione",
        "Sospensione di iniziative cautelari",
        "Divieto di modifica unilaterale dei rapporti pendenti da parte dei creditori",
      ]},
      { type: "p", text: "Le misure hanno durata limitata (in genere quattro mesi, prorogabili) e sono soggette al controllo giudiziale: il Tribunale verifica periodicamente la sussistenza dei presupposti e l'andamento delle trattative. La richiesta deve essere accompagnata dal piano e dal parere dell'esperto." },

      { type: "note", text: "Le misure protettive sono uno strumento potente ma non automatico: vengono concesse solo se il Tribunale ritiene che il risanamento sia concretamente possibile. Una richiesta non accompagnata da un piano credibile o priva del supporto dell'esperto ha basse probabilità di accoglimento." },

      { type: "h2", text: "I possibili esiti della composizione negoziata", id: "esiti" },

      { type: "h3", text: "Contratto privato con uno o più creditori" },
      { type: "p", text: "Si raggiungono accordi individuali con singoli creditori, senza coinvolgimento del Tribunale. È la forma più riservata e flessibile, indicata quando le tensioni sono concentrate su pochi creditori principali." },

      { type: "h3", text: "Convenzione di moratoria" },
      { type: "p", text: "Si raggiunge un accordo con una pluralità di creditori per una moratoria dei pagamenti per un periodo definito, utile a guadagnare tempo per implementare azioni di risanamento (vendita di asset, ingresso di nuovi soci, ristrutturazione operativa)." },

      { type: "h3", text: "Accordo di ristrutturazione dei debiti" },
      { type: "p", text: "Se l'imprenditore raggiunge l'adesione di almeno il 60% dei creditori, può depositare presso il Tribunale un accordo di ristrutturazione ex artt. 57-64 CCII. L'accordo, una volta omologato, vincola anche i creditori non aderenti per specifiche categorie." },

      { type: "h3", text: "Concordato semplificato" },
      { type: "p", text: "Se le trattative sono fallite ma è emersa una possibilità di liquidazione ordinata, l'imprenditore può presentare un concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII), procedura semplificata rispetto al concordato preventivo." },

      { type: "h3", text: "Procedure concorsuali tradizionali" },
      { type: "p", text: "La composizione negoziata può fungere da fase preparatoria per un concordato preventivo o per la richiesta di una procedura di insolvenza. In questi casi le informazioni raccolte e gli accordi parziali costituiscono base per il successivo strumento." },

      { type: "h2", text: "Quando ha senso attivarla — e quando no", id: "quando-conviene" },

      { type: "h3", text: "È indicata quando" },
      { type: "ul", items: [
        "L'impresa ha ancora valore e prospettive di continuità",
        "I creditori principali sono identificabili e si presta a una trattativa",
        "C'è disponibilità di nuove risorse (soci, finanziatori) condizionate a un riassetto",
        "La situazione non è ancora di insolvenza conclamata",
        "L'imprenditore è disponibile a trasparenza informativa e a riassetti gestionali",
      ]},

      { type: "h3", text: "Non è indicata quando" },
      { type: "ul", items: [
        "L'impresa è in stato di insolvenza irreversibile",
        "Non ci sono prospettive di risanamento documentabili",
        "L'imprenditore non è disponibile a un controllo terzo (l'esperto)",
        "Il quadro è già compromesso da un'esposizione dispersa e senza creditori principali",
        "Sono già pendenti procedure concorsuali",
      ]},

      { type: "h2", text: "Costi della procedura", id: "costi" },
      { type: "p", text: "I costi della composizione negoziata sono regolati da un decreto ministeriale e variano in base alla dimensione dell'impresa e alla complessità. Le voci principali sono:" },
      { type: "ul", items: [
        "Compenso dell'esperto indipendente (variabile)",
        "Eventuali consulenti tecnici dell'imprenditore (commercialista, avvocato)",
        "Spese vive (contributi piattaforma telematica, marche da bollo)",
        "Eventuali oneri per misure protettive (contributo unificato)",
      ]},
      { type: "p", text: "Rispetto a una procedura concorsuale tradizionale, i costi sono significativamente inferiori e la durata media più breve, motivi per cui — quando i presupposti ci sono — la composizione negoziata è spesso lo strumento più efficiente." },

      { type: "h2", text: "Domande frequenti sulla composizione negoziata", id: "faq" },
      { type: "faq", items: [
        {
          q: "Posso attivare la composizione negoziata se la mia impresa è una ditta individuale?",
          a: "Sì. La composizione negoziata è accessibile a tutti gli imprenditori commerciali e agricoli, incluse le ditte individuali e le imprese sotto soglia. La piattaforma e le forme procedurali sono adattate alla diversa dimensione."
        },
        {
          q: "Devo informare i miei dipendenti?",
          a: "La normativa prevede specifici obblighi di informazione e consultazione delle rappresentanze sindacali quando i provvedimenti del piano hanno rilevanti effetti sull'organizzazione del lavoro o sui rapporti di lavoro. Nei casi semplici l'obbligo non scatta automaticamente."
        },
        {
          q: "L'AdER aderisce alla composizione negoziata?",
          a: "L'AdER e gli altri enti pubblici partecipano alle trattative come gli altri creditori. La normativa prevede specifiche disposizioni che agevolano l'adesione del fisco a piani di risanamento credibili (transazione fiscale), nei termini e con i limiti previsti dalla legge."
        },
        {
          q: "Quanto dura la procedura?",
          a: "La durata standard è di sei mesi, prorogabili. Per casi complessi sono ammesse proroghe fino a un massimo di dodici mesi complessivi. La velocità dipende molto dalla disponibilità documentale dell'imprenditore e dalla capacità di dialogo con i creditori."
        },
        {
          q: "Se la composizione negoziata fallisce, ho ancora opzioni?",
          a: "Sì. Il fallimento delle trattative non preclude l'accesso a concordato preventivo, accordo di ristrutturazione, concordato semplificato o, in casi specifici, alla liquidazione giudiziale. L'esperienza raccolta nella composizione negoziata costituisce comunque una base utile."
        },
        {
          q: "I miei concorrenti possono sapere che ho attivato la procedura?",
          a: "La composizione negoziata è riservata e non comporta pubblicità (a differenza del concordato). Solo se vengono richieste misure protettive (sospensione esecuzioni) il fatto diventa pubblico mediante pubblicazione nel Registro delle Imprese."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "La composizione negoziata è uno degli strumenti più innovativi dell'ordinamento italiano in materia di crisi d'impresa. Quando l'azienda è in difficoltà ma c'è ancora valore da salvare, è spesso la scelta ottimale: meno onerosa di una procedura concorsuale, più rapida, riservata, capace di preservare la continuità operativa. La condizione necessaria è una valutazione tecnica seria della concretezza delle prospettive di risanamento: senza questa, lo strumento perde efficacia e va sostituito con percorsi diversi." },
    ],
  },

  // ============ ARTICLE 4 ============
  {
    slug: "pignoramento-stipendio-limiti",
    title: "Pignoramento dello stipendio: limiti, regola del quinto e strumenti di difesa",
    excerpt: "Quanto può essere pignorato dello stipendio? Limiti per crediti ordinari, alimentari e tributari, cumulo di più pignoramenti, opposizione e conversione. Guida completa per chi subisce o teme un pignoramento sul reddito da lavoro.",
    category: "Privati",
    date: "Marzo 2026",
    readTime: "11 min",
    author: "Avv. Armando Rossi",
    cover: "from-destructive to-navy",
    coverImage: ctaHandshake,
    keywords: ["pignoramento stipendio", "limiti pignoramento", "regola del quinto", "art 545 cpc", "opposizione pignoramento", "stipendio pignorabile"],
    intro: "Il pignoramento dello stipendio (o della pensione) è una delle azioni esecutive più diffuse: il creditore, in possesso di un titolo esecutivo, può chiedere al giudice di sottrarre una quota della retribuzione direttamente dalla busta paga, attraverso il datore di lavoro. La legge italiana stabilisce limiti precisi e definisce i casi in cui il pignoramento può essere più o meno ampio. Conoscere queste regole è essenziale sia per difendersi, sia per programmare la propria capacità economica residua.",
    content: [
      { type: "h2", text: "Cos'è il pignoramento dello stipendio", id: "cosa-e" },
      { type: "p", text: "Il pignoramento presso terzi (art. 543 c.p.c.) è la procedura con cui il creditore, tramite ufficiale giudiziario, notifica al debitore e al terzo (il datore di lavoro) l'atto di pignoramento. Da quel momento il datore di lavoro è obbligato a trattenere ogni mese la quota pignorata dello stipendio e a versarla al creditore, secondo le modalità stabilite dal giudice." },
      { type: "p", text: "Il pignoramento può colpire stipendi di lavoratori dipendenti privati, dipendenti pubblici (con specifiche peculiarità procedurali), pensionati e altre indennità periodiche assimilabili. Per il lavoratore autonomo non si parla tecnicamente di pignoramento dello stipendio, ma di altre forme di pignoramento (su conto, su crediti)." },

      { type: "image", src: ctaHandshake, alt: "Confronto tra debitore e creditore", caption: "Il pignoramento è uno strumento esecutivo: agire tempestivamente — anche solo per verificare i presupposti — è spesso la differenza tra subire e gestire." },

      { type: "h2", text: "La regola generale: il quinto pignorabile", id: "regola-quinto" },
      { type: "p", text: "L'art. 545 c.p.c. stabilisce il principio generale: gli stipendi e i salari sono pignorabili nella misura di un quinto (20%). L'80% residuo è impignorabile e rimane nella disponibilità del lavoratore. Questa regola si applica al pignoramento per crediti ordinari (banche, finanziarie, fornitori, eccetera)." },
      { type: "p", text: "La quota viene calcolata sullo stipendio netto, dopo le ritenute fiscali e contributive. Sono escluse dal calcolo le voci accessorie con specifica destinazione (assegni familiari, indennità di trasferta, rimborsi spese)." },

      { type: "h2", text: "Le eccezioni alla regola del quinto", id: "eccezioni" },

      { type: "h3", text: "Crediti alimentari" },
      { type: "p", text: "Per i crediti alimentari (assegno di mantenimento al coniuge separato, ai figli, agli ascendenti) la pignorabilità è maggiore: la quota viene stabilita dal giudice in base alle condizioni economiche complessive, anche oltre il limite del quinto. È la priorità che la legge riconosce alle obbligazioni familiari." },

      { type: "h3", text: "Crediti tributari (AdER)" },
      { type: "p", text: "Per i crediti dell'Agenzia Entrate Riscossione il regime è differente. L'art. 72-ter D.P.R. 602/1973 prevede tre fasce:" },
      { type: "table", headers: ["Stipendio mensile netto", "Quota pignorabile"], rows: [
        ["Fino a 2.500 €", "1/10 (10%)"],
        ["Da 2.500 € a 5.000 €", "1/7 (circa 14,3%)"],
        ["Oltre 5.000 €", "1/5 (20%)"],
      ]},
      { type: "p", text: "Questa progressione mira a tutelare maggiormente i redditi più bassi, riducendo l'impatto della riscossione coattiva." },

      { type: "h3", text: "Cumulo di più pignoramenti" },
      { type: "p", text: "L'art. 545, comma 5, c.p.c. stabilisce un limite cumulativo fondamentale: la somma di tutti i pignoramenti contemporaneamente in essere non può comunque superare la metà dello stipendio. Questo significa che, anche in presenza di crediti di natura diversa (ordinario, alimentare, tributario), il lavoratore deve sempre conservare almeno il 50% del proprio stipendio netto." },

      { type: "note", text: "Il limite del 50% del cumulo è uno dei più ignorati nella prassi. Se ti vengono notificati pignoramenti che, sommati, superano la metà dello stipendio, l'eccedenza è illegittima e si può chiedere l'adeguamento al giudice dell'esecuzione." },

      { type: "h2", text: "Cosa succede in pratica quando arriva il pignoramento", id: "iter-pratico" },

      { type: "h3", text: "1. Atto di precetto" },
      { type: "p", text: "Prima del pignoramento il creditore deve notificare un atto di precetto, che intima al debitore di pagare entro 10 giorni. Il precetto è il preavviso formale: se entro 10 giorni si paga, non si arriva al pignoramento. Trascorso il termine, il creditore può procedere." },

      { type: "h3", text: "2. Notifica dell'atto di pignoramento" },
      { type: "p", text: "L'ufficiale giudiziario notifica sia al debitore sia al datore di lavoro l'atto di pignoramento. Da questo momento il datore di lavoro ha obblighi precisi: trattenere mensilmente la quota dovuta e versarla secondo le indicazioni." },

      { type: "h3", text: "3. Dichiarazione del terzo" },
      { type: "p", text: "Il datore di lavoro (il 'terzo') deve fare una dichiarazione formale al giudice attestando l'esistenza del rapporto di lavoro e l'entità della retribuzione. Da questa dichiarazione discende l'ordinanza di assegnazione che cristallizza il pignoramento." },

      { type: "h3", text: "4. Trattenute mensili" },
      { type: "p", text: "A partire dalla data stabilita dal giudice (in genere immediatamente), ogni mese il datore di lavoro trattiene la quota pignorata e la versa al creditore. Il debitore riceve in busta paga lo stipendio decurtato della quota." },

      { type: "h2", text: "Gli strumenti di difesa", id: "difesa" },

      { type: "h3", text: "Opposizione all'esecuzione (art. 615 c.p.c.)" },
      { type: "p", text: "L'opposizione all'esecuzione si propone quando si contesta il diritto del creditore a procedere all'esecuzione: ad esempio perché il debito è prescritto, è già stato pagato, il titolo è inefficace. L'opposizione si presenta al giudice dell'esecuzione entro termini specifici." },

      { type: "h3", text: "Opposizione agli atti esecutivi (art. 617 c.p.c.)" },
      { type: "p", text: "L'opposizione agli atti esecutivi riguarda invece i vizi formali degli atti della procedura: nullità di notifica, errori procedurali, irregolarità nella dichiarazione del terzo. Termini più brevi (20 giorni dall'atto contestato)." },

      { type: "h3", text: "Conversione del pignoramento (art. 495 c.p.c.)" },
      { type: "p", text: "Il debitore può chiedere al giudice di sostituire il pignoramento con il pagamento di una somma determinata. È utile quando si dispone di liquidità sufficiente: si chiude la procedura pagando una somma comprensiva di capitale, interessi e spese, e si libera lo stipendio dal pignoramento." },

      { type: "h3", text: "Riduzione del pignoramento (art. 495-bis c.p.c.)" },
      { type: "p", text: "In specifiche condizioni il giudice può ridurre la quota pignorata, ad esempio se la trattenuta originaria mette il debitore in condizioni di assoluta indigenza. È una via residuale, soggetta a valutazione discrezionale." },

      { type: "h3", text: "Procedura di sovraindebitamento" },
      { type: "p", text: "Quando il pignoramento dello stipendio è solo uno dei sintomi di una situazione debitoria più ampia, la procedura di sovraindebitamento (piano del consumatore, liquidazione controllata) può essere la soluzione più efficace. Il deposito della procedura determina, secondo i casi, la sospensione delle azioni esecutive in corso, incluso il pignoramento dello stipendio." },

      { type: "h2", text: "Casi particolari", id: "casi-particolari" },

      { type: "h3", text: "Pensioni" },
      { type: "p", text: "Le pensioni sono soggette a regole specifiche: una quota corrispondente all'importo minimo della pensione sociale è impignorabile in via assoluta; sull'eccedenza si applica la regola del quinto (o le percentuali AdER se il creditore è il fisco). Il principio è preservare la sussistenza minima del pensionato." },

      { type: "h3", text: "Dipendenti pubblici" },
      { type: "p", text: "Per i dipendenti pubblici la procedura ha alcune peculiarità: i pignoramenti vengono gestiti dall'ente di appartenenza (MEF, Ministero dell'Interno, eccetera) e seguono iter amministrativi specifici. I limiti sostanziali sono però gli stessi." },

      { type: "h3", text: "Lavoro autonomo e partite IVA" },
      { type: "p", text: "Per i lavoratori autonomi e i titolari di partita IVA non si pignora lo 'stipendio' (che non esiste), ma si possono pignorare i crediti verso i clienti, i conti correnti, i beni mobili. Le regole sono diverse e generalmente meno protettive." },

      { type: "h2", text: "Strategia: cosa fare prima che il pignoramento si consolidi", id: "strategia" },
      { type: "p", text: "Quando arriva l'atto di precetto, ci sono pochi giorni per agire. In questa fase si può:" },
      { type: "ol", items: [
        "Verificare la legittimità del titolo esecutivo (titolo prescritto? notificato correttamente?)",
        "Trattare con il creditore una transazione (saldo a stralcio, dilazione)",
        "Valutare la conversione del pignoramento se si dispone di liquidità",
        "Valutare l'attivazione di una procedura di sovraindebitamento se la situazione complessiva è grave",
        "Predisporre eventuali opposizioni se sussistono motivi tecnici",
      ]},
      { type: "p", text: "Una volta che il pignoramento è in essere e le trattenute mensili sono partite, le opzioni si riducono ma non scompaiono: opposizioni, conversioni, procedure di sovraindebitamento restano percorribili." },

      { type: "h2", text: "Domande frequenti sul pignoramento dello stipendio", id: "faq" },
      { type: "faq", items: [
        {
          q: "Possono pignorarmi più del quinto se ho più creditori?",
          a: "No, salvo si tratti di crediti alimentari. La somma di tutti i pignoramenti non può comunque superare la metà dello stipendio (art. 545, c. 5, c.p.c.). Se ti hanno pignorato oltre questo limite, l'eccedenza è illegittima e va fatta correggere."
        },
        {
          q: "Cosa succede se cambio lavoro durante il pignoramento?",
          a: "Il pignoramento è legato al rapporto di lavoro specifico. Se cambi datore di lavoro, il vecchio pignoramento non si trasferisce automaticamente. Il creditore dovrà notificare un nuovo pignoramento al nuovo datore di lavoro, una volta scoperto."
        },
        {
          q: "Il pignoramento dello stipendio incide sulla tredicesima?",
          a: "Sì. La tredicesima rientra nella retribuzione pignorabile, ma anche su di essa si applica il limite del quinto e tutti gli altri vincoli. La quota viene trattenuta dal datore di lavoro al momento dell'erogazione."
        },
        {
          q: "Posso aprire un conto corrente che non venga pignorato?",
          a: "Il conto corrente è un'aggressione separata dallo stipendio. Per le somme depositate in conto valgono regole diverse: l'art. 545 c.p.c. tutela la somma corrispondente al triplo dell'assegno sociale per le somme accreditate prima del pignoramento del conto. È una materia tecnica che merita valutazione caso per caso."
        },
        {
          q: "Quanto dura il pignoramento dello stipendio?",
          a: "Dura fino al pagamento integrale del debito, comprensivo di interessi e spese. Se lo stipendio è basso e il debito alto, la procedura può durare anni. Per questo è importante valutare alternative (transazione, sovraindebitamento) prima di rassegnarsi al pignoramento prolungato."
        },
        {
          q: "Se faccio una procedura di sovraindebitamento, il pignoramento si ferma?",
          a: "Il deposito di una procedura di sovraindebitamento può determinare, secondo i casi e le decisioni del giudice, la sospensione delle procedure esecutive in corso. L'effetto non è automatico ma è uno dei vantaggi tipici della procedura: liberare il debitore dalle aggressioni in corso per consentire la costruzione di un piano sostenibile."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "Il pignoramento dello stipendio è un evento serio ma non un punto di non ritorno. La legge prevede limiti precisi e strumenti di difesa: opposizioni, conversione, riduzione, procedure di sovraindebitamento. La scelta dello strumento dipende dalla singola situazione e dal quadro complessivo. Affrontare il problema subito, con consulenza tecnica adeguata, è quasi sempre meglio che subire passivamente le trattenute mensili." },
    ],
  },

  // ============ ARTICLE 5 ============
  {
    slug: "rottamazione-quater",
    title: "Rottamazione quater: come funziona, a chi conviene e quali alternative valutare",
    excerpt: "La rottamazione quater consente di pagare le cartelle senza sanzioni né interessi di mora. Vantaggi reali, limiti operativi, casi in cui conviene davvero e alternative percorribili (ricorso, prescrizione, sovraindebitamento).",
    category: "Tributario",
    date: "Febbraio 2026",
    readTime: "13 min",
    author: "Studio Tutela Debito",
    cover: "from-gold-dark to-gold",
    coverImage: abstractHopeBg,
    keywords: ["rottamazione quater", "definizione agevolata cartelle", "rottamazione cartelle", "condono cartelle", "AdER pagamento agevolato"],
    intro: "La cosiddetta 'rottamazione quater' è l'ultima delle definizioni agevolate dei carichi affidati all'Agente della Riscossione introdotte nel nostro ordinamento. Consente, in sostanza, di pagare il solo capitale dovuto senza sanzioni e senza interessi di mora, con una rateizzazione su più anni. È uno strumento potenzialmente vantaggioso, ma non automaticamente conveniente: aderire significa rinunciare al contenzioso, e in molti casi una verifica preventiva della legittimità delle cartelle può rivelare alternative più favorevoli.",
    content: [
      { type: "h2", text: "Cos'è la rottamazione quater", id: "cosa-e" },
      { type: "p", text: "La rottamazione (definizione agevolata) è uno strumento che, periodicamente, il legislatore introduce per consentire al contribuente di estinguere le cartelle esattoriali a condizioni di favore. L'ultima edizione, la cosiddetta 'rottamazione quater', è stata introdotta dalla Legge 197/2022 (Legge di Bilancio 2023) e successive modifiche, con riferimento ai carichi affidati ad AdER in specifici periodi." },
      { type: "p", text: "L'idea di fondo è semplice: il contribuente paga il solo capitale (le imposte, i contributi, le sanzioni amministrative originarie escluse le maggiorazioni) senza alcun importo a titolo di sanzioni tributarie e senza interessi di mora. In cambio, l'AdER rinuncia a queste maggiorazioni e concede una rateizzazione." },

      { type: "image", src: abstractHopeBg, alt: "Pianificazione finanziaria con la rottamazione delle cartelle", caption: "La rottamazione permette di pianificare l'estinzione del debito tributario con tempi e modalità definiti, ma va valutata in rapporto alle alternative." },

      { type: "h2", text: "Cosa si paga e cosa non si paga con la rottamazione", id: "cosa-si-paga" },

      { type: "h3", text: "Importi inclusi (si pagano)" },
      { type: "ul", items: [
        "Le somme dovute a titolo di capitale (imposte, contributi)",
        "Le somme dovute a titolo di rimborso spese per procedure esecutive",
        "I diritti di notifica della cartella",
        "Aggio in misura ridotta (in alcune edizioni completamente eliminato)",
      ]},

      { type: "h3", text: "Importi esclusi (non si pagano)" },
      { type: "ul", items: [
        "Le sanzioni amministrativo-tributarie (es. sanzioni per omesso versamento)",
        "Gli interessi di mora",
        "Le maggiorazioni",
        "Gli interessi per ritardata iscrizione a ruolo (in alcune edizioni)",
      ]},

      { type: "note", text: "Le sanzioni per violazioni del Codice della Strada e per altre violazioni amministrative non tributarie seguono regole specifiche: la rottamazione ne riduce gli interessi e le maggiorazioni, ma non elimina la sanzione principale. Per queste cartelle il vantaggio della rottamazione è più contenuto rispetto a un debito puramente tributario." },

      { type: "h2", text: "Chi può aderire", id: "soggetti" },
      { type: "p", text: "Possono aderire alla rottamazione tutti i contribuenti — privati cittadini, professionisti, imprese — che hanno carichi affidati all'AdER nei periodi previsti dalla normativa. Non rilevano la natura dell'imposta (erariale, locale, contributiva) né la situazione patrimoniale del contribuente: basta avere cartelle iscritte a ruolo nel periodo di riferimento." },

      { type: "h2", text: "I vantaggi reali della rottamazione", id: "vantaggi" },

      { type: "h3", text: "Risparmio economico" },
      { type: "p", text: "Su una cartella di vecchia data, le sanzioni e gli interessi possono rappresentare il 30-50% dell'importo totale. La rottamazione elimina questa porzione, generando un risparmio che, in valore assoluto, può essere significativo. Per una cartella di 80.000€ originari con sanzioni e interessi accumulati per 30.000€, il risparmio sarebbe di 30.000€." },

      { type: "h3", text: "Rateizzazione lunga" },
      { type: "p", text: "La rottamazione prevede tipicamente rate annuali con scadenze precise distribuite su più anni. Questo permette di pianificare il pagamento, specialmente per cifre rilevanti." },

      { type: "h3", text: "Sospensione delle procedure esecutive" },
      { type: "p", text: "Dalla data di adesione alla rottamazione le procedure esecutive in corso (pignoramenti, fermi, ipoteche) vengono sospese, e quelle non ancora avviate non vengono attivate, fintanto che il pagamento delle rate viene rispettato." },

      { type: "h3", text: "Semplicità procedurale" },
      { type: "p", text: "L'adesione si fa attraverso una domanda telematica all'AdER. Non servono atti complessi, non c'è giudizio, non c'è discrezionalità: se rientri nei requisiti e fai la domanda nei termini, ottieni la definizione." },

      { type: "h2", text: "I limiti e i rischi", id: "limiti" },

      { type: "h3", text: "Rinuncia al contenzioso" },
      { type: "p", text: "L'adesione comporta la rinuncia al ricorso eventualmente pendente o alla possibilità di proporlo. Significa che se la cartella era impugnabile per vizi (notifica irregolare, prescrizione, errori sostanziali), aderendo rinunci alla possibilità di farla annullare integralmente. Stai pagando — anche se in misura ridotta — un debito che il giudice avrebbe potuto cancellare." },

      { type: "h3", text: "Decadenza per mancato pagamento" },
      { type: "p", text: "Il mancato pagamento, anche solo parziale, di una rata determina la decadenza dal beneficio. La cartella torna a 'rivivere' nella sua interezza originaria, con sanzioni e interessi pieni, e l'AdER può riprendere le procedure esecutive. La pianificazione finanziaria della rottamazione va fatta con realismo." },

      { type: "h3", text: "Non si possono dilazionare ulteriormente le rate" },
      { type: "p", text: "Le scadenze della rottamazione sono fisse: non c'è possibilità di chiedere una rateizzazione delle rate. Se non si è certi della sostenibilità, è meglio non aderire (o aderire solo per le cartelle che si è in grado di pagare nei termini)." },

      { type: "h2", text: "Quando la rottamazione conviene davvero", id: "quando-conviene" },
      { type: "p", text: "L'adesione è conveniente quando:" },
      { type: "ul", items: [
        "Le cartelle hanno sanzioni e interessi che pesano in modo significativo sull'importo totale",
        "Le cartelle sono tecnicamente legittime (nessun vizio formale o prescrizione)",
        "Il contribuente dispone di liquidità per sostenere il piano di pagamento",
        "L'importo a debito è gestibile in rapporto alle capacità del contribuente",
        "Non sono pendenti ricorsi con ragionevoli probabilità di accoglimento",
      ]},

      { type: "h2", text: "Quando la rottamazione NON conviene", id: "quando-non-conviene" },
      { type: "p", text: "L'adesione è da evitare o quanto meno da rivalutare quando:" },
      { type: "ul", items: [
        "Le cartelle hanno vizi formali (notifica irregolare, prescrizione decorsa)",
        "Le cartelle sono prevalentemente capitale, con poche sanzioni e interessi (vantaggio marginale)",
        "Il contribuente non ha capacità di sostenere le rate (rischio decadenza)",
        "Il quadro debitorio complessivo richiede una soluzione strutturale (sovraindebitamento)",
        "Sono pendenti ricorsi con buone probabilità di accoglimento",
      ]},

      { type: "h2", text: "Le alternative da valutare prima di aderire", id: "alternative" },

      { type: "h3", text: "Ricorso tributario" },
      { type: "p", text: "Se la cartella è tecnicamente impugnabile, il ricorso può portare all'annullamento integrale, con un beneficio ben superiore a quello della rottamazione. Questa valutazione va fatta entro i 60 giorni dalla notifica della cartella." },

      { type: "h3", text: "Eccezione di prescrizione" },
      { type: "p", text: "Per cartelle 'vecchie' la prescrizione del credito potrebbe essersi maturata. Se così è, si può richiedere l'annullamento per intervenuta prescrizione, senza pagare nulla. È un controllo che precede sempre l'eventuale adesione alla rottamazione." },

      { type: "h3", text: "Procedura di sovraindebitamento" },
      { type: "p", text: "Se le cartelle si inseriscono in un quadro debitorio complessivamente compromesso (con altri creditori, finanziamenti, pignoramenti in corso), una procedura di sovraindebitamento può portare risultati ben superiori: cancellazione di una quota più ampia dei debiti, non solo delle sanzioni, e un piano di pagamento parametrato alla reale capacità del debitore." },

      { type: "h3", text: "Rateizzazione ordinaria" },
      { type: "p", text: "Se il contribuente ha capacità di pagamento ma vuole dilazionare, la rateizzazione ordinaria AdER (fino a 120 rate in casi specifici) può essere un'alternativa. Non porta lo sconto su sanzioni e interessi, ma offre flessibilità maggiore." },

      { type: "h2", text: "Come si fa la domanda di rottamazione", id: "come-aderire" },
      { type: "p", text: "L'iter di adesione è standardizzato:" },
      { type: "ol", items: [
        "Verifica della situazione debitoria con AdER (estratto di ruolo, situazione carichi)",
        "Calcolo dell'importo dovuto in rottamazione",
        "Selezione delle cartelle che si vogliono includere (è possibile aderire per singole cartelle)",
        "Presentazione della domanda telematica entro i termini previsti dalla normativa",
        "Attesa della comunicazione AdER con l'importo definitivo e il piano di rate",
        "Pagamento della prima rata nei termini",
      ]},
      { type: "p", text: "Una volta presentata la domanda, l'AdER invia una comunicazione con l'importo definitivo e il piano. Il rispetto delle scadenze è essenziale: il mancato pagamento, anche di una singola rata, determina la decadenza." },

      { type: "h2", text: "Domande frequenti sulla rottamazione quater", id: "faq" },
      { type: "faq", items: [
        {
          q: "Posso rottamare solo alcune cartelle?",
          a: "Sì. La rottamazione si applica per singole cartelle: puoi includere alcune e lasciarne fuori altre. Tipicamente conviene includere quelle con maggior peso di sanzioni e interessi e tenere fuori quelle 'vecchie' che potrebbero essere prescritte o quelle tecnicamente impugnabili."
        },
        {
          q: "Cosa succede se ho già una rateizzazione in corso?",
          a: "La rateizzazione ordinaria in corso viene assorbita dalla rottamazione: le somme già pagate vengono scomputate dall'importo definitivo. La nuova rateizzazione della rottamazione sostituisce la precedente."
        },
        {
          q: "Se non riesco a pagare una rata, perdo tutto?",
          a: "Il mancato pagamento di una rata entro i termini determina la decadenza dalla rottamazione. La cartella torna esigibile nella sua interezza originaria (con sanzioni e interessi pieni) e l'AdER può riprendere le procedure esecutive. La normativa prevede limitatissime tolleranze per ritardi minimi."
        },
        {
          q: "La rottamazione cancella anche i debiti previdenziali (INPS)?",
          a: "Sì, i carichi INPS e INAIL affidati ad AdER nei periodi previsti rientrano nella rottamazione. Restano fuori, in linea generale, i contributi obbligatori non ancora iscritti a ruolo e altre voci specifiche escluse dalla normativa."
        },
        {
          q: "Posso aderire alla rottamazione anche se ho già un pignoramento in corso?",
          a: "Sì. L'adesione determina la sospensione del pignoramento. Se rispetti le scadenze del piano di rottamazione, il pignoramento resta sospeso fino alla chiusura. In caso di decadenza, il pignoramento riprende."
        },
        {
          q: "Aderire alla rottamazione mi impedisce di partecipare a procedure pubbliche?",
          a: "Durante l'adesione alla rottamazione la posizione contributiva e fiscale è considerata regolare, e si può richiedere il DURC. Decade tutto in caso di mancato pagamento. È un aspetto rilevante per professionisti e imprese che lavorano con la PA."
        },
      ]},

      { type: "h2", text: "Conclusione: rottamazione sì, ma con valutazione", id: "conclusione" },
      { type: "p", text: "La rottamazione quater è uno strumento utile, ma non automaticamente la scelta migliore. Aderire senza verificare la legittimità delle cartelle può significare pagare debiti che non si sarebbero dovuti pagare. Per questo prima di compilare la domanda di adesione conviene fare una valutazione tecnica: controllo della notifica, della prescrizione, dei termini, della solidità della pretesa. Solo dopo si può decidere se la rottamazione è davvero la scelta più conveniente o se esistono alternative più favorevoli." },
    ],
  },

  // ============ ARTICLE 6 ============
  {
    slug: "piano-consumatore",
    title: "Piano di ristrutturazione dei debiti del consumatore: guida completa al CCII (artt. 67-73)",
    excerpt: "Il piano del consumatore è la procedura di sovraindebitamento riservata ai privati che hanno contratto debiti per finalità personali. Requisiti, contenuto del piano, ruolo dell'OCC, omologazione, effetti sulle azioni esecutive ed esdebitazione finale.",
    category: "Procedure",
    date: "Febbraio 2026",
    readTime: "15 min",
    author: "Avv. Armando Rossi",
    cover: "from-navy-light to-trust",
    coverImage: heroLawyer,
    keywords: ["piano del consumatore", "ristrutturazione debiti consumatore", "art 67 CCII", "sovraindebitamento consumatore", "OCC", "esdebitazione"],
    intro: "Il piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) è una delle procedure di sovraindebitamento più utilizzate dai privati. Si rivolge a chi ha contratto debiti per scopi estranei all'attività professionale o imprenditoriale e si trova in difficoltà a farvi fronte. È uno strumento potente perché non richiede l'approvazione dei creditori: è il giudice che, verificati i presupposti, omologa il piano. Per molte famiglie in difficoltà rappresenta la via più realistica per uscire da una spirale di indebitamento.",
    content: [
      { type: "h2", text: "Cos'è il piano del consumatore", id: "cosa-e" },
      { type: "p", text: "Il piano di ristrutturazione dei debiti del consumatore è una procedura giudiziale di sovraindebitamento prevista dagli artt. 67-73 del Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Permette a una persona fisica che riveste la qualifica di consumatore di proporre un piano di pagamento parziale dei debiti, parametrato alle proprie effettive capacità reddituali e patrimoniali, da sottoporre all'omologazione del Tribunale." },
      { type: "p", text: "L'aspetto qualificante è uno solo: a differenza del concordato preventivo o del concordato minore (che richiedono il voto favorevole dei creditori), il piano del consumatore non viene votato. È il giudice che, esaminata la proposta, ne valuta i presupposti e — se sussistono — la omologa. Questo riduce drasticamente i tempi e l'incertezza." },

      { type: "image", src: heroLawyer, alt: "La bilancia della giustizia, simbolo del piano del consumatore", caption: "Il piano del consumatore è uno strumento giurisdizionale: è il Tribunale a valutare presupposti e meritevolezza, non i creditori." },

      { type: "h2", text: "Chi è il consumatore secondo il CCII", id: "consumatore" },
      { type: "p", text: "Il consumatore, per il CCII, è la persona fisica che ha contratto i debiti per scopi estranei all'attività imprenditoriale, commerciale, artigianale o professionale eventualmente svolta. La nozione è quindi 'soggettiva-funzionale': non basta non essere imprenditore, occorre che i debiti specifici oggetto della procedura siano stati contratti per finalità personali o familiari." },
      { type: "p", text: "Esempi tipici di debiti 'da consumatore':" },
      { type: "ul", items: [
        "Mutui per l'acquisto della prima casa",
        "Finanziamenti per acquisto di beni di consumo (auto, elettrodomestici, arredamento)",
        "Carte di credito revolving",
        "Prestiti personali per spese familiari",
        "Cessione del quinto sullo stipendio o sulla pensione",
        "Bollette e canoni di servizi domestici",
        "Cartelle esattoriali relative a tributi personali (es. TARI, IMU prima casa, bollo auto familiare)",
      ]},

      { type: "h3", text: "Casi particolari: l'ex-imprenditore" },
      { type: "p", text: "Una questione interpretativa rilevante riguarda gli ex-imprenditori. Se i debiti sono stati contratti durante l'attività ma oggi la persona non è più imprenditore, può accedere come consumatore? La giurisprudenza è oscillante: in linea generale, se il debito ha origine imprenditoriale, la procedura applicabile resta il concordato minore o la liquidazione controllata. Per casi misti (parte personale, parte imprenditoriale) la valutazione va fatta sulla composizione effettiva del debito." },

      { type: "h2", text: "I presupposti di accesso", id: "presupposti" },
      { type: "p", text: "Per accedere al piano il consumatore deve trovarsi in stato di sovraindebitamento. La nozione (art. 2, lett. c, CCII) è precisa: situazione di perdurante squilibrio tra le obbligazioni assunte e il patrimonio prontamente liquidabile per farvi fronte, che determina la rilevante difficoltà di adempiere alle proprie obbligazioni o l'incapacità di farlo." },
      { type: "p", text: "Oltre allo stato di sovraindebitamento, occorrono:" },
      { type: "ul", items: [
        "La qualifica di consumatore (i debiti devono essere personali)",
        "La meritevolezza (assenza di colpa grave nel determinare il sovraindebitamento)",
        "L'esattezza delle informazioni fornite all'OCC",
        "La sostenibilità del piano proposto",
        "Il rispetto delle norme sull'erogazione del credito (non aver aggravato il sovraindebitamento con condotte successive)",
      ]},

      { type: "h3", text: "Il giudizio di meritevolezza" },
      { type: "p", text: "La meritevolezza è uno snodo cruciale. Il giudice valuta come si è formato il sovraindebitamento: se per circostanze impreviste (perdita del lavoro, malattia, eventi familiari) o se per colpa del debitore (sproporzionato consumo, accumulo di finanziamenti senza una pianificazione, omissioni). La 'colpa grave' è la soglia oltre la quale l'accesso viene negato." },
      { type: "p", text: "La giurisprudenza ha chiarito che non basta un comportamento 'imprudente' per escludere la meritevolezza: serve una colpa qualificata, qualcosa di più della normale leggerezza nella gestione delle proprie finanze." },

      { type: "h2", text: "Il contenuto del piano", id: "contenuto" },
      { type: "p", text: "Il piano è un documento che propone il pagamento dei creditori in misura parziale, secondo modalità e tempi parametrati alle effettive capacità del consumatore. Può prevedere:" },
      { type: "ul", items: [
        "Pagamento integrale ai creditori privilegiati (entro i limiti della legge)",
        "Pagamento parziale ai creditori chirografari",
        "Suddivisione in classi dei creditori",
        "Dilazione del pagamento fino a un termine massimo (di norma alcuni anni)",
        "Cessione di beni non essenziali",
        "Mantenimento dei beni essenziali (prima casa, beni strumentali)",
      ]},
      { type: "p", text: "Il piano può essere molto vario nel contenuto, purché rispetti due principi: la coerenza con la reale capacità del debitore e la convenienza per i creditori rispetto a un'eventuale liquidazione controllata." },

      { type: "h2", text: "Il ruolo dell'OCC", id: "occ" },
      { type: "p", text: "L'OCC (Organismo di Composizione della Crisi) ha un ruolo centrale. È un soggetto terzo, accreditato, che:" },
      { type: "ul", items: [
        "Assiste il consumatore nella predisposizione del piano",
        "Verifica la veridicità delle informazioni fornite",
        "Ricostruisce la storia del sovraindebitamento (causa, esito di precedenti finanziamenti, condotta del debitore)",
        "Redige la relazione particolareggiata che accompagna il piano",
        "Attesta la fattibilità del piano",
        "Esprime un parere sulla meritevolezza",
      ]},
      { type: "p", text: "La relazione dell'OCC è il documento più importante della procedura. È il filtro che il giudice utilizza per la sua decisione: una relazione completa, coerente, ben argomentata aumenta sensibilmente le probabilità di omologazione. Una relazione carente può portare al rigetto." },

      { type: "h2", text: "L'iter procedurale", id: "iter" },

      { type: "h3", text: "1. Contatto con l'OCC" },
      { type: "p", text: "Il primo passo è il contatto con un OCC accreditato. Spesso si tratta di un OCC presso un Ordine professionale (Avvocati, Dottori Commercialisti) o presso una Camera di Commercio. L'OCC verifica l'inquadramento del caso e avvia la fase preparatoria." },

      { type: "h3", text: "2. Raccolta documentale" },
      { type: "p", text: "Il consumatore deve fornire all'OCC: documenti d'identità, dichiarazioni dei redditi degli ultimi cinque anni, situazione patrimoniale, estratti AdER, contratti di finanziamento, atti di precetto e pignoramento eventualmente notificati, documentazione bancaria. La completezza è essenziale." },

      { type: "h3", text: "3. Redazione del piano e della relazione" },
      { type: "p", text: "L'OCC, sulla base della documentazione, redige il piano (proposta di pagamento) e la relazione particolareggiata. Le due cose sono coordinate: il piano descrive 'cosa si propone', la relazione spiega 'perché è fattibile e perché il consumatore merita l'accesso'." },

      { type: "h3", text: "4. Deposito in Tribunale" },
      { type: "p", text: "Il piano e la relazione vengono depositati presso il Tribunale competente per residenza del consumatore. Il giudice fissa un'udienza e dispone le notifiche ai creditori." },

      { type: "h3", text: "5. Effetti del deposito" },
      { type: "p", text: "Dal momento del deposito, il giudice può disporre la sospensione delle azioni esecutive in corso. Questo è uno degli effetti più significativi: il pignoramento si ferma, i creditori non possono avviare nuove azioni esecutive." },

      { type: "h3", text: "6. Omologazione" },
      { type: "p", text: "Il giudice esamina la proposta, valuta i presupposti (meritevolezza, sostenibilità, completezza) e decide. Se omologa, il piano diventa vincolante: il consumatore deve eseguirlo secondo le modalità approvate; i creditori non possono pretendere oltre quanto previsto dal piano." },

      { type: "h3", text: "7. Esecuzione" },
      { type: "p", text: "Inizia la fase esecutiva: il consumatore paga le rate secondo il piano omologato. L'OCC vigila sull'esecuzione. La durata è quella stabilita dal piano (spesso alcuni anni)." },

      { type: "h3", text: "8. Esdebitazione" },
      { type: "p", text: "Al termine dell'esecuzione, il consumatore ottiene l'esdebitazione: i debiti pregressi non pagati vengono cancellati. È il risultato finale dell'intera procedura." },

      { type: "h2", text: "Gli effetti sulle azioni esecutive", id: "effetti" },
      { type: "p", text: "Uno degli aspetti più rilevanti del piano del consumatore è l'effetto sulle azioni esecutive. Il deposito della procedura, e ancor più l'omologazione, possono determinare:" },
      { type: "ul", items: [
        "Sospensione dei pignoramenti in corso (stipendio, conto, immobile)",
        "Sospensione delle aste immobiliari",
        "Blocco delle nuove azioni esecutive",
        "Sospensione dei termini di prescrizione per i creditori",
      ]},
      { type: "p", text: "Per un consumatore con stipendio pignorato e una procedura in corso di rilascio della casa, l'effetto può essere immediato e tangibile: si torna a percepire la totalità dello stipendio, si guadagna tempo per riorganizzare la propria vita." },

      { type: "h2", text: "Le obiezioni dei creditori", id: "opposizioni" },
      { type: "p", text: "I creditori non votano il piano del consumatore, ma possono presentare opposizioni nel corso del procedimento. Tipicamente eccepiscono:" },
      { type: "ul", items: [
        "Insussistenza dello stato di sovraindebitamento",
        "Carenza di meritevolezza (es. occultamento di redditi, accensione di nuovi debiti)",
        "Sproporzione tra quanto offerto e le effettive capacità",
        "Carenze nella documentazione presentata",
      ]},
      { type: "p", text: "Il giudice valuta le opposizioni nel merito. Se le ritiene fondate, può negare l'omologazione. Per questo la solidità della documentazione e della relazione OCC è essenziale." },

      { type: "h2", text: "Domande frequenti sul piano del consumatore", id: "faq" },
      { type: "faq", items: [
        {
          q: "Posso accedere al piano se ho debiti misti (personali e imprenditoriali)?",
          a: "Dipende dalla prevalenza. Se i debiti imprenditoriali sono marginali rispetto a quelli personali, alcuni Tribunali consentono comunque l'accesso. Se i debiti imprenditoriali sono significativi, è probabilmente più appropriato il concordato minore. La valutazione caso per caso è essenziale."
        },
        {
          q: "Posso mantenere la casa di proprietà?",
          a: "Il piano del consumatore consente di mantenere beni essenziali, inclusa la prima casa, se il piano è strutturato in modo da garantirne il pagamento ai creditori privilegiati (banca ipotecaria) secondo le previsioni di legge. Soluzioni concrete dipendono dalla situazione specifica."
        },
        {
          q: "Quanto dura la procedura dall'inizio all'esdebitazione?",
          a: "Dalla raccolta documentale all'omologazione di norma servono alcuni mesi (variabili in base al Tribunale). L'esecuzione successiva può durare diversi anni, secondo le previsioni del piano. L'esdebitazione interviene al termine dell'esecuzione."
        },
        {
          q: "Se non riesco a pagare le rate del piano, cosa succede?",
          a: "Il mancato pagamento può portare alla revoca dell'omologazione: il piano viene risolto e i debiti tornano esigibili. Per questo la sostenibilità del piano è un presupposto chiave: meglio un piano realistico che un piano ambizioso ma destinato a fallire."
        },
        {
          q: "Posso accedere se ho già fatto una procedura in passato?",
          a: "La normativa pone limiti alla reiterazione delle procedure di sovraindebitamento. Bisogna verificare se rientri tra i casi consentiti. Ad esempio, l'esdebitazione del debitore incapiente può essere chiesta una sola volta nella vita."
        },
        {
          q: "Cosa cambia se ho creditori pubblici (AdER, INPS)?",
          a: "I creditori pubblici partecipano alla procedura come gli altri creditori. Per loro vige una specifica disciplina (transazione fiscale e contributiva) che richiede particolari adempimenti. La maggior parte dei piani del consumatore include anche debiti tributari."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "Il piano del consumatore è uno degli strumenti più potenti messi a disposizione dei privati in difficoltà finanziaria. Permette di pagare in misura ridotta, secondo le proprie effettive capacità, senza dipendere dal voto dei creditori. Non è uno strumento automatico: richiede meritevolezza, documentazione completa, sostenibilità del piano. Quando i presupposti ci sono, è spesso la via più efficace per uscire da una situazione di sovraindebitamento personale e tornare a una gestione finanziaria sana." },
    ],
  },

  // ============ ARTICLE 7 — BANKS ============
  {
    slug: "debiti-banche-finanziarie",
    title: "Debiti con banche e finanziarie: cosa fare quando non si riesce più a pagare",
    excerpt: "Mutuo, prestito personale, fido revocato, finanziamento auto, carta revolving: i debiti bancari hanno regole e tempi specifici. Cosa succede in caso di insolvenza, segnalazione in Centrale Rischi, cessione a NPL, strumenti di difesa e di rinegoziazione.",
    category: "Privati",
    date: "Maggio 2026",
    readTime: "15 min",
    author: "Avv. Armando Rossi",
    cover: "from-trust to-navy",
    coverImage: authorityLegal,
    keywords: ["debiti banche", "prestiti banche", "mutuo non pagato", "fido revocato", "centrale dei rischi", "NPL", "cessione del credito", "saldo a stralcio banche", "debiti finanziarie"],
    intro: "I debiti con banche e finanziarie hanno caratteristiche peculiari rispetto agli altri tipi di esposizione: spesso sono garantiti da pegni, ipoteche o cessioni; sono registrati in archivi creditizi che incidono sulla reputazione finanziaria; possono essere ceduti a società di recupero specializzate (NPL); danno luogo a procedure esecutive con tempistiche tipiche. Capire come funziona il mondo dei debiti bancari è essenziale per affrontarli con consapevolezza, sia in fase di difficoltà sia nel momento in cui si decide la strategia di uscita.",
    content: [
      { type: "h2", text: "Tipologie di debiti bancari e finanziari", id: "tipologie" },
      { type: "p", text: "Sotto la generica espressione 'debiti con banche e finanziarie' si raccolgono prodotti molto diversi tra loro, ognuno con caratteristiche legali, contabili e procedurali specifiche. Capire con quale prodotto si ha a che fare è il primo passo per gestire una situazione di difficoltà." },

      { type: "h3", text: "Mutuo ipotecario" },
      { type: "p", text: "Finanziamento di durata lunga, garantito da ipoteca su un immobile (tipicamente la prima casa). In caso di insolvenza, la banca può attivare la procedura esecutiva immobiliare con l'obiettivo di vendere all'asta l'immobile. È il debito 'più pesante' in termini di conseguenze patrimoniali." },

      { type: "h3", text: "Prestito personale" },
      { type: "p", text: "Finanziamento chirografario (senza garanzie reali) per importi medio-bassi e durata fino a circa 10 anni. In caso di insolvenza la banca può procedere per via giudiziale (decreto ingiuntivo, pignoramento), ma senza poter aggredire direttamente uno specifico bene." },

      { type: "h3", text: "Cessione del quinto" },
      { type: "p", text: "Forma di finanziamento garantita dalla trattenuta diretta in busta paga (fino al quinto dello stipendio, o della pensione). È un debito gestito in modo automatico tramite il datore di lavoro: in caso di cessazione del rapporto di lavoro, le criticità emergono rapidamente." },

      { type: "h3", text: "Fido di conto corrente" },
      { type: "p", text: "Apertura di credito che consente di andare 'in rosso' fino a un certo limite. Il fido può essere revocato dalla banca con un preavviso, dopo il quale il saldo passivo va estinto immediatamente. La revoca improvvisa è una delle situazioni più traumatiche per chi gestisce una piccola impresa." },

      { type: "h3", text: "Carte di credito e revolving" },
      { type: "p", text: "Strumenti di pagamento con possibilità di rateizzare le spese. Le carte revolving in particolare presentano TAEG molto elevati: l'accumulo di debiti su revolving è una delle cause più frequenti di sovraindebitamento dei privati." },

      { type: "h3", text: "Finanziamento finalizzato" },
      { type: "p", text: "Prestito legato all'acquisto di un bene specifico (auto, elettrodomestici, mobili). Spesso il bene rimane di proprietà del finanziatore fino al pagamento integrale (patto di riservato dominio). In caso di insolvenza, il bene può essere ripreso." },

      { type: "image", src: authorityLegal, alt: "Documentazione contrattuale di un finanziamento bancario", caption: "Ogni tipologia di debito bancario ha regole proprie: l'analisi del contratto è il punto di partenza per individuare strumenti di tutela e margini di rinegoziazione." },

      { type: "h2", text: "Cosa succede quando si saltano le rate", id: "salti-rate" },
      { type: "p", text: "Le conseguenze dipendono dal tipo di rapporto e dalla durata del ritardo. Esiste però uno schema ricorrente." },

      { type: "h3", text: "1. Solleciti informali (primi 30-60 giorni)" },
      { type: "p", text: "La banca o la finanziaria attiva un primo contatto di sollecito: telefonate, SMS, lettere. In questa fase l'obiettivo è raccogliere il pagamento mancato senza ricorrere a strumenti formali." },

      { type: "h3", text: "2. Diffida formale (dopo 60-90 giorni)" },
      { type: "p", text: "Si passa a comunicazioni scritte formali, talvolta a mezzo raccomandata o PEC, con intimazione di pagamento e preavviso di azioni successive. È il momento in cui le conseguenze iniziano a diventare tangibili." },

      { type: "h3", text: "3. Decadenza dal beneficio del termine (oltre 6 mesi di ritardo)" },
      { type: "p", text: "Per i mutui e i finanziamenti a rate, l'accumulo di un certo numero di rate non pagate (di norma 7 nei mutui, 4 in alcuni finanziamenti) può far decadere il debitore dal beneficio del termine. In pratica: tutto il debito diventa immediatamente esigibile, non solo le rate scadute." },

      { type: "h3", text: "4. Revoca del fido" },
      { type: "p", text: "Per i conti correnti affidati, la banca può comunicare la revoca del fido. Il saldo a debito va estinto entro pochi giorni dalla comunicazione, spesso un mese." },

      { type: "h3", text: "5. Segnalazione in Centrale Rischi (CRIF, Centrale dei Rischi BdI)" },
      { type: "p", text: "La banca segnala il ritardo o l'insolvenza nei sistemi di informazioni creditizie. La segnalazione resta per diversi anni e rende difficile ottenere nuovi finanziamenti." },

      { type: "h3", text: "6. Decreto ingiuntivo" },
      { type: "p", text: "Le banche possono ottenere un decreto ingiuntivo provvisoriamente esecutivo molto rapidamente, presentando estratti del proprio libro mastro (artt. 633 e ss. c.p.c.). Il decreto è notificato al debitore, che ha 40 giorni per fare opposizione." },

      { type: "h3", text: "7. Esecuzione" },
      { type: "p", text: "Trascorso il termine senza pagamento né opposizione, la banca può procedere all'esecuzione: pignoramento dello stipendio, del conto, dei beni mobili, espropriazione immobiliare nei casi di mutuo." },

      { type: "h2", text: "La segnalazione in Centrale dei Rischi e nei SIC", id: "centrale-rischi" },
      { type: "p", text: "Esistono diversi archivi che registrano la posizione creditizia di un soggetto:" },
      { type: "ul", items: [
        "Centrale dei Rischi della Banca d'Italia: archivio pubblico per esposizioni significative (sopra una soglia minima)",
        "CRIF: il SIC privato più diffuso in Italia",
        "Experian, CTC: altri SIC privati operanti nel mercato italiano",
      ]},
      { type: "p", text: "La segnalazione di un'insolvenza in questi archivi ha effetti reputazionali rilevanti: le banche consultano gli archivi prima di concedere nuovi finanziamenti, e una posizione 'a sofferenza' rende quasi impossibile ottenere credito. La permanenza in archivio è di alcuni anni e segue regole precise stabilite dalle norme di settore e dai Codici deontologici." },

      { type: "note", text: "Le segnalazioni non veritiere o non rispettose delle norme procedurali (mancato preavviso di segnalazione, errori nelle date, errata classificazione) possono essere oggetto di reclamo all'ente segnalante e — in caso di mancato accoglimento — di ricorso all'Arbitro Bancario Finanziario (ABF) o al giudice ordinario per cancellazione." },

      { type: "h2", text: "La cessione del credito a società di recupero (NPL)", id: "npl" },
      { type: "p", text: "Le banche, soprattutto negli ultimi anni, hanno ceduto ingenti portafogli di crediti deteriorati (NPL, Non-Performing Loans) a società specializzate nel recupero. Quando un debito viene ceduto:" },
      { type: "ul", items: [
        "Il nuovo creditore (cessionario) subentra in tutti i diritti del cedente",
        "Il debitore riceve una comunicazione di cessione con i dati del nuovo creditore",
        "Le condizioni sostanziali del rapporto restano quelle originarie",
        "I tempi di prescrizione decorrono dalla data di esigibilità, non dalla cessione",
      ]},
      { type: "p", text: "Una caratteristica rilevante: le società che acquistano NPL hanno spesso pagato il credito a un valore molto inferiore al nominale (il 5-15% non è raro). Questo apre uno spazio di negoziazione: un saldo a stralcio al 20-30% del nominale può essere economicamente conveniente per la società cessionaria, e accettato." },

      { type: "h2", text: "Strumenti di gestione del debito bancario", id: "strumenti" },

      { type: "h3", text: "Rinegoziazione" },
      { type: "p", text: "Per i mutui esistono strumenti normativi specifici (es. surroga, sospensione delle rate ex L. 244/2007 in particolari casi). Per altri finanziamenti la rinegoziazione è oggetto di trattativa: dilazione delle rate, allungamento della durata, riduzione del tasso. Le banche sono talvolta disponibili quando la difficoltà è temporanea e c'è capacità di ripartenza." },

      { type: "h3", text: "Sospensione delle rate" },
      { type: "p", text: "Esistono moratorie di settore e iniziative bancarie specifiche che consentono la sospensione temporanea delle rate. È uno strumento utile in fase iniziale di difficoltà, ma di per sé non risolve il problema: posticipa il pagamento, non lo riduce." },

      { type: "h3", text: "Saldo e stralcio" },
      { type: "p", text: "Si tratta di proporre al creditore il pagamento di una somma inferiore al dovuto a chiusura definitiva del rapporto. È particolarmente percorribile con i crediti ceduti a NPL, meno con le banche dirette. La trattativa richiede competenze specifiche e una rappresentazione realistica delle proprie capacità." },

      { type: "h3", text: "Opposizione a decreto ingiuntivo" },
      { type: "p", text: "Quando la banca ottiene un decreto ingiuntivo, il debitore può fare opposizione entro 40 giorni dalla notifica (art. 645 c.p.c.). L'opposizione si propone se esistono motivi sostanziali (es. errato calcolo degli interessi, anatocismo, usura, mancanza di prova del credito)." },

      { type: "h3", text: "Anatocismo e usura" },
      { type: "p", text: "Sono temi specifici e tecnici. L'anatocismo (calcolo di interessi su interessi) è disciplinato dall'art. 120 TUB e la sua corretta applicazione è spesso oggetto di contestazione, soprattutto per i conti correnti bancari. L'usura (tasso effettivo che supera la soglia di legge ex L. 108/1996) può portare alla nullità della clausola di interessi e a sostanziali rimborsi. Sono materie che richiedono perizia tecnica (CTU) per essere accertate." },

      { type: "h3", text: "Procedura di sovraindebitamento" },
      { type: "p", text: "Quando i debiti bancari si sommano ad altri debiti e la situazione complessiva è insostenibile, una procedura di sovraindebitamento (piano del consumatore, liquidazione controllata, concordato minore) può consentire di ristrutturare anche i debiti bancari, includendo banche e finanziarie nel piano." },

      { type: "h2", text: "Casi tipici e cosa fare", id: "casi-tipici" },
      { type: "table", headers: ["Situazione", "Strumento da valutare"], rows: [
        ["Difficoltà temporanea sul mutuo", "Sospensione rate / rinegoziazione"],
        ["Fido revocato improvvisamente", "Trattativa con banca / sovraindebitamento"],
        ["Decreto ingiuntivo notificato", "Opposizione entro 40 giorni"],
        ["Credito ceduto a società di recupero", "Saldo a stralcio"],
        ["Più finanziamenti accumulati", "Sovraindebitamento (piano del consumatore)"],
        ["Segnalazione errata in CRIF", "Reclamo + ricorso ABF"],
        ["Sospetto di anatocismo/usura su conto", "Perizia tecnica + azione giudiziale"],
      ]},

      { type: "h2", text: "Domande frequenti sui debiti bancari", id: "faq" },
      { type: "faq", items: [
        {
          q: "Mi hanno revocato il fido: cosa posso fare nei prossimi giorni?",
          a: "Prima cosa: verifica il preavviso di revoca (è regolare? è motivato? rispetta i tempi contrattuali?). Seconda cosa: contatta la banca e prova a negoziare un piano di rientro. Terza cosa: valuta la posizione complessiva. Se il fido era essenziale per la gestione di un'impresa, la revoca può portare rapidamente a una situazione di crisi: in quel caso conviene attivarsi subito su strumenti più strutturati (composizione negoziata)."
        },
        {
          q: "Possono prendermi la casa se non pago il mutuo?",
          a: "Sì, attraverso la procedura esecutiva immobiliare. Il processo è però lungo (mediamente 3-5 anni) e ammette diverse soluzioni intermedie: rinegoziazione, vendita assistita, sospensione delle rate, accesso a procedure di sovraindebitamento. Agire tempestivamente è essenziale: prima si interviene, più opzioni restano aperte."
        },
        {
          q: "Una società di recupero mi chiama: cosa devo fare?",
          a: "Verifica che la cessione sia regolarmente comunicata e che la società abbia titolo (richiedi i documenti). Non riconoscere il debito senza prima averlo verificato (anche per non interrompere eventuale prescrizione). Valuta una proposta di saldo a stralcio: spesso le società NPL accettano percentuali molto inferiori al nominale."
        },
        {
          q: "Quanto tempo dura una segnalazione in CRIF?",
          a: "Dipende dal tipo: 12 mesi dalla regolarizzazione per ritardi di una o due rate; 24 mesi per ritardi successivi alla regolarizzazione; 36 mesi dalla scadenza contrattuale per insolvenze gravi. I dati negativi non possono restare a tempo indefinito: ogni segnalazione ha una durata massima."
        },
        {
          q: "Mi conviene fare opposizione a un decreto ingiuntivo bancario?",
          a: "Conviene se ci sono motivi sostanziali: errori di calcolo, anatocismo, usura, mancanza di prova del credito, difetto di legittimazione del nuovo cessionario. Senza motivi solidi, l'opposizione è costosa (contributo unificato, onorari) e ad alto rischio. Una valutazione tecnica preventiva è imprescindibile."
        },
        {
          q: "Posso includere i debiti bancari in una procedura di sovraindebitamento?",
          a: "Sì. I debiti verso banche e finanziarie sono uno dei tipi di esposizione più comunemente inseriti nei piani di sovraindebitamento (piano del consumatore, concordato minore, liquidazione controllata). Le banche partecipano alla procedura come gli altri creditori chirografari (o privilegiati, se hanno garanzie)."
        },
        {
          q: "Esiste un tetto al tasso di interesse che la banca può applicare?",
          a: "Sì. La L. 108/1996 stabilisce il tasso soglia di usura, rilevato trimestralmente dalla Banca d'Italia per ogni categoria di operazioni. Un tasso che supera la soglia rende la clausola sugli interessi nulla. La verifica richiede tipicamente una perizia tecnica."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "I debiti con banche e finanziarie sono spesso il punto più visibile di una situazione di difficoltà finanziaria. Hanno tempistiche rapide, conseguenze patrimoniali concrete (esecuzioni, segnalazioni, asta della casa) e regole specifiche. Per questo richiedono un'attenzione particolare: capire il prodotto, leggere il contratto, valutare i tempi delle azioni esecutive, scegliere lo strumento giusto. La gamma di soluzioni — rinegoziazione, saldo a stralcio, opposizione, sovraindebitamento — è ampia ma va calibrata sulla singola posizione." },
    ],
  },

  // ============ ARTICLE 8 — SUPPLIERS ============
  {
    slug: "debiti-fornitori",
    title: "Debiti commerciali con fornitori: gestire la difficoltà e tutelare l'attività",
    excerpt: "Decreti ingiuntivi, ritenute di pagamento, ricorso alla composizione negoziata, transazione stragiudiziale, gestione del contenzioso. Tutto quello che un imprenditore deve sapere quando i debiti verso fornitori diventano insostenibili.",
    category: "Imprese",
    date: "Maggio 2026",
    readTime: "14 min",
    author: "Avv. Armando Rossi",
    cover: "from-gold-dark to-navy",
    coverImage: handshakeTrust,
    keywords: ["debiti fornitori", "debiti commerciali", "decreto ingiuntivo fornitore", "transazione stragiudiziale", "saldo a stralcio fornitori", "composizione negoziata fornitori"],
    intro: "I debiti commerciali con i fornitori sono spesso il primo segnale visibile di una difficoltà aziendale. A differenza dei debiti bancari, gestiti in modo strutturato e con archivi creditizi formali, i debiti verso fornitori si manifestano per via diretta: solleciti, telefonate, mancate consegne, blocco delle forniture. Conoscere come gestirli — dal punto di vista legale, contabile e relazionale — è essenziale per evitare che una difficoltà temporanea si trasformi in una crisi conclamata.",
    content: [
      { type: "h2", text: "Caratteristiche del debito commerciale", id: "caratteristiche" },
      { type: "p", text: "Il debito verso un fornitore è il debito che un'impresa contrae per beni o servizi ricevuti e non ancora pagati. Si origina da una fattura, è regolato da condizioni di pagamento (30/60/90 giorni, con esposizione cambiaria o RID, talvolta con anticipi), e ha una natura prevalentemente chirografaria: non è garantito da pegni o ipoteche, salvo specifici accordi." },
      { type: "p", text: "Rispetto al debito bancario, ha alcune peculiarità:" },
      { type: "ul", items: [
        "È spesso più 'negoziabile': il fornitore ha interesse a mantenere il rapporto commerciale",
        "Ha tempi di formalizzazione più rapidi (la fattura è già titolo provvisorio in molti casi)",
        "Può essere ceduto a società di factoring o di recupero",
        "Comporta rapidamente effetti operativi (blocco forniture, rifiuto di nuove commesse)",
      ]},

      { type: "image", src: handshakeTrust, alt: "Trattativa commerciale tra imprenditore e fornitore", caption: "Il rapporto con il fornitore è anche relazionale: una trattativa trasparente è spesso più efficace di un confronto giudiziale, specie quando esiste storia commerciale consolidata." },

      { type: "h2", text: "Il ciclo del recupero crediti commerciale", id: "ciclo-recupero" },
      { type: "p", text: "Quando una fattura non viene pagata, il fornitore segue tipicamente un percorso strutturato di recupero. Conoscerlo serve a capire dove ci si trova e qual è il prossimo passo." },

      { type: "h3", text: "1. Sollecito interno (primi 30 giorni dalla scadenza)" },
      { type: "p", text: "L'ufficio amministrativo del fornitore invia uno o più solleciti: email, telefonata, fax. È una fase a basso costo e a basso impatto, ma è anche la fase in cui è più facile mantenere il rapporto." },

      { type: "h3", text: "2. Diffida formale (30-60 giorni)" },
      { type: "p", text: "Se i solleciti non funzionano, il fornitore passa a una comunicazione formale (PEC, raccomandata): è la 'messa in mora', che produce effetti giuridici (decorrenza degli interessi di mora ex D.lgs. 231/2002 nei rapporti B2B)." },

      { type: "h3", text: "3. Affidamento a società di recupero o studio legale" },
      { type: "p", text: "Per fatture significative, il fornitore può affidare il recupero a uno studio legale o a una società specializzata. Il tono delle comunicazioni si fa più formale e i tempi accelerano." },

      { type: "h3", text: "4. Decreto ingiuntivo" },
      { type: "p", text: "Se non si arriva al pagamento, il fornitore presenta ricorso per decreto ingiuntivo. Le fatture, accompagnate da documentazione (DDT, contratti, conferme d'ordine), costituiscono prova scritta sufficiente per ottenere il decreto, spesso provvisoriamente esecutivo." },

      { type: "h3", text: "5. Esecuzione" },
      { type: "p", text: "Decorso il termine per opposizione (40 giorni), il fornitore procede con il pignoramento: del conto corrente, dei beni aziendali, dei crediti verso terzi. In caso di pignoramento dei crediti, il fornitore può ottenere direttamente le somme dovute all'impresa dai suoi clienti." },

      { type: "h2", text: "Il decreto ingiuntivo: anatomia di un atto chiave", id: "decreto-ingiuntivo" },
      { type: "p", text: "Il decreto ingiuntivo (artt. 633 e ss. c.p.c.) è uno degli strumenti più usati nei rapporti B2B. Funziona così:" },
      { type: "ol", items: [
        "Il fornitore presenta ricorso al Tribunale o al Giudice di Pace allegando le fatture e la prova dell'obbligazione",
        "Il giudice esamina inaudita altera parte (senza sentire la controparte) e, se i documenti sono sufficienti, emette il decreto",
        "Il decreto può essere immediatamente esecutivo o no, a seconda dei casi",
        "Il decreto viene notificato al debitore",
        "Il debitore ha 40 giorni per fare opposizione",
        "Se nessuna opposizione, il decreto diventa definitivo e si procede all'esecuzione",
      ]},

      { type: "h3", text: "L'opposizione al decreto ingiuntivo (art. 645 c.p.c.)" },
      { type: "p", text: "L'opposizione si propone con atto di citazione entro 40 giorni dalla notifica del decreto. È un vero e proprio giudizio di merito (anche se ha origine in un decreto). Si può opporre se:" },
      { type: "ul", items: [
        "La fornitura non è mai avvenuta o non è conforme",
        "Esistono compensazioni con crediti del debitore verso il fornitore",
        "Le condizioni contrattuali sono diverse da quelle azionate",
        "C'è una prescrizione del credito",
        "Esistono vizi formali della procedura",
      ]},

      { type: "note", text: "L'opposizione al decreto ingiuntivo è spesso oggetto di valutazioni 'tattiche': anche senza motivi solidi, alcune imprese fanno opposizione per guadagnare tempo. È una strategia ad alto rischio: in caso di rigetto, le spese di giudizio si sommano al debito originario." },

      { type: "h2", text: "Strumenti di gestione del debito verso fornitori", id: "strumenti-gestione" },

      { type: "h3", text: "Dilazione concordata" },
      { type: "p", text: "Lo strumento più semplice e più efficace nei rapporti consolidati: si propone al fornitore una dilazione del pagamento (60-90-120 giorni in più), eventualmente con un piano di rientro a rate. Il fornitore, se ha interesse a mantenere il cliente, spesso accetta." },

      { type: "h3", text: "Pagamento parziale + dilazione" },
      { type: "p", text: "Variante della dilazione: si versa subito una quota (es. 30-50% del dovuto) e si dilaziona il resto. Questo dimostra al fornitore una capacità di pagamento e una volontà di collaborare, riducendo il rischio di azioni legali immediate." },

      { type: "h3", text: "Saldo a stralcio" },
      { type: "p", text: "Si propone il pagamento di una somma inferiore al dovuto a chiusura definitiva del rapporto. Va formalizzato per iscritto, con quietanza liberatoria a evitare contestazioni successive. È più frequente quando il credito è stato ceduto a società di recupero." },

      { type: "h3", text: "Pagamento tramite cessione di crediti" },
      { type: "p", text: "L'impresa può cedere al fornitore crediti che vanta verso propri clienti (factoring inverso, cessione del credito ex art. 1260 c.c.). Soluzione utile quando ci sono crediti incagliati che il fornitore può recuperare più efficacemente." },

      { type: "h3", text: "Compensazione di partite" },
      { type: "p", text: "Se l'impresa è anche fornitore del proprio fornitore (rapporti incrociati), si può compensare partite (art. 1241 c.c.). È spesso possibile in filiere industriali strutturate." },

      { type: "h3", text: "Composizione negoziata" },
      { type: "p", text: "Quando i debiti verso fornitori sono parte di una difficoltà aziendale più ampia, lo strumento di riferimento è la composizione negoziata della crisi (artt. 12-25 CCII). L'esperto indipendente coordina le trattative con i fornitori e gli altri creditori, eventualmente con misure protettive che congelano le azioni esecutive." },

      { type: "h3", text: "Concordato preventivo" },
      { type: "p", text: "In casi più gravi, il concordato preventivo (artt. 84-120 CCII) permette di proporre ai creditori, fornitori inclusi, un piano di pagamento parziale, mantenendo o liquidando l'attività. Richiede l'omologazione del Tribunale e il voto della maggioranza dei creditori." },

      { type: "h2", text: "L'impatto sulla continuità aziendale", id: "continuita" },
      { type: "p", text: "I debiti verso fornitori, se mal gestiti, possono compromettere rapidamente la continuità aziendale. Le ragioni sono concrete:" },
      { type: "ul", items: [
        "Blocco delle forniture in arrivo (il fornitore non spedisce più senza pagamento anticipato)",
        "Effetto domino: voci che corrono nella filiera, altri fornitori che chiedono garanzie",
        "Difficoltà a ottenere nuovi affidamenti bancari (i bilanci mostrano l'esposizione)",
        "Decreti ingiuntivi e pignoramenti del conto corrente che bloccano l'operatività quotidiana",
        "Tensioni con i dipendenti per stipendi in ritardo",
      ]},
      { type: "p", text: "Per questo la gestione del debito fornitori non è solo una questione legale o contabile: è una questione di strategia aziendale complessiva. Anche pochi giorni di immobilismo possono trasformare una difficoltà gestibile in una crisi conclamata." },

      { type: "h2", text: "Quando attivarsi: i segnali da non ignorare", id: "segnali" },
      { type: "p", text: "Ci sono segnali che indicano che la situazione richiede un intervento strutturato, non più semplici dilazioni:" },
      { type: "ul", items: [
        "Un numero crescente di solleciti contemporanei da più fornitori",
        "Più decreti ingiuntivi notificati in poche settimane",
        "Pignoramenti del conto corrente bancario",
        "Revoca o riduzione degli affidamenti bancari",
        "Difficoltà a pagare gli stipendi puntualmente",
        "Ritardi sui pagamenti tributari e contributivi che si accumulano",
      ]},
      { type: "p", text: "In presenza di questi segnali, l'opzione 'aspettare' è quasi sempre peggiorativa. Gli strumenti del CCII (composizione negoziata in primis) sono pensati proprio per intervenire in questa fase, prima che la situazione diventi irreversibile." },

      { type: "h2", text: "Tabella riassuntiva: situazione e strumento", id: "matrice" },
      { type: "table", headers: ["Situazione", "Strumento da valutare"], rows: [
        ["Singola fattura in ritardo, rapporto consolidato", "Dilazione informale"],
        ["Più fatture, capacità di pagamento ridotta", "Piano di rientro scritto"],
        ["Decreto ingiuntivo notificato, motivi di contestazione", "Opposizione (entro 40gg)"],
        ["Decreto ingiuntivo senza motivi di contestazione", "Trattativa per dilazione / saldo a stralcio"],
        ["Crisi che coinvolge più creditori (banche, fisco, fornitori)", "Composizione negoziata"],
        ["Crisi conclamata, valore aziendale residuo", "Concordato preventivo / accordi di ristrutturazione"],
        ["Crisi irreversibile, fine attività", "Liquidazione giudiziale (ove applicabile)"],
      ]},

      { type: "h2", text: "Domande frequenti sui debiti commerciali", id: "faq" },
      { type: "faq", items: [
        {
          q: "Il fornitore può bloccare le consegne se non pago?",
          a: "Sì, può sospendere le forniture (eccezione di inadempimento ex art. 1460 c.c.) se l'inadempimento è significativo. Per i contratti continuativi o di durata, gli effetti vanno valutati caso per caso. Una comunicazione tempestiva al fornitore prima del blocco può evitare interruzioni operative."
        },
        {
          q: "Quando si prescrivono i debiti commerciali?",
          a: "La prescrizione ordinaria è di 10 anni (art. 2946 c.c.). Per alcune categorie esistono prescrizioni più brevi: 5 anni per indennità di fine rapporto, prestazioni periodiche; alcune tipologie di forniture (es. vendita) restano a 10 anni. Gli atti interruttivi (diffide, decreti) azzerano il termine."
        },
        {
          q: "Posso compensare un mio credito verso il fornitore?",
          a: "Sì, se sussistono i presupposti della compensazione (art. 1241 c.c.): crediti omogenei (denaro vs denaro), liquidi (importo certo), esigibili (scaduti). La compensazione si oppone anche giudizialmente. È utile in caso di rapporti incrociati ricorrenti."
        },
        {
          q: "Se ricevo un decreto ingiuntivo, devo pagare subito?",
          a: "Se il decreto è provvisoriamente esecutivo, sì: l'esecuzione può partire dopo la notifica. Se non lo è, l'esecuzione decorre dopo i 40 giorni utili per opposizione. In ogni caso, l'opposizione (se ne sussistono i motivi) sospende l'efficacia esecutiva nei casi previsti dalla legge."
        },
        {
          q: "Posso includere i debiti verso fornitori in una composizione negoziata?",
          a: "Sì, e in molti casi sono parte centrale della trattativa. La composizione negoziata permette di negoziare con i fornitori sulla base di un piano industriale credibile, eventualmente con misure protettive che sospendono le azioni esecutive in corso."
        },
        {
          q: "Cosa rischio se ignoro un decreto ingiuntivo?",
          a: "Decorsi i 40 giorni senza opposizione, il decreto diventa definitivo e il fornitore può procedere all'esecuzione. Si trovano spesso, in pratica: pignoramento del conto corrente bancario aziendale, pignoramento dei crediti verso clienti, pignoramento di beni mobili in azienda. L'ignorare il decreto è la scelta peggiore."
        },
        {
          q: "Conviene cedere crediti per pagare un fornitore?",
          a: "Può convenire, soprattutto se ci sono crediti incagliati che il fornitore — magari più strutturato — può recuperare meglio. La cessione va formalizzata e notificata al debitore ceduto. Va valutata l'eventuale incidenza fiscale e contabile."
        },
      ]},

      { type: "h2", text: "Conclusione", id: "conclusione" },
      { type: "p", text: "I debiti verso fornitori sono spesso il termometro più sensibile di una difficoltà aziendale. Si manifestano prima dei debiti bancari, sono più 'visibili' nella vita operativa quotidiana, hanno effetti che si propagano rapidamente nella filiera. Affrontarli con metodo — distinguendo tra difficoltà temporanee e crisi più strutturali, scegliendo lo strumento giusto per ogni situazione, evitando l'inerzia — è uno dei compiti più importanti dell'imprenditore in fase di tensione finanziaria. Quando il quadro diventa complesso, gli strumenti del CCII (composizione negoziata in primis) offrono un percorso strutturato per gestire i debiti verso fornitori insieme a quelli verso banche e fisco, in un'unica trattativa coordinata." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getRelated = (slug: string, limit = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, limit);
