import type { Article } from "../articles";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";

export const article: Article = {
  slug: "concordato-preventivo",
  title: "Concordato preventivo: la procedura per le imprese in crisi nel nuovo Codice della Crisi",
  excerpt: "Guida tecnica al concordato preventivo nel CCII (D.lgs. 14/2019): presupposti, concordato in continuità e liquidatorio, classi creditori, attestatore, voto, omologazione, transazione fiscale.",
  category: "Imprese",
  date: "Maggio 2026",
  readTime: "22 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: handshakeTrust,
  keywords: [
    "concordato preventivo",
    "CCII art 84",
    "crisi impresa",
    "ristrutturazione debiti impresa",
    "continuità aziendale",
  ],
  intro:
    "Il concordato preventivo è la principale procedura di regolazione della crisi e dell'insolvenza prevista dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Consente all'imprenditore commerciale che si trovi in stato di crisi o di insolvenza reversibile di proporre ai creditori un piano di ristrutturazione del debito, in alternativa alla liquidazione giudiziale. La riforma ha rafforzato la centralità della continuità aziendale, ampliato gli strumenti di transazione fiscale e ridefinito i quorum di voto. Questa guida ne ricostruisce in modo organico presupposti, varianti, procedimento e profili operativi.",
  content: [
    {
      type: "h2",
      text: "Cos'è il concordato preventivo nel CCII",
      id: "cos-e-il-concordato-preventivo",
    },
    {
      type: "p",
      text: "Il concordato preventivo è disciplinato dagli artt. 84 e seguenti del Codice della Crisi d'Impresa e dell'Insolvenza (CCII, D.lgs. 14/2019, in vigore nella sua versione organica dal 15 luglio 2022 e modificato in modo significativo dal D.lgs. 83/2022 di recepimento della Direttiva UE 2019/1023, c.d. Direttiva Insolvency). Si tratta di una procedura concorsuale di regolazione della crisi o dell'insolvenza che si propone di evitare la liquidazione giudiziale (ex fallimento) attraverso un accordo sostanziale fra l'imprenditore e i creditori, omologato dal Tribunale.",
    },
    {
      type: "p",
      text: "La funzione del concordato è duplice: da un lato consente all'impresa di proseguire l'attività quando essa abbia ancora capacità di generare valore (concordato in continuità); dall'altro, quando la prosecuzione non sia possibile, permette di gestire in modo ordinato la liquidazione del patrimonio (concordato liquidatorio), garantendo ai creditori una soddisfazione superiore a quella che otterrebbero in sede di liquidazione giudiziale. Il principio del miglior soddisfacimento dei creditori (best interest of creditors test, art. 84, comma 5, CCII) è uno dei pilastri della disciplina.",
    },
    {
      type: "p",
      text: "Rispetto alla previgente disciplina della Legge Fallimentare (R.D. 267/1942), il CCII ha rafforzato la centralità della continuità aziendale, ridefinito i quorum di voto, esteso la possibilità di formare classi obbligatorie, introdotto il cross-class cram-down per il concordato in continuità e potenziato lo strumento della transazione fiscale e contributiva (art. 88 CCII).",
    },

    {
      type: "h2",
      text: "Presupposti soggettivi: chi può accedere",
      id: "presupposti-soggettivi",
    },
    {
      type: "p",
      text: "Il concordato preventivo è riservato all'imprenditore commerciale soggetto a liquidazione giudiziale. Sono dunque legittimati gli imprenditori che esercitano un'attività commerciale ai sensi dell'art. 2195 c.c. e che superano congiuntamente le soglie dimensionali fissate dall'art. 2, comma 1, lett. d), CCII. La norma, riprendendo in larga parte la previgente formulazione dell'art. 1 L.F., individua tre soglie alternative: l'attivo patrimoniale superiore a 300.000 euro nei tre esercizi precedenti, i ricavi lordi superiori a 200.000 euro nei tre esercizi precedenti, l'ammontare di debiti anche non scaduti superiore a 500.000 euro.",
    },
    {
      type: "p",
      text: "Il superamento anche di una sola di tali soglie comporta l'assoggettabilità a liquidazione giudiziale e, quindi, la legittimazione attiva al concordato. Per converso, l'imprenditore commerciale sotto-soglia (il c.d. piccolo imprenditore o imprenditore minore) accede alle procedure di composizione delle crisi da sovraindebitamento (concordato minore, ristrutturazione del consumatore, liquidazione controllata), e non al concordato preventivo. Anche l'imprenditore agricolo, in linea con l'art. 2135 c.c., è escluso dalla liquidazione giudiziale e dal concordato preventivo: per esso il CCII prevede il concordato minore e gli accordi di ristrutturazione (art. 2, comma 2, CCII).",
    },
    {
      type: "p",
      text: "Sono ammessi al concordato anche i gruppi di imprese, ai sensi degli artt. 284 ss. CCII, che disciplinano la regolazione concordataria di gruppo. La proposta unitaria, pur preservando l'autonomia delle masse attive e passive di ciascuna società, consente economie procedurali e una visione d'insieme della crisi.",
    },

    {
      type: "h2",
      text: "Presupposti oggettivi: crisi e insolvenza",
      id: "presupposti-oggettivi",
    },
    {
      type: "p",
      text: "L'art. 85 CCII consente l'accesso al concordato all'imprenditore che si trovi in stato di crisi o di insolvenza. Le due nozioni sono distinte dall'art. 2 CCII: per 'crisi' si intende lo stato del debitore che rende probabile l'insolvenza e che si manifesta come inadeguatezza dei flussi di cassa prospettici a far fronte alle obbligazioni nei dodici mesi successivi; per 'insolvenza' si intende lo stato del debitore che si manifesta con inadempimenti od altri fatti esteriori, i quali dimostrino che il debitore non è più in grado di soddisfare regolarmente le proprie obbligazioni.",
    },
    {
      type: "p",
      text: "L'inclusione esplicita dello stato di crisi fra i presupposti del concordato — assente nella formulazione originaria della L.F. — riflette l'impostazione preventiva del CCII: il legislatore incentiva l'emersione tempestiva della crisi, prima che essa degeneri in insolvenza irreversibile. Coerentemente con tale logica, anche la composizione negoziata della crisi (artt. 17 ss. CCII) e gli strumenti di allerta operano in fase precoce, lasciando al concordato il ruolo di procedura formale di ristrutturazione.",
    },

    {
      type: "image",
      src: handshakeTrust,
      alt: "Stretta di mano fra imprenditore e advisor durante una trattativa di concordato",
      caption:
        "Il concordato preventivo si fonda su un accordo sostanziale fra l'impresa e i creditori, costruito attraverso un piano e attestato da un professionista indipendente.",
    },

    {
      type: "h2",
      text: "Concordato in continuità aziendale (art. 84, comma 3, CCII)",
      id: "concordato-continuita",
    },
    {
      type: "p",
      text: "Il concordato in continuità aziendale è la forma privilegiata dal CCII: l'impresa prosegue l'attività e i creditori vengono soddisfatti con i flussi generati dalla continuazione del business, oltre che dall'eventuale dismissione di asset non strategici. La continuità può essere diretta, quando l'attività è proseguita dallo stesso debitore, o indiretta, quando essa è continuata da un terzo (cessionario, conferitario, affittuario d'azienda) in forza di un contratto stipulato in funzione del concordato (art. 84, comma 2, CCII).",
    },
    {
      type: "p",
      text: "Nella continuità diretta l'imprenditore conserva la gestione dell'impresa, sotto la vigilanza del commissario giudiziale e con i limiti agli atti di straordinaria amministrazione che richiedono autorizzazione del giudice delegato (art. 94 CCII). Nella continuità indiretta, invece, l'azienda passa a un nuovo soggetto giuridico: l'affitto d'azienda, in particolare, è spesso lo strumento ponte tra il deposito della domanda e l'omologazione, perché consente di preservare il valore d'avviamento e di mantenere occupazione mentre si struttura la cessione definitiva.",
    },
    {
      type: "p",
      text: "Il concordato in continuità non è subordinato al pagamento di una percentuale minima di soddisfacimento dei creditori chirografari (a differenza del liquidatorio). Ciò che conta è che i creditori ricevano un'utilità economicamente apprezzabile e che il piano sia fattibile sotto il profilo economico (fattibilità economica) e giuridico. L'attestatore, con la relazione di cui all'art. 87 CCII, certifica la veridicità dei dati aziendali e la fattibilità del piano, mentre il Tribunale verifica la fattibilità giuridica e l'assenza di manifesta inidoneità del piano a soddisfare i creditori (così Cass. SU 1521/2013, principio confermato anche nella nuova disciplina).",
    },

    {
      type: "h2",
      text: "Concordato liquidatorio (art. 84, comma 4, CCII)",
      id: "concordato-liquidatorio",
    },
    {
      type: "p",
      text: "Il concordato liquidatorio prevede la cessazione dell'attività e la dismissione dell'intero patrimonio dell'impresa per il soddisfacimento dei creditori. È una procedura volutamente meno favorevole rispetto al concordato in continuità: il CCII impone infatti il rispetto di precisi requisiti minimi di soddisfacimento, finalizzati a evitare un uso opportunistico dello strumento.",
    },
    {
      type: "p",
      text: "Il concordato liquidatorio è ammissibile solo se: (i) l'apporto di risorse esterne incrementi di almeno il 10 per cento il valore di liquidazione del patrimonio (c.d. finanza esterna); (ii) sia garantito ai creditori chirografari il pagamento di almeno il 20 per cento dell'ammontare complessivo dei loro crediti. Si tratta di soglie minime non derogabili, salvo i casi di transazione fiscale e contributiva che seguono regole specifiche. L'apporto di finanza esterna deve essere effettivo e documentato: tipicamente proviene da soci, terzi investitori o garanti, e deve essere reso disponibile in modo certo nei tempi previsti dal piano.",
    },

    {
      type: "table",
      headers: [
        "Caratteristica",
        "Concordato in continuità",
        "Concordato liquidatorio",
      ],
      rows: [
        [
          "Soglia minima per chirografari",
          "Nessuna soglia di legge (utilità economicamente apprezzabile)",
          "Almeno 20% dei chirografari",
        ],
        [
          "Finanza esterna",
          "Non obbligatoria",
          "Obbligatoria, almeno +10% del valore di liquidazione",
        ],
        [
          "Attività d'impresa",
          "Prosecuzione (diretta o indiretta)",
          "Cessazione e dismissione patrimonio",
        ],
        [
          "Classi obbligatorie",
          "Sì, per tutte le categorie omogenee",
          "Facoltative, salvo creditori con interessi giuridici differenti",
        ],
        [
          "Cross-class cram-down",
          "Ammesso (art. 112, comma 2, CCII)",
          "Non ammesso",
        ],
        [
          "Termine medio di omologazione",
          "8-14 mesi dal deposito",
          "6-10 mesi dal deposito",
        ],
        [
          "Posizione lavoratori",
          "Tendenziale prosecuzione rapporti di lavoro",
          "Cessazione con TFR e crediti privilegiati",
        ],
      ],
    },

    {
      type: "h2",
      text: "Il piano concordatario e l'attestazione",
      id: "piano-e-attestazione",
    },
    {
      type: "p",
      text: "Il piano concordatario è il documento centrale della procedura: descrive le modalità con cui l'imprenditore intende soddisfare i creditori, indica le risorse, i tempi, le garanzie, le ipotesi di stress e i flussi attesi. L'art. 87 CCII ne disciplina puntualmente il contenuto, richiedendo, fra l'altro, la descrizione dell'attività e delle cause della crisi, l'illustrazione delle strategie di risanamento, l'analisi della convenienza per i creditori rispetto alla liquidazione giudiziale, l'indicazione dei tempi di adempimento e degli strumenti di garanzia.",
    },
    {
      type: "p",
      text: "Il piano deve essere accompagnato dalla relazione dell'attestatore, professionista indipendente designato dal debitore (art. 2, comma 1, lett. o, CCII), iscritto al registro dei revisori legali e nell'albo dei gestori della crisi. L'attestatore certifica la veridicità dei dati aziendali, redige il c.d. test di fattibilità del piano e, nel concordato in continuità, attesta espressamente che la continuazione dell'attività è funzionale al miglior soddisfacimento dei creditori. La sua responsabilità è significativa: l'art. 342 CCII prevede sanzioni penali per le false attestazioni.",
    },
    {
      type: "p",
      text: "Il piano deve rispettare i principi della Absolute Priority Rule (art. 84, comma 6, CCII, nel concordato liquidatorio) e della Relative Priority Rule (art. 84, comma 6, CCII, nel concordato in continuità, ai sensi della Direttiva Insolvency). In sintesi: nel liquidatorio i creditori di rango superiore devono essere integralmente soddisfatti prima che quelli di rango inferiore ricevano qualcosa; in continuità è sufficiente che i creditori di rango superiore siano trattati in modo non meno favorevole di quelli di rango inferiore.",
    },

    {
      type: "h2",
      text: "Classi di creditori e voto",
      id: "classi-e-voto",
    },
    {
      type: "p",
      text: "L'art. 85 CCII disciplina la suddivisione dei creditori in classi. Nel concordato in continuità la formazione di classi è obbligatoria per tutti i creditori che presentino posizione giuridica e interessi economici omogenei (per esempio: chirografari finanziari, chirografari fornitori strategici, creditori postergati, soci finanziatori). Nel concordato liquidatorio le classi sono facoltative, salvo si tratti di creditori con interessi giuridicamente differenziati (per esempio creditori privilegiati incapienti, contestati, condizionati).",
    },
    {
      type: "p",
      text: "Il voto avviene per classi (art. 109 CCII). La proposta è approvata se: nel concordato in continuità, è approvata da tutte le classi a maggioranza dei crediti ammessi al voto; nel concordato liquidatorio, è approvata dalla maggioranza dei crediti ammessi al voto, calcolata sull'insieme delle classi. Possono votare i creditori chirografari, i privilegiati nella parte non soddisfatta integralmente e i creditori postergati. I creditori integralmente soddisfatti non votano (art. 109, comma 2, CCII).",
    },
    {
      type: "p",
      text: "Lo strumento del cross-class cram-down (art. 112, comma 2, CCII), introdotto in attuazione della Direttiva Insolvency, consente al Tribunale di omologare il concordato in continuità anche in caso di dissenso di una o più classi, purché siano rispettati determinati requisiti: la proposta è approvata da almeno una classe di creditori che riceverebbe un pagamento qualora si applicasse la graduazione tipica della liquidazione, la proposta tratta in modo non meno favorevole le classi dissenzienti rispetto a quelle di pari rango e in modo migliore rispetto alle classi di rango inferiore, e nessun creditore riceve più dell'ammontare del proprio credito.",
    },

    {
      type: "note",
      text: "La corretta strutturazione delle classi è un'operazione tecnica delicatissima: errori di classamento possono comportare la mancata omologazione o l'opposizione di creditori dissenzienti. È buona prassi consultare preventivamente i principali creditori istituzionali (banche, leasing, fornitori strategici, Agenzia delle Entrate-Riscossione) per testare il consenso prima del deposito formale.",
    },

    {
      type: "h2",
      text: "La domanda di concordato: deposito e accesso",
      id: "domanda-deposito",
    },
    {
      type: "p",
      text: "La domanda di concordato preventivo si presenta al Tribunale del luogo in cui l'impresa ha la sede principale (art. 27 CCII). Il deposito può avvenire in due modalità: con domanda completa di piano e proposta, accompagnata dalla relazione dell'attestatore; oppure con domanda 'in bianco' o 'con riserva' (art. 44 CCII), nella quale il debitore si riserva di presentare la proposta, il piano e l'attestazione entro un termine fissato dal Tribunale, da 30 a 60 giorni, prorogabili fino a un massimo complessivo di 120 giorni.",
    },
    {
      type: "p",
      text: "La domanda con riserva è uno strumento prezioso quando l'impresa, pur trovandosi in crisi, ha bisogno di tempo per finalizzare il piano e raccogliere il consenso dei principali creditori. Dal momento del deposito il debitore beneficia delle misure protettive (stay), che sospendono le azioni esecutive e cautelari individuali dei creditori (art. 54 CCII) e fissano il c.d. blocco delle azioni esecutive. Le misure protettive devono essere richieste espressamente e sono confermate dal Tribunale entro 30 giorni dal deposito.",
    },

    {
      type: "h2",
      text: "L'apertura della procedura e gli organi",
      id: "apertura-organi",
    },
    {
      type: "p",
      text: "Verificata l'ammissibilità della domanda, il Tribunale apre la procedura con decreto, nominando il giudice delegato e il commissario giudiziale (art. 47 CCII). Il commissario giudiziale è la figura cardine della procedura: vigila sull'attività del debitore, redige la relazione particolareggiata sulle cause della crisi e sulla condotta dell'imprenditore, predispone il prospetto di voto, riferisce al giudice e ai creditori. Non sostituisce il debitore nella gestione, salvo nei casi di revoca dell'ammissione o di particolari autorizzazioni.",
    },
    {
      type: "p",
      text: "Durante la procedura, gli atti di ordinaria amministrazione restano nella competenza del debitore. Gli atti di straordinaria amministrazione (vendite, mutui, transazioni, concessioni di garanzia, costituzione di pegni) richiedono l'autorizzazione del giudice delegato (art. 94 CCII), sentito il commissario giudiziale. È inoltre prevista la prededucibilità per i crediti sorti in funzione o in occasione del concordato, purché autorizzati o conformi al piano (art. 6 CCII).",
    },

    {
      type: "h2",
      text: "Effetti del deposito: misure protettive e contratti pendenti",
      id: "effetti-deposito",
    },
    {
      type: "p",
      text: "Dal deposito della domanda di concordato (anche con riserva), su istanza del debitore, il Tribunale può disporre misure protettive che impediscono ai creditori di iniziare o proseguire azioni esecutive e cautelari sul patrimonio del debitore (art. 54 CCII). Le misure protettive si estendono anche ai creditori privilegiati e ipotecari e bloccano l'acquisizione di nuovi diritti di prelazione, salvo accordo o autorizzazione del giudice.",
    },
    {
      type: "p",
      text: "Sui contratti pendenti, l'art. 97 CCII dispone che essi proseguano regolarmente. Il debitore può chiedere al giudice delegato l'autorizzazione a sospenderne l'esecuzione per non più di 60 giorni, prorogabili una sola volta, o a sciogliersi dal contratto, con previsione di indennizzo per la controparte (creditore concorsuale). Per i contratti di lavoro restano applicabili le tutele del lavoro subordinato e la disciplina del trasferimento d'azienda di cui all'art. 2112 c.c., con le specifiche deroghe previste dal CCII nelle ipotesi di concordato in continuità con cessione/affitto d'azienda.",
    },

    {
      type: "h2",
      text: "Transazione fiscale e contributiva (art. 88 CCII)",
      id: "transazione-fiscale",
    },
    {
      type: "p",
      text: "Uno degli strumenti più importanti del concordato è la transazione fiscale e contributiva, disciplinata dall'art. 88 CCII (corrispondente, nella vigenza della L.F., all'art. 182-ter). Consente al debitore di proporre il pagamento, parziale o dilazionato, dei tributi e dei contributi previdenziali, compresa l'IVA e le ritenute non versate, all'interno del piano concordatario, derogando al principio di indisponibilità della pretesa erariale.",
    },
    {
      type: "p",
      text: "La proposta di transazione deve essere accompagnata da un'attestazione specifica dell'attestatore, il quale deve certificare che il trattamento riservato all'Erario e agli enti previdenziali non sia inferiore a quello che essi conseguirebbero in caso di liquidazione giudiziale. L'Agenzia delle Entrate, l'Agenzia delle Entrate-Riscossione, l'INPS e gli altri enti coinvolti esprimono il voto sulla proposta nei termini ordinari della procedura. In caso di dissenso (mancata adesione o silenzio), il Tribunale può comunque procedere all'omologazione tramite cram-down fiscale (art. 88, comma 2-bis, CCII), purché ricorrano determinati presupposti, fra cui la convenienza della proposta rispetto alla liquidazione giudiziale.",
    },
    {
      type: "p",
      text: "Il cram-down fiscale, introdotto dal D.lgs. 83/2022 e poi affinato dai successivi correttivi, ha modificato radicalmente la posizione del Fisco nella procedura: l'amministrazione non ha più un potere di veto sostanziale, e la valutazione di convenienza è demandata al Tribunale. La giurisprudenza, tanto di merito quanto di legittimità (Cass. 8504/2021, Cass. 27782/2023), si è progressivamente assestata nel ritenere ammissibile l'omologazione anche in caso di dissenso dell'erario, purché la proposta sia genuinamente conveniente.",
    },

    {
      type: "h2",
      text: "Percentuali minime di soddisfacimento dei creditori",
      id: "percentuali-minime",
    },
    {
      type: "p",
      text: "La disciplina delle percentuali minime di soddisfacimento dei creditori varia in funzione del tipo di concordato e della tipologia di credito. Nel concordato in continuità non vi è una percentuale minima di legge per i chirografari, ma il piano deve garantire un'utilità economicamente apprezzabile e il rispetto del best interest test. Nel concordato liquidatorio è fissata la soglia minima del 20 per cento per i chirografari e l'obbligo di apporto di finanza esterna di almeno il 10 per cento.",
    },
    {
      type: "p",
      text: "Per i creditori privilegiati, ipotecari e pignoratizi vige la regola del soddisfacimento non inferiore al valore di realizzo del bene gravato dalla prelazione, valore che deve essere stimato da un perito indipendente. Se il valore di liquidazione del bene è inferiore al credito, la differenza viene degradata a chirografo e segue il regime dei chirografari. Per i crediti privilegiati generali si applica analogo principio, parametrato sul valore di realizzo dell'intero patrimonio mobiliare.",
    },

    {
      type: "table",
      headers: [
        "Categoria creditore",
        "Trattamento minimo concordato in continuità",
        "Trattamento minimo concordato liquidatorio",
      ],
      rows: [
        [
          "Privilegiati ipotecari",
          "Non inferiore al valore di realizzo bene",
          "Non inferiore al valore di realizzo bene",
        ],
        [
          "Privilegiati generali",
          "Non inferiore al valore di realizzo mobiliare",
          "Non inferiore al valore di realizzo mobiliare",
        ],
        [
          "Erario/INPS",
          "Soggetti a transazione fiscale art. 88",
          "Soggetti a transazione fiscale art. 88",
        ],
        [
          "Chirografari",
          "Utilità economicamente apprezzabile",
          "Almeno 20%",
        ],
        [
          "Postergati",
          "Pagamento subordinato",
          "Pagamento subordinato",
        ],
        [
          "Crediti prededucibili",
          "Integrale (salvo accordo)",
          "Integrale (salvo accordo)",
        ],
      ],
    },

    {
      type: "h2",
      text: "Le fasi del procedimento",
      id: "fasi-procedimento",
    },
    {
      type: "p",
      text: "Dal deposito della domanda all'esecuzione del piano, il concordato preventivo si snoda lungo una sequenza di passaggi procedurali precisi. Conoscere le fasi è essenziale per pianificare i tempi e organizzare le risorse interne dell'impresa, in particolare quelle finanziarie e legali. Di seguito i passaggi operativi più importanti.",
    },
    {
      type: "ol",
      items: [
        "Analisi preliminare della crisi: l'imprenditore, supportato da advisor legale e finanziario, valuta lo stato dell'impresa, i flussi di cassa prospettici, la posizione debitoria e l'eventuale percorribilità della composizione negoziata o di un concordato.",
        "Predisposizione del piano: viene redatto il piano industriale e finanziario, con proiezioni pluriennali, ipotesi di stress, e identificazione delle classi di creditori.",
        "Nomina dell'attestatore: il debitore designa un professionista indipendente che esamina i dati aziendali e redige la relazione di attestazione.",
        "Deposito della domanda al Tribunale: la domanda può essere completa o con riserva (art. 44 CCII), accompagnata da una serie di documenti tassativamente elencati.",
        "Richiesta di misure protettive: il debitore chiede l'applicazione dello stay sulle azioni esecutive e cautelari individuali.",
        "Apertura della procedura: il Tribunale verifica i presupposti, nomina giudice delegato e commissario giudiziale, fissa l'adunanza dei creditori e i termini per la votazione.",
        "Verifica dei crediti: i creditori sono convocati e il commissario predispone l'elenco dei crediti e la relazione particolareggiata.",
        "Votazione: i creditori esprimono il voto per classi nei termini fissati (in genere 30-60 giorni).",
        "Omologazione: in caso di approvazione (e, ove necessario, di cram-down), il Tribunale procede al giudizio di omologazione, valutando opposizioni e legittimità del piano.",
        "Esecuzione: il commissario giudiziale (o il liquidatore giudiziale nel concordato liquidatorio) vigila sull'esecuzione del piano e riferisce al giudice fino alla chiusura della procedura.",
      ],
    },

    {
      type: "h2",
      text: "Il voto dei creditori",
      id: "voto-creditori",
    },
    {
      type: "p",
      text: "Il voto dei creditori è momento centrale della procedura. Si svolge secondo le modalità fissate dal Tribunale: storicamente avveniva in adunanza, oggi sempre più spesso in via telematica, con piattaforme dedicate e PEC. I creditori ammessi al voto sono quelli risultanti dall'elenco predisposto dal commissario, integrati delle eventuali variazioni decise dal giudice delegato a seguito di contestazioni.",
    },
    {
      type: "p",
      text: "La proposta è approvata se ottiene il voto favorevole della maggioranza dei crediti ammessi al voto. Nel concordato in continuità tale maggioranza deve essere raggiunta in ciascuna classe; nel concordato liquidatorio è sufficiente la maggioranza complessiva, con l'ulteriore requisito che, in presenza di più classi, sia raggiunta la maggioranza in almeno la metà delle classi. Il silenzio dei creditori vale come voto contrario, salvo che il Tribunale non disponga diversamente nel decreto di apertura.",
    },

    {
      type: "h2",
      text: "L'omologazione",
      id: "omologazione",
    },
    {
      type: "p",
      text: "Approvato il concordato dai creditori, il Tribunale procede al giudizio di omologazione (art. 112 CCII), nel quale verifica la regolarità formale e sostanziale della procedura, la legittimità del piano, il rispetto delle norme imperative e dell'ordine delle cause di prelazione, l'inesistenza di vizi del consenso. Sono ammesse le opposizioni dei creditori dissenzienti, che possono contestare la convenienza della proposta rispetto alla liquidazione giudiziale o la legittimità della procedura.",
    },
    {
      type: "p",
      text: "Il Tribunale può omologare il concordato anche in caso di dissenso di una o più classi, attivando il meccanismo del cross-class cram-down, purché ricorrano i presupposti di legge. Una volta omologato, il concordato è vincolante per tutti i creditori anteriori alla data di pubblicazione della domanda nel registro delle imprese, anche se dissenzienti o non votanti.",
    },

    {
      type: "h2",
      text: "L'esecuzione del piano e la chiusura",
      id: "esecuzione-chiusura",
    },
    {
      type: "p",
      text: "L'esecuzione del piano è la fase in cui il concordato viene reso effettivo: i creditori vengono pagati secondo le percentuali, i tempi e le modalità previsti dalla proposta omologata. Nel concordato liquidatorio viene nominato un liquidatore giudiziale, che procede alla vendita degli asset e ai riparti. Nel concordato in continuità è invece il debitore stesso a dare esecuzione al piano, sotto la vigilanza del commissario giudiziale.",
    },
    {
      type: "p",
      text: "Il Tribunale dichiara la chiusura della procedura quando il piano è stato integralmente eseguito o quando sono stati eseguiti gli atti essenziali e residuino solo pagamenti dilazionati garantiti. In caso di inadempimento significativo (art. 119 CCII) può essere disposta la risoluzione del concordato, con riapertura della procedura concorsuale e possibile conversione in liquidazione giudiziale. La risoluzione è prevista anche quando il piano risulti irrealizzabile o gli organi della procedura accertino dolo o frode del debitore.",
    },

    {
      type: "note",
      text: "Nel concordato in continuità la fase esecutiva ha una particolare delicatezza: la combinazione fra il rispetto degli impegni del piano e la gestione corrente dell'impresa richiede competenze manageriali, finanziarie e legali integrate. La presenza di un controllo costante dei flussi e una governance dedicata alla procedura riducono significativamente il rischio di risoluzione.",
    },

    {
      type: "h2",
      text: "Confronto fra concordato e altre procedure",
      id: "confronto-procedure",
    },
    {
      type: "p",
      text: "Il CCII offre all'imprenditore in crisi un ventaglio di strumenti, ciascuno con presupposti, tempi e finalità diversi. La scelta dello strumento più adatto dipende da molti fattori: la gravità dello stato di crisi, la presenza di consenso dei creditori, la struttura del debito, le prospettive di continuità, la disponibilità di finanza esterna. Di seguito un confronto sintetico fra il concordato e gli altri strumenti principali.",
    },
    {
      type: "table",
      headers: [
        "Strumento",
        "Presupposto",
        "Necessità voto creditori",
        "Idoneità a continuità",
      ],
      rows: [
        [
          "Composizione negoziata",
          "Crisi o pre-crisi",
          "No (trattativa volontaria)",
          "Alta",
        ],
        [
          "Accordo di ristrutturazione (art. 57 CCII)",
          "Crisi/insolvenza, consenso 60% crediti",
          "Sì (60% adesione)",
          "Alta",
        ],
        [
          "Piano di ristrutturazione soggetto a omologazione (PRO, art. 64-bis)",
          "Crisi/insolvenza",
          "Sì (per classi)",
          "Alta",
        ],
        [
          "Concordato preventivo",
          "Crisi o insolvenza",
          "Sì (per classi)",
          "Alta (continuità) o nulla (liquidatorio)",
        ],
        [
          "Liquidazione giudiziale",
          "Insolvenza",
          "No",
          "Nulla",
        ],
      ],
    },

    {
      type: "h2",
      text: "Casistica pratica e profili applicativi",
      id: "casistica",
    },
    {
      type: "p",
      text: "Nella pratica forense il concordato preventivo trova applicazione in scenari molto eterogenei. Tra i casi più ricorrenti: l'impresa industriale con esposizione bancaria elevata che opta per un concordato in continuità diretta con consolidamento del debito e nuova finanza ponte; la società immobiliare che propone un concordato liquidatorio con cessione dell'intero portafoglio immobiliare e apporto di finanza esterna; il gruppo di società che presenta un concordato unitario ai sensi degli artt. 284 ss. CCII; la holding che ricorre alla continuità indiretta tramite affitto d'azienda e successiva cessione del ramo operativo a un investitore industriale.",
    },
    {
      type: "p",
      text: "Particolare attenzione meritano i casi di concordato di gruppo, in cui la procedura coordina la regolazione della crisi di più società appartenenti al medesimo gruppo. Il CCII consente la presentazione di una proposta unitaria, con piani coordinati e attestazione consolidata, pur preservando l'autonomia delle masse attive e passive di ciascuna società. La giurisprudenza ha gradualmente affinato i criteri di ammissibilità e di voto, soprattutto in relazione ai conflitti d'interesse tra creditori comuni a più società del gruppo.",
    },
    {
      type: "p",
      text: "Sotto il profilo dei rapporti con i lavoratori, il concordato in continuità tendenzialmente preserva i rapporti di lavoro e i relativi crediti retributivi. I crediti pregressi dei lavoratori, assistiti dal privilegio di cui all'art. 2751-bis n. 1 c.c., vanno trattati nel piano con priorità. Nel concordato liquidatorio la cessazione dell'attività comporta la risoluzione dei rapporti di lavoro e l'intervento del Fondo di Garanzia INPS per il TFR e le ultime tre mensilità retributive.",
    },

    {
      type: "h2",
      text: "Errori frequenti e come evitarli",
      id: "errori-frequenti",
    },
    {
      type: "p",
      text: "L'esperienza professionale insegna che molti concordati naufragano per errori evitabili. Tra i più frequenti: il deposito tardivo, quando la crisi è ormai degenerata in insolvenza irreversibile; la sottostima del fabbisogno finanziario e la conseguente impossibilità di garantire i pagamenti previsti dal piano; la sovrastima dei flussi di cassa prospettici nel concordato in continuità; la trascuratezza nei rapporti con il Fisco e con gli enti previdenziali, che porta spesso al voto contrario senza adeguata trattazione preventiva; la classamento errato dei creditori, che può comportare l'inammissibilità della proposta o l'opposizione di creditori dissenzienti.",
    },
    {
      type: "p",
      text: "Un ulteriore errore frequente è la sottovalutazione del ruolo del commissario giudiziale: la sua relazione particolareggiata pesa enormemente sull'esito del voto e dell'omologazione. Un dialogo trasparente e collaborativo con il commissario, fin dalle prime fasi della procedura, è uno dei fattori critici di successo. Altrettanto importante è la qualità tecnica dell'attestazione, che deve essere puntuale, motivata e supportata da evidenze documentali solide.",
    },

    {
      type: "image",
      src: authorityLegal,
      alt: "Codice della Crisi e martello del giudice sul banco del Tribunale",
      caption:
        "Il CCII (D.lgs. 14/2019) ha riorganizzato in modo unitario la disciplina della crisi d'impresa, rafforzando gli strumenti di continuità e prevedendo il cross-class cram-down nel concordato preventivo.",
    },

    {
      type: "h2",
      text: "Profili penali e responsabilità",
      id: "profili-penali",
    },
    {
      type: "p",
      text: "Il concordato preventivo non sospende automaticamente i profili di responsabilità penale dell'imprenditore. I reati di bancarotta fraudolenta, bancarotta semplice e i delitti previsti dagli artt. 322 ss. CCII restano applicabili. In particolare, l'art. 341 CCII punisce l'imprenditore che presenta una domanda di concordato con dolo o colpa grave, esponendo dati falsi o omettendo informazioni rilevanti. Le false attestazioni del professionista designato dal debitore sono punite dall'art. 342 CCII.",
    },
    {
      type: "p",
      text: "Sotto il profilo della responsabilità civile, gli amministratori e i sindaci della società debitrice possono essere chiamati a rispondere per il ritardo nella richiesta di accesso al concordato (responsabilità da illegittima prosecuzione dell'attività), per l'aggravamento del dissesto, per la violazione dei doveri di gestione conservativa del patrimonio (art. 2486 c.c.). Il CCII ha rafforzato gli obblighi di emersione tempestiva della crisi e gli strumenti di responsabilizzazione degli organi sociali, sebbene il sistema dell'allerta sia stato significativamente ridimensionato rispetto al testo originario del 2019.",
    },

    {
      type: "note",
      text: "L'attivazione tempestiva del concordato — o, prima ancora, della composizione negoziata — è uno scudo essenziale contro le azioni di responsabilità nei confronti degli amministratori. Continuare l'attività in stato di crisi conclamata, senza attivare gli strumenti previsti dal Codice, espone l'amministratore a un rischio personale rilevante, sia sotto il profilo civilistico sia, nei casi più gravi, sotto quello penale.",
    },

    {
      type: "h2",
      text: "Tempi medi e costi della procedura",
      id: "tempi-costi",
    },
    {
      type: "p",
      text: "I tempi medi del concordato preventivo, dal deposito all'omologazione, oscillano tra 8 e 14 mesi per il concordato in continuità e tra 6 e 10 mesi per il liquidatorio. La fase di esecuzione può durare ulteriori 24-60 mesi, a seconda dell'orizzonte temporale del piano. Tempi più contenuti caratterizzano gli accordi di ristrutturazione e il PRO (Piano di Ristrutturazione soggetto a Omologazione, art. 64-bis CCII), che però richiedono soglie di adesione preventiva da parte dei creditori.",
    },
    {
      type: "p",
      text: "I costi della procedura comprendono: compensi del commissario giudiziale (parametrati al D.M. 30/2012 e successive modificazioni), compensi dell'attestatore (a parcella libera), compensi degli advisor legali e finanziari del debitore, contributo unificato (art. 9 D.P.R. 115/2002), spese per perizie e stime, eventuali compensi per il liquidatore giudiziale. Per un'impresa di media dimensione, l'incidenza complessiva dei costi di procedura sull'attivo concorda con la quota di liquidazione e può oscillare tra l'1,5% e il 5%.",
    },

    {
      type: "h2",
      text: "Concordato semplificato per la liquidazione del patrimonio",
      id: "concordato-semplificato",
    },
    {
      type: "p",
      text: "Una menzione a parte merita il concordato semplificato per la liquidazione del patrimonio, disciplinato dall'art. 25-sexies CCII. È uno strumento riservato all'imprenditore che, all'esito di una composizione negoziata della crisi conclusasi senza accordo, intenda proporre ai creditori la liquidazione del proprio patrimonio. La caratteristica peculiare è l'assenza del voto dei creditori: l'omologazione spetta direttamente al Tribunale, che valuta la fattibilità del piano, la convenienza per i creditori rispetto alla liquidazione giudiziale e l'assenza di pregiudizio.",
    },
    {
      type: "p",
      text: "Il concordato semplificato è stato pensato come strumento di chiusura ordinata della crisi quando il tentativo di risanamento è fallito. Pur essendo procedura snella, richiede un'attenta predisposizione del piano e un confronto preventivo con i creditori durante la composizione negoziata, perché l'esito dipende in larga parte dalla qualità del lavoro svolto in quella fase.",
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
          q: "Chi può presentare domanda di concordato preventivo?",
          a: "Possono accedere al concordato preventivo gli imprenditori commerciali soggetti a liquidazione giudiziale, ossia quelli che esercitano un'attività commerciale ai sensi dell'art. 2195 c.c. e superano una delle tre soglie dimensionali fissate dall'art. 2, comma 1, lett. d), CCII: attivo patrimoniale oltre 300.000 euro nei tre esercizi precedenti, ricavi lordi oltre 200.000 euro nei tre esercizi precedenti, debiti oltre 500.000 euro. Sono esclusi imprenditori agricoli, piccoli imprenditori sotto-soglia, professionisti, consumatori: per costoro il CCII prevede gli strumenti del sovraindebitamento e della composizione delle crisi del consumatore.",
        },
        {
          q: "Quale differenza c'è tra concordato in continuità e concordato liquidatorio?",
          a: "Nel concordato in continuità (art. 84, comma 3, CCII) l'impresa prosegue l'attività e i creditori vengono soddisfatti con i flussi futuri del business: non è prevista una percentuale minima di legge per i chirografari, purché sia garantita un'utilità economicamente apprezzabile. Nel concordato liquidatorio (art. 84, comma 4, CCII) l'attività cessa, il patrimonio è dismesso e i chirografari devono ricevere almeno il 20% dei loro crediti, con apporto di finanza esterna pari ad almeno il 10% del valore di liquidazione. Il CCII privilegia la continuità, in linea con la Direttiva Insolvency.",
        },
        {
          q: "Cosa cambia tra domanda completa e domanda con riserva?",
          a: "La domanda con riserva (art. 44 CCII), o domanda 'in bianco', consente al debitore di accedere alle misure protettive depositando inizialmente solo la domanda, riservandosi di presentare entro un termine fissato dal Tribunale (da 30 a 60 giorni, prorogabili fino a 120) la proposta, il piano e l'attestazione. È utile quando l'impresa ha bisogno di tempo per finalizzare il piano e raccogliere il consenso dei creditori. La domanda completa, invece, è già accompagnata da tutta la documentazione, e accelera i tempi della procedura.",
        },
        {
          q: "Quali misure protettive si possono ottenere?",
          a: "Le misure protettive previste dall'art. 54 CCII sospendono le azioni esecutive e cautelari individuali dei creditori sul patrimonio del debitore e impediscono l'acquisizione di nuovi diritti di prelazione, salvo accordo o autorizzazione del giudice. Si estendono anche ai creditori privilegiati e ipotecari. Sono concesse dal Tribunale con decreto, su istanza del debitore, e devono essere confermate entro 30 giorni dalla pubblicazione della domanda nel registro delle imprese. La loro durata coincide con quella della procedura, salvo revoca per giusta causa.",
        },
        {
          q: "Come funziona la transazione fiscale ai sensi dell'art. 88 CCII?",
          a: "La transazione fiscale e contributiva (art. 88 CCII) consente al debitore di proporre il pagamento parziale o dilazionato di tributi e contributi, compresi IVA e ritenute non versate, all'interno del piano concordatario. La proposta deve essere attestata dal professionista indipendente come non meno conveniente, per il Fisco, della liquidazione giudiziale. In caso di dissenso o silenzio dell'Erario, il Tribunale può comunque procedere all'omologazione tramite cram-down fiscale (art. 88, comma 2-bis), valutando la convenienza in modo autonomo. È uno strumento essenziale per gestire i debiti tributari delle imprese in crisi.",
        },
        {
          q: "Cos'è il cross-class cram-down?",
          a: "Il cross-class cram-down (art. 112, comma 2, CCII) è uno strumento introdotto in attuazione della Direttiva Insolvency che consente al Tribunale di omologare il concordato in continuità anche in caso di dissenso di una o più classi di creditori, purché siano rispettati determinati requisiti: la proposta sia approvata da almeno una classe di creditori 'in the money', tratti in modo non meno favorevole le classi dissenzienti rispetto a quelle di pari rango e in modo migliore rispetto a quelle di rango inferiore, e nessun creditore riceva più del valore del proprio credito. È uno strumento che ha rafforzato la capacità di omologazione di piani complessi.",
        },
        {
          q: "Chi è l'attestatore e qual è il suo ruolo?",
          a: "L'attestatore è un professionista indipendente designato dal debitore, iscritto al registro dei revisori legali e nell'albo dei gestori della crisi (art. 2, comma 1, lett. o, CCII). Il suo ruolo è certificare la veridicità dei dati aziendali e attestare la fattibilità del piano. Nel concordato in continuità deve inoltre attestare che la prosecuzione dell'attività è funzionale al miglior soddisfacimento dei creditori. La sua responsabilità è elevata: l'art. 342 CCII prevede sanzioni penali per le false attestazioni. La qualità dell'attestazione incide significativamente sull'esito della procedura.",
        },
        {
          q: "Cosa succede ai contratti in corso?",
          a: "I contratti pendenti, ai sensi dell'art. 97 CCII, proseguono regolarmente dopo il deposito della domanda. Il debitore può chiedere al giudice delegato l'autorizzazione a sospendere l'esecuzione per non più di 60 giorni, prorogabili una sola volta, o a sciogliersi dal contratto, con previsione di indennizzo per la controparte (creditore concorsuale). Per i contratti di lavoro restano applicabili le tutele del lavoro subordinato; per i contratti di locazione, leasing e somministrazione vi sono regole specifiche. È buona prassi mappare i contratti strategici prima del deposito.",
        },
        {
          q: "Cosa accade ai lavoratori dipendenti?",
          a: "Nel concordato in continuità i rapporti di lavoro tendono a proseguire, e i crediti retributivi maturati sono assistiti dal privilegio di cui all'art. 2751-bis n. 1 c.c. (con priorità di trattamento nel piano). Nel concordato liquidatorio i rapporti vengono risolti e i lavoratori possono accedere al Fondo di Garanzia INPS per il TFR e le ultime tre mensilità retributive. In caso di cessione o affitto d'azienda si applica l'art. 2112 c.c., con le specifiche deroghe previste dal CCII e dagli accordi sindacali eventualmente raggiunti per la salvaguardia dell'occupazione.",
        },
        {
          q: "Cosa succede se il concordato viene approvato e poi non si esegue?",
          a: "In caso di inadempimento significativo del piano, l'art. 119 CCII prevede la risoluzione del concordato su istanza di un creditore, del commissario giudiziale o del pubblico ministero. La risoluzione è dichiarata dal Tribunale con sentenza e comporta la riapertura della procedura concorsuale: a seconda della situazione patrimoniale dell'impresa, può sfociare in liquidazione giudiziale. La risoluzione è prevista anche quando il piano risulti irrealizzabile o emergano comportamenti dolosi del debitore. È quindi fondamentale costruire piani realistici e mantenere una governance attenta nella fase esecutiva.",
        },
        {
          q: "Quali sono i tempi medi della procedura?",
          a: "I tempi medi del concordato preventivo, dal deposito all'omologazione, oscillano tra 8 e 14 mesi nel concordato in continuità e tra 6 e 10 mesi nel liquidatorio. La fase esecutiva può durare ulteriori 24-60 mesi, a seconda dell'orizzonte temporale del piano e della natura degli asset da liquidare. I tempi possono variare in funzione del carico di lavoro del Tribunale competente, della complessità del piano e delle eventuali opposizioni. Il PRO (Piano di Ristrutturazione soggetto a Omologazione, art. 64-bis CCII) e gli accordi di ristrutturazione possono essere più rapidi.",
        },
        {
          q: "Conviene attivare prima la composizione negoziata?",
          a: "Spesso sì. La composizione negoziata (artt. 17 ss. CCII) è uno strumento volontario, riservato, condotto con l'assistenza di un esperto indipendente, che consente all'imprenditore di trattare con i creditori senza accedere a una procedura concorsuale. Se ha successo, può sfociare in un accordo di ristrutturazione, in un piano attestato di risanamento o in un contratto. Se fallisce, è possibile ricorrere al concordato semplificato per la liquidazione del patrimonio (art. 25-sexies CCII), o ai tradizionali strumenti concorsuali. È una tappa intermedia utile in molti scenari, soprattutto quando la crisi è ancora reversibile.",
        },
      ],
    },

    {
      type: "h2",
      text: "Conclusioni operative",
      id: "conclusioni",
    },
    {
      type: "p",
      text: "Il concordato preventivo, nella sua nuova veste codicistica, è uno strumento articolato che richiede competenze multidisciplinari: legale, finanziaria, fiscale, manageriale. La sua efficacia dipende dalla tempestività dell'attivazione, dalla qualità del piano, dal coinvolgimento dei creditori principali e dalla capacità di costruire una proposta realistica e attestabile. Il CCII, soprattutto dopo le modifiche del D.lgs. 83/2022 e dei successivi correttivi, offre un ventaglio di strumenti di flessibilità — dalla composizione negoziata al PRO, dal concordato in continuità al concordato semplificato — che consentono di calibrare la risposta alla crisi sulle caratteristiche specifiche di ogni impresa.",
    },
    {
      type: "p",
      text: "Per l'imprenditore in crisi, la prima e più importante decisione è quella di non rinviare l'analisi della situazione: il valore dell'impresa si conserva intervenendo quando il deterioramento è ancora reversibile. Il concordato preventivo, da questo punto di vista, non va inteso come ultima spiaggia ma come strumento di regolazione, capace di preservare valore, occupazione e relazioni con il mercato, restituendo all'impresa risanata un orizzonte di sostenibilità.",
    },

    {
      type: "image",
      src: ctaHandshake,
      alt: "Stretta di mano tra imprenditore e advisor legale dopo l'omologazione del concordato",
      caption:
        "Una procedura ben strutturata e condotta con tempestività può restituire all'impresa una prospettiva concreta di continuità e sviluppo.",
    },
  ],
};
