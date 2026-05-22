import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "fideiussione-come-liberarsi",
  title: "Fideiussione: come liberarsi dalla garanzia personale prestata a terzi",
  excerpt:
    "Fideiussione bancaria e omnibus: nullità delle clausole del modello ABI (Cass. SS.UU. 41994/2021), liberazione del fideiussore ex art. 1955 c.c., regresso, prescrizione e tutela del garante.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "18 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: heroLawyer,
  keywords: [
    "fideiussione",
    "garante",
    "fideiussione omnibus",
    "liberazione fideiussore",
    "art 1955 cc",
    "ABI fideiussione",
  ],
  intro:
    "La fideiussione è una delle forme più diffuse e insidiose di garanzia personale: chi la presta si obbliga, accanto al debitore principale, ad adempiere alle obbligazioni di quest'ultimo. In ambito bancario, la cosiddetta fideiussione omnibus ha generato un contenzioso enorme, culminato nella sentenza delle Sezioni Unite della Cassazione n. 41994 del 30 dicembre 2021 che ha riconosciuto la nullità parziale delle clausole anticoncorrenziali del modello ABI 2003. Conoscere i diritti del garante, i meccanismi di liberazione previsti dagli artt. 1936-1957 c.c. e le tecniche difensive consente di affrontare una posizione di garanzia con strumenti adeguati.",
  content: [
    {
      type: "h2",
      text: "Nozione di fideiussione",
      id: "nozione",
    },
    {
      type: "p",
      text: "La fideiussione è disciplinata dagli articoli 1936-1957 del codice civile. L'art. 1936, comma 1, c.c. definisce: 'È fideiussore colui che, obbligandosi personalmente verso il creditore, garantisce l'adempimento di un'obbligazione altrui'. La fideiussione presuppone quindi un rapporto principale tra un debitore e un creditore, e si aggiunge a questo come obbligazione accessoria e personale del garante.",
    },
    {
      type: "p",
      text: "Le caratteristiche essenziali della fideiussione sono tre: accessorietà (l'obbligazione del fideiussore segue le sorti dell'obbligazione principale: se questa è nulla, anche la fideiussione lo è, fatte salve le eccezioni di legge), personalità (il garante risponde con tutto il proprio patrimonio ai sensi dell'art. 2740 c.c., non solo con beni determinati), solidarietà (di norma il fideiussore è obbligato in solido col debitore principale ai sensi dell'art. 1944 c.c., salvo patto contrario).",
    },
    {
      type: "p",
      text: "La fideiussione deve essere espressa (art. 1937 c.c.): non si presume né può essere desunta da comportamenti concludenti. Deve risultare in modo univoco da un atto scritto o da una dichiarazione del garante. In ambito bancario, le fideiussioni sono pressoché sempre formalizzate in moduli prestampati predisposti dalla banca.",
    },
    {
      type: "image",
      src: heroLawyer,
      alt: "Avvocato esamina un contratto di fideiussione bancaria",
      caption:
        "La fideiussione è un'obbligazione personale: l'esame del contratto e delle vicende del rapporto principale è il primo passo per ogni strategia difensiva.",
    },
    {
      type: "h2",
      text: "La fideiussione omnibus",
      id: "fideiussione-omnibus",
    },
    {
      type: "p",
      text: "La fideiussione omnibus è una particolare forma di garanzia in cui il fideiussore si impegna a garantire non solo un'obbligazione specifica e determinata, ma tutte le obbligazioni, presenti e future, che il debitore principale potrà avere verso quella banca o intermediario. Il modulo tipo, predisposto dall'Associazione Bancaria Italiana (ABI) nel 2003, è stato per anni utilizzato pressoché in modo uniforme da tutte le banche italiane.",
    },
    {
      type: "p",
      text: "L'ampiezza della garanzia omnibus la rende particolarmente onerosa per il fideiussore: chi sottoscrive si trova garante non solo dei rapporti già in essere al momento della firma, ma anche di qualsiasi nuovo rapporto che la banca potrà successivamente intrattenere col debitore principale (nuovi mutui, scoperti di conto, anticipazioni, leasing, fideiussioni a propria volta rilasciate dalla banca). L'art. 1938 c.c., riformato dalla Legge 154/1992, impone come limite la previsione di un importo massimo garantito, ma all'interno di tale tetto la garanzia copre qualsiasi rapporto.",
    },
    {
      type: "h2",
      text: "La nullità delle clausole 2, 6, 8 del modello ABI",
      id: "nullita-clausole-abi",
    },
    {
      type: "p",
      text: "La vicenda della nullità del modello ABI 2003 di fideiussione omnibus rappresenta uno dei più importanti capitoli del diritto bancario italiano degli ultimi vent'anni. Tutto nasce da un provvedimento della Banca d'Italia, l'allora competente Autorità Garante della Concorrenza per il settore bancario, che con provvedimento n. 55 del 2 maggio 2005 accertò la natura anticoncorrenziale del modello uniforme di fideiussione predisposto dall'ABI, ai sensi dell'art. 2, comma 2, lettera a), della Legge 287/1990 (Legge antitrust).",
    },
    {
      type: "p",
      text: "Tre clausole in particolare furono ritenute lesive della concorrenza in quanto applicate uniformemente da tutte le banche, in violazione del divieto di intese restrittive: la clausola 2 (cosiddetta clausola di reviviscenza), la clausola 6 (clausola di rinuncia al termine ex art. 1957 c.c.) e la clausola 8 (clausola di sopravvivenza della garanzia in caso di invalidità del rapporto principale).",
    },
    {
      type: "h3",
      text: "Le clausole nulle nel dettaglio",
    },
    {
      type: "ul",
      items: [
        "Clausola 2 (clausola di reviviscenza): obbliga il fideiussore a rimborsare alla banca le somme che questa avesse incassato dal debitore e dovesse successivamente restituire (ad esempio per revocatoria fallimentare ex art. 67 L.F. o per declaratoria di nullità del titolo di pagamento)",
        "Clausola 6 (rinuncia al termine art. 1957 c.c.): elimina l'obbligo della banca di proporre le proprie istanze contro il debitore principale entro sei mesi dalla scadenza dell'obbligazione, mantenendo viva la fideiussione anche oltre tale termine",
        "Clausola 8 (sopravvivenza per invalidità): mantiene viva la garanzia anche in caso di nullità o annullamento del rapporto principale, in deroga al principio di accessorietà sancito dall'art. 1939 c.c.",
      ],
    },
    {
      type: "p",
      text: "Per anni i tribunali di merito hanno reso decisioni contrastanti sul tipo e sull'estensione della nullità. Alcuni propendevano per la nullità totale del contratto (con liberazione integrale del fideiussore), altri per la nullità solo parziale (con caducazione delle sole clausole anticoncorrenziali e conservazione della restante parte del contratto). La querelle è stata risolta dalle Sezioni Unite della Cassazione con la sentenza n. 41994 del 30 dicembre 2021.",
    },
    {
      type: "h2",
      text: "La sentenza Cass. SS.UU. n. 41994/2021",
      id: "cassazione-41994",
    },
    {
      type: "p",
      text: "Le Sezioni Unite della Corte di Cassazione, con la sentenza n. 41994 del 30 dicembre 2021, hanno enunciato il principio di diritto secondo cui i contratti di fideiussione che riproducono integralmente le clausole 2, 6 e 8 del modello ABI dichiarato anticoncorrenziale dalla Banca d'Italia con provvedimento n. 55/2005 sono affetti da nullità parziale, limitata alle sole clausole anticoncorrenziali, e non da nullità totale.",
    },
    {
      type: "p",
      text: "Le conseguenze pratiche del principio sono rilevanti. Il fideiussore non viene liberato integralmente, ma le clausole nulle vengono espunte dal contratto. Ne deriva che la banca non può più avvalersi della clausola di reviviscenza (in caso di restituzione di somme dovrà autonomamente recuperarle dal debitore), non può più ignorare il termine semestrale dell'art. 1957 c.c. (che riacquista pieno vigore con effetto liberatorio per il fideiussore), non può più mantenere viva la fideiussione in caso di nullità del rapporto principale.",
    },
    {
      type: "p",
      text: "L'art. 1957 c.c., così riacquistata efficacia piena, è la disposizione più rilevante. Stabilisce che 'il fideiussore rimane obbligato anche dopo la scadenza dell'obbligazione principale, purché il creditore entro sei mesi abbia proposto le sue istanze contro il debitore e le abbia con diligenza continuate'. Se la banca non agisce contro il debitore entro sei mesi dalla scadenza, il fideiussore è liberato. È una decadenza, non una prescrizione: opera in modo automatico e definitivo.",
    },
    {
      type: "note",
      text: "La verifica della riproduzione delle clausole ABI nel contratto sottoscritto è il primo passo di ogni difesa. Non basta che il modulo sia 'di banca': occorre comparare il testo del contratto con il modello ABI 2003 e accertare la sostanziale identità delle clausole 2, 6 e 8. La giurisprudenza richiede una corrispondenza sostanziale, non letterale, ma la mera somiglianza non basta: deve trattarsi di clausole che riproducono la disciplina anticoncorrenziale accertata dalla Banca d'Italia.",
    },
    {
      type: "h2",
      text: "Il beneficio di escussione (art. 1944 c.c.)",
      id: "beneficio-escussione",
    },
    {
      type: "p",
      text: "L'articolo 1944 del codice civile distingue due tipologie di fideiussione. Al primo comma stabilisce che 'il fideiussore è obbligato in solido col debitore principale al pagamento del debito'. Al secondo comma prevede che 'le parti possono tuttavia convenire che il fideiussore non sia tenuto a pagare prima dell'escussione del debitore principale'. Quando questo patto è stipulato, si parla di fideiussione con beneficio di escussione.",
    },
    {
      type: "p",
      text: "Nella prassi bancaria italiana, il beneficio di escussione è quasi sempre escluso: i moduli di fideiussione contengono clausole espresse di rinuncia. Il fideiussore si trova quindi obbligato in solido col debitore principale, il che significa che la banca può rivolgersi direttamente al garante per l'intero debito, senza dover prima escutere il patrimonio del debitore principale. È una condizione gravosa, che equipara di fatto il garante al debitore.",
    },
    {
      type: "p",
      text: "Quando il beneficio di escussione è invece operativo (ad esempio nelle fideiussioni 'tradizionali' tra privati o nelle garanzie pubbliche), il fideiussore convenuto in giudizio dal creditore può eccepire la propria liberazione finché il debitore principale non sia stato escusso. Deve a tal fine 'indicare i beni del debitore principale da sottoporre a esecuzione' ai sensi dell'art. 1944, comma 3, c.c., dimostrandone la concreta possibilità di soddisfacimento.",
    },
    {
      type: "h2",
      text: "Il regresso del fideiussore (art. 1950 c.c.)",
      id: "regresso",
    },
    {
      type: "p",
      text: "Quando il fideiussore paga il debito, sorge in suo favore il diritto di regresso verso il debitore principale, regolato dall'art. 1950 c.c. Il regresso ha ad oggetto: il capitale pagato, gli interessi maturati dal giorno del pagamento, le spese che il fideiussore ha sostenuto e i danni eventualmente subiti. Il diritto di regresso si prescrive nel termine ordinario di dieci anni dal pagamento (art. 2946 c.c.).",
    },
    {
      type: "p",
      text: "Accanto al regresso, il fideiussore che ha pagato ha diritto alla surrogazione legale nei diritti del creditore verso il debitore principale (art. 1949 c.c.). Ciò significa che subentra nelle garanzie reali (pegno, ipoteca) e nei privilegi che il creditore originario vantava sul patrimonio del debitore. È un meccanismo importante quando il debitore principale dispone di beni vincolati a favore del creditore originario.",
    },
    {
      type: "p",
      text: "Se ci sono più cofideiussori, il fideiussore che ha pagato l'intero debito ha diritto di regresso anche verso i cofideiussori, nei limiti della quota di ciascuno, ai sensi dell'art. 1954 c.c. La ripartizione si fa per quote uguali, salvo che dal titolo non risulti diversamente. La cofideiussione è frequente nelle garanzie prestate da soci o familiari per la stessa obbligazione.",
    },
    {
      type: "h2",
      text: "La liberazione del fideiussore per fatto del creditore (art. 1955 c.c.)",
      id: "liberazione-art-1955",
    },
    {
      type: "p",
      text: "L'articolo 1955 del codice civile è una delle disposizioni più importanti a tutela del fideiussore. Stabilisce che 'la fideiussione si estingue quando, per fatto del creditore, non può avere effetto la surrogazione del fideiussore nei diritti, nel pegno, nelle ipoteche e nei privilegi del creditore'. È il principio di diritto comunemente noto come 'liberazione per fatto del creditore'.",
    },
    {
      type: "p",
      text: "Il ratio della norma è la tutela dell'affidamento del fideiussore. Chi presta una garanzia personale conta, in caso di pagamento, di poter recuperare le somme attraverso le garanzie reali e i privilegi che il creditore vantava sul patrimonio del debitore. Se il creditore, per propria colpa o negligenza, fa perdere o riduce queste garanzie, il fideiussore subisce un pregiudizio che la legge sanziona con l'estinzione della fideiussione.",
    },
    {
      type: "h3",
      text: "Casi tipici di applicazione dell'art. 1955 c.c.",
    },
    {
      type: "ul",
      items: [
        "Mancata iscrizione tempestiva dell'ipoteca sui beni immobili del debitore principale, con conseguente perdita della priorità del privilegio",
        "Rinuncia espressa o tacita alla garanzia reale (ad esempio, cancellazione dell'ipoteca senza che il debito sia integralmente estinto)",
        "Mancato rinnovo dell'iscrizione ipotecaria prima della scadenza ventennale (art. 2847 c.c.), con perdita del privilegio",
        "Concessione al debitore principale di nuove dilazioni o ristrutturazioni del debito che pregiudicano la posizione del fideiussore senza il suo consenso",
        "Liberazione di garanzie reali concesse da terzi (svincolo di pegni, restituzione di titoli) senza giustificato motivo",
        "Inerzia del creditore nelle procedure esecutive contro il debitore principale, con perdita di occasioni di soddisfacimento",
      ],
    },
    {
      type: "p",
      text: "La giurisprudenza, anche recente, ha applicato l'art. 1955 c.c. in modo rigoroso: il fatto del creditore deve essere imputabile, deve aver causato un pregiudizio concreto alla possibilità di surrogazione, e l'effetto liberatorio opera anche se la garanzia perduta non avrebbe coperto l'intero debito. La Cassazione (sez. III, sent. n. 16827/2019 e successive) ha precisato che non è necessario provare il nesso causale tra colpa del creditore e perdita totale della garanzia: basta dimostrare che la condotta abbia ridotto le chance di recupero del fideiussore.",
    },
    {
      type: "h2",
      text: "Il termine semestrale ex art. 1957 c.c.",
      id: "art-1957",
    },
    {
      type: "p",
      text: "L'art. 1957 c.c. è l'altra norma cardine a tutela del garante. Stabilisce che 'il fideiussore rimane obbligato anche dopo la scadenza dell'obbligazione principale, purché il creditore entro sei mesi abbia proposto le sue istanze contro il debitore e le abbia con diligenza continuate. La disposizione si applica anche al caso in cui il fideiussore ha espressamente limitato la sua fideiussione allo stesso termine dell'obbligazione principale. In questo caso però l'istanza contro il debitore deve essere proposta entro due mesi'.",
    },
    {
      type: "p",
      text: "Il meccanismo è chiaro: il creditore deve attivarsi giudizialmente o stragiudizialmente (con atti idonei a interrompere la prescrizione e a manifestare la volontà di esigere il credito) entro sei mesi dalla scadenza dell'obbligazione principale, e deve continuare con diligenza le iniziative intraprese. Se non lo fa, il fideiussore è liberato per decadenza.",
    },
    {
      type: "p",
      text: "La nozione di 'istanze' ai sensi dell'art. 1957 c.c. è stata interpretata estensivamente dalla giurisprudenza: comprende qualsiasi atto giudiziale (ricorso per decreto ingiuntivo, citazione, esecuzione forzata, intervento in procedure concorsuali, insinuazione al passivo) e, secondo alcuni orientamenti, anche atti stragiudiziali idonei. Il requisito della 'diligenza' richiede che il creditore prosegua le iniziative senza inerzia prolungata.",
    },
    {
      type: "note",
      text: "La clausola 6 del modello ABI escludeva l'applicazione dell'art. 1957 c.c., trasformando la fideiussione in una garanzia 'a prima richiesta' senza termini decadenziali. La nullità di tale clausola, sancita da Cass. SS.UU. 41994/2021, restituisce piena efficacia al termine semestrale. Per i fideiussori bancari ne deriva un'opportunità difensiva di grande rilievo: la banca deve aver agito tempestivamente contro il debitore principale, altrimenti la fideiussione è estinta. La verifica della tempestività delle iniziative della banca è uno dei primi controlli da effettuare in sede di analisi del caso.",
    },
    {
      type: "h2",
      text: "Prescrizione e decadenza",
      id: "prescrizione",
    },
    {
      type: "p",
      text: "Accanto al termine semestrale dell'art. 1957 c.c., il diritto del creditore verso il fideiussore è soggetto ai termini ordinari di prescrizione. Si applica il termine decennale di cui all'art. 2946 c.c. per i diritti contrattuali, ridotto a cinque anni per gli interessi e le prestazioni periodiche (art. 2948, n. 4, c.c.). La prescrizione decorre dal momento in cui il credito è divenuto esigibile, cioè dalla scadenza dell'obbligazione garantita.",
    },
    {
      type: "table",
      headers: ["Termine", "Norma", "Effetto", "Decorrenza"],
      rows: [
        [
          "6 mesi",
          "Art. 1957, comma 1, c.c.",
          "Decadenza: estinzione della fideiussione se la banca non agisce contro il debitore",
          "Scadenza dell'obbligazione principale",
        ],
        [
          "2 mesi",
          "Art. 1957, comma 2, c.c.",
          "Decadenza se fideiussione limitata al termine dell'obbligazione",
          "Scadenza dell'obbligazione principale",
        ],
        [
          "10 anni",
          "Art. 2946 c.c.",
          "Prescrizione ordinaria del credito verso fideiussore",
          "Esigibilità del credito",
        ],
        [
          "5 anni",
          "Art. 2948 c.c.",
          "Prescrizione interessi e prestazioni periodiche",
          "Singole scadenze",
        ],
        [
          "20 anni",
          "Art. 2847 c.c.",
          "Validità iscrizione ipotecaria; mancato rinnovo libera fideiussore",
          "Iscrizione",
        ],
        [
          "1 anno",
          "Art. 1955 c.c. (interpretazione)",
          "Liberazione se il creditore lascia decadere la garanzia",
          "Atto di decadenza",
        ],
      ],
    },
    {
      type: "h2",
      text: "La modulistica antimafia e i controlli formali",
      id: "modulistica",
    },
    {
      type: "p",
      text: "Le banche, nell'erogazione di finanziamenti garantiti da fideiussione, sono tenute a rispettare la normativa antimafia (D.lgs. 6 settembre 2011, n. 159, Codice antimafia) e quella antiriciclaggio (D.lgs. 21 novembre 2007, n. 231 come modificato dal D.lgs. 90/2017). Devono identificare il fideiussore (adeguata verifica della clientela), acquisire dichiarazioni sulla provenienza dei fondi e sui rapporti familiari/economici col debitore principale, valutare il merito creditizio.",
    },
    {
      type: "p",
      text: "Il fideiussore ha il diritto di ricevere, prima della firma, il documento di sintesi e le condizioni contrattuali in forma cartacea o su supporto durevole, ai sensi dell'art. 117 T.U.B. e delle Disposizioni di trasparenza della Banca d'Italia. La sottoscrizione 'in bianco' di un modulo di fideiussione, senza compilazione delle condizioni essenziali (importo massimo, beneficiario, debitore principale), può determinare la nullità della garanzia per indeterminatezza dell'oggetto (art. 1346 c.c.).",
    },
    {
      type: "h2",
      text: "Le strategie operative per uscire da una fideiussione",
      id: "strategie-uscita",
    },
    {
      type: "p",
      text: "Liberarsi da una fideiussione è tecnicamente complesso e richiede l'analisi caso per caso. Esistono però strategie consolidate che, in funzione delle circostanze, possono portare alla liberazione totale, parziale o alla riduzione dell'esposizione. Di seguito le opzioni tipiche.",
    },
    {
      type: "ol",
      items: [
        "Verificare se il contratto di fideiussione riproduce le clausole 2, 6, 8 del modello ABI 2003: in caso affermativo, le clausole sono nulle ai sensi di Cass. SS.UU. 41994/2021 e l'art. 1957 c.c. riacquista piena efficacia",
        "Ricostruire la cronologia: data di scadenza dell'obbligazione principale, atti compiuti dalla banca contro il debitore principale, verifica se le 'istanze' sono state tempestive (entro sei mesi)",
        "Verificare la conservazione delle garanzie reali da parte della banca: ipoteche tempestivamente iscritte e rinnovate, pegni custoditi, privilegi azionati. Eventuali negligenze fondano la liberazione ex art. 1955 c.c.",
        "Esaminare la documentazione precontrattuale: documento di sintesi, condizioni generali, informativa sui rischi. Difetti possono determinare nullità ex art. 117 T.U.B. o annullabilità per vizi del consenso",
        "Valutare la presenza di nullità delle clausole vessatorie (artt. 1341-1342 c.c. e Codice del Consumo per fideiussore consumatore) non specificamente approvate per iscritto",
        "Proporre alla banca una transazione liberatoria: pagamento di una somma forfettaria a fronte della liberazione integrale (analoga al saldo e stralcio, ma sull'obbligazione fideiussoria)",
        "Per il fideiussore consumatore, valutare il ricorso all'Arbitro Bancario Finanziario (ABF) per controversie su trasparenza, costi, applicazione corretta della normativa",
        "In presenza di sovraindebitamento, accedere alle procedure del Codice della Crisi (D.lgs. 14/2019), in particolare al piano del consumatore (art. 67 e ss. CCII) che può trattare anche la posizione debitoria da fideiussione",
      ],
    },
    {
      type: "h2",
      text: "La fideiussione del consumatore e la tutela europea",
      id: "fideiussione-consumatore",
    },
    {
      type: "p",
      text: "Quando il fideiussore è una persona fisica che agisce per scopi estranei all'attività imprenditoriale o professionale del debitore principale, può qualificarsi come consumatore ai sensi del Codice del Consumo (D.lgs. 6 settembre 2005, n. 206). La Corte di Giustizia dell'Unione Europea, con la sentenza Tarcău (causa C-74/15) e successive pronunce, ha precisato che la qualifica di consumatore va valutata in relazione al fideiussore stesso, non al debitore principale: anche chi garantisce un imprenditore può essere consumatore, purché non sia legato funzionalmente all'attività garantita.",
    },
    {
      type: "p",
      text: "Il fideiussore consumatore gode delle tutele del Codice del Consumo: nullità delle clausole vessatorie (art. 33 e ss.), informativa precontrattuale rafforzata, divieto di pratiche commerciali scorrette (artt. 18 e ss. C. Cons.). La sentenza CGUE C-243/20 (Trapeza Peiraios) ha riconosciuto il diritto del giudice nazionale di rilevare d'ufficio la natura vessatoria delle clausole nei contratti con il consumatore-fideiussore.",
    },
    {
      type: "h2",
      text: "Cosa rischia concretamente il fideiussore",
      id: "rischi",
    },
    {
      type: "p",
      text: "Quando l'obbligazione principale è inadempiuta, il fideiussore si trova esposto a una serie di rischi patrimoniali e personali che è bene conoscere. La banca, una volta dichiarata la decadenza dal beneficio del termine verso il debitore principale o intervenuta la scadenza dell'obbligazione, può rivolgersi direttamente al garante con richiesta di pagamento dell'intero debito residuo (capitale, interessi corrispettivi, interessi di mora, spese).",
    },
    {
      type: "h3",
      text: "Conseguenze tipiche",
    },
    {
      type: "ul",
      items: [
        "Richiesta formale di pagamento (lettera, PEC, raccomandata) con quantificazione del debito",
        "Notifica di decreto ingiuntivo immediatamente esecutivo ex art. 642 c.p.c., se il debito risulta da prove scritte qualificate",
        "Atto di precetto seguito da pignoramento mobiliare, immobiliare o presso terzi",
        "Segnalazione in Centrale dei Rischi della Banca d'Italia e nei SIC privati (CRIF, Experian, CTC) come 'sofferenza' o 'inadempimento'",
        "Aggressione del patrimonio personale del fideiussore: stipendi (pignoramento del quinto), conti correnti, immobili (anche prima casa, se la banca è creditore privato), partecipazioni societarie, crediti verso terzi",
        "Possibili effetti reputazionali e impatto sulla capacità di accedere a nuovi finanziamenti",
      ],
    },
    {
      type: "h2",
      text: "La fideiussione e le procedure concorsuali",
      id: "procedure-concorsuali",
    },
    {
      type: "p",
      text: "Se il debitore principale è un'impresa che viene assoggettata a una procedura di liquidazione giudiziale (ex fallimento) o a una procedura di composizione della crisi, la posizione del fideiussore presenta caratteri peculiari. L'art. 184 della vecchia Legge Fallimentare (R.D. 267/1942) e oggi l'art. 117 del Codice della Crisi (D.lgs. 14/2019) prevedono che gli effetti esdebitativi della procedura concorsuale verso il debitore principale non si estendono ai coobbligati e ai fideiussori, salvo diversa disposizione.",
    },
    {
      type: "p",
      text: "In termini pratici, anche dopo l'omologa di un concordato preventivo o di un piano di ristrutturazione del debitore principale (con falcidia dei crediti), il fideiussore resta obbligato per l'intero importo del debito originario. È una circostanza spesso non compresa al momento della firma e che rende la fideiussione particolarmente onerosa: il garante può essere chiamato a pagare il 100% del debito anche quando il debitore principale ne paga solo il 30% in concordato.",
    },
    {
      type: "p",
      text: "Da questo principio derivano due corollari. Primo: il fideiussore che ha pagato la banca, dopo l'omologa del concordato del debitore principale, può insinuare il proprio credito di regresso al passivo del concordato per la parte ammessa (di norma, in chirografo con le percentuali concordatarie). Secondo: il fideiussore ha interesse a partecipare attivamente alle votazioni concordatarie, perché l'esito incide direttamente sulla sua esposizione e sulle proprie possibilità di recupero post-pagamento.",
    },
    {
      type: "h2",
      text: "Domande frequenti",
      id: "faq",
    },
    {
      type: "faq",
      items: [
        {
          q: "Ho firmato una fideiussione bancaria nel 2010: posso ancora contestare le clausole ABI?",
          a: "Sì. La nullità delle clausole 2, 6, 8 del modello ABI 2003, sancita da Cass. SS.UU. 41994/2021, è una nullità parziale rilevabile in qualunque momento, sia in sede di opposizione a decreto ingiuntivo, sia in sede di opposizione all'esecuzione, sia in sede di azione autonoma di accertamento. La giurisprudenza è consolidata: il giudice deve rilevare d'ufficio la nullità delle clausole anticoncorrenziali. Il primo passo è confrontare il testo del contratto con il modello ABI 2003 e verificare la riproduzione delle clausole nulle. È un'analisi tecnica che richiede l'intervento di un legale specializzato.",
        },
        {
          q: "La banca non ha mai agito contro il debitore principale: sono liberato?",
          a: "Probabilmente sì, ai sensi dell'art. 1957 c.c. La banca deve aver proposto 'istanze' contro il debitore principale entro sei mesi dalla scadenza dell'obbligazione (o due mesi se la fideiussione era limitata al termine dell'obbligazione) e averle continuate con diligenza. Per 'istanze' si intendono atti giudiziali (ricorso per ingiunzione, citazione, esecuzione) o, secondo alcuni orientamenti, anche atti stragiudiziali idonei. Se la banca è rimasta inerte, è intervenuta la decadenza e il fideiussore è liberato. Va verificata la cronologia degli atti con la documentazione bancaria e processuale.",
        },
        {
          q: "Cosa significa fideiussione 'omnibus' e perché è particolarmente rischiosa?",
          a: "La fideiussione omnibus garantisce non solo un'obbligazione specifica, ma tutte le obbligazioni, presenti e future, del debitore verso la banca, entro un tetto massimo. È rischiosa perché il fideiussore si trova obbligato anche per rapporti che la banca attiverà successivamente alla firma (nuovi prestiti, scoperti, fideiussioni rilasciate dalla banca per il debitore). L'art. 1938 c.c. impone la previsione di un importo massimo, ma il rischio resta elevato. La fideiussione omnibus è oggi al centro del contenzioso bancario per la nullità delle clausole anticoncorrenziali del modello ABI 2003.",
        },
        {
          q: "Sono cofideiussore insieme ad altre persone: la banca può chiedere tutto a me?",
          a: "Sì, salvo patto contrario. Nella fideiussione solidale, ciascun cofideiussore è obbligato per l'intero verso il creditore (art. 1946 c.c.). La banca può quindi rivolgersi a uno solo dei garanti per l'intero debito. Il cofideiussore che ha pagato l'intero ha però diritto di regresso verso gli altri cofideiussori, in proporzione alla quota di ciascuno (art. 1954 c.c.), salvo che dal titolo non risulti diversa ripartizione. Il regresso si esercita con apposita azione giudiziale, e la prescrizione è decennale dal pagamento.",
        },
        {
          q: "Posso revocare unilateralmente una fideiussione che ho già firmato?",
          a: "Per le fideiussioni a tempo determinato, di regola no: il vincolo opera fino alla scadenza pattuita. Per le fideiussioni a tempo indeterminato (come molte fideiussioni omnibus), il garante può revocare la garanzia per le obbligazioni future, dandone comunicazione formale alla banca. La revoca non ha effetto retroattivo: il fideiussore resta obbligato per le obbligazioni già sorte al momento della revoca. La banca, di fronte alla revoca, di norma chiede al debitore principale di estinguere o ridurre l'esposizione, o di sostituire la garanzia. La forma scritta è essenziale.",
        },
        {
          q: "Il fideiussore può accedere al sovraindebitamento per estinguere la propria posizione?",
          a: "Sì. Le procedure di composizione delle crisi da sovraindebitamento previste dal Codice della Crisi (D.lgs. 14/2019) sono accessibili anche al fideiussore persona fisica. Il debito da fideiussione viene trattato nel piano del consumatore (art. 67 e ss. CCII) o nel concordato minore (art. 74 e ss. CCII) come qualsiasi altro debito chirografario, e può essere falcidiato o dilazionato. Con l'omologa del piano e l'esecuzione, il fideiussore ottiene l'esdebitazione anche per la parte di debito da fideiussione non soddisfatta. L'accesso passa tramite un Organismo di Composizione della Crisi (OCC).",
        },
        {
          q: "Il fallimento del debitore principale mi libera dalla fideiussione?",
          a: "No. L'art. 117 del Codice della Crisi (D.lgs. 14/2019), che riproduce sostanzialmente il vecchio art. 184 L.F., stabilisce che gli effetti esdebitativi della procedura concorsuale verso il debitore principale non si estendono ai coobbligati e ai fideiussori. Anche se la procedura concorsuale riconosce ai creditori solo una parte del credito (ad esempio il 30% in concordato), il fideiussore resta obbligato per l'intero importo del debito originario, salvo poi insinuare il proprio credito di regresso al passivo per quanto pagato in eccesso rispetto alla percentuale concordataria.",
        },
        {
          q: "La banca ha cancellato l'ipoteca sul bene del debitore principale: sono liberato?",
          a: "Probabilmente sì, ai sensi dell'art. 1955 c.c. La liberazione per fatto del creditore opera quando, per condotta imputabile al creditore, viene compromessa o ridotta la possibilità di surrogazione del fideiussore nelle garanzie reali. La cancellazione di un'ipoteca senza che il debito sia integralmente estinto rientra tipicamente in questa ipotesi, perché priva il fideiussore della facoltà di subentrare nella garanzia reale al momento del pagamento. La giurisprudenza richiede l'imputabilità del fatto al creditore e il pregiudizio concreto al fideiussore: nella maggior parte dei casi, entrambi i presupposti sono integrati.",
        },
        {
          q: "Mio padre/mia madre ha firmato una fideiussione e ora è deceduto: io sono obbligato?",
          a: "Il debito da fideiussione, come ogni altro debito ereditario, si trasmette agli eredi che abbiano accettato l'eredità (art. 752 c.c.). L'erede risponde dei debiti del defunto in proporzione alla propria quota ereditaria, salvo che abbia rinunciato all'eredità (art. 519 c.c.) o accettato con beneficio d'inventario (artt. 484 e ss. c.c.). L'accettazione con beneficio d'inventario è lo strumento più tutelante: l'erede risponde solo entro i limiti del valore dei beni ereditari. La rinuncia all'eredità o l'accettazione con beneficio devono essere formalizzate con atto pubblico nei termini di legge (di norma, dieci anni dall'apertura della successione).",
        },
        {
          q: "Quanto può durare una controversia per liberazione dalla fideiussione?",
          a: "I tempi variano notevolmente in funzione della sede (tribunale ordinario o Arbitro Bancario Finanziario) e della complessità del caso. Davanti al Tribunale ordinario, una causa di opposizione a decreto ingiuntivo con eccezioni di nullità delle clausole ABI può durare dai 18 ai 36 mesi in primo grado, con possibili gradi successivi (appello, Cassazione). Davanti all'Arbitro Bancario Finanziario, le decisioni sono di norma rese entro 6-9 mesi dal deposito del ricorso. La scelta dello strumento dipende dal valore della controversia, dalla complessità delle eccezioni e dall'effetto vincolante desiderato.",
        },
      ],
    },
  ],
};
