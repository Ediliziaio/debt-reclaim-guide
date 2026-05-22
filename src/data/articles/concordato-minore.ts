import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "concordato-minore",
  title: "Concordato minore: la procedura di sovraindebitamento per piccoli imprenditori e professionisti",
  excerpt: "Il concordato minore (artt. 74-83 CCII) è la procedura ristrutturativa dedicata a imprenditori minori, professionisti e agricoltori sovraindebitati. Guida completa a presupposti, piano, voto dei creditori e omologazione.",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: handshakeTrust,
  keywords: ["concordato minore", "piccolo imprenditore", "professionista sovraindebitato", "artt 74-83 CCII", "ristrutturazione debiti"],
  intro: "Il concordato minore, disciplinato dagli artt. 74-83 del Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019), è la principale procedura ristrutturativa concorsuale a disposizione dei debitori non consumatori che non possano accedere alla liquidazione giudiziale né al concordato preventivo. Si rivolge a imprenditori minori, professionisti, agricoltori e — in determinati casi — al consumatore con attività cessata, consentendo loro di proporre ai creditori un piano di ristrutturazione, anche solo parzialmente satisfattivo, alternativo alla liquidazione del patrimonio.",
  content: [
    { type: "h2", text: "Cos'è il concordato minore", id: "cos-e-concordato-minore" },
    { type: "p", text: "Il concordato minore è una procedura concorsuale ristrutturativa che consente al debitore sovraindebitato non assoggettabile alle procedure maggiori di proporre ai creditori un accordo finalizzato a regolare in modo organico la propria esposizione debitoria. È stato introdotto nell'ordinamento dal Codice della Crisi d'Impresa e dell'Insolvenza con l'obiettivo di razionalizzare e rinnovare gli strumenti già previsti dalla L. n. 3/2012 (in particolare l'accordo di composizione della crisi), offrendo al piccolo imprenditore e al professionista uno strumento moderno e più snello." },
    { type: "p", text: "A differenza della liquidazione controllata (artt. 268-277 CCII), che ha natura essenzialmente liquidatoria, il concordato minore è una procedura ristrutturativa: si fonda su una proposta del debitore, sottoposta al voto dei creditori, che mira a conservare l'attività economica laddove possibile e a garantire ai creditori una soddisfazione, anche parziale, secondo un piano coerente con la sostenibilità prospettica del debitore. La differenza è strutturale e impatta in modo significativo sulla scelta dello strumento più adatto." },
    { type: "p", text: "Il concordato minore può assumere contenuto liquidatorio, continuativo o misto. Può prevedere il pagamento dei creditori con risorse interne (redditi futuri, realizzo di beni), con finanza esterna (apporti di terzi, garanti, soci) o con una combinazione di entrambe. La duttilità del contenuto è uno dei principali punti di forza della procedura: il piano può essere modellato sulle specifiche esigenze del debitore e sulle caratteristiche del suo indebitamento." },

    { type: "image", src: handshakeTrust, alt: "Accordo tra debitore e creditori nel concordato minore", caption: "Il concordato minore consente di proporre ai creditori un piano di ristrutturazione, evitando la liquidazione integrale del patrimonio." },

    { type: "h2", text: "Soggetti ammessi al concordato minore", id: "soggetti-ammessi" },
    { type: "p", text: "L'art. 74 CCII individua con precisione la platea dei soggetti legittimati ad accedere al concordato minore. La norma riserva la procedura ai 'debitori di cui all'articolo 2, comma 1, lettera c)', ossia ai soggetti in stato di sovraindebitamento diversi dal consumatore, con specifiche eccezioni e precisazioni." },

    { type: "h3", text: "Le categorie ammesse" },
    { type: "ul", items: [
      "Imprenditore minore (sotto le soglie dimensionali dell'art. 2, comma 1, lett. d) CCII)",
      "Imprenditore commerciale che ha cessato l'attività da non oltre un anno",
      "Imprenditore agricolo, indipendentemente dalle dimensioni",
      "Professionisti iscritti ad albi (avvocati, commercialisti, ingegneri, architetti, medici, ecc.)",
      "Lavoratori autonomi e prestatori di servizi non iscritti ad albi",
      "Start-up innovative iscritte nella sezione speciale del registro delle imprese",
      "Consumatore con attività cessata che intende ricomprendere debiti misti (consumeristici e d'impresa)",
      "Società di persone e società minori in stato di sovraindebitamento",
    ]},

    { type: "h3", text: "Esclusione del consumatore puro" },
    { type: "p", text: "Il consumatore in senso proprio — definito dall'art. 2, comma 1, lett. e) CCII come la persona fisica che agisce per scopi estranei all'attività imprenditoriale, commerciale, artigianale o professionale eventualmente svolta — non può accedere al concordato minore. Per il consumatore è infatti prevista una procedura ristrutturativa autonoma e specifica, ovvero la ristrutturazione dei debiti del consumatore di cui agli artt. 67-73 CCII, caratterizzata dall'assenza del voto dei creditori. Tuttavia, il consumatore che abbia anche debiti d'impresa (ad esempio quale ex piccolo imprenditore o ex professionista) può ricorrere al concordato minore per ricomprendere unitariamente la propria esposizione." },

    { type: "h2", text: "Presupposti oggettivi: lo stato di sovraindebitamento", id: "stato-sovraindebitamento" },
    { type: "p", text: "Sotto il profilo oggettivo, presupposto del concordato minore è lo stato di sovraindebitamento, definito dall'art. 2, comma 1, lett. c) CCII come lo stato di crisi o di insolvenza del debitore non assoggettabile alla liquidazione giudiziale. Lo stato di crisi è la probabilità di futura insolvenza, mentre l'insolvenza è la conclamata incapacità di adempiere regolarmente alle proprie obbligazioni." },
    { type: "p", text: "La presenza dello stato di sovraindebitamento deve essere documentata in modo rigoroso. L'OCC, nella relazione particolareggiata che accompagna la domanda, attesta la sussistenza del presupposto, ricostruendo l'andamento dell'indebitamento, l'evoluzione del patrimonio e dei flussi reddituali, le cause della crisi e le prospettive di superamento. La completezza e la veridicità della documentazione sono essenziali per l'ammissibilità della procedura." },

    { type: "note", text: "Il concordato minore non è uno strumento per situazioni di mera difficoltà transitoria. Va attivato quando si è già verificata una crisi conclamata o quando l'insolvenza è imminente. Attivarlo troppo presto può comportare il rigetto per assenza dei presupposti; attivarlo troppo tardi rischia di compromettere la sostenibilità del piano e di precludere l'accesso a soluzioni ristrutturative, costringendo a ripiegare sulla liquidazione controllata." },

    { type: "h2", text: "Contenuto del piano: ristrutturativo, liquidatorio o misto", id: "contenuto-piano" },
    { type: "p", text: "Il piano sottoposto ai creditori nel concordato minore può assumere contenuti diversificati. L'art. 74 CCII non impone uno schema rigido, ma richiede che il piano garantisca un trattamento coerente e proporzionato dei crediti, nel rispetto delle cause di prelazione e dell'eventuale necessità di un apporto esterno." },

    { type: "h3", text: "Concordato in continuità" },
    { type: "p", text: "Quando il debitore esercita ancora un'attività professionale o imprenditoriale, il piano può prevedere la prosecuzione dell'attività medesima, destinando una quota dei flussi reddituali futuri al pagamento dei creditori. È la soluzione preferibile quando l'attività è ancora vitale e capace di generare cassa: consente di conservare il valore di avviamento, di mantenere l'occupazione e di garantire ai creditori una soddisfazione tendenzialmente superiore a quella ottenibile da una liquidazione." },

    { type: "h3", text: "Concordato liquidatorio" },
    { type: "p", text: "Quando l'attività non è più sostenibile o quando il debitore ha cessato di esercitarla, il piano può limitarsi a prevedere la liquidazione del patrimonio esistente e la distribuzione del ricavato ai creditori. In tal caso il concordato minore liquidatorio si avvicina, sul piano funzionale, alla liquidazione controllata, ma se ne differenzia per la previa approvazione dei creditori e per i contenuti specifici che il debitore può inserire (ad esempio prevedere il mantenimento di alcuni beni in cambio di un apporto esterno)." },

    { type: "h3", text: "Concordato misto" },
    { type: "p", text: "Nella prassi prevalgono frequentemente le soluzioni miste, in cui il piano combina la liquidazione di parte del patrimonio (tipicamente i beni non strumentali) con la prosecuzione dell'attività e la destinazione di una quota dei flussi futuri. Questa flessibilità consente di adattare la soluzione alle specifiche caratteristiche del caso." },

    { type: "h2", text: "La finanza esterna e l'apporto di terzi", id: "finanza-esterna" },
    { type: "p", text: "Una delle peculiarità del concordato minore — soprattutto in chiave liquidatoria — è la possibilità di prevedere un apporto di finanza esterna. L'art. 74, comma 2, CCII consente al debitore di proporre il pagamento dei crediti con risorse non provenienti dal proprio patrimonio, ad esempio attraverso il contributo di un familiare, di un garante o di un investitore terzo." },
    { type: "p", text: "L'apporto esterno è particolarmente utile in due situazioni: quando il patrimonio del debitore è insufficiente a garantire ai creditori una soddisfazione apprezzabile, e quando si desidera conservare un cespite specifico (ad esempio l'abitazione principale o un'azienda) offrendo ai creditori un controvalore proveniente da terzi. La presenza di finanza esterna rafforza significativamente le prospettive di approvazione del piano da parte dei creditori." },

    { type: "h2", text: "Trattamento dei crediti privilegiati e cause di prelazione", id: "crediti-privilegiati" },
    { type: "p", text: "Il piano deve rispettare l'ordine delle cause di prelazione, salvo che i creditori titolari di privilegio, pegno o ipoteca rinuncino espressamente al rispetto della loro posizione. La regola generale è che i crediti privilegiati vanno soddisfatti integralmente, ovvero — quando il piano prevede una soddisfazione parziale — nella misura in cui il bene oggetto della garanzia sarebbe in grado di soddisfare il credito in caso di liquidazione (cosiddetta regola della 'no creditor worse off')." },
    { type: "p", text: "Per i crediti tributari e contributivi privilegiati il CCII consente, alle condizioni di legge, soluzioni di transazione fiscale e contributiva, secondo i meccanismi previsti dagli artt. 63 e 88 CCII (nei limiti applicabili alla procedura). La trattazione di tali crediti richiede particolare attenzione tecnica, posta l'esistenza di vincoli normativi specifici a tutela dell'erario e degli enti previdenziali." },

    { type: "table", headers: ["Categoria di credito", "Trattamento nel piano", "Limiti normativi"], rows: [
      ["Crediti prededucibili", "Integrale soddisfazione", "Spese di procedura, compenso OCC e gestore"],
      ["Crediti ipotecari e pignoratizi", "Integrale o nei limiti del valore del bene", "Art. 84 CCII e norme di rinvio"],
      ["Crediti privilegiati", "Integrale o secondo l'ordine delle cause di prelazione", "Artt. 2745 ss. c.c."],
      ["Crediti tributari", "Anche con falcidia secondo i meccanismi di transazione", "Artt. 63 e 88 CCII"],
      ["Crediti contributivi", "Anche con falcidia secondo i meccanismi di transazione", "Artt. 63 e 88 CCII"],
      ["Crediti chirografari", "Soddisfazione parziale secondo il piano", "Trattamento omogeneo per classe"],
      ["Crediti postergati", "Soddisfazione residuale", "Solo se i creditori superiori sono soddisfatti"],
    ]},

    { type: "h2", text: "Il ruolo dell'OCC nel concordato minore", id: "ruolo-occ" },
    { type: "p", text: "L'Organismo di Composizione della Crisi è una figura tecnica essenziale anche nel concordato minore. Ai sensi dell'art. 75 CCII e delle norme di rinvio, l'OCC assiste il debitore nella predisposizione della proposta e del piano, ne attesta la fattibilità, redige la relazione particolareggiata e svolge un ruolo di controllo e di facilitazione lungo tutto l'arco della procedura." },

    { type: "h3", text: "Compiti dell'OCC" },
    { type: "ol", items: [
      "Verifica della sussistenza dei presupposti soggettivi e oggettivi per l'accesso alla procedura",
      "Assistenza nella raccolta e nell'organizzazione della documentazione",
      "Ricostruzione analitica della situazione patrimoniale, reddituale e debitoria",
      "Stesura della relazione particolareggiata, con attestazione della veridicità dei dati",
      "Valutazione di fattibilità del piano proposto dal debitore",
      "Stima della convenienza del piano rispetto all'alternativa liquidatoria",
      "Comunicazioni ai creditori, raccolta dei consensi e gestione del voto",
      "Vigilanza sull'esecuzione del piano dopo l'omologazione",
    ]},

    { type: "h3", text: "L'attestazione di fattibilità" },
    { type: "p", text: "L'attestazione di fattibilità è uno snodo cruciale. L'OCC deve verificare e attestare che il piano è realisticamente eseguibile, che le risorse messe a disposizione sono sufficienti a garantire ai creditori il trattamento promesso, che le stime sono prudenti e coerenti. L'attestazione non è una mera formalità: è il riferimento tecnico in base al quale il tribunale, in sede di omologazione, valuta la sostenibilità del piano e la sua tenuta nel tempo." },

    { type: "h2", text: "La domanda di concordato minore e il deposito", id: "domanda-deposito" },
    { type: "p", text: "La domanda di concordato minore è depositata dal debitore, assistito da un difensore, presso il tribunale competente. La competenza è del tribunale del luogo in cui il debitore ha la residenza, il domicilio o la sede principale. La domanda deve essere accompagnata dalla relazione particolareggiata dell'OCC, dal piano e dalla proposta ai creditori, oltre che da tutta la documentazione di corredo." },

    { type: "h3", text: "Documentazione da allegare" },
    { type: "ul", items: [
      "Elenco dei creditori con indicazione di importo, titolo e privilegio",
      "Elenco dei beni del debitore con relativa stima",
      "Bilanci e dichiarazioni dei redditi degli ultimi cinque anni",
      "Estratti AdER aggiornati e situazione tributaria",
      "Documentazione bancaria: estratti conto, mutui, contratti di finanziamento",
      "Atti di disposizione del patrimonio compiuti nei cinque anni precedenti",
      "Eventuale documentazione relativa alla finanza esterna (impegni di terzi, garanzie)",
      "Relazione particolareggiata dell'OCC con attestazione di fattibilità",
    ]},

    { type: "h2", text: "L'esame del tribunale e l'ammissione alla procedura", id: "ammissione" },
    { type: "p", text: "Ricevuta la domanda, il tribunale verifica la sussistenza dei presupposti soggettivi e oggettivi, la completezza della documentazione e l'assenza di evidenti profili di inammissibilità. Se la domanda è ammissibile, il tribunale dispone con decreto l'apertura della procedura, ai sensi dell'art. 76 CCII, fissando un termine per il voto dei creditori e disponendo le comunicazioni del caso." },
    { type: "p", text: "Il decreto di apertura produce effetti rilevanti: dalla data del deposito della domanda, e fino all'omologazione o al rigetto, sono sospese le azioni esecutive individuali e cautelari dei creditori sul patrimonio del debitore (con i limiti previsti per le procedure speciali). È una protezione fondamentale, che consente al debitore di gestire la procedura senza il rischio di aggressioni esterne." },

    { type: "h3", text: "Le misure protettive" },
    { type: "p", text: "Il debitore può chiedere al tribunale, anche in via cautelare e urgente, l'adozione di misure protettive specifiche, finalizzate a inibire o sospendere singole azioni esecutive o cautelari pendenti. Le misure protettive nel concordato minore funzionano in modo analogo a quanto previsto per le procedure maggiori, con i necessari adattamenti, e sono volte ad assicurare la conservazione del patrimonio e la corretta formazione del consenso dei creditori." },

    { type: "h2", text: "Il voto dei creditori", id: "voto-creditori" },
    { type: "p", text: "Uno degli elementi distintivi del concordato minore rispetto alla ristrutturazione dei debiti del consumatore è la necessità del voto dei creditori. La proposta viene comunicata ai creditori, che dispongono del termine fissato dal tribunale per esprimere il proprio voto (favorevole, contrario o astensione). Il voto può essere manifestato per via telematica o in forma analogica secondo le modalità stabilite dall'OCC e dal decreto di apertura." },

    { type: "h3", text: "Maggioranza richiesta per l'approvazione" },
    { type: "p", text: "L'art. 79 CCII prevede che la proposta è approvata se ottiene il voto favorevole della maggioranza dei crediti ammessi al voto, computati per valore. Non rileva la maggioranza per numero di teste: ciò che conta è la maggioranza ponderata dei crediti, secondo il principio del concorso. Sono esclusi dal voto i creditori privilegiati che vengono soddisfatti integralmente (in quanto non incisi dalla proposta) e i creditori in conflitto di interesse." },

    { type: "h3", text: "Il silenzio assenso" },
    { type: "p", text: "Nella disciplina del concordato minore opera, nei limiti di legge, una regola di favor per l'approvazione: i creditori che non si esprimono nei termini sono considerati, ai fini del computo della maggioranza, secondo le regole previste dalla norma — meccanismo che, nella prassi, facilita il raggiungimento del consenso e riduce il rischio di paralisi della procedura per mera inerzia dei creditori. È un aspetto da verificare attentamente, posto che la sua applicazione concreta dipende dalla disciplina specifica e dall'orientamento del tribunale." },

    { type: "note", text: "Il voto dei creditori non è la sola garanzia: il tribunale, in sede di omologazione, verifica la regolarità della procedura, il rispetto delle cause di prelazione e la convenienza del piano. È possibile, in determinate condizioni, l'omologazione anche in assenza del raggiungimento della maggioranza prevista, attraverso il meccanismo della 'omologazione forzata' (cram-down), particolarmente rilevante quando il dissenso proviene dall'amministrazione finanziaria o dagli enti previdenziali." },

    { type: "h2", text: "L'omologazione del concordato minore", id: "omologazione" },
    { type: "p", text: "Raggiunta la maggioranza dei consensi, il tribunale procede con l'omologazione del concordato minore ai sensi dell'art. 80 CCII. L'omologazione è il provvedimento con cui il tribunale, verificata la regolarità della procedura e la sussistenza dei presupposti, dichiara efficace il piano nei confronti di tutti i creditori, anche di quelli che hanno votato contro o non hanno votato." },

    { type: "h3", text: "Verifiche del tribunale in sede di omologazione" },
    { type: "ul", items: [
      "Regolarità della procedura e rispetto delle forme previste dalla legge",
      "Sussistenza dei presupposti soggettivi e oggettivi del concordato minore",
      "Raggiungimento della maggioranza dei creditori (o presupposti del cram-down)",
      "Rispetto delle cause di prelazione e della regola della convenienza",
      "Assenza di atti in frode e completezza della documentazione",
      "Meritevolezza del debitore (in particolare assenza di dolo o colpa grave)",
      "Fattibilità tecnica del piano, attestata dall'OCC",
      "Convenienza del piano rispetto all'alternativa liquidatoria",
    ]},

    { type: "h3", text: "Il cram-down" },
    { type: "p", text: "Il CCII consente, nei limiti previsti dall'art. 80 e seguenti, che il tribunale omologhi il piano anche in caso di dissenso di una classe di creditori, o anche di mancato raggiungimento della maggioranza, quando ricorrano specifici presupposti di convenienza e di equità del trattamento. La figura del cram-down assume particolare rilievo in presenza di dissenso dell'amministrazione finanziaria o degli enti previdenziali: in tali casi il tribunale può omologare la proposta ove la stessa sia più conveniente per l'erario rispetto all'alternativa liquidatoria, ai sensi dell'art. 88 CCII e delle norme correlate." },

    { type: "h2", text: "Effetti dell'omologazione", id: "effetti-omologazione" },
    { type: "p", text: "L'omologazione produce effetti rilevanti sia per il debitore sia per i creditori. Sotto il profilo sostanziale, il piano diventa vincolante per tutti i creditori anteriori, indipendentemente dal loro voto. Sotto il profilo procedurale, si chiude la fase dell'approvazione e si apre la fase esecutiva, durante la quale il debitore — sotto la vigilanza dell'OCC e, in alcuni casi, di un liquidatore — dà attuazione al piano." },

    { type: "h3", text: "Effetti per il debitore" },
    { type: "ul", items: [
      "Vincolatività del piano e obbligo di eseguirlo nei termini stabiliti",
      "Liberazione progressiva dai debiti pregressi, in proporzione all'esecuzione del piano",
      "Necessità di destinare al piano le risorse previste (redditi, beni, apporti esterni)",
      "Possibilità di proseguire l'attività professionale o imprenditoriale secondo il piano",
      "Sottoposizione alla vigilanza dell'OCC e del tribunale per l'intero arco esecutivo",
    ]},

    { type: "h3", text: "Effetti per i creditori" },
    { type: "ul", items: [
      "Sostituzione dei crediti originari con il diritto al pagamento secondo il piano",
      "Inammissibilità di azioni esecutive individuali per la parte falcidiata",
      "Diritto al pagamento nei termini, nei modi e nelle misure previste dal piano",
      "Possibilità di reagire all'inadempimento attivando le tutele previste dalla legge",
      "Estensione degli effetti del piano anche ai creditori dissenzienti e non votanti",
    ]},

    { type: "image", src: ctaHandshake, alt: "Esecuzione del piano di concordato minore", caption: "Dopo l'omologazione il debitore esegue il piano sotto la vigilanza dell'OCC e del tribunale." },

    { type: "h2", text: "L'esecuzione del piano e la vigilanza dell'OCC", id: "esecuzione-piano" },
    { type: "p", text: "La fase esecutiva del concordato minore è quella in cui il debitore dà concreta attuazione agli impegni assunti con il piano. La sua durata varia in funzione del contenuto del piano: nei concordati liquidatori si protrae fino al completamento delle vendite e dei riparti; nei concordati continuativi può estendersi su più anni, in coerenza con la durata dei flussi reddituali previsti." },
    { type: "p", text: "L'OCC vigila sull'esecuzione, monitorando il rispetto delle scadenze, la correttezza dei pagamenti, l'adempimento degli obblighi accessori (rendiconti, comunicazioni, eventuali revisioni). In caso di anomalie, l'OCC riferisce al giudice delegato, che può adottare provvedimenti correttivi. In presenza di inadempimenti gravi, il piano può essere risolto, con conseguente apertura della liquidazione controllata." },

    { type: "h3", text: "Cause di risoluzione del concordato minore" },
    { type: "ol", items: [
      "Mancato pagamento dei creditori nei termini stabiliti dal piano",
      "Inadempimento degli obblighi di trasferimento di beni o di apporto di finanza esterna",
      "Atti dispositivi del patrimonio non autorizzati",
      "Scoperta di frode o di occultamento di attività",
      "Sopravvenute impossibilità di esecuzione non imputabili a forza maggiore documentata",
    ]},

    { type: "h2", text: "Concordato minore in continuità: aspetti specifici", id: "continuita" },
    { type: "p", text: "Il concordato minore in continuità presenta peculiarità degne di attenzione. La conservazione dell'attività richiede una valutazione preventiva approfondita, sia sotto il profilo della sostenibilità economica (capacità dei flussi futuri di generare risorse sufficienti al pagamento dei creditori e al fabbisogno operativo), sia sotto quello del trattamento dei rapporti contrattuali in corso (locazioni, leasing, contratti di fornitura, mandati professionali)." },
    { type: "p", text: "Sul piano dei contratti in corso, l'art. 97 CCII (applicabile per rinvio nei limiti compatibili) prevede regole specifiche: i contratti pendenti proseguono in linea di principio, salvo che il debitore richieda lo scioglimento o la sospensione. È una facoltà preziosa, che consente di alleggerire la struttura dei costi e di liberarsi di impegni non più sostenibili. Le decisioni in materia richiedono valutazioni tecniche specifiche e vanno sempre concordate con l'OCC." },

    { type: "h2", text: "Differenze rispetto alle altre procedure", id: "differenze-altre-procedure" },
    { type: "p", text: "Per orientarsi correttamente è utile confrontare il concordato minore con le altre procedure di sovraindebitamento e con il concordato preventivo." },

    { type: "table", headers: ["Caratteristica", "Concordato minore", "Ristrutturazione consumatore", "Liquidazione controllata"], rows: [
      ["Destinatari", "Imprenditori minori, professionisti, agricoltori", "Solo consumatori", "Tutti i sovraindebitati"],
      ["Voto creditori", "Sì, maggioranza per valore", "No, valutazione del tribunale", "Non previsto"],
      ["Natura", "Ristrutturativa", "Ristrutturativa", "Liquidatoria"],
      ["Esito tipico", "Esecuzione del piano", "Esecuzione del piano", "Esdebitazione al triennio"],
      ["Conservazione patrimonio", "Possibile (in continuità)", "Possibile", "No, spossessamento"],
      ["Finanza esterna", "Ammessa", "Ammessa", "Non rilevante"],
      ["Durata", "Variabile, fino a esecuzione piano", "Variabile, fino a esecuzione piano", "Massimo tre anni"],
    ]},

    { type: "h2", text: "Profili fiscali e transazione tributaria", id: "profili-fiscali" },
    { type: "p", text: "I debiti tributari e contributivi rappresentano spesso una componente rilevante dell'esposizione del debitore sovraindebitato. Il concordato minore consente, alle condizioni di legge, soluzioni di transazione fiscale e contributiva, ai sensi degli artt. 63 e 88 CCII e delle norme correlate. È possibile, in particolare, prevedere la dilazione dei pagamenti, la riduzione delle sanzioni e degli interessi e — nei limiti previsti — la falcidia dell'imposta dovuta." },
    { type: "p", text: "La proposta di transazione deve essere accompagnata dall'attestazione dell'OCC circa la convenienza per l'erario rispetto all'alternativa liquidatoria. In caso di dissenso dell'amministrazione finanziaria, il tribunale può comunque procedere all'omologazione attraverso il meccanismo del cram-down fiscale, quando ricorrono i presupposti di legge. È uno dei principali strumenti di flessibilità del sistema e ha consentito di sbloccare numerose procedure altrimenti destinate al fallimento." },

    { type: "note", text: "Anche dopo le ultime modifiche del CCII, la materia della transazione fiscale e contributiva resta tecnicamente complessa e in evoluzione. L'attivazione richiede competenze specifiche, sia sotto il profilo tributario sia sotto quello concorsuale. È consigliabile sempre la consulenza di un avvocato esperto in crisi d'impresa e di un commercialista qualificato." },

    { type: "h2", text: "Vantaggi e limiti del concordato minore", id: "vantaggi-limiti" },
    { type: "p", text: "Il concordato minore presenta vantaggi rilevanti rispetto ad altre soluzioni, ma comporta anche alcuni limiti e rischi che occorre considerare in sede di valutazione preventiva." },

    { type: "h3", text: "Vantaggi" },
    { type: "ul", items: [
      "Conservazione dell'attività economica, quando il piano è in continuità",
      "Possibilità di trattamento differenziato dei crediti (con il rispetto delle cause di prelazione)",
      "Falcidia dei crediti tributari e contributivi nei limiti consentiti dalla transazione",
      "Apporto di finanza esterna per migliorare l'offerta ai creditori",
      "Sospensione delle azioni esecutive durante tutta la procedura",
      "Effetto liberatorio della procedura, con esdebitazione collegata all'esecuzione",
    ]},

    { type: "h3", text: "Limiti e rischi" },
    { type: "ul", items: [
      "Necessità del voto favorevole della maggioranza dei creditori per valore",
      "Costi tecnici significativi (OCC, difensore, consulenti, attestatori)",
      "Tempistica complessiva non breve, soprattutto nei piani in continuità",
      "Rigidità nell'esecuzione: l'inadempimento può portare alla risoluzione",
      "Valutazione della meritevolezza in sede di omologazione",
      "Necessità di una documentazione completa e veritiera",
    ]},

    { type: "h2", text: "Casistica giurisprudenziale", id: "giurisprudenza" },
    { type: "p", text: "La giurisprudenza, formatasi soprattutto presso i tribunali specializzati in crisi d'impresa, ha contribuito a chiarire alcuni aspetti applicativi del concordato minore. Tra le questioni più rilevanti emergono: l'esatto perimetro dei soggetti ammessi (in particolare nei casi limite tra consumatore e ex imprenditore), il trattamento dei crediti tributari nei meccanismi di cram-down, l'estensione delle misure protettive, la valutazione di meritevolezza ai fini dell'omologazione, la disciplina dei rapporti contrattuali in corso." },
    { type: "p", text: "Un orientamento ormai consolidato riconosce al piano una sostanziale flessibilità contenutistica, purché sia rispettata la regola della convenienza per i creditori rispetto all'alternativa liquidatoria. Un altro filone giurisprudenziale ha chiarito che la valutazione di meritevolezza è meno stringente rispetto a quella richiesta per l'esdebitazione dell'incapiente: nel concordato minore, infatti, si presuppone che il debitore offra qualcosa ai creditori, e ciò mitiga il giudizio sulla pregressa condotta." },

    { type: "h2", text: "Costi del concordato minore", id: "costi" },
    { type: "p", text: "I costi della procedura comprendono: il compenso dell'OCC per la relazione particolareggiata e per la vigilanza (parametrato all'attivo e al passivo), il compenso del difensore, le spese per gli attestatori e i consulenti tecnici, il contributo unificato e le spese di pubblicazione, eventuali costi per perizie e stime. Per i debitori che non dispongono delle risorse iniziali necessarie è possibile valutare l'accesso al patrocinio a spese dello Stato in presenza dei requisiti reddituali, ovvero strutturare il piano in modo da includere i costi della procedura tra le prededuzioni a carico dell'attivo." },

    { type: "h2", text: "Procedura operativa: i passaggi pratici", id: "passi-operativi" },
    { type: "ol", items: [
      "Verificare con un professionista la sussistenza dei presupposti soggettivi (esclusione del consumatore puro) e oggettivi (stato di sovraindebitamento)",
      "Contattare un Organismo di Composizione della Crisi accreditato per l'avvio dell'istruttoria",
      "Raccogliere la documentazione completa: bilanci, dichiarazioni dei redditi, estratti AdER, posizione bancaria, atti giudiziari, eventuali atti di disposizione",
      "Predisporre, con il supporto dell'OCC e del difensore, una bozza di piano coerente con la situazione del debitore (continuativo, liquidatorio o misto)",
      "Valutare l'eventuale apporto di finanza esterna e formalizzare gli impegni dei terzi",
      "Far attestare la fattibilità del piano dall'OCC e ottenere la relazione particolareggiata",
      "Depositare la domanda di concordato minore presso il tribunale competente",
      "Richiedere, se necessario, le misure protettive per inibire le azioni esecutive in corso",
      "Gestire la fase di voto dei creditori, con il supporto dell'OCC per le comunicazioni e la raccolta dei consensi",
      "In caso di approvazione, attendere il decreto di omologazione del tribunale",
      "Dare esecuzione al piano nei termini stabiliti, sotto la vigilanza dell'OCC",
      "Al completamento dell'esecuzione, ottenere l'effetto liberatorio finale e la chiusura della procedura",
    ]},

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Chi può accedere al concordato minore?", a: "Possono accedere i debitori in stato di sovraindebitamento diversi dal consumatore puro: imprenditori minori, imprenditori commerciali cessati da non oltre un anno, imprenditori agricoli, professionisti iscritti ad albi, lavoratori autonomi, start-up innovative, società di persone e società minori. È esclusa la persona fisica che agisce per scopi estranei all'attività imprenditoriale, per la quale è prevista la diversa procedura di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII). Il consumatore che abbia anche debiti d'impresa può tuttavia ricorrere al concordato minore per ricomprenderli unitariamente." },
      { q: "Quali sono le differenze tra concordato minore e ristrutturazione del consumatore?", a: "Le principali differenze riguardano i destinatari (il concordato minore è per imprenditori, professionisti, agricoltori; la ristrutturazione è solo per consumatori), la presenza del voto dei creditori (richiesto nel concordato minore, non nella ristrutturazione del consumatore), il contenuto del piano (più articolato e flessibile nel concordato minore), e i meccanismi di omologazione. Entrambe sono procedure ristrutturative e mirano alla conservazione del debitore in attività o alla regolazione organica della crisi, in alternativa alla liquidazione." },
      { q: "Quanto tempo dura la procedura?", a: "La durata complessiva varia in funzione della complessità del caso e del contenuto del piano. Una fase prodromica di raccolta documentale e predisposizione del piano richiede mediamente da tre a sei mesi. Il deposito della domanda, la valutazione del tribunale e la fase di voto possono richiedere ulteriori sei-dodici mesi. La fase esecutiva, nei piani liquidatori, può completarsi in uno o due anni; nei piani in continuità può estendersi su periodi più lunghi, coerentemente con la durata dei flussi reddituali previsti." },
      { q: "Quali maggioranze sono richieste per l'approvazione del piano?", a: "L'art. 79 CCII prevede l'approvazione del piano con il voto favorevole della maggioranza dei crediti ammessi al voto, computati per valore (non per teste). Non rileva la maggioranza numerica dei creditori, ma il valore complessivo dei crediti che hanno espresso voto favorevole. Sono esclusi dal voto i creditori privilegiati soddisfatti integralmente e quelli in conflitto di interesse. La disciplina prevede inoltre meccanismi di facilitazione del consenso e, in determinate condizioni, l'omologazione forzata (cram-down)." },
      { q: "Cosa succede se i creditori non approvano il piano?", a: "Se la proposta non ottiene la maggioranza richiesta, e non ricorrono i presupposti per il cram-down, il tribunale dichiara non approvato il concordato e dispone la chiusura della procedura. Il debitore può a quel punto valutare altre soluzioni: la riformulazione del piano (se ancora possibile), il ricorso alla liquidazione controllata (artt. 268-277 CCII) o — nei casi di assoluta incapienza — l'esdebitazione del debitore incapiente (art. 283 CCII). La scelta dipende dalla situazione complessiva e dalle prospettive del debitore." },
      { q: "È possibile la transazione sui debiti fiscali e contributivi?", a: "Sì, la transazione fiscale e contributiva è ammessa nel concordato minore alle condizioni stabilite dagli artt. 63 e 88 CCII. La proposta può prevedere la dilazione, la riduzione delle sanzioni e degli interessi e — nei limiti consentiti — la falcidia dell'imposta dovuta. L'amministrazione finanziaria e gli enti previdenziali esprimono il proprio voto secondo le procedure di legge. In caso di dissenso, il tribunale può procedere al cram-down fiscale quando la proposta sia più conveniente per l'erario rispetto all'alternativa liquidatoria." },
      { q: "L'attività professionale o imprenditoriale può proseguire?", a: "Sì, nei concordati in continuità l'attività professionale o imprenditoriale prosegue regolarmente, secondo le previsioni del piano. La prosecuzione è anzi spesso lo strumento per generare i flussi necessari al pagamento dei creditori. Il debitore conserva la gestione dell'attività sotto la vigilanza dell'OCC; può sciogliersi o sospendere singoli contratti in corso quando lo richieda il piano. La conservazione dell'attività è uno dei principali punti di forza del concordato minore rispetto alle soluzioni puramente liquidatorie." },
      { q: "Quali sono i costi della procedura?", a: "I costi comprendono il compenso dell'OCC (parametrato all'attivo e al passivo della procedura), il compenso del difensore, le spese per eventuali consulenti tecnici e attestatori, il contributo unificato per l'iscrizione a ruolo, le spese di pubblicazione. Per i debitori che non dispongono di risorse iniziali è possibile valutare il patrocinio a spese dello Stato in presenza dei requisiti reddituali, ovvero includere le spese di procedura tra le prededuzioni dell'attivo del piano. Una stima precisa può essere effettuata caso per caso." },
      { q: "Cosa succede se il debitore non esegue il piano?", a: "L'inadempimento del piano può determinare la risoluzione del concordato minore. La risoluzione può essere chiesta dai creditori o, in determinati casi, può essere disposta d'ufficio dal tribunale a seguito della relazione dell'OCC. Le conseguenze sono significative: i creditori riacquistano la titolarità dei crediti originari per la parte non soddisfatta, e il debitore si espone all'apertura della liquidazione controllata. È quindi essenziale che il piano sia realisticamente sostenibile e che il debitore mantenga un comportamento collaborativo durante tutta la fase esecutiva." },
      { q: "Posso fare il concordato minore se ho già beneficiato di un'altra procedura in passato?", a: "Il CCII prevede limiti specifici relativi all'accesso a procedure di sovraindebitamento dopo una precedente esdebitazione. In linea generale, il debitore che abbia già beneficiato dell'esdebitazione nei cinque anni precedenti non può accedere a una nuova procedura che conduca alla cancellazione dei debiti, salvo eccezioni. La situazione richiede una valutazione caso per caso, considerando la natura della precedente procedura, il tempo trascorso e le caratteristiche dell'attuale esposizione. È consigliabile sempre una verifica preventiva con un professionista esperto in materia concorsuale." },
    ]},

    { type: "h2", text: "Conclusioni operative", id: "conclusioni" },
    { type: "p", text: "Il concordato minore rappresenta uno degli strumenti più sofisticati e duttili dell'ordinamento concorsuale italiano per la composizione della crisi del debitore non assoggettabile alle procedure maggiori. La sua disciplina, organica e coerente con il quadro complessivo del Codice della Crisi, consente al piccolo imprenditore, al professionista e all'agricoltore di affrontare la crisi conservando — quando le condizioni lo consentano — la propria attività e la propria operatività, attraverso un piano negoziato con i creditori e omologato dal tribunale." },
    { type: "p", text: "L'attivazione della procedura richiede un'attenta valutazione preventiva, che tenga conto della sostenibilità del piano, della disponibilità di finanza esterna, della disposizione dei creditori al consenso e delle alternative concrete (ristrutturazione del consumatore, liquidazione controllata, esdebitazione dell'incapiente). Il supporto di un avvocato esperto in crisi d'impresa e di un OCC qualificato è essenziale per impostare correttamente il percorso e per massimizzare le probabilità di esito favorevole, nel rispetto della disciplina e della tutela equilibrata degli interessi in gioco." },
  ],
};
