import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "liquidazione-controllata-sovraindebitato",
  title: "Liquidazione controllata del sovraindebitato (artt. 268-277 CCII): come funziona, durata, esdebitazione finale",
  excerpt: "Guida completa alla liquidazione controllata del sovraindebitato disciplinata dagli artt. 268-277 CCII: presupposti, ruolo dell'OCC e del liquidatore, durata triennale, beni esclusi ed esdebitazione finale.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "18 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: authorityLegal,
  keywords: ["liquidazione controllata", "sovraindebitamento", "artt 268 CCII", "liquidazione patrimoniale", "esdebitazione persona fisica"],
  intro: "La liquidazione controllata del sovraindebitato, disciplinata dagli artt. 268-277 del Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019), rappresenta la principale procedura concorsuale liquidatoria a disposizione del debitore civile, del consumatore, del professionista e del piccolo imprenditore non assoggettabile a liquidazione giudiziale. È lo strumento attraverso cui il patrimonio viene posto a disposizione dei creditori sotto il controllo del tribunale, con esiti che — in presenza dei presupposti di legge — possono condurre all'esdebitazione finale e alla restituzione al debitore della piena capacità economica.",
  content: [
    { type: "h2", text: "Inquadramento generale della liquidazione controllata", id: "inquadramento-generale" },
    { type: "p", text: "La liquidazione controllata è la procedura che, all'interno della disciplina del sovraindebitamento del CCII, sostituisce e riforma la precedente liquidazione del patrimonio prevista dalla L. n. 3/2012. Si tratta di una procedura concorsuale liquidatoria, conformata alla logica della par condicio creditorum, che ha la funzione di destinare il patrimonio aggredibile del debitore alla soddisfazione, in tutto o in parte, dei crediti, secondo l'ordine delle cause di prelazione." },
    { type: "p", text: "A differenza delle procedure ristrutturative (ristrutturazione dei debiti del consumatore e concordato minore), la liquidazione controllata non presuppone un piano di rientro né richiede l'approvazione dei creditori: il fulcro è la dismissione del patrimonio per il tramite di un liquidatore nominato dal tribunale. Il debitore conserva tuttavia diritti e garanzie rilevanti, primo fra tutti il diritto di accedere — in presenza dei presupposti — all'esdebitazione del residuo non soddisfatto." },
    { type: "p", text: "La collocazione sistematica della procedura all'interno del CCII (artt. 268-277, Capo IX del Titolo IV) ne sottolinea il carattere di alternativa concorsuale rispetto alla liquidazione giudiziale ex art. 121 CCII, riservata ai debitori 'assoggettabili': la liquidazione controllata serve proprio i soggetti che, per dimensione o natura, restano fuori dal perimetro della liquidazione giudiziale e che fino al 2019 disponevano soltanto degli strumenti rudimentali della L. n. 3/2012." },

    { type: "image", src: authorityLegal, alt: "Tribunale e procedura concorsuale liquidatoria", caption: "La liquidazione controllata si svolge sotto il controllo del tribunale, con un liquidatore nominato d'ufficio." },

    { type: "h2", text: "Presupposti soggettivi: chi può accedere", id: "presupposti-soggettivi" },
    { type: "p", text: "L'art. 268 CCII individua come destinatari della procedura tutti i debitori in stato di sovraindebitamento che non sono assoggettabili alla liquidazione giudiziale. La nozione di sovraindebitamento è fornita dall'art. 2, comma 1, lett. c) CCII: si tratta dello stato di crisi o insolvenza del consumatore, del professionista, dell'imprenditore minore, dell'imprenditore agricolo, delle start-up innovative e di ogni altro debitore non assoggettabile alle procedure maggiori." },
    { type: "p", text: "Possono dunque accedere alla liquidazione controllata, in via esemplificativa, i seguenti soggetti: il consumatore (anche cessato), il professionista (avvocato, commercialista, ingegnere, medico, ecc.), il piccolo imprenditore commerciale sotto le soglie dimensionali dell'art. 2, comma 1, lett. d), l'imprenditore agricolo, l'imprenditore individuale cessato da non oltre un anno, le società che non superano le soglie di assoggettabilità alla liquidazione giudiziale e le start-up innovative iscritte nella relativa sezione speciale del registro delle imprese." },

    { type: "h3", text: "Lo stato di sovraindebitamento" },
    { type: "p", text: "Per accedere alla liquidazione controllata non è sufficiente trovarsi in difficoltà passeggera: occorre dimostrare uno stato di crisi o di insolvenza, intesi rispettivamente come probabilità di futura insolvenza e incapacità del debitore di adempiere regolarmente alle proprie obbligazioni (art. 2, comma 1, lett. a) e b) CCII). La prova di tale stato è generalmente affidata alla relazione particolareggiata redatta dall'Organismo di Composizione della Crisi (OCC), che ricostruisce la situazione patrimoniale, reddituale e debitoria del soggetto." },

    { type: "h3", text: "Iniziativa: debitore, creditori, pubblico ministero" },
    { type: "p", text: "L'art. 268, comma 2, CCII consente di promuovere la liquidazione controllata non soltanto su iniziativa del debitore, ma anche su istanza di un creditore o del pubblico ministero qualora il debitore sia un imprenditore. È una novità di rilievo rispetto alla L. n. 3/2012, dove l'iniziativa era riservata al solo sovraindebitato. La legittimazione del creditore consente di superare resistenze ingiustificate del debitore e di attivare un percorso liquidatorio quando lo stesso si rifiuti, pur in presenza di indici di insolvenza." },

    { type: "h2", text: "Presupposti oggettivi e cause di esclusione", id: "presupposti-oggettivi" },
    { type: "p", text: "Sotto il profilo oggettivo la procedura presuppone l'esistenza di un patrimonio aggredibile, ovvero di redditi futuri parzialmente disponibili. In caso di totale assenza di patrimonio e di redditi, lo strumento più idoneo non è la liquidazione controllata bensì l'esdebitazione del debitore incapiente ex art. 283 CCII." },
    { type: "p", text: "Vi sono inoltre cause di esclusione e di improcedibilità che il tribunale verifica in via preliminare. Costituiscono ostacoli alla procedura, ad esempio, il compimento di atti in frode ai creditori non sanabili, la mancata collaborazione con l'OCC, la presenza di altre procedure pendenti incompatibili, l'omessa o gravemente carente documentazione, e — sotto il profilo del beneficio finale — comportamenti che la giurisprudenza qualifica come ostativi alla concessione dell'esdebitazione (frode, occultamento, dolo o colpa grave nella formazione dell'indebitamento)." },

    { type: "note", text: "Va distinto il presupposto di ammissione alla procedura dal presupposto di accesso all'esdebitazione finale. Il tribunale può aprire la liquidazione controllata anche in presenza di profili problematici sulla meritevolezza, e rinviare al momento del giudizio sull'esdebitazione la valutazione definitiva. Tuttavia, atti in frode molto gravi possono determinare già in apertura il rigetto della domanda." },

    { type: "h2", text: "Il ruolo dell'OCC e della relazione particolareggiata", id: "ruolo-occ" },
    { type: "p", text: "L'Organismo di Composizione della Crisi è una figura centrale: ai sensi dell'art. 269 CCII e delle norme di rinvio, l'OCC assiste il debitore nella predisposizione della domanda, raccoglie la documentazione, ricostruisce la situazione debitoria, redige la relazione particolareggiata e attesta la veridicità dei dati. L'OCC è, in concreto, l'interfaccia tecnica tra il debitore e il tribunale." },
    { type: "p", text: "La relazione particolareggiata costituisce il documento fondamentale del procedimento. Vi sono indicate: l'esposizione delle cause del sovraindebitamento; la situazione patrimoniale, reddituale e familiare; l'elenco analitico dei creditori con il rispettivo importo, titolo e privilegio; gli atti di disposizione compiuti nei cinque anni precedenti; la valutazione di meritevolezza in chiave prognostica; la stima dei beni aggredibili e dei prevedibili realizzi." },

    { type: "h3", text: "Documentazione che il debitore deve fornire all'OCC" },
    { type: "ul", items: [
      "Estratti di ruolo aggiornati dell'Agente della Riscossione (AdER) e cartelle esattoriali notificate",
      "Documentazione bancaria: estratti conto degli ultimi tre-cinque anni, mutui, fidi, prestiti personali",
      "Atti giudiziari: pignoramenti, precetti, decreti ingiuntivi, sentenze di condanna",
      "Dichiarazioni dei redditi degli ultimi cinque anni e CU/buste paga aggiornati",
      "Certificati ipocatastali e visure su immobili e veicoli intestati al debitore",
      "Stato di famiglia, atti di matrimonio o di separazione, atti relativi alla comunione legale",
      "Elenco dei crediti vantati verso terzi (anche da contenziosi pendenti) e degli atti di disposizione compiuti nei cinque anni",
    ]},

    { type: "h2", text: "Apertura della procedura: il decreto del tribunale", id: "decreto-apertura" },
    { type: "p", text: "Verificati i presupposti di ammissibilità, il tribunale dispone con decreto l'apertura della liquidazione controllata ai sensi dell'art. 270 CCII. Il decreto contiene una serie di prescrizioni essenziali: la nomina del liquidatore, l'invito ai creditori a presentare le domande di partecipazione al passivo, l'ordine al debitore di consegnare la documentazione integrativa eventualmente richiesta, l'eventuale fissazione di un'udienza per la valutazione delle questioni controverse." },
    { type: "p", text: "Con l'apertura della procedura si producono effetti rilevanti sul piano sostanziale e processuale, analoghi — pur con i necessari adattamenti — a quelli della liquidazione giudiziale: il debitore perde la disponibilità del patrimonio aggredibile, i creditori non possono iniziare o proseguire azioni esecutive individuali sui beni compresi nella liquidazione, gli interessi (con le eccezioni di legge) sono sospesi nei confronti della massa, e le azioni revocatorie e recuperatorie diventano di competenza del liquidatore." },

    { type: "h3", text: "Effetti per il debitore" },
    { type: "ul", items: [
      "Spossessamento dei beni e dei crediti che entrano nella massa attiva",
      "Obbligo di consegnare al liquidatore documentazione, conti correnti e ogni utilità",
      "Conservazione dei beni impignorabili ex art. 545 c.p.c. e di quanto necessario al mantenimento del debitore e della famiglia",
      "Possibilità di proseguire l'attività lavorativa e di percepire i redditi nella misura necessaria al sostentamento",
    ]},

    { type: "h3", text: "Effetti per i creditori" },
    { type: "ul", items: [
      "Divieto di iniziare o proseguire azioni esecutive e cautelari individuali",
      "Necessità di insinuarsi al passivo nei termini stabiliti dal decreto di apertura",
      "Cristallizzazione del credito alla data di apertura della procedura",
      "Sospensione degli interessi sui crediti chirografari, salvo le eccezioni di legge",
    ]},

    { type: "h2", text: "Il liquidatore: nomina, funzioni e responsabilità", id: "liquidatore" },
    { type: "p", text: "La figura del liquidatore è il perno della procedura. Nominato dal tribunale, generalmente tra gli iscritti agli appositi elenchi (gestori della crisi, avvocati, commercialisti dotati di adeguata esperienza), il liquidatore svolge compiti analoghi a quelli del curatore nella liquidazione giudiziale. La sua attività è disciplinata dagli artt. 270-274 CCII e dalle norme di rinvio." },

    { type: "h3", text: "Funzioni principali del liquidatore" },
    { type: "ol", items: [
      "Prendere in consegna i beni del debitore e formare l'inventario",
      "Esaminare le domande di insinuazione al passivo e formare lo stato passivo",
      "Procedere alla vendita dei beni mobili e immobili secondo le forme previste",
      "Riscuotere i crediti del debitore e gestire la liquidità affluita nella massa",
      "Esercitare le azioni revocatorie e recuperatorie nell'interesse dei creditori",
      "Predisporre il rendiconto periodico e finale dell'attività svolta",
      "Procedere ai riparti parziali e finali secondo l'ordine delle cause di prelazione",
      "Relazionare al giudice delegato sull'andamento della procedura",
    ]},

    { type: "note", text: "Il liquidatore è un pubblico ufficiale e la sua attività è soggetta a vigilanza del giudice delegato. Eventuali condotte irregolari o omissioni possono dar luogo a responsabilità civile, disciplinare e — nei casi più gravi — penale. Il debitore e i creditori che ravvisino anomalie possono presentare reclamo ai sensi dell'art. 124 CCII applicato per rinvio." },

    { type: "h2", text: "Formazione del passivo e accertamento dei crediti", id: "formazione-passivo" },
    { type: "p", text: "Con il decreto di apertura il tribunale fissa il termine entro cui i creditori devono presentare la domanda di insinuazione al passivo (di regola sessanta giorni). La domanda — analoga per struttura a quella prevista nella liquidazione giudiziale — deve contenere l'indicazione del credito, della causale, del titolo e dell'eventuale privilegio o prelazione, nonché della documentazione probatoria." },
    { type: "p", text: "Il liquidatore esamina le domande, redige il progetto di stato passivo e lo deposita per l'esame del giudice delegato. Lo stato passivo viene reso esecutivo con decreto e può essere oggetto di opposizione e di impugnazione nei termini di legge. È in questa sede che si decidono le contestazioni circa l'esistenza, l'ammontare e il privilegio del credito." },

    { type: "h3", text: "Ordine delle cause di prelazione" },
    { type: "p", text: "La ripartizione dell'attivo segue rigorosamente l'ordine delle cause di prelazione. In sintesi, vengono soddisfatti per primi i crediti prededucibili (spese di procedura, compenso del liquidatore e dell'OCC); successivamente i crediti assistiti da pegno e ipoteca sui rispettivi beni; quindi i crediti privilegiati secondo la gerarchia degli artt. 2745 e segg. c.c.; infine i crediti chirografari, che concorrono fra loro proporzionalmente." },

    { type: "h2", text: "Beni esclusi dalla liquidazione", id: "beni-esclusi" },
    { type: "p", text: "Non tutti i beni del debitore entrano nella massa attiva. L'art. 268, comma 4, CCII e le norme di rinvio escludono dalla liquidazione una serie di cespiti, in parte per ragioni di tutela personale e familiare, in parte per la natura strettamente personale del diritto." },

    { type: "table", headers: ["Categoria", "Bene escluso", "Riferimento normativo"], rows: [
      ["Beni personali", "Beni di uso strettamente personale e necessario", "Art. 514 c.p.c."],
      ["Mantenimento", "Beni necessari al mantenimento del debitore e della famiglia", "Art. 545 c.p.c. e art. 268 CCII"],
      ["Redditi", "Redditi nei limiti dell'impignorabilità (stipendi, pensioni, sussidi)", "Art. 545 c.p.c."],
      ["Crediti alimentari", "Crediti aventi natura alimentare o assistenziale", "Art. 545, co. 1 c.p.c."],
      ["Patrimonio familiare", "Fondo patrimoniale per debiti estranei ai bisogni della famiglia", "Art. 170 c.c."],
      ["Frutti e accessori", "Frutti di beni di terzi e accessori non separabili", "Norme civilistiche applicabili"],
      ["TFR/quote", "Quote impignorabili di TFR e indennità di fine rapporto", "Art. 545, co. 4 c.p.c."],
    ]},

    { type: "p", text: "Quanto al reddito da lavoro, opera la regola della pignorabilità parziale: il liquidatore può attingere alla quota eccedente quella necessaria al sostentamento dignitoso del debitore, secondo i parametri fissati dal giudice delegato con apposito provvedimento. La determinazione concreta della quota destinabile ai creditori è uno degli aspetti più sensibili della procedura, poiché incide direttamente sul tenore di vita del debitore e della famiglia durante i tre anni di liquidazione." },

    { type: "h2", text: "Durata della procedura: il limite triennale", id: "durata" },
    { type: "p", text: "Tra le novità più rilevanti introdotte dal CCII figura la durata massima della liquidazione controllata, ora attestata su un orizzonte triennale. La procedura si chiude in ogni caso decorsi tre anni dalla sua apertura, fatti salvi i casi di chiusura anticipata per esaurimento dell'attivo o per altre cause di legge." },
    { type: "p", text: "Il limite triennale ha una duplice funzione: da un lato circoscrive lo spossessamento del debitore, evitando situazioni di pendenza protratta nel tempo; dall'altro funge da parametro temporale per il computo del periodo rilevante ai fini dell'esdebitazione di diritto del debitore persona fisica. La giurisprudenza ha già avuto modo di chiarire che il termine decorre dal decreto di apertura e che eventuali proroghe vanno motivate dal tribunale in presenza di circostanze eccezionali." },

    { type: "h3", text: "Chiusura anticipata" },
    { type: "p", text: "La procedura può chiudersi prima del triennio nei seguenti casi: integrale soddisfazione dei creditori (ipotesi rara nella pratica), insufficienza di attivo che renda manifestamente antieconomica la prosecuzione, mancata presentazione di domande di insinuazione nei termini, o per altre cause previste dalla disciplina di rinvio. La chiusura è dichiarata con decreto del tribunale, reclamabile nelle forme di rito." },

    { type: "h2", text: "L'esdebitazione finale: artt. 280-281 CCII", id: "esdebitazione-finale" },
    { type: "p", text: "L'esito tipico — e, dal punto di vista del debitore, decisivo — della liquidazione controllata è la concessione dell'esdebitazione finale. Si tratta del beneficio che libera il debitore persona fisica dai debiti residui non integralmente soddisfatti nel corso della procedura, restituendogli la piena capacità economica e la possibilità di ripartire senza il peso di obbligazioni pregresse." },
    { type: "p", text: "L'art. 280 CCII disciplina l'esdebitazione del sovraindebitato all'esito della liquidazione controllata. La disposizione introduce, in via tendenziale, una regola di automaticità: trascorsi tre anni dall'apertura della liquidazione, il debitore persona fisica consegue di diritto l'esdebitazione dei debiti residui, salvo che non ricorrano specifiche cause ostative. È un'innovazione importante rispetto al regime previgente, dove il beneficio era condizionato a un'istanza espressa e a un'apposita valutazione del tribunale." },

    { type: "h3", text: "Cause ostative all'esdebitazione" },
    { type: "p", text: "La legge individua una serie di condotte che precludono il beneficio. In particolare il debitore non può ottenere l'esdebitazione quando: ha determinato la situazione di sovraindebitamento con dolo o colpa grave, ricorrendo abusivamente al credito; ha commesso atti in frode ai creditori; ha occultato attività o esposto passività inesistenti; ha già beneficiato dell'esdebitazione nei cinque anni precedenti; ha avuto comportamenti gravemente reticenti o ostruzionistici nel corso della procedura. La giurisprudenza ha progressivamente delineato i contorni della 'colpa grave', escludendo dal beneficio chi si sia sproporzionatamente indebitato senza prospettiva ragionevole di rientro." },

    { type: "h3", text: "Debiti che restano comunque dovuti" },
    { type: "ul", items: [
      "Obbligazioni di mantenimento e alimenti",
      "Debiti per il risarcimento dei danni da fatto illecito extracontrattuale (entro i limiti di legge)",
      "Sanzioni penali e amministrative di carattere pecuniario non accessorie a debiti estinti",
      "Debiti fiscali sorti per dolo o colpa grave del debitore, secondo l'interpretazione giurisprudenziale evolutiva",
      "Debiti che la legge dichiara espressamente non esdebitabili",
    ]},

    { type: "image", src: handshakeTrust, alt: "Restituzione della capacità economica dopo l'esdebitazione", caption: "L'esdebitazione finale restituisce al debitore la possibilità di ripartire senza il peso dei debiti pregressi." },

    { type: "h2", text: "Differenze tra liquidazione controllata e liquidazione giudiziale", id: "differenze-liquidazione-giudiziale" },
    { type: "p", text: "La liquidazione controllata condivide con la liquidazione giudiziale ex art. 121 CCII l'impianto concorsuale liquidatorio, ma se ne differenzia per ambito soggettivo, snellezza procedurale e alcuni profili sostanziali. Comprendere queste differenze è essenziale per indirizzare correttamente il debitore." },

    { type: "table", headers: ["Profilo", "Liquidazione controllata (artt. 268-277)", "Liquidazione giudiziale (artt. 121 ss.)"], rows: [
      ["Soggetti", "Sovraindebitati non assoggettabili (consumatori, professionisti, piccoli imprenditori)", "Imprenditori commerciali sopra soglia"],
      ["Iniziativa", "Debitore, creditori, PM (per imprenditori)", "Debitore, creditori, PM, autorità di vigilanza"],
      ["Organo gestore", "Liquidatore nominato dal tribunale", "Curatore"],
      ["Durata", "Massimo tre anni", "Variabile, di regola più lunga"],
      ["OCC", "Coinvolto in fase di accesso e di domanda", "Non previsto"],
      ["Esdebitazione", "Tendenzialmente di diritto al triennio (art. 280)", "Su istanza, valutata dal tribunale (artt. 278-279)"],
      ["Reati fallimentari", "Non si applicano le fattispecie penali tipiche", "Possibile rilevanza penale (bancarotta)"],
    ]},

    { type: "h2", text: "Rapporto con le altre procedure di sovraindebitamento", id: "rapporto-altre-procedure" },
    { type: "p", text: "La liquidazione controllata si colloca all'interno del sistema delle procedure di sovraindebitamento ed è alternativa, ma non sempre incompatibile, con le procedure ristrutturative. Ricostruirne i rapporti aiuta a scegliere lo strumento più appropriato al caso concreto." },

    { type: "h3", text: "Ristrutturazione dei debiti del consumatore (artt. 67-73 CCII)" },
    { type: "p", text: "La ristrutturazione dei debiti del consumatore è una procedura ristrutturativa che presuppone un piano sostenibile e la verifica della meritevolezza. È preferibile alla liquidazione controllata quando il debitore dispone di un reddito stabile e di prospettive di rientro parziale, e desidera conservare il patrimonio essenziale (in particolare l'abitazione principale, se sostenuta da un mutuo regolarmente onorato secondo i meccanismi previsti dal CCII)." },

    { type: "h3", text: "Concordato minore (artt. 74-83 CCII)" },
    { type: "p", text: "Il concordato minore è la procedura ristrutturativa dedicata al professionista, al piccolo imprenditore, all'agricoltore e al consumatore con attività cessata. Presuppone il consenso della maggioranza dei creditori e si fonda su un piano di soddisfazione, anche parziale, supportato da apporti di finanza esterna o da redditi futuri. È alternativa alla liquidazione controllata e va valutata quando il debitore può ancora offrire qualcosa." },

    { type: "h3", text: "Esdebitazione dell'incapiente (art. 283 CCII)" },
    { type: "p", text: "L'esdebitazione del debitore incapiente è lo strumento di chiusura del sistema, riservato a chi non ha né patrimonio né redditi sufficienti a coprire neppure le spese della procedura. Quando il debitore non ha nulla, la liquidazione controllata sarebbe priva di utilità: in tal caso si ricorre direttamente all'art. 283 CCII, che consente di ottenere la cancellazione integrale dei debiti senza alcuna soddisfazione dei creditori." },

    { type: "note", text: "La scelta tra le diverse procedure non è sempre univoca: nella pratica può accadere che la richiesta iniziale di concordato minore o di ristrutturazione si converta — in mancanza dei presupposti o per mancata approvazione dei creditori — in liquidazione controllata, ai sensi dell'art. 73 CCII e delle norme di rinvio. È compito dell'OCC e del difensore valutare ex ante la procedura più sostenibile." },

    { type: "h2", text: "Casistica giurisprudenziale rilevante", id: "casistica-giurisprudenza" },
    { type: "p", text: "La giurisprudenza di merito, formatasi nei tribunali specializzati in crisi d'impresa, ha già delineato alcuni orientamenti rilevanti in tema di liquidazione controllata, integrando il dettato normativo con principi applicativi di rilievo pratico." },

    { type: "h3", text: "Sulla meritevolezza" },
    { type: "p", text: "Le pronunce hanno chiarito che la valutazione di meritevolezza non si limita a verificare l'assenza di frode, ma si estende a un giudizio sulla complessiva condotta del debitore. Non vale a escludere il beneficio l'occasionale ricorso al credito per esigenze primarie; viceversa, può ostacolare l'esdebitazione l'aver acceso finanziamenti palesemente insostenibili rispetto al reddito, in presenza di una pregressa esposizione già grave." },

    { type: "h3", text: "Sull'estensione dello spossessamento" },
    { type: "p", text: "I tribunali hanno generalmente adottato un approccio bilanciato circa la quota di reddito destinabile ai creditori, riconoscendo al debitore la conservazione di un livello di vita dignitoso. La determinazione delle somme attingibili dal liquidatore è di regola oggetto di provvedimento motivato del giudice delegato, modificabile in presenza di mutate esigenze familiari." },

    { type: "h3", text: "Sull'esdebitazione di diritto al triennio" },
    { type: "p", text: "L'orientamento prevalente conferma il carattere automatico dell'esdebitazione triennale del debitore persona fisica, fatta salva la possibilità per i creditori di sollecitare il rigetto in presenza di cause ostative. Il provvedimento di esdebitazione è reclamabile e produce effetti ex tunc rispetto ai debiti anteriori all'apertura della procedura." },

    { type: "h2", text: "Costi e tempi della procedura", id: "costi-tempi" },
    { type: "p", text: "Sotto il profilo economico la liquidazione controllata comporta una serie di costi: il compenso dell'OCC per la predisposizione della relazione particolareggiata, il compenso del liquidatore (a carico della procedura), il contributo unificato e le spese di pubblicazione, oltre alle spese del difensore. I parametri sono fissati da appositi decreti ministeriali; per i debitori privi di mezzi è prevista la possibilità di accedere al patrocinio a spese dello Stato in presenza dei requisiti reddituali." },
    { type: "p", text: "Sui tempi, oltre al limite triennale di durata, occorre considerare le fasi prodromiche: la raccolta documentale e la redazione della relazione presso l'OCC richiedono mediamente da due a quattro mesi; il deposito della domanda e l'apertura della procedura un tempo variabile in funzione del tribunale competente; le fasi liquidatorie successive dipendono dalla composizione del patrimonio (i beni immobili richiedono tempi maggiori di realizzo)." },

    { type: "h2", text: "Procedura operativa: i passaggi pratici", id: "passi-operativi" },
    { type: "ol", items: [
      "Verificare con un professionista i presupposti di accesso alla liquidazione controllata e l'idoneità del caso rispetto alle alternative (ristrutturazione, concordato minore, esdebitazione incapiente)",
      "Contattare un Organismo di Composizione della Crisi accreditato presso un Ordine professionale o presso una Camera di Commercio",
      "Raccogliere e consegnare all'OCC tutta la documentazione necessaria: estratti AdER, documentazione bancaria, atti giudiziari, dichiarazioni dei redditi, certificati ipocatastali, stato di famiglia",
      "Collaborare con l'OCC nella ricostruzione della situazione patrimoniale e nella redazione della relazione particolareggiata",
      "Depositare la domanda presso il tribunale competente, assistiti da un difensore",
      "Attendere il decreto di apertura della liquidazione, con la nomina del liquidatore",
      "Consegnare al liquidatore i beni, la documentazione e quanto necessario per l'attuazione della procedura",
      "Collaborare lealmente alla formazione del passivo e alle operazioni di liquidazione per l'intero triennio",
      "Al termine del triennio, ottenere l'esdebitazione finale di diritto (salvo cause ostative) e procedere alla cancellazione dei debiti residui",
    ]},

    { type: "image", src: ctaHandshake, alt: "Consulenza legale per liquidazione controllata", caption: "Una valutazione preventiva con un professionista esperto in crisi d'impresa è essenziale per scegliere la procedura più adatta." },

    { type: "h2", text: "Errori frequenti da evitare", id: "errori-da-evitare" },
    { type: "p", text: "Nella prassi si registrano alcuni errori ricorrenti che possono compromettere l'esito della procedura o, peggio, precludere l'accesso al beneficio dell'esdebitazione. Conoscerli aiuta a impostare correttamente il percorso." },

    { type: "ul", items: [
      "Compiere atti dispositivi del patrimonio nei mesi immediatamente precedenti la domanda (donazioni, vendite a parenti, intestazioni fittizie): tali atti sono passibili di revocatoria e possono incidere sulla meritevolezza",
      "Omettere di dichiarare passività o redditi: la reticenza è una delle principali cause di rigetto dell'esdebitazione",
      "Sottoscrivere nuovi finanziamenti nella fase pre-procedura, aggravando la posizione debitoria",
      "Mancare di collaborare con l'OCC o con il liquidatore, ritardando la consegna di documenti o informazioni",
      "Affidarsi a soggetti privi di adeguata competenza tecnica: la procedura richiede esperienza specifica in materia concorsuale e di sovraindebitamento",
      "Sottovalutare la portata del limite di non aver beneficiato di altra esdebitazione nei cinque anni precedenti",
    ]},

    { type: "h2", text: "Profili fiscali della liquidazione controllata", id: "profili-fiscali" },
    { type: "p", text: "Sotto il profilo fiscale, la liquidazione controllata produce effetti rilevanti sui debiti tributari del debitore persona fisica. Le cartelle esattoriali e i debiti verso AdER (Agenzia delle Entrate Riscossione) sono soggetti alla disciplina dell'insinuazione al passivo come gli altri crediti, salvi i privilegi che la legge accorda ai crediti erariali e contributivi. Al termine del triennio, l'esdebitazione di diritto comporta — secondo l'orientamento maggioritario — la liberazione anche dai debiti fiscali non integralmente soddisfatti, salvo le ipotesi di dolo o colpa grave specificamente sanzionate." },
    { type: "p", text: "Quanto agli effetti reddituali, le somme conseguite dal debitore durante la procedura restano fiscalmente imputabili allo stesso secondo le regole ordinarie; la quota destinata al liquidatore costituisce, dal punto di vista del debitore, una decurtazione del reddito disponibile ma non una variazione del reddito imponibile. La materia è in evoluzione e merita una valutazione caso per caso con un consulente fiscale qualificato." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Chi può accedere alla liquidazione controllata del sovraindebitato?", a: "Possono accedere tutti i debitori in stato di sovraindebitamento che non sono assoggettabili alla liquidazione giudiziale: consumatori (anche cessati), professionisti, piccoli imprenditori commerciali sotto le soglie dimensionali dell'art. 2 CCII, imprenditori agricoli, start-up innovative, imprenditori individuali cessati da non oltre un anno, società minori. È invece esclusa per i grandi imprenditori commerciali, soggetti alla liquidazione giudiziale ex art. 121 CCII. L'accesso presuppone uno stato di crisi o insolvenza accertato in via documentale dall'OCC." },
      { q: "Quanto dura la liquidazione controllata?", a: "La durata massima della procedura è di tre anni, computati a partire dal decreto di apertura. Trascorso il triennio la procedura si chiude in ogni caso, salvo proroghe motivate per circostanze eccezionali. La chiusura anticipata è possibile per integrale soddisfazione dei creditori, per insufficienza di attivo o per altre cause di legge. Il termine triennale rileva anche ai fini dell'esdebitazione di diritto del debitore persona fisica prevista dall'art. 280 CCII, che opera automaticamente al decorso del periodo." },
      { q: "Cosa succede ai beni del debitore durante la procedura?", a: "Con l'apertura della liquidazione si produce lo spossessamento: il debitore perde la disponibilità dei beni aggredibili, che entrano nella massa attiva sotto la gestione del liquidatore. Sono esclusi i beni impignorabili ex art. 514 e 545 c.p.c., i beni necessari al mantenimento del debitore e della famiglia, la quota impignorabile dei redditi da lavoro o pensione, i crediti di natura alimentare e — alle condizioni di legge — i beni del fondo patrimoniale per debiti estranei ai bisogni della famiglia. Il debitore conserva il diritto a un tenore di vita dignitoso." },
      { q: "Chi nomina il liquidatore e quali sono le sue funzioni?", a: "Il liquidatore è nominato dal tribunale con il decreto di apertura della procedura, generalmente tra gli iscritti agli appositi elenchi di gestori della crisi. Le sue funzioni principali sono: prendere in consegna i beni, formare l'inventario e il passivo, esaminare le domande di insinuazione, procedere alla vendita dei beni mobili e immobili, riscuotere i crediti, esercitare le azioni revocatorie, predisporre i riparti e relazionare al giudice delegato. È un pubblico ufficiale soggetto a vigilanza e a responsabilità." },
      { q: "Quando il debitore può ottenere l'esdebitazione finale?", a: "L'esdebitazione del sovraindebitato all'esito della liquidazione controllata opera, ai sensi dell'art. 280 CCII, di diritto al decorso del triennio dall'apertura della procedura, salvo che ricorrano cause ostative. È un'innovazione rilevante rispetto al regime previgente, dove il beneficio richiedeva un'istanza espressa e un'apposita valutazione. La concessione è impedita, in particolare, in caso di dolo o colpa grave nella formazione del debito, atti in frode ai creditori, occultamento di attività, già intervenuta esdebitazione nei cinque anni precedenti." },
      { q: "Quali debiti restano dovuti dopo l'esdebitazione?", a: "Restano dovuti, anche dopo l'esdebitazione, alcuni debiti di natura particolare: obbligazioni di mantenimento e alimenti, debiti per risarcimento di danni da fatto illecito extracontrattuale entro i limiti di legge, sanzioni penali e amministrative pecuniarie non accessorie a debiti estinti, debiti che la legge dichiara espressamente non esdebitabili. La giurisprudenza sta delineando, inoltre, i casi in cui i debiti tributari sorti per dolo o colpa grave del debitore possano essere esclusi dal beneficio. Tutti gli altri debiti chirografari residui vengono cancellati." },
      { q: "Quanto costa la liquidazione controllata?", a: "I costi comprendono il compenso dell'OCC per la relazione particolareggiata (fissato da decreti ministeriali e parametrato all'attivo e al passivo), il compenso del liquidatore a carico della procedura, il contributo unificato per l'iscrizione a ruolo, le spese di pubblicazione e quelle del difensore. Per i debitori privi di mezzi è possibile accedere al patrocinio a spese dello Stato in presenza dei requisiti reddituali. Una valutazione preventiva con un professionista consente di stimare con maggiore precisione l'impatto economico complessivo del percorso." },
      { q: "È possibile mantenere l'abitazione principale durante la procedura?", a: "L'abitazione principale, ove di proprietà del debitore, entra di norma nella massa attiva e può essere oggetto di liquidazione. Tuttavia esistono strumenti per attenuare l'impatto: in primo luogo la valutazione di una procedura ristrutturativa alternativa (ristrutturazione dei debiti del consumatore o concordato minore), che consente in alcuni casi di conservare l'immobile; in secondo luogo il diritto al mantenimento dell'abitazione fino alla vendita, con eventuali soluzioni di rientro condivise. La valutazione va condotta caso per caso, considerando il valore dell'immobile, l'eventuale ipoteca e il quadro debitorio complessivo." },
      { q: "Cosa succede ai redditi da lavoro durante i tre anni?", a: "I redditi da lavoro o da pensione del debitore sono pignorabili nei limiti dell'art. 545 c.p.c. La quota destinabile ai creditori è determinata dal giudice delegato con apposito provvedimento, modificabile in presenza di mutate esigenze familiari. Il debitore conserva il diritto a un tenore di vita dignitoso e alla copertura delle spese essenziali per sé e per la famiglia. La quota eccedente viene versata al liquidatore e confluisce nella massa attiva, da cui sarà distribuita ai creditori secondo l'ordine delle cause di prelazione." },
      { q: "Cosa accade se i creditori non presentano domanda di insinuazione?", a: "I creditori che non presentano domanda di insinuazione al passivo nei termini stabiliti dal decreto di apertura non possono partecipare al riparto dell'attivo e non vengono ammessi al concorso. Tuttavia, ai fini dell'esdebitazione finale, anche i debiti non insinuati ricadono sotto l'effetto liberatorio del provvedimento, fatta eccezione per le categorie espressamente escluse dalla legge. È dunque essenziale che il liquidatore proceda a una corretta notizia ai creditori e che il debitore fornisca un elenco completo e veritiero delle passività." },
    ]},

    { type: "h2", text: "Conclusioni operative", id: "conclusioni" },
    { type: "p", text: "La liquidazione controllata del sovraindebitato rappresenta, all'interno del sistema delineato dal Codice della Crisi, lo strumento principale per la composizione concorsuale dell'insolvenza dei soggetti non assoggettabili alla liquidazione giudiziale. La sua disciplina, contenuta negli artt. 268-277 CCII, coniuga la tutela dei creditori — attraverso un meccanismo liquidatorio rigoroso — con la protezione del debitore, cui è garantita una prospettiva di esdebitazione al decorso del triennio." },
    { type: "p", text: "La scelta di accedere a questo strumento richiede una valutazione preventiva accurata, da condurre con il supporto di un professionista esperto in materia concorsuale e di un OCC accreditato. Le alternative ristrutturative — ristrutturazione dei debiti del consumatore e concordato minore — vanno sempre esaminate in via preliminare, così come l'eventuale percorribilità dell'esdebitazione dell'incapiente nei casi di totale assenza di patrimonio. La materia è in costante evoluzione e merita un costante aggiornamento, anche alla luce della giurisprudenza dei tribunali specializzati in crisi d'impresa e delle correzioni normative che il legislatore sta progressivamente introducendo nel CCII." },
  ],
};
