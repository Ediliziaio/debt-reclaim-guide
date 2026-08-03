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
  readTime: "11 min",
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
