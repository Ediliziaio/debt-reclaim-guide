import type { Article } from "../articles";
import authorityLegal from "@/assets/authority-legal.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";
import heroHope from "@/assets/hero-hope.jpg";

export const article: Article = {
  slug: "liquidazione-giudiziale",
  title: "Liquidazione giudiziale (ex fallimento): cosa cambia con il Codice della Crisi",
  excerpt: "Guida operativa alla liquidazione giudiziale nel CCII: presupposti, sentenza di apertura, ruolo del curatore, stato passivo, liquidazione dell'attivo, riparti, esdebitazione ex art. 278.",
  category: "Imprese",
  date: "Maggio 2026",
  readTime: "21 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: authorityLegal,
  keywords: [
    "liquidazione giudiziale",
    "fallimento",
    "CCII",
    "curatore",
    "esdebitazione persona fisica",
    "stato passivo",
  ],
  intro:
    "La liquidazione giudiziale è la procedura che ha sostituito il fallimento con l'entrata in vigore del Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Pur essendo, nei tratti essenziali, la prosecuzione storica del fallimento disciplinato dalla L.F. del 1942, il nuovo istituto presenta differenze terminologiche, procedimentali e sostanziali significative, soprattutto in materia di organi della procedura, esdebitazione, revocatorie e reati. Questa guida ricostruisce in modo organico la liquidazione giudiziale: presupposti soggettivi e oggettivi, sentenza di apertura, spossessamento, ruolo del curatore, stato passivo, liquidazione dell'attivo, riparti, chiusura, esdebitazione di diritto e reati fallimentari.",
  content: [
    {
      type: "h2",
      text: "Dal fallimento alla liquidazione giudiziale: il cambio di paradigma",
      id: "dal-fallimento-alla-liquidazione-giudiziale",
    },
    {
      type: "p",
      text: "Con l'entrata in vigore del Codice della Crisi d'Impresa e dell'Insolvenza (CCII, D.lgs. 14/2019), avvenuta nella sua versione organica il 15 luglio 2022, è stato definitivamente abrogato il Regio Decreto 16 marzo 1942, n. 267 (Legge Fallimentare), che per ottant'anni aveva disciplinato il fallimento e le altre procedure concorsuali italiane. Il legislatore della riforma ha scelto di sostituire il termine 'fallimento' con quello di 'liquidazione giudiziale', allineando la terminologia italiana a quella di altri ordinamenti europei e attenuando lo stigma personale storicamente associato alla nozione di fallito.",
    },
    {
      type: "p",
      text: "Il cambio non è soltanto lessicale. Pur essendo riconducibile, nei suoi tratti strutturali, alla procedura fallimentare, la liquidazione giudiziale presenta differenze sostanziali significative: una nuova architettura degli organi, un sistema di esdebitazione automatica per la persona fisica, una revisione della disciplina delle revocatorie, una rimodulazione dei reati. La riforma è stata ulteriormente perfezionata dal D.lgs. 83/2022 di recepimento della Direttiva UE 2019/1023 (Direttiva Insolvency) e dai successivi correttivi del 2024.",
    },
    {
      type: "p",
      text: "La liquidazione giudiziale resta la procedura concorsuale 'di chiusura' del sistema: vi si accede quando le procedure di regolazione della crisi (composizione negoziata, accordo di ristrutturazione, concordato preventivo, PRO) non sono state attivate, sono fallite o non sono praticabili. Conserva la natura di procedura giudiziale, gestita dal Tribunale, finalizzata alla liquidazione dell'intero patrimonio del debitore insolvente per il soddisfacimento concorsuale dei creditori, nel rispetto della par condicio e dell'ordine delle cause di prelazione.",
    },

    {
      type: "h2",
      text: "Presupposti soggettivi",
      id: "presupposti-soggettivi",
    },
    {
      type: "p",
      text: "La liquidazione giudiziale è riservata, come già il fallimento, all'imprenditore commerciale che superi le soglie dimensionali fissate dall'art. 2, comma 1, lett. d), CCII. Si tratta delle medesime soglie che, in positivo, definiscono il presupposto soggettivo del concordato preventivo: attivo patrimoniale superiore a 300.000 euro nei tre esercizi precedenti; ricavi lordi superiori a 200.000 euro nei tre esercizi precedenti; ammontare di debiti, anche non scaduti, superiore a 500.000 euro. Il superamento anche di una sola soglia comporta l'assoggettabilità alla procedura.",
    },
    {
      type: "p",
      text: "Sono esclusi dalla liquidazione giudiziale: l'imprenditore agricolo (ai sensi dell'art. 2135 c.c.), per il quale operano le procedure di composizione delle crisi da sovraindebitamento; l'imprenditore commerciale sotto-soglia (piccolo imprenditore o imprenditore minore), per il quale operano la liquidazione controllata e il concordato minore; il consumatore e il professionista, soggetti alle procedure di sovraindebitamento previste dal Titolo IV del CCII (artt. 65 ss.); gli enti pubblici e gli altri soggetti per cui la legge prevede liquidazioni coatte amministrative o specifiche discipline di settore (banche, intermediari finanziari, imprese di assicurazione).",
    },
    {
      type: "p",
      text: "Sono assoggettabili alla liquidazione giudiziale anche le società commerciali, comprese le società di persone, le cooperative non aventi scopo prevalente di mutualità e le società consortili. Per le società di persone, la dichiarazione di liquidazione giudiziale della società estende i propri effetti ai soci illimitatamente responsabili (art. 256 CCII), che sono dichiarati anch'essi in liquidazione giudiziale 'per estensione', con apertura di procedure individuali destinate al soddisfacimento dei creditori personali.",
    },

    {
      type: "h2",
      text: "Presupposto oggettivo: lo stato di insolvenza",
      id: "presupposto-oggettivo",
    },
    {
      type: "p",
      text: "Il presupposto oggettivo della liquidazione giudiziale è lo stato di insolvenza, definito dall'art. 2, comma 1, lett. b), CCII come 'lo stato del debitore che si manifesta con inadempimenti od altri fatti esteriori, i quali dimostrino che il debitore non è più in grado di soddisfare regolarmente le proprie obbligazioni'. È un concetto sostanziale: l'insolvenza si rivela attraverso indici esterni (protesti, decreti ingiuntivi, pignoramenti, mancati pagamenti reiterati, perdita dell'avviamento), che fotografano l'impossibilità definitiva di adempiere.",
    },
    {
      type: "p",
      text: "L'insolvenza si distingue dalla mera crisi (art. 2, comma 1, lett. a, CCII), che è lo stato di difficoltà economico-finanziaria che rende probabile l'insolvenza nei dodici mesi successivi. La crisi è reversibile, l'insolvenza è uno stato conclamato. Solo l'insolvenza è presupposto della liquidazione giudiziale: la crisi è invece presupposto del concordato preventivo, della composizione negoziata e degli altri strumenti di regolazione preventiva.",
    },
    {
      type: "p",
      text: "Il debito complessivo deve essere superiore a 30.000 euro (art. 49, comma 5, CCII): se il debito è inferiore, la liquidazione giudiziale non è dichiarata. È una soglia di rilevanza minima, finalizzata a evitare l'apertura di procedure concorsuali per situazioni di modesta entità. Inoltre, il Tribunale può, valutate le circostanze, respingere il ricorso quando l'insolvenza non risulti chiaramente acclarata o quando manchi l'interesse del creditore istante.",
    },

    {
      type: "h2",
      text: "I soggetti legittimati a presentare l'istanza",
      id: "soggetti-legittimati",
    },
    {
      type: "p",
      text: "L'art. 37 CCII individua i soggetti legittimati a presentare l'istanza di apertura della liquidazione giudiziale. Sono: il debitore stesso (istanza in proprio); uno o più creditori, anche per il tramite del proprio difensore; il pubblico ministero, quando l'insolvenza risulti nel corso di un procedimento penale o sia segnalata in altro modo all'autorità giudiziaria. Diversamente dalla previgente disciplina, la riforma ha rafforzato il ruolo del PM e ha eliminato la possibilità di iniziativa d'ufficio del Tribunale.",
    },
    {
      type: "p",
      text: "L'istanza in proprio del debitore è una facoltà, non un obbligo, salvi gli obblighi di emersione tempestiva della crisi che gravano sugli amministratori delle società di capitali (art. 2086 c.c. e artt. 3 e 25-octies CCII). Quando però la crisi è ormai degenerata in insolvenza conclamata, e nessuna procedura di regolazione è praticabile, l'istanza in proprio diventa scelta razionale, soprattutto perché consente al debitore di accedere all'esdebitazione di diritto al termine della procedura (art. 282 CCII).",
    },

    {
      type: "image",
      src: authorityLegal,
      alt: "Codice della Crisi e martello del giudice sul banco del Tribunale",
      caption:
        "Il D.lgs. 14/2019 ha sostituito il fallimento con la liquidazione giudiziale, mantenendone la struttura ma rinnovandone organi, esdebitazione e revocatorie.",
    },

    {
      type: "h2",
      text: "La sentenza di apertura della liquidazione giudiziale",
      id: "sentenza-apertura",
    },
    {
      type: "p",
      text: "Il Tribunale competente, individuato in base alla sede principale dell'impresa (art. 27 CCII), istruisce il procedimento prefallimentare (oggi denominato di apertura della liquidazione giudiziale), durante il quale il debitore può difendersi, presentare memorie e produrre documenti. All'esito, se ricorrono i presupposti, il Tribunale dichiara aperta la liquidazione giudiziale con sentenza (art. 49 CCII). La sentenza è immediatamente esecutiva e produce effetti immediati per il debitore e per i creditori.",
    },
    {
      type: "p",
      text: "Con la sentenza di apertura, il Tribunale: nomina il giudice delegato e il curatore; ordina il deposito dei bilanci e delle scritture contabili; fissa il termine entro cui i creditori e i terzi titolari di diritti devono presentare domande di insinuazione al passivo; convoca l'adunanza per l'esame dello stato passivo; dispone la pubblicità della sentenza presso il registro delle imprese e gli altri pubblici registri. La sentenza è impugnabile entro 30 giorni dalla notificazione (art. 51 CCII), con reclamo alla Corte d'Appello competente.",
    },

    {
      type: "h2",
      text: "Effetti per il debitore: lo spossessamento",
      id: "effetti-debitore-spossessamento",
    },
    {
      type: "p",
      text: "La sentenza di apertura della liquidazione giudiziale produce, per il debitore, l'effetto del c.d. spossessamento (art. 142 CCII): il debitore perde l'amministrazione e la disponibilità dei propri beni esistenti alla data della sentenza, nonché di quelli che gli pervengono durante la procedura. La gestione del patrimonio passa al curatore, sotto la vigilanza del giudice delegato e del comitato dei creditori. Gli atti di disposizione compiuti dal debitore dopo la sentenza sono inefficaci nei confronti dei creditori (art. 144 CCII).",
    },
    {
      type: "p",
      text: "Lo spossessamento non è una pena, né determina una perdita della capacità di agire del debitore: il debitore conserva la sua capacità giuridica e d'agire, ma limitatamente ai rapporti estranei al patrimonio coinvolto nella procedura. Restano nella sua disponibilità i beni di natura strettamente personale (vestiti, beni d'uso quotidiano), i crediti di natura strettamente personale (alimentari, indennizzo per danni biologici), nonché — entro limiti definiti dall'art. 146 CCII — la parte di stipendio o pensione necessaria al mantenimento del debitore e della sua famiglia.",
    },
    {
      type: "p",
      text: "Per gli amministratori delle società in liquidazione giudiziale, gli effetti operano sulla società ma non determinano effetti personali patrimoniali diretti sui singoli amministratori, salvo che essi non rispondano per azioni di responsabilità (artt. 255 ss. CCII) o non siano essi stessi imprenditori. Tuttavia, gli amministratori sono soggetti agli obblighi di collaborazione con il curatore e possono incorrere in responsabilità civili e penali per violazione dei doveri di gestione conservativa del patrimonio (artt. 2486 c.c. e 322 ss. CCII).",
    },

    {
      type: "h2",
      text: "Effetti per i creditori: il divieto di azioni individuali",
      id: "effetti-creditori",
    },
    {
      type: "p",
      text: "Per i creditori, l'apertura della liquidazione giudiziale comporta il divieto di intraprendere o proseguire azioni esecutive individuali sui beni inclusi nella massa (art. 150 CCII). Tutte le azioni esecutive pendenti vengono sospese, e quelle nuove non possono essere iniziate. I creditori per soddisfarsi devono presentare domanda di insinuazione al passivo, partecipando al concorso e ricevendo i pagamenti secondo le regole della par condicio e dell'ordine delle cause di prelazione.",
    },
    {
      type: "p",
      text: "Il divieto si estende anche ai creditori privilegiati, ipotecari e pignoratizi, salvo che la legge non disponga diversamente per ipotesi specifiche (ad esempio per il creditore ipotecario fondiario nelle vendite seguite ai sensi della disciplina speciale dell'art. 41 T.U.B., entro determinati limiti). Le azioni cautelari, le opposizioni a precetto e le procedure di pignoramento iniziate prima della sentenza di apertura sono assorbite nella procedura concorsuale.",
    },
    {
      type: "p",
      text: "Sono inoltre sospesi gli interessi sui crediti chirografari (art. 154 CCII): durante la procedura, i crediti chirografari non producono interessi nei confronti della massa, salvo quanto previsto per crediti assistiti da prelazione. I crediti privilegiati continuano a maturare interessi nei limiti del valore del bene oggetto di prelazione, secondo le regole specifiche previste per ciascuna categoria di privilegio.",
    },

    {
      type: "note",
      text: "L'effetto sospensivo delle azioni individuali è un cardine della procedura concorsuale: garantisce la par condicio creditorum, impedendo che il creditore più aggressivo o più informato possa soddisfarsi a scapito degli altri. Per il creditore individuale, la prima reazione corretta dopo la sentenza di apertura è la verifica della propria posizione e la predisposizione tempestiva della domanda di insinuazione.",
    },

    {
      type: "h2",
      text: "Gli organi della procedura: curatore, giudice delegato, comitato dei creditori",
      id: "organi-procedura",
    },
    {
      type: "p",
      text: "La procedura di liquidazione giudiziale è amministrata da una pluralità di organi: il Tribunale (organo collegiale), il giudice delegato (componente individuale del Tribunale), il curatore (professionista nominato dal Tribunale), il comitato dei creditori (organo di rappresentanza dei creditori, art. 138 CCII). Ognuno ha competenze specifiche, individuate dal CCII con maggiore puntualità rispetto alla previgente disciplina.",
    },
    {
      type: "h3",
      text: "Il curatore",
    },
    {
      type: "p",
      text: "Il curatore è la figura cardine della procedura. Nominato dal Tribunale con la sentenza di apertura, scelto fra i professionisti iscritti all'albo dei gestori della crisi (artt. 125 ss. CCII), il curatore amministra il patrimonio del debitore sotto la vigilanza del giudice delegato e del comitato dei creditori. È un pubblico ufficiale nello svolgimento delle sue funzioni, e ne risponde personalmente, anche penalmente, per i danni causati a creditori e terzi (art. 132 CCII).",
    },
    {
      type: "p",
      text: "Tra i principali compiti del curatore: redigere l'inventario dei beni; predisporre la relazione iniziale al giudice delegato (art. 130 CCII); proporre il programma di liquidazione (art. 213 CCII); gestire i contratti in corso; esercitare le azioni revocatorie e di responsabilità; verificare i crediti; predisporre lo stato passivo; eseguire la liquidazione dell'attivo; predisporre i riparti. La sua remunerazione è disciplinata dal D.M. 30/2012 e successive modificazioni, parametrata sull'attivo realizzato e sulla complessità della procedura.",
    },
    {
      type: "h3",
      text: "Il giudice delegato",
    },
    {
      type: "p",
      text: "Il giudice delegato è il membro del Tribunale incaricato di seguire la procedura. Esercita la vigilanza sull'attività del curatore, autorizza gli atti di particolare rilevanza (vendite, transazioni, mutui), risolve i conflitti che si sviluppano nella procedura, ammette o respinge i crediti in sede di stato passivo, decide sulle istanze del comitato dei creditori. Ha funzioni di direzione e vigilanza, ma non di gestione diretta del patrimonio, che spetta al curatore.",
    },
    {
      type: "h3",
      text: "Il comitato dei creditori",
    },
    {
      type: "p",
      text: "Il comitato dei creditori (art. 138 CCII) è composto da tre o cinque creditori scelti fra quelli ammessi al passivo, in modo da rappresentare in modo equilibrato le diverse categorie. Ha funzioni consultive e di vigilanza: esprime pareri (non sempre vincolanti) sugli atti del curatore, autorizza alcune operazioni, presenta osservazioni al giudice delegato. La sua effettiva operatività dipende dal numero e dalla qualità dei creditori e dalla loro disponibilità a partecipare attivamente alla procedura.",
    },

    {
      type: "h2",
      text: "Lo stato passivo: la verifica dei crediti",
      id: "stato-passivo",
    },
    {
      type: "p",
      text: "Lo stato passivo è il documento che cristallizza l'elenco dei crediti ammessi al concorso, con indicazione del titolo, dell'importo e dell'eventuale prelazione. La sua formazione segue una procedura disciplinata dagli artt. 200 ss. CCII. I creditori e i terzi titolari di diritti reali o personali sui beni del debitore devono presentare domanda di insinuazione al curatore entro 30 giorni prima dell'adunanza di verifica, con allegazione del titolo e degli atti probatori del credito o del diritto.",
    },
    {
      type: "p",
      text: "Il curatore esamina ciascuna domanda e formula proposte motivate al giudice delegato sulla loro ammissione o esclusione. All'adunanza, il giudice delegato decide sulle domande, con provvedimento immediatamente esecutivo. Le contestazioni delle parti interessate possono essere proposte mediante opposizione allo stato passivo (art. 206 CCII), che si svolge in camera di consiglio davanti al Tribunale, secondo un procedimento accelerato. Le domande tardive — presentate dopo la chiusura dello stato passivo — sono ammissibili entro precisi limiti temporali (art. 208 CCII) ma soggette a regime di postergazione.",
    },
    {
      type: "p",
      text: "Lo stato passivo si compone di sezioni: crediti chirografari, privilegiati generali, privilegiati speciali, ipotecari, pignoratizi, prededucibili. L'ordine di soddisfacimento segue l'ordine delle cause di prelazione previsto dal Codice civile (artt. 2745 ss. c.c.) e dalla normativa speciale. La corretta classificazione del credito è fondamentale: un errore nell'attribuzione del privilegio o nella verifica della prelazione può comportare la perdita di posizione nei riparti.",
    },

    {
      type: "h2",
      text: "Le azioni revocatorie e di inefficacia",
      id: "azioni-revocatorie",
    },
    {
      type: "p",
      text: "Una delle funzioni più importanti del curatore è l'esercizio delle azioni revocatorie e di inefficacia, finalizzate alla ricostruzione del patrimonio del debitore mediante la riacquisizione di beni o somme uscite dal patrimonio in periodo di crisi o insolvenza. La disciplina è contenuta negli artt. 163-171 CCII. Le azioni revocatorie del CCII si distinguono in: revocatorie ordinarie (art. 165 CCII), che riprendono l'art. 2901 c.c.; revocatorie fallimentari (artt. 166-167 CCII), specifiche per la procedura.",
    },
    {
      type: "p",
      text: "L'art. 166 CCII disciplina la revocatoria degli atti a titolo oneroso compiuti nel c.d. periodo sospetto: un anno prima della dichiarazione di liquidazione giudiziale per gli atti normali, due anni per gli atti anormali (vendite a prezzi vili, pagamenti di debiti non scaduti, costituzione di garanzie su debiti preesistenti). L'art. 167 CCII contempla la revocatoria dei pagamenti effettuati nel periodo sospetto, salvo eccezioni per i pagamenti ordinari di tributi, contributi e retribuzioni nei limiti delle 'rimesse in conto corrente' di cui all'art. 170 CCII.",
    },
    {
      type: "p",
      text: "Sono escluse dalla revocatoria, ai sensi dell'art. 166, comma 3, CCII: le rimesse effettuate su conto corrente bancario nei limiti dei prelievi successivi (rimesse 'di passaggio'); i pagamenti effettuati a fronte di prestazioni di servizi continuativi nei termini d'uso; gli atti, i pagamenti e le garanzie posti in essere in esecuzione di un piano di risanamento attestato (art. 56 CCII) o di un accordo di ristrutturazione omologato (art. 57 CCII); gli atti compiuti in esecuzione di un concordato preventivo omologato; gli atti di costituzione del patrimonio destinato a uno specifico affare (art. 2447-bis c.c.).",
    },

    {
      type: "table",
      headers: [
        "Tipo di atto",
        "Periodo sospetto",
        "Onere probatorio",
        "Esenzioni principali",
      ],
      rows: [
        [
          "Atti a titolo gratuito",
          "2 anni anteriori",
          "Inefficaci automaticamente",
          "Donazioni d'uso, art. 783 c.c.",
        ],
        [
          "Atti a titolo oneroso 'anormali'",
          "2 anni anteriori",
          "Curatore prova solo l'anormalità",
          "Piani attestati, accordi omologati",
        ],
        [
          "Atti a titolo oneroso 'normali'",
          "1 anno anteriore",
          "Curatore prova scientia decoctionis",
          "Pagamenti tributari ordinari",
        ],
        [
          "Pagamenti debiti scaduti",
          "1 anno anteriore",
          "Scientia decoctionis del beneficiario",
          "Rimesse di passaggio art. 170",
        ],
        [
          "Garanzie su debiti preesistenti",
          "2 anni anteriori",
          "Curatore prova solo periodo",
          "Garanzie in esecuzione di piani",
        ],
        [
          "Revocatoria ordinaria (art. 2901)",
          "5 anni",
          "Consilium fraudis",
          "Atti normali di gestione",
        ],
      ],
    },

    {
      type: "h2",
      text: "La liquidazione dell'attivo: programma, vendite, asta",
      id: "liquidazione-attivo",
    },
    {
      type: "p",
      text: "La liquidazione dell'attivo è la fase centrale della procedura: il patrimonio del debitore viene convertito in liquidità mediante vendita dei beni, recupero dei crediti, riscossione delle azioni revocatorie e risarcitorie. Il curatore predispone il programma di liquidazione entro 60 giorni dalla redazione dell'inventario (art. 213 CCII), sottoponendolo all'approvazione del comitato dei creditori e del giudice delegato. Il programma indica le modalità e i tempi delle vendite, i criteri di stima, le eventuali offerte già pervenute, le ipotesi di mantenimento provvisorio dell'azienda.",
    },
    {
      type: "p",
      text: "Le vendite dei beni avvengono, di regola, secondo le procedure competitive disciplinate dagli artt. 216 ss. CCII e dal D.M. 26 febbraio 2018 (per le aste telematiche). Il CCII ha generalizzato il ricorso alle vendite telematiche, salvo casi particolari, e ha rafforzato la trasparenza delle procedure mediante portali pubblici dedicati (Portale delle Vendite Pubbliche del Ministero della Giustizia). Le stime sono affidate a periti indipendenti, nominati dal giudice delegato, e i prezzi base d'asta sono fissati con criteri prudenziali. In caso di asta deserta, i prezzi vengono ribassati secondo cadenza prefissata.",
    },
    {
      type: "p",
      text: "Una particolare modalità di liquidazione è la vendita dell'azienda o di rami d'azienda in funzionamento (art. 214 CCII). Quando l'azienda ha ancora valore d'avviamento, è preferibile venderla in esercizio piuttosto che smembrarla. Il curatore può, su autorizzazione del giudice delegato e con parere favorevole del comitato dei creditori, gestire provvisoriamente l'impresa (art. 211 CCII) o affidarla in affitto (art. 212 CCII) durante il periodo necessario alla strutturazione della vendita.",
    },

    {
      type: "h2",
      text: "I riparti dell'attivo",
      id: "riparti-attivo",
    },
    {
      type: "p",
      text: "Man mano che la liquidazione produce liquidità, il curatore distribuisce le somme ai creditori secondo l'ordine delle cause di prelazione, attraverso riparti parziali e, alla chiusura della procedura, attraverso il riparto finale. I riparti seguono un piano predisposto dal curatore, approvato dal giudice delegato e comunicato ai creditori, che possono presentare osservazioni o opposizioni nei termini di legge (art. 220 CCII).",
    },
    {
      type: "p",
      text: "L'ordine dei pagamenti rispecchia la gerarchia delle cause di prelazione: in primo luogo i crediti prededucibili (spese di procedura, retribuzioni del curatore, finanziamenti autorizzati, ecc., art. 6 CCII); poi i crediti garantiti da pegno e ipoteca, nei limiti del valore del bene oggetto di prelazione; quindi i privilegi speciali sui beni mobili e immobili; poi i privilegi generali (retribuzioni dei lavoratori, crediti tributari, contributi previdenziali, ecc.); infine i crediti chirografari, che sono soddisfatti pari passu in proporzione del loro ammontare, secondo la percentuale risultante dal patrimonio residuo. I creditori postergati (art. 2467 c.c. per le società di capitali) vengono soddisfatti solo dopo l'integrale pagamento dei chirografari.",
    },

    {
      type: "image",
      src: heroLawyer,
      alt: "Avvocato esamina la documentazione di una procedura di liquidazione giudiziale",
      caption:
        "La struttura della liquidazione giudiziale ricalca quella del fallimento ma introduce novità rilevanti in materia di organi, revocatorie ed esdebitazione.",
    },

    {
      type: "h2",
      text: "La chiusura della procedura",
      id: "chiusura-procedura",
    },
    {
      type: "p",
      text: "La procedura si chiude con decreto del Tribunale (art. 233 CCII) quando si verifica una delle cause previste dalla legge: integrale soddisfacimento dei creditori; ripartizione finale dell'attivo; insufficienza dell'attivo a coprire le spese di procedura (chiusura per insufficienza); mancata presentazione di domande di insinuazione. Il decreto di chiusura è soggetto a reclamo e produce l'effetto di liberare il debitore dal vincolo dello spossessamento.",
    },
    {
      type: "p",
      text: "La chiusura per insufficienza dell'attivo è frequente nelle procedure aperte su istanza dei creditori contro debitori con patrimonio largamente eroso. In questi casi, dopo la verifica che non vi sono utilità da liquidare e che le spese di procedura sono coperte, il Tribunale chiude la procedura. La chiusura non pregiudica i creditori per la parte non soddisfatta: i crediti restano dovuti, salvo che il debitore persona fisica non acceda all'esdebitazione ai sensi dell'art. 278 CCII (esdebitazione di diritto).",
    },
    {
      type: "p",
      text: "Quando emergano successivamente beni non considerati o nuove sopravvenienze, è possibile la riapertura della procedura (art. 234 CCII), purché ricorrano determinati presupposti e l'attivo recuperabile sia sufficiente a coprire le spese e a soddisfare almeno parzialmente i creditori. La riapertura è strumento residuale, attivato dal curatore o da uno o più creditori, e segue le regole proprie della procedura ordinaria.",
    },

    {
      type: "h2",
      text: "L'esdebitazione della persona fisica (art. 278 CCII)",
      id: "esdebitazione-persona-fisica",
    },
    {
      type: "p",
      text: "Una delle innovazioni più significative del CCII è la disciplina dell'esdebitazione della persona fisica, contenuta negli artt. 278-283. Si tratta del beneficio che consente al debitore persona fisica, sottoposto a liquidazione giudiziale, di vedersi cancellare i debiti residui non soddisfatti dalla procedura, ottenendo così la possibilità di un 'fresh start' (fresh start, ripartenza). È un istituto di chiara matrice europea, ispirato alla Direttiva Insolvency e ai modelli anglosassoni.",
    },
    {
      type: "p",
      text: "Il CCII distingue due fattispecie principali: l'esdebitazione di diritto (art. 282), che opera automaticamente al verificarsi di determinate condizioni; l'esdebitazione concessa dal Tribunale (art. 280), su istanza del debitore, all'esito di una valutazione di meritevolezza. Entrambe le fattispecie comportano l'estinzione dei debiti residui per la parte non soddisfatta, con esclusione di alcune categorie di debiti (debiti per obbligazioni alimentari, risarcimenti per fatto illecito da reato, sanzioni penali e amministrative).",
    },

    {
      type: "h2",
      text: "L'esdebitazione di diritto (art. 282 CCII)",
      id: "esdebitazione-di-diritto",
    },
    {
      type: "p",
      text: "L'art. 282 CCII introduce l'esdebitazione di diritto: il debitore persona fisica, sottoposto a liquidazione giudiziale, è esdebitato automaticamente al verificarsi cumulativo di alcune condizioni, senza necessità di un autonomo provvedimento giudiziale di concessione. Le condizioni sono: la persona fisica non deve aver beneficiato dell'esdebitazione nei cinque anni precedenti; non deve aver subito condanne per bancarotta fraudolenta o altri reati assimilati; deve aver cooperato lealmente con gli organi della procedura; non deve aver compiuto atti in frode ai creditori.",
    },
    {
      type: "p",
      text: "L'esdebitazione di diritto opera, in linea di principio, decorsi tre anni dall'apertura della liquidazione giudiziale, oppure prima di tale termine in caso di chiusura della procedura. È un meccanismo molto favorevole al debitore persona fisica, che vede tutelato il proprio diritto al fresh start senza dover attendere passivamente un provvedimento discrezionale del Tribunale. Tuttavia, i creditori e il pubblico ministero possono opporre la mancata sussistenza dei requisiti, dando luogo a un giudizio di accertamento negativo.",
    },
    {
      type: "p",
      text: "Restano esclusi dall'esdebitazione, in ogni caso (art. 278, comma 3, CCII): i debiti per obbligazioni di mantenimento e alimenti; i debiti da risarcimento del danno cagionato da fatto illecito extracontrattuale qualificato da dolo; le sanzioni penali e amministrative di natura non tributaria; i debiti per multe e penali strettamente personali. L'IVA e le ritenute non versate sono invece esdebitabili, in coerenza con l'orientamento della giurisprudenza europea e con le successive modifiche della disciplina italiana (Corte costituzionale n. 245/2019; Corte di Giustizia UE in materia di IVA).",
    },

    {
      type: "table",
      headers: [
        "Fattispecie",
        "Norma",
        "Beneficio",
        "Limite temporale",
      ],
      rows: [
        [
          "Esdebitazione di diritto",
          "Art. 282 CCII",
          "Automatica al ricorrere dei requisiti",
          "3 anni dall'apertura o chiusura procedura",
        ],
        [
          "Esdebitazione concessa",
          "Art. 280 CCII",
          "Su istanza, valutazione del Tribunale",
          "Dopo la chiusura della procedura",
        ],
        [
          "Esdebitazione incapiente",
          "Art. 283 CCII",
          "Persona fisica senza patrimonio",
          "Una sola volta nella vita",
        ],
        [
          "Esdebitazione sovraindebitato",
          "Artt. 282-283 CCII",
          "Per debitori non assoggettabili a LG",
          "Soggetta a meritevolezza",
        ],
      ],
    },

    {
      type: "h2",
      text: "Le procedure operative: dalle istanze alla chiusura",
      id: "procedure-operative",
    },
    {
      type: "p",
      text: "Per orientarsi nella procedura di liquidazione giudiziale, sia dal punto di vista del debitore sia da quello del creditore, è utile riassumere i passaggi operativi essenziali. La conoscenza dei tempi e delle scadenze consente di esercitare correttamente i propri diritti e di evitare decadenze.",
    },
    {
      type: "ol",
      items: [
        "Predisposizione e deposito dell'istanza: redazione del ricorso al Tribunale competente, con allegazione della documentazione probatoria dello stato di insolvenza (decreti ingiuntivi, precetti, pignoramenti, mancati pagamenti, protesti).",
        "Procedimento prefallimentare: il Tribunale fissa l'udienza, ascolta il debitore, valuta le prove, eventualmente dispone accertamenti tecnici.",
        "Sentenza di apertura: in caso di accoglimento, il Tribunale dichiara aperta la liquidazione giudiziale, nomina giudice delegato e curatore, fissa l'adunanza di verifica.",
        "Spossessamento e prime attività del curatore: inventario, presa in consegna dei beni, accesso ai conti, comunicazioni a banche e clienti, sospensione delle azioni esecutive individuali.",
        "Domande di insinuazione al passivo: i creditori presentano le loro domande con allegazione dei titoli, entro 30 giorni prima dell'adunanza fissata dal Tribunale.",
        "Adunanza di verifica e formazione dello stato passivo: il giudice delegato decide su ciascuna domanda, formando lo stato passivo provvisorio.",
        "Programma di liquidazione: il curatore presenta il programma entro 60 giorni dall'inventario, sottoponendolo all'approvazione del comitato e del giudice delegato.",
        "Esercizio di azioni revocatorie e risarcitorie: il curatore valuta e attiva tutte le azioni utili alla ricostruzione del patrimonio.",
        "Liquidazione dell'attivo: vendite competitive dei beni, eventualmente preceduti da gestione provvisoria dell'impresa o affitto d'azienda.",
        "Riparti parziali e finali: distribuzione delle somme ai creditori secondo l'ordine delle cause di prelazione.",
        "Chiusura della procedura: per integrale soddisfacimento, ripartizione finale o insufficienza dell'attivo.",
        "Esdebitazione del debitore persona fisica: di diritto (art. 282) o su istanza (art. 280), nei termini e con i presupposti di legge.",
      ],
    },

    {
      type: "h2",
      text: "I reati nella liquidazione giudiziale",
      id: "reati-liquidazione",
    },
    {
      type: "p",
      text: "Il CCII ha mantenuto, pur con aggiornamenti terminologici, la struttura dei reati previsti dalla previgente disciplina fallimentare. Le fattispecie principali sono disciplinate dagli artt. 322 ss. CCII e comprendono: bancarotta fraudolenta patrimoniale (art. 322 CCII); bancarotta fraudolenta documentale (art. 322, comma 2, CCII); bancarotta semplice patrimoniale (art. 323 CCII); bancarotta semplice documentale (art. 323, comma 2, CCII); ricorso abusivo al credito (art. 325 CCII); reati del curatore e degli altri organi della procedura (artt. 333-336 CCII).",
    },
    {
      type: "p",
      text: "La bancarotta fraudolenta patrimoniale punisce l'imprenditore (o l'amministratore, se trattasi di società) che ha distratto, occultato, dissimulato o distrutto i beni dell'impresa, con la finalità di arrecare pregiudizio ai creditori. È fattispecie particolarmente grave, con pene da 3 a 10 anni di reclusione. La bancarotta fraudolenta documentale punisce chi ha sottratto, distrutto o falsificato le scritture contabili, rendendone difficile la ricostruzione del patrimonio o del movimento degli affari.",
    },
    {
      type: "p",
      text: "Le pene previste per i reati di bancarotta sono significative e comportano, oltre alla reclusione, l'interdizione dall'esercizio di un'impresa commerciale e dagli uffici direttivi delle imprese (art. 331 CCII), con durate variabili a seconda della gravità del fatto. La prescrizione segue le regole ordinarie ma decorre dalla sentenza di apertura della liquidazione giudiziale. Le indagini sono condotte dal pubblico ministero, anche su segnalazione del curatore, che ha l'obbligo di denuncia per i fatti penalmente rilevanti emersi nel corso della procedura (art. 130 CCII).",
    },

    {
      type: "note",
      text: "Per gli amministratori delle società in liquidazione giudiziale, i profili penali rappresentano un rischio rilevante. Una gestione documentata, trasparente e tempestiva — anche nelle fasi di crisi conclamata — riduce significativamente il rischio di contestazioni penali. Affidarsi a un legale specializzato in diritto penale dell'impresa è essenziale fin dalle prime fasi della procedura, soprattutto in presenza di indagini in corso.",
    },

    {
      type: "h2",
      text: "Confronto con altre procedure",
      id: "confronto-procedure",
    },
    {
      type: "p",
      text: "La liquidazione giudiziale è l'estrema procedura del sistema concorsuale italiano, attivata quando le procedure di regolazione preventiva non sono praticabili o sono fallite. Il CCII offre un ventaglio di strumenti alternativi, da preferire ogniqualvolta possibile per la maggiore flessibilità e per i migliori risultati per debitore e creditori.",
    },
    {
      type: "table",
      headers: [
        "Procedura",
        "Stato richiesto",
        "Continuità",
        "Tempi medi",
      ],
      rows: [
        [
          "Composizione negoziata",
          "Crisi o pre-crisi",
          "Sì",
          "3-12 mesi",
        ],
        [
          "Accordo di ristrutturazione",
          "Crisi/insolvenza",
          "Sì",
          "6-12 mesi",
        ],
        [
          "Concordato in continuità",
          "Crisi/insolvenza",
          "Sì",
          "8-14 mesi",
        ],
        [
          "Concordato liquidatorio",
          "Crisi/insolvenza",
          "No",
          "6-10 mesi",
        ],
        [
          "Concordato semplificato",
          "Post-composizione negoziata",
          "No",
          "4-8 mesi",
        ],
        [
          "Liquidazione giudiziale",
          "Insolvenza conclamata",
          "No (salvo esercizio provvisorio)",
          "24-60 mesi",
        ],
      ],
    },

    {
      type: "h2",
      text: "Profili applicativi e casistica",
      id: "casistica",
    },
    {
      type: "p",
      text: "Nella pratica forense la liquidazione giudiziale si manifesta in scenari molto eterogenei. I casi più ricorrenti includono: la società di capitali a esposizione bancaria significativa che, dopo il fallimento di un tentativo di concordato, viene aperta su istanza di una banca creditrice; la società di persone con piccoli debiti tributari accumulati che porta alla liquidazione giudiziale 'per estensione' dei soci illimitatamente responsabili; l'impresa individuale del settore edile o manifatturiero che ha cessato l'attività con un'esposizione consolidata verso fornitori, banche, Fisco e dipendenti; la holding di famiglia con partecipazioni in società operative, che subisce la procedura per insolvenza propria.",
    },
    {
      type: "p",
      text: "Particolare delicatezza presentano i casi di liquidazione giudiziale di società di gruppo, dove la posizione delle controllate e delle controllanti può richiedere coordinamento procedurale (artt. 284 ss. CCII). Anche le ipotesi di liquidazione giudiziale internazionale, con beni o creditori in più giurisdizioni, presentano complessità rilevanti, regolate dal Regolamento UE 2015/848 sulle procedure di insolvenza e dalle convenzioni bilaterali.",
    },
    {
      type: "p",
      text: "Sotto il profilo del recupero, le percentuali medie di soddisfacimento dei creditori nelle procedure di liquidazione giudiziale italiane sono storicamente basse: secondo i dati ISTAT e Cerved, i creditori chirografari recuperano in media tra il 5% e il 15% dei crediti, contro percentuali significativamente più alte nei concordati in continuità (mediamente 25-45% per i chirografari). I privilegiati ipotecari recuperano in media tra il 60% e il 90%. Le tempistiche medie restano significative: una procedura di media complessità si chiude in 4-6 anni.",
    },

    {
      type: "h2",
      text: "Cosa fare se si riceve un'istanza di liquidazione giudiziale",
      id: "ricezione-istanza",
    },
    {
      type: "p",
      text: "Se l'imprenditore riceve notifica di un'istanza di apertura di liquidazione giudiziale presentata da un creditore o dal pubblico ministero, è essenziale agire tempestivamente. La fase prefallimentare offre opportunità di difesa significative, sia sotto il profilo procedurale (contestazione dei presupposti) sia sotto quello sostanziale (eventuale attivazione di procedure di regolazione della crisi). La consulenza di un legale specializzato è imprescindibile.",
    },
    {
      type: "p",
      text: "Le opzioni difensive principali sono: contestazione del superamento delle soglie dimensionali; contestazione dello stato di insolvenza, dimostrando la temporaneità delle difficoltà o la disponibilità di risorse; contestazione del credito su cui si fonda l'istanza (titolo, importo, esigibilità); attivazione di una procedura di concordato preventivo o di accordo di ristrutturazione, con conseguente prevalenza della procedura di regolazione sulla liquidazione giudiziale; accesso alla composizione negoziata della crisi, che blocca temporaneamente l'apertura della liquidazione giudiziale.",
    },
    {
      type: "p",
      text: "Il principio di prevalenza delle procedure di regolazione (art. 7 CCII) è cardine: se il debitore presenta una domanda di concordato preventivo o di altra procedura di regolazione contestualmente o anche dopo la presentazione dell'istanza di liquidazione giudiziale, il Tribunale deve esaminarla con priorità. Solo se la procedura di regolazione non è ammissibile o non offre alternativa concreta alla liquidazione, il Tribunale procederà all'apertura della procedura liquidatoria.",
    },

    {
      type: "h2",
      text: "Il ruolo del professionista nella procedura",
      id: "ruolo-professionista",
    },
    {
      type: "p",
      text: "Il ricorso a un professionista qualificato — avvocato, commercialista, advisor finanziario — è uno snodo critico per chi è coinvolto, a qualunque titolo, in una liquidazione giudiziale. Per il debitore, il professionista valuta la posizione, individua le strategie difensive o le procedure alternative praticabili, assiste nella documentazione, rappresenta in giudizio. Per il creditore, segue la verifica dei crediti, prepara la domanda di insinuazione, valuta le opportunità di partecipazione al comitato dei creditori, segue le opposizioni e i riparti.",
    },
    {
      type: "p",
      text: "Anche i terzi (acquirenti di beni dalla procedura, terzi titolari di diritti reali, fideiussori) possono trovare nel professionista un riferimento essenziale per orientarsi nei complessi rapporti che la procedura genera. La qualità tecnica della consulenza è particolarmente importante in considerazione delle conseguenze patrimoniali e, talora, penali della procedura. I tempi lunghi della liquidazione giudiziale rendono inoltre essenziale un'organizzazione documentale ordinata, che consenta al professionista di seguire la procedura con efficienza.",
    },

    {
      type: "image",
      src: heroHope,
      alt: "Imprenditore che guarda al futuro dopo l'esdebitazione",
      caption:
        "L'esdebitazione della persona fisica al termine della liquidazione giudiziale (artt. 278-282 CCII) restituisce concretamente al debitore la possibilità di ripartire.",
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
          q: "Qual è la differenza tra fallimento e liquidazione giudiziale?",
          a: "Dal 15 luglio 2022, con l'entrata in vigore organica del Codice della Crisi (D.lgs. 14/2019), il fallimento è stato sostituito dalla liquidazione giudiziale. La struttura della procedura è in larga parte la medesima — sentenza di apertura, spossessamento, divieto azioni individuali, stato passivo, liquidazione, riparti — ma il CCII ha introdotto novità sostanziali: l'esdebitazione di diritto della persona fisica (art. 282), una nuova disciplina delle revocatorie (artt. 163-170), un rinnovato sistema di organi, e ha eliminato lo stigma terminologico del 'fallimento'. La continuità sostanziale con la previgente disciplina resta evidente.",
        },
        {
          q: "Chi può essere sottoposto a liquidazione giudiziale?",
          a: "Possono essere sottoposti a liquidazione giudiziale gli imprenditori commerciali che superino almeno una delle tre soglie dimensionali dell'art. 2, comma 1, lett. d), CCII: attivo patrimoniale oltre 300.000 euro nei tre esercizi precedenti, ricavi lordi oltre 200.000 euro nei tre esercizi precedenti, debiti oltre 500.000 euro. Sono esclusi imprenditori agricoli, piccoli imprenditori sotto-soglia, consumatori, professionisti e enti pubblici. Le società di persone sono soggette alla procedura, e la dichiarazione di liquidazione giudiziale si estende ai soci illimitatamente responsabili (art. 256 CCII).",
        },
        {
          q: "Cosa succede al debitore dopo la sentenza di apertura?",
          a: "Con la sentenza di apertura il debitore subisce lo spossessamento (art. 142 CCII): perde l'amministrazione e la disponibilità dei propri beni, che passano al curatore. Conserva i beni strettamente personali (vestiti, beni d'uso quotidiano), i crediti personali (alimenti) e la parte di stipendio/pensione necessaria al mantenimento. Non perde la capacità giuridica né quella d'agire, ma è limitato nei rapporti patrimoniali della massa. Ha obbligo di collaborazione con il curatore. Se persona fisica, può accedere all'esdebitazione di diritto (art. 282) decorsi i termini di legge.",
        },
        {
          q: "Come si presenta domanda di insinuazione al passivo?",
          a: "Il creditore presenta la domanda di insinuazione al curatore della procedura entro 30 giorni prima dell'adunanza di verifica fissata dal Tribunale. La domanda contiene: identificazione del creditore, indicazione del titolo (contratto, sentenza, decreto ingiuntivo, ecc.), importo del credito, eventuale prelazione richiesta (ipoteca, pegno, privilegio), atti probatori. La domanda va sottoscritta dal creditore e, ove necessario, dal difensore. Il curatore esamina la domanda e propone al giudice delegato l'ammissione o l'esclusione. Le contestazioni si propongono mediante opposizione allo stato passivo (art. 206 CCII).",
        },
        {
          q: "Quali sono i tempi medi di una liquidazione giudiziale?",
          a: "I tempi della liquidazione giudiziale dipendono dalla complessità della procedura, dalla composizione del patrimonio, dal numero dei creditori e dalle eventuali azioni revocatorie da svolgere. Per una procedura di media complessità, i tempi medi sono di 3-6 anni dalla sentenza di apertura alla chiusura. Procedure semplici, con pochi beni e pochi creditori, possono chiudersi in 12-24 mesi. Procedure complesse, con immobili da liquidare, azioni in corso e contenzioso significativo, possono richiedere oltre 6-8 anni. L'esdebitazione di diritto (art. 282) decorre comunque dopo 3 anni dall'apertura, indipendentemente dalla chiusura.",
        },
        {
          q: "Cos'è l'esdebitazione e come si ottiene?",
          a: "L'esdebitazione è il beneficio che consente al debitore persona fisica, sottoposto a liquidazione giudiziale, di vedersi cancellare i debiti residui non soddisfatti dalla procedura. Il CCII distingue tra esdebitazione di diritto (art. 282), che opera automaticamente al verificarsi dei requisiti dopo 3 anni dall'apertura della procedura, ed esdebitazione concessa dal Tribunale (art. 280), su istanza del debitore. Restano esclusi i debiti per obbligazioni alimentari, i risarcimenti per fatto illecito doloso e le sanzioni penali. È uno strumento fondamentale per il fresh start del debitore persona fisica.",
        },
        {
          q: "Quali azioni può promuovere il curatore?",
          a: "Il curatore può promuovere una pluralità di azioni: revocatorie ordinarie (art. 165 CCII) e revocatorie fallimentari (artt. 166-167 CCII) per riportare nel patrimonio beni o somme uscite nel periodo sospetto; azioni di responsabilità contro amministratori, sindaci e revisori per violazione dei doveri di gestione (artt. 255 ss. CCII); azioni risarcitorie contro terzi; azioni per il recupero di crediti dell'imprenditore; azioni di nullità o inefficacia. È sua facoltà-dovere valutare costi e benefici di ciascuna azione, anche in funzione del recupero per la massa.",
        },
        {
          q: "Cosa accade ai lavoratori dipendenti?",
          a: "Con l'apertura della liquidazione giudiziale, salvi i casi di esercizio provvisorio dell'impresa o affitto d'azienda, i rapporti di lavoro dipendente sono risolti. I lavoratori hanno diritto al TFR e alle ultime tre mensilità di retribuzione, garantite dal Fondo di Garanzia INPS (art. 2 L. 297/1982 e art. 23 CCII). I crediti retributivi maturati godono del privilegio dell'art. 2751-bis n. 1 c.c. e sono soddisfatti con priorità nel piano dei riparti. In caso di cessione o affitto d'azienda si applica l'art. 2112 c.c., con conservazione dei rapporti e responsabilità solidale.",
        },
        {
          q: "Quali debiti non sono esdebitabili?",
          a: "Ai sensi dell'art. 278, comma 3, CCII, restano esclusi dall'esdebitazione: i debiti per obbligazioni alimentari e di mantenimento (art. 433 c.c.); i debiti per risarcimento del danno cagionato da fatto illecito extracontrattuale doloso (escluso colposo, salvo casi specifici); le sanzioni penali e le sanzioni amministrative di natura non tributaria; le multe e le pene pecuniarie strettamente personali. Sono invece esdebitabili IVA, ritenute non versate e altri debiti tributari, in coerenza con l'orientamento della Corte costituzionale n. 245/2019 e della giurisprudenza europea.",
        },
        {
          q: "Si può fare opposizione alla sentenza di apertura?",
          a: "Sì, la sentenza di apertura della liquidazione giudiziale è impugnabile entro 30 giorni dalla notificazione (art. 51 CCII), con reclamo alla Corte d'Appello competente. L'opposizione può fondarsi su difetto dei presupposti (mancato superamento delle soglie, mancanza dello stato di insolvenza, debito inferiore alla soglia minima), vizi procedurali, errori di diritto. Durante il giudizio di reclamo la procedura prosegue regolarmente, salvo che la Corte non sospenda l'efficacia esecutiva per gravi motivi. Il rigetto del reclamo conferma la procedura; l'accoglimento la revoca e libera il debitore.",
        },
        {
          q: "Si può chiudere la procedura per insufficienza di attivo?",
          a: "Sì, l'art. 233 CCII prevede la chiusura della procedura quando l'attivo è insufficiente a coprire le spese di procedura e a soddisfare almeno parzialmente i creditori. È situazione frequente nelle procedure aperte contro debitori con patrimonio largamente eroso. La chiusura per insufficienza non pregiudica i crediti non soddisfatti, che restano dovuti, salvo l'eventuale accesso del debitore persona fisica all'esdebitazione di diritto (art. 282 CCII). In caso di sopravvenienze, la procedura può essere riaperta (art. 234 CCII) se le nuove utilità consentono almeno la copertura delle spese.",
        },
        {
          q: "Conviene presentare istanza in proprio?",
          a: "L'istanza in proprio del debitore (art. 37 CCII) può essere conveniente quando la crisi è ormai degenerata in insolvenza irreversibile e nessuna procedura di regolazione (concordato, accordo, PRO) è praticabile. Consente al debitore di scegliere il momento di apertura, di organizzare la documentazione e di accedere ai benefici dell'esdebitazione di diritto al termine della procedura. Tuttavia, prima di valutare l'istanza in proprio, conviene esplorare le procedure alternative: la composizione negoziata della crisi, in particolare, è strumento volontario e riservato che può evitare la liquidazione giudiziale. La consulenza di un professionista è essenziale.",
        },
      ],
    },

    {
      type: "h2",
      text: "Conclusioni: la liquidazione giudiziale come strumento sistemico",
      id: "conclusioni",
    },
    {
      type: "p",
      text: "La liquidazione giudiziale, pur restando la procedura concorsuale 'di chiusura' del sistema, è oggi inserita in un quadro normativo che ne arricchisce significativamente la funzione. La struttura conserva la fisionomia del vecchio fallimento, ma le innovazioni introdotte dal CCII — esdebitazione di diritto della persona fisica, rinnovate revocatorie, organi rinforzati, dialogo con le procedure di regolazione preventiva — la rendono uno strumento più equilibrato, capace di salvaguardare i creditori senza pregiudicare in modo definitivo il debitore meritevole.",
    },
    {
      type: "p",
      text: "Per l'imprenditore in difficoltà, la liquidazione giudiziale resta l'ultima opzione, da attivare solo quando le procedure di regolazione non siano praticabili. Per il creditore, conoscere la procedura, presentare tempestivamente la domanda di insinuazione, esercitare il diritto di voto e di partecipazione al comitato sono passaggi essenziali per massimizzare il recupero. Per il sistema, la liquidazione giudiziale rappresenta il presidio di chiusura, indispensabile per garantire l'efficacia complessiva del sistema concorsuale e la tutela della par condicio creditorum.",
    },

    {
      type: "image",
      src: abstractHopeBg,
      alt: "Sfondo astratto che simboleggia ripresa e fresh start",
      caption:
        "L'esdebitazione di diritto al termine della liquidazione giudiziale è il principio cardine del fresh start nel sistema concorsuale italiano riformato.",
    },
  ],
};
