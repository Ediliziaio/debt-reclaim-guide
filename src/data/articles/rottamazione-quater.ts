import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "rottamazione-quater",
  title: "Rottamazione quater: come funziona, a chi conviene e quali alternative valutare",
  excerpt: "La rottamazione quater consente di pagare le cartelle senza sanzioni né interessi di mora. Vantaggi reali, limiti operativi, casi in cui conviene davvero e alternative percorribili (ricorso, prescrizione, sovraindebitamento).",
  category: "Tributario",
  date: "Febbraio 2026",
  readTime: "13 min",
  author: "Studio Tutela Debito",
  cover: "from-gold-dark to-gold",
  coverImage: "/covers/rottamazione-quater.png",
  keywords: ["rottamazione quater", "definizione agevolata cartelle", "rottamazione cartelle", "condono cartelle", "AdER pagamento agevolato"],
  intro: "La cosiddetta 'rottamazione quater' è la definizione agevolata dei carichi affidati all'Agente della Riscossione introdotta dalla Legge 197/2022. Consente di pagare il solo capitale dovuto senza sanzioni e senza interessi di mora, con una rateizzazione su più anni. I termini di adesione sono chiusi e la misura riguarda oggi i piani già in corso: per i carichi affidati fino al 31 dicembre 2023 la definizione di riferimento è la rottamazione quinquies. Aderire a una definizione agevolata significa comunque rinunciare al contenzioso, e in molti casi una verifica preventiva della legittimità delle cartelle rivela alternative più favorevoli.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cos'è la rottamazione quater", id: "cosa-e" },
    { type: "p", text: "La rottamazione (definizione agevolata) è uno strumento che, periodicamente, il legislatore introduce per consentire al contribuente di estinguere le cartelle esattoriali a condizioni di favore. La cosiddetta 'rottamazione quater' è stata introdotta dalla Legge 197/2022 (Legge di Bilancio 2023) e successive modifiche, con riferimento ai carichi affidati ad AdER dal 1° gennaio 2000 al 30 giugno 2022." },
    { type: "note", text: "Aggiornamento 2026: i termini di adesione alla rottamazione quater sono chiusi e la misura riguarda ormai soltanto i piani già in corso, che restano da portare a termine secondo il calendario delle rate. La definizione agevolata introdotta dalla Legge di Bilancio 2026 è la [rottamazione quinquies](/risorse/rottamazione-quinquies), riservata ai carichi affidati fino al 31 dicembre 2023 e derivanti da omesso versamento: la relativa domanda andava presentata entro il 30 aprile 2026." },
    { type: "p", text: "L'idea di fondo è semplice: il contribuente paga il solo capitale (le imposte, i contributi, le sanzioni amministrative originarie escluse le maggiorazioni) senza alcun importo a titolo di sanzioni tributarie e senza interessi di mora. In cambio, l'AdER rinuncia a queste maggiorazioni e concede una rateizzazione." },

    { type: "image", src: abstractHopeBg, alt: "Pianificazione finanziaria con la rottamazione delle cartelle", caption: "La rottamazione permette di pianificare l'estinzione del debito tributario con tempi e modalità definiti, ma va valutata in rapporto alle alternative." },

    { type: "h2", text: "Cosa si paga e cosa non si paga con la rottamazione", id: "cosa-si-paga" },

    { type: "h3", text: "Importi inclusi (si pagano)" },
    { type: "ul", items: [
      "Le somme dovute a titolo di capitale (imposte, contributi)",
      "Le somme dovute a titolo di rimborso spese per procedure esecutive",
      "I diritti di notifica della cartella",
      "Aggio in misura ridotta (in alcune edizioni completamente eliminato)",
    ]},

    { type: "h3", text: "Importi esclusi (non si pagano)" },
    { type: "ul", items: [
      "Le sanzioni amministrativo-tributarie (es. sanzioni per omesso versamento)",
      "Gli interessi di mora",
      "Le maggiorazioni",
      "Gli interessi per ritardata iscrizione a ruolo (in alcune edizioni)",
    ]},

    { type: "note", text: "Le sanzioni per violazioni del Codice della Strada e per altre violazioni amministrative non tributarie seguono regole specifiche: la rottamazione ne riduce gli interessi e le maggiorazioni, ma non elimina la sanzione principale. Per queste cartelle il vantaggio della rottamazione è più contenuto rispetto a un debito puramente tributario." },

    { type: "h2", text: "Chi può aderire", id: "soggetti" },
    { type: "p", text: "Possono aderire alla rottamazione tutti i contribuenti — privati cittadini, professionisti, imprese — che hanno carichi affidati all'AdER nei periodi previsti dalla normativa. Non rilevano la natura dell'imposta (erariale, locale, contributiva) né la situazione patrimoniale del contribuente: basta avere cartelle iscritte a ruolo nel periodo di riferimento." },

    { type: "h2", text: "I vantaggi reali della rottamazione", id: "vantaggi" },

    { type: "h3", text: "Risparmio economico" },
    { type: "p", text: "Su una cartella di vecchia data, le sanzioni e gli interessi possono rappresentare il 30-50% dell'importo totale. La rottamazione elimina questa porzione, generando un risparmio che, in valore assoluto, può essere significativo. Per una cartella di 80.000€ originari con sanzioni e interessi accumulati per 30.000€, il risparmio sarebbe di 30.000€." },

    { type: "h3", text: "Rateizzazione lunga" },
    { type: "p", text: "La rottamazione prevede tipicamente rate annuali con scadenze precise distribuite su più anni. Questo permette di pianificare il pagamento, specialmente per cifre rilevanti." },

    { type: "h3", text: "Sospensione delle procedure esecutive" },
    { type: "p", text: "Dalla data di adesione alla rottamazione le procedure esecutive in corso (pignoramenti, fermi, ipoteche) vengono sospese, e quelle non ancora avviate non vengono attivate, fintanto che il pagamento delle rate viene rispettato." },

    { type: "h3", text: "Semplicità procedurale" },
    { type: "p", text: "L'adesione si fa attraverso una domanda telematica all'AdER. Non servono atti complessi, non c'è giudizio, non c'è discrezionalità: se rientri nei requisiti e fai la domanda nei termini, ottieni la definizione." },

    { type: "h2", text: "I limiti e i rischi", id: "limiti" },

    { type: "h3", text: "Rinuncia al contenzioso" },
    { type: "p", text: "L'adesione comporta la rinuncia al ricorso eventualmente pendente o alla possibilità di proporlo. Significa che se la cartella era impugnabile per vizi (notifica irregolare, prescrizione, errori sostanziali), aderendo rinunci alla possibilità di farla annullare integralmente. Stai pagando — anche se in misura ridotta — un debito che il giudice avrebbe potuto cancellare." },

    { type: "h3", text: "Decadenza per mancato pagamento" },
    { type: "p", text: "Il mancato pagamento, anche solo parziale, di una rata determina la decadenza dal beneficio. La cartella torna a 'rivivere' nella sua interezza originaria, con sanzioni e interessi pieni, e l'AdER può riprendere le procedure esecutive. La pianificazione finanziaria della rottamazione va fatta con realismo." },

    { type: "h3", text: "Non si possono dilazionare ulteriormente le rate" },
    { type: "p", text: "Le scadenze della rottamazione sono fisse: non c'è possibilità di chiedere una rateizzazione delle rate. Se non si è certi della sostenibilità, è meglio non aderire (o aderire solo per le cartelle che si è in grado di pagare nei termini)." },

    { type: "h2", text: "Quando la rottamazione conviene davvero", id: "quando-conviene" },
    { type: "p", text: "L'adesione è conveniente quando:" },
    { type: "ul", items: [
      "Le cartelle hanno sanzioni e interessi che pesano in modo significativo sull'importo totale",
      "Le cartelle sono tecnicamente legittime (nessun vizio formale o prescrizione)",
      "Il contribuente dispone di liquidità per sostenere il piano di pagamento",
      "L'importo a debito è gestibile in rapporto alle capacità del contribuente",
      "Non sono pendenti ricorsi con ragionevoli probabilità di accoglimento",
    ]},

    { type: "h2", text: "Quando la rottamazione NON conviene", id: "quando-non-conviene" },
    { type: "p", text: "L'adesione è da evitare o quanto meno da rivalutare quando:" },
    { type: "ul", items: [
      "Le cartelle hanno vizi formali (notifica irregolare, prescrizione decorsa)",
      "Le cartelle sono prevalentemente capitale, con poche sanzioni e interessi (vantaggio marginale)",
      "Il contribuente non ha capacità di sostenere le rate (rischio decadenza)",
      "Il quadro debitorio complessivo richiede una soluzione strutturale (sovraindebitamento)",
      "Sono pendenti ricorsi con buone probabilità di accoglimento",
    ]},

    { type: "h2", text: "Le alternative da valutare prima di aderire", id: "alternative" },

    { type: "h3", text: "Ricorso tributario" },
    { type: "p", text: "Se la cartella è tecnicamente impugnabile, il ricorso può portare all'annullamento integrale, con un beneficio ben superiore a quello della rottamazione. Questa valutazione va fatta entro i 60 giorni dalla notifica della cartella." },

    { type: "h3", text: "Eccezione di prescrizione" },
    { type: "p", text: "Per cartelle 'vecchie' la prescrizione del credito potrebbe essersi maturata. Se così è, si può richiedere l'annullamento per intervenuta prescrizione, senza pagare nulla. È un controllo che precede sempre l'eventuale adesione alla rottamazione." },

    { type: "h3", text: "Procedura di sovraindebitamento" },
    { type: "p", text: "Se le cartelle si inseriscono in un quadro debitorio complessivamente compromesso (con altri creditori, finanziamenti, pignoramenti in corso), una procedura di sovraindebitamento può portare risultati ben superiori: cancellazione di una quota più ampia dei debiti, non solo delle sanzioni, e un piano di pagamento parametrato alla reale capacità del debitore." },

    { type: "h3", text: "Rateizzazione ordinaria" },
    { type: "p", text: "Se il contribuente ha capacità di pagamento ma vuole dilazionare, la rateizzazione ordinaria AdER (fino a 120 rate in casi specifici) può essere un'alternativa. Non porta lo sconto su sanzioni e interessi, ma offre flessibilità maggiore." },

    { type: "h2", text: "Come si fa la domanda di rottamazione", id: "come-aderire" },
    { type: "p", text: "L'iter di adesione è standardizzato:" },
    { type: "ol", items: [
      "Verifica della situazione debitoria con AdER (estratto di ruolo, situazione carichi)",
      "Calcolo dell'importo dovuto in rottamazione",
      "Selezione delle cartelle che si vogliono includere (è possibile aderire per singole cartelle)",
      "Presentazione della domanda telematica entro i termini previsti dalla normativa",
      "Attesa della comunicazione AdER con l'importo definitivo e il piano di rate",
      "Pagamento della prima rata nei termini",
    ]},
    { type: "p", text: "Una volta presentata la domanda, l'AdER invia una comunicazione con l'importo definitivo e il piano. Il rispetto delle scadenze è essenziale: il mancato pagamento, anche di una singola rata, determina la decadenza." },

    { type: "h2", text: "Domande frequenti sulla rottamazione quater", id: "faq" },
    { type: "faq", items: [
      {
        q: "Posso rottamare solo alcune cartelle?",
        a: "Sì. La rottamazione si applica per singole cartelle: puoi includere alcune e lasciarne fuori altre. Tipicamente conviene includere quelle con maggior peso di sanzioni e interessi e tenere fuori quelle 'vecchie' che potrebbero essere prescritte o quelle tecnicamente impugnabili."
      },
      {
        q: "Cosa succede se ho già una rateizzazione in corso?",
        a: "La rateizzazione ordinaria in corso viene assorbita dalla rottamazione: le somme già pagate vengono scomputate dall'importo definitivo. La nuova rateizzazione della rottamazione sostituisce la precedente."
      },
      {
        q: "Se non riesco a pagare una rata, perdo tutto?",
        a: "Il mancato pagamento di una rata entro i termini determina la decadenza dalla rottamazione. La cartella torna esigibile nella sua interezza originaria (con sanzioni e interessi pieni) e l'AdER può riprendere le procedure esecutive. La normativa prevede limitatissime tolleranze per ritardi minimi."
      },
      {
        q: "La rottamazione cancella anche i debiti previdenziali (INPS)?",
        a: "Sì, i carichi INPS e INAIL affidati ad AdER nei periodi previsti rientrano nella rottamazione. Restano fuori, in linea generale, i contributi obbligatori non ancora iscritti a ruolo e altre voci specifiche escluse dalla normativa."
      },
      {
        q: "Posso aderire alla rottamazione anche se ho già un pignoramento in corso?",
        a: "Sì. L'adesione determina la sospensione del pignoramento. Se rispetti le scadenze del piano di rottamazione, il pignoramento resta sospeso fino alla chiusura. In caso di decadenza, il pignoramento riprende."
      },
      {
        q: "Aderire alla rottamazione mi impedisce di partecipare a procedure pubbliche?",
        a: "Durante l'adesione alla rottamazione la posizione contributiva e fiscale è considerata regolare, e si può richiedere il DURC. Decade tutto in caso di mancato pagamento. È un aspetto rilevante per professionisti e imprese che lavorano con la PA."
      },
    ]},

    { type: "h2", text: "Conclusione: rottamazione sì, ma con valutazione", id: "conclusione" },
    { type: "p", text: "La rottamazione quater è uno strumento utile, ma non automaticamente la scelta migliore. Aderire senza verificare la legittimità delle cartelle può significare pagare debiti che non si sarebbero dovuti pagare. Per questo prima di compilare la domanda di adesione conviene fare una valutazione tecnica: controllo della notifica, della prescrizione, dei termini, della solidità della pretesa. Solo dopo si può decidere se la rottamazione è davvero la scelta più conveniente o se esistono alternative più favorevoli." },
  ],
  }
