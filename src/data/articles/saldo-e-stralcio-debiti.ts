import type { Article } from "../articles";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import heroHope from "@/assets/hero-hope.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";

export const article: Article = {
  slug: "saldo-e-stralcio-debiti",
  title: "Saldo e stralcio: come negoziare la chiusura definitiva del debito a importo ridotto",
  excerpt:
    "Guida tecnica al saldo e stralcio: definizione (art. 1965 c.c.), differenze con il piano di rientro, percentuali tipiche, soggetti che lo accettano, esempi numerici, passi operativi e implicazioni fiscali.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: handshakeTrust,
  keywords: [
    "saldo e stralcio",
    "transazione debito",
    "chiusura definitiva debito",
    "negoziazione creditori",
    "accordo a stralcio",
  ],
  intro:
    "Il saldo e stralcio è uno degli strumenti più utilizzati nella gestione stragiudiziale del debito civile. Consente al debitore di chiudere definitivamente la propria posizione versando una somma inferiore al credito vantato dal creditore, in cambio della rinuncia di quest'ultimo all'azione esecutiva e a ogni ulteriore pretesa. Sul piano giuridico è una transazione disciplinata dagli artt. 1965 e ss. del codice civile. Sul piano pratico richiede capacità di negoziazione, conoscenza del comportamento dei creditori e attenta gestione della formalizzazione scritta.",
  content: [
    { type: "h2", text: "Definizione: cos'è il saldo e stralcio", id: "definizione" },
    {
      type: "p",
      text: "Il saldo e stralcio è un accordo bonario tra debitore e creditore in forza del quale il primo si obbliga al pagamento di una somma — inferiore all'importo originariamente dovuto — e il secondo, in cambio, rinuncia alla parte residua del credito, dichiarando estinta l'intera obbligazione. È una soluzione che chiude in modo definitivo il rapporto debitorio, evitando il contenzioso e le procedure esecutive. Sul piano giuridico è una transazione regolata dagli artt. 1965-1976 del codice civile, in cui le reciproche concessioni sono date dal lato debitore dall'impegno di pagamento immediato (o entro tempi brevi e certi) e dal lato creditore dalla riduzione dell'importo dovuto e dalla rinuncia a ogni ulteriore pretesa.",
    },
    {
      type: "p",
      text: "Va distinto con chiarezza dal piano di rientro: nel saldo e stralcio l'intero debito viene chiuso a una cifra ridotta; nel piano di rientro, invece, il debitore versa l'intero importo dovuto, ma dilazionato nel tempo. Sono due strumenti diversi che rispondono a esigenze diverse. Il saldo e stralcio serve quando il debitore non è in grado di pagare tutto e ha bisogno di una riduzione significativa; il piano di rientro serve quando il problema è solo di liquidità immediata ma la capacità complessiva di pagamento esiste.",
    },
    {
      type: "image",
      src: handshakeTrust,
      alt: "Stretta di mano che simboleggia l'accordo a saldo e stralcio",
      caption: "Il saldo e stralcio si fonda su una reciproca convenienza tra debitore e creditore.",
    },

    { type: "h2", text: "Base giuridica: la transazione ex art. 1965 c.c.", id: "base-giuridica" },
    {
      type: "p",
      text: "L'art. 1965 c.c. definisce la transazione come 'il contratto col quale le parti, facendosi reciproche concessioni, pongono fine a una lite già incominciata o prevengono una lite che può sorgere tra loro'. Nel saldo e stralcio la lite che si previene (o si chiude) è quella relativa al recupero del credito: il creditore avrebbe titolo per agire — anche giudizialmente — per l'intero importo, il debitore potrebbe opporsi o subire l'esecuzione. L'accordo transattivo evita entrambe le strade.",
    },
    {
      type: "p",
      text: "La transazione, ai sensi dell'art. 1966 c.c., richiede la capacità delle parti di disporre dei diritti oggetto del contratto. È un dato rilevante: il creditore deve avere il potere di rinunciare al credito, ovvero — se si tratta di società o ente — la persona che firma per il creditore deve avere il mandato a transigere. La transazione è atto di disposizione e non semplice gestione: una mancata legittimazione del firmatario può comportare l'inefficacia dell'accordo, con tutte le conseguenze del caso.",
    },
    {
      type: "p",
      text: "L'art. 1967 c.c. impone la forma scritta a pena di prova: la transazione si prova per iscritto. Per il saldo e stralcio la forma scritta non è solo prova: è essenziale anche per evitare contestazioni sulla portata dell'accordo. Una transazione orale, ammessa in astratto, lascia il debitore in una posizione di estrema debolezza nel momento in cui dovesse sorgere divergenza sull'esatto contenuto delle reciproche rinunce.",
    },

    {
      type: "note",
      text: "Una clausola spesso trascurata è quella che chiarisce il perimetro della rinuncia: l'accordo copre l'intero rapporto sostanziale o solo il credito principale? Cosa accade per interessi, spese, sanzioni, eventuali credit accessori in essere? Una formulazione ampia, del tipo 'le parti dichiarano di non avere più nulla a pretendere l'una nei confronti dell'altra a qualsiasi titolo riferito al rapporto in oggetto', è preferibile a formulazioni restrittive che lasciano spazio a contestazioni successive.",
    },

    { type: "h2", text: "Quando il saldo e stralcio è proponibile", id: "quando-proponibile" },
    {
      type: "p",
      text: "Non tutte le situazioni di debito sono adatte a una proposta di saldo e stralcio. Esistono condizioni di contesto che lo rendono concretamente percorribile e altre in cui il creditore non avrà alcun interesse a discuterne. Conoscerle aiuta a investire energie e risorse solo dove possono produrre risultati.",
    },

    { type: "h3", text: "Condizioni favorevoli alla proposta" },
    {
      type: "ul",
      items: [
        "Il debito è scaduto da tempo e il creditore ha già fatto tentativi di recupero senza successo",
        "Il credito è stato ceduto a una società di recupero o a un fondo (spesso a prezzo molto inferiore al nominale)",
        "Il debitore è oggettivamente incapiente o ha patrimonio difficilmente aggredibile",
        "La causa del debito è discutibile (vizi del contratto, contestazioni, prescrizione vicina)",
        "Il debitore è in grado di offrire un pagamento immediato in un'unica soluzione",
        "Esistono garanti escussi anch'essi in difficoltà, complicando il recupero",
      ],
    },

    { type: "h3", text: "Condizioni sfavorevoli" },
    {
      type: "ul",
      items: [
        "Il credito è recente e il creditore ha ampi margini di azione giudiziale",
        "Il debitore ha patrimonio capiente e facilmente aggredibile (immobili, conti correnti, stipendio)",
        "Il debito è assistito da garanzie reali (ipoteca su immobile di valore congruo)",
        "Si tratta di credito alimentare o di risarcimento da fatto illecito, in cui le rinunce sono limitate",
        "Esistono fideiussioni o garanzie personali da terzi in bonis facilmente escutibili",
      ],
    },

    { type: "h2", text: "Quali soggetti tipicamente accettano un saldo e stralcio", id: "soggetti-accettano" },
    {
      type: "p",
      text: "L'apertura alla trattativa varia significativamente in funzione della natura del creditore. Conoscere la psicologia e i vincoli operativi dei diversi soggetti è il primo passo per impostare una proposta credibile e ricevere una risposta utile.",
    },

    { type: "h3", text: "Banche e istituti di credito" },
    {
      type: "p",
      text: "Le banche sono interlocutori prudenti ma non rigidi. Per i crediti deteriorati (in particolare quelli classificati come 'sofferenze' o NPL — Non Performing Loans) sono spesso disponibili a transazioni con sconti consistenti, perché il valore di iscrizione a bilancio del credito è già stato fortemente svalutato. Le percentuali tipiche di accettazione, per crediti chirografari in sofferenza, possono andare dal 20% al 50% del nominale, a seconda dell'anzianità, della tipologia di garanzie e della solvibilità del debitore.",
    },

    { type: "h3", text: "Società finanziarie e cessionari di crediti" },
    {
      type: "p",
      text: "Le società di recupero crediti e i fondi cessionari di NPL acquistano portafogli a percentuali spesso molto basse (anche meno del 10% del nominale). Hanno quindi ampi margini per accettare offerte transattive. Sono interlocutori frequentemente disponibili al saldo e stralcio, soprattutto se l'offerta è economicamente coerente con il loro modello di business e arriva con una proposta scritta strutturata.",
    },

    { type: "h3", text: "Fornitori commerciali" },
    {
      type: "p",
      text: "I fornitori commerciali in genere preferiscono una soluzione rapida — anche se ridotta — al contenzioso. La disponibilità varia in funzione del rapporto commerciale: per un cliente storico in difficoltà temporanea l'apertura è maggiore. Anche su crediti commerciali datati, magari con tentativi di recupero falliti, gli sconti accettati possono essere significativi.",
    },

    { type: "h3", text: "Agenzia Entrate Riscossione (AdER)" },
    {
      type: "p",
      text: "L'AdER non accetta transazioni nel senso civilistico del termine. Tuttavia, periodicamente, il legislatore introduce strumenti di definizione agevolata — le cosiddette 'rottamazioni' delle cartelle — che producono un effetto economicamente analogo al saldo e stralcio. Con queste misure il debitore può chiudere il debito fiscale pagando le sole somme dovute a titolo di capitale e — in alcune versioni — di interessi, con esclusione di sanzioni e interessi di mora. Sono finestre temporali limitate, vanno colte quando si aprono.",
    },

    {
      type: "table",
      headers: [
        "Tipologia creditore",
        "Apertura tipica",
        "Percentuali orientative",
        "Tempi di risposta",
      ],
      rows: [
        ["Fondo NPL / cessionario", "Alta", "10% - 30% del nominale", "1-4 settimane"],
        ["Società di recupero crediti", "Media-alta", "20% - 40% del nominale", "2-6 settimane"],
        ["Banca su sofferenze proprie", "Media", "30% - 50% del nominale", "1-3 mesi"],
        ["Banca su crediti recenti", "Bassa", "60% - 80% del nominale", "Lunghi"],
        ["Fornitore commerciale", "Media-alta", "30% - 60% del nominale", "Veloci"],
        ["Fisco (rottamazione)", "Solo via legge", "Solo sanzioni/mora", "Finestre dedicate"],
      ],
    },

    { type: "h2", text: "Fattori che influenzano la percentuale offerta", id: "fattori-percentuale" },
    {
      type: "p",
      text: "L'importo della percentuale che il creditore può accettare non è frutto del caso. Dipende da una pluralità di fattori oggettivi e soggettivi che vanno analizzati prima di formulare la proposta. Una proposta troppo bassa rischia di essere rigettata senza controproposta; una troppo alta riduce inutilmente il margine di vantaggio per il debitore.",
    },

    { type: "h3", text: "Anzianità del credito" },
    {
      type: "p",
      text: "Più il credito è vecchio, più il creditore lo ha già svalutato a bilancio e più sarà disponibile a chiuderlo a percentuali ridotte. Crediti scaduti da oltre cinque anni, mai recuperati, sono candidati naturali a saldo e stralcio aggressivi. Crediti recenti, magari ancora in fase di sollecito stragiudiziale, hanno percentuali di chiusura nettamente più alte.",
    },

    { type: "h3", text: "Tipologia di garanzie" },
    {
      type: "p",
      text: "Un credito chirografario (senza garanzie) è naturalmente più trattabile rispetto a un credito assistito da ipoteca o fideiussione bancaria. Quando il credito è ipotecato su un immobile di valore congruo, lo sconto offerto sarà inevitabilmente più contenuto, perché il creditore può sempre attivare la garanzia.",
    },

    { type: "h3", text: "Capacità economica del debitore" },
    {
      type: "p",
      text: "Più il debitore è oggettivamente incapiente, più il creditore è disposto a sconti elevati: se la prospettiva alternativa è non recuperare nulla, anche il 20% diventa interessante. Per questo le proposte di saldo e stralcio dovrebbero sempre essere accompagnate da una documentazione che dimostri la reale situazione patrimoniale e reddituale, senza nascondere ma anche senza sopravvalutare le proprie risorse.",
    },

    { type: "h3", text: "Tempistica del pagamento" },
    {
      type: "p",
      text: "Il pagamento in unica soluzione e in tempi brevi (entro 30-60 giorni dalla firma dell'accordo) consente di spuntare percentuali migliori rispetto a un pagamento dilazionato. Il creditore valuta anche il valore-tempo del denaro: avere oggi il 35% del credito può essere meglio che attendere mesi o anni per ricevere forse il 50%.",
    },

    { type: "h3", text: "Esistenza di contestazioni" },
    {
      type: "p",
      text: "Se il debitore può argomentare valide contestazioni sul credito (vizi del titolo, prescrizione vicina, contestazioni di merito), la sua posizione negoziale migliora. Il creditore preferisce una transazione certa, anche se ridotta, al rischio di un contenzioso lungo e dall'esito incerto.",
    },

    {
      type: "note",
      text: "Le percentuali indicate in questo articolo sono dati orientativi tratti dall'esperienza. Ogni caso ha sue specificità e l'esito di una trattativa dipende da molte variabili. Non vanno interpretate come standard contrattuali né come impegni di risultato. Una valutazione preliminare condotta sui dati concreti della singola posizione è essenziale prima di formalizzare qualsiasi proposta.",
    },

    { type: "h2", text: "Esempi numerici di operazioni a saldo e stralcio", id: "esempi-numerici" },
    {
      type: "p",
      text: "Per dare concretezza, vediamo alcuni esempi numerici realistici, presi da casistiche tipiche. I valori sono espressi in euro e i risultati riflettono ipotesi medie di trattativa.",
    },

    { type: "h3", text: "Esempio 1: prestito personale ceduto a fondo NPL" },
    {
      type: "p",
      text: "Prestito personale originario di 25.000 euro, ormai pari a 32.000 euro per interessi e spese, ceduto da banca a fondo NPL nell'ambito di una cartolarizzazione di portafoglio. Il fondo lo ha acquistato a una frazione del nominale. Il debitore propone 8.000 euro in unica soluzione (25% del valore aggiornato). Dopo trattativa l'accordo si chiude a 9.500 euro (29,7%). Il risparmio per il debitore è di oltre 22.000 euro.",
    },

    { type: "h3", text: "Esempio 2: scoperto su carta revolving" },
    {
      type: "p",
      text: "Scoperto su carta revolving di 12.000 euro, in sofferenza da tre anni, gestito da una società di recupero crediti per conto della finanziaria emittente. Il debitore offre 3.500 euro (29%). Si chiude a 4.200 euro (35%). Il risparmio è di 7.800 euro e la posizione viene cancellata dalle banche dati creditizie dopo i termini di legge.",
    },

    { type: "h3", text: "Esempio 3: fornitura non pagata" },
    {
      type: "p",
      text: "Fattura insoluta di 18.000 euro verso un fornitore di materiali, contestata in parte per qualità della merce. Il debitore offre 9.000 euro a tacitazione integrale del rapporto. Accordo a 10.500 euro (58%), con rinuncia da parte del fornitore anche alle spese di precetto già notificate.",
    },

    {
      type: "table",
      headers: ["Caso", "Debito nominale", "Offerta iniziale", "Accordo finale", "Risparmio"],
      rows: [
        ["Prestito ceduto NPL", "32.000 €", "8.000 € (25%)", "9.500 € (29,7%)", "22.500 €"],
        ["Revolving in sofferenza", "12.000 €", "3.500 € (29%)", "4.200 € (35%)", "7.800 €"],
        ["Fornitura contestata", "18.000 €", "9.000 € (50%)", "10.500 € (58%)", "7.500 €"],
        ["Mutuo non garantito chirografo", "85.000 €", "25.000 € (29%)", "32.000 € (37,6%)", "53.000 €"],
        ["Decreto ingiuntivo definitivo", "22.000 €", "8.000 € (36%)", "11.000 € (50%)", "11.000 €"],
        ["Cartella tramite rottamazione", "15.000 €", "Capitale + interessi", "10.200 € (68%)", "4.800 €"],
      ],
    },

    { type: "h2", text: "Passi operativi per impostare una proposta", id: "passi-operativi" },
    {
      type: "p",
      text: "Una proposta di saldo e stralcio efficace è il risultato di un percorso strutturato. Improvvisare riduce drasticamente le probabilità di successo. Ecco i passaggi essenziali, nell'ordine che la pratica suggerisce.",
    },

    {
      type: "ol",
      items: [
        "Raccogliere tutta la documentazione del debito: contratto originario, eventuali cessioni, atti di recupero, decreti ingiuntivi, precetti",
        "Identificare con precisione l'attuale titolare del credito e il referente con poteri di transigere",
        "Verificare l'eventuale prescrizione e la regolarità delle interruzioni",
        "Quantificare il debito aggiornato a oggi, distinguendo capitale, interessi, spese, sanzioni",
        "Analizzare la propria capacità di offrire pagamento immediato e definirne il tetto",
        "Predisporre una proposta scritta motivata, con offerta numerica chiara e termine di accettazione",
        "Inviare la proposta tramite PEC o raccomandata, conservando prova della ricezione",
        "Gestire la fase di negoziazione, eventualmente affiancati da legale di fiducia",
        "Una volta raggiunto l'accordo verbale, redigere e firmare la transazione scritta",
        "Effettuare il pagamento secondo i termini concordati e ottenere la quietanza liberatoria",
        "Richiedere la cancellazione da banche dati creditizie (CRIF, CTC, Experian) ove applicabile",
        "Conservare tutta la documentazione per almeno dieci anni a tutela contro eventuali contestazioni",
      ],
    },

    { type: "h2", text: "La formalizzazione scritta dell'accordo", id: "formalizzazione" },
    {
      type: "p",
      text: "La transazione scritta è il documento centrale dell'operazione. È quello che, una volta firmato, vincola le parti e produce gli effetti estintivi del debito. Una transazione mal redatta — o, peggio, mai redatta — può vanificare l'intera operazione, esponendo il debitore al rischio di vedersi richiedere nuovamente la differenza nonostante il pagamento effettuato.",
    },

    { type: "h3", text: "Elementi essenziali di una transazione a saldo e stralcio" },
    {
      type: "ul",
      items: [
        "Identificazione precisa delle parti (debitore, creditore, eventuali garanti)",
        "Descrizione analitica del rapporto debitorio originario (contratto, importi, date)",
        "Riconoscimento del credito vantato dal creditore (per evitare contestazioni sulla causa)",
        "Indicazione chiara dell'importo concordato a saldo e stralcio",
        "Modalità e termini di pagamento, con eventuali rate e relative scadenze",
        "Clausola di rinuncia espressa del creditore a ogni ulteriore pretesa",
        "Clausola di estinzione di tutte le garanzie eventualmente prestate (ipoteche, fideiussioni)",
        "Obbligo del creditore di richiedere la cancellazione di iscrizioni pregiudizievoli",
        "Patto sulle spese (di norma a carico del debitore o ripartite)",
        "Clausola di riservatezza, se le parti lo desiderano",
        "Foro competente per eventuali contestazioni sulla transazione stessa",
        "Data, sottoscrizione delle parti, autenticazione se necessaria",
      ],
    },

    {
      type: "note",
      text: "Particolare attenzione va data alla clausola che disciplina cosa accade in caso di mancato pagamento. La transazione può prevedere — ed è prassi — che in caso di inadempimento il debito torni esigibile per il suo importo originario, salvo decurtazione di quanto eventualmente già versato. Sapere in anticipo questa clausola consente al debitore di non assumere impegni che non sarà in grado di rispettare e di prediligere un'offerta più contenuta, ma realisticamente sostenibile, rispetto a una promessa eccessivamente ambiziosa.",
    },

    { type: "h2", text: "Conseguenze fiscali per il debitore: sopravvenienze attive", id: "conseguenze-fiscali" },
    {
      type: "p",
      text: "Un aspetto frequentemente sottovalutato del saldo e stralcio sono le possibili conseguenze fiscali in capo al debitore. Quando il creditore rinuncia a parte del credito, la differenza tra debito originario e importo effettivamente pagato configura, sul piano contabile e fiscale, una sopravvenienza attiva. Per il debitore consumatore (persona fisica non imprenditore) la rilevanza fiscale di tale sopravvenienza è in genere nulla o limitata, perché il consumatore non ha redditi d'impresa cui imputarla. Per il debitore imprenditore individuale o per la società, invece, la situazione è diversa: la rinuncia del creditore genera una sopravvenienza attiva imponibile ai sensi dell'art. 88 TUIR.",
    },
    {
      type: "p",
      text: "Esistono però rilevanti eccezioni. Le sopravvenienze attive derivanti da accordi di ristrutturazione del debito ex art. 57 CCII, da concordato preventivo o da composizione negoziata sono parzialmente non imponibili, secondo le regole specifiche di volta in volta applicabili (art. 88, comma 4-ter, TUIR). Per saldi e stralci stragiudiziali al di fuori di procedure concorsuali, invece, l'imponibilità è la regola, salvo applicazione delle ordinarie regole di riportabilità delle perdite pregresse, che possono compensare l'imponibile generato dalla sopravvenienza.",
    },
    {
      type: "p",
      text: "Per il consumatore privato, in conclusione, il saldo e stralcio non genera di norma alcun debito fiscale aggiuntivo. Per l'imprenditore o la società è invece essenziale una valutazione fiscale preventiva, condotta insieme al commercialista, per quantificare l'impatto della sopravvenienza e pianificare eventuali compensazioni con perdite pregresse o l'utilizzo di strumenti specifici previsti dal CCII.",
    },

    { type: "h2", text: "Effetti sulle banche dati creditizie", id: "banche-dati" },
    {
      type: "p",
      text: "Dopo aver chiuso un debito a saldo e stralcio, il debitore ha spesso interesse a regolarizzare la propria posizione nelle banche dati creditizie (CRIF, Experian, CTC, Centrale Rischi della Banca d'Italia per importi rilevanti). Le segnalazioni di insolvenza, sofferenza o ritardo pesano sul merito di credito futuro: senza una corretta gestione di questa fase, anche dopo la chiusura del debito, il debitore può ritrovarsi in difficoltà nell'ottenere nuovi affidamenti.",
    },
    {
      type: "p",
      text: "La transazione scritta dovrebbe contenere espressamente l'impegno del creditore a comunicare alle banche dati l'avvenuta chiusura della posizione. I termini di permanenza delle segnalazioni nei sistemi privati sono comunque limitati nel tempo (in genere 36 mesi dall'ultima informazione, salvo cancellazione anticipata in caso di sanatoria). Il debitore può inoltre chiedere direttamente al gestore della banca dati l'aggiornamento della propria posizione, allegando la transazione e la prova del pagamento.",
    },

    { type: "h2", text: "Saldo e stralcio e procedure concorsuali", id: "saldo-procedure" },
    {
      type: "p",
      text: "Il saldo e stralcio stragiudiziale e gli strumenti del CCII non sono alternativi in modo rigido. Spesso la composizione negoziata, l'accordo di ristrutturazione del debito, il concordato minore o il piano del consumatore prevedono al loro interno operazioni di stralcio dei crediti, formalizzate nell'ambito della procedura. Quando il debitore ha pluralità di creditori e la trattativa singolo-per-singolo diventa ingestibile, la via concorsuale offre il vantaggio dell'unicità procedurale e della stabilità degli accordi (gli effetti del concordato si estendono anche ai creditori dissenzienti, entro certi limiti).",
    },
    {
      type: "p",
      text: "La scelta tra saldo e stralcio stragiudiziale e procedura concorsuale dipende dal numero e dalla natura dei creditori, dalla complessità dell'esposizione, dalle risorse disponibili, dai tempi a disposizione. Una valutazione preliminare condotta da un professionista permette di individuare la via più adatta alla specifica situazione, evitando di concentrare risorse su trattative stragiudiziali in casi in cui la via concorsuale offrirebbe maggiore protezione e definitività.",
    },

    {
      type: "image",
      src: ctaHandshake,
      alt: "Accordo formalizzato a saldo e stralcio",
      caption: "La formalizzazione scritta dell'accordo è la condizione essenziale per la stabilità della transazione.",
    },

    { type: "h2", text: "Errori da evitare nella trattativa", id: "errori" },
    {
      type: "p",
      text: "Alcuni errori ricorrenti nella prassi delle trattative a saldo e stralcio vanificano operazioni che, condotte con metodo, sarebbero state risolutive. Vale la pena elencarli per evitarli.",
    },
    {
      type: "ul",
      items: [
        "Pagare prima di avere la transazione firmata: il pagamento anticipato senza accordo scritto può non estinguere l'intero debito",
        "Negoziare con interlocutori privi di mandato a transigere: il rischio è di dover ricominciare la trattativa con chi ha davvero il potere di decidere",
        "Confondere proposta verbale e accordo: nessun verbale, nessuna PEC esplicita è da sola sufficiente",
        "Sottovalutare la prescrizione: in alcuni casi il debito è già prescritto e la trattativa diventa inutile (anzi, pagare può essere controproducente)",
        "Offrire troppo all'inizio: lasciare margine di trattativa è essenziale, la prima offerta non viene quasi mai accettata",
        "Non documentare l'incapienza: il creditore valuta anche la credibilità della giustificazione del debitore",
        "Ignorare gli effetti su segnalazioni e centrale rischi: una transazione non gestita su questo fronte vale meno",
        "Non considerare le implicazioni fiscali per imprese e società",
        "Trattare in proprio operazioni complesse senza assistenza legale e contabile",
      ],
    },

    { type: "h2", text: "Quando il saldo e stralcio non conviene", id: "non-conviene" },
    {
      type: "p",
      text: "Anche se il saldo e stralcio è spesso uno strumento efficace, esistono situazioni in cui non rappresenta la scelta migliore. Vale la pena conoscerle per evitare di percorrere strade che, a fronte di un sacrificio economico immediato, non portino una reale liberazione dal peso debitorio complessivo.",
    },
    {
      type: "ul",
      items: [
        "Quando il debitore ha numerosi creditori e una procedura concorsuale offrirebbe miglior protezione globale",
        "Quando il credito sta per cadere in prescrizione e una eccezione potrebbe estinguerlo gratuitamente",
        "Quando le risorse necessarie per il saldo verrebbero sottratte ad altri pagamenti più urgenti o vitali",
        "Quando esistono nullità del contratto o vizi del titolo che potrebbero essere fatti valere in giudizio",
        "Quando l'offerta richiesta dal creditore è talmente alta da rendere l'operazione di fatto un piano di rientro mascherato",
      ],
    },

    { type: "h2", text: "Domande frequenti sul saldo e stralcio", id: "faq" },
    {
      type: "faq",
      items: [
        {
          q: "Quanto posso sperare di chiudere un debito con saldo e stralcio?",
          a: "Le percentuali variano in modo significativo in funzione di numerosi fattori: anzianità del credito, natura del creditore, capacità economica del debitore, esistenza di garanzie. Per crediti chirografari ceduti a fondi NPL si possono ottenere chiusure attorno al 20-30% del nominale; per crediti recenti e ben garantiti il margine di sconto è più contenuto. Una valutazione preliminare del caso specifico è essenziale per impostare aspettative realistiche.",
        },
        {
          q: "È meglio una proposta scritta o un primo contatto verbale?",
          a: "Il primo contatto può essere verbale, per sondare la disponibilità del creditore, ma la proposta vera e propria deve essere scritta. Una proposta scritta motivata, inviata via PEC, dimostra serietà, fa decorrere termini, lascia traccia documentale. La proposta scritta è anche più facilmente trasferibile al referente con potere di transigere all'interno della struttura del creditore.",
        },
        {
          q: "Devo dichiarare al creditore l'esatta consistenza del mio patrimonio?",
          a: "Non esiste un obbligo giuridico in tal senso (siamo in fase stragiudiziale), ma è prassi presentare una sintesi della propria situazione patrimoniale e reddituale per giustificare l'offerta. La dichiarazione deve essere veritiera: dichiarare il falso può configurare reati e comunque vanifica la stabilità dell'accordo, perché il creditore potrebbe in seguito agire per dolo.",
        },
        {
          q: "Cosa succede se non pago entro i termini concordati?",
          a: "Di norma la transazione prevede una clausola risolutiva: in caso di inadempimento, l'accordo si scioglie e il debito torna esigibile per intero, salvo decurtazione di quanto eventualmente già versato. È quindi cruciale impegnarsi solo per importi e tempi realmente sostenibili. Meglio una proposta più bassa effettivamente onorabile di una più alta destinata al default.",
        },
        {
          q: "Il saldo e stralcio cancella la segnalazione in CRIF?",
          a: "Non automaticamente. La chiusura del debito a saldo e stralcio comporta l'aggiornamento della posizione (da 'sofferenza' a 'chiuso con stralcio'), ma la segnalazione resta visibile per i termini ordinari (in genere 36 mesi). Si può chiedere al creditore l'impegno espresso a una richiesta di cancellazione, anche se il gestore della banca dati conserva discrezionalità tecnica sulla concedibilità.",
        },
        {
          q: "Il saldo e stralcio si può applicare alle cartelle esattoriali?",
          a: "L'AdER non accetta transazioni civilistiche sui debiti tributari iscritti a ruolo. Sui debiti fiscali sono però periodicamente disponibili strumenti di definizione agevolata (rottamazioni, saldo e stralcio fiscale, definizioni straordinarie) che producono effetti economicamente analoghi, riducendo o azzerando sanzioni e interessi di mora. Sono finestre normative limitate nel tempo, da monitorare per coglierne le opportunità.",
        },
        {
          q: "Posso fare saldo e stralcio se ho già un pignoramento in corso?",
          a: "Sì, anzi è una situazione in cui la trattativa può essere particolarmente efficace: il creditore ha investito risorse nell'esecuzione e potrebbe valutare positivamente una chiusura immediata in luogo di una procedura esecutiva incerta e lunga. Va però fatta presente l'esistenza dell'esecuzione e la transazione deve disciplinare espressamente la sospensione e l'eventuale estinzione della procedura.",
        },
        {
          q: "Se il creditore rifiuta la mia proposta, posso ripresentarla?",
          a: "Sì, anche più volte. Il rifiuto iniziale è frequente: spesso è una tecnica negoziale, oppure dipende dall'inquadramento del credito al momento. Riprovare dopo qualche mese, magari rivedendo l'offerta o documentando un peggioramento della propria situazione, può portare a esiti diversi. La pazienza nella trattativa è spesso premiante.",
        },
        {
          q: "Devo coinvolgere un avvocato per un saldo e stralcio?",
          a: "Per crediti contenuti e situazioni semplici la trattativa può essere condotta direttamente. Per importi rilevanti, situazioni con più creditori, casistiche complesse o presenza di contenzioso pendente l'assistenza di un professionista è raccomandabile. La transazione, in particolare, va redatta con cura: piccoli errori formali possono produrre conseguenze rilevanti nel tempo.",
        },
        {
          q: "Il saldo e stralcio è opportuno se ho debiti con molti creditori diversi?",
          a: "In presenza di numerosi creditori la trattativa singolo-per-singolo può diventare ingestibile, oltre che inefficace: nulla impedisce a un creditore dissenziente di agire mentre con gli altri si sta trattando. In questi casi conviene valutare le procedure di sovraindebitamento previste dal CCII (piano del consumatore, concordato minore, liquidazione controllata), che offrono una cornice unitaria e protezione globale.",
        },
      ],
    },

    { type: "h2", text: "Conclusione", id: "conclusione" },
    {
      type: "p",
      text: "Il saldo e stralcio è uno strumento concreto e, in molte situazioni, risolutivo. Richiede metodo: comprensione della controparte, analisi della propria situazione, formulazione attenta della proposta, formalizzazione rigorosa dell'accordo. Non è una scorciatoia, è un percorso negoziale che valorizza la convergenza di interessi tra debitore (che vuole chiudere) e creditore (che vuole incassare almeno una parte). Quando le condizioni ci sono, il saldo e stralcio consente di chiudere definitivamente posizioni che altrimenti continuerebbero a generare interessi, segnalazioni, azioni esecutive. Quando le condizioni non ci sono — perché i creditori sono troppi, perché la posizione è troppo compromessa, perché esistono profili tecnico-procedurali più favorevoli — è giusto considerare gli strumenti del CCII, che offrono cornici più ampie e maggiore stabilità degli effetti.",
    },
  ],
};

export default article;
