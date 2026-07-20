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
  readTime: "12 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: "/covers/esdebitazione-incapiente.png",
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
    { type: "p", text: "Se nel quadriennio si verificano sopravvenienze che consentirebbero di soddisfare almeno il 10% dei debiti, il giudice può revocare l'esdebitazione. La logica è chiara: il beneficio è concesso a chi non ha nulla, e se la situazione cambia significativamente l'equilibrio iniziale viene meno." },

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

    { type: "h2", text: "Costi e tempi della procedura", id: "costi-tempi" },
    { type: "p", text: "Le procedure di sovraindebitamento, e quindi anche l'esdebitazione dell'incapiente, prevedono costi articolati: compenso dell'OCC, spese vive del Tribunale (contributo unificato, marche da bollo), eventuali oneri di pubblicazione. I compensi dell'OCC sono regolati da apposito decreto ministeriale e variano a seconda dell'entità del debito e della complessità." },
    { type: "p", text: "I tempi medi, dalla raccolta documentale al decreto finale, sono variabili: dipendono dal Tribunale competente, dalla completezza della documentazione e dall'eventuale opposizione di creditori. In via indicativa, da alcuni mesi a oltre un anno." },

    { type: "h2", text: "Domande frequenti sull'esdebitazione dell'incapiente", id: "faq" },
    { type: "faq", items: [
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
