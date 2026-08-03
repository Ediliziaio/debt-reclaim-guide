import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "debiti-banche-finanziarie",
  title: "Debiti con banche e finanziarie: cosa fare quando non si riesce più a pagare",
  excerpt: "Mutuo, prestito personale, fido revocato, finanziamento auto, carta revolving: i debiti bancari hanno regole e tempi specifici. Cosa succede in caso di insolvenza, segnalazione in Centrale Rischi, cessione a NPL, strumenti di difesa e di rinegoziazione.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "19 min",
  author: "Avv. Armando Rossi",
  cover: "from-trust to-navy",
  coverImage: "/covers/debiti-banche-finanziarie.webp",
  keywords: ["debiti banche", "prestiti banche", "mutuo non pagato", "fido revocato", "centrale dei rischi", "NPL", "cessione del credito", "saldo a stralcio banche", "debiti finanziarie"],
  intro: "I debiti con banche e finanziarie hanno caratteristiche peculiari rispetto agli altri tipi di esposizione: spesso sono garantiti da pegni, ipoteche o cessioni; sono registrati in archivi creditizi che incidono sulla reputazione finanziaria; possono essere ceduti a società di recupero specializzate (NPL); danno luogo a procedure esecutive con tempistiche tipiche. Capire come funziona il mondo dei debiti bancari è essenziale per affrontarli con consapevolezza, sia in fase di difficoltà sia nel momento in cui si decide la strategia di uscita.",
};

export const article: Article = {
  ...meta,
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

    { type: "h2", text: "Come la banca classifica la tua posizione", id: "classificazione" },
    { type: "p", text: "Prima ancora del recupero c'è la classificazione, ed è quella a determinare il comportamento della banca. Le categorie non sono scelte dal gestore della filiale: derivano dalle regole di vigilanza e producono effetti automatici sugli accantonamenti dell'istituto, che è il motivo per cui a un certo punto l'atteggiamento cambia da un giorno all'altro." },
    { type: "table", headers: ["Classificazione", "Quando scatta", "Cosa comporta per il debitore"], rows: [
      ["Esposizione in bonis", "Rapporto regolare", "Nessuna limitazione"],
      ["Scaduto deteriorato (past due)", "Arretrato continuativo oltre 90 giorni, superate le soglie di rilevanza", "Solleciti formali, blocco di nuove erogazioni"],
      ["Inadempienza probabile (UTP)", "La banca ritiene improbabile il rimborso integrale senza escussione delle garanzie, anche senza arretrati", "È la fase in cui la rinegoziazione è ancora possibile e conveniente per entrambi"],
      ["Sofferenza", "Stato di insolvenza, anche non accertato giudizialmente", "Revoca degli affidamenti, segnalazione, avvio del recupero, spesso cessione a terzi"],
    ]},
    { type: "p", text: "Due precisazioni utili. La prima: dal 2021 il default scatta al superamento congiunto di novanta giorni di arretrato continuativo e di soglie di rilevanza dell'importo scaduto, in valore assoluto e in percentuale sull'esposizione complessiva — non basta più compensare l'arretrato con la disponibilità su un altro conto. La seconda: l'inadempienza probabile non richiede rate impagate, si fonda su una valutazione prospettica. È la finestra in cui conviene muoversi, perché la banca ha ancora interesse a una soluzione negoziata." },

    { type: "h2", text: "La segnalazione in Centrale dei Rischi e nei SIC", id: "centrale-rischi" },
    { type: "p", text: "Esistono diversi archivi che registrano la posizione creditizia di un soggetto:" },
    { type: "ul", items: [
      "Centrale dei Rischi della Banca d'Italia: archivio pubblico per esposizioni significative (sopra una soglia minima)",
      "CRIF: il SIC privato più diffuso in Italia",
      "Experian, CTC: altri SIC privati operanti nel mercato italiano",
    ]},
    { type: "p", text: "La segnalazione di un'insolvenza in questi archivi ha effetti reputazionali rilevanti: le banche consultano gli archivi prima di concedere nuovi finanziamenti, e una posizione 'a sofferenza' rende quasi impossibile ottenere credito. La permanenza in archivio è di alcuni anni e segue regole precise stabilite dalle norme di settore e dai Codici deontologici." },

    { type: "note", text: "Le segnalazioni non veritiere o non rispettose delle norme procedurali (mancato preavviso di segnalazione, errori nelle date, errata classificazione) possono essere oggetto di reclamo all'ente segnalante e — in caso di mancato accoglimento — di ricorso all'Arbitro Bancario Finanziario (ABF) o al giudice ordinario per cancellazione." },

    { type: "h3", text: "Per quanto tempo resta la segnalazione" },
    { type: "p", text: "È la domanda che arriva sempre, di solito quando il debito è già stato chiuso e la banca nega comunque il finanziamento. I tempi di conservazione non dipendono dalla volontà dell'istituto: sono fissati dalla disciplina dei sistemi di informazione creditizia e decorrono da momenti diversi a seconda di come si è chiusa la posizione." },
    { type: "table", headers: ["Situazione", "Permanenza nei SIC"], rows: [
      ["Ritardo di una o due rate, poi regolarizzato", "12 mesi dalla regolarizzazione"],
      ["Ritardo di tre o più rate, poi regolarizzato", "24 mesi dalla regolarizzazione"],
      ["Morosità grave o sofferenza non regolarizzata", "36 mesi dalla scadenza contrattuale o dall'ultimo aggiornamento"],
      ["Richiesta di finanziamento non accolta o rinunciata", "Pochi mesi dalla richiesta"],
      ["Centrale dei Rischi della Banca d'Italia", "36 mesi di storico consultabile dagli intermediari"],
    ]},
    { type: "note", text: "Pagare non cancella la segnalazione: fa partire il conteggio. È l'aspettativa sbagliata più diffusa e va messa in conto quando si pianifica, ad esempio, l'acquisto di una casa dopo aver chiuso una posizione a stralcio. Diverso è il caso della segnalazione illegittima — mancato preavviso, importo errato, classificazione sbagliata — che si contesta e si fa rettificare." },

    { type: "h2", text: "La cessione del credito a società di recupero (NPL)", id: "npl" },
    { type: "p", text: "Le banche, soprattutto negli ultimi anni, hanno ceduto ingenti portafogli di crediti deteriorati (NPL, Non-Performing Loans) a società specializzate nel recupero. Quando un debito viene ceduto:" },
    { type: "ul", items: [
      "Il nuovo creditore (cessionario) subentra in tutti i diritti del cedente",
      "Il debitore riceve una comunicazione di cessione con i dati del nuovo creditore",
      "Le condizioni sostanziali del rapporto restano quelle originarie",
      "I tempi di prescrizione decorrono dalla data di esigibilità, non dalla cessione",
    ]},
    { type: "p", text: "Una caratteristica rilevante: le società che acquistano NPL hanno spesso pagato il credito a un valore molto inferiore al nominale (il 5-15% non è raro). Questo apre uno spazio di negoziazione: un saldo a stralcio al 20-30% del nominale può essere economicamente conveniente per la società cessionaria, e accettato." },

    { type: "h2", text: "Chiedere la prova di chi è davvero il creditore", id: "prova-titolarita" },
    { type: "p", text: "Dopo una cessione la richiesta di pagamento arriva da un soggetto con cui non si è mai contrattato. Il debitore non deve accettarlo sulla fiducia: ha diritto di verificare che chi scrive sia effettivamente titolare del credito." },
    { type: "p", text: "Le cessioni bancarie avvengono di norma in blocco ai sensi dell'art. 58 del Testo Unico Bancario, con pubblicazione dell'avviso in Gazzetta Ufficiale che sostituisce la notifica individuale al singolo debitore. La pubblicazione, però, prova che è avvenuta una cessione di un insieme di crediti, non che quel preciso rapporto vi fosse incluso." },
    { type: "ul", items: [
      "Chiedere per iscritto l'indicazione degli estremi di pubblicazione dell'avviso di cessione e la prova dell'inclusione della propria posizione nel perimetro ceduto.",
      "Chiedere l'estratto conto completo e il conteggio analitico di capitale, interessi e spese alla data della richiesta.",
      "Verificare che chi scrive sia il cessionario o un mandatario munito di procura, distinguendo il titolare del credito dalla società di recupero che agisce per suo conto.",
      "Controllare che gli interessi applicati dopo la cessione siano quelli contrattuali e non ricalcolati.",
      "Verificare la prescrizione: la cessione non interrompe né sospende il termine, che continua a decorrere come prima.",
    ]},
    { type: "p", text: "Questa verifica non è ostruzionismo: è il presupposto di qualunque trattativa seria, perché nessun accordo a stralcio ha valore se sottoscritto con un soggetto che non può liberare il debitore. Sui termini di estinzione del credito si veda la guida sulla [prescrizione dei debiti](/risorse/prescrizione-debiti)." },

    { type: "h2", text: "Come si costruisce una proposta a stralcio credibile", id: "proposta-stralcio" },
    { type: "p", text: "Chi ha comprato un portafoglio deteriorato l'ha pagato una frazione del valore nominale e ragiona su tempi di recupero e costi legali, non su principi. Una proposta che tiene conto di questa logica ottiene molto più di una richiesta generica di sconto." },
    { type: "ol", items: [
      "Documentare la situazione: reddito, carichi familiari, altre esposizioni. Una proposta non supportata da documenti viene letta come una tattica dilatoria.",
      "Indicare la provvista e la sua provenienza: liquidità immediata, aiuto familiare, cessione di un bene. Chi acquista NPL preferisce un incasso certo e vicino a uno teorico e lontano.",
      "Proporre una somma unica o poche rate ravvicinate: più il piano si allunga, più la percentuale richiesta sale.",
      "Mettere per iscritto tutto prima di pagare, con la formula della liberazione integrale del debitore e della rinuncia a ogni ulteriore pretesa e azione esecutiva.",
      "Farsi rilasciare la quietanza a saldo e stralcio e la dichiarazione di aggiornamento delle segnalazioni nei sistemi di informazione creditizia.",
    ]},
    { type: "note", text: "Un versamento eseguito senza accordo scritto vale come acconto: riduce il debito dell'importo pagato, non lo chiude, e interrompe la prescrizione. È l'errore che vanifica più trattative. Il metodo è approfondito nella guida sul [saldo e stralcio](/risorse/saldo-e-stralcio-debiti)." },

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
        q: "Ho pagato il debito: quando sparisce la segnalazione?",
        a: "Il pagamento non cancella la segnalazione, fa partire il conteggio. Nei sistemi di informazione creditizia un ritardo di una o due rate poi regolarizzato resta 12 mesi dalla regolarizzazione, un ritardo di tre o più rate 24 mesi, mentre una sofferenza o una morosità grave non regolarizzata resta 36 mesi. La Centrale dei Rischi della Banca d'Italia conserva 36 mesi di storico consultabile."
      },
      {
        q: "Come faccio a sapere se chi mi scrive è davvero il proprietario del credito?",
        a: "Chiedendolo per iscritto. Le cessioni bancarie avvengono in blocco ai sensi dell'art. 58 del Testo Unico Bancario, con avviso pubblicato in Gazzetta Ufficiale al posto della notifica individuale: la pubblicazione prova che una cessione c'è stata, non che la tua posizione fosse inclusa. Chiedi gli estremi dell'avviso, la prova dell'inclusione del tuo rapporto e il conteggio analitico, e verifica se chi scrive è il cessionario o un mandatario."
      },
      {
        q: "Che differenza c'è tra inadempienza probabile e sofferenza?",
        a: "L'inadempienza probabile (UTP) è una valutazione prospettica: la banca ritiene improbabile il rimborso integrale senza escutere le garanzie, anche in assenza di rate impagate. La sofferenza presuppone invece uno stato di insolvenza, anche non accertato dal giudice, e porta alla revoca degli affidamenti e all'avvio del recupero. La fase UTP è quella in cui la rinegoziazione è ancora nell'interesse di entrambe le parti."
      },
      {
        q: "Conviene di più trattare con la banca o con la società che ha comprato il credito?",
        a: "Di regola con il cessionario. Chi acquista un portafoglio deteriorato lo paga una frazione del nominale e valuta la proposta sui tempi di recupero e sui costi legali, non sul valore contabile: i margini di trattativa sono più ampi. La condizione resta la stessa in entrambi i casi: accordo scritto con liberazione integrale prima di qualunque versamento."
      },
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
  }
