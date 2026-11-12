// Local SEO data for the office cities. NAP (name/address/phone) mirrors the
// LegalService schema in index.html. Geo coordinates are approximate to the
// street address (fine for schema.org; refine with exact values if available).

export type City = {
  slug: "napoli" | "torino";
  name: string;
  province: string; // sigla, es. NA
  region: string; // es. Campania
  streetAddress: string;
  postalCode: string;
  lat: number;
  lng: number;
  tribunale: string;
  /** Comuni/aree limitrofe servite, per areaServed + testo locale. */
  areaServed: string[];
  intro: string;
  local: string; // paragrafo su tribunale/procedura locale
  /** Corte di Giustizia Tributaria di primo grado competente. */
  corteTributaria: string;
  /** Dove si incardina ciascun tipo di procedura, per orientare chi cerca in zona. */
  competenze: { materia: string; ufficio: string; nota: string }[];
  /** Situazioni ricorrenti in zona: è il testo che intercetta le ricerche locali. */
  contesto: string;
  /** Quartieri e comuni da cui arrivano gli assistiti, per la copertura locale. */
  zone: string[];
  faq: { q: string; a: string }[];
};

// Numeri di studio (validi per tutte le sedi).
export const PHONE_MAIN = "+39-081-18671862";
export const PHONE_MOBILE = "+39-338-6115394";
export const EMAIL = "info@studioavvocatorossi.it";
export const OPENING_HOURS = "Mo-Fr 09:00-18:00";

// Profili ufficiali (sameAs) — usati negli schema per il collegamento di entità.
export const SOCIAL_FACEBOOK = "https://www.facebook.com/profile.php?id=100083355054982";
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/in/armando-rossi-0378083b/";
export const SOCIAL_GOOGLE = "https://share.google/ijClkBdvw3xSHS4w";
export const SOCIAL_YOUTUBE = "https://www.youtube.com/@TutelaDebitoTorino";
export const SAME_AS = [SOCIAL_FACEBOOK, SOCIAL_LINKEDIN, SOCIAL_YOUTUBE, SOCIAL_GOOGLE];

export const CITIES: Record<City["slug"], City> = {
  napoli: {
    slug: "napoli",
    name: "Napoli",
    province: "NA",
    region: "Campania",
    streetAddress: "Via M. Cervantes 55/5",
    postalCode: "80133",
    lat: 40.8395,
    lng: 14.251,
    tribunale: "Tribunale di Napoli",
    areaServed: ["Napoli", "Casoria", "Pozzuoli", "Giugliano in Campania", "Torre del Greco", "Provincia di Napoli", "Caserta", "Salerno"],
    intro:
      "Il nostro studio legale a Napoli assiste privati, famiglie e imprese sovraindebitate del capoluogo campano e della sua provincia. Ci occupiamo di esdebitazione, sovraindebitamento (L. 3/2012 e Codice della Crisi), opposizione a cartelle esattoriali e pignoramenti, crisi d'impresa e contenzioso tributario, con un colloquio di diagnosi iniziale riservato.",
    local:
      "Le procedure di sovraindebitamento per i residenti a Napoli e provincia si incardinano presso il Tribunale di Napoli, davanti al giudice competente per le procedure di composizione della crisi da sovraindebitamento. La domanda è predisposta con l'ausilio di un OCC (Organismo di Composizione della Crisi) e presentata con la relazione particolareggiata. Conoscere prassi e tempi del foro di Napoli permette di impostare la strategia in modo realistico fin dal primo colloquio.",
    corteTributaria: "Corte di Giustizia Tributaria di primo grado di Napoli",
    competenze: [
      { materia: "Sovraindebitamento ed esdebitazione", ufficio: "Tribunale di Napoli", nota: "La competenza segue la residenza del debitore: chi risiede a Napoli o nel circondario deposita qui." },
      { materia: "Opposizione a decreto ingiuntivo", ufficio: "Tribunale di Napoli", nota: "Si propone davanti allo stesso ufficio che ha emesso il decreto, entro quaranta giorni dalla notifica." },
      { materia: "Pignoramento presso terzi", ufficio: "Tribunale di Napoli", nota: "Per il debitore privato la competenza è del tribunale del luogo di residenza (art. 26-bis c.p.c.)." },
      { materia: "Esecuzione immobiliare", ufficio: "Tribunale del luogo in cui si trova l'immobile", nota: "Se l'immobile è nel circondario di Napoli la procedura resta qui, anche se il debitore si trasferisce altrove." },
      { materia: "Ricorsi tributari", ufficio: "Corte di Giustizia Tributaria di primo grado di Napoli", nota: "Termine di sessanta giorni dalla notifica dell'atto, con deposito telematico." },
      { materia: "Crisi d'impresa", ufficio: "Tribunale di Napoli, sezione imprese", nota: "Composizione negoziata, concordato preventivo e liquidazione giudiziale per le imprese con sede nel circondario." },
    ],
    contesto:
      "A Napoli e in provincia le situazioni che ci vengono portate più spesso hanno tre origini ricorrenti: l'esposizione verso l'Agenzia delle Entrate-Riscossione accumulata da partite IVA e piccole imprese, il credito al consumo delle famiglie — prestiti personali, cessioni del quinto e carte revolving sommati fra loro — e le garanzie personali prestate da soci e familiari per attività poi chiuse. Sono percorsi diversi che arrivano allo stesso punto: una rata complessiva superiore a quanto il reddito consente di sostenere.",
    zone: ["Chiaia", "Vomero", "Fuorigrotta", "Posillipo", "Centro storico", "Poggioreale", "Casoria", "Pozzuoli", "Giugliano in Campania", "Torre del Greco", "Castellammare di Stabia", "Afragola"],
    faq: [
      {
        q: "Dove si trova lo studio a Napoli?",
        a: "Lo studio è in Via M. Cervantes 55/5, 80133 Napoli. Riceviamo su appuntamento: puoi prenotare la prima diagnosi telefonicamente, via WhatsApp o dal modulo di contatto.",
      },
      {
        q: "Quale tribunale è competente per il sovraindebitamento a Napoli?",
        a: "Per i residenti a Napoli e provincia la procedura si svolge presso il Tribunale di Napoli, sezione competente per le procedure di sovraindebitamento previste dal Codice della Crisi (D.lgs. 14/2019).",
      },
      {
        q: "Assistete anche chi vive in provincia di Napoli o in Campania?",
        a: "Sì. Seguiamo assistiti di Napoli città e dell'intera provincia (Casoria, Pozzuoli, Giugliano, Torre del Greco e altri comuni), oltre a Caserta e Salerno per le materie di nostra competenza.",
      },
      {
        q: "Devo per forza venire in studio a Napoli?",
        a: "No. Il primo colloquio può svolgersi in videocollegamento e gran parte della pratica si gestisce da remoto, con firma digitale sui documenti. La presenza in studio è utile al primo incontro, quando si esamina insieme la documentazione, e nei passaggi in cui serve un confronto diretto.",
      },
      {
        q: "Quanto costa la prima diagnosi?",
        a: "Il primo colloquio e la valutazione iniziale della posizione sono gratuiti. I costi successivi dipendono dalla procedura attivata e vengono comunicati per iscritto con un preventivo prima di qualunque incarico, comprensivo di spese vive: contributo unificato, bolli e compensi dell'OCC quando la procedura lo richiede.",
      },
      {
        q: "Ho debiti a Napoli ma vivo all'estero: potete assistermi?",
        a: "Sì, ma la competenza territoriale va verificata caso per caso. Per le procedure di sovraindebitamento rileva la residenza del debitore; per le esecuzioni immobiliari il luogo dell'immobile, che resta il Tribunale di Napoli se il bene è nel circondario. È una delle prime cose che chiariamo nel colloquio iniziale.",
      },
    ],
  },
  torino: {
    slug: "torino",
    name: "Torino",
    province: "TO",
    region: "Piemonte",
    streetAddress: "Corso Trapani 136",
    postalCode: "10141",
    lat: 45.0713,
    lng: 7.6392,
    tribunale: "Tribunale di Torino",
    areaServed: ["Torino", "Moncalieri", "Rivoli", "Collegno", "Settimo Torinese", "Provincia di Torino", "Asti", "Cuneo"],
    intro:
      "Il nostro studio legale a Torino assiste privati, famiglie e imprese del capoluogo piemontese e della provincia nella soluzione dei debiti: esdebitazione, sovraindebitamento, opposizione a cartelle e pignoramenti, crisi d'impresa e contenzioso tributario. Si parte sempre da un colloquio di diagnosi riservato della posizione debitoria.",
    local:
      "Per i residenti a Torino e provincia le procedure di sovraindebitamento si svolgono presso il Tribunale di Torino, davanti al giudice competente per la composizione della crisi da sovraindebitamento. La domanda viene predisposta con un OCC e corredata dalla relazione particolareggiata: conoscere le prassi del foro torinese consente di impostare tempi e strategia in modo concreto.",
    corteTributaria: "Corte di Giustizia Tributaria di primo grado di Torino",
    competenze: [
      { materia: "Sovraindebitamento ed esdebitazione", ufficio: "Tribunale di Torino", nota: "La competenza segue la residenza del debitore: chi risiede a Torino o nel circondario deposita qui." },
      { materia: "Opposizione a decreto ingiuntivo", ufficio: "Tribunale di Torino", nota: "Si propone davanti allo stesso ufficio che ha emesso il decreto, entro quaranta giorni dalla notifica." },
      { materia: "Pignoramento presso terzi", ufficio: "Tribunale di Torino", nota: "Per il debitore privato la competenza è del tribunale del luogo di residenza (art. 26-bis c.p.c.)." },
      { materia: "Esecuzione immobiliare", ufficio: "Tribunale del luogo in cui si trova l'immobile", nota: "Se l'immobile è nel circondario di Torino la procedura resta qui, anche se il debitore si trasferisce altrove." },
      { materia: "Ricorsi tributari", ufficio: "Corte di Giustizia Tributaria di primo grado di Torino", nota: "Termine di sessanta giorni dalla notifica dell'atto, con deposito telematico." },
      { materia: "Crisi d'impresa", ufficio: "Tribunale di Torino, sezione imprese", nota: "Composizione negoziata, concordato preventivo e liquidazione giudiziale per le imprese del circondario." },
    ],
    contesto:
      "Sul territorio torinese una quota rilevante delle posizioni che seguiamo nasce dall'indotto manifatturiero: piccole imprese e ditte individuali con debiti verso fornitori e contributi INPS arretrati, spesso accompagnati da garanzie personali del titolare. Sul versante delle famiglie prevalgono invece le esposizioni da credito al consumo e le cessioni del quinto stratificate negli anni, dove il primo lavoro utile è ricostruire quanto è stato realmente pagato.",
    zone: ["Centro", "Crocetta", "San Salvario", "Santa Rita", "Mirafiori", "Barriera di Milano", "Moncalieri", "Rivoli", "Collegno", "Nichelino", "Settimo Torinese", "Chieri"],
    faq: [
      {
        q: "Dove si trova lo studio a Torino?",
        a: "Lo studio è in Corso Trapani 136, 10141 Torino. Si riceve su appuntamento: prenota la prima diagnosi per telefono, WhatsApp o dal modulo di contatto.",
      },
      {
        q: "Quale tribunale è competente per il sovraindebitamento a Torino?",
        a: "Per chi risiede a Torino e provincia la procedura si incardina presso il Tribunale di Torino, competente per le procedure di sovraindebitamento del Codice della Crisi.",
      },
      {
        q: "Assistete anche chi vive in provincia di Torino o in Piemonte?",
        a: "Sì. Seguiamo assistiti di Torino città e provincia (Moncalieri, Rivoli, Collegno, Settimo e altri comuni), oltre ad Asti e Cuneo per le materie di nostra competenza.",
      },
      {
        q: "Devo per forza venire in studio a Torino?",
        a: "No. Il primo colloquio può svolgersi in videocollegamento e gran parte della pratica si gestisce da remoto, con firma digitale sui documenti. L'incontro in sede resta utile all'inizio, per esaminare insieme la documentazione.",
      },
      {
        q: "Ho una ditta individuale con debiti INPS: quale procedura mi riguarda?",
        a: "Dipende dalle soglie dimensionali. L'imprenditore che non è assoggettabile a liquidazione giudiziale rientra nelle procedure di sovraindebitamento — tipicamente concordato minore o liquidazione controllata — mentre sopra le soglie si guarda agli strumenti del Codice della Crisi per le imprese. La verifica delle soglie è il primo passaggio tecnico.",
      },
      {
        q: "Ho più cessioni del quinto sommate negli anni: cosa si può fare?",
        a: "Il primo lavoro è ricostruire quanto è stato effettivamente pagato e quali costi siano stati addebitati, perché in caso di estinzione anticipata vanno restituiti i costi non maturati. Solo dopo si valuta se la posizione complessiva sia sostenibile o se convenga una procedura di sovraindebitamento che la tratti insieme agli altri debiti.",
      },
    ],
  },
};

export const CITY_SLUGS: City["slug"][] = ["napoli", "torino"];
