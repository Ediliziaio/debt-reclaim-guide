import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "prima-casa-pignoramento",
  title: "Prima casa e debiti: quando può essere pignorata e quando no",
  excerpt:
    "L'impignorabilità della prima casa vale solo contro l'Agente della Riscossione e a precise condizioni (art. 76 DPR 602/1973). Banche, finanziarie, fornitori e privati non incontrano quel limite. Guida alle regole reali, alle soglie, all'ipoteca e agli strumenti che salvano davvero l'abitazione.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: "/covers/prima-casa-pignoramento.webp",
  keywords: [
    "pignoramento prima casa",
    "prima casa impignorabile",
    "art 76 DPR 602/1973",
    "ipoteca prima casa",
    "salvare la casa dai debiti",
  ],
  intro:
    "«Mi possono portare via la casa?» è la prima domanda di quasi ogni colloquio. La risposta che circola — «la prima casa non si tocca» — è vera solo in parte, e la parte in cui è falsa è quella che conta di più. L'impignorabilità dell'abitazione principale è una regola speciale che vale nei confronti dell'Agente della Riscossione e solo al ricorrere di condizioni precise; verso banche, finanziarie, fornitori e creditori privati quella tutela semplicemente non esiste. Questa guida ricostruisce chi può aggredire l'abitazione, con quali soglie e quali limiti, e quali strumenti la proteggono davvero.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "L'equivoco da chiarire subito", id: "equivoco" },
    { type: "p", text: "Non esiste nell'ordinamento italiano una regola generale che renda la prima casa impignorabile. Esiste un limite specifico, previsto dall'art. 76 del DPR 602/1973, che riguarda un solo creditore: l'Agente della Riscossione, cioè Agenzia delle Entrate-Riscossione. Tutti gli altri creditori — la banca del mutuo, la finanziaria, il fornitore con un decreto ingiuntivo, il condominio, l'ex coniuge per l'assegno — restano liberi di procedere all'espropriazione dell'immobile secondo le regole ordinarie del codice di procedura civile." },
    { type: "note", text: "È la distinzione che cambia tutto: la stessa casa può essere intoccabile per una cartella esattoriale da 200.000 euro e perfettamente aggredibile per un debito bancario da 30.000. Prima di rassicurarsi occorre sempre guardare chi è il creditore, non quanto è grande il debito." },

    { type: "h2", text: "Quando l'Agente della Riscossione non può espropriare", id: "limite-ader" },
    { type: "p", text: "L'art. 76 DPR 602/1973 vieta ad Agenzia delle Entrate-Riscossione di avviare l'espropriazione immobiliare quando ricorrono contemporaneamente tutte queste condizioni. Basta che una sola manchi perché il divieto cada." },
    { type: "table", headers: ["Condizione", "Cosa significa in concreto"], rows: [
      ["Unico immobile di proprietà del debitore", "Se possiedi anche solo una quota di un altro immobile, il divieto non opera"],
      ["Destinato a uso abitativo", "Box, cantine, terreni e locali commerciali restano fuori dalla tutela"],
      ["Residenza anagrafica del debitore", "Non basta abitarci: la residenza deve risultare dai registri"],
      ["Non di lusso", "Sono escluse dalla tutela le categorie catastali A/8 (ville) e A/9 (castelli e palazzi di pregio)"],
    ]},
    { type: "p", text: "Quando anche una sola condizione manca — un secondo immobile ereditato, la residenza mai trasferita, l'accatastamento in categoria di pregio — l'Agente della Riscossione può procedere, ma solo se il debito complessivo supera 120.000 euro, se l'ipoteca è iscritta da almeno sei mesi e se nel frattempo non è intervenuto il pagamento. Sono soglie cumulative: valgono tutte insieme." },

    { type: "h2", text: "L'ipoteca si iscrive comunque", id: "ipoteca" },
    { type: "p", text: "Il divieto di espropriazione non è un divieto di garanzia. Anche sull'abitazione protetta dall'art. 76, l'Agente della Riscossione può iscrivere ipoteca ai sensi dell'art. 77 dello stesso decreto, quando il debito complessivo supera 20.000 euro. È un punto che sorprende molti: la casa non viene venduta, ma resta gravata da un vincolo ventennale che la rende di fatto invendibile e non ipotecabile per ottenere credito." },
    { type: "p", text: "L'effetto pratico è una paralisi patrimoniale: si conserva la proprietà e si perde la disponibilità economica del bene. Chi progetta di vendere per estinguere i debiti scopre il vincolo quando è già dal notaio. Le regole di dettaglio, i preavvisi e le modalità di cancellazione sono nella guida sull'[ipoteca esattoriale](/risorse/ipoteca-esattoriale)." },

    { type: "h2", text: "Gli altri creditori: nessuna protezione speciale", id: "altri-creditori" },
    { type: "p", text: "Per banche, finanziarie, cessionari di crediti deteriorati, fornitori, condominio e creditori privati non esiste alcuna soglia di debito né alcun requisito di residenza o categoria catastale. Ottenuto un titolo esecutivo e notificato il precetto, possono pignorare l'immobile secondo gli artt. 555 e seguenti del codice di procedura civile, indipendentemente dal fatto che sia l'unica casa e che vi abiti la famiglia." },
    { type: "table", headers: ["Creditore", "Può espropriare l'abitazione principale?"], rows: [
      ["Agenzia delle Entrate-Riscossione", "No, se ricorrono tutte le condizioni dell'art. 76; sì negli altri casi, oltre 120.000 euro di debito"],
      ["Banca titolare del mutuo ipotecario", "Sì, è il caso tipico: l'ipoteca volontaria nasce proprio su quell'immobile"],
      ["Banca o finanziaria per prestiti chirografari", "Sì, senza soglie particolari"],
      ["Società cessionaria di crediti deteriorati (NPL)", "Sì, subentra nella stessa posizione del creditore originario"],
      ["Fornitore con decreto ingiuntivo", "Sì"],
      ["Condominio per spese non pagate", "Sì, dopo il decreto ingiuntivo e l'eventuale ipoteca giudiziale"],
    ]},
    { type: "p", text: "È la ragione per cui, quando l'esposizione è mista, concentrarsi solo sul fisco è un errore di prospettiva: il rischio concreto per l'abitazione arriva quasi sempre dal lato bancario, non da quello esattoriale. La sequenza che porta dal mancato pagamento delle rate all'asta è descritta nella guida sul [mutuo ipotecario](/risorse/mutuo-non-pagato-cosa-fare)." },

    { type: "h2", text: "Fondo patrimoniale e trust: cosa proteggono davvero", id: "fondo-patrimoniale" },
    { type: "p", text: "Il fondo patrimoniale (art. 167 c.c.) vincola determinati beni ai bisogni della famiglia. L'art. 170 c.c. stabilisce che l'esecuzione su quei beni non può avere luogo per debiti che il creditore conosceva essere stati contratti per scopi estranei ai bisogni della famiglia. La formulazione è più stretta di come viene raccontata: non protegge da tutti i debiti, protegge da quelli estranei alla famiglia, e l'onere della prova si gioca su cosa il creditore sapeva." },
    { type: "p", text: "Nella pratica la giurisprudenza interpreta in senso ampio i «bisogni della famiglia», includendovi spesso i debiti dell'attività da cui la famiglia trae sostentamento — il che riduce sensibilmente la protezione per l'imprenditore individuale. Inoltre il fondo costituito quando i debiti erano già in essere è esposto all'azione revocatoria, e l'art. 2929-bis c.c. consente al creditore di pignorare direttamente i beni conferiti a titolo gratuito nell'anno precedente, senza dover prima ottenere una sentenza." },
    { type: "note", text: "Costituire un fondo patrimoniale o un trust quando la crisi è già iniziata non mette la casa al riparo: la espone a un'azione più rapida e, nei casi più gravi, integra un atto in frode ai creditori che pregiudica anche l'accesso alle procedure di sovraindebitamento, dove la meritevolezza del debitore è condizione di ammissione." },

    { type: "h2", text: "Cosa salva la casa per davvero", id: "strumenti" },
    { type: "p", text: "Gli strumenti che funzionano non nascondono il bene: lo mettono dentro un percorso che sospende le azioni dei creditori e ne ridefinisce le pretese. Sono quattro, in ordine di intervento crescente." },
    { type: "ol", items: [
      "Rinegoziazione o rifinanziamento del mutuo prima della decadenza dal beneficio del termine: finché il contratto è in vita le alternative sono molte di più.",
      "Conversione del pignoramento (art. 495 c.p.c.): il debitore sostituisce l'immobile con una somma di denaro, versata anche ratealmente, e la vendita si ferma.",
      "Piano di ristrutturazione dei debiti del consumatore: consente di proseguire il pagamento del mutuo sull'abitazione principale alle scadenze convenute mentre gli altri debiti vengono ristrutturati, come spiegato nella guida al [piano del consumatore](/risorse/piano-consumatore).",
      "Saldo e stralcio negoziato con il creditore procedente, spesso praticabile quando il credito è stato ceduto a un operatore specializzato.",
    ]},
    { type: "p", text: "Il fattore decisivo non è quale strumento si sceglie, ma quando. Prima della notifica del pignoramento le opzioni sono tutte aperte; dopo il decreto di trasferimento non ne resta nessuna. In mezzo c'è una fase lunga mesi in cui si può ancora intervenire, e che quasi sempre viene sprecata nell'attesa che la situazione si risolva da sola." },

    { type: "h2", text: "Le verifiche da fare subito", id: "verifiche" },
    { type: "ul", items: [
      "Visura ipotecaria aggiornata: quali vincoli gravano già sull'immobile e da quando.",
      "Visura catastale: categoria e classamento, che determinano l'applicabilità della tutela verso l'Agente della Riscossione.",
      "Certificato di residenza storico: la residenza anagrafica è uno dei requisiti dell'art. 76.",
      "Elenco completo dei creditori distinti per natura: erariale, bancaria, commerciale. È da qui che si capisce il rischio reale.",
      "Stato del mutuo: numero di rate impagate e se la banca abbia già dichiarato la decadenza dal beneficio del termine.",
    ]},

    { type: "h2", text: "Domande frequenti sul pignoramento della prima casa", id: "faq" },
    { type: "faq", items: [
      {
        q: "È vero che la prima casa non si può pignorare?",
        a: "No, non in generale. Il limite dell'art. 76 DPR 602/1973 vale solo per l'Agenzia delle Entrate-Riscossione e solo se l'immobile è l'unico di proprietà, a uso abitativo, con residenza anagrafica del debitore e non di lusso. Banche, finanziarie, fornitori, condominio e creditori privati possono espropriarlo senza incontrare quel limite."
      },
      {
        q: "Ho solo cartelle esattoriali: la casa è al sicuro?",
        a: "Dall'espropriazione sì, se ricorrono tutte le condizioni dell'art. 76. Non dall'ipoteca: sopra i 20.000 euro di debito complessivo l'Agente della Riscossione può comunque iscriverla ai sensi dell'art. 77, con durata ventennale. La casa resta tua ma diventa di fatto invendibile finché il vincolo non viene cancellato."
      },
      {
        q: "Se metto la casa nel fondo patrimoniale sono protetto?",
        a: "Solo per i debiti che il creditore sapeva essere estranei ai bisogni della famiglia (art. 170 c.c.), e la giurisprudenza interpreta quei bisogni in modo ampio. Un fondo costituito quando i debiti erano già presenti è inoltre attaccabile con l'azione revocatoria e, se l'atto è a titolo gratuito e recente, l'art. 2929-bis c.c. consente il pignoramento diretto senza una previa sentenza."
      },
      {
        q: "La banca può pignorare la casa anche se ci vivono i miei figli minori?",
        a: "Sì. La presenza di figli minori non rende l'immobile impignorabile: incide semmai sui tempi pratici della liberazione e sulle valutazioni del giudice dell'esecuzione in ordine alla custodia, non sulla legittimità dell'espropriazione."
      },
      {
        q: "Posso fermare il pignoramento già iniziato?",
        a: "Sì, finché non interviene il decreto di trasferimento. Gli strumenti principali sono la conversione del pignoramento ex art. 495 c.p.c., che sostituisce il bene con una somma versata anche a rate, l'accordo a stralcio con il creditore procedente e le procedure di sovraindebitamento, che sospendono le azioni esecutive. Ogni settimana che passa riduce le alternative."
      },
      {
        q: "Vendere la casa a un familiare mette il bene al riparo?",
        a: "No, e peggiora la posizione. Un atto dispositivo compiuto quando i debiti sono già in essere è aggredibile con l'azione revocatoria; se è a titolo gratuito e compiuto nell'anno precedente, il creditore può pignorare direttamente il bene. Sul piano delle procedure di sovraindebitamento, un atto del genere compromette il giudizio di meritevolezza e quindi l'accesso al beneficio."
      },
    ]},

    { type: "h2", text: "In sintesi", id: "conclusione" },
    { type: "p", text: "La protezione dell'abitazione principale esiste, ma è più stretta di come viene raccontata: riguarda un solo creditore, richiede quattro requisiti simultanei e non impedisce l'ipoteca. Per tutti gli altri creditori la casa è un bene aggredibile come qualunque altro. La difesa efficace non passa da schermi patrimoniali costruiti in fretta, che espongono a revocatorie e pregiudicano l'accesso alle procedure, ma da una valutazione tempestiva della posizione complessiva: chi sono i creditori, quali titoli hanno, a che punto è ciascuna azione e quale strumento la ferma." },
  ],
};
