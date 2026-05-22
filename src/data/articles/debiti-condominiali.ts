import type { Article } from "../articles";
import heroHope from "@/assets/hero-hope.jpg";
import authorityLegal from "@/assets/authority-legal.jpg";
import handshakeTrust from "@/assets/handshake-trust.jpg";
import ctaHandshake from "@/assets/cta-handshake.jpg";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import abstractHopeBg from "@/assets/abstract-hope-bg.jpg";

export const article: Article = {
  slug: "debiti-condominiali",
  title:
    "Debiti condominiali: cosa rischia il condomino moroso e come gestire la morosità",
  excerpt:
    "Spese condominiali non pagate, decreto ingiuntivo provvisoriamente esecutivo, distacco dei servizi comuni e solidarietà del nuovo acquirente: guida operativa alla morosità condominiale (art. 63 disp. att. c.c.).",
  category: "Privati",
  date: "Maggio 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  coverImage: abstractHopeBg,
  keywords: [
    "debiti condominio",
    "morosità condominiale",
    "decreto ingiuntivo condominio",
    "spese condominiali non pagate",
    "art 63 disp att cc",
  ],
  intro:
    "La morosità condominiale è una delle controversie più diffuse del contenzioso civile italiano. Il legislatore ha previsto, in capo all'amministratore, strumenti di recupero estremamente rapidi: il decreto ingiuntivo provvisoriamente esecutivo ex art. 63 disp. att. c.c., la sospensione dei servizi comuni suscettibili di godimento separato, l'iscrizione di ipoteca giudiziale e il pignoramento. Conoscere il quadro normativo (artt. 1118, 1123 c.c.; 63-66 disp. att. c.c.), le tipologie di spesa, i rimedi del condomino moroso e i limiti dell'azione condominiale è essenziale per evitare aggravamenti del debito e per esercitare correttamente le facoltà di opposizione e di rinegoziazione.",
  content: [
    {
      type: "h2",
      text: "Il quadro normativo della contribuzione condominiale",
      id: "quadro-normativo",
    },
    {
      type: "p",
      text: "La disciplina dei debiti condominiali si colloca tra il codice civile (artt. 1117-1139 c.c.) e le disposizioni di attuazione (artt. 61-72 disp. att. c.c.), così come modificate dalla riforma del condominio (L. 11 dicembre 2012, n. 220). L'obbligo contributivo del condomino discende dalla titolarità del diritto di proprietà sulle parti comuni dell'edificio (art. 1117 c.c.) ed è regolato, sotto il profilo della ripartizione, dagli artt. 1118 e 1123 c.c.",
    },
    {
      type: "p",
      text: "L'art. 1118 c.c. stabilisce che il diritto di ciascun condomino sulle parti comuni è proporzionale al valore della sua unità immobiliare, salvo che il titolo non disponga diversamente. L'art. 1123 c.c. distingue, ai fini della ripartizione delle spese, tra spese necessarie alla conservazione e al godimento delle parti comuni (ripartite in millesimi di proprietà), spese destinate a servizi di cui si trae utilità in misura diversa (ripartite in base all'uso) e spese relative a parti comuni destinate a servire un gruppo di condomini (ripartite tra questi ultimi).",
    },
    {
      type: "p",
      text: "Sotto il profilo del recupero, l'art. 63 delle disposizioni di attuazione del codice civile costituisce la norma cardine: attribuisce all'amministratore il potere di richiedere, sulla base dello stato di ripartizione approvato dall'assemblea, un decreto ingiuntivo immediatamente esecutivo nei confronti del condomino moroso. La fonte costitutiva del credito non è dunque il singolo bilancio o la singola fattura, bensì la delibera assembleare di approvazione del rendiconto o del preventivo.",
    },
    {
      type: "image",
      src: abstractHopeBg,
      alt: "Edificio condominiale con amministratore al lavoro",
      caption:
        "La contribuzione condominiale nasce dall'obbligo proprietario sulle parti comuni: la delibera assembleare ne fissa la misura.",
    },
    {
      type: "h2",
      text: "Le tipologie di spesa condominiale",
      id: "tipologie-spesa",
    },
    {
      type: "p",
      text: "Per comprendere la dinamica della morosità è indispensabile distinguere le diverse categorie di spese, perché da esse dipendono i criteri di ripartizione, la legittimazione attiva dell'amministratore e la possibilità di sospendere i servizi comuni.",
    },
    {
      type: "h3",
      text: "Spese ordinarie",
    },
    {
      type: "p",
      text: "Sono le spese necessarie al funzionamento corrente dell'edificio e dei servizi: pulizia delle scale, manutenzione ordinaria dell'ascensore, illuminazione delle parti comuni, compenso dell'amministratore, premio assicurativo, consumo idrico ed energetico, vigilanza, giardinaggio. Sono approvate annualmente con il rendiconto consuntivo e il preventivo per l'esercizio successivo (art. 1130, n. 10, c.c.).",
    },
    {
      type: "h3",
      text: "Spese straordinarie",
    },
    {
      type: "p",
      text: "Riguardano interventi non ricorrenti di rilevante entità economica: rifacimento del tetto, sostituzione dell'ascensore, consolidamento strutturale, opere di efficientamento energetico, adeguamento antincendio. Richiedono un quorum deliberativo qualificato ai sensi dell'art. 1136, comma 4, c.c. (maggioranza degli intervenuti che rappresenti almeno la metà del valore dell'edificio).",
    },
    {
      type: "h3",
      text: "Spese personali e di unità immobiliare",
    },
    {
      type: "p",
      text: "Sono le voci direttamente imputabili a un singolo condomino: consumi individuali (riscaldamento contabilizzato, acqua con contatore individuale), oneri assicurativi specifici, sanzioni amministrative comminate al singolo. Restano fuori dal regime della contribuzione condominiale ordinaria ma possono, se non pagate, essere oggetto di azione separata dell'amministratore se previste in regolamento.",
    },
    {
      type: "table",
      headers: [
        "Tipologia",
        "Fonte",
        "Criterio ripartizione",
        "Quorum approvazione",
        "Esempio",
      ],
      rows: [
        [
          "Ordinaria",
          "Bilancio annuale",
          "Millesimi di proprietà",
          "1136 c. 2 c.c.",
          "Pulizia, energia, amministratore",
        ],
        [
          "Straordinaria",
          "Delibera ad hoc",
          "Millesimi di proprietà",
          "1136 c. 4 c.c.",
          "Rifacimento tetto",
        ],
        [
          "Innovazione",
          "Delibera ad hoc",
          "Millesimi o uso",
          "1136 c. 5 c.c.",
          "Ascensore nuovo",
        ],
        [
          "Uso differenziato",
          "Tabelle uso",
          "Uso effettivo",
          "1136 c. 2 c.c.",
          "Riscaldamento a contabilizzazione",
        ],
        [
          "Servizio gruppo",
          "Tabella speciale",
          "Tra gruppo",
          "1136 c. 2 c.c.",
          "Lastrico solare di copertura parziale",
        ],
        [
          "Personale",
          "Regolamento",
          "Imputazione diretta",
          "Non richiesto",
          "Sanzione individuale",
        ],
      ],
    },
    {
      type: "h2",
      text: "La delibera assembleare e l'esigibilità del credito",
      id: "delibera-esigibilita",
    },
    {
      type: "p",
      text: "L'obbligo di pagamento delle spese condominiali sorge per effetto della delibera assembleare di approvazione del rendiconto o del preventivo. La giurisprudenza di legittimità (Cass. SS.UU. n. 9839/2021) ha chiarito che il credito condominiale è certo, liquido ed esigibile dal momento dell'approvazione dello stato di ripartizione, indipendentemente dalla comunicazione del rendiconto al singolo condomino.",
    },
    {
      type: "p",
      text: "Per le spese ordinarie, l'esigibilità coincide con il rateo trimestrale o quadrimestrale fissato dalla delibera. Per le straordinarie, l'esigibilità segue il piano di riparto approvato (ratei o pagamento unico). In assenza di specifica indicazione, vale il principio generale dell'art. 1219 c.c. e l'obbligazione diviene esigibile a richiesta del creditore.",
    },
    {
      type: "note",
      text: "L'amministratore è obbligato ad agire per il recupero dei crediti condominiali entro sei mesi dalla chiusura dell'esercizio in cui il credito è iscritto in bilancio (art. 1129, comma 9, c.c.). La violazione costituisce grave irregolarità e può determinare la revoca giudiziale dell'amministratore.",
    },
    {
      type: "h2",
      text: "Il decreto ingiuntivo provvisoriamente esecutivo (art. 63 disp. att. c.c.)",
      id: "decreto-ingiuntivo",
    },
    {
      type: "p",
      text: "L'art. 63, comma 1, delle disposizioni di attuazione del codice civile rappresenta la norma più incisiva nel sistema di recupero dei crediti condominiali. Stabilisce che 'per la riscossione dei contributi in base allo stato di ripartizione approvato dall'assemblea, l'amministratore, senza bisogno di autorizzazione di questa, può ottenere un decreto di ingiunzione immediatamente esecutivo, nonostante opposizione'.",
    },
    {
      type: "p",
      text: "Si tratta di una previsione di estremo favore per il condominio creditore. L'immediata esecutività ex lege, contemplata dall'art. 642 c.p.c., consente all'amministratore di procedere subito a pignoramento (mobiliare, immobiliare o presso terzi) senza dover attendere la definizione del giudizio di opposizione. La regola opera in deroga al principio generale dell'art. 647 c.p.c., secondo cui l'opposizione tempestiva sospende l'esecuzione, salvo provvedimento autorizzativo del giudice.",
    },
    {
      type: "p",
      text: "I documenti necessari per l'ottenimento del decreto sono limitati: la nomina dell'amministratore (verbale assembleare), la delibera di approvazione dello stato di ripartizione, la tabella millesimale di riparto e il prospetto contabile della morosità del condomino. La Cassazione (sez. VI, ord. n. 9719/2018) ha confermato che la delibera approvativa costituisce prova scritta sufficiente ai fini dell'art. 633 c.p.c.",
    },
    {
      type: "h3",
      text: "I tempi del decreto ingiuntivo",
    },
    {
      type: "ol",
      items: [
        "Deposito ricorso telematico nel Tribunale del luogo dove è sito l'immobile",
        "Emissione del decreto in 15-45 giorni a seconda del foro",
        "Notifica del decreto al condomino moroso (40 giorni per opposizione)",
        "In caso di mancata opposizione: titolo definitivo ed iscrizione ipotecaria giudiziale",
        "In caso di opposizione: il decreto resta provvisoriamente esecutivo ex art. 63 disp. att. c.c.",
        "Atto di precetto e successivo pignoramento entro 90 giorni dalla notifica del precetto (art. 481 c.p.c.)",
      ],
    },
    {
      type: "h2",
      text: "La sospensione dei servizi comuni (art. 63, comma 3)",
      id: "sospensione-servizi",
    },
    {
      type: "p",
      text: "L'art. 63, comma 3, delle disposizioni di attuazione del codice civile attribuisce all'amministratore una facoltà specifica: 'in caso di mora nel pagamento dei contributi che si sia protratta per un semestre, l'amministratore può sospendere al condomino moroso l'utilizzazione dei servizi comuni suscettibili di godimento separato'. È uno strumento di pressione economica che non richiede provvedimento giudiziale e che opera sul piano contrattuale-condominiale.",
    },
    {
      type: "p",
      text: "Affinché la sospensione sia legittima è necessario che la morosità si sia protratta ininterrottamente per almeno sei mesi e che il servizio sia tecnicamente separabile, cioè possa essere interrotto al singolo condomino senza compromettere il godimento degli altri. Tipici servizi sospendibili: riscaldamento centralizzato (con valvole di intercettazione individuali), acqua calda sanitaria, gas centralizzato, antenna televisiva centralizzata, citofono, accesso a piscina o area benessere condominiale.",
    },
    {
      type: "p",
      text: "Restano viceversa esclusi dalla sospensione i servizi essenziali alla vivibilità dell'unità immobiliare e quelli non separabili: la fornitura idrica per usi igienici primari (in alcuni regolamenti regionali), l'energia elettrica delle parti comuni (corridoi, scale), l'ascensore se non tecnicamente disabilitabile al singolo piano. La giurisprudenza (Trib. Roma, sez. V, sent. n. 18372/2020) ha escluso la sospendibilità della fornitura idrica nei casi in cui costituisca diritto fondamentale connesso alla salute e alla dignità.",
    },
    {
      type: "note",
      text: "La sospensione deve essere preceduta da un sollecito formale (raccomandata o PEC) che indichi il debito esatto, la natura semestrale della morosità e l'avviso di sospensione del servizio. L'attivazione senza preavviso e senza la verifica del decorso semestrale espone l'amministratore a responsabilità verso il singolo condomino e può comportare la condanna al risarcimento del danno.",
    },
    {
      type: "h2",
      text: "L'iscrizione di ipoteca giudiziale",
      id: "ipoteca-giudiziale",
    },
    {
      type: "p",
      text: "Una volta ottenuto il decreto ingiuntivo esecutivo o la sentenza di condanna, l'amministratore può procedere all'iscrizione di ipoteca giudiziale sull'unità immobiliare del condomino moroso e su altri eventuali beni immobili intestati al debitore (art. 2818 c.c.). L'iscrizione si effettua presso il Servizio di Pubblicità Immobiliare dell'Agenzia delle Entrate competente e ha durata ventennale rinnovabile (art. 2847 c.c.).",
    },
    {
      type: "p",
      text: "L'ipoteca giudiziale non comporta la perdita immediata della proprietà, ma costituisce un vincolo che si trasferisce con l'immobile e attribuisce al creditore condominio un diritto di prelazione in caso di vendita o di espropriazione promossa da altri creditori. Per il debitore, gli effetti pratici sono significativi: ridotta possibilità di accedere a nuovi finanziamenti (la banca acquisisce solo un'ipoteca di grado successivo), difficoltà nella vendita libera dell'immobile, segnalazione presso le centrali rischi se collegata a procedimenti esecutivi.",
    },
    {
      type: "h2",
      text: "Il pignoramento e l'espropriazione forzata",
      id: "pignoramento",
    },
    {
      type: "p",
      text: "Esaurita la fase del precetto (art. 480 c.p.c.) senza che il debitore abbia adempiuto, il condominio può procedere al pignoramento. Le forme tipicamente utilizzate nel contenzioso condominiale sono tre: pignoramento mobiliare presso il debitore, pignoramento presso terzi (datore di lavoro, conto corrente bancario) e pignoramento immobiliare sull'unità condominiale.",
    },
    {
      type: "p",
      text: "Il pignoramento immobiliare è quello economicamente più rilevante perché aggredisce direttamente la proprietà che ha generato la contribuzione. Si svolge secondo gli artt. 555 e seguenti c.p.c.: trascrizione del pignoramento, perizia di stima, fissazione dell'udienza di vendita, eventuali aste deserte e ribasso del prezzo, decreto di trasferimento al miglior offerente. La procedura ha tempi medi tra i 24 e i 60 mesi a seconda del foro.",
    },
    {
      type: "p",
      text: "Il pignoramento presso terzi (art. 543 c.p.c.) è invece la forma più rapida ed efficace per crediti di importo medio-basso. L'amministratore notifica al datore di lavoro o all'istituto bancario, e il terzo è tenuto a dichiarare entro 10 giorni le somme dovute al debitore (stipendio, saldo conto). Sullo stipendio opera il limite del quinto (art. 545 c.p.c.); sul conto corrente sono pignorabili solo le somme eccedenti il triplo dell'assegno sociale per la quota di accredito da pensione o stipendio.",
    },
    {
      type: "h2",
      text: "La solidarietà del nuovo acquirente (art. 63, comma 4)",
      id: "solidarieta-acquirente",
    },
    {
      type: "p",
      text: "L'art. 63, comma 4, delle disposizioni di attuazione del codice civile contiene una previsione di particolare rilievo per la circolazione degli immobili: 'chi subentra nei diritti di un condomino è obbligato solidalmente con questo al pagamento dei contributi relativi all'anno in corso e a quello precedente'. Si tratta di una solidarietà ex lege che opera al momento del trasferimento della proprietà (compravendita, donazione, successione, divisione).",
    },
    {
      type: "p",
      text: "Il principio di solidarietà significa che il condominio creditore può richiedere il pagamento integrale al venditore, all'acquirente o ad entrambi, senza obbligo di preventiva escussione. Il limite temporale è preciso: l'anno in corso al momento del trasferimento e l'anno solare precedente. Per i debiti più risalenti risponde esclusivamente il venditore.",
    },
    {
      type: "p",
      text: "Nella prassi notarile, l'art. 63 disp. att. c.c. comporta l'obbligo per il notaio di richiedere all'amministratore una dichiarazione (cosiddetta 'liberatoria') che attesti la situazione di morosità o di regolarità dei pagamenti del venditore. Se la dichiarazione evidenzia debiti, le parti possono concordare il trattenimento dell'importo dal prezzo, il pagamento diretto da parte del notaio o l'inserimento di clausole di garanzia specifiche.",
    },
    {
      type: "image",
      src: handshakeTrust,
      alt: "Compravendita immobiliare e verifica morosità condominiale",
      caption:
        "Il nuovo acquirente è solidalmente obbligato per anno in corso e precedente: la liberatoria dell'amministratore è essenziale al rogito.",
    },
    {
      type: "h2",
      text: "Le opposizioni del condomino moroso",
      id: "opposizioni",
    },
    {
      type: "p",
      text: "Il condomino destinatario di un decreto ingiuntivo o convenuto in un giudizio di accertamento dispone di diversi strumenti di reazione. Le contestazioni più frequenti riguardano il merito della delibera assembleare, l'erronea applicazione dei criteri di riparto, vizi procedurali della delibera (art. 1137 c.c.) o la prescrizione del credito.",
    },
    {
      type: "h3",
      text: "Impugnazione della delibera (art. 1137 c.c.)",
    },
    {
      type: "p",
      text: "L'art. 1137 c.c. consente al condomino assente, dissenziente o astenuto di impugnare le delibere contrarie alla legge o al regolamento di condominio, entro trenta giorni dalla data della deliberazione (per gli intervenuti) o dalla comunicazione della stessa (per gli assenti). Il termine è perentorio e si applica alle delibere annullabili. Le delibere nulle (per oggetto impossibile, illecito, contrarie a norme imperative) sono impugnabili senza limiti di tempo.",
    },
    {
      type: "h3",
      text: "Opposizione a decreto ingiuntivo (art. 645 c.p.c.)",
    },
    {
      type: "p",
      text: "Notificato il decreto ingiuntivo, il condomino ha 40 giorni per proporre opposizione davanti al medesimo Tribunale. L'opposizione si esercita con atto di citazione e introduce un giudizio ordinario di cognizione. Le contestazioni tipiche: vizio della delibera approvativa, erroneità del calcolo, prescrizione, eccezione di pagamento, contestazione della tabella millesimale, vizio di legittimazione dell'amministratore.",
    },
    {
      type: "h3",
      text: "Prescrizione del credito condominiale",
    },
    {
      type: "p",
      text: "La prescrizione del credito per contributi condominiali è di cinque anni ai sensi dell'art. 2948, n. 4, c.c., trattandosi di obbligazione che si rinnova annualmente. La decorrenza parte dalla scadenza del singolo rateo. Atti interruttivi tipici: messa in mora scritta, notifica del decreto ingiuntivo, ammissione dell'amministratore in passivo concorsuale.",
    },
    {
      type: "h2",
      text: "Il piano di rientro con l'amministratore",
      id: "piano-rientro",
    },
    {
      type: "p",
      text: "Prima che la situazione degeneri in contenzioso, il condomino in difficoltà può richiedere all'amministratore un piano di rientro. Si tratta di un accordo di natura privatistica che fissa rate, tempi di pagamento e modalità di copertura del debito. La validità dell'accordo, tuttavia, dipende dalla sua compatibilità con il mandato gestorio dell'amministratore: per le morosità di importo elevato o per i piani di rientro con durata superiore al mandato annuale è opportuna una delibera assembleare di ratifica.",
    },
    {
      type: "p",
      text: "Il piano di rientro deve essere documentato in forma scritta, indicare l'importo del debito complessivo, le rate, la decorrenza degli interessi e una clausola risolutiva espressa per il caso di mancato pagamento di una rata. È prassi corretta condizionare la sospensione dell'azione esecutiva al rispetto integrale del piano, con possibilità di immediata ripresa dell'azione in caso di nuovo inadempimento.",
    },
    {
      type: "ol",
      items: [
        "Verifica documentale del debito: estratto contabile, delibere di riferimento, prospetto di riparto",
        "Richiesta scritta di rateizzazione all'amministratore con proposta di piano",
        "Negoziazione delle condizioni: numero rate, decorrenza, interessi, garanzie",
        "Sottoscrizione dell'accordo in forma scritta e comunicazione all'assemblea",
        "Pagamento puntuale delle rate concordate e conservazione delle ricevute",
        "Richiesta di liberatoria finale e cancellazione dell'eventuale ipoteca",
      ],
    },
    {
      type: "h2",
      text: "I rimedi nei casi di delibera viziata",
      id: "delibera-viziata",
    },
    {
      type: "p",
      text: "Una delle linee difensive più efficaci nei giudizi di opposizione condominiale è la contestazione della delibera che sta alla base della pretesa creditoria. La Cassazione (SS.UU. n. 4806/2005, riconfermata dalle sezioni semplici) ha distinto tra delibere annullabili e delibere nulle, con conseguenze processuali significative.",
    },
    {
      type: "p",
      text: "Sono nulle le delibere prive degli elementi essenziali (assenza dell'oggetto, mancanza del quorum costitutivo o deliberativo, oggetto impossibile o illecito, lesione di diritti soggettivi del singolo condomino sulle parti proprie). Sono annullabili le delibere viziate per inosservanza delle modalità di convocazione, irregolarità formali, applicazione errata di tabelle millesimali, eccesso di potere dell'assemblea. La nullità può essere fatta valere in ogni tempo e da chiunque vi abbia interesse; l'annullabilità solo nei trenta giorni previsti dall'art. 1137 c.c.",
    },
    {
      type: "p",
      text: "In sede di opposizione a decreto ingiuntivo, il condomino può eccepire la nullità della delibera anche oltre il termine di impugnazione, purché si tratti di vizi di nullità in senso tecnico. Per i vizi di annullabilità, se il termine di 30 giorni è già scaduto, la delibera è inattaccabile e il decreto ingiuntivo verrà confermato.",
    },
    {
      type: "h2",
      text: "Il caso particolare del condomino apparente",
      id: "condomino-apparente",
    },
    {
      type: "p",
      text: "La giurisprudenza ha elaborato la figura del 'condomino apparente' per tutelare l'affidamento del condominio nei casi in cui l'amministratore ignori senza colpa la successione nella titolarità dell'immobile. Se l'amministratore ha agito sulla base delle risultanze del registro di anagrafe condominiale (art. 1130, n. 6, c.c.) e ha richiesto il decreto ingiuntivo al soggetto risultante come condomino, la pretesa è valida anche se la titolarità è nel frattempo passata ad altri.",
    },
    {
      type: "p",
      text: "L'onere di comunicare il trasferimento spetta al condomino uscente (o all'acquirente) ed è funzionale al corretto svolgimento dell'attività amministrativa. La mancata comunicazione non libera dal debito, ma può fondare azioni di regresso interne tra venditore e acquirente.",
    },
    {
      type: "h2",
      text: "L'azione del condominio in fase concorsuale",
      id: "fase-concorsuale",
    },
    {
      type: "p",
      text: "Quando il condomino moroso è sottoposto a procedura concorsuale o di sovraindebitamento (liquidazione giudiziale, liquidazione controllata, concordato minore), il credito condominiale segue regole specifiche. Per la parte maturata prima dell'apertura della procedura, il condominio insinua il credito al passivo come credito chirografario o, per le ultime annualità, come credito assistito dal privilegio speciale immobiliare ex art. 2772 c.c.",
    },
    {
      type: "p",
      text: "Per le spese maturate dopo l'apertura della procedura concorsuale (cosiddette spese in prededuzione), il credito condominiale è prededucibile ex art. 6 CCII (Codice della Crisi d'Impresa e dell'Insolvenza, D.lgs. 14/2019) e va soddisfatto prima dei creditori concorrenti. La giurisprudenza (Cass. n. 25653/2018) ha chiarito che le spese condominiali maturate durante la procedura sono spese di amministrazione della massa, da soddisfare integralmente.",
    },
    {
      type: "note",
      text: "In presenza di una procedura di sovraindebitamento del condomino, l'amministratore deve sospendere ogni azione esecutiva individuale (art. 78 CCII per liquidazione controllata; art. 75 CCII per concordato minore) e procedere all'insinuazione al passivo. L'azione condominiale può riprendere solo a chiusura della procedura, per la parte di credito eventualmente non soddisfatta.",
    },
    {
      type: "h2",
      text: "Il ruolo del fondo speciale per le opere straordinarie",
      id: "fondo-speciale",
    },
    {
      type: "p",
      text: "L'art. 1135, comma 1, n. 4, c.c. impone all'assemblea che approva opere straordinarie di costituire un fondo speciale di importo pari all'ammontare dei lavori. La norma, introdotta dalla riforma del 2012, mira a tutelare i fornitori e a evitare che i lavori siano avviati senza adeguata copertura finanziaria. La giurisprudenza (Cass. n. 9388/2017) ha specificato che il fondo può essere costituito anche con rate periodiche, purché articolate secondo il cronoprogramma dell'opera.",
    },
    {
      type: "p",
      text: "Il condomino che non versa la propria quota di fondo speciale è equiparato, ai fini del recupero, al condomino moroso ordinario. Si applicano pienamente le tutele dell'art. 63 disp. att. c.c. e, in caso di gravi inadempimenti, è possibile procedere ad azione esecutiva anche prima della completa esecuzione dei lavori.",
    },
    {
      type: "h2",
      text: "Le spese legali e gli interessi di mora",
      id: "spese-interessi",
    },
    {
      type: "p",
      text: "Sul condomino moroso possono gravare, oltre al capitale, gli interessi di mora e le spese legali sostenute dal condominio per il recupero. Gli interessi di mora si applicano secondo il tasso legale (art. 1284 c.c.) salvo diversa previsione regolamentare o assembleare. La giurisprudenza ha ammesso la legittimità di clausole di interessi convenzionali se inserite nel regolamento condominiale e approvate con il quorum richiesto.",
    },
    {
      type: "p",
      text: "Le spese legali del decreto ingiuntivo e del giudizio di opposizione, se vinto dal condominio, sono liquidate dal giudice e poste integralmente a carico del soccombente (art. 91 c.p.c.). I parametri di riferimento sono quelli del DM 55/2014 e successive modificazioni, applicati con riguardo al valore della causa.",
    },
    {
      type: "h2",
      text: "Errori frequenti dell'amministratore e responsabilità",
      id: "errori-responsabilita",
    },
    {
      type: "p",
      text: "L'attività di recupero dei crediti condominiali, sebbene assistita da strumenti normativi favorevoli, richiede rigore procedurale. Gli errori più frequenti sono: avvio dell'azione esecutiva senza delibera assembleare di approvazione del rendiconto, sospensione dei servizi senza preavviso o senza decorso del semestre, omessa verifica della legittimazione passiva (condomino effettivo vs. usufruttuario vs. conduttore), iscrizione di ipoteca su immobili non di proprietà del debitore.",
    },
    {
      type: "p",
      text: "La responsabilità dell'amministratore in caso di errori è contrattuale (art. 1129 c.c. e mandato gestorio) e può sfociare in azioni di danno proposte dal condominio o dal singolo condomino leso. L'amministratore è tenuto a stipulare una polizza assicurativa specifica per la responsabilità civile professionale (art. 1129, comma 3, c.c. per condominî con più di 60 partecipanti).",
    },
    {
      type: "h2",
      text: "Strategie difensive del condomino moroso",
      id: "strategie-difensive",
    },
    {
      type: "p",
      text: "Il condomino che si trova in difficoltà economica e accumula debiti condominiali non è privo di tutele. Il primo passo è una verifica documentale rigorosa: titolo della pretesa, verbale assembleare, tabella millesimale, prospetto di riparto, eventuali pagamenti già effettuati. Spesso la pretesa contiene errori di calcolo, voci duplicate o ricomprende spese già contestate.",
    },
    {
      type: "p",
      text: "Il secondo passo è la valutazione della situazione patrimoniale complessiva. Se il debito condominiale si inserisce in un quadro di insolvenza generalizzata (mutuo, finanziarie, agenzia entrate, altri debiti), può essere opportuno valutare l'accesso alle procedure di sovraindebitamento ex CCII. In particolare, il piano del consumatore (art. 67 CCII) e la liquidazione controllata (art. 268 CCII) possono offrire una soluzione strutturale che ricomprende anche i debiti condominiali.",
    },
    {
      type: "p",
      text: "Per i casi meno gravi, la negoziazione diretta con l'amministratore e l'assemblea resta lo strumento più efficace. Una proposta seria, documentata, sostenuta da prove di capacità reddituale e accompagnata da garanzie (anche personali di un terzo) ha buone probabilità di essere accettata.",
    },
    {
      type: "image",
      src: heroLawyer,
      alt: "Consulenza legale al condomino in difficoltà",
      caption:
        "Il condomino in difficoltà non è privo di tutele: la verifica documentale e l'eventuale ricorso alle procedure di sovraindebitamento aprono spazi di soluzione.",
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
          q: "Da quante rate insolute può l'amministratore richiedere il decreto ingiuntivo?",
          a: "Non esiste un numero minimo di rate insolute. L'art. 63 disp. att. c.c. consente all'amministratore di agire non appena il credito sia certo, liquido ed esigibile in base alla delibera approvativa. In pratica, basta una sola rata insoluta scaduta. Tuttavia, l'amministratore deve agire con buona fede e, prima del decreto, è prassi diffusa inviare un sollecito formale e attendere ulteriori 15-30 giorni. La giurisprudenza ha riconosciuto la legittimità del decreto anche per importi modesti, perché l'art. 63 non subordina l'azione a soglie minime di morosità.",
        },
        {
          q: "L'amministratore può sospendere il riscaldamento al condomino moroso?",
          a: "Sì, se sussistono tre condizioni cumulative: la morosità deve essersi protratta per almeno sei mesi, il servizio deve essere tecnicamente separabile (presenza di valvole o sistemi di intercettazione individuali) e il regolamento o la delibera assembleare non devono prevedere divieti specifici. Prima della sospensione è indispensabile un preavviso scritto al condomino moroso. Per i sistemi a contabilizzazione individuale la sospensione è agevole; per i sistemi centralizzati senza separabilità tecnica, la sospensione non è praticabile. In ogni caso, la sospensione deve essere proporzionata e non può ledere diritti fondamentali.",
        },
        {
          q: "Sono solidalmente responsabile per i debiti del vecchio proprietario se compro casa?",
          a: "Sì, ma con limiti precisi. L'art. 63, comma 4, disp. att. c.c. prevede una solidarietà legale dell'acquirente per i contributi condominiali relativi all'anno in corso al momento del trasferimento e all'anno solare precedente. Per i debiti più vecchi risponde esclusivamente il venditore. Il notaio è tenuto a richiedere all'amministratore la cosiddetta liberatoria condominiale che attesta lo stato dei pagamenti. In presenza di morosità, si concorda di solito il trattenimento dal prezzo o il pagamento diretto a saldo del debito. L'acquirente, una volta pagato, può rivalersi sul venditore in via di regresso.",
        },
        {
          q: "Come posso opporre il decreto ingiuntivo condominiale?",
          a: "L'opposizione si propone con atto di citazione davanti al Tribunale che ha emesso il decreto, entro 40 giorni dalla notifica (art. 641 c.p.c.). Le contestazioni tipiche riguardano vizi della delibera approvativa (nullità o annullabilità), errori di calcolo nel riparto, prescrizione, pagamenti già effettuati e non riconosciuti, vizio di legittimazione dell'amministratore. È fondamentale ricordare che, ai sensi dell'art. 63 disp. att. c.c., il decreto resta provvisoriamente esecutivo anche durante l'opposizione: per sospendere l'esecuzione occorre un'istanza specifica al giudice ex art. 649 c.p.c., con dimostrazione di gravi motivi.",
        },
        {
          q: "Si può chiedere la rateizzazione delle spese straordinarie?",
          a: "Sì, in due modi. La rateizzazione può essere prevista direttamente dalla delibera approvativa, che stabilisce un piano di pagamento articolato in più ratei. Oppure il singolo condomino può richiedere all'amministratore una rateizzazione personalizzata, di natura negoziale, soggetta all'accordo dell'amministratore o, per importi significativi, dell'assemblea. La rateizzazione assembleare è vincolante per il condominio; quella negoziale richiede un accordo scritto, idealmente con clausola risolutiva per il caso di mancato pagamento di una rata. Per le opere straordinarie con fondo speciale ex art. 1135 c.c., la rateizzazione è fisiologica.",
        },
        {
          q: "Qual è il termine di prescrizione del debito condominiale?",
          a: "La prescrizione dei contributi condominiali è quinquennale ai sensi dell'art. 2948, n. 4, c.c., applicabile alle prestazioni periodiche che si rinnovano annualmente. La decorrenza si computa dalla data di esigibilità del singolo rateo (in base alla delibera). Atti interruttivi sono: messa in mora scritta (raccomandata o PEC), notifica di atto giudiziario (decreto ingiuntivo, atto di citazione), riconoscimento del debito da parte del condomino, ammissione al passivo concorsuale. Ogni atto interruttivo fa decorrere un nuovo periodo quinquennale. Per le delibere assembleari il termine decorre dalla approvazione del rendiconto.",
        },
        {
          q: "L'amministratore può iscrivere ipoteca sulla mia casa?",
          a: "Sì, ma solo dopo aver ottenuto un titolo esecutivo (decreto ingiuntivo o sentenza di condanna). L'iscrizione di ipoteca giudiziale è disciplinata dall'art. 2818 c.c. e si effettua presso il Servizio di Pubblicità Immobiliare. Ha durata ventennale rinnovabile (art. 2847 c.c.) e attribuisce al condominio diritto di prelazione in caso di vendita o espropriazione. Per la cancellazione occorre il pagamento integrale del debito e una formale dichiarazione di assenso dell'amministratore o un provvedimento giudiziale. L'ipoteca segue l'immobile anche in caso di trasferimento e può complicare notevolmente la vendita o l'accesso a nuovi finanziamenti.",
        },
        {
          q: "Cosa succede se accedo a una procedura di sovraindebitamento?",
          a: "L'apertura di una procedura di sovraindebitamento (piano del consumatore, concordato minore, liquidazione controllata) comporta la sospensione di tutte le azioni esecutive individuali, comprese quelle condominiali (art. 75 e 78 CCII). Il credito condominiale viene insinuato al passivo come chirografario o, per le ultime annualità, come privilegiato ex art. 2772 c.c. Le spese maturate dopo l'apertura della procedura sono prededucibili (art. 6 CCII) e devono essere pagate dalla massa. Al termine della procedura, l'esdebitazione (artt. 278 ss. CCII) cancella la parte di debito condominiale non soddisfatta. È una via efficace nei casi di insolvenza generale.",
        },
        {
          q: "Posso impugnare la delibera che ha approvato spese eccessive?",
          a: "L'impugnazione è ammessa solo entro trenta giorni dalla delibera (per gli intervenuti) o dalla comunicazione (per gli assenti), ai sensi dell'art. 1137 c.c. Decorso questo termine, la delibera diventa definitiva e non più contestabile se affetta da semplici vizi di annullabilità. Restano impugnabili senza limiti di tempo le delibere nulle (oggetto impossibile, illecito, mancanza dei requisiti essenziali, lesione di diritti soggettivi del singolo). In sede di opposizione a decreto ingiuntivo si può eccepire la nullità in via incidentale. La semplice 'eccessività' delle spese, in assenza di vizi specifici, non è di per sé causa di annullamento.",
        },
        {
          q: "Le spese legali del condominio sono sempre dovute dal moroso?",
          a: "Le spese legali del giudizio seguono il principio della soccombenza ex art. 91 c.p.c.: se il condomino moroso perde il giudizio di opposizione, è condannato al pagamento delle spese legali del condominio, liquidate dal giudice secondo i parametri del DM 55/2014. Anche in caso di mancata opposizione, le spese del procedimento monitorio (decreto ingiuntivo) sono comprese nel decreto e sono dovute integralmente dal debitore. Le spese stragiudiziali (solleciti, consulenza legale anteriore al ricorso) sono di norma a carico del condominio, salvo specifica previsione regolamentare o assembleare che le ponga a carico del moroso.",
        },
      ],
    },
    {
      type: "h2",
      text: "Conclusioni operative",
      id: "conclusioni",
    },
    {
      type: "p",
      text: "Il sistema di tutela del credito condominiale è uno dei più incisivi dell'ordinamento civile: decreto ingiuntivo provvisoriamente esecutivo, sospensione dei servizi comuni, ipoteca giudiziale, solidarietà del nuovo acquirente costituiscono un arsenale di strumenti che rendono il recupero molto più rapido rispetto al contenzioso ordinario. Per il condomino moroso, il margine di manovra esiste, ma richiede tempestività: il tempo è la variabile decisiva, sia per la negoziazione di un piano di rientro sia per l'eventuale accesso a una procedura di sovraindebitamento.",
    },
    {
      type: "p",
      text: "Sul piano operativo, il debitore che voglia gestire correttamente la propria posizione deve: verificare la documentazione, valutare la fondatezza della pretesa, esplorare la possibilità di una rateizzazione, considerare se il debito condominiale faccia parte di un quadro di insolvenza più ampio. In caso positivo, l'accesso a una procedura di sovraindebitamento offre la soluzione strutturale; in caso negativo, l'accordo diretto con l'amministratore resta la via più rapida ed economica.",
    },
    {
      type: "p",
      text: "Per l'amministratore, invece, l'azione di recupero deve rispettare scrupolosamente i passaggi procedurali: delibera approvativa valida, sollecito formale, decreto ingiuntivo, esecuzione coattiva. La diligenza professionale richiesta dall'art. 1130 c.c. impone rapidità ma anche rigore: ogni errore procedurale può tradursi in opposizioni vittoriose del debitore e in responsabilità professionale verso il condominio amministrato.",
    },
  ],
};
