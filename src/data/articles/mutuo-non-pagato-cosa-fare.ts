import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "mutuo-non-pagato-cosa-fare",
  title: "Mutuo non pagato: cosa fare prima del pignoramento immobiliare",
  excerpt:
    "Mutuo non pagato e rate arretrate: cosa prevede l'art. 40 T.U.B., come funziona la decadenza dal beneficio del termine e quali strumenti di tutela del debitore esistono prima del pignoramento immobiliare.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: ctaHandshake,
  keywords: [
    "mutuo non pagato",
    "rate mutuo arretrate",
    "decadenza beneficio termine",
    "pignoramento prima casa",
    "rinegoziazione mutuo",
  ],
  intro:
    "Il mancato pagamento delle rate del mutuo fondiario rappresenta una delle situazioni più delicate del diritto bancario privato. Tra la prima rata insoluta e il pignoramento immobiliare esiste una sequenza di passaggi giuridici precisi, regolati dall'art. 40 del Testo Unico Bancario (D.lgs. 385/1993) e dalle norme del codice di procedura civile in tema di espropriazione forzata. Conoscere la cronologia degli eventi, gli strumenti di tutela disponibili (sospensione, rinegoziazione, surroga, accordo a stralcio) e i diritti del debitore consente di agire prima che la situazione precipiti.",
  content: [
    {
      type: "h2",
      text: "Il quadro normativo del mutuo fondiario",
      id: "quadro-normativo",
    },
    {
      type: "p",
      text: "Il mutuo fondiario è disciplinato dagli articoli 38 e seguenti del Testo Unico Bancario (D.lgs. 1 settembre 1993, n. 385). Si tratta di un contratto di credito a medio o lungo termine, garantito da ipoteca di primo grado su immobili, che la banca eroga al fine dell'acquisto, costruzione o ristrutturazione di un fabbricato. La caratteristica strutturale del mutuo fondiario è la presenza congiunta della garanzia ipotecaria e del rispetto del limite di finanziabilità fissato dalla Banca d'Italia: l'erogazione non può superare l'80% del valore dell'immobile (elevabile al 100% in presenza di garanzie integrative).",
    },
    {
      type: "p",
      text: "Quando il debitore smette di pagare le rate, si innesca un meccanismo giuridico che la banca utilizza per recuperare il credito attraverso la procedura esecutiva. Il passaggio tecnico decisivo è la cosiddetta decadenza dal beneficio del termine, che trasforma il debito da rateale a immediatamente esigibile per l'intero capitale residuo.",
    },
    {
      type: "p",
      text: "La giurisprudenza di legittimità ha più volte chiarito che il mutuo fondiario non è una semplice operazione di finanziamento, ma un contratto soggetto a regole speciali, in particolare con riferimento ai privilegi processuali della banca creditrice (art. 41 T.U.B., consolidato dal D.lgs. 14/2019). Il debitore, dal canto suo, gode di alcune tutele specifiche che non sono presenti negli ordinari rapporti di credito.",
    },
    {
      type: "image",
      src: ctaHandshake,
      alt: "Avvocato e cliente discutono delle opzioni sul mutuo arretrato",
      caption:
        "Tra prima rata insoluta e pignoramento esiste un percorso di tutela: agire tempestivamente è la priorità.",
    },
    {
      type: "h2",
      text: "La decadenza dal beneficio del termine (art. 40 T.U.B.)",
      id: "decadenza-beneficio-termine",
    },
    {
      type: "p",
      text: "L'articolo 40, comma 2, del T.U.B. costituisce la norma cardine in materia di inadempimento del mutuo fondiario. Stabilisce che 'la banca può invocare come causa di risoluzione del contratto il ritardato pagamento quando lo stesso si sia verificato almeno sette volte, anche non consecutive. A tali fini costituisce ritardato pagamento quello effettuato tra il trentesimo e il centottantesimo giorno dalla scadenza della rata'.",
    },
    {
      type: "p",
      text: "La disposizione è di stretta interpretazione: la banca non può risolvere il contratto al primo o al secondo ritardo, ma deve attendere la maturazione di almeno sette rate in ritardo qualificato (cioè pagate o rimaste insolute tra il trentesimo e il centottantesimo giorno dalla scadenza). La giurisprudenza ha precisato che i sette ritardi non devono essere necessariamente consecutivi: possono anche essere intervallati nel tempo, purché complessivamente raggiunti.",
    },
    {
      type: "p",
      text: "Una volta verificatosi il presupposto, la banca comunica al debitore — solitamente con raccomandata A/R o PEC — la decadenza dal beneficio del termine ai sensi dell'art. 1186 c.c. e dell'art. 40, comma 2, T.U.B. L'effetto pratico è la trasformazione immediata del debito: tutte le rate future, fino alla scadenza naturale del piano di ammortamento, diventano immediatamente esigibili. Il debitore, da quel momento, non è più tenuto a versare la rata mensile, ma l'intero capitale residuo, gli interessi maturati, gli interessi di mora e le spese contrattuali.",
    },
    {
      type: "note",
      text: "Attenzione: alcuni contratti di mutuo non fondiario (ad esempio i mutui chirografari o i finanziamenti ordinari) non sono soggetti al limite delle sette rate dell'art. 40 T.U.B. e possono prevedere clausole risolutive espresse (art. 1456 c.c.) che consentono alla banca di risolvere il contratto anche dopo un numero minore di insoluti. Verificare sempre il testo contrattuale e le condizioni generali pattuite.",
    },
    {
      type: "h2",
      text: "La cronologia tipica dell'inadempimento",
      id: "cronologia",
    },
    {
      type: "p",
      text: "Comprendere la sequenza degli eventi è fondamentale per intervenire al momento giusto. Ecco i passaggi tipici di un mutuo fondiario in difficoltà.",
    },
    {
      type: "table",
      headers: ["Fase", "Evento", "Tempistiche tipiche", "Conseguenze"],
      rows: [
        [
          "1",
          "Prima rata insoluta",
          "0-30 giorni dalla scadenza",
          "Solleciti telefonici, addebito interessi di mora",
        ],
        [
          "2",
          "Sollecito formale (diffida ad adempiere)",
          "30-90 giorni",
          "Lettera raccomandata della banca, segnalazione in Centrale dei Rischi",
        ],
        [
          "3",
          "Passaggio a sofferenza",
          "90-180 giorni di arretrato significativo",
          "Segnalazione CRIF/Centrale dei Rischi come 'sofferenza'",
        ],
        [
          "4",
          "Decadenza beneficio del termine",
          "Dopo 7 rate in ritardo qualificato",
          "L'intero capitale residuo diviene immediatamente esigibile",
        ],
        [
          "5",
          "Atto di precetto",
          "Successivo alla decadenza",
          "Notifica del titolo esecutivo (contratto di mutuo) e precetto",
        ],
        [
          "6",
          "Pignoramento immobiliare (art. 555 c.p.c.)",
          "Dopo 10 giorni dal precetto, entro 90 giorni",
          "Trascrizione del pignoramento e avvio dell'espropriazione",
        ],
        [
          "7",
          "Vendita all'asta",
          "Da 6 mesi a 2-3 anni dal pignoramento",
          "Cessione forzata dell'immobile a terzi",
        ],
      ],
    },
    {
      type: "p",
      text: "La tabella illustra la sequenza standard, ma i tempi reali dipendono dall'organizzazione interna della banca, dai volumi del Tribunale competente e dall'attivazione di eventuali procedure di mediazione o sospensione. In ogni fase precedente al pignoramento, il debitore conserva margini di trattativa e strumenti di tutela.",
    },
    {
      type: "h2",
      text: "La sospensione del mutuo: il Fondo Gasparrini",
      id: "fondo-gasparrini",
    },
    {
      type: "p",
      text: "Il Fondo di solidarietà per i mutui per l'acquisto della prima casa, comunemente noto come Fondo Gasparrini, è stato istituito dall'articolo 2, commi 475 e seguenti, della Legge 24 dicembre 2007, n. 244 (Legge Finanziaria 2008) ed è gestito da CONSAP. Consente al titolare di un mutuo ipotecario stipulato per l'acquisto della prima casa di sospendere il pagamento delle rate per un massimo di 18 mesi nell'arco della durata del mutuo, al verificarsi di determinati eventi che riducono la capacità reddituale del nucleo familiare.",
    },
    {
      type: "h3",
      text: "Eventi che danno diritto alla sospensione",
    },
    {
      type: "ul",
      items: [
        "Cessazione del rapporto di lavoro subordinato (escluse dimissioni volontarie, risoluzione consensuale e licenziamento per giusta causa o giustificato motivo soggettivo)",
        "Cessazione di rapporti di lavoro parasubordinato o assimilati (collaborazioni coordinate e continuative, agenzia, rappresentanza)",
        "Morte del mutuatario o insorgenza di condizioni di handicap grave o invalidità civile non inferiore all'80%",
        "Riduzione dell'orario di lavoro per almeno 30 giorni continuativi con corrispondente riduzione retributiva (cassa integrazione, contratti di solidarietà)",
      ],
    },
    {
      type: "h3",
      text: "Requisiti per accedere al Fondo Gasparrini",
    },
    {
      type: "ul",
      items: [
        "Mutuo di importo originario non superiore a 250.000 euro",
        "Mutuo destinato all'acquisto della prima casa di abitazione",
        "ISEE familiare non superiore a 30.000 euro (per le richieste correnti)",
        "Il mutuo deve essere in ammortamento da almeno un anno",
        "Non si deve essere già beneficiari per più di 18 mesi complessivi",
      ],
    },
    {
      type: "p",
      text: "Durante il periodo di sospensione, il debitore non paga le rate (né capitale né interessi a suo carico), mentre il Fondo paga alla banca il 50% degli interessi maturati. La sospensione comporta un allungamento del piano di ammortamento pari al periodo sospeso, senza penali né costi accessori. La domanda va presentata alla banca mutuante, che la trasmette a CONSAP per la valutazione.",
    },
    {
      type: "note",
      text: "Il Fondo Gasparrini è strumento di prevenzione: deve essere attivato quando le rate sono ancora pagate o l'arretrato è limitato. Una volta intervenuta la decadenza dal beneficio del termine, la banca non potrà più sospendere il rapporto e la procedura andrà necessariamente verso il recupero forzoso. Agire prima che si accumulino sette rate insolute è quindi cruciale.",
    },
    {
      type: "h2",
      text: "La rinegoziazione del mutuo con la banca",
      id: "rinegoziazione",
    },
    {
      type: "p",
      text: "La rinegoziazione consiste in un accordo tra mutuatario e banca per modificare le condizioni economiche del contratto originario: tasso d'interesse, durata, modalità di calcolo (da variabile a fisso o viceversa), eventuale periodo di preammortamento. È uno strumento bilaterale: la banca non è obbligata ad accettare la richiesta, ma in presenza di difficoltà oggettive del cliente e di rischio reale di insolvenza, ha interesse a trovare un equilibrio che eviti il contenzioso giudiziale.",
    },
    {
      type: "p",
      text: "La rinegoziazione si formalizza con una scrittura privata o un atto pubblico che modifica il piano di ammortamento. Sotto il profilo fiscale, la rinegoziazione del mutuo per l'acquisto della prima casa è esente da imposta sostitutiva (art. 39 T.U.B.). La banca non può richiedere costi accessori sproporzionati: una buona prassi è formalizzare con un atto integrativo che non richieda nuove spese notarili.",
    },
    {
      type: "h3",
      text: "Soluzioni tipiche di rinegoziazione",
    },
    {
      type: "ul",
      items: [
        "Allungamento della durata residua (es. da 15 a 25 anni) per ridurre la rata mensile",
        "Passaggio dal tasso variabile al tasso fisso (mitigando il rischio di rialzi futuri)",
        "Riduzione temporanea della rata con piano di rientro graduato (rata bassa nei primi anni, più alta in seguito)",
        "Sospensione temporanea del pagamento del capitale con versamento dei soli interessi",
        "Consolidamento di posizioni debitorie distinte in un unico mutuo a condizioni migliori",
      ],
    },
    {
      type: "h2",
      text: "Surroga e portabilità (Legge 40/2007)",
      id: "surroga",
    },
    {
      type: "p",
      text: "La portabilità del mutuo, introdotta dall'art. 8 del D.L. 31 gennaio 2007, n. 7, convertito con modificazioni dalla Legge 2 aprile 2007, n. 40 (cosiddetto Decreto Bersani), consente al mutuatario di trasferire il proprio mutuo a un'altra banca, mantenendo invariata l'ipoteca e senza dover stipulare un nuovo contratto di apertura di credito. L'operazione tecnica è la surrogazione per volontà del debitore prevista dall'art. 1202 del codice civile.",
    },
    {
      type: "p",
      text: "I costi della portabilità sono interamente a carico della banca subentrante: il mutuatario non paga né l'imposta sostitutiva, né le spese notarili, né le commissioni della banca originaria. La banca cedente, peraltro, non può rifiutare la surroga né opporre vincoli o penali. Il termine per perfezionare l'operazione è di 30 giorni lavorativi dalla richiesta formale (art. 120-quater T.U.B.).",
    },
    {
      type: "p",
      text: "Quando conviene la surroga? Se il debitore non è ancora in sofferenza grave e dispone di un buon merito creditizio (assenza di segnalazioni gravi in Centrale dei Rischi), può trasferire il mutuo a una banca più favorevole, ottenendo condizioni economiche migliori (tasso più basso, durata più lunga, rata sostenibile). Se invece la posizione è già in 'sofferenza' o 'inadempienza probabile', la surroga sarà difficile da ottenere, perché le banche concorrenti non vorranno accettare un rischio elevato.",
    },
    {
      type: "h2",
      text: "L'accordo a stralcio (saldo e stralcio)",
      id: "saldo-stralcio",
    },
    {
      type: "p",
      text: "L'accordo a stralcio, comunemente noto come 'saldo e stralcio', è un negozio transattivo (art. 1965 c.c.) con cui il debitore propone alla banca creditrice un pagamento parziale (in un'unica soluzione o in poche rate) a fronte della rinuncia definitiva del residuo debito. È uno strumento che la banca accetta quando ritiene che, attraverso il pignoramento e l'asta, recupererebbe una somma inferiore o equivalente con tempi più lunghi e costi maggiori.",
    },
    {
      type: "p",
      text: "Tipicamente, il saldo e stralcio si propone quando il credito è già stato passato a sofferenza e magari ceduto a una società di recupero crediti o a un fondo di credito in sofferenza (NPL). In questi casi, le percentuali di accettazione possono andare dal 20% al 60% del debito originario, in funzione della solidità patrimoniale del debitore, della liquidità immediata che può offrire e dello stato della procedura esecutiva.",
    },
    {
      type: "h3",
      text: "Elementi chiave dell'accordo a stralcio",
    },
    {
      type: "ul",
      items: [
        "Forma scritta: l'accordo deve essere redatto per iscritto e firmato da entrambe le parti, con identificazione esatta del rapporto contrattuale di riferimento",
        "Rinuncia espressa: la banca deve rinunciare in modo esplicito al residuo credito, non basta la sola accettazione del pagamento parziale",
        "Cancellazione delle segnalazioni: l'accordo dovrebbe prevedere l'aggiornamento delle banche dati creditizie (Centrale dei Rischi, CRIF, Experian)",
        "Liberazione del fideiussore: se ci sono garanti, prevedere espressamente la loro liberazione",
        "Liberazione dell'ipoteca: previsione della cancellazione dell'ipoteca presso la Conservatoria dei Registri Immobiliari",
      ],
    },
    {
      type: "h2",
      text: "Il pignoramento immobiliare (art. 555 c.p.c.)",
      id: "pignoramento",
    },
    {
      type: "p",
      text: "Quando le trattative falliscono e la banca decide di procedere coattivamente, si avvia la procedura di espropriazione immobiliare disciplinata dagli articoli 555 e seguenti del codice di procedura civile. Il primo passo è la notifica dell'atto di precetto, contenente l'intimazione al pagamento dell'intera somma esigibile entro il termine di dieci giorni. Decorso inutilmente tale termine, la banca può procedere al pignoramento, da effettuarsi entro novanta giorni dalla notifica del precetto (art. 481 c.p.c.).",
    },
    {
      type: "p",
      text: "L'atto di pignoramento immobiliare contiene l'indicazione esatta degli immobili colpiti, l'ingiunzione di astenersi da atti dispositivi e la trascrizione presso la Conservatoria dei Registri Immobiliari (oggi Agenzia delle Entrate – Servizi di Pubblicità Immobiliare). Da quel momento, l'immobile diviene formalmente sottoposto a vincolo esecutivo e ogni atto dispositivo del debitore (vendita, donazione, costituzione di nuova ipoteca) è inopponibile alla procedura.",
    },
    {
      type: "p",
      text: "Il debitore esecutato ha diritto di proporre opposizione all'esecuzione (art. 615 c.p.c., se contesta il diritto della banca a procedere) o opposizione agli atti esecutivi (art. 617 c.p.c., se contesta singoli atti della procedura). I tempi sono brevissimi: 20 giorni per l'opposizione agli atti esecutivi. È un terreno tecnico in cui l'assistenza legale specialistica è imprescindibile.",
    },
    {
      type: "h2",
      text: "La tutela della prima casa",
      id: "prima-casa",
    },
    {
      type: "p",
      text: "Una domanda frequente: la prima casa è pignorabile? La risposta dipende dal soggetto creditore. Per l'Agente della Riscossione (Agenzia delle Entrate-Riscossione, ex Equitalia), l'art. 76 del D.P.R. 602/1973 (come modificato dal D.L. 69/2013) stabilisce che il pignoramento della prima e unica casa del debitore, adibita ad abitazione e non di lusso, è vietato quando il credito non supera certe soglie e in presenza di altre condizioni specifiche.",
    },
    {
      type: "p",
      text: "Per i creditori privati, incluse le banche, non esiste invece un divieto generale: la prima casa può essere pignorata da una banca mutuante che vanti un credito ipotecario. La ratio è chiara: l'ipoteca è stata costituita proprio sull'immobile per garantire il finanziamento, e ammettere un divieto significherebbe svuotare di significato la garanzia stessa. Si applicano comunque le norme processuali ordinarie e le possibilità di tutela del debitore (sospensione, conversione del pignoramento ex art. 495 c.p.c., riduzione del pignoramento).",
    },
    {
      type: "note",
      text: "La conversione del pignoramento (art. 495 c.p.c.) è uno strumento spesso sottovalutato. Consente al debitore di sostituire il bene pignorato con una somma di denaro pari all'importo del credito, delle spese e degli interessi. Il debitore può versare almeno un quinto della somma immediatamente e ottenere una dilazione fino a 48 mesi. Va valutato caso per caso, ma può rappresentare l'ultima difesa concreta dell'immobile.",
    },
    {
      type: "h2",
      text: "Cosa fare nei primi 90 giorni: piano operativo",
      id: "piano-operativo",
    },
    {
      type: "p",
      text: "I primi tre mesi di difficoltà nel pagamento del mutuo sono cruciali. Una sequenza operativa può fare la differenza tra una situazione gestibile e una procedura esecutiva piena.",
    },
    {
      type: "ol",
      items: [
        "Effettuare un'analisi dettagliata del proprio bilancio familiare: entrate certe, uscite obbligatorie, debiti aperti, capacità di risparmio o disinvestimento",
        "Recuperare la documentazione completa: contratto di mutuo, piano di ammortamento, eventuali atti integrativi, estratti conto degli ultimi 12 mesi",
        "Contattare formalmente la banca, preferibilmente la filiale di riferimento e l'ufficio Crediti Speciali, chiedendo un appuntamento per discutere soluzioni di rinegoziazione",
        "Verificare l'eventuale ammissibilità al Fondo Gasparrini calcolando l'ISEE familiare aggiornato presso un CAF",
        "In parallelo, esplorare con due o tre banche concorrenti la possibilità di surroga ai sensi della Legge 40/2007",
        "Se la rinegoziazione non è praticabile, consultare un avvocato specializzato per valutare la fattibilità di un saldo e stralcio e quantificare l'offerta sostenibile",
        "Considerare l'eventuale accesso alle procedure di sovraindebitamento previste dal Codice della Crisi (D.lgs. 14/2019) qualora la situazione complessiva sia compromessa",
        "Predisporre una comunicazione scritta formale alla banca, con allegata la proposta operativa, da trasmettere via PEC con valore legale",
      ],
    },
    {
      type: "h2",
      text: "Il sovraindebitamento come ultima opzione",
      id: "sovraindebitamento",
    },
    {
      type: "p",
      text: "Quando la posizione debitoria nel suo complesso (mutuo, carte di credito, prestiti personali, debiti fiscali) eccede la capacità di rientro del debitore, può essere opportuno valutare l'accesso a una delle procedure di composizione delle crisi da sovraindebitamento previste dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Le opzioni principali per il consumatore sono il piano del consumatore (artt. 67 e ss. CCII) e il concordato minore (artt. 74 e ss. CCII).",
    },
    {
      type: "p",
      text: "Il piano del consumatore consente di proporre ai creditori un piano di rientro modulato sulla capacità reddituale effettiva, anche con falcidia (riduzione) dei crediti chirografari e dilazione dei crediti privilegiati. La proposta è omologata dal Tribunale anche senza il voto dei creditori, purché il Giudice ne valuti la sostenibilità e la meritevolezza del debitore. L'accesso passa attraverso un Organismo di Composizione della Crisi (OCC).",
    },
    {
      type: "p",
      text: "Nel piano del consumatore è possibile mantenere l'abitazione familiare a determinate condizioni, in particolare se viene previsto il pagamento integrale del credito ipotecario nei tempi del piano oppure se la falcidia rispetta il valore di mercato dell'immobile attestato da perito. La materia è tecnicamente complessa e richiede l'intervento congiunto di avvocato e gestore della crisi.",
    },
    {
      type: "h2",
      text: "Errori frequenti da evitare",
      id: "errori",
    },
    {
      type: "ul",
      items: [
        "Ignorare le prime lettere di sollecito sperando che la situazione si risolva da sé: ogni giorno trascorso aumenta interessi di mora, spese e rischio di decadenza",
        "Pagare una rata su tre per 'dimostrare buona fede' senza concordare un piano scritto: questa pratica non interrompe la decadenza dal beneficio del termine e non vincola la banca",
        "Cedere a società che promettono 'cancellazione dei debiti' a fronte di anticipi: queste proposte spesso non hanno fondamento giuridico e producono solo ulteriori costi",
        "Vendere l'immobile sotto pignoramento senza autorizzazione del Tribunale: l'atto è inopponibile ai creditori e può configurare il reato di sottrazione fraudolenta al pagamento delle imposte (art. 11 D.lgs. 74/2000) o sottrazione di beni al creditore",
        "Firmare accordi transattivi senza farli verificare da un legale: clausole ambigue su interessi, spese, segnalazioni creditizie possono compromettere gli effetti dell'accordo",
        "Sottovalutare le segnalazioni in Centrale dei Rischi e CRIF: anche dopo l'accordo, una segnalazione errata può precludere l'accesso a nuovi finanziamenti per anni",
      ],
    },
    {
      type: "h2",
      text: "La giurisprudenza recente",
      id: "giurisprudenza",
    },
    {
      type: "p",
      text: "La Suprema Corte di Cassazione, con l'ordinanza n. 12174 del 13 maggio 2021 e con orientamenti consolidati successivi (Cass. Sez. III, n. 18033/2022; Cass. Sez. I, n. 23845/2023), ha precisato che il superamento del limite di finanziabilità del mutuo fondiario (80% del valore dell'immobile) non determina la nullità dell'intero contratto, ma può consentire la riqualificazione come mutuo ordinario, con conseguente perdita dei privilegi processuali della banca. La verifica del limite di finanziabilità rappresenta quindi un terreno di possibile contestazione in sede esecutiva.",
    },
    {
      type: "p",
      text: "Altro fronte rilevante è quello della validità delle clausole di indicizzazione e dei tassi di mora. Numerose pronunce di merito (Tribunale di Milano, Tribunale di Torino, Tribunale di Roma) hanno dichiarato la nullità di clausole opache o di tassi che — sommando interessi corrispettivi e di mora — superano il tasso soglia dell'usura (Legge 108/1996, art. 644 c.p.). In presenza di anomalie contrattuali, una perizia econometrica può rivelare opportunità di rinegoziazione o riduzione del debito.",
    },
    {
      type: "h2",
      text: "Domande frequenti",
      id: "faq",
    },
    {
      type: "faq",
      items: [
        {
          q: "Quante rate posso saltare prima che la banca risolva il mutuo?",
          a: "L'art. 40, comma 2, T.U.B. richiede almeno sette rate in ritardo qualificato (pagate tra il trentesimo e il centottantesimo giorno dalla scadenza) per consentire la risoluzione del mutuo fondiario. Le rate non devono essere necessariamente consecutive. Per i mutui non fondiari il limite può essere inferiore, in funzione della clausola risolutiva espressa eventualmente pattuita. In ogni caso, è opportuno intervenire molto prima che si raggiunga la soglia, perché ogni rata non pagata genera interessi di mora e segnalazioni in Centrale dei Rischi che peggiorano progressivamente il merito creditizio.",
        },
        {
          q: "Posso sospendere il mutuo se perdo il lavoro?",
          a: "Sì, in presenza dei requisiti previsti dal Fondo Gasparrini è possibile sospendere il pagamento delle rate fino a 18 mesi complessivi. La cessazione del rapporto di lavoro subordinato (esclusi dimissioni e licenziamento per giusta causa o motivo soggettivo) è uno degli eventi che dà diritto alla sospensione. Occorre però rispettare i requisiti di ISEE familiare (non superiore a 30.000 euro), importo originario del mutuo (non superiore a 250.000 euro) e finalità (acquisto della prima casa). La domanda si presenta alla banca mutuante con la documentazione richiesta.",
        },
        {
          q: "La banca può pignorare la prima casa per il mutuo non pagato?",
          a: "Sì. Il divieto di pignoramento della prima casa previsto dall'art. 76 D.P.R. 602/1973 si applica solo all'Agente della Riscossione per debiti tributari, non ai creditori privati come le banche. La banca che ha erogato un mutuo ipotecario può pignorare l'immobile ipotecato anche se è prima casa: l'ipoteca è stata appunto costituita su quell'immobile a garanzia del finanziamento. Restano operative le tutele processuali ordinarie come la conversione del pignoramento ex art. 495 c.p.c. e l'accesso alle procedure di sovraindebitamento.",
        },
        {
          q: "Cos'è il saldo e stralcio e quanto si può ottenere come riduzione?",
          a: "Il saldo e stralcio è un accordo transattivo (art. 1965 c.c.) con cui la banca accetta un pagamento parziale, in tempi rapidi, a fronte della rinuncia al residuo credito. La percentuale di abbattimento del debito originario varia in funzione di molti fattori: stato della procedura esecutiva, valutazione di mercato dell'immobile ipotecato, presenza di garanti, eventuale cessione del credito a società NPL. In generale, le percentuali di pagamento concordate possono oscillare tra il 20% e il 60% del debito originario, ma ogni caso va valutato sulla base degli specifici elementi documentali.",
        },
        {
          q: "Se faccio surroga del mutuo perdo le agevolazioni prima casa?",
          a: "No. La surroga ai sensi della Legge 40/2007 non comporta la perdita delle agevolazioni fiscali sulla prima casa, perché non si tratta di un nuovo acquisto né di una nuova erogazione finanziaria. L'operazione mantiene inalterati gli elementi essenziali del rapporto originario, salvo il subentro della nuova banca. Anche la detrazione IRPEF degli interessi passivi sul mutuo prima casa (art. 15 T.U.I.R.) continua a spettare con riferimento al mutuo surrogato, nei limiti di legge.",
        },
        {
          q: "Cosa rischio se vendo l'immobile dopo la trascrizione del pignoramento?",
          a: "L'atto di vendita successivo alla trascrizione del pignoramento è inopponibile ai creditori procedenti: l'acquirente non potrà far valere il proprio diritto contro la procedura esecutiva. L'immobile resta vincolato e potrà essere venduto all'asta. Inoltre, condotte volte a sottrarre beni alla garanzia patrimoniale (art. 2740 c.c.) possono integrare responsabilità civile per danni e, in casi particolari, reati come la sottrazione fraudolenta al pagamento delle imposte (art. 11 D.lgs. 74/2000) quando coinvolgono crediti erariali.",
        },
        {
          q: "Quanto tempo passa tra il pignoramento e l'asta?",
          a: "I tempi dipendono dal Tribunale competente, dal valore dell'immobile, dalla presenza di opposizioni e dalle prassi del singolo giudice dell'esecuzione. In media, dalla trascrizione del pignoramento alla prima asta passano dai 12 ai 24 mesi. In caso di asta deserta, si procede con nuove aste a prezzo ribassato (di norma il 25% in meno rispetto al precedente), fino all'aggiudicazione. L'intera procedura può quindi durare anche 3-4 anni. Durante questo tempo permangono margini per trattative, conversione del pignoramento o accesso a procedure di sovraindebitamento.",
        },
        {
          q: "La rinegoziazione comporta nuovi costi notarili?",
          a: "Dipende dalla forma tecnica scelta. Se la rinegoziazione si realizza con un atto integrativo del contratto originario, mantenuto come scrittura privata o autenticato, i costi notarili sono limitati o assenti. La rinegoziazione del mutuo prima casa beneficia inoltre dell'esenzione dall'imposta sostitutiva (art. 39 T.U.B.). Diverso è il caso della surroga ex Legge 40/2007: in quel caso, tutti i costi (notarili, di istruttoria, di perizia) sono a carico della banca subentrante e non possono essere addebitati al mutuatario. Verificare sempre i preventivi e contestare costi sproporzionati.",
        },
        {
          q: "Posso accedere al sovraindebitamento se ho ancora il mutuo aperto?",
          a: "Sì. Le procedure di composizione delle crisi da sovraindebitamento previste dal Codice della Crisi (D.lgs. 14/2019) sono accessibili anche in presenza di un mutuo ipotecario in corso. Nel piano del consumatore (art. 67 e ss. CCII) o nel concordato minore (art. 74 e ss. CCII) è possibile prevedere il pagamento integrale del credito ipotecario nei tempi del piano, oppure la falcidia parziale entro il valore di mercato dell'immobile attestato da perito ai sensi dell'art. 67, comma 4, CCII. L'accesso passa tramite un Organismo di Composizione della Crisi (OCC).",
        },
        {
          q: "Il fideiussore del mutuo è obbligato se la banca non mi escute prima?",
          a: "Dipende dalla forma di fideiussione pattuita. Nelle fideiussioni solidali, frequentissime nei contratti bancari italiani, il fideiussore è obbligato in solido col debitore principale: la banca può rivolgersi direttamente al garante senza dover prima escutere il debitore (art. 1944, comma 2, c.c.). Solo se è stato espressamente pattuito il beneficio di escussione (art. 1944, comma 1, c.c.) la banca deve prima aggredire il patrimonio del debitore principale. Il fideiussore che paga ha diritto di regresso verso il debitore (art. 1950 c.c.) ed eventualmente verso eventuali cofideiussori.",
        },
      ],
    },
  ],
};
