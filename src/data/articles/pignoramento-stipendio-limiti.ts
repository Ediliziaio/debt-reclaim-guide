import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "pignoramento-stipendio-limiti",
  title: "Pignoramento dello stipendio: limiti, regola del quinto e strumenti di difesa",
  excerpt: "Quanto può essere pignorato dello stipendio? Limiti per crediti ordinari, alimentari e tributari, cumulo di più pignoramenti, opposizione e conversione. Guida completa per chi subisce o teme un pignoramento sul reddito da lavoro.",
  category: "Privati",
  date: "Marzo 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-destructive to-navy",
  coverImage: "/covers/pignoramento-stipendio-limiti.webp",
  keywords: ["pignoramento stipendio", "limiti pignoramento", "regola del quinto", "art 545 cpc", "opposizione pignoramento", "stipendio pignorabile"],
  intro: "Il pignoramento dello stipendio (o della pensione) è una delle azioni esecutive più diffuse: il creditore, in possesso di un titolo esecutivo, può chiedere al giudice di sottrarre una quota della retribuzione direttamente dalla busta paga, attraverso il datore di lavoro. La legge italiana stabilisce limiti precisi e definisce i casi in cui il pignoramento può essere più o meno ampio. Conoscere queste regole è essenziale sia per difendersi, sia per programmare la propria capacità economica residua.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cos'è il pignoramento dello stipendio", id: "cosa-e" },
    { type: "p", text: "Il pignoramento presso terzi (art. 543 c.p.c.) è la procedura con cui il creditore, tramite ufficiale giudiziario, notifica al debitore e al terzo (il datore di lavoro) l'atto di pignoramento. Da quel momento il datore di lavoro è obbligato a trattenere ogni mese la quota pignorata dello stipendio e a versarla al creditore, secondo le modalità stabilite dal giudice." },
    { type: "p", text: "Il pignoramento può colpire stipendi di lavoratori dipendenti privati, dipendenti pubblici (con specifiche peculiarità procedurali), pensionati e altre indennità periodiche assimilabili. Per il lavoratore autonomo non si parla tecnicamente di pignoramento dello stipendio, ma di altre forme di pignoramento (su conto, su crediti)." },

    { type: "image", src: ctaHandshake, alt: "Confronto tra debitore e creditore", caption: "Il pignoramento è uno strumento esecutivo: agire tempestivamente — anche solo per verificare i presupposti — è spesso la differenza tra subire e gestire." },

    { type: "h2", text: "La regola generale: il quinto pignorabile", id: "regola-quinto" },
    { type: "p", text: "L'art. 545 c.p.c. stabilisce il principio generale: gli stipendi e i salari sono pignorabili nella misura di un quinto (20%). L'80% residuo è impignorabile e rimane nella disponibilità del lavoratore. Questa regola si applica al pignoramento per crediti ordinari (banche, finanziarie, fornitori, eccetera)." },
    { type: "p", text: "La quota viene calcolata sullo stipendio netto, dopo le ritenute fiscali e contributive. Sono escluse dal calcolo le voci accessorie con specifica destinazione (assegni familiari, indennità di trasferta, rimborsi spese)." },

    { type: "h2", text: "Le eccezioni alla regola del quinto", id: "eccezioni" },

    { type: "h3", text: "Crediti alimentari" },
    { type: "p", text: "Per i crediti alimentari (assegno di mantenimento al coniuge separato, ai figli, agli ascendenti) la pignorabilità è maggiore: la quota viene stabilita dal giudice in base alle condizioni economiche complessive, anche oltre il limite del quinto. È la priorità che la legge riconosce alle obbligazioni familiari." },

    { type: "h3", text: "Crediti tributari (AdER)" },
    { type: "p", text: "Per i crediti dell'Agenzia Entrate Riscossione il regime è differente. L'art. 72-ter D.P.R. 602/1973 prevede tre fasce:" },
    { type: "table", headers: ["Stipendio mensile netto", "Quota pignorabile"], rows: [
      ["Fino a 2.500 €", "1/10 (10%)"],
      ["Da 2.500 € a 5.000 €", "1/7 (circa 14,3%)"],
      ["Oltre 5.000 €", "1/5 (20%)"],
    ]},
    { type: "p", text: "Questa progressione mira a tutelare maggiormente i redditi più bassi, riducendo l'impatto della riscossione coattiva." },

    { type: "h3", text: "Cumulo di più pignoramenti" },
    { type: "p", text: "L'art. 545, comma 5, c.p.c. stabilisce un limite cumulativo fondamentale: la somma di tutti i pignoramenti contemporaneamente in essere non può comunque superare la metà dello stipendio. Questo significa che, anche in presenza di crediti di natura diversa (ordinario, alimentare, tributario), il lavoratore deve sempre conservare almeno il 50% del proprio stipendio netto." },

    { type: "note", text: "Il limite del 50% del cumulo è uno dei più ignorati nella prassi. Se ti vengono notificati pignoramenti che, sommati, superano la metà dello stipendio, l'eccedenza è illegittima e si può chiedere l'adeguamento al giudice dell'esecuzione." },

    { type: "h2", text: "Cosa succede in pratica quando arriva il pignoramento", id: "iter-pratico" },

    { type: "h3", text: "1. Atto di precetto" },
    { type: "p", text: "Prima del pignoramento il creditore deve notificare un atto di precetto, che intima al debitore di pagare entro 10 giorni. Il precetto è il preavviso formale: se entro 10 giorni si paga, non si arriva al pignoramento. Trascorso il termine, il creditore può procedere." },

    { type: "h3", text: "2. Notifica dell'atto di pignoramento" },
    { type: "p", text: "L'ufficiale giudiziario notifica sia al debitore sia al datore di lavoro l'atto di pignoramento. Da questo momento il datore di lavoro ha obblighi precisi: trattenere mensilmente la quota dovuta e versarla secondo le indicazioni." },

    { type: "h3", text: "3. Dichiarazione del terzo" },
    { type: "p", text: "Il datore di lavoro (il 'terzo') deve fare una dichiarazione formale al giudice attestando l'esistenza del rapporto di lavoro e l'entità della retribuzione. Da questa dichiarazione discende l'ordinanza di assegnazione che cristallizza il pignoramento." },

    { type: "h3", text: "4. Trattenute mensili" },
    { type: "p", text: "A partire dalla data stabilita dal giudice (in genere immediatamente), ogni mese il datore di lavoro trattiene la quota pignorata e la versa al creditore. Il debitore riceve in busta paga lo stipendio decurtato della quota." },

    { type: "h2", text: "Su quale importo si calcola il quinto", id: "base-di-calcolo" },
    { type: "p", text: "Il quinto non si calcola sul lordo né sull'imponibile fiscale, ma sulla retribuzione netta: la somma che il lavoratore percepirebbe in busta paga dedotte le ritenute fiscali e previdenziali obbligatorie. Le trattenute facoltative — quote associative, rimborsi di prestiti aziendali, buoni pasto convertiti — non riducono la base di calcolo, perché altrimenti sarebbe il debitore a decidere quanto rendere aggredibile il proprio stipendio." },
    { type: "table", headers: ["Voce", "Rientra nella base di calcolo?"], rows: [
      ["Retribuzione mensile netta", "Sì"],
      ["Tredicesima e quattordicesima", "Sì, la trattenuta si applica anche su queste mensilità"],
      ["Straordinari, premi e provvigioni", "Sì, in quanto elementi della retribuzione"],
      ["Rimborsi spese documentati", "No, non hanno natura retributiva"],
      ["Assegno per il nucleo familiare", "No, ha natura assistenziale"],
      ["Trattamento di fine rapporto", "Sì, come retribuzione differita, con le regole proprie del TFR"],
    ]},
    { type: "p", text: "Sul trattamento di fine rapporto occorre un chiarimento: essendo corrisposto in un'unica soluzione alla cessazione del rapporto, viene aggredito secondo le regole della retribuzione differita e non con la trattenuta mensile. È una delle voci su cui si concentrano i creditori quando il rapporto di lavoro si avvicina alla conclusione." },

    { type: "h2", text: "Le pensioni: il minimo impignorabile", id: "pensioni" },
    { type: "p", text: "La pensione gode di una tutela più forte dello stipendio, perché la legge presume che sia l'unica fonte di sostentamento del percettore. L'art. 545, comma 7, del codice di procedura civile rende impignorabile una quota corrispondente alla misura massima mensile dell'assegno sociale aumentato della metà. Solo la parte eccedente questa soglia può essere aggredita, e comunque nei limiti ordinari del quinto o delle fasce previste per i crediti tributari." },
    { type: "p", text: "Il meccanismo è quindi a due passaggi: prima si mette da parte la quota intangibile, poi si applica la percentuale sull'eccedenza. Su pensioni di importo contenuto il risultato pratico è che il pignoramento non trova capienza. L'importo dell'assegno sociale viene rivalutato annualmente, quindi la soglia va verificata sull'anno in corso e non su un valore appreso in passato." },
    { type: "note", text: "Se la pensione viene accreditata su un conto corrente, le somme già presenti sul conto seguono una regola diversa: è impignorabile l'importo eccedente il triplo dell'assegno sociale per gli accrediti anteriori al pignoramento. Sono due tutele distinte che si applicano a due momenti diversi, come spiegato nella guida sul [pignoramento del conto corrente](/risorse/pignoramento-conto-corrente)." },

    { type: "h2", text: "Lavoratori autonomi, professionisti e collaboratori", id: "autonomi" },
    { type: "p", text: "I limiti dell'art. 545 c.p.c. sono costruiti sul rapporto di lavoro dipendente. Per il lavoratore autonomo e il professionista i compensi non maturati in forza di un rapporto di impiego non godono della stessa protezione: il credito verso il committente può essere pignorato presso terzi secondo le regole ordinarie, e l'Agente della Riscossione dispone inoltre dello strumento dell'ordine diretto di pagamento al terzo previsto dall'art. 72-bis del DPR 602/1973." },
    { type: "p", text: "Per le collaborazioni coordinate e continuative e per i rapporti che, pur non essendo formalmente subordinati, hanno carattere continuativo e costituiscono la fonte primaria di sostentamento, la giurisprudenza ha in più occasioni esteso la logica di tutela della retribuzione. È una valutazione che dipende dalla qualificazione concreta del rapporto: va posta al giudice dell'esecuzione, non data per acquisita." },

    { type: "h2", text: "Quando il pignoramento è illegittimo: la lista dei controlli", id: "controlli" },
    { type: "p", text: "Un pignoramento può essere formalmente in corso e sostanzialmente eccedente. Questi sono i controlli che conviene fare sulla prima busta paga successiva alla notifica, confrontandola con l'atto ricevuto." },
    { type: "ol", items: [
      "La percentuale applicata corrisponde alla natura del credito? Un creditore ordinario non può ottenere più di un quinto; solo i crediti alimentari possono superarlo su decisione del giudice.",
      "La base di calcolo è il netto e non il lordo? È l'errore più frequente e produce trattenute sensibilmente superiori al dovuto.",
      "In caso di più pignoramenti, la somma delle trattenute supera la metà dello stipendio? Il limite cumulativo dell'art. 545, comma 5, c.p.c. è inderogabile.",
      "Il titolo esecutivo è valido e il precetto è stato notificato regolarmente? Un titolo viziato travolge l'intera esecuzione.",
      "Il credito è ancora esigibile o è nel frattempo maturata la prescrizione? Va verificata la data dell'ultimo atto interruttivo valido.",
      "Il datore di lavoro ha reso la dichiarazione di terzo e sta versando le somme al creditore corretto?",
    ]},
    { type: "p", text: "Se anche uno solo di questi controlli dà esito negativo, lo strumento è l'opposizione: all'esecuzione quando si contesta il diritto del creditore di procedere, agli atti esecutivi quando il vizio è formale — in quest'ultimo caso entro il termine di venti giorni. Restare fermi perché «tanto la trattenuta è partita» significa consolidare un prelievo che poteva essere ridotto o annullato." },

    { type: "h2", text: "Gli strumenti di difesa", id: "difesa" },

    { type: "h3", text: "Opposizione all'esecuzione (art. 615 c.p.c.)" },
    { type: "p", text: "L'opposizione all'esecuzione si propone quando si contesta il diritto del creditore a procedere all'esecuzione: ad esempio perché il debito è prescritto, è già stato pagato, il titolo è inefficace. L'opposizione si presenta al giudice dell'esecuzione entro termini specifici." },

    { type: "h3", text: "Opposizione agli atti esecutivi (art. 617 c.p.c.)" },
    { type: "p", text: "L'opposizione agli atti esecutivi riguarda invece i vizi formali degli atti della procedura: nullità di notifica, errori procedurali, irregolarità nella dichiarazione del terzo. Termini più brevi (20 giorni dall'atto contestato)." },

    { type: "h3", text: "Conversione del pignoramento (art. 495 c.p.c.)" },
    { type: "p", text: "Il debitore può chiedere al giudice di sostituire il pignoramento con il pagamento di una somma determinata. È utile quando si dispone di liquidità sufficiente: si chiude la procedura pagando una somma comprensiva di capitale, interessi e spese, e si libera lo stipendio dal pignoramento." },

    { type: "h3", text: "Riduzione del pignoramento (art. 495-bis c.p.c.)" },
    { type: "p", text: "In specifiche condizioni il giudice può ridurre la quota pignorata, ad esempio se la trattenuta originaria mette il debitore in condizioni di assoluta indigenza. È una via residuale, soggetta a valutazione discrezionale." },

    { type: "h3", text: "Procedura di sovraindebitamento" },
    { type: "p", text: "Quando il pignoramento dello stipendio è solo uno dei sintomi di una situazione debitoria più ampia, la procedura di sovraindebitamento (piano del consumatore, liquidazione controllata) può essere la soluzione più efficace. Il deposito della procedura determina, secondo i casi, la sospensione delle azioni esecutive in corso, incluso il pignoramento dello stipendio." },

    { type: "h2", text: "Casi particolari", id: "casi-particolari" },

    { type: "h3", text: "Pensioni" },
    { type: "p", text: "Le pensioni sono soggette a regole specifiche: una quota corrispondente all'importo minimo della pensione sociale è impignorabile in via assoluta; sull'eccedenza si applica la regola del quinto (o le percentuali AdER se il creditore è il fisco). Il principio è preservare la sussistenza minima del pensionato." },

    { type: "h3", text: "Dipendenti pubblici" },
    { type: "p", text: "Per i dipendenti pubblici la procedura ha alcune peculiarità: i pignoramenti vengono gestiti dall'ente di appartenenza (MEF, Ministero dell'Interno, eccetera) e seguono iter amministrativi specifici. I limiti sostanziali sono però gli stessi." },

    { type: "h3", text: "Lavoro autonomo e partite IVA" },
    { type: "p", text: "Per i lavoratori autonomi e i titolari di partita IVA non si pignora lo 'stipendio' (che non esiste), ma si possono pignorare i crediti verso i clienti, i conti correnti, i beni mobili. Le regole sono diverse e generalmente meno protettive." },

    { type: "h2", text: "Strategia: cosa fare prima che il pignoramento si consolidi", id: "strategia" },
    { type: "p", text: "Quando arriva l'atto di precetto, ci sono pochi giorni per agire. In questa fase si può:" },
    { type: "ol", items: [
      "Verificare la legittimità del titolo esecutivo (titolo prescritto? notificato correttamente?)",
      "Trattare con il creditore una transazione (saldo a stralcio, dilazione)",
      "Valutare la conversione del pignoramento se si dispone di liquidità",
      "Valutare l'attivazione di una procedura di sovraindebitamento se la situazione complessiva è grave",
      "Predisporre eventuali opposizioni se sussistono motivi tecnici",
    ]},
    { type: "p", text: "Una volta che il pignoramento è in essere e le trattenute mensili sono partite, le opzioni si riducono ma non scompaiono: opposizioni, conversioni, procedure di sovraindebitamento restano percorribili." },

    { type: "h2", text: "Domande frequenti sul pignoramento dello stipendio", id: "faq" },
    { type: "faq", items: [
      {
        q: "Possono pignorarmi più del quinto se ho più creditori?",
        a: "No, salvo si tratti di crediti alimentari. La somma di tutti i pignoramenti non può comunque superare la metà dello stipendio (art. 545, c. 5, c.p.c.). Se ti hanno pignorato oltre questo limite, l'eccedenza è illegittima e va fatta correggere."
      },
      {
        q: "Cosa succede se cambio lavoro durante il pignoramento?",
        a: "Il pignoramento è legato al rapporto di lavoro specifico. Se cambi datore di lavoro, il vecchio pignoramento non si trasferisce automaticamente. Il creditore dovrà notificare un nuovo pignoramento al nuovo datore di lavoro, una volta scoperto."
      },
      {
        q: "Il pignoramento dello stipendio incide sulla tredicesima?",
        a: "Sì. La tredicesima rientra nella retribuzione pignorabile, ma anche su di essa si applica il limite del quinto e tutti gli altri vincoli. La quota viene trattenuta dal datore di lavoro al momento dell'erogazione."
      },
      {
        q: "Posso aprire un conto corrente che non venga pignorato?",
        a: "Il conto corrente è un'aggressione separata dallo stipendio. Per le somme depositate in conto valgono regole diverse: l'art. 545 c.p.c. tutela la somma corrispondente al triplo dell'assegno sociale per le somme accreditate prima del pignoramento del conto. È una materia tecnica che merita valutazione caso per caso."
      },
      {
        q: "Quanto dura il pignoramento dello stipendio?",
        a: "Dura fino al pagamento integrale del debito, comprensivo di interessi e spese. Se lo stipendio è basso e il debito alto, la procedura può durare anni. Per questo è importante valutare alternative (transazione, sovraindebitamento) prima di rassegnarsi al pignoramento prolungato."
      },
      {
        q: "Se faccio una procedura di sovraindebitamento, il pignoramento si ferma?",
        a: "Il deposito di una procedura di sovraindebitamento può determinare, secondo i casi e le decisioni del giudice, la sospensione delle procedure esecutive in corso. L'effetto non è automatico ma è uno dei vantaggi tipici della procedura: liberare il debitore dalle aggressioni in corso per consentire la costruzione di un piano sostenibile."
      },
    ]},

    { type: "h2", text: "Conclusione", id: "conclusione" },
    { type: "p", text: "Il pignoramento dello stipendio è un evento serio ma non un punto di non ritorno. La legge prevede limiti precisi e strumenti di difesa: opposizioni, conversione, riduzione, procedure di sovraindebitamento. La scelta dello strumento dipende dalla singola situazione e dal quadro complessivo. Affrontare il problema subito, con consulenza tecnica adeguata, è quasi sempre meglio che subire passivamente le trattenute mensili." },
  ],
  }
