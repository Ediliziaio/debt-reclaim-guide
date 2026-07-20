// Local SEO data for the office cities. NAP (name/address/phone) mirrors the
// LegalService schema in index.html. Geo coordinates are approximate to the
// street address (fine for schema.org; refine with exact values if available).

export type City = {
  slug: "napoli" | "milano" | "torino";
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
    ],
  },
  milano: {
    slug: "milano",
    name: "Milano",
    province: "MI",
    region: "Lombardia",
    streetAddress: "Via R. Boscovich 14",
    postalCode: "20124",
    lat: 45.4808,
    lng: 9.2065,
    tribunale: "Tribunale di Milano",
    areaServed: ["Milano", "Monza", "Sesto San Giovanni", "Rho", "Legnano", "Provincia di Milano", "Monza e Brianza", "Bergamo"],
    intro:
      "Il nostro studio legale a Milano affianca privati, professionisti e imprese della città e dell'hinterland lombardo nella gestione dei debiti: esdebitazione, sovraindebitamento, composizione negoziata della crisi d'impresa, opposizione a pignoramenti e contenzioso tributario. La prima diagnosi della posizione è riservata e senza impegno.",
    local:
      "A Milano le procedure di sovraindebitamento e le composizioni della crisi d'impresa si trattano presso il Tribunale di Milano, uno dei fori più strutturati d'Italia per la materia concorsuale. La collaborazione con un OCC e la corretta predisposizione della documentazione sono decisive per rispettare tempi e prassi del tribunale ambrosiano, sia per i privati sia per le imprese in continuità.",
    faq: [
      {
        q: "Dove si trova lo studio a Milano?",
        a: "Lo studio è in Via R. Boscovich 14, 20124 Milano, in zona Stazione Centrale. Si riceve su appuntamento: prenota la prima diagnosi per telefono, WhatsApp o modulo di contatto.",
      },
      {
        q: "Quale tribunale è competente per il sovraindebitamento a Milano?",
        a: "Per i residenti a Milano e provincia la procedura si incardina presso il Tribunale di Milano, competente per le procedure di sovraindebitamento e per la crisi d'impresa.",
      },
      {
        q: "Seguite anche le imprese in crisi a Milano?",
        a: "Sì. Assistiamo imprese e professionisti dell'area milanese nella composizione negoziata della crisi, nel concordato minore e nelle altre procedure del Codice della Crisi, oltre ai privati sovraindebitati.",
      },
    ],
  },
  torino: {
    slug: "torino",
    name: "Torino",
    province: "TO",
    region: "Piemonte",
    streetAddress: "Corso Vittorio Emanuele II 168",
    postalCode: "10138",
    lat: 45.0678,
    lng: 7.654,
    tribunale: "Tribunale di Torino",
    areaServed: ["Torino", "Moncalieri", "Rivoli", "Collegno", "Settimo Torinese", "Provincia di Torino", "Asti", "Cuneo"],
    intro:
      "Il nostro studio legale a Torino assiste privati, famiglie e imprese del capoluogo piemontese e della provincia nella soluzione dei debiti: esdebitazione, sovraindebitamento, opposizione a cartelle e pignoramenti, crisi d'impresa e contenzioso tributario. Si parte sempre da un colloquio di diagnosi riservato della posizione debitoria.",
    local:
      "Per i residenti a Torino e provincia le procedure di sovraindebitamento si svolgono presso il Tribunale di Torino, davanti al giudice competente per la composizione della crisi da sovraindebitamento. La domanda viene predisposta con un OCC e corredata dalla relazione particolareggiata: conoscere le prassi del foro torinese consente di impostare tempi e strategia in modo concreto.",
    faq: [
      {
        q: "Dove si trova lo studio a Torino?",
        a: "Lo studio è in Corso Vittorio Emanuele II 168, 10138 Torino. Si riceve su appuntamento: prenota la prima diagnosi per telefono, WhatsApp o dal modulo di contatto.",
      },
      {
        q: "Quale tribunale è competente per il sovraindebitamento a Torino?",
        a: "Per chi risiede a Torino e provincia la procedura si incardina presso il Tribunale di Torino, competente per le procedure di sovraindebitamento del Codice della Crisi.",
      },
      {
        q: "Assistete anche chi vive in provincia di Torino o in Piemonte?",
        a: "Sì. Seguiamo assistiti di Torino città e provincia (Moncalieri, Rivoli, Collegno, Settimo e altri comuni), oltre ad Asti e Cuneo per le materie di nostra competenza.",
      },
    ],
  },
};

export const CITY_SLUGS: City["slug"][] = ["napoli", "milano", "torino"];
