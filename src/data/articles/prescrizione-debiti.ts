import type { Article } from "../articles";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "prescrizione-debiti",
  title: "Prescrizione dei debiti: tempi, interruzione e come farla valere correttamente",
  excerpt:
    "Guida tecnica alla prescrizione dei debiti civili: termini per tipologia di credito, atti di interruzione, sospensione, prescrizione delle cartelle esattoriali e modi corretti per opporla.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "18 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: heroLawyer,
  keywords: [
    "prescrizione debiti",
    "prescrizione decennale",
    "interruzione prescrizione",
    "art 2946 cc",
    "termini prescrizione",
  ],
  intro:
    "La prescrizione è un istituto civilistico essenziale nel diritto del credito: il decorso del tempo, in assenza di iniziative del titolare, estingue il diritto e impedisce al creditore di pretenderne l'adempimento. Conoscere i termini di prescrizione, i meccanismi di interruzione e di sospensione e i modi corretti per farla valere è strumento indispensabile per chi affronta posizioni debitorie risalenti. La materia è disciplinata dagli artt. 2934-2963 c.c., con discipline speciali per cartelle esattoriali, contributi previdenziali e specifici rapporti.",
  content: [
    { type: "h2", text: "La prescrizione: nozione e funzione", id: "nozione" },
    {
      type: "p",
      text: "La prescrizione, ai sensi dell'art. 2934 c.c., estingue il diritto per effetto dell'inerzia del titolare per il tempo determinato dalla legge. È un istituto di ordine pubblico che risponde a esigenze di certezza dei rapporti giuridici: il legislatore presume che, se il creditore non esercita il proprio diritto per un periodo significativo, il rapporto sia ormai consolidato a favore del debitore e non meriti più tutela. La prescrizione opera come strumento di stabilizzazione: dopo il decorso del termine, il debitore può rifiutare il pagamento senza incorrere in responsabilità.",
    },
    {
      type: "p",
      text: "Va distinta dalla decadenza (artt. 2964-2969 c.c.), che ha funzione differente: la decadenza preclude l'esercizio del diritto se non compiuto entro un termine fisso e perentorio, indipendentemente da circostanze sopravvenute (salve eccezioni). La prescrizione, invece, presuppone l'inerzia del titolare e ammette interruzione e sospensione. Le due figure rispondono a logiche diverse, anche se nella pratica vengono talora confuse.",
    },
    {
      type: "p",
      text: "Un aspetto cruciale: la prescrizione non opera d'ufficio. L'art. 2938 c.c. è esplicito: il giudice non può rilevare d'ufficio la prescrizione non opposta. Significa che, anche se un debito è in concreto prescritto, il debitore deve formalmente eccepire la prescrizione per beneficiarne. Se tace, il credito viene considerato esigibile a tutti gli effetti. Questo principio rende fondamentale, sul piano operativo, sapere riconoscere i casi di prescrizione e farla valere nelle sedi opportune.",
    },
    {
      type: "image",
      src: heroLawyer,
      alt: "Avvocato che consulta codici di diritto civile",
      caption: "La prescrizione va eccepita: il debitore deve attivarsi formalmente per beneficiarne.",
    },

    { type: "h2", text: "La prescrizione ordinaria decennale (art. 2946 c.c.)", id: "decennale" },
    {
      type: "p",
      text: "L'art. 2946 c.c. detta la regola generale: salvo i casi in cui la legge dispone diversamente, i diritti si prescrivono con il decorso di dieci anni. È la prescrizione ordinaria, applicabile in via residuale a tutti i diritti per i quali non sia previsto un termine speciale. Rientrano nella prescrizione decennale, ad esempio, i diritti derivanti dai contratti in generale, l'azione di ripetizione di indebito, il diritto al risarcimento del danno da inadempimento contrattuale.",
    },
    {
      type: "p",
      text: "Sono soggetti a prescrizione decennale anche i diritti consolidati con sentenza passata in giudicato (art. 2953 c.c.): la cosiddetta actio iudicati. Se un creditore ottiene una sentenza di condanna o un decreto ingiuntivo definitivo, il termine di prescrizione del credito originario — anche se più breve — viene assorbito dal nuovo termine decennale che decorre dal passaggio in giudicato della pronuncia. È una regola di grande importanza pratica: il decreto ingiuntivo definitivo trasforma il termine breve in decennale.",
    },

    { type: "h2", text: "I termini di prescrizione speciale", id: "termini-speciali" },
    {
      type: "p",
      text: "Il codice civile e le leggi speciali prevedono numerosi termini di prescrizione più brevi rispetto al decennio ordinario. Sono termini detti 'brevi' o 'speciali', dettati per esigenze specifiche di ogni categoria di rapporti. Conoscerli è essenziale per chi affronta posizioni debitorie risalenti, perché spesso il debito che sembra ancora vivo è in realtà già prescritto.",
    },

    { type: "h3", text: "Prescrizione quinquennale (art. 2948 c.c.)" },
    {
      type: "p",
      text: "Si prescrivono in cinque anni le prestazioni periodiche dovute con cadenza annuale o inferiore: canoni di locazione, interessi, retribuzioni periodiche, rendite, prestazioni alimentari. Sono prescritti in cinque anni anche le sanzioni pecuniarie civili e amministrative (salvo deroghe), le indennità di fine rapporto, i contributi previdenziali e assicurativi obbligatori (con regole specifiche dettate dalla disciplina previdenziale).",
    },
    {
      type: "p",
      text: "Si prescrive in cinque anni anche il diritto al risarcimento del danno da fatto illecito extracontrattuale (art. 2947 c.c.), salvo l'ipotesi del danno derivante da circolazione di veicoli (due anni) e del danno conseguente a fatto astrattamente costituente reato (in cui si applica il termine di prescrizione del reato, se più lungo).",
    },

    { type: "h3", text: "Prescrizione triennale" },
    {
      type: "p",
      text: "Si prescrivono in tre anni, ad esempio, le indennità relative a contratti di mediazione, alcuni diritti del professionista per le proprie prestazioni (art. 2956 c.c., entro condizioni specifiche), il diritto del notaio agli onorari, i diritti dei farmacisti. Si tratta in genere di prestazioni connesse all'esercizio professionale o ad attività di intermediazione, con termine ridotto.",
    },

    { type: "h3", text: "Prescrizione biennale e annuale" },
    {
      type: "p",
      text: "Termini ancora più brevi si applicano in casi specifici: due anni per il risarcimento del danno da circolazione di veicoli (art. 2947, comma 2, c.c.); un anno per il prezzo di trasporto, vitto e alloggio in albergo, prestazione di insegnanti per insegnamento impartito per periodi non superiori a un mese (artt. 2954-2955 c.c.); un anno per il pagamento delle merci vendute al consumatore (art. 2955, n. 5, c.c., con dibattito interpretativo).",
    },

    {
      type: "table",
      headers: ["Tipologia di debito", "Termine", "Norma", "Note"],
      rows: [
        ["Debiti contrattuali in generale", "10 anni", "art. 2946 c.c.", "Termine ordinario residuale"],
        ["Crediti da sentenza/DI definitivo", "10 anni", "art. 2953 c.c.", "Actio iudicati"],
        ["Canoni di locazione, interessi", "5 anni", "art. 2948 c.c.", "Prestazioni periodiche"],
        ["Risarcimento extracontrattuale", "5 anni", "art. 2947 c.c.", "Diverso da inadempimento"],
        ["Sanzioni amministrative pecuniarie", "5 anni", "L. 689/1981 art. 28", "Salvo norme speciali"],
        ["Onorari professionisti", "3 anni", "art. 2956 c.c.", "Condizioni specifiche"],
        ["Hotel, ristorante, vitto", "1 anno", "art. 2954 c.c.", "Prestazioni alberghiere"],
        ["Premi assicurativi", "1 anno", "art. 2952 c.c.", "Dal giorno della scadenza"],
        ["Danni da circolazione veicoli", "2 anni", "art. 2947 c.c.", "Salve regole speciali"],
      ],
    },

    {
      type: "note",
      text: "L'individuazione del termine corretto richiede un'analisi puntuale della causa del debito. Lo stesso rapporto può generare crediti con termini di prescrizione diversi: ad esempio, in un contratto di locazione il diritto alla restituzione del bene si prescrive in dieci anni, ma i canoni mensili maturati si prescrivono in cinque anni. Una valutazione superficiale rischia di applicare il termine sbagliato.",
    },

    { type: "h2", text: "L'interruzione della prescrizione (artt. 2943-2945 c.c.)", id: "interruzione" },
    {
      type: "p",
      text: "L'interruzione è il meccanismo per cui il termine di prescrizione, una volta intervenuto un atto interruttivo, ricomincia integralmente a decorrere da capo. È un istituto di grande importanza pratica: ogni atto interruttivo azzera il computo e fa ripartire il termine. Un debito formalmente prescritto può non esserlo in realtà se nel tempo si sono verificati atti interruttivi.",
    },

    { type: "h3", text: "Atti interruttivi tipici (art. 2943 c.c.)" },
    {
      type: "ul",
      items: [
        "Notificazione dell'atto di citazione, anche se davanti a giudice incompetente",
        "Notificazione del decreto ingiuntivo",
        "Notificazione del precetto",
        "Notificazione del pignoramento",
        "Domanda proposta nel corso di un giudizio (compresa la domanda riconvenzionale)",
        "Costituzione in mora del debitore (art. 1219 c.c.) tramite atto scritto",
        "Insinuazione al passivo nelle procedure concorsuali",
        "Domanda di insinuazione tardiva nella liquidazione giudiziale",
      ],
    },

    {
      type: "p",
      text: "Tra gli atti interruttivi tipici il più ricorrente, nella pratica del recupero crediti, è la costituzione in mora ex art. 1219 c.c.: una lettera o PEC con cui il creditore intima formalmente il pagamento. Per essere idonea a interrompere la prescrizione, la costituzione in mora deve essere scritta, indirizzata personalmente al debitore, contenere una richiesta chiara e specifica di pagamento, indicare con sufficiente precisione il credito di cui si chiede l'adempimento. Una generica richiesta di chiarimenti o una comunicazione informale non costituisce mora idonea.",
    },

    { type: "h3", text: "Il riconoscimento del debito (art. 2944 c.c.)" },
    {
      type: "p",
      text: "L'art. 2944 c.c. prevede un'ulteriore causa di interruzione: il riconoscimento del diritto da parte del debitore. Quando il debitore, anche tacitamente, riconosce di dover pagare, la prescrizione si interrompe. Sono atti di riconoscimento, ad esempio: il pagamento parziale, la richiesta di dilazione, la sottoscrizione di piani di rientro, la firma di una conferma di estratto conto, la richiesta di rateizzazione di cartelle, l'adesione a definizioni agevolate.",
    },
    {
      type: "p",
      text: "Il riconoscimento ha effetto interruttivo anche se compiuto in via stragiudiziale e anche senza forme particolari. Per questo motivo, nelle prassi di gestione del debito, è essenziale che il debitore valuti con attenzione cosa firmare e cosa dichiarare: una semplice firma su un piano di rientro può azzerare un termine di prescrizione ormai vicino al compimento.",
    },

    { type: "h3", text: "L'effetto interruttivo permanente nei processi" },
    {
      type: "p",
      text: "L'art. 2945, comma 2, c.c. prevede che, se l'interruzione è avvenuta in forza di domanda giudiziale, la prescrizione non corre fino al passaggio in giudicato della sentenza che definisce il giudizio. È il cosiddetto effetto interruttivo permanente: per tutta la durata del processo la prescrizione resta sospesa. Inoltre, ai sensi dell'art. 2953 c.c., dal passaggio in giudicato della sentenza decorre il nuovo termine decennale (actio iudicati), anche se il diritto originario aveva termine breve.",
    },

    {
      type: "note",
      text: "L'effetto interruttivo è 'istantaneo' (un solo evento, da cui ricomincia il termine) per gli atti stragiudiziali tipici (lettera di mora, PEC), mentre è 'permanente' per gli atti processuali (citazione, decreto ingiuntivo, precetto), che bloccano il decorso fino al termine del processo. La distinzione è cruciale per il computo concreto.",
    },

    { type: "h2", text: "La sospensione della prescrizione (artt. 2941-2942 c.c.)", id: "sospensione" },
    {
      type: "p",
      text: "Diverso dall'interruzione è il meccanismo della sospensione. Mentre l'interruzione azzera il termine e lo fa ripartire da capo, la sospensione semplicemente blocca il decorso del tempo per la durata della causa sospensiva. Quando la causa cessa, il termine riprende a decorrere dal punto in cui si era fermato.",
    },
    {
      type: "p",
      text: "Le cause di sospensione sono tassativamente elencate dagli artt. 2941-2942 c.c. e riguardano in genere rapporti tra soggetti per i quali sarebbe iniquo far decorrere la prescrizione. Tra queste: tra coniugi, tra genitori e figli minori, tra tutore e tutelato, tra amministratore e società amministrata per il periodo della carica, in tutti i casi previsti dalla legge speciale.",
    },
    {
      type: "p",
      text: "Una causa di sospensione di particolare rilievo è quella legata alla pendenza di una controversia: ad esempio, l'art. 2945, comma 3, c.c. prevede che se il processo si estingue, l'interruzione si considera come non avvenuta e la prescrizione riprende a decorrere dal momento in cui era stata interrotta. È una previsione tecnicamente delicata, che richiede attenzione nel computo dei termini in caso di estinzione del giudizio.",
    },

    { type: "h2", text: "Prescrizione delle cartelle esattoriali", id: "cartelle" },
    {
      type: "p",
      text: "Una delle aree più rilevanti per l'utenza è quella della prescrizione dei crediti iscritti a ruolo presso l'Agenzia Entrate Riscossione. La materia ha subito un'evoluzione giurisprudenziale e normativa di estrema importanza, in particolare con l'intervento delle Sezioni Unite della Cassazione (sentenza n. 23397/2016) e con interventi legislativi successivi.",
    },

    { type: "h3", text: "I termini di prescrizione per i tributi" },
    {
      type: "p",
      text: "Le Sezioni Unite della Cassazione, con la sentenza n. 23397/2016, hanno chiarito che, se l'avviso di accertamento o la cartella di pagamento non viene impugnata e diventa definitiva, ciò non comporta automaticamente l'allungamento del termine di prescrizione del credito tributario sottostante. Significa che ciascun tributo conserva il proprio termine di prescrizione originario, anche dopo l'iscrizione a ruolo e la notifica della cartella.",
    },

    {
      type: "table",
      headers: ["Tipologia di credito iscritto a ruolo", "Termine prescrizione", "Note"],
      rows: [
        ["IRPEF, IRES, IVA e tributi erariali", "10 anni", "Termine ordinario, salvo casi specifici"],
        ["IRAP e tributi locali (IMU, TARI, TASI)", "5 anni", "Prestazioni periodiche annuali"],
        ["Contributi INPS, INAIL", "5 anni", "Art. 3 L. 335/1995"],
        ["Sanzioni amministrative (Codice della Strada)", "5 anni", "L. 689/1981"],
        ["Bollo auto", "3 anni", "Termine speciale"],
        ["Canone RAI", "10 anni", "Tributo erariale"],
      ],
    },

    { type: "h3", text: "Termini di prescrizione e atti dell'AdER" },
    {
      type: "p",
      text: "L'AdER, nella sua attività di riscossione, compie atti che hanno effetto interruttivo della prescrizione: notifica di cartelle, intimazioni di pagamento, comunicazioni di ipoteca, comunicazioni di fermo amministrativo, pignoramenti. Ogni atto regolarmente notificato interrompe la prescrizione. Tra un atto e il successivo, il termine ricomincia a decorrere: se trascorre il termine senza ulteriore atto, il credito si prescrive.",
    },
    {
      type: "p",
      text: "L'esame della prescrizione delle cartelle richiede quindi una ricostruzione cronologica accurata: data di notifica della cartella, data degli eventuali atti successivi (intimazioni, iscrizioni di ipoteca, pignoramenti), verifica del rispetto del termine corrispondente alla natura del credito. È un'analisi tecnica spesso sottovalutata che può portare alla cancellazione di posizioni che il debitore credeva ancora attive.",
    },

    {
      type: "note",
      text: "L'iscrizione di ipoteca esattoriale e il fermo amministrativo, quando regolarmente comunicati al debitore, hanno effetto interruttivo della prescrizione. Tuttavia, secondo prassi consolidata, la mera comunicazione di disponibilità di un debito (ad esempio un estratto di ruolo richiesto dal contribuente) non costituisce atto interruttivo: serve un atto formale notificato dall'AdER.",
    },

    { type: "h2", text: "Come opporre la prescrizione: procedura operativa", id: "opporre" },
    {
      type: "p",
      text: "Per beneficiare della prescrizione il debitore deve attivarsi formalmente. Non basta saperla intervenuta: occorre eccepirla, ovvero farla valere nelle sedi appropriate. La modalità varia in funzione del contesto in cui ci si trova.",
    },

    { type: "h3", text: "Eccezione in fase stragiudiziale" },
    {
      type: "p",
      text: "Se il creditore invia una richiesta di pagamento per un credito che ritieni prescritto, è opportuno rispondere formalmente, con PEC o raccomandata, eccependo la prescrizione e indicando — anche sinteticamente — gli elementi su cui si fonda l'eccezione (data di scadenza del debito originario, assenza di atti interruttivi). La risposta scritta è importante: documenta la tua posizione e, in caso di successivo giudizio, costituisce elemento di prova del tuo atteggiamento non riconoscente.",
    },

    { type: "h3", text: "Eccezione nel processo civile" },
    {
      type: "p",
      text: "Se il creditore agisce in giudizio (citazione, decreto ingiuntivo), la prescrizione va eccepita formalmente nei termini processuali. Per il decreto ingiuntivo, l'eccezione va proposta con l'opposizione ai sensi dell'art. 645 c.p.c., entro 40 giorni dalla notifica del decreto. Nel giudizio ordinario, l'eccezione va contenuta nella comparsa di risposta tempestivamente depositata. Mancare i termini processuali comporta la decadenza dall'eccezione: il giudice non potrà più rilevare la prescrizione anche se in concreto maturata.",
    },

    { type: "h3", text: "Opposizione all'esecuzione" },
    {
      type: "p",
      text: "Se il creditore agisce in via esecutiva (precetto, pignoramento), la prescrizione può essere eccepita con opposizione all'esecuzione ex art. 615 c.p.c. (in genere entro venti giorni dalla notifica del precetto, oppure successivamente con opposizione agli atti esecutivi nei termini di rito). I tempi sono stretti e gli aspetti tecnici complessi: l'assistenza legale è essenziale.",
    },

    { type: "h3", text: "Opposizione a cartella esattoriale" },
    {
      type: "p",
      text: "Per le cartelle esattoriali la sede di opposizione varia in base alla natura del credito. Le cartelle relative a tributi vanno impugnate dinanzi alle Corti di Giustizia Tributaria (ex Commissioni tributarie); quelle relative a sanzioni amministrative ai sensi dell'art. 23 L. 689/1981 (Giudice di Pace per importi minori, Tribunale per importi maggiori); quelle relative a contributi previdenziali davanti al Giudice del Lavoro. I termini di opposizione sono generalmente brevi (60 giorni) e perentori. Una volta scaduti i termini di impugnazione della cartella, la prescrizione può comunque essere eccepita successivamente con riferimento agli atti esecutivi successivi (pignoramenti, intimazioni).",
    },

    {
      type: "ol",
      items: [
        "Acquisire la copia integrale dell'atto contestato e verificare data e modalità di notifica",
        "Ricostruire la cronologia degli atti interruttivi precedenti (cartelle, intimazioni, sentenze, lettere di mora)",
        "Individuare la natura del credito e il termine di prescrizione applicabile",
        "Verificare se tra ciascun atto interruttivo e il successivo sia trascorso il termine intero",
        "Identificare la sede competente per l'eccezione (tribunale ordinario, giudice di pace, CGT)",
        "Calcolare i termini perentori per l'impugnazione o l'opposizione",
        "Predisporre l'atto di opposizione/impugnazione con i motivi di prescrizione adeguatamente argomentati",
        "Depositare nei termini, allegando documentazione probatoria",
        "Coltivare il giudizio fino alla decisione, valorizzando in udienza la posizione",
      ],
    },

    { type: "h2", text: "Decreto ingiuntivo e prescrizione", id: "decreto-ingiuntivo" },
    {
      type: "p",
      text: "Un caso che merita approfondimento è il rapporto tra decreto ingiuntivo e prescrizione. Il decreto ingiuntivo, notificato dal creditore, ha valore di atto interruttivo della prescrizione (art. 2943 c.c.). Se il debitore non propone opposizione entro 40 giorni dalla notifica (art. 641 c.p.c.), il decreto diventa esecutivo e definitivo. Ai sensi dell'art. 2953 c.c., dal passaggio in giudicato del decreto definitivo decorre un nuovo termine decennale, anche se il credito originario aveva termine breve.",
    },
    {
      type: "p",
      text: "Significa che, ad esempio, un canone di locazione (termine quinquennale) per il quale il locatore abbia ottenuto un decreto ingiuntivo definitivo si prescrive in dieci anni dal passaggio in giudicato del decreto. È un effetto importante: la mancata opposizione tempestiva trasforma il termine breve in un termine lungo. Per questo è essenziale, di fronte a un decreto ingiuntivo, valutare immediatamente se proporre opposizione (anche per far valere la prescrizione del credito originario, se già allora compiuta), entro i tempi rigorosi previsti dalla legge.",
    },
    {
      type: "p",
      text: "Una nota tecnica: se il debitore, di fronte al decreto ingiuntivo, è stato in qualche modo riconoscente del debito (ad esempio ha pagato qualcosa, ha chiesto una dilazione, ha firmato un piano di rientro nel periodo immediatamente precedente la notifica), la prescrizione potrebbe risultare interrotta più volte e di conseguenza non ancora compiuta. L'analisi cronologica completa è imprescindibile prima di costruire un'eccezione di prescrizione.",
    },

    { type: "h2", text: "Casi particolari di prescrizione", id: "casi-particolari" },
    {
      type: "p",
      text: "Esistono casistiche peculiari che meritano una segnalazione, sia perché frequenti nella pratica sia perché generano spesso dubbi interpretativi.",
    },

    { type: "h3", text: "Bollette di utenze (luce, gas, acqua, telefono)" },
    {
      type: "p",
      text: "Per le forniture di servizi di pubblica utilità (elettricità, gas, acqua, telefonia) il termine di prescrizione è stato ridotto a due anni per le bollette emesse a partire dal 2018 (per l'elettricità e il gas) e dal 2019 (per l'acqua e i rifiuti), per effetto della L. 205/2017 (legge di bilancio 2018) e successive modifiche. Prima di queste date, e per altre tipologie di servizio, il termine quinquennale è quello applicabile in via residuale.",
    },

    { type: "h3", text: "Mutui e finanziamenti bancari" },
    {
      type: "p",
      text: "Per le rate di mutuo e di finanziamento, la giurisprudenza è oscillante. Sembra prevalere l'orientamento che applica la prescrizione decennale ordinaria al diritto alla restituzione del capitale e quella quinquennale agli interessi periodici. La materia è complessa e va valutata caso per caso, anche tenuto conto della giurisprudenza più recente.",
    },

    { type: "h3", text: "Sanzioni penali pecuniarie" },
    {
      type: "p",
      text: "Le sanzioni penali pecuniarie hanno regole specifiche di prescrizione, in parte differenti rispetto a quelle civilistiche, e regolate dal codice penale (artt. 172-173 c.p.). Per i debiti penali iscritti a ruolo presso l'AdER si applicano comunque, per la riscossione, i termini di prescrizione previsti dal diritto civile, salvo specifiche disposizioni di legge.",
    },

    {
      type: "image",
      src: authorityLegal,
      alt: "Codice civile aperto su sezione delle prescrizioni",
      caption: "Gli artt. 2934-2963 c.c. costituiscono il quadro generale dell'istituto della prescrizione.",
    },

    { type: "h2", text: "Errori frequenti nella gestione della prescrizione", id: "errori" },
    {
      type: "p",
      text: "La gestione della prescrizione è disseminata di trappole pratiche. Vale la pena passarne in rassegna le principali, perché la consapevolezza del rischio è il primo passo per evitarlo.",
    },
    {
      type: "ul",
      items: [
        "Pagare anche parzialmente un debito potenzialmente prescritto: il pagamento interrompe la prescrizione e potrebbe configurare riconoscimento del debito (art. 2944 c.c.)",
        "Firmare piani di rientro su debiti antichi senza prima verificare la prescrizione",
        "Rispondere a richieste di pagamento con dichiarazioni di volontà di pagare 'appena possibile': potrebbero valere come riconoscimento",
        "Ignorare la notifica di un decreto ingiuntivo, lasciandolo diventare definitivo e perdendo la possibilità di eccepire la prescrizione del credito originario",
        "Non distinguere correttamente tra interruzione (azzera il termine) e sospensione (blocca temporaneamente)",
        "Sottovalutare il termine ridotto a due anni per le utenze post-2018",
        "Confondere prescrizione e decadenza, applicando regole sbagliate",
        "Eccepire la prescrizione senza un'analisi documentale completa (rischiando un rigetto motivato che fa stato anche per gli atti successivi)",
      ],
    },

    { type: "h2", text: "Prescrizione e novità normative recenti", id: "novita" },
    {
      type: "p",
      text: "Negli ultimi anni la disciplina della prescrizione ha conosciuto interventi normativi rilevanti. La già citata L. 205/2017 ha ridotto a due anni i termini per alcune utenze. La giurisprudenza delle Sezioni Unite della Cassazione ha definito principi importanti in materia di cartelle esattoriali, sentenze non impugnate, prescrizione dei contributi previdenziali. Le finestre di rottamazione delle cartelle hanno modificato il quadro delle interruzioni, perché l'adesione del debitore comporta riconoscimento del debito.",
    },
    {
      type: "p",
      text: "Sul piano internazionale, va segnalata la disciplina specifica per i crediti transfrontalieri nell'ambito UE, regolata dal Regolamento Roma I per i contratti e dai regolamenti specifici sui titoli esecutivi europei. Per il debitore italiano con creditori esteri, o viceversa, la materia diventa tecnicamente complessa e richiede analisi specifica.",
    },

    { type: "h2", text: "Domande frequenti sulla prescrizione dei debiti", id: "faq" },
    {
      type: "faq",
      items: [
        {
          q: "Se non pago un debito per molti anni, si prescrive automaticamente?",
          a: "Il decorso del termine di prescrizione è una condizione necessaria, ma non sufficiente. Occorre anche che nel frattempo non siano intervenuti atti interruttivi (lettere di mora, decreti ingiuntivi, riconoscimento del debito) o cause di sospensione. Inoltre, una volta maturata, la prescrizione va formalmente eccepita: il giudice non la rileva d'ufficio (art. 2938 c.c.). Significa che, anche se in concreto prescritto, devi attivarti formalmente per beneficiare dell'effetto estintivo.",
        },
        {
          q: "Una lettera di sollecito da una società di recupero interrompe la prescrizione?",
          a: "Sì, se contiene una richiesta di pagamento chiara, specifica del credito e personale al debitore. La lettera di mora non richiede forme rigide ma deve essere idonea, secondo i criteri dell'art. 1219 c.c., a costituire in mora. PEC e raccomandate sono i mezzi più sicuri per chi invia; per chi riceve, ogni sollecito formale va valutato come potenziale atto interruttivo. Comunicazioni generiche, telefoniche o di mera natura informativa non hanno effetto interruttivo.",
        },
        {
          q: "Se chiedo una rateizzazione di una cartella, perdo la prescrizione?",
          a: "Sì, perché la richiesta di rateizzazione implica riconoscimento del debito e quindi interrompe la prescrizione (art. 2944 c.c.). Prima di chiedere una rateizzazione di cartelle datate, è opportuno verificare se queste siano già prescritte: in tal caso, conviene eccepire la prescrizione anziché pagare. La verifica va condotta da un professionista esaminando l'estratto di ruolo e gli atti interruttivi notificati dall'AdER nel tempo.",
        },
        {
          q: "Il decreto ingiuntivo non opposto fa partire la prescrizione decennale?",
          a: "Sì. Una volta decorsi i 40 giorni dalla notifica senza opposizione (art. 645 c.p.c.) e dichiarata l'esecutività, il decreto diventa definitivo. Dal passaggio in giudicato decorre la prescrizione decennale ex art. 2953 c.c., anche se il credito originario aveva termine breve. Per questo è essenziale, ricevuta la notifica di un decreto ingiuntivo, valutare immediatamente l'eventuale opposizione, perché la mancata opposizione tempestiva consolida il titolo per dieci anni.",
        },
        {
          q: "Le multe stradali si prescrivono in quanto tempo?",
          a: "Le sanzioni amministrative del Codice della Strada si prescrivono in cinque anni dal giorno in cui è stata commessa la violazione, ai sensi dell'art. 28 L. 689/1981. Una volta iscritta a ruolo e notificata la cartella, ogni atto regolarmente notificato (intimazioni, pignoramenti) interrompe il termine, che ricomincia a decorrere. Tra un atto e il successivo, il decorso di cinque anni completi senza ulteriori atti comporta la prescrizione del credito.",
        },
        {
          q: "Posso opporre la prescrizione di una cartella anche se non l'ho impugnata a suo tempo?",
          a: "Sì, ma con distinzioni. Non puoi più contestare la legittimità della cartella nel merito (per quello servivano i termini di impugnazione originari). Puoi però eccepire la prescrizione dei singoli crediti iscritti a ruolo se, tra la notifica della cartella e gli atti successivi, è trascorso il termine senza interruzioni. L'opposizione va proposta avverso il primo atto utile (intimazione, pignoramento) nei termini di rito.",
        },
        {
          q: "Cosa significa che la prescrizione 'non opera d'ufficio'?",
          a: "Significa che il giudice non può rilevare autonomamente l'avvenuta prescrizione: deve essere il debitore (o la parte interessata) a farla valere come eccezione, nei modi e nei tempi processuali previsti. Se il debitore non eccepisce la prescrizione, il giudice tratta il credito come pienamente esigibile, anche se in concreto il termine è ampiamente decorso. È una regola di estrema importanza pratica: senza un'attività formale del debitore, il beneficio della prescrizione non si produce.",
        },
        {
          q: "Se firmo una conferma di estratto conto, interrompo la prescrizione?",
          a: "Sì. La sottoscrizione di una conferma di estratto conto, in cui è esposto il saldo a debito del cliente, costituisce riconoscimento del debito ai sensi dell'art. 2944 c.c. e interrompe la prescrizione. Per questo motivo molte banche e finanziarie inviano periodicamente comunicazioni che, se firmate o anche solo confermate, hanno l'effetto di azzerare il decorso del termine. Va prestata attenzione a cosa si firma, soprattutto su rapporti datati.",
        },
        {
          q: "Esiste un termine di prescrizione per i debiti previdenziali (INPS)?",
          a: "Sì. L'art. 3 della L. 335/1995 ha ridotto a cinque anni il termine di prescrizione dei contributi previdenziali e assistenziali, sostituendo il precedente termine decennale. Si applica al diritto dell'INPS di pretendere il pagamento dei contributi non versati. Anche qui, atti interruttivi (avvisi di addebito, cartelle, ingiunzioni) azzerano il termine, che ricomincia a decorrere. Le posizioni contributive datate vanno verificate puntualmente per individuare eventuali prescrizioni intervenute.",
        },
        {
          q: "Se la prescrizione è già compiuta, devo aspettare la richiesta del creditore o posso agire io?",
          a: "Puoi anche prendere iniziativa: il debitore può proporre una domanda di accertamento negativo, chiedendo al giudice di dichiarare l'inesistenza del proprio debito per intervenuta prescrizione. È però un'azione che comporta costi e tempi, e va valutata con attenzione: spesso conviene attendere un'iniziativa del creditore e a quel punto opporre la prescrizione. La scelta tra strategia attiva e passiva va calibrata caso per caso con il legale di fiducia.",
        },
      ],
    },

    { type: "h2", text: "Conclusione", id: "conclusione" },
    {
      type: "p",
      text: "La prescrizione è uno strumento potente di tutela del debitore, ma è anche un istituto tecnico, soggetto a regole rigorose. Non basta sapere che il debito è 'vecchio': bisogna ricostruire la cronologia degli atti interruttivi, applicare il termine corretto in funzione della natura del credito, valutare le cause di sospensione, eccepire formalmente l'avvenuta prescrizione nelle sedi e nei tempi corretti. Un'analisi accurata della propria posizione, supportata da chi conosce la materia, consente spesso di ridurre significativamente l'esposizione debitoria — talora azzerandola — su crediti che il debitore credeva ancora vivi. Per la stessa ragione, sul versante opposto, evitare condotte che configurino riconoscimento del debito (pagamenti parziali, richieste di rateizzazione, conferme scritte) è essenziale quando la prescrizione è in vicinanza del compimento. La materia è complessa e i margini di intervento sono significativi: la verifica preliminare è sempre il primo passo razionale.",
    },
  ],
};

export default article;
