import type { Article } from "../articles";
import authorityLegal from "@/assets/authority-legal.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";

export const article: Article = {
  slug: "occ-organismo-composizione-crisi",
  title: "OCC: il ruolo dell'Organismo di Composizione della Crisi nelle procedure di sovraindebitamento",
  excerpt:
    "L'Organismo di Composizione della Crisi (OCC) è il presidio tecnico delle procedure di sovraindebitamento. Guida ad art. 27 CCII, DM 202/2014, gestore, attestazione, costi e scelta.",
  category: "Procedure",
  date: "Maggio 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: authorityLegal,
  keywords: [
    "OCC",
    "organismo composizione crisi",
    "gestore crisi",
    "professionista sovraindebitamento",
    "art 27 CCII",
  ],
  intro:
    "L'Organismo di Composizione della Crisi, comunemente abbreviato in OCC, è il soggetto tecnico-istituzionale che il Codice della Crisi d'Impresa e dell'Insolvenza pone al centro delle procedure di sovraindebitamento dedicate al consumatore, al professionista e al piccolo imprenditore non fallibile. Senza l'intervento dell'OCC, gli strumenti di ristrutturazione del debito previsti dal CCII non possono concretamente attivarsi: l'OCC raccoglie la documentazione, attesta la fattibilità, dialoga con il giudice. Conoscerne struttura, funzioni e costi è il primo passo per chi valuta un percorso di esdebitazione.",
  content: [
    { type: "h2", text: "Cos'è l'Organismo di Composizione della Crisi", id: "cos-e-occ" },
    {
      type: "p",
      text: "L'Organismo di Composizione della Crisi è un ente terzo e qualificato, iscritto in un apposito registro tenuto presso il Ministero della Giustizia, che ha il compito di assistere il debitore civile (consumatore o piccolo imprenditore) nell'accesso alle procedure di sovraindebitamento. È, in altre parole, il tramite tecnico tra il debitore in difficoltà, i creditori e il Tribunale. La sua funzione non è quella di un consulente di parte, bensì quella di un soggetto neutrale che attesta in modo professionale e documentato la situazione del debitore, la fattibilità del piano proposto, la regolarità della procedura.",
    },
    {
      type: "p",
      text: "Il modello di OCC nasce con la Legge n. 3 del 2012 — la cosiddetta legge sul sovraindebitamento — ed è stato profondamente rivisto dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019), oggi pienamente operativo. L'attuale art. 27 CCII e il successivo art. 65 CCII delineano in maniera organica la funzione, mentre il DM 24 settembre 2014 n. 202 detta il regolamento attuativo, ancora oggi punto di riferimento per requisiti di iscrizione, organizzazione interna, compensi.",
    },
    {
      type: "p",
      text: "La natura terza dell'OCC è il tratto fondamentale: la legge richiede indipendenza, terzietà, assenza di conflitti di interesse con il debitore e con i creditori. È un assetto che ricorda da vicino quello del curatore fallimentare, pur in un quadro procedurale più snello e orientato alla composizione bonaria piuttosto che alla liquidazione coattiva.",
    },
    {
      type: "image",
      src: authorityLegal,
      alt: "Aula di tribunale italiana con tomi giuridici",
      caption: "L'OCC opera all'interno di un quadro normativo definito dal CCII e dal DM 202/2014.",
    },

    { type: "h2", text: "La base normativa: art. 27 CCII e DM 202/2014", id: "base-normativa" },
    {
      type: "p",
      text: "L'art. 27 del Codice della Crisi d'Impresa e dell'Insolvenza individua espressamente gli organismi di composizione della crisi tra i soggetti competenti a svolgere le funzioni di gestione delle procedure di sovraindebitamento. La norma rinvia, per la disciplina di dettaglio, al regolamento ministeriale: il DM 24 settembre 2014 n. 202, emanato in attuazione dell'originaria L. 3/2012 e ancora oggi vigente in quanto compatibile con il nuovo Codice.",
    },
    {
      type: "p",
      text: "L'art. 65 CCII chiarisce che le procedure di ristrutturazione dei debiti del consumatore, il concordato minore e la liquidazione controllata si svolgono con l'assistenza obbligatoria dell'OCC, salvo le ipotesi in cui il giudice nomina un professionista in possesso dei requisiti di cui all'art. 358 CCII (curatore, commissario, liquidatore). In ogni caso, la figura tecnica che redige la relazione, attesta la fattibilità e segue la procedura nella sua evoluzione è esattamente quella che la prassi continua a chiamare gestore della crisi.",
    },
    {
      type: "p",
      text: "Il DM 202/2014 detta i requisiti minimi per l'iscrizione al registro: dotazione organizzativa, presenza di gestori qualificati (avvocati, dottori commercialisti, notai con specifica formazione), polizza assicurativa, sede operativa, regolamento interno. Sono regole pensate per garantire qualità e omogeneità del servizio su tutto il territorio nazionale.",
    },
    {
      type: "note",
      text: "Anche dopo l'entrata in vigore del CCII, il DM 202/2014 resta il riferimento per il funzionamento concreto degli OCC, in attesa che venga adottato un nuovo regolamento aggiornato. Nelle more, i giudici applicano la disciplina vigente integrandola con i principi del CCII e con la prassi consolidata dei Tribunali.",
    },

    { type: "h2", text: "Le tipologie di OCC: ordini, Camere di Commercio, Comuni", id: "tipologie-occ" },
    {
      type: "p",
      text: "Il legislatore ha previsto una pluralità di soggetti legittimati a costituire un OCC, scegliendo una soluzione articolata che garantisce capillarità territoriale e specializzazione tecnica. Conoscere le tipologie aiuta il debitore — o il professionista che lo assiste — a orientarsi verso la struttura più adatta alle proprie esigenze.",
    },

    { type: "h3", text: "OCC presso gli ordini professionali" },
    {
      type: "p",
      text: "Gli ordini professionali degli avvocati, dei dottori commercialisti e degli esperti contabili, e dei notai possono costituire un proprio OCC, anche in forma associata tra ordini diversi. Sono storicamente le strutture più diffuse: nascono dentro l'ordine professionale e operano con personale formato in ambito giuridico e contabile. Il gestore designato è quasi sempre un iscritto all'ordine che ha completato uno specifico percorso formativo in materia di sovraindebitamento.",
    },

    { type: "h3", text: "OCC presso le Camere di Commercio" },
    {
      type: "p",
      text: "Le Camere di Commercio, Industria, Artigianato e Agricoltura possono istituire OCC. La logica è quella della prossimità al tessuto economico locale: l'OCC camerale è particolarmente adatto a piccoli imprenditori, artigiani e professionisti, in coerenza con la storica funzione di servizio della Camera verso le imprese del territorio.",
    },

    { type: "h3", text: "OCC presso i Comuni e le Unioni di Comuni" },
    {
      type: "p",
      text: "Anche i Comuni, in forma singola o associata, possono costituire un OCC. È una soluzione meno diffusa ma significativa nei centri minori, dove l'OCC comunale assicura accessibilità geografica e prossimità ai cittadini, soprattutto consumatori, che vivono situazioni di difficoltà economica.",
    },

    {
      type: "table",
      headers: ["Tipologia OCC", "Soggetto istitutore", "Punti di forza", "Tipico utente"],
      rows: [
        [
          "OCC presso ordini professionali",
          "Ordine avvocati, ODCEC, notarile",
          "Forte specializzazione tecnico-giuridica",
          "Consumatori, ex-imprenditori",
        ],
        [
          "OCC camerale",
          "Camera di Commercio",
          "Prossimità al tessuto produttivo, esperienza imprese",
          "Piccoli imprenditori, artigiani",
        ],
        [
          "OCC comunale",
          "Comune o Unione di Comuni",
          "Accessibilità territoriale, attenzione sociale",
          "Consumatori in centri minori",
        ],
        [
          "OCC misti / associati",
          "Più ordini o enti in convenzione",
          "Massa critica e copertura territoriale",
          "Casi complessi multi-territoriali",
        ],
        [
          "Professionista nominato dal giudice",
          "Tribunale (art. 358 CCII)",
          "Esperienza maturata in procedure concorsuali",
          "Casi in cui manca OCC competente",
        ],
      ],
    },

    { type: "h2", text: "Il gestore della crisi: chi è e cosa fa", id: "gestore-crisi" },
    {
      type: "p",
      text: "All'interno dell'OCC opera concretamente la figura del gestore della crisi, ovvero la persona fisica iscritta nell'apposito elenco e cui viene assegnato il singolo incarico. Il gestore è un professionista — tipicamente avvocato, commercialista o notaio — che ha completato un percorso formativo specifico (in genere un corso di almeno 200 ore) e che ha maturato esperienza nelle procedure concorsuali o di gestione della crisi d'impresa.",
    },
    {
      type: "p",
      text: "Il gestore deve possedere requisiti di onorabilità, indipendenza e professionalità. Non può accettare un incarico nei confronti di un debitore con il quale, o con la cui famiglia, abbia avuto rapporti professionali significativi nei due anni precedenti. È vincolato a un codice di condotta e risponde personalmente del proprio operato, con copertura assicurativa obbligatoria.",
    },

    { type: "h3", text: "Le funzioni operative del gestore" },
    {
      type: "ul",
      items: [
        "Ricevere la domanda del debitore e verificarne la completezza documentale",
        "Ricostruire la situazione patrimoniale, reddituale e debitoria del debitore",
        "Identificare i creditori, quantificare i crediti, verificare titoli e priorità",
        "Analizzare le cause del sovraindebitamento e valutare la condotta del debitore",
        "Redigere la relazione particolareggiata da depositare in Tribunale",
        "Attestare la fattibilità del piano proposto (consumatore, concordato minore)",
        "Curare le comunicazioni ai creditori e gestire eventuali osservazioni",
        "Coordinarsi con il giudice e con l'eventuale liquidatore",
        "Vigilare sull'esecuzione del piano o sull'evoluzione della liquidazione",
      ],
    },

    { type: "h2", text: "L'attestazione di fattibilità: cuore tecnico della procedura", id: "attestazione" },
    {
      type: "p",
      text: "Tra le funzioni dell'OCC e del gestore, l'attestazione di fattibilità è probabilmente quella più delicata. Quando il debitore propone un piano di ristrutturazione del debito (piano del consumatore) o un concordato minore (per il piccolo imprenditore), il gestore deve attestare che il piano sia concretamente realizzabile: che le risorse promesse esistano, che i flussi previsti siano sostenibili, che la durata sia compatibile con la vita del debitore e con i tempi di realizzo.",
    },
    {
      type: "p",
      text: "L'attestazione è un atto tecnico-professionale che impegna la responsabilità del gestore. Se l'attestazione è gravemente errata o reticente, può comportare conseguenze sul piano civile (responsabilità professionale, danno verso i creditori), disciplinare (presso l'ordine di appartenenza) e in casi limite anche penale (false attestazioni in procedura). Per questo motivo la fase di analisi documentale è particolarmente accurata e richiede tempo.",
    },
    {
      type: "p",
      text: "Anche nella liquidazione controllata e nell'esdebitazione del debitore incapiente (artt. 282-283 CCII), pur non essendoci un piano in senso stretto, il gestore svolge una funzione attestativa: certifica lo stato di sovraindebitamento, la consistenza del patrimonio, la condotta del debitore. È sulla base di questa attestazione che il giudice decide.",
    },

    { type: "h2", text: "La relazione particolareggiata", id: "relazione" },
    {
      type: "p",
      text: "Il documento centrale prodotto dall'OCC è la relazione particolareggiata, prevista in modo espresso dagli artt. 67, 76 e 269 CCII per le diverse procedure. Si tratta di un elaborato strutturato che accompagna la domanda al Tribunale e ne costituisce il sostegno tecnico. Senza una relazione completa e ben argomentata, il giudice non può valutare nel merito né concedere il beneficio richiesto.",
    },

    { type: "h3", text: "Contenuti tipici della relazione" },
    {
      type: "ul",
      items: [
        "Anagrafica completa del debitore e della sua famiglia",
        "Storia del sovraindebitamento: cause, eventi scatenanti, evoluzione",
        "Quadro patrimoniale dettagliato (immobili, mobili, partecipazioni, conti)",
        "Quadro reddituale degli ultimi anni con proiezioni future",
        "Elenco analitico dei creditori e dei rispettivi crediti",
        "Atti di esecuzione in corso e procedure pendenti",
        "Valutazione della meritevolezza del debitore",
        "Descrizione del piano proposto o della liquidazione prospettata",
        "Attestazione di fattibilità e di convenienza per i creditori",
        "Documentazione allegata (estratti conto, dichiarazioni redditi, atti)",
      ],
    },

    {
      type: "note",
      text: "La relazione particolareggiata non è un atto di parte: è una valutazione tecnica indipendente. Il debitore non può pretendere che vengano omessi elementi sfavorevoli, né può imporre conclusioni. Se il gestore ravvisa profili di non meritevolezza o di non fattibilità, deve dirlo. È una garanzia per i creditori e per la tenuta complessiva del sistema.",
    },

    { type: "h2", text: "Rapporti dell'OCC con il Tribunale", id: "rapporti-tribunale" },
    {
      type: "p",
      text: "Il rapporto tra OCC e Tribunale è centrale per il buon funzionamento della procedura. L'OCC è un ausiliario del giudice nel senso che la sua attività tecnica supporta la decisione giurisdizionale, pur restando OCC e giudice soggetti distinti con funzioni distinte. La relazione viene depositata, il giudice la esamina, può chiedere chiarimenti o integrazioni, può convocare il gestore in udienza.",
    },
    {
      type: "p",
      text: "Durante la procedura, il gestore mantiene un dialogo costante con il giudice: invia aggiornamenti, segnala criticità sopravvenute, propone modifiche al piano in corso di esecuzione, attesta gli stati di avanzamento. Nell'ipotesi di liquidazione controllata, il liquidatore (che spesso coincide con il gestore o è da questi affiancato) riferisce periodicamente sul realizzo dei beni e sulla distribuzione delle somme.",
    },
    {
      type: "p",
      text: "Il Tribunale competente è, di regola, quello del luogo in cui il debitore ha la residenza, il domicilio o la sede principale degli affari. È una competenza territoriale rigorosa: rivolgersi a un Tribunale non competente espone a inammissibilità della domanda, con perdita di tempo e di risorse.",
    },

    { type: "h2", text: "I costi dell'OCC: criteri e parametri", id: "costi" },
    {
      type: "p",
      text: "Il compenso dell'OCC è disciplinato dal DM 24 settembre 2014 n. 202, che fissa criteri e parametri tarati sull'entità del passivo, sul valore dell'attivo eventualmente disponibile e sulla complessità del caso. Il compenso non è quindi negoziabile in modo arbitrario: è ancorato a un sistema di parametri pubblicato e prevedibile.",
    },

    { type: "h3", text: "Le componenti del compenso" },
    {
      type: "ul",
      items: [
        "Compenso base per l'attività di gestione (variabile in base al valore della procedura)",
        "Rimborso delle spese vive sostenute (cancelleria, notifiche, pubblicazioni)",
        "Eventuale compenso per attività ulteriori autorizzate dal giudice",
        "Oneri previdenziali e fiscali sul compenso del professionista",
      ],
    },

    {
      type: "p",
      text: "Il compenso viene liquidato dal giudice con apposito decreto, di norma al termine della procedura o per acconti durante il suo svolgimento. Nel caso di liquidazione controllata, il compenso viene soddisfatto in prededuzione sull'attivo realizzato, prima della distribuzione ai creditori. Nel caso di piano del consumatore o concordato minore, il piano stesso prevede la modalità di pagamento dei compensi della procedura.",
    },

    {
      type: "table",
      headers: ["Valore passivo", "Compenso base orientativo", "Note"],
      rows: [
        ["Fino a 50.000 €", "1.500 - 3.000 €", "Casi semplici, debitore consumatore"],
        ["50.000 - 150.000 €", "3.000 - 6.000 €", "Complessità media, più creditori"],
        ["150.000 - 500.000 €", "6.000 - 12.000 €", "Procedura articolata, eventuali beni"],
        ["500.000 - 1.000.000 €", "12.000 - 20.000 €", "Tipico piccolo imprenditore non fallibile"],
        ["Oltre 1.000.000 €", "Soggetto a valutazione caso per caso", "Massima complessità tecnica"],
      ],
    },

    {
      type: "note",
      text: "Le cifre indicate sono puramente orientative e non costituiscono tariffario ufficiale. Il compenso effettivo dipende dai parametri DM 202/2014 in vigore al momento del conferimento dell'incarico, dalla complessità del caso e dalla valutazione del giudice. È buona prassi richiedere all'OCC un preventivo scritto prima dell'avvio della procedura.",
    },

    { type: "h2", text: "Come scegliere l'OCC: criteri pratici", id: "scelta" },
    {
      type: "p",
      text: "Il debitore — o, più realisticamente, il professionista che lo assiste — può scegliere a quale OCC rivolgersi tra quelli iscritti al registro ministeriale e competenti per il territorio. Non esiste un obbligo di rivolgersi all'OCC più vicino: la scelta è libera, ma deve tener conto di alcuni fattori pratici.",
    },

    { type: "h3", text: "Criteri da considerare" },
    {
      type: "ol",
      items: [
        "Verificare l'iscrizione al registro tenuto presso il Ministero della Giustizia",
        "Valutare la competenza territoriale e la prossimità al Tribunale che giudicherà",
        "Esaminare l'esperienza maturata in casi analoghi (consumatore vs imprenditore)",
        "Considerare i tempi medi di lavorazione dichiarati o stimati",
        "Richiedere informazioni sui costi orientativi e sulle modalità di pagamento",
        "Verificare la disponibilità di un primo incontro conoscitivo gratuito o a costo contenuto",
        "Valutare la qualità del rapporto e della comunicazione con il gestore designato",
      ],
    },

    {
      type: "p",
      text: "Un buon rapporto di fiducia con il gestore è essenziale. La procedura di sovraindebitamento richiede al debitore di consegnare tutta la propria documentazione personale e familiare, di raccontare i propri errori e le proprie difficoltà, di seguire scrupolosamente le indicazioni tecniche. Senza un dialogo aperto, il rischio di lacune documentali e di errori formali aumenta.",
    },

    { type: "h2", text: "OCC e ruolo dell'avvocato di parte", id: "occ-e-avvocato" },
    {
      type: "p",
      text: "Un punto frequente di domande riguarda il rapporto tra OCC e legale di fiducia del debitore. L'OCC è un soggetto terzo: non difende il debitore, attesta. Il debitore può — e in molti casi deve — affiancare alla figura del gestore un proprio avvocato che curi gli aspetti strategici, processuali e di difesa, soprattutto in presenza di pignoramenti in corso, decreti ingiuntivi, contenzioso parallelo.",
    },
    {
      type: "p",
      text: "L'avvocato di parte interagisce con l'OCC fornendo documentazione, redigendo eventuali memorie tecniche, partecipando alle udienze, gestendo i rapporti con i singoli creditori. La collaborazione tra avvocato e gestore, nel rispetto dei rispettivi ruoli, è uno dei fattori chiave del successo della procedura.",
    },

    {
      type: "image",
      src: handshakeTrust,
      alt: "Stretta di mano tra professionisti",
      caption: "Il rapporto fiduciario tra debitore, avvocato e gestore OCC è alla base della riuscita della procedura.",
    },

    { type: "h2", text: "Casi pratici tipici di intervento OCC", id: "casi-pratici" },
    {
      type: "p",
      text: "Vediamo, in forma schematica, alcuni profili tipici di soggetti per cui l'intervento dell'OCC è risultato risolutivo. Sono esempi descrittivi, utili per inquadrare il senso pratico dell'istituto.",
    },

    { type: "h3", text: "Caso 1: il consumatore sovraindebitato" },
    {
      type: "p",
      text: "Lavoratore dipendente con stipendio modesto, accumulati negli anni 5 finanziamenti personali e una scopertura di carta revolving per oltre 60.000 euro complessivi. Eventi familiari (separazione, spese mediche) hanno reso impossibile sostenere le rate. L'OCC riceve la richiesta, ricostruisce la posizione, attesta la meritevolezza (debiti contratti per cause non riconducibili a frode), redige la relazione e supporta il piano del consumatore con un pagamento parziale rateizzato su quattro anni.",
    },

    { type: "h3", text: "Caso 2: l'ex-imprenditore" },
    {
      type: "p",
      text: "Titolare di una ditta individuale chiusa dopo anni di difficoltà, con debiti residui verso fornitori, banche e Agenzia Entrate Riscossione per circa 350.000 euro. Nessun patrimonio aggredibile, pensione di reversibilità modesta. L'OCC accerta lo stato di sovraindebitamento, certifica l'assenza di patrimonio e propone al Tribunale l'esdebitazione del debitore incapiente ex art. 283 CCII.",
    },

    { type: "h3", text: "Caso 3: il piccolo imprenditore non fallibile" },
    {
      type: "p",
      text: "Artigiano con bottega, dimensioni inferiori alle soglie di fallibilità, esposizione di 200.000 euro tra fornitori e banche. L'OCC valuta la sostenibilità della prosecuzione dell'attività e, sulla base dei flussi prospettici, costruisce un concordato minore che prevede la continuità aziendale con pagamento parziale dei creditori sul medio periodo.",
    },

    { type: "h2", text: "Errori frequenti nel rapporto con l'OCC", id: "errori-frequenti" },
    {
      type: "p",
      text: "Dall'esperienza pratica emergono alcuni errori ricorrenti che possono compromettere o rallentare la procedura. Conoscerli aiuta a evitarli sin dall'inizio.",
    },
    {
      type: "ul",
      items: [
        "Omettere documentazione, anche solo per dimenticanza: ogni omissione mina la credibilità del debitore",
        "Sottovalutare i tempi di raccolta documentale: spesso bisogna richiedere documenti ad enti terzi (estratti AdER, certificazioni catastali)",
        "Rivolgersi a un OCC senza verificarne l'iscrizione al registro ministeriale",
        "Non considerare la competenza territoriale del Tribunale di riferimento",
        "Confondere il ruolo dell'OCC con quello di un legale di parte: l'OCC è terzo e indipendente",
        "Non chiedere preventivo scritto sui costi, esponendosi a sorprese",
        "Modificare la propria situazione patrimoniale in corso di procedura senza informarne il gestore",
        "Ignorare le richieste di chiarimento del giudice, rallentando l'iter",
      ],
    },

    { type: "h2", text: "Indipendenza e incompatibilità del gestore", id: "indipendenza" },
    {
      type: "p",
      text: "Tra i tratti che il legislatore ha voluto rafforzare nel passaggio dalla L. 3/2012 al CCII vi è quello dell'indipendenza del gestore. Non è un'indipendenza solo formale: la legge e il DM 202/2014 elencano una serie di situazioni che configurano automaticamente incompatibilità o conflitto di interesse, con conseguente impossibilità di accettare l'incarico. Non può assumere l'incarico di gestore il professionista che, nei due anni precedenti, abbia prestato attività professionale a favore del debitore, del coniuge, dei parenti entro il quarto grado, dei principali creditori o della società in cui il debitore abbia avuto cariche rilevanti.",
    },
    {
      type: "p",
      text: "L'incompatibilità non riguarda solo i rapporti professionali diretti. Anche partecipazioni societarie, rapporti di lavoro pregressi, legami familiari indiretti rilevanti possono dare luogo a una situazione di conflitto. Il gestore ha l'obbligo di dichiararli al momento dell'assunzione dell'incarico e, se sopravvenuti, di comunicarli al giudice e all'organismo che lo ha designato. La violazione di queste regole espone non solo a responsabilità disciplinare nei confronti dell'ordine professionale di appartenenza, ma anche alla nullità degli atti compiuti e all'eventuale danno verso il debitore o i creditori.",
    },
    {
      type: "p",
      text: "Sul piano pratico, il debitore ha interesse a verificare l'effettiva indipendenza del gestore proposto: chiedere quali eventuali rapporti pregressi sussistano è non solo legittimo, ma raccomandabile. Nei piccoli centri, in particolare, è frequente che lo stesso professionista abbia incrociato in passato qualche soggetto coinvolto nella procedura. Una dichiarazione scritta e dettagliata di indipendenza al momento del conferimento dell'incarico è una buona prassi che protegge tutti i soggetti coinvolti.",
    },

    { type: "h2", text: "OCC e tutela dei creditori", id: "tutela-creditori" },
    {
      type: "p",
      text: "Una funzione spesso meno enfatizzata, ma centrale, dell'OCC è la tutela della corretta informazione dei creditori. Nelle procedure di sovraindebitamento, i creditori non sono attori passivi: ricevono dall'OCC la comunicazione dell'avvio della procedura, possono prendere visione della relazione, possono presentare osservazioni o opposizioni, possono in alcuni casi votare sulla proposta.",
    },
    {
      type: "p",
      text: "L'OCC garantisce che i creditori dispongano di tutte le informazioni rilevanti per esprimersi consapevolmente. Questo aspetto è una delle ragioni della terzietà richiesta dalla legge: senza un soggetto neutrale, i creditori avrebbero difficoltà a valutare l'attendibilità delle proposte del debitore, e l'intero sistema perderebbe credibilità.",
    },

    { type: "h2", text: "Confronto tra OCC e altre figure tecniche", id: "confronto-figure" },
    {
      type: "p",
      text: "L'OCC opera in un panorama articolato di figure tecniche che, a vario titolo, intervengono nelle procedure di crisi. Per orientarsi correttamente conviene tracciare brevemente le differenze rispetto al curatore fallimentare, al commissario giudiziale, all'esperto della composizione negoziata. Sono soggetti diversi, con regole e responsabilità diverse, anche se in apparenza tutti svolgono funzioni di assistenza tecnica al giudice o al debitore.",
    },
    {
      type: "p",
      text: "Il curatore fallimentare — oggi propriamente curatore della liquidazione giudiziale ai sensi del CCII — interviene nelle procedure di crisi di imprese sopra-soglia, con poteri di gestione del patrimonio dell'impresa insolvente e con un ruolo di parte processuale nei rapporti con i creditori. Il commissario giudiziale è figura del concordato preventivo e del concordato semplificato, con funzioni di controllo e di parere. L'esperto della composizione negoziata, introdotto dal D.L. 118/2021 e oggi disciplinato dagli artt. 12-25 CCII, è un facilitatore della trattativa stragiudiziale tra imprenditore e creditori, senza poteri di gestione né di attestazione formale.",
    },
    {
      type: "p",
      text: "L'OCC e il gestore della crisi, rispetto a queste figure, si caratterizzano per la specifica vocazione al sovraindebitamento del consumatore e del piccolo imprenditore sotto-soglia. Sono i terminali tecnici di un sistema pensato per dimensioni minori, dove le procedure liquidatorie ordinarie risulterebbero sproporzionate. La presenza di un OCC accreditato è la condizione che rende concretamente accessibili gli strumenti di esdebitazione a un pubblico ampio.",
    },

    { type: "h2", text: "Evoluzione normativa e prospettive", id: "evoluzione" },
    {
      type: "p",
      text: "Il quadro normativo dell'OCC è in continua evoluzione. Dalla L. 3/2012 al CCII passando per i correttivi (D.lgs. 147/2020 e D.lgs. 83/2022), il legislatore ha progressivamente rafforzato la struttura, esteso la competenza degli organismi, integrato la disciplina europea (direttiva Insolvency 1023/2019). È prevedibile, nel medio periodo, l'emanazione di un nuovo regolamento ministeriale che aggiorni il DM 202/2014 alla luce dei principi del CCII, con possibili novità su requisiti di accesso al registro, formazione continua dei gestori, parametri di compenso.",
    },
    {
      type: "p",
      text: "Sul piano applicativo, gli ultimi anni hanno visto una crescita significativa del numero di procedure di sovraindebitamento avviate, con un consolidamento della prassi giurisprudenziale dei diversi Tribunali. Alcuni Tribunali hanno sviluppato linee guida interne sulla collaborazione con gli OCC, sui contenuti minimi della relazione, sulle modalità di liquidazione del compenso. Il debitore e il suo legale, prima di avviare la procedura, dovrebbero sempre verificare la prassi del Tribunale competente per anticipare correttamente aspettative e tempi.",
    },

    { type: "h2", text: "Domande frequenti sull'OCC", id: "faq" },
    {
      type: "faq",
      items: [
        {
          q: "L'OCC è obbligatorio in tutte le procedure di sovraindebitamento?",
          a: "Sì, salvo le ipotesi in cui il giudice nomini un professionista in possesso dei requisiti dell'art. 358 CCII. Nelle procedure di ristrutturazione dei debiti del consumatore, nel concordato minore e nella liquidazione controllata l'assistenza di un OCC o di un gestore equivalente è prevista dalla legge e non è eludibile.",
        },
        {
          q: "Posso scegliere io a quale OCC rivolgermi?",
          a: "Sì, la scelta è libera tra gli OCC iscritti al registro tenuto presso il Ministero della Giustizia. È buona prassi verificare l'iscrizione, considerare la prossimità al Tribunale competente per residenza e valutare l'esperienza maturata in casi analoghi al tuo. Il professionista che ti assiste può proporti gli OCC con cui ha collaborato.",
        },
        {
          q: "L'OCC è il mio avvocato?",
          a: "No, l'OCC è un soggetto terzo e indipendente. Non difende le tue ragioni: attesta in modo tecnico la tua situazione e la fattibilità del piano. Per la difesa dei tuoi interessi è opportuno affiancare all'OCC un avvocato di fiducia che curi gli aspetti strategici, processuali e di relazione con i creditori. I due ruoli sono complementari e non sovrapponibili.",
        },
        {
          q: "Quanto costa rivolgersi a un OCC?",
          a: "Il compenso è disciplinato dal DM 202/2014 ed è parametrato all'entità del passivo e alla complessità del caso. In casi tipici di consumatore con debiti contenuti, il compenso si attesta su poche migliaia di euro; in casi più complessi può salire significativamente. Richiedere un preventivo scritto prima di avviare la procedura è essenziale per evitare sorprese.",
        },
        {
          q: "Quanto dura la fase OCC prima del deposito in Tribunale?",
          a: "La fase preparatoria gestita dall'OCC dura mediamente da uno a tre mesi, in funzione della completezza della documentazione fornita dal debitore e della complessità della ricostruzione. Casi semplici di consumatore con pochi creditori possono completarsi in tempi più rapidi; casi con molti creditori, contenzioso pendente e accertamenti complessi richiedono più tempo.",
        },
        {
          q: "Cosa succede se l'OCC valuta che la mia situazione non sia meritevole?",
          a: "Se il gestore ravvisa profili di non meritevolezza (frode, dolo, colpa grave nell'indebitamento), deve evidenziarlo nella relazione. Il Tribunale potrebbe non concedere il beneficio richiesto. Questo non significa la fine: si può rivalutare la posizione con un altro strumento, oppure presentare elementi nuovi. È fondamentale dialogare con il gestore sin dall'inizio per capire come viene valutata la propria condotta.",
        },
        {
          q: "L'OCC può sospendere i pignoramenti in corso?",
          a: "L'OCC in sé non sospende pignoramenti, ma con il deposito della domanda al Tribunale il giudice può adottare misure protettive che sospendono le esecuzioni in corso e impediscono nuove azioni. La richiesta di tali misure va presentata contestualmente alla domanda principale e va supportata dalla relazione dell'OCC. La sospensione non è automatica: è valutata dal giudice caso per caso.",
        },
        {
          q: "Se cambio OCC durante la procedura, cosa succede?",
          a: "Cambiare OCC in corso di procedura è eccezionale e di norma sconsigliato: comporta tempi più lunghi, costi aggiuntivi e la necessità di trasferire l'intera documentazione e ricostruzione fatta. Può rendersi necessario in caso di gravi mancanze del gestore, conflitti sopravvenuti o impossibilità materiale di proseguire. La sostituzione va autorizzata dal giudice.",
        },
        {
          q: "L'OCC interviene anche nella liquidazione controllata?",
          a: "Sì. Nella liquidazione controllata (artt. 268-277 CCII) l'OCC svolge la funzione attestativa iniziale e supporta la nomina del liquidatore (che può essere il gestore stesso o un altro professionista). Il liquidatore cura la vendita dei beni, la riscossione dei crediti, la distribuzione delle somme ai creditori, sotto il controllo del giudice delegato.",
        },
      ],
    },

    { type: "h2", text: "Conclusione", id: "conclusione" },
    {
      type: "p",
      text: "L'Organismo di Composizione della Crisi è il punto di equilibrio tra le esigenze del debitore in difficoltà e la tutela dei creditori. Conoscerne il ruolo, le funzioni e i limiti è il primo passo concreto per chi valuta di accedere a una procedura di sovraindebitamento. La qualità del lavoro dell'OCC — completezza documentale, accuratezza dell'attestazione, dialogo con il Tribunale — incide in modo decisivo sull'esito della procedura. Per questa ragione la scelta dell'OCC e il rapporto con il gestore vanno curati con la stessa attenzione che si dedica alla scelta dell'avvocato di fiducia. Un OCC competente, supportato da un avvocato esperto della materia, può fare la differenza tra una procedura efficace e una procedura che si arena tra rilievi formali e integrazioni continue.",
    },
  ],
};

export default article;
