import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "esdebitazione-incapiente",
  title: "Esdebitazione del debitore incapiente: cosa significa, requisiti e procedura (art. 283 CCII)",
  excerpt: "L'esdebitazione del debitore incapiente è uno strumento del Codice della Crisi che consente la cancellazione integrale dei debiti anche in assenza di patrimonio. Guida ai requisiti, alla procedura e ai limiti previsti dall'art. 283 CCII.",
  category: "Privati",
  date: "Aprile 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: "/covers/esdebitazione-incapiente.webp",
  keywords: ["esdebitazione incapiente", "art 283 CCII", "cancellazione debiti", "debitore incapiente", "sovraindebitamento"],
  intro: "L'esdebitazione del debitore incapiente è uno degli istituti più innovativi introdotti dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019). Disciplinata dall'art. 283 CCII, consente — in presenza di precisi presupposti — la cancellazione integrale dei debiti anche quando il debitore non dispone di alcun patrimonio aggredibile né di redditi sufficienti a soddisfare i creditori. È uno strumento riservato alle situazioni in cui ogni altra procedura sarebbe priva di utilità concreta.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Cosa si intende per debitore incapiente", id: "definizione" },
    { type: "p", text: "Nella terminologia del Codice della Crisi è considerato 'incapiente' il debitore persona fisica che si trova in stato di sovraindebitamento e che, pur essendo meritevole, non è in grado di offrire ai creditori alcuna utilità diretta o indiretta, neppure in prospettiva futura. In altri termini: una persona che ha debiti, ma non ha né patrimonio aggredibile né redditi che, depurati delle spese di sussistenza, consentano di destinare somme ai creditori." },
    { type: "p", text: "L'art. 283 CCII è la norma di riferimento. Si tratta di un'evoluzione di quanto già previsto, nella vecchia disciplina, dall'art. 14-quaterdecies della Legge 3/2012, ma con presupposti procedurali aggiornati e una collocazione organica all'interno del nuovo Codice." },

    { type: "image", src: heroHope, alt: "Persona che guarda al futuro dopo l'esdebitazione", caption: "L'esdebitazione restituisce al debitore la possibilità concreta di ripartire, una volta che la sua situazione patrimoniale lo giustifica." },

    { type: "h2", text: "Presupposti per accedere all'esdebitazione dell'incapiente", id: "requisiti" },
    { type: "p", text: "L'accesso a questo strumento è subordinato alla compresenza di più presupposti, sia di tipo soggettivo sia di tipo oggettivo. Il Tribunale verifica analiticamente ciascuno di essi prima di concedere il beneficio." },

    { type: "h3", text: "Presupposti soggettivi" },
    { type: "ul", items: [
      "Persona fisica (sono escluse società ed enti)",
      "Stato di sovraindebitamento accertato in via documentale",
      "Meritevolezza del debitore (assenza di frode, dolo o colpa grave nella formazione del debito)",
      "Non aver già beneficiato dell'esdebitazione dell'incapiente in precedenza",
      "Aver collaborato lealmente con gli organi della procedura",
    ]},

    { type: "h3", text: "Presupposti oggettivi" },
    { type: "ul", items: [
      "Assenza di patrimonio aggredibile dai creditori",
      "Reddito disponibile non sufficiente a garantire alcuna utilità ai creditori, neppure parziale",
      "Mancanza di prospettive future di miglioramento documentabili al momento della domanda",
    ]},

    { type: "note", text: "Il giudizio di meritevolezza è uno degli aspetti più delicati: il Tribunale valuta come si è formato il debito, se vi sono stati comportamenti dolosi (ad esempio occultamento del patrimonio, frode ai creditori) o colpa grave (sproporzionato indebitamento rispetto al reddito). In questa valutazione la documentazione raccolta dall'OCC e la condotta processuale del debitore pesano in modo determinante." },

    { type: "h2", text: "Il limite della 'una sola volta nella vita'", id: "una-volta" },
    { type: "p", text: "L'art. 283, comma 1, CCII è esplicito: il beneficio dell'esdebitazione del debitore incapiente può essere concesso una sola volta nella vita. Una volta ottenuta, non è più possibile ricorrervi in futuro. È una scelta del legislatore che mira a evitare un uso strumentale e ripetuto della procedura." },
    { type: "p", text: "Questo limite va valutato con attenzione: prima di richiedere l'esdebitazione dell'incapiente conviene verificare se non esistano alternative — concordato minore, piano del consumatore, liquidazione controllata — che potrebbero risolvere la situazione attuale lasciando aperta la possibilità di un futuro intervento, qualora dovesse rendersi necessario." },

    { type: "h2", text: "Le sopravvenienze nei quattro anni successivi", id: "sopravvenienze" },
    { type: "p", text: "Per i quattro anni successivi al decreto che dispone l'esdebitazione, il debitore ha l'obbligo di comunicare al giudice eventuali sopravvenienze rilevanti. Si tratta tipicamente di:" },
    { type: "ul", items: [
      "Eredità o donazioni ricevute",
      "Vincite di una certa entità",
      "Miglioramenti sensibili della situazione reddituale (nuovo lavoro stabile con reddito elevato)",
      "Acquisizione di patrimonio per causa diversa dal lavoro",
    ]},
    { type: "p", text: "L'effetto previsto dalla legge non è la revoca automatica del beneficio, ma la nascita di un obbligo di pagamento: se entro quattro anni dal decreto sopravvengono utilità rilevanti che consentono di soddisfare i creditori in misura non inferiore al dieci per cento, il debitore è tenuto a pagare in quella misura. La revoca vera e propria resta riservata ai casi di frode o di atti compiuti in danno dei creditori." },
    { type: "p", text: "La legge precisa anche cosa non conta come utilità rilevante: non lo sono i finanziamenti ottenuti in qualunque forma, né ciò che serve al mantenimento del debitore e della sua famiglia. Un aumento di reddito che si limita a riportare il nucleo a una soglia di dignità non fa scattare l'obbligo; un'eredità o una vincita, sì." },

    { type: "h2", text: "Come si svolge la procedura", id: "procedura" },
    { type: "p", text: "L'iter dell'esdebitazione del debitore incapiente è articolato e prevede l'intervento di più soggetti: l'OCC (Organismo di Composizione della Crisi), il debitore stesso, eventualmente l'esperto e infine il Tribunale che pronuncia sul beneficio." },

    { type: "h3", text: "1. Contatto con l'OCC" },
    { type: "p", text: "Il punto di partenza è il contatto con un Organismo di Composizione della Crisi accreditato. L'OCC ha il compito di raccogliere la documentazione, ricostruire la situazione debitoria, redigere la relazione particolareggiata che accompagnerà la domanda al Tribunale." },

    { type: "h3", text: "2. Raccolta documentale" },
    { type: "p", text: "Il debitore deve fornire all'OCC tutta la documentazione utile: estratti AdER, contratti di finanziamento, atti di precetto e pignoramento, estratti conto bancari, dichiarazioni dei redditi, certificazioni patrimoniali. La completezza documentale è essenziale: l'eventuale occultamento, anche involontario, può compromettere la procedura." },

    { type: "h3", text: "3. Relazione dell'OCC" },
    { type: "p", text: "L'OCC redige una relazione particolareggiata che descrive: cause del sovraindebitamento, condotta del debitore, situazione patrimoniale e reddituale attuale, prospettive future. La relazione contiene anche il giudizio dell'OCC sulla meritevolezza." },

    { type: "h3", text: "4. Deposito della domanda in Tribunale" },
    { type: "p", text: "La domanda di esdebitazione viene depositata presso il Tribunale competente (di norma quello del luogo di residenza del debitore) corredata dalla relazione OCC e da tutta la documentazione. Da questo momento i creditori vengono informati e possono presentare osservazioni." },

    { type: "h3", text: "5. Decreto del giudice" },
    { type: "p", text: "Il giudice esamina la domanda, valuta i presupposti e decide. Se la domanda è accolta, il decreto dichiara la cancellazione dei debiti residui. Il decreto è impugnabile dai creditori entro i termini di legge." },

    { type: "h2", text: "Quali debiti vengono cancellati e quali no", id: "debiti-esclusi" },
    { type: "p", text: "L'esdebitazione produce l'effetto di rendere inesigibili i crediti concorsuali nei confronti del debitore. Vengono cancellati pressoché tutti i debiti pregressi, ma esistono alcune eccezioni espressamente previste dalla legge." },

    { type: "h3", text: "Debiti che vengono cancellati" },
    { type: "ul", items: [
      "Debiti verso banche e finanziarie (mutui non garantiti, prestiti personali, carte revolving)",
      "Debiti commerciali verso fornitori",
      "Debiti tributari e contributivi (cartelle AdER, INPS, INAIL)",
      "Debiti per somme dovute a titolo di sanzione amministrativa",
      "Debiti familiari diversi da quelli alimentari",
    ]},

    { type: "h3", text: "Debiti che restano esclusi" },
    { type: "ul", items: [
      "Obblighi di mantenimento e alimentari",
      "Debiti per il risarcimento dei danni da fatto illecito extracontrattuale",
      "Sanzioni penali e amministrative di carattere pecuniario non accessorie a debiti estinti",
      "Debiti fiscali per imposte, sanzioni e interessi conseguenti a comportamenti fraudolenti",
    ]},

    { type: "note", text: "Le esclusioni dell'art. 283 CCII vanno applicate caso per caso. Ad esempio, una sanzione penale può essere esclusa se è ancora pendente, ma può essere ricompresa se accessoria a un debito tributario tipico. L'analisi puntuale dei singoli rapporti è parte integrante del lavoro preliminare." },

    { type: "h2", text: "Quando l'esdebitazione dell'incapiente è la scelta giusta", id: "quando-conviene" },
    { type: "p", text: "Lo strumento è utile in situazioni specifiche. Non si applica a chi può, anche faticosamente, pagare una parte del debito: per quei casi esistono il piano del consumatore, il concordato minore, la liquidazione controllata. L'art. 283 CCII è pensato per chi è oggettivamente al di sotto della soglia di capienza." },
    { type: "p", text: "I profili tipici che possono accedere sono:" },
    { type: "ul", items: [
      "Pensionati con pensioni minime o sociali e debiti accumulati",
      "Persone in stato di disoccupazione prolungata senza patrimonio",
      "Ex-imprenditori la cui posizione patrimoniale è ormai irreversibilmente compromessa",
      "Lavoratori con reddito molto basso e nucleo familiare numeroso a carico",
    ]},

    { type: "h2", text: "La meritevolezza: come il tribunale la valuta davvero", id: "meritevolezza" },
    { type: "p", text: "L'esdebitazione dell'incapiente non è un diritto che discende dalla sola assenza di patrimonio: è un beneficio riservato al debitore meritevole. È il punto su cui si decide la maggior parte delle domande, e quello su cui i creditori concentrano le opposizioni. La meritevolezza non si autocertifica: emerge dalla relazione dell'OCC, che ricostruisce le cause dell'indebitamento una per una." },
    { type: "p", text: "Non basta non aver commesso illeciti. Il giudice valuta se il debitore abbia assunto obbligazioni senza una ragionevole prospettiva di poterle adempiere, se abbia aggravato la propria posizione dopo la manifestazione della crisi, se abbia compiuto atti che hanno sottratto valore ai creditori. È una valutazione di comportamento, non di risultato: perdere il lavoro o subire una malattia non pregiudica nulla, moltiplicare i finanziamenti per pagarne altri sì." },
    { type: "table", headers: ["Circostanza", "Effetto tipico sulla valutazione"], rows: [
      ["Perdita del lavoro, malattia, separazione, calo dell'attività", "Neutra o favorevole: il sovraindebitamento è incolpevole"],
      ["Ricorso al credito sproporzionato rispetto al reddito documentabile", "Sfavorevole: indebitamento colposo"],
      ["Nuovi finanziamenti contratti per pagare rate di finanziamenti precedenti", "Sfavorevole, soprattutto se ravvicinati alla domanda"],
      ["Cessione o donazione di beni a familiari negli anni precedenti", "Fortemente sfavorevole: potenziale atto in frode"],
      ["Omessa collaborazione con l'OCC o documentazione incompleta", "Sfavorevole: incide sulla stessa ammissibilità"],
      ["Debiti da garanzie prestate per un'attività d'impresa poi fallita", "Di regola neutra, se la garanzia era proporzionata al momento in cui fu prestata"],
    ]},

    { type: "h2", text: "Come si dimostra l'incapienza", id: "prova-incapienza" },
    { type: "p", text: "L'incapienza va provata, non affermata. L'OCC costruisce un quadro documentale che deve reggere all'esame del giudice e all'eventuale contestazione dei creditori: è la parte più lunga del lavoro e quella che determina i tempi della procedura." },
    { type: "ul", items: [
      "Dichiarazioni dei redditi e certificazioni uniche degli ultimi anni, per fotografare la capacità reddituale effettiva.",
      "ISEE del nucleo familiare e composizione dello stato di famiglia.",
      "Visure immobiliari e catastali, visura al PRA, visura camerale: servono a dimostrare l'assenza di beni aggredibili, non solo a elencarli.",
      "Estratti conto bancari e postali del periodo rilevante, per ricostruire i flussi e le cause dell'indebitamento.",
      "Elenco completo dei creditori con gli importi, comprese le posizioni cedute a società di recupero.",
      "Estratto di ruolo aggiornato per la posizione con l'Agente della Riscossione.",
      "Documentazione degli eventi che hanno determinato la crisi: licenziamento, cartelle cliniche, provvedimenti di separazione, cessazione dell'attività.",
    ]},
    { type: "note", text: "Omettere un creditore o un bene non è un dettaglio: l'incompletezza dei dati è una delle cause più frequenti di rigetto e, nei casi più gravi, integra un atto in frode che preclude il beneficio. Conviene dichiarare anche ciò che sembra irrilevante e lasciare che sia l'OCC a valutarne il peso." },

    { type: "h2", text: "Il decreto, l'opposizione dei creditori e gli effetti", id: "decreto-opposizione" },
    { type: "p", text: "La procedura si chiude con un decreto del giudice che dichiara inesigibili i crediti anteriori. Il decreto viene comunicato ai creditori, che possono proporre reclamo nel termine di trenta giorni: è la sede in cui possono contestare la meritevolezza o l'effettiva incapienza, non l'ammontare del proprio credito." },
    { type: "p", text: "Dal momento in cui il provvedimento diventa definitivo i creditori anteriori non possono più agire: cessano i pignoramenti in corso, non se ne possono avviare di nuovi, e le posizioni non sono più esigibili nemmeno in via stragiudiziale. Il debito non viene «cancellato» nel senso di estinto per pagamento: diventa inesigibile, il che sul piano pratico produce lo stesso risultato per il debitore." },

    { type: "h2", text: "Cosa cambia nella vita quotidiana dopo il decreto", id: "dopo-il-decreto" },
    { type: "p", text: "È la domanda che i clienti fanno più spesso e su cui circolano più aspettative sbagliate. L'esdebitazione libera dai debiti, non riscrive automaticamente la storia creditizia." },
    { type: "ul", items: [
      "Le segnalazioni nei sistemi di informazione creditizia seguono i propri tempi di conservazione e non si azzerano con il decreto: l'accesso al credito resta difficile per un periodo.",
      "Il conto corrente resta operativo e i nuovi redditi sono pienamente disponibili: non c'è più alcuna trattenuta per i debiti anteriori.",
      "Le posizioni sorte dopo il decreto sono normali obbligazioni: l'esdebitazione non protegge dai debiti futuri.",
      "Per quattro anni resta l'obbligo di dichiarare le utilità rilevanti sopravvenute, con la soglia del dieci per cento vista sopra.",
      "Il beneficio è irripetibile: chi lo ha già ottenuto non potrà chiederlo una seconda volta.",
    ]},

    { type: "h2", text: "Quale procedura scegliere: il confronto", id: "confronto-procedure" },
    { type: "p", text: "L'esdebitazione dell'incapiente è la procedura giusta solo in una situazione precisa: nessun patrimonio, nessun reddito aggredibile, nessuna prospettiva di pagamento nemmeno parziale. Quando qualcosa c'è, la strada è un'altra." },
    { type: "table", headers: ["Situazione del debitore", "Procedura di riferimento"], rows: [
      ["Nessun bene e nessun reddito aggredibile, debitore meritevole", "Esdebitazione del debitore incapiente (art. 283 CCII)"],
      ["Reddito che consente un pagamento parziale, debiti contratti per scopi personali", "[Piano di ristrutturazione dei debiti del consumatore](/risorse/piano-consumatore)"],
      ["Patrimonio da liquidare, anche modesto", "[Liquidazione controllata del sovraindebitato](/risorse/liquidazione-controllata-sovraindebitato)"],
      ["Debitore non consumatore: professionista, imprenditore minore, agricoltore", "[Concordato minore](/risorse/concordato-minore)"],
      ["Impresa sopra le soglie, in crisi ma con attività in corso", "[Composizione negoziata](/risorse/composizione-negoziata) o [concordato preventivo](/risorse/concordato-preventivo)"],
    ]},
    { type: "p", text: "La scelta non è libera: dipende dai presupposti oggettivi e soggettivi, verificati dall'OCC prima del deposito. Presentare la domanda sbagliata significa perdere mesi e i costi già sostenuti. Il quadro d'insieme delle quattro procedure è nella guida sul [sovraindebitamento](/risorse/sovraindebitamento-cos-e)." },

    { type: "h2", text: "Gli errori che fanno rigettare la domanda", id: "errori" },
    { type: "ol", items: [
      "Presentare la domanda dopo aver compiuto atti dispositivi sul poco patrimonio residuo: la cessione a un familiare pochi mesi prima è il caso di scuola.",
      "Dichiarare un'incapienza che l'istruttoria smentisce, ad esempio omettendo un immobile in comproprietà o un'attività ancora aperta.",
      "Chiedere l'esdebitazione dell'incapiente quando esiste una capacità di rimborso, sia pure minima: la procedura corretta sarebbe un'altra e il rigetto è quasi certo.",
      "Contrarre nuovi finanziamenti mentre la domanda è in preparazione.",
      "Sottovalutare la ricostruzione delle cause dell'indebitamento: senza una narrazione documentata, la meritevolezza resta indimostrata.",
    ]},

    { type: "h2", text: "Costi e tempi della procedura", id: "costi-tempi" },
    { type: "p", text: "Le procedure di sovraindebitamento, e quindi anche l'esdebitazione dell'incapiente, prevedono costi articolati: compenso dell'OCC, spese vive del Tribunale (contributo unificato, marche da bollo), eventuali oneri di pubblicazione. I compensi dell'OCC sono regolati da apposito decreto ministeriale e variano a seconda dell'entità del debito e della complessità." },
    { type: "p", text: "I tempi medi, dalla raccolta documentale al decreto finale, sono variabili: dipendono dal Tribunale competente, dalla completezza della documentazione e dall'eventuale opposizione di creditori. In via indicativa, da alcuni mesi a oltre un anno." },

    { type: "h2", text: "Domande frequenti sull'esdebitazione dell'incapiente", id: "faq" },
    { type: "faq", items: [
      {
        q: "Se trovo lavoro dopo l'esdebitazione devo restituire i soldi?",
        a: "Non per il solo fatto di lavorare. L'obbligo di pagamento sorge se entro quattro anni dal decreto sopravvengono utilità rilevanti che consentano di soddisfare i creditori in misura non inferiore al dieci per cento. La legge esclude espressamente dalle utilità rilevanti i finanziamenti e quanto serve al mantenimento del debitore e della famiglia: uno stipendio che copre le necessità del nucleo non fa scattare l'obbligo."
      },
      {
        q: "I creditori possono opporsi all'esdebitazione dell'incapiente?",
        a: "Sì. Il decreto viene comunicato ai creditori, che possono proporre reclamo entro trenta giorni. In quella sede contestano tipicamente la meritevolezza del debitore o l'effettiva assenza di beni e redditi aggredibili, non l'ammontare del proprio credito, che non è oggetto del giudizio."
      },
      {
        q: "L'esdebitazione cancella anche le segnalazioni in Centrale Rischi e CRIF?",
        a: "No. Il decreto rende inesigibili i debiti, ma le segnalazioni nei sistemi di informazione creditizia seguono i propri tempi di conservazione e si estinguono con quelli. Nell'immediato l'accesso al credito resta difficile: è un effetto da mettere in conto quando si pianifica il dopo procedura."
      },
      {
        q: "Che differenza c'è tra esdebitazione dell'incapiente e liquidazione controllata?",
        a: "La liquidazione controllata presuppone un patrimonio da liquidare e destinare ai creditori, con esdebitazione che opera di diritto dopo tre anni. L'esdebitazione dell'incapiente si applica quando non c'è nulla da liquidare né redditi aggredibili: non c'è alcun pagamento ai creditori, il beneficio si ottiene una sola volta nella vita e resta l'obbligo di dichiarare le sopravvenienze per quattro anni."
      },
      {
        q: "Posso accedere all'esdebitazione se ho la casa di proprietà?",
        a: "L'esdebitazione del debitore incapiente presuppone l'assenza di patrimonio aggredibile. Se hai una casa di proprietà, normalmente la procedura applicabile è la liquidazione controllata (che prevede la cessione dei beni) seguita eventualmente da esdebitazione. La presenza di una prima casa con specifiche caratteristiche può richiedere valutazioni puntuali."
      },
      {
        q: "Posso ricevere un'eredità dopo l'esdebitazione?",
        a: "Sì, ma con un vincolo. Per quattro anni dal decreto hai l'obbligo di comunicare al giudice eventuali sopravvenienze. Se l'eredità ricevuta consentirebbe di pagare almeno il 10% dei debiti cancellati, il giudice può revocare l'esdebitazione. Trascorsi i quattro anni, le sopravvenienze non hanno più effetto."
      },
      {
        q: "L'esdebitazione cancella anche i debiti verso l'Agenzia Entrate Riscossione?",
        a: "Sì. I debiti tributari e contributivi gestiti dall'AdER rientrano tra i debiti concorsuali e vengono cancellati dall'esdebitazione, salve le eccezioni espressamente previste (ad esempio debiti derivanti da comportamenti fraudolenti accertati)."
      },
      {
        q: "Quanto costa attivare la procedura?",
        a: "I costi sono composti dal compenso dell'OCC (regolato da DM e variabile in base alla complessità), dalle spese vive del Tribunale e da eventuali costi di assistenza legale. In molti casi i costi possono essere dilazionati. Una valutazione preventiva permette di avere un quadro chiaro prima di procedere."
      },
      {
        q: "Posso lavorare dopo aver ottenuto l'esdebitazione?",
        a: "Sì, l'esdebitazione non comporta alcuna limitazione professionale né interdizione. Puoi lavorare, aprire un'attività, percepire stipendi e pensioni come prima. L'unico vincolo è l'obbligo di comunicare le sopravvenienze rilevanti per i quattro anni successivi."
      },
      {
        q: "Cosa succede se ho omesso di dichiarare un bene?",
        a: "L'omissione di dichiarazione di un bene, se accertata, può portare alla revoca dell'esdebitazione. Per questo è essenziale che la fase di raccolta documentale sia completa: l'OCC e il legale che ti assiste hanno proprio il compito di assicurarsi che nulla venga trascurato."
      },
    ]},

    { type: "h2", text: "Conclusione", id: "conclusione" },
    { type: "p", text: "L'esdebitazione del debitore incapiente è uno strumento di rilevante valore sociale: consente a chi è in condizione di reale incapienza di riprendere in mano la propria vita senza più il peso di debiti impagabili. È però uno strumento tecnico, con presupposti specifici e procedure articolate. L'analisi della singola posizione, condotta da professionisti che conoscono la materia, è il primo passo per capire se rientra tra i casi in cui può essere applicato." },
  ],
  }
