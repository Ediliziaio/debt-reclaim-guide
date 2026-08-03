import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "composizione-negoziata",
  title: "Composizione negoziata della crisi d'impresa: guida completa allo strumento del CCII",
  excerpt: "La composizione negoziata è lo strumento riservato e stragiudiziale del Codice della Crisi per affrontare la difficoltà aziendale in fase precoce. Guida completa: presupposti, procedura, ruolo dell'esperto, misure protettive ed esiti possibili.",
  category: "Imprese",
  date: "Marzo 2026",
  readTime: "20 min",
  author: "Avv. Armando Rossi",
  cover: "from-trust to-trust-dark",
  coverImage: "/covers/composizione-negoziata.webp",
  keywords: ["composizione negoziata", "crisi d'impresa", "CCII", "codice della crisi", "ristrutturazione debito impresa", "esperto indipendente"],
  intro: "La composizione negoziata della crisi d'impresa è una delle innovazioni più rilevanti introdotte nel nostro ordinamento. Nata nel 2021 con il D.L. 118 come risposta alla crisi pandemica e oggi pienamente integrata nel Codice della Crisi d'Impresa e dell'Insolvenza (artt. 12-25 CCII), si caratterizza per essere riservata, stragiudiziale e attivabile in via volontaria dall'imprenditore. È pensata per affrontare la difficoltà aziendale prima che si trasformi in insolvenza, quando ancora è possibile salvare il valore dell'impresa.",
};

export const article: Article = {
  ...meta,
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

    { type: "h2", text: "Le segnalazioni dei creditori pubblici qualificati", id: "segnalazioni" },
    { type: "p", text: "Molti imprenditori arrivano alla composizione negoziata perché la crisi la scoprono da una lettera. L'art. 25-novies CCII impone ad Agenzia delle Entrate, Agenzia delle Entrate-Riscossione, INPS e INAIL di segnalare all'imprenditore e all'organo di controllo il superamento di determinate soglie di esposizione, invitandolo a valutare l'accesso alla composizione negoziata." },
    { type: "p", text: "La segnalazione non è una sanzione né l'avvio di un procedimento: è un allarme formale. Va però letta per quello che è, cioè la prova documentale che lo squilibrio è già visibile dall'esterno. Ignorarla ha due conseguenze: la posizione debitoria continua a crescere per sanzioni e interessi, e viene meno l'argomento della tempestività — che nel giudizio sulla responsabilità degli amministratori pesa." },
    { type: "note", text: "Il momento in cui si attiva la composizione negoziata è esso stesso un elemento di valutazione. L'art. 2086 c.c. impone all'imprenditore di dotarsi di assetti adeguati a rilevare tempestivamente la crisi: attivarsi dopo la prima segnalazione è coerente con quell'obbligo, attivarsi due anni dopo lo contraddice." },

    { type: "h2", text: "Quanto dura: i tempi dell'incarico e delle misure protettive", id: "tempi" },
    { type: "p", text: "La composizione negoziata è costruita per essere rapida, e i termini lo dicono. L'incarico dell'esperto si considera concluso decorsi centottanta giorni dall'accettazione, prorogabili quando tutte le parti lo richiedono o quando la proroga è necessaria ad assicurare il buon esito delle trattative." },
    { type: "table", headers: ["Fase", "Durata"], rows: [
      ["Incarico dell'esperto", "180 giorni dall'accettazione, prorogabili"],
      ["Misure protettive: durata iniziale", "Dai 30 ai 120 giorni, su determinazione del tribunale"],
      ["Misure protettive: durata massima complessiva", "240 giorni con le proroghe"],
      ["Conferma delle misure protettive", "Il tribunale si pronuncia dopo la pubblicazione dell'istanza nel registro delle imprese"],
    ]},
    { type: "p", text: "Questi termini vanno letti al contrario rispetto a come li si legge di solito: non sono il tempo a disposizione, sono il tempo entro cui il risanamento deve diventare credibile. Un'impresa che arriva alla composizione negoziata senza dati aggiornati e senza un'ipotesi di piano consuma metà del periodo per ricostruire la propria contabilità." },

    { type: "h2", text: "Chi comanda in azienda durante le trattative", id: "gestione" },
    { type: "p", text: "È la differenza che distingue la composizione negoziata da ogni procedura concorsuale: non c'è spossessamento. L'imprenditore conserva la gestione ordinaria e straordinaria dell'impresa, e l'esperto non ha poteri gestori né di veto." },
    { type: "p", text: "Il contrappeso è informativo. L'imprenditore deve informare preventivamente l'esperto degli atti di straordinaria amministrazione e dei pagamenti non coerenti con le trattative. Se l'esperto ritiene che l'atto possa pregiudicare i creditori o le trattative, lo segnala per iscritto; se l'imprenditore procede ugualmente, l'esperto ne dà atto e può iscrivere il proprio dissenso nel registro delle imprese. È una sanzione reputazionale, non giuridica, ma in una trattativa con banche e fornitori pesa quanto un provvedimento." },
    { type: "ul", items: [
      "L'impresa continua a operare, incassare, pagare fornitori e retribuzioni.",
      "I contratti in corso non si risolvono per il solo fatto dell'accesso alla composizione negoziata.",
      "Con le misure protettive i creditori non possono acquisire diritti di prelazione né iniziare o proseguire azioni esecutive e cautelari.",
      "Le banche non possono rifiutare o revocare le linee di credito per il solo fatto dell'accesso alla composizione negoziata.",
    ]},

    { type: "h2", text: "Il fisco nella composizione negoziata: misure premiali e transazione fiscale", id: "fisco" },
    { type: "p", text: "Per la maggior parte delle imprese in crisi il creditore più ingombrante è l'erario. Su questo fronte la composizione negoziata offre due strumenti distinti, che vengono spesso confusi." },
    { type: "h3", text: "Le misure premiali (art. 25-bis CCII)" },
    { type: "p", text: "Operano sugli accessori e sulla dilazione, non sul capitale. Prevedono la riduzione degli interessi e delle sanzioni sui debiti tributari sorti prima del deposito dell'istanza, e la possibilità di ottenere una rateizzazione fino a 120 rate mensili anche per somme non ancora iscritte a ruolo — una dilazione che fuori dalla composizione negoziata non sarebbe disponibile." },
    { type: "h3", text: "La transazione fiscale (art. 23, comma 2-bis, CCII)" },
    { type: "p", text: "È la novità introdotta dal D.lgs. 136/2024, il cosiddetto correttivo-ter, in vigore dal 28 settembre 2024: consente di concludere, nell'ambito delle trattative, un accordo transattivo con l'Agenzia delle Entrate che preveda il pagamento parziale o dilazionato dei tributi amministrati dall'Agenzia. Qui si incide sul capitale, non solo sugli accessori." },
    { type: "note", text: "La transazione prevista dall'art. 23, comma 2-bis, riguarda i tributi amministrati dall'Agenzia delle Entrate: non si estende ai contributi previdenziali e assistenziali, che restano fuori dal perimetro dell'accordo transattivo in composizione negoziata. Per l'esposizione verso INPS gli strumenti restano quelli ordinari, descritti nella guida sui [debiti con INPS](/risorse/debiti-inps)." },

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

    { type: "h2", text: "Gli esiti a confronto", id: "esiti-confronto" },
    { type: "table", headers: ["Esito", "Serve il tribunale?", "Quando è la strada giusta"], rows: [
      ["Contratto con uno o più creditori", "No", "Le tensioni sono concentrate su poche posizioni"],
      ["Convenzione di moratoria", "No", "Serve tempo per far maturare azioni di risanamento già avviate"],
      ["Accordo sottoscritto anche dall'esperto", "No", "Si vogliono consolidare gli effetti dell'accordo e accedere alle misure premiali"],
      ["Accordo di ristrutturazione dei debiti", "Sì, omologazione", "Si raggiunge l'adesione qualificata dei creditori"],
      ["[Concordato preventivo](/risorse/concordato-preventivo)", "Sì", "Serve una soluzione concorsuale che vincoli tutti i creditori"],
      ["Concordato semplificato (art. 25-sexies CCII)", "Sì", "Le trattative sono fallite ma una liquidazione ordinata dà più dei valori di realizzo"],
      ["[Liquidazione giudiziale](/risorse/liquidazione-giudiziale)", "Sì", "Non c'è prospettiva di risanamento né di liquidazione concordata"],
    ]},
    { type: "p", text: "Il concordato semplificato merita una precisazione, perché è l'unico esito che non esisterebbe senza la composizione negoziata: vi si accede solo dopo che l'esperto ha dichiarato nella relazione finale che le trattative non hanno avuto esito positivo, e si caratterizza per l'assenza di voto dei creditori, che possono soltanto opporsi in sede di omologazione. È una via stretta e non un piano B automatico: il tribunale verifica che la proposta non arrechi pregiudizio ai creditori rispetto all'alternativa liquidatoria." },

    { type: "h2", text: "Le imprese sotto soglia e le realtà minori", id: "sotto-soglia" },
    { type: "p", text: "La composizione negoziata non è riservata alle imprese di dimensioni rilevanti. Vi possono accedere anche le imprese sotto soglia, con un procedimento semplificato e costi ridotti. Per la piccola impresa il vantaggio principale non è tanto la protezione dai creditori, quanto la presenza di un terzo qualificato che rende credibile una proposta che, avanzata dal solo imprenditore, verrebbe letta come l'ennesima richiesta di dilazione." },
    { type: "p", text: "Resta la linea di confine con il sovraindebitamento: l'imprenditore che non è assoggettabile a liquidazione giudiziale ha a disposizione anche il [concordato minore](/risorse/concordato-minore) e la [liquidazione controllata](/risorse/liquidazione-controllata-sovraindebitato). Quale strumento convenga dipende dalla continuità dell'attività: se l'impresa è viva e ha un mercato, la composizione negoziata viene prima; se l'attività è cessata o non recuperabile, si guarda direttamente alle procedure del sovraindebitamento." },

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
        q: "Posso ridurre i debiti fiscali con la composizione negoziata?",
        a: "Sì, ma con due strumenti diversi. Le misure premiali dell'art. 25-bis CCII riducono interessi e sanzioni e consentono di rateizzare fino a 120 rate anche somme non iscritte a ruolo. La transazione fiscale dell'art. 23, comma 2-bis, CCII — introdotta dal D.lgs. 136/2024 ed efficace dal 28 settembre 2024 — permette invece un accordo con l'Agenzia delle Entrate sul pagamento parziale o dilazionato dei tributi, incidendo anche sul capitale. I contributi previdenziali restano fuori da quest'ultimo accordo."
      },
      {
        q: "Quanto dura la composizione negoziata?",
        a: "L'incarico dell'esperto si considera concluso decorsi 180 giorni dall'accettazione, prorogabili quando lo richiedono tutte le parti o quando serve al buon esito delle trattative. Le misure protettive, se richieste, durano da 30 a 120 giorni e possono essere prorogate fino a un massimo complessivo di 240 giorni."
      },
      {
        q: "Durante le trattative perdo il controllo dell'azienda?",
        a: "No: non c'è spossessamento e l'imprenditore mantiene la gestione ordinaria e straordinaria. L'esperto non ha poteri gestori. L'imprenditore deve però informarlo preventivamente degli atti di straordinaria amministrazione: se l'esperto dissente e l'atto viene compiuto ugualmente, può iscrivere il proprio dissenso nel registro delle imprese, con l'effetto reputazionale che questo comporta nelle trattative con banche e fornitori."
      },
      {
        q: "Le banche possono revocare i fidi quando accedo alla composizione negoziata?",
        a: "Non per il solo fatto dell'accesso: la legge esclude che le linee di credito possano essere sospese o revocate unicamente in ragione dell'accesso alla composizione negoziata. Restano ferme le valutazioni fondate su altri elementi oggettivi della posizione, che vanno affrontate nella trattativa con l'istituto."
      },
      {
        q: "Cos'è il concordato semplificato e quando posso usarlo?",
        a: "È la procedura prevista dall'art. 25-sexies CCII, accessibile solo dopo che l'esperto ha dichiarato nella relazione finale che le trattative non hanno avuto esito positivo. Prevede la liquidazione del patrimonio senza voto dei creditori, che possono solo opporsi in sede di omologazione. Non è un piano B automatico: il tribunale verifica che la proposta non pregiudichi i creditori rispetto all'alternativa liquidatoria."
      },
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
  }
