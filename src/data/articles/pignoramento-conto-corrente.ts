import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "pignoramento-conto-corrente",
  title: "Pignoramento del conto corrente: limiti, impignorabilità e come difendersi",
  excerpt: "Guida operativa al pignoramento presso terzi sul conto: limiti ex art. 545 c.p.c., soglia del triplo dell'assegno sociale, regole AdER, dichiarazione del terzo, opposizioni e conversione.",
  category: "Procedure",
  date: "Maggio 2026",
  readTime: "20 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: authorityLegal,
  keywords: [
    "pignoramento conto corrente",
    "art 545 cpc",
    "impignorabilità stipendio",
    "limiti pignoramento",
    "pignoramento pensione",
  ],
  intro: "Il pignoramento del conto corrente è una delle forme più diffuse di esecuzione forzata: rapida, efficace, capace di bloccare le disponibilità del debitore con effetto immediato. Si tratta tecnicamente di un pignoramento presso terzi, disciplinato dall'art. 543 c.p.c., con la banca nel ruolo di terzo pignorato. Per il debitore conoscere i limiti di impignorabilità ex art. 545 c.p.c., le soglie applicabili a stipendi, pensioni e somme accreditate, le regole speciali per l'Agente della Riscossione e gli strumenti di difesa è essenziale per non subire conseguenze ingiuste o evitabili.",
  content: [
    { type: "h2", text: "Inquadramento normativo del pignoramento presso terzi", id: "inquadramento" },
    { type: "p", text: "Il pignoramento presso terzi è la forma di esecuzione forzata in cui il creditore aggredisce crediti o somme che il debitore vanta nei confronti di un terzo. La disciplina di riferimento è contenuta negli artt. 543 e seguenti del codice di procedura civile. Nel caso del conto corrente, il terzo pignorato è la banca o l'intermediario finanziario presso cui il debitore intrattiene il rapporto: il credito aggredito è il saldo disponibile (o, più precisamente, il diritto del correntista alla restituzione delle somme depositate)." },
    { type: "p", text: "Il pignoramento può colpire anche altri crediti del debitore: lo stipendio presso il datore di lavoro, la pensione presso l'INPS, i canoni di locazione presso il conduttore, i crediti professionali presso il committente. Le regole sull'impignorabilità, l'iter procedurale e le facoltà difensive sono in gran parte sovrapponibili, ma occorre considerare le specificità di ciascuna fattispecie. Il presente articolo si concentra principalmente sul pignoramento di conto corrente, con riferimenti a stipendio e pensione laddove rilevanti." },

    { type: "image", src: authorityLegal, alt: "Documento di pignoramento presso terzi notificato a banca", caption: "L'atto di pignoramento presso terzi viene notificato simultaneamente al debitore e alla banca-terzo pignorato: da quel momento le somme sono vincolate." },

    { type: "h2", text: "L'atto di pignoramento ex art. 543 c.p.c.", id: "atto-543" },
    { type: "p", text: "L'art. 543 c.p.c. disciplina forma e contenuto dell'atto di pignoramento presso terzi. L'atto deve contenere, a pena di nullità: l'indicazione del titolo esecutivo e del precetto già notificato; l'esatta indicazione del credito per il quale si procede, comprensivo di capitale, interessi e spese; l'individuazione dei crediti pignorati o delle cose dovute, nei limiti della loro determinabilità; l'ingiunzione al terzo di non disporre delle somme nei limiti del credito vantato; l'invito al terzo a rendere la dichiarazione di cui all'art. 547 c.p.c. (la cosiddetta dichiarazione del terzo) nei dieci giorni dalla notifica." },
    { type: "p", text: "Dal 2014, con le riforme intervenute sul codice di procedura civile, la notifica del pignoramento al terzo determina l'effetto di vincolo sulle somme. Il creditore deve notificare l'atto sia al debitore (per consentirgli di esercitare i propri diritti difensivi) sia al terzo (la banca), che a quel punto è tenuto a 'congelare' le somme nei limiti del pignoramento." },

    { type: "h3", text: "Le forme della notifica" },
    { type: "p", text: "La notifica del pignoramento al terzo (banca) avviene di norma a mezzo PEC, atteso che gli istituti di credito sono soggetti obbligati alla tenuta di un domicilio digitale. La notifica al debitore segue le regole ordinarie: a mezzo PEC se il debitore è iscritto a pubblici registri o ha indicato un domicilio digitale; altrimenti tramite ufficiale giudiziario, presso la residenza, il domicilio o la dimora. La data di notifica al terzo è il momento dal quale decorrono i termini per la dichiarazione del terzo." },

    { type: "h2", text: "Effetti immediati: il blocco delle somme", id: "blocco-somme" },
    { type: "p", text: "Con la notifica dell'atto di pignoramento, la banca è tenuta a vincolare le somme presenti sul conto corrente del debitore, nei limiti di quanto pignorato (di norma il doppio dell'importo del credito vantato, ex art. 546 c.p.c.). Questo significa che il debitore, dal momento del pignoramento, non può più operare liberamente sul conto: prelievi, bonifici, pagamenti con carte e domiciliazioni bancarie possono essere bloccati o gestiti dalla banca secondo le indicazioni del giudice." },
    { type: "p", text: "Le somme accreditate successivamente al pignoramento — stipendio, pensione, bonifici di terzi, accrediti di clienti — sono trattate diversamente in base alla loro natura. Le somme impignorabili (ad esempio, la quota di stipendio non aggredibile o la quota di pensione coperta dal minimo INPS) devono essere svincolate dalla banca, ma la prassi è di frequente passare attraverso un provvedimento espresso del giudice. Per il debitore è quindi essenziale agire con tempestività: presentando istanza al GE per il riconoscimento dell'impignorabilità sulle somme aventi natura protetta." },

    { type: "note", text: "Il pignoramento, contrariamente a un fraintendimento diffuso, non 'svuota' il conto corrente. Vincola le somme presenti fino a concorrenza di quanto dovuto, con effetto fino all'udienza di comparizione e all'eventuale ordinanza di assegnazione. Tutto ciò che eccede il debito vantato (incluse spese, interessi e accessori) resta a disposizione del debitore. Se la banca blocca somme superiori al dovuto, va fatta immediata istanza correttiva al GE." },

    { type: "h2", text: "La dichiarazione del terzo (art. 547 c.p.c.)", id: "dichiarazione-terzo" },
    { type: "p", text: "L'art. 547 c.p.c. impone al terzo (banca) di rendere una dichiarazione, entro dieci giorni dalla notifica del pignoramento, in merito all'esistenza di somme o cose dovute al debitore esecutato. La dichiarazione deve precisare: l'esistenza del rapporto di conto corrente, il saldo attivo o passivo al momento della notifica, l'eventuale esistenza di vincoli o cause di prelazione, la presenza di crediti accreditati o accreditandi (stipendio, pensione, canoni)." },
    { type: "p", text: "La dichiarazione viene resa, di norma, mediante PEC indirizzata al creditore procedente, ai sensi della disciplina vigente dal 2014. Se la banca omette o rende dichiarazione incompleta o falsa, può essere chiamata a rispondere personalmente del credito, ai sensi dell'art. 548 c.p.c., con un provvedimento del giudice che la dichiara debitrice del creditore procedente nei limiti delle somme oggetto di pignoramento." },

    { type: "h3", text: "Cosa controllare nella dichiarazione" },
    { type: "ul", items: [
      "L'esattezza del saldo riferito alla data di notifica (saldo contabile e saldo disponibile possono divergere)",
      "L'indicazione delle somme che hanno natura di stipendio o pensione, con specificazione della data di accredito",
      "L'eventuale presenza di altri rapporti collegati (conti deposito, conti titoli, libretti, gestioni patrimoniali)",
      "L'esistenza di garanzie reali (pegno irregolare su somme depositate) o di compensazioni opposte dalla banca",
      "La correttezza degli importi accantonati: la banca non può vincolare più del doppio del credito pignorato",
    ]},

    { type: "h2", text: "L'udienza di comparizione e l'assegnazione", id: "udienza-assegnazione" },
    { type: "p", text: "Decorsi i termini per la dichiarazione del terzo, il creditore promuove la prima udienza davanti al giudice dell'esecuzione del Tribunale competente (di norma quello del luogo di residenza del debitore o della sede del terzo). All'udienza si verifica la regolarità del pignoramento, si controlla la dichiarazione del terzo, si invitano le parti a interloquire sui limiti di impignorabilità e si dispone, se del caso, l'ordinanza di assegnazione." },
    { type: "p", text: "L'ordinanza di assegnazione, prevista dall'art. 553 c.p.c., trasferisce al creditore il diritto sulle somme oggetto di pignoramento, nei limiti del credito vantato. La banca, ricevuto il provvedimento, è tenuta a versare le somme assegnate al creditore. Per il debitore, l'udienza di comparizione è il momento decisivo per opporre eccezioni di impignorabilità, contestare il credito, chiedere la conversione o presentare ulteriori difese." },

    { type: "h2", text: "Limiti di pignorabilità ex art. 545 c.p.c.", id: "limiti-545" },
    { type: "p", text: "L'art. 545 c.p.c. è la norma cardine dell'impignorabilità di stipendi, pensioni e indennità. La disciplina prevede limiti diversi a seconda della natura del credito e del soggetto creditore. La regola generale stabilisce che le somme dovute a titolo di stipendio, salario, indennità o pensione possono essere pignorate nella misura di un quinto (20%) per crediti ordinari, di un terzo (33,33%) per crediti alimentari (mantenimento di familiari ex art. 433 c.c.), e in misura libera per la parte eccedente, con il concorso di più creditori contemporaneamente nei limiti complessivi previsti dalla norma." },
    { type: "p", text: "Il pignoramento può essere proposto da diversi creditori contemporaneamente: in tal caso le quote pignorabili si cumulano, ma il debitore conserva sempre la parte residua di stipendio o pensione necessaria a garantire i mezzi di sussistenza, secondo il principio dell'inderogabilità della quota impignorabile. La giurisprudenza ha chiarito che, anche in presenza di più creditori, non può essere superato il limite massimo cumulato della metà del credito (50%) per il complesso delle quote pignorate." },

    { type: "table", headers: ["Tipologia di credito creditore", "Limite di pignorabilità su stipendio/pensione", "Norma di riferimento"], rows: [
      ["Credito ordinario (banche, finanziarie, fornitori, soggetti privati)", "Un quinto (20%) della retribuzione netta", "Art. 545, comma 3, c.p.c."],
      ["Credito alimentare (mantenimento ex art. 433 c.c.)", "Un terzo (33,33%) della retribuzione netta", "Art. 545, comma 3, c.p.c."],
      ["Credito tributario (Agente della Riscossione)", "Vedi tabella specifica AdER (1/10, 1/7, 1/5)", "Art. 72-ter DPR 602/1973"],
      ["Concorso di più creditori", "Massimo cumulato pari alla metà dello stipendio", "Art. 545, comma 5, c.p.c."],
      ["Pensioni: quota minima sempre impignorabile", "Pari al doppio dell'assegno sociale (soglia minima vitale)", "Art. 545, comma 7, c.p.c."],
    ]},

    { type: "h3", text: "La quota minima delle pensioni" },
    { type: "p", text: "Per le pensioni l'art. 545 c.p.c. prevede una specifica tutela aggiuntiva: una quota minima della pensione è sempre impignorabile, indipendentemente dall'importo del credito vantato. Questa quota è pari al doppio dell'assegno sociale, soglia che viene rivalutata annualmente in base agli adeguamenti ISTAT. Per il 2026, considerando l'importo dell'assegno sociale rivalutato, la soglia minima impignorabile della pensione si attesta intorno ai 1.080-1.100 euro mensili (valore indicativo, da verificare con la circolare INPS aggiornata): solo la parte di pensione che eccede questa soglia è pignorabile, secondo i limiti del quinto (per crediti ordinari), del terzo (per crediti alimentari) o secondo le regole specifiche AdER." },

    { type: "h2", text: "La regola del triplo dell'assegno sociale", id: "triplo-assegno-sociale" },
    { type: "p", text: "L'art. 545, comma 8, c.p.c. introduce una regola fondamentale per il pignoramento del conto corrente, spesso ignorata: quando lo stipendio o la pensione vengono accreditati su conto corrente, le somme depositate sono pignorabili solo per l'importo eccedente il triplo dell'assegno sociale al momento del pignoramento. Per i ratei accreditati successivamente al pignoramento, invece, si applicano i limiti ordinari dell'art. 545 (un quinto, un terzo, etc.)." },
    { type: "p", text: "Questa duplice disciplina (giacenza vs. accrediti successivi) è la chiave per difendersi efficacemente dal pignoramento del conto corrente. Le somme presenti sul conto al momento della notifica e provenienti da stipendi/pensioni precedenti sono protette per il triplo dell'assegno sociale. Per il 2026, considerando le rivalutazioni, la soglia di impignorabilità della giacenza relativa a stipendio/pensione si attesta intorno a 1.620-1.650 euro (valore indicativo, da verificare). Tutto ciò che è al di sopra può essere aggredito; tutto ciò che sta al di sotto è impignorabile." },

    { type: "note", text: "La regola del triplo dell'assegno sociale è una clausola di tutela del minimo vitale: tutela il debitore dal restare totalmente privo di mezzi di sussistenza per effetto del pignoramento. La sua applicazione richiede la dimostrazione che le somme presenti sul conto provengano effettivamente da stipendio o pensione: le banche di norma evidenziano questi accrediti nella dichiarazione del terzo, ma in caso di omissioni il debitore deve produrre la documentazione (cedolini, estratti conto, certificati INPS)." },

    { type: "h2", text: "Pignoramento dell'Agente della Riscossione", id: "pignoramento-ader" },
    { type: "p", text: "Quando il creditore è l'Agente della Riscossione (AdER, già Equitalia, ora Agenzia delle Entrate-Riscossione), si applicano regole specifiche. L'art. 72-ter del DPR 602/1973 prevede una graduazione del pignoramento di stipendio e pensione in funzione dell'importo della retribuzione netta mensile: un decimo (1/10) per retribuzioni fino a 2.500 euro mensili, un settimo (1/7) per retribuzioni comprese tra 2.500 e 5.000 euro mensili, un quinto (1/5) per retribuzioni superiori a 5.000 euro mensili. Si tratta di limiti più favorevoli al debitore rispetto al quinto generale previsto dall'art. 545 c.p.c. per i creditori ordinari." },
    { type: "p", text: "Per il pignoramento di conto corrente da parte di AdER, in linea generale si applicano le regole comuni del codice di procedura civile, fatta salva la disciplina specifica dell'art. 72-bis del DPR 602/1973 (pignoramento presso terzi dei crediti del debitore) e dell'art. 75-bis (per importi inferiori a 10.000 euro). La normativa è frutto di stratificazione e va consultata sempre nella versione vigente al momento dell'esecuzione." },

    { type: "table", headers: ["Retribuzione/pensione mensile netta", "Quota pignorabile da AdER", "Importo trattenuto (esempio)"], rows: [
      ["Fino a 2.500 euro", "1/10 (10%)", "Su 2.000 euro netti: 200 euro trattenuti"],
      ["Da 2.500 a 5.000 euro", "1/7 (circa 14,3%)", "Su 4.000 euro netti: circa 571 euro trattenuti"],
      ["Oltre 5.000 euro", "1/5 (20%)", "Su 6.000 euro netti: 1.200 euro trattenuti"],
      ["Crediti ordinari (non AdER)", "1/5 in ogni caso", "Su 3.000 euro netti: 600 euro trattenuti"],
      ["Crediti alimentari", "1/3", "Su 3.000 euro netti: 1.000 euro trattenuti"],
    ]},

    { type: "h3", text: "Il pignoramento esattoriale presso terzi" },
    { type: "p", text: "L'art. 72-bis del DPR 602/1973 prevede una forma semplificata di pignoramento presso terzi a favore dell'AdER: con atto stragiudiziale, l'Agente della Riscossione ordina al terzo (banca, datore di lavoro) di versare direttamente all'AdER le somme dovute al debitore, nei limiti pignorabili. Si tratta di una procedura più snella rispetto al pignoramento ordinario, che non richiede l'intervento del giudice. Per il debitore i rimedi rimangono comunque la rateizzazione, l'autotutela amministrativa e l'opposizione ex art. 615 c.p.c. quando si contesta il diritto a procedere." },

    { type: "h2", text: "Opposizione all'esecuzione e agli atti esecutivi", id: "opposizioni" },
    { type: "p", text: "Anche nel pignoramento presso terzi sono esperibili i rimedi di opposizione tipici dell'esecuzione forzata. L'opposizione all'esecuzione ex art. 615 c.p.c. è utilizzabile per contestare il diritto del creditore a procedere (titolo inefficace, credito prescritto, pagamento avvenuto, errata identificazione del debitore). L'opposizione agli atti esecutivi ex art. 617 c.p.c. è utilizzabile per contestare vizi formali del pignoramento (notifica viziata, omessa indicazione del titolo o del precetto, errori nella descrizione del credito, omissioni nell'ingiunzione al terzo)." },
    { type: "p", text: "Il termine per l'opposizione agli atti esecutivi è perentorio: venti giorni dal compimento dell'atto o dalla sua conoscenza. La giurisprudenza ha chiarito che, per il debitore, il dies a quo decorre dalla notifica dell'atto di pignoramento; per il terzo, dalla notifica dell'atto. È un termine breve e il rispetto è essenziale: la decadenza non è sanabile." },

    { type: "h3", text: "L'opposizione per impignorabilità" },
    { type: "p", text: "Una specifica forma di opposizione è quella diretta a far valere l'impignorabilità delle somme. Si propone con ricorso al giudice dell'esecuzione, anche prima dell'udienza di comparizione, allegando la documentazione dimostrativa (cedolini stipendio, certificazione pensionistica, dichiarazione INPS). Il GE può, su istanza del debitore, ordinare alla banca lo svincolo delle somme impignorabili, anche con provvedimento d'urgenza. Per il debitore questa azione è cruciale: senza un provvedimento espresso del giudice, la banca tende a mantenere il vincolo su tutte le somme, pregiudicando la sussistenza del nucleo familiare." },

    { type: "h2", text: "Conversione del pignoramento (art. 495 c.p.c.)", id: "conversione" },
    { type: "p", text: "L'art. 495 c.p.c. consente al debitore di chiedere la conversione del pignoramento anche nelle esecuzioni presso terzi: il pignoramento sul conto corrente o sullo stipendio viene sostituito con il deposito di una somma di denaro pari al credito complessivo (capitale, interessi, spese). La domanda di conversione si propone con ricorso al giudice dell'esecuzione e richiede il deposito di una cauzione pari a un sesto dell'importo dovuto, con possibilità di rateizzazione fino a quarantotto mesi (prorogabili di ulteriori dodici per gravi motivi)." },
    { type: "p", text: "La conversione nel pignoramento di conto corrente è strumento particolarmente utile quando il debitore dispone di liquidità sufficiente o riesce a reperire la cauzione presso terzi (familiari, finanziatori). L'effetto è duplice: lo svincolo immediato delle somme bloccate sul conto e la prosecuzione del rapporto bancario senza ulteriori interferenze, in cambio del pagamento rateizzato del debito. Il mancato pagamento di una rata, decorsi i termini, comporta la decadenza dal beneficio e la ripresa dell'esecuzione." },

    { type: "h2", text: "Il pignoramento dello stipendio: regole specifiche", id: "stipendio" },
    { type: "p", text: "Quando il pignoramento ha per oggetto direttamente lo stipendio (e non il conto corrente di accredito), il terzo pignorato è il datore di lavoro. Le regole di pignorabilità sono quelle dell'art. 545 c.p.c.: un quinto per crediti ordinari, un terzo per crediti alimentari. Il datore di lavoro ha l'obbligo di trattenere la quota pignorata dalla retribuzione mensile e di versarla al creditore (o all'AdER, nel caso di pignoramento esattoriale) secondo le modalità indicate nell'ordinanza di assegnazione." },
    { type: "p", text: "Per il debitore lavoratore è importante distinguere: se la quota pignorata viene trattenuta dal datore di lavoro all'origine, sul conto corrente di accredito arriva solo lo stipendio netto residuo (già al netto della trattenuta). In questo caso, il pignoramento del conto corrente da parte di altri creditori incontra il limite del triplo dell'assegno sociale per la giacenza, e i limiti ordinari per gli accrediti successivi. Le situazioni di concorso possono essere complesse e vanno gestite con attenzione, anche per evitare che si superi il limite cumulato della metà dello stipendio." },

    { type: "h2", text: "Il pignoramento della pensione: tutele specifiche", id: "pensione" },
    { type: "p", text: "Le pensioni godono di una tutela rafforzata rispetto agli stipendi. Oltre ai limiti ordinari di pignorabilità (un quinto per crediti ordinari, un terzo per crediti alimentari), opera la già richiamata soglia del doppio dell'assegno sociale, al di sotto della quale la pensione non è mai pignorabile. Questa quota minima di sopravvivenza è inderogabile e non può essere ridotta neppure con il consenso del pensionato (è una tutela di ordine pubblico). Per il pensionato con pensione vicina al minimo, il pignoramento può quindi non produrre alcun effetto sostanziale." },
    { type: "p", text: "Quando la pensione viene accreditata su conto corrente, valgono le stesse regole previste per gli stipendi: per la giacenza già accreditata si applica la soglia del triplo dell'assegno sociale; per gli accrediti successivi al pignoramento si applicano i limiti dell'art. 545 (un quinto, un terzo, AdER secondo le sue regole). Anche in questo caso il debitore deve attivarsi presso il GE per ottenere il riconoscimento espresso dell'impignorabilità della quota protetta." },

    { type: "h2", text: "Il piano operativo del debitore in dieci passi", id: "piano-operativo" },
    { type: "ol", items: [
      "Acquisire copia dell'atto di pignoramento notificato e verificare la regolarità formale (titolo, precetto, ingiunzione al terzo, importo)",
      "Calcolare l'importo del credito vantato e quanto può essere effettivamente vincolato (massimo il doppio del credito ex art. 546 c.p.c.)",
      "Richiedere alla banca copia della dichiarazione del terzo resa al creditore e verificarne il contenuto",
      "Identificare le somme aventi natura di stipendio/pensione presenti sul conto al momento del pignoramento (estratto conto e cedolini)",
      "Calcolare la soglia del triplo dell'assegno sociale e individuare la quota impignorabile della giacenza",
      "Presentare istanza al GE per il riconoscimento dell'impignorabilità, allegando la documentazione completa",
      "Valutare la sostenibilità di una conversione del pignoramento ex art. 495 c.p.c. (cauzione e piano di rateizzazione)",
      "Verificare i termini per le opposizioni (615 e 617 c.p.c.) e proporle se sussistono vizi sostanziali o formali",
      "Considerare la trattativa con il creditore per un saldo a stralcio (particolarmente efficace con cessionari NPL)",
      "Valutare l'attivazione di una procedura di sovraindebitamento (piano del consumatore, concordato minore, liquidazione controllata), che sospende l'esecuzione",
    ]},

    { type: "h2", text: "Strategie di apertura di nuovo conto: chiarimenti", id: "nuovo-conto" },
    { type: "p", text: "Una pratica diffusa, ma spesso fonte di errori, è l'apertura di un nuovo conto corrente presso altro istituto per evitare il blocco sulle somme accreditate. Va chiarito che: aprire un nuovo conto è legittimo, non costituisce reato né atto in frode ai creditori in sé; tuttavia, il nuovo conto può a sua volta essere pignorato dal creditore, che può estendere l'azione tramite atti integrativi o nuovi pignoramenti; alcune banche, in presenza di pignoramenti pregressi in centrale rischi (CRIF), possono rifiutare l'apertura del nuovo rapporto. La 'fuga' bancaria è quindi una soluzione tampone, non strategica." },
    { type: "p", text: "Più efficace è impostare una difesa strutturata: ottenere il riconoscimento dell'impignorabilità delle somme presenti, attivare la conversione o la trattativa con il creditore, e nei casi più gravi valutare l'apertura di una procedura di composizione della crisi. La consulenza qualificata fa la differenza, soprattutto nelle situazioni con più pignoramenti contestuali o con creditori multipli (concorso di esecuzioni)." },

    { type: "image", src: handshakeTrust, alt: "Consulenza legale per pignoramento del conto", caption: "Una difesa tempestiva e strutturata può ridurre drasticamente l'impatto del pignoramento sul conto corrente, tutelando il minimo vitale del debitore." },

    { type: "h2", text: "Concorso di più pignoramenti", id: "concorso" },
    { type: "p", text: "Quando sul medesimo stipendio o sulla medesima pensione (o sul conto di accredito) gravano più pignoramenti, opera la disciplina dell'art. 545, comma 5, c.p.c.: il complesso delle trattenute non può superare la metà dello stipendio (50%). I creditori, in regime di concorso, si soddisfano sulla quota cumulata secondo l'ordine di prelazione. I crediti alimentari hanno preferenza, seguono i crediti tributari (per la parte AdER), quindi i crediti ordinari secondo l'ordine di iscrizione del pignoramento." },
    { type: "p", text: "Il datore di lavoro o la banca, ricevuti più atti di pignoramento, deve calcolare correttamente le quote da trattenere e versare a ciascun creditore. Errori frequenti in questa fase pregiudicano i diritti del debitore e dei creditori: il debitore può chiedere al GE la ricalibrazione delle trattenute mediante apposito ricorso. La gestione del concorso richiede attenzione tecnica e spesso l'intervento di un legale, sia per evitare trattenute eccessive sia per ottenere la corretta distribuzione delle somme." },

    { type: "h2", text: "Errori frequenti del debitore", id: "errori-frequenti" },
    { type: "ul", items: [
      "Ignorare la notifica del pignoramento e non costituirsi in giudizio, perdendo la possibilità di interloquire sull'impignorabilità",
      "Non documentare la natura delle somme presenti sul conto (stipendio/pensione) e lasciare alla banca decisioni discrezionali",
      "Effettuare prelievi affrettati subito prima della notifica, che possono configurare atti in frode ai creditori",
      "Spostare le somme su conti di terzi (familiari) prima del pignoramento, esponendosi a azioni revocatorie o accuse di simulazione",
      "Non attivare la conversione nei tempi utili, perdendo lo strumento più efficace per chiudere la procedura",
      "Confondere l'atto di pignoramento con la cartella esattoriale o con il precetto, gestendo le scadenze in modo erroneo",
      "Affidarsi a soluzioni di 'consulenti' non qualificati che promettono di 'cancellare' il pignoramento senza percorrere alcuna via giuridica reale",
      "Sottostimare l'utilità delle procedure di sovraindebitamento, che sospendono le esecuzioni e ristrutturano il debito complessivo",
    ]},

    { type: "h2", text: "Procedure di composizione della crisi come rimedio", id: "ccii" },
    { type: "p", text: "Il Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019) prevede strumenti che possono interagire con un pignoramento del conto corrente in corso. L'apertura di una procedura di composizione (piano del consumatore, concordato minore, liquidazione controllata) determina la sospensione delle esecuzioni in corso, con effetto immediato sui pignoramenti pendenti. Il debitore può così ricostruire il proprio quadro debitorio, proporre un piano sostenibile e, all'esito positivo, ottenere l'esdebitazione del residuo." },
    { type: "p", text: "La scelta tra difendersi nell'ambito della singola esecuzione o aprire una procedura di composizione va fatta caso per caso. Quando il pignoramento del conto è una delle molte azioni in corso, e il debitore è strutturalmente sovraindebitato, la composizione offre una soluzione complessiva. Quando il pignoramento è isolato e il debitore ha capacità reddituale residua, la difesa nel singolo procedimento (conversione, opposizione, saldo a stralcio) può essere sufficiente." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      {
        q: "La banca può bloccare tutto lo stipendio appena accreditato sul conto?",
        a: "No. La normativa prevede una distinzione precisa: le somme accreditate prima del pignoramento e provenienti da stipendio/pensione sono impignorabili per la parte non eccedente il triplo dell'assegno sociale; quelle accreditate dopo il pignoramento sono pignorabili nei limiti dell'art. 545 c.p.c. (un quinto per crediti ordinari, un terzo per crediti alimentari). Il debitore deve attivarsi tempestivamente presso il giudice dell'esecuzione per il riconoscimento dell'impignorabilità: senza un provvedimento espresso del GE, la banca tende a mantenere il vincolo. La produzione di cedolini, certificati INPS ed estratti conto è fondamentale per ottenere lo svincolo."
      },
      {
        q: "Quanto può durare il blocco delle somme sul conto?",
        a: "Il vincolo opera dalla notifica del pignoramento al terzo e prosegue fino all'ordinanza di assegnazione del giudice dell'esecuzione. I tempi variano: dalle 4-8 settimane nelle procedure più rapide, a diversi mesi quando vi sono opposizioni, contestazioni o richieste di rinvio. L'udienza di comparizione viene fissata, di norma, entro novanta giorni dalla notifica. Durante questo periodo le somme restano vincolate; tuttavia, con istanza di urgenza al GE è possibile ottenere lo svincolo anticipato delle somme manifestamente impignorabili (eccedenza rispetto al doppio del credito, somme provenienti da stipendio/pensione protette dal triplo dell'assegno sociale)."
      },
      {
        q: "Cosa succede se sul mio conto è accreditato lo stipendio del coniuge?",
        a: "Se il conto è cointestato, la regola generale è che le somme depositate appartengono pro indiviso ai cointestatari (di norma in parti uguali, salvo prova contraria). In caso di pignoramento per debito del solo debitore, dovrebbe colpire solo la quota di pertinenza del debitore: per il coniuge non debitore è essenziale costituirsi in giudizio (anche con opposizione di terzo ex art. 619 c.p.c.) per ottenere lo svincolo della propria quota. La prova della provenienza delle somme (cedolini, bonifici tracciabili) è determinante. Per evitare problemi futuri, in situazioni di precarietà debitoria è opportuno separare i conti dei coniugi."
      },
      {
        q: "L'Agente della Riscossione può pignorare il mio conto senza giudice?",
        a: "Sì, in parte. L'art. 72-bis del DPR 602/1973 prevede un pignoramento presso terzi semplificato, che AdER può attivare con atto stragiudiziale, senza intervento del giudice. Il terzo (banca, datore di lavoro) è obbligato a versare le somme nei limiti dell'art. 545 c.p.c. e dell'art. 72-ter (per stipendi e pensioni). I rimedi del debitore restano comunque pieni: opposizione all'esecuzione ex art. 615 c.p.c. davanti al giudice ordinario; opposizione agli atti esecutivi ex art. 617 c.p.c.; rateizzazione amministrativa con immediato effetto sospensivo sulle azioni esecutive. La rateizzazione è spesso il rimedio più rapido."
      },
      {
        q: "Mi hanno notificato due pignoramenti diversi sullo stesso conto: che succede?",
        a: "Si è in regime di concorso di pignoramenti. La banca, ricevuti più atti, deve gestire le trattenute secondo l'ordine di prelazione: crediti alimentari prima, crediti tributari, crediti ordinari. Il limite cumulato non può superare la metà dello stipendio o della pensione accreditata. Per il debitore è importante verificare che la banca applichi correttamente le regole del concorso, evitando trattenute eccessive. In caso di errori, va presentata istanza al giudice dell'esecuzione per la corretta determinazione delle quote. Se i pignoramenti sono molti e provocano effetti che superano la metà dei redditi, conviene valutare le procedure di sovraindebitamento."
      },
      {
        q: "Se accredito sul conto un assegno di mantenimento, è pignorabile?",
        a: "L'assegno di mantenimento percepito dal beneficiario (coniuge separato, figlio maggiorenne non autonomo) ha natura alimentare ai sensi dell'art. 545, comma 4, c.p.c. e gode di una specifica tutela: è impignorabile salvo che il creditore vanti a sua volta un credito alimentare. Per i crediti ordinari, l'importo dell'assegno di mantenimento non può essere aggredito. La banca, in presenza di accrediti rubricati come assegno di mantenimento e a fronte di documentazione dimostrativa (sentenza, accordo omologato), deve riconoscere l'impignorabilità. Il debitore deve produrre rapidamente la documentazione al GE per ottenere lo svincolo."
      },
      {
        q: "Quali sono i limiti del pignoramento se sono lavoratore autonomo?",
        a: "Per il lavoratore autonomo non si applica direttamente l'art. 545 c.p.c. (che disciplina i redditi da lavoro dipendente e le pensioni). I compensi professionali e i ricavi dell'attività autonoma sono in linea generale pignorabili integralmente sul conto corrente, salvo i limiti del triplo dell'assegno sociale per le giacenze provenienti da redditi 'di sussistenza'. La giurisprudenza ha tuttavia esteso, in via interpretativa, alcune tutele agli autonomi quando i loro compensi rappresentino l'unico mezzo di sussistenza. La difesa del professionista o dell'artigiano richiede un approccio specifico, con dimostrazione documentale della natura sostitutiva del reddito da lavoro."
      },
      {
        q: "Posso prelevare le somme dal conto subito prima della notifica del pignoramento?",
        a: "Tecnicamente, fino alla notifica il debitore conserva la piena disponibilità del conto. Tuttavia, prelievi consistenti effettuati a ridosso della notifica (specie se preceduti da precetto) possono essere qualificati come atti in frode ai creditori, esposti ad azione revocatoria ordinaria (art. 2901 c.c.) o, nei casi più gravi, configurare il reato di sottrazione fraudolenta al pagamento di imposte (art. 11 D.lgs. 74/2000) quando il creditore è il fisco. La strategia più corretta è impostare una difesa strutturata: opposizione, conversione, saldo a stralcio, procedure di sovraindebitamento. I prelievi 'di emergenza' sono spesso controproducenti."
      },
      {
        q: "Il pignoramento del conto interrompe i pagamenti delle utenze domiciliate?",
        a: "Sì, di norma. Una volta notificato il pignoramento, la banca blocca le somme nei limiti del credito vantato e non esegue i pagamenti domiciliati se questo comporta superamento del saldo disponibile residuo. Per il debitore questo significa: rischi di insoluti su utenze, RID, mutui e finanziamenti. È prassi del GE riconoscere la possibilità di continuare i pagamenti essenziali (luce, gas, acqua) con apposita istanza, soprattutto quando le somme di stipendio/pensione accreditate sono superiori alla soglia di impignorabilità. Per evitare il blocco generalizzato delle utenze conviene attivarsi rapidamente con il legale di fiducia."
      },
      {
        q: "Dopo la conclusione del pignoramento, il conto torna utilizzabile normalmente?",
        a: "Sì. Una volta soddisfatto il credito (per ordinanza di assegnazione, conversione o transazione), la banca toglie il vincolo e il conto torna a essere operativo. Tuttavia, l'episodio di pignoramento viene segnalato nelle centrali rischi (CRIF, Banca d'Italia) e può incidere sulla reputazione creditizia del debitore per anni. Inoltre, la banca può decidere di chiudere il rapporto in autonomia (cd. recesso) in presenza di segnalazioni negative. Per ricostruire la propria affidabilità è utile mantenere i conti in attivo, regolarizzare le segnalazioni e, dove necessario, ricorrere all'esdebitazione (artt. 282-283 CCII) per chiudere definitivamente la situazione pregressa."
      },
      {
        q: "Cosa devo fare nelle prime 48 ore dopo aver ricevuto la notifica del pignoramento?",
        a: "Le prime 48 ore sono cruciali. Operativamente conviene: 1) leggere attentamente l'atto e identificare il creditore procedente, il titolo, l'importo; 2) verificare le scadenze (udienza di comparizione, termine per opposizioni); 3) contattare la banca per conoscere l'entità delle somme vincolate e l'eventuale dichiarazione resa; 4) raccogliere la documentazione su stipendi/pensioni accreditati negli ultimi mesi; 5) richiedere copia del precetto e del titolo esecutivo; 6) consultare con urgenza un avvocato esperto in esecuzioni forzate per una valutazione strategica. Non firmare nulla con il creditore senza assistenza tecnica: spesso sono proposte penalizzanti."
      },
      {
        q: "Posso chiedere la rateizzazione direttamente al creditore?",
        a: "Sì, la trattativa diretta è sempre possibile e spesso conviene a entrambe le parti. Il creditore, soprattutto se è una banca o un cessionario NPL, può preferire una rateizzazione strutturata (o anche un saldo a stralcio) rispetto a un'esecuzione lunga e dall'esito incerto. La trattativa va però impostata in modo formale: proposta scritta, supportata da documentazione patrimoniale, con indicazione di tempi e modalità. La rateizzazione, una volta accordata, dovrebbe essere formalizzata in un accordo scritto con clausola di rinuncia all'esecuzione e ai pignoramenti pendenti. Per crediti AdER esiste la rateizzazione amministrativa standard (artt. 19 DPR 602/73), accessibile direttamente online."
      },
    ]},
  ],
};
