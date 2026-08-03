import type { Article, ArticleMeta } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const meta: ArticleMeta = {
  slug: "debiti-fornitori",
  title: "Debiti commerciali con fornitori: gestire la difficoltà e tutelare l'attività",
  excerpt: "Decreti ingiuntivi, ritenute di pagamento, ricorso alla composizione negoziata, transazione stragiudiziale, gestione del contenzioso. Tutto quello che un imprenditore deve sapere quando i debiti verso fornitori diventano insostenibili.",
  category: "Imprese",
  date: "Maggio 2026",
  readTime: "14 min",
  author: "Avv. Armando Rossi",
  cover: "from-gold-dark to-navy",
  coverImage: "/covers/debiti-fornitori.webp",
  keywords: ["debiti fornitori", "debiti commerciali", "decreto ingiuntivo fornitore", "transazione stragiudiziale", "saldo a stralcio fornitori", "composizione negoziata fornitori"],
  intro: "I debiti commerciali con i fornitori sono spesso il primo segnale visibile di una difficoltà aziendale. A differenza dei debiti bancari, gestiti in modo strutturato e con archivi creditizi formali, i debiti verso fornitori si manifestano per via diretta: solleciti, telefonate, mancate consegne, blocco delle forniture. Conoscere come gestirli — dal punto di vista legale, contabile e relazionale — è essenziale per evitare che una difficoltà temporanea si trasformi in una crisi conclamata.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "h2", text: "Caratteristiche del debito commerciale", id: "caratteristiche" },
    { type: "p", text: "Il debito verso un fornitore è il debito che un'impresa contrae per beni o servizi ricevuti e non ancora pagati. Si origina da una fattura, è regolato da condizioni di pagamento (30/60/90 giorni, con esposizione cambiaria o RID, talvolta con anticipi), e ha una natura prevalentemente chirografaria: non è garantito da pegni o ipoteche, salvo specifici accordi." },
    { type: "p", text: "Rispetto al debito bancario, ha alcune peculiarità:" },
    { type: "ul", items: [
      "È spesso più 'negoziabile': il fornitore ha interesse a mantenere il rapporto commerciale",
      "Ha tempi di formalizzazione più rapidi (la fattura è già titolo provvisorio in molti casi)",
      "Può essere ceduto a società di factoring o di recupero",
      "Comporta rapidamente effetti operativi (blocco forniture, rifiuto di nuove commesse)",
    ]},

    { type: "image", src: handshakeTrust, alt: "Trattativa commerciale tra imprenditore e fornitore", caption: "Il rapporto con il fornitore è anche relazionale: una trattativa trasparente è spesso più efficace di un confronto giudiziale, specie quando esiste storia commerciale consolidata." },

    { type: "h2", text: "Il ciclo del recupero crediti commerciale", id: "ciclo-recupero" },
    { type: "p", text: "Quando una fattura non viene pagata, il fornitore segue tipicamente un percorso strutturato di recupero. Conoscerlo serve a capire dove ci si trova e qual è il prossimo passo." },

    { type: "h3", text: "1. Sollecito interno (primi 30 giorni dalla scadenza)" },
    { type: "p", text: "L'ufficio amministrativo del fornitore invia uno o più solleciti: email, telefonata, fax. È una fase a basso costo e a basso impatto, ma è anche la fase in cui è più facile mantenere il rapporto." },

    { type: "h3", text: "2. Diffida formale (30-60 giorni)" },
    { type: "p", text: "Se i solleciti non funzionano, il fornitore passa a una comunicazione formale (PEC, raccomandata): è la 'messa in mora', che produce effetti giuridici (decorrenza degli interessi di mora ex D.lgs. 231/2002 nei rapporti B2B)." },

    { type: "h3", text: "3. Affidamento a società di recupero o studio legale" },
    { type: "p", text: "Per fatture significative, il fornitore può affidare il recupero a uno studio legale o a una società specializzata. Il tono delle comunicazioni si fa più formale e i tempi accelerano." },

    { type: "h3", text: "4. Decreto ingiuntivo" },
    { type: "p", text: "Se non si arriva al pagamento, il fornitore presenta ricorso per decreto ingiuntivo. Le fatture, accompagnate da documentazione (DDT, contratti, conferme d'ordine), costituiscono prova scritta sufficiente per ottenere il decreto, spesso provvisoriamente esecutivo." },

    { type: "h3", text: "5. Esecuzione" },
    { type: "p", text: "Decorso il termine per opposizione (40 giorni), il fornitore procede con il pignoramento: del conto corrente, dei beni aziendali, dei crediti verso terzi. In caso di pignoramento dei crediti, il fornitore può ottenere direttamente le somme dovute all'impresa dai suoi clienti." },

    { type: "h2", text: "Il decreto ingiuntivo: anatomia di un atto chiave", id: "decreto-ingiuntivo" },
    { type: "p", text: "Il decreto ingiuntivo (artt. 633 e ss. c.p.c.) è uno degli strumenti più usati nei rapporti B2B. Funziona così:" },
    { type: "ol", items: [
      "Il fornitore presenta ricorso al Tribunale o al Giudice di Pace allegando le fatture e la prova dell'obbligazione",
      "Il giudice esamina inaudita altera parte (senza sentire la controparte) e, se i documenti sono sufficienti, emette il decreto",
      "Il decreto può essere immediatamente esecutivo o no, a seconda dei casi",
      "Il decreto viene notificato al debitore",
      "Il debitore ha 40 giorni per fare opposizione",
      "Se nessuna opposizione, il decreto diventa definitivo e si procede all'esecuzione",
    ]},

    { type: "h3", text: "L'opposizione al decreto ingiuntivo (art. 645 c.p.c.)" },
    { type: "p", text: "L'opposizione si propone con atto di citazione entro 40 giorni dalla notifica del decreto. È un vero e proprio giudizio di merito (anche se ha origine in un decreto). Si può opporre se:" },
    { type: "ul", items: [
      "La fornitura non è mai avvenuta o non è conforme",
      "Esistono compensazioni con crediti del debitore verso il fornitore",
      "Le condizioni contrattuali sono diverse da quelle azionate",
      "C'è una prescrizione del credito",
      "Esistono vizi formali della procedura",
    ]},

    { type: "note", text: "L'opposizione al decreto ingiuntivo è spesso oggetto di valutazioni 'tattiche': anche senza motivi solidi, alcune imprese fanno opposizione per guadagnare tempo. È una strategia ad alto rischio: in caso di rigetto, le spese di giudizio si sommano al debito originario." },

    { type: "h2", text: "Strumenti di gestione del debito verso fornitori", id: "strumenti-gestione" },

    { type: "h3", text: "Dilazione concordata" },
    { type: "p", text: "Lo strumento più semplice e più efficace nei rapporti consolidati: si propone al fornitore una dilazione del pagamento (60-90-120 giorni in più), eventualmente con un piano di rientro a rate. Il fornitore, se ha interesse a mantenere il cliente, spesso accetta." },

    { type: "h3", text: "Pagamento parziale + dilazione" },
    { type: "p", text: "Variante della dilazione: si versa subito una quota (es. 30-50% del dovuto) e si dilaziona il resto. Questo dimostra al fornitore una capacità di pagamento e una volontà di collaborare, riducendo il rischio di azioni legali immediate." },

    { type: "h3", text: "Saldo a stralcio" },
    { type: "p", text: "Si propone il pagamento di una somma inferiore al dovuto a chiusura definitiva del rapporto. Va formalizzato per iscritto, con quietanza liberatoria a evitare contestazioni successive. È più frequente quando il credito è stato ceduto a società di recupero." },

    { type: "h3", text: "Pagamento tramite cessione di crediti" },
    { type: "p", text: "L'impresa può cedere al fornitore crediti che vanta verso propri clienti (factoring inverso, cessione del credito ex art. 1260 c.c.). Soluzione utile quando ci sono crediti incagliati che il fornitore può recuperare più efficacemente." },

    { type: "h3", text: "Compensazione di partite" },
    { type: "p", text: "Se l'impresa è anche fornitore del proprio fornitore (rapporti incrociati), si può compensare partite (art. 1241 c.c.). È spesso possibile in filiere industriali strutturate." },

    { type: "h3", text: "Composizione negoziata" },
    { type: "p", text: "Quando i debiti verso fornitori sono parte di una difficoltà aziendale più ampia, lo strumento di riferimento è la composizione negoziata della crisi (artt. 12-25 CCII). L'esperto indipendente coordina le trattative con i fornitori e gli altri creditori, eventualmente con misure protettive che congelano le azioni esecutive." },

    { type: "h3", text: "Concordato preventivo" },
    { type: "p", text: "In casi più gravi, il concordato preventivo (artt. 84-120 CCII) permette di proporre ai creditori, fornitori inclusi, un piano di pagamento parziale, mantenendo o liquidando l'attività. Richiede l'omologazione del Tribunale e il voto della maggioranza dei creditori." },

    { type: "h2", text: "L'impatto sulla continuità aziendale", id: "continuita" },
    { type: "p", text: "I debiti verso fornitori, se mal gestiti, possono compromettere rapidamente la continuità aziendale. Le ragioni sono concrete:" },
    { type: "ul", items: [
      "Blocco delle forniture in arrivo (il fornitore non spedisce più senza pagamento anticipato)",
      "Effetto domino: voci che corrono nella filiera, altri fornitori che chiedono garanzie",
      "Difficoltà a ottenere nuovi affidamenti bancari (i bilanci mostrano l'esposizione)",
      "Decreti ingiuntivi e pignoramenti del conto corrente che bloccano l'operatività quotidiana",
      "Tensioni con i dipendenti per stipendi in ritardo",
    ]},
    { type: "p", text: "Per questo la gestione del debito fornitori non è solo una questione legale o contabile: è una questione di strategia aziendale complessiva. Anche pochi giorni di immobilismo possono trasformare una difficoltà gestibile in una crisi conclamata." },

    { type: "h2", text: "Quando attivarsi: i segnali da non ignorare", id: "segnali" },
    { type: "p", text: "Ci sono segnali che indicano che la situazione richiede un intervento strutturato, non più semplici dilazioni:" },
    { type: "ul", items: [
      "Un numero crescente di solleciti contemporanei da più fornitori",
      "Più decreti ingiuntivi notificati in poche settimane",
      "Pignoramenti del conto corrente bancario",
      "Revoca o riduzione degli affidamenti bancari",
      "Difficoltà a pagare gli stipendi puntualmente",
      "Ritardi sui pagamenti tributari e contributivi che si accumulano",
    ]},
    { type: "p", text: "In presenza di questi segnali, l'opzione 'aspettare' è quasi sempre peggiorativa. Gli strumenti del CCII (composizione negoziata in primis) sono pensati proprio per intervenire in questa fase, prima che la situazione diventi irreversibile." },

    { type: "h2", text: "Tabella riassuntiva: situazione e strumento", id: "matrice" },
    { type: "table", headers: ["Situazione", "Strumento da valutare"], rows: [
      ["Singola fattura in ritardo, rapporto consolidato", "Dilazione informale"],
      ["Più fatture, capacità di pagamento ridotta", "Piano di rientro scritto"],
      ["Decreto ingiuntivo notificato, motivi di contestazione", "Opposizione (entro 40gg)"],
      ["Decreto ingiuntivo senza motivi di contestazione", "Trattativa per dilazione / saldo a stralcio"],
      ["Crisi che coinvolge più creditori (banche, fisco, fornitori)", "Composizione negoziata"],
      ["Crisi conclamata, valore aziendale residuo", "Concordato preventivo / accordi di ristrutturazione"],
      ["Crisi irreversibile, fine attività", "Liquidazione giudiziale (ove applicabile)"],
    ]},

    { type: "h2", text: "Domande frequenti sui debiti commerciali", id: "faq" },
    { type: "faq", items: [
      {
        q: "Il fornitore può bloccare le consegne se non pago?",
        a: "Sì, può sospendere le forniture (eccezione di inadempimento ex art. 1460 c.c.) se l'inadempimento è significativo. Per i contratti continuativi o di durata, gli effetti vanno valutati caso per caso. Una comunicazione tempestiva al fornitore prima del blocco può evitare interruzioni operative."
      },
      {
        q: "Quando si prescrivono i debiti commerciali?",
        a: "La prescrizione ordinaria è di 10 anni (art. 2946 c.c.). Per alcune categorie esistono prescrizioni più brevi: 5 anni per indennità di fine rapporto, prestazioni periodiche; alcune tipologie di forniture (es. vendita) restano a 10 anni. Gli atti interruttivi (diffide, decreti) azzerano il termine."
      },
      {
        q: "Posso compensare un mio credito verso il fornitore?",
        a: "Sì, se sussistono i presupposti della compensazione (art. 1241 c.c.): crediti omogenei (denaro vs denaro), liquidi (importo certo), esigibili (scaduti). La compensazione si oppone anche giudizialmente. È utile in caso di rapporti incrociati ricorrenti."
      },
      {
        q: "Se ricevo un decreto ingiuntivo, devo pagare subito?",
        a: "Se il decreto è provvisoriamente esecutivo, sì: l'esecuzione può partire dopo la notifica. Se non lo è, l'esecuzione decorre dopo i 40 giorni utili per opposizione. In ogni caso, l'opposizione (se ne sussistono i motivi) sospende l'efficacia esecutiva nei casi previsti dalla legge."
      },
      {
        q: "Posso includere i debiti verso fornitori in una composizione negoziata?",
        a: "Sì, e in molti casi sono parte centrale della trattativa. La composizione negoziata permette di negoziare con i fornitori sulla base di un piano industriale credibile, eventualmente con misure protettive che sospendono le azioni esecutive in corso."
      },
      {
        q: "Cosa rischio se ignoro un decreto ingiuntivo?",
        a: "Decorsi i 40 giorni senza opposizione, il decreto diventa definitivo e il fornitore può procedere all'esecuzione. Si trovano spesso, in pratica: pignoramento del conto corrente bancario aziendale, pignoramento dei crediti verso clienti, pignoramento di beni mobili in azienda. L'ignorare il decreto è la scelta peggiore."
      },
      {
        q: "Conviene cedere crediti per pagare un fornitore?",
        a: "Può convenire, soprattutto se ci sono crediti incagliati che il fornitore — magari più strutturato — può recuperare meglio. La cessione va formalizzata e notificata al debitore ceduto. Va valutata l'eventuale incidenza fiscale e contabile."
      },
    ]},

    { type: "h2", text: "Conclusione", id: "conclusione" },
    { type: "p", text: "I debiti verso fornitori sono spesso il termometro più sensibile di una difficoltà aziendale. Si manifestano prima dei debiti bancari, sono più 'visibili' nella vita operativa quotidiana, hanno effetti che si propagano rapidamente nella filiera. Affrontarli con metodo — distinguendo tra difficoltà temporanee e crisi più strutturali, scegliendo lo strumento giusto per ogni situazione, evitando l'inerzia — è uno dei compiti più importanti dell'imprenditore in fase di tensione finanziaria. Quando il quadro diventa complesso, gli strumenti del CCII (composizione negoziata in primis) offrono un percorso strutturato per gestire i debiti verso fornitori insieme a quelli verso banche e fisco, in un'unica trattativa coordinata." },
  ],
  }
