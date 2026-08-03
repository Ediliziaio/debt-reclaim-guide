import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "piano-consumatore",
  title: "Piano di ristrutturazione dei debiti del consumatore: guida completa al CCII (artt. 67-73)",
  excerpt: "Il piano del consumatore è la procedura di sovraindebitamento riservata ai privati che hanno contratto debiti per finalità personali. Requisiti, contenuto del piano, ruolo dell'OCC, omologazione, effetti sulle azioni esecutive ed esdebitazione finale.",
  category: "Procedure",
  date: "Febbraio 2026",
  readTime: "15 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy-light to-trust",
  coverImage: "/covers/piano-consumatore.webp",
  keywords: ["piano del consumatore", "ristrutturazione debiti consumatore", "art 67 CCII", "sovraindebitamento consumatore", "OCC", "esdebitazione"],
  intro: "Il piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII) è una delle procedure di sovraindebitamento più utilizzate dai privati. Si rivolge a chi ha contratto debiti per scopi estranei all'attività professionale o imprenditoriale e si trova in difficoltà a farvi fronte. È uno strumento potente perché non richiede l'approvazione dei creditori: è il giudice che, verificati i presupposti, omologa il piano. Per molte famiglie in difficoltà rappresenta la via più realistica per uscire da una spirale di indebitamento.",
};

export const article: Article = {
  ...meta,
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
  }
