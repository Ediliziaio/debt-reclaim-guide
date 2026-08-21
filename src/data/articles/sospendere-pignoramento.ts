import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "sospendere-pignoramento",
  title: "Come sospendere o bloccare un pignoramento già iniziato",
  excerpt:
    "Un pignoramento in corso non è una condanna definitiva: conversione ex art. 495 c.p.c., opposizioni con istanza di sospensione, accordo con il creditore procedente e procedure di sovraindebitamento. Quali strumenti esistono, quanto costano e fino a quando si è in tempo.",
  category: "Procedure",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: "/covers/sospendere-pignoramento.webp",
  keywords: ["sospendere pignoramento", "bloccare pignoramento", "conversione del pignoramento", "art 495 cpc", "opposizione esecuzione"],
  intro:
    "Ricevuto un atto di pignoramento, la reazione più comune è pensare che non ci sia più niente da fare. Non è così: l'esecuzione forzata è un procedimento lungo, scandito da fasi, e in ciascuna esistono strumenti per fermarla o per svuotarla di effetto. Alcuni sono processuali e passano dal giudice, altri sono negoziali e passano dal creditore, altri ancora appartengono al Codice della Crisi e bloccano tutte le azioni insieme. Quello che davvero conta è a che punto è la procedura: ogni fase che passa chiude una porta.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Prima di tutto: a che punto è la procedura", id: "fase" },
    { type: "p", text: "Gli strumenti disponibili dipendono dalla fase, non dall'importo del debito. Individuare con precisione dove ci si trova è il primo passaggio, perché determina cosa si può ancora chiedere e a chi." },
    { type: "table", headers: ["Fase", "Cosa è già successo", "Strumenti ancora disponibili"], rows: [
      ["Precetto notificato", "Nessun bene è ancora vincolato", "Tutto: trattativa, dilazione, opposizioni, sovraindebitamento"],
      ["Pignoramento notificato", "I beni o i crediti sono vincolati", "Conversione, opposizioni con istanza di sospensione, accordo, procedure concorsuali"],
      ["Ordinanza di assegnazione o di vendita", "Il giudice ha disposto come procedere", "Conversione ancora possibile fino ai limiti di legge, opposizioni sui vizi, accordo con il procedente"],
      ["Aggiudicazione", "Il bene è stato aggiudicato all'asta", "Spazi molto ridotti, limitati ai vizi della procedura"],
      ["Decreto di trasferimento", "La proprietà è passata all'aggiudicatario", "Nessuno strumento restitutorio ordinario"],
    ]},
    { type: "note", text: "È la ragione per cui la stessa domanda — «si può ancora fermare?» — ha risposte opposte a distanza di poche settimane. Il tempo, in esecuzione, non è una variabile fra le altre: è quella che comanda." },

    { type: "h2", text: "La conversione del pignoramento", id: "conversione" },
    { type: "p", text: "È lo strumento più efficace e il meno conosciuto. L'art. 495 c.p.c. consente al debitore di chiedere al giudice dell'esecuzione di sostituire le cose o i crediti pignorati con una somma di denaro pari all'importo dovuto per capitale, interessi e spese. Il bene esce dalla procedura e l'esecuzione prosegue sulla somma." },
    { type: "ul", items: [
      "L'istanza va depositata prima che sia disposta la vendita o l'assegnazione, e comunque nei termini previsti dalla norma per ciascun tipo di esecuzione.",
      "Va accompagnata dal versamento di una cauzione, in misura stabilita dalla legge in rapporto all'importo dovuto.",
      "Il giudice può autorizzare il pagamento rateale del residuo entro il limite massimo di durata previsto dall'art. 495 c.p.c.",
      "Il mancato pagamento di una rata alle scadenze fissate fa riprendere l'esecuzione sul bene, senza possibilità di una seconda conversione.",
    ]},
    { type: "p", text: "La conversione è la strada naturale quando il debitore ha una capacità di rimborso reale ma non immediata, e quando il bene pignorato vale molto più del debito — il caso tipico dell'[esecuzione immobiliare](/risorse/pignoramento-immobiliare) per un credito modesto, dove la vendita all'asta distruggerebbe valore in modo sproporzionato." },

    { type: "h2", text: "Le opposizioni e l'istanza di sospensione", id: "opposizioni" },
    { type: "p", text: "Le opposizioni esecutive non sospendono nulla da sole: la sospensione è un provvedimento che il giudice adotta su istanza motivata, valutando la fondatezza dell'opposizione e il pregiudizio che il debitore subirebbe se l'esecuzione proseguisse. Presentare l'opposizione e non chiedere la sospensione è l'errore che vanifica il rimedio." },
    { type: "table", headers: ["Rimedio", "Cosa si contesta", "Termine"], rows: [
      ["Opposizione all'esecuzione (art. 615 c.p.c.)", "Il diritto stesso del creditore di procedere: credito estinto, prescritto, titolo inefficace", "Senza ritardo dopo l'inizio dell'esecuzione"],
      ["Opposizione agli atti esecutivi (art. 617 c.p.c.)", "Vizi formali di precetto, pignoramento o atti successivi", "Venti giorni, perentori"],
      ["Opposizione di terzo (art. 619 c.p.c.)", "Il bene pignorato appartiene a un terzo, non al debitore", "Prima della vendita o dell'assegnazione"],
    ]},
    { type: "p", text: "Fra i motivi che più spesso reggono ci sono la prescrizione maturata dopo il titolo, l'inefficacia del precetto per decorso dei novanta giorni, il mancato rispetto dei limiti di impignorabilità su stipendio e pensione e, nelle esecuzioni esattoriali, il difetto dei presupposti previsti dal DPR 602/1973." },

    { type: "h2", text: "L'accordo con il creditore procedente", id: "accordo" },
    { type: "p", text: "La via negoziale resta praticabile anche a esecuzione avviata, e in certi casi è più conveniente per entrambi. Il creditore che ha già pignorato sa che l'incasso non è immediato: fra vendite deserte, ribassi e tempi dell'asta, il realizzo effettivo può essere molto inferiore al valore del bene e arrivare anni dopo." },
    { type: "ol", items: [
      "Formalizzare la proposta per iscritto, con importo, tempi e provvista dichiarata.",
      "Pattuire espressamente la rinuncia agli atti esecutivi da parte del creditore, non una generica sospensione di fatto.",
      "Prevedere che la rinuncia sia depositata entro un termine preciso dopo il pagamento.",
      "Non versare nulla prima che l'accordo sia sottoscritto: un pagamento senza liberatoria è un acconto che non ferma la procedura.",
    ]},
    { type: "note", text: "Quando i creditori sono più di uno, l'accordo con il solo procedente risolve poco: gli altri possono intervenire nella stessa procedura e riprenderla. È la situazione in cui la trattativa individuale mostra il limite e conviene guardare agli strumenti concorsuali." },

    { type: "h2", text: "Le procedure di sovraindebitamento", id: "sovraindebitamento" },
    { type: "p", text: "Sono l'unico strumento che agisce su tutti i creditori insieme. L'accesso a una procedura del Codice della Crisi produce, secondo i casi e i provvedimenti del giudice, la sospensione delle azioni esecutive in corso e il divieto di iniziarne di nuove: il pignoramento si ferma, e la posizione viene ristrutturata nel suo complesso invece che tampone dopo tampone." },
    { type: "ul", items: [
      "Per il consumatore la strada è il [piano di ristrutturazione dei debiti](/risorse/piano-consumatore), che non richiede il voto dei creditori.",
      "Per professionisti e imprenditori minori il [concordato minore](/risorse/concordato-minore), che invece passa dal voto.",
      "Quando non c'è capacità di rimborso ma esiste un patrimonio, la [liquidazione controllata](/risorse/liquidazione-controllata-sovraindebitato).",
      "Quando non c'è né patrimonio né reddito aggredibile, l'[esdebitazione del debitore incapiente](/risorse/esdebitazione-incapiente).",
    ]},
    { type: "p", text: "Il presupposto comune è lo stato di sovraindebitamento e, per le procedure ristrutturative, la meritevolezza del debitore. L'accesso passa sempre da un OCC, e i tempi di preparazione della domanda vanno messi in conto: è un'altra ragione per non aspettare che l'asta sia fissata." },

    { type: "h2", text: "Il caso particolare dell'Agente della Riscossione", id: "ader" },
    { type: "p", text: "Quando a procedere è Agenzia delle Entrate-Riscossione valgono strumenti aggiuntivi di natura amministrativa. La [rateizzazione](/risorse/rateizzazione-cartelle-esattoriali) accolta sospende le azioni esecutive e cautelari; l'adesione a una definizione agevolata, quando aperta, produce lo stesso effetto finché il piano è rispettato." },
    { type: "p", text: "Esistono inoltre limiti specifici che nelle esecuzioni ordinarie non operano: le soglie per l'espropriazione immobiliare, la tutela dell'unico immobile adibito ad abitazione con residenza anagrafica e le percentuali ridotte di pignorabilità dello stipendio previste dall'art. 72-ter del DPR 602/1973. Verificare che siano stati rispettati è spesso più produttivo che discutere il merito del debito." },

    { type: "h2", text: "Domande frequenti sulla sospensione del pignoramento", id: "faq" },
    { type: "faq", items: [
      {
        q: "Si può bloccare un pignoramento già notificato?",
        a: "Sì, finché la procedura non si è conclusa con il decreto di trasferimento o con l'assegnazione definitiva delle somme. Gli strumenti sono la conversione ex art. 495 c.p.c., le opposizioni accompagnate da istanza di sospensione, l'accordo con il creditore procedente e le procedure di sovraindebitamento, che sospendono tutte le azioni insieme."
      },
      {
        q: "L'opposizione ferma automaticamente l'esecuzione?",
        a: "No. La sospensione va chiesta espressamente al giudice dell'esecuzione con istanza motivata: il giudice la concede valutando la fondatezza dell'opposizione e il danno che il debitore subirebbe. Senza istanza, la procedura prosegue mentre l'opposizione è pendente."
      },
      {
        q: "Quanto costa la conversione del pignoramento?",
        a: "Richiede il deposito di una cauzione commisurata all'importo dovuto per capitale, interessi e spese, nella misura stabilita dall'art. 495 c.p.c. Il residuo può essere autorizzato a rate entro il limite massimo di durata previsto dalla norma. Saltare una rata fa riprendere l'esecuzione, senza una seconda possibilità."
      },
      {
        q: "Ho più creditori: basta accordarmi con quello che ha pignorato?",
        a: "Raramente. Gli altri creditori muniti di titolo possono intervenire nella stessa procedura, che quindi prosegue anche dopo l'accordo con il procedente. Quando l'esposizione è distribuita su più soggetti, l'unico strumento che li vincola tutti è una procedura di sovraindebitamento."
      },
      {
        q: "Fino a quando sono in tempo per la casa all'asta?",
        a: "Fino al decreto di trasferimento la partita resta aperta: la conversione, l'accordo con il creditore e le procedure concorsuali possono ancora produrre effetto, con margini che si riducono a ogni passaggio. Dopo il decreto di trasferimento la proprietà è passata all'aggiudicatario e non esistono rimedi restitutori ordinari."
      },
    ]},

    { type: "h2", text: "In sintesi", id: "conclusione" },
    { type: "p", text: "Un pignoramento in corso lascia più margini di quanti se ne immaginino, ma sono margini a scadenza. La sequenza corretta è sempre la stessa: individuare la fase esatta della procedura, verificare titolo, notifiche, prescrizione e limiti di impignorabilità, quindi scegliere fra conversione, opposizione, accordo e procedura concorsuale in base a quanti creditori ci sono e a quale capacità di rimborso esiste davvero. Rimandare non conserva le opzioni: le consuma." },
  ],
};
