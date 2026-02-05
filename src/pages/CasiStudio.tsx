import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { 
  Home, Building2, Receipt, Briefcase, User, Store, Factory, Landmark, FileText,
  ArrowRight, TrendingDown, Calendar, Clock, CheckCircle2, Quote, ArrowLeft, Filter,
  Scale, BookOpen, ChevronDown, ChevronUp, Shield, Users, Gavel
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import OptimizedImage from "@/components/ui/optimized-image";
import rfLogo from "@/assets/rf-logo-new.png";
import authorityImage from "@/assets/authority-legal.jpg";
import ctaImage from "@/assets/cta-handshake.jpg";

interface CaseStudy {
  id: number;
  icon: React.ElementType;
  category: "privato" | "impresa" | "fiscale";
  title: string;
  location: string;
  debtAmount: number;
  debtType: string;
  situation: string;
  consequences: string[];
  legalFramework: {
    law: string;
    procedure: string;
    requirements: string[];
  };
  process: {
    phase: string;
    description: string;
  }[];
  results: {
    reduction: number;
    finalAmount: number;
    monthlyPayment: string;
    duration: string;
    additionalBenefits: string[];
  };
  timeline: string;
  testimonial: {
    quote: string;
    name: string;
    city: string;
  };
}

const caseStudies: CaseStudy[] = [
  // PRIVATI - 4 casi
  {
    id: 1,
    icon: Home,
    category: "privato",
    title: "Famiglia con Sovraindebitamento da Mutuo e Prestiti",
    location: "Milano",
    debtAmount: 240000,
    debtType: "Mutuo Ipotecario + Prestiti Personali + Carte Revolving",
    situation: "Coppia con due figli minori, mutuo ipotecario con residuo di €180.000, quattro prestiti personali per complessivi €45.000 contratti per sostenere spese mediche e scolastiche, e due carte revolving con esposizione di €15.000. Il reddito familiare era sceso del 40% a causa della cassa integrazione del capofamiglia, impiegato nel settore automotive.",
    consequences: [
      "Pignoramento di 1/5 dello stipendio già in corso",
      "Preavviso di esecuzione immobiliare sulla prima casa",
      "Segnalazione in CRIF con impossibilità di accesso al credito",
      "Rate mensili complessive superiori al 70% del reddito disponibile"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Piano del Consumatore ex art. 67 e ss. CCI",
      requirements: [
        "Qualifica di consumatore (debiti non derivanti da attività d'impresa)",
        "Situazione di sovraindebitamento oggettivo",
        "Meritevolezza del debitore",
        "Assenza di atti in frode ai creditori"
      ]
    },
    process: [
      { phase: "Analisi Documentale", description: "Raccolta completa della documentazione: estratti conto, contratti di finanziamento, dichiarazioni dei redditi, visure ipotecarie. Verifica della capienza reddituale residua." },
      { phase: "Nomina OCC", description: "Presentazione istanza al Tribunale per nomina dell'Organismo di Composizione della Crisi. L'OCC ha verificato i requisiti e la meritevolezza." },
      { phase: "Redazione Piano", description: "Elaborazione del piano di ristrutturazione con proposta ai creditori: pagamento del 30% del debito complessivo in 60 rate mensili." },
      { phase: "Deposito e Udienza", description: "Deposito del piano presso il Tribunale. Udienza di omologa con parere favorevole dell'OCC." },
      { phase: "Omologa", description: "Il Tribunale ha omologato il piano, rendendo vincolante l'accordo per tutti i creditori." }
    ],
    results: {
      reduction: 70,
      finalAmount: 72000,
      monthlyPayment: "€1.200",
      duration: "5 anni",
      additionalBenefits: [
        "Blocco immediato del pignoramento stipendiale",
        "Sospensione della procedura esecutiva immobiliare",
        "Casa di proprietà definitivamente salvata",
        "Cancellazione dalla CRIF post-procedura"
      ]
    },
    timeline: "7 mesi dalla prima consulenza all'omologa",
    testimonial: {
      quote: "Quando ci hanno notificato il pignoramento della casa, pensavamo fosse finita. Non dormivamo più, i bambini percepivano la tensione. Grazie alla procedura abbiamo salvato tutto: la casa, la dignità, il futuro dei nostri figli. Oggi paghiamo una rata sostenibile e guardiamo avanti.",
      name: "Marco e Silvia R.",
      city: "Milano"
    }
  },
  {
    id: 2,
    icon: User,
    category: "privato",
    title: "Pensionato con Debiti da Cessione del Quinto",
    location: "Torino",
    debtAmount: 52000,
    debtType: "Cessioni del Quinto Stratificate + Prestiti Personali",
    situation: "Pensionato di 68 anni con pensione netta di €1.400 mensili. Aveva contratto tre cessioni del quinto in momenti diversi per aiutare economicamente i figli in difficoltà, oltre a due prestiti personali. La situazione era diventata insostenibile con trattenute che superavano il massimo consentito per legge.",
    consequences: [
      "Trattenute sulla pensione pari a €700/mese (50% del netto)",
      "Difficoltà a coprire le spese essenziali di vita",
      "Richiesta di pignoramento del TFR residuo",
      "Stato di prostrazione psicologica e isolamento sociale"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Liquidazione Controllata del Sovraindebitato ex art. 268 e ss. CCI",
      requirements: [
        "Patrimonio insufficiente a soddisfare integralmente i creditori",
        "Buona fede del debitore",
        "Cooperazione con l'OCC nella fase di liquidazione"
      ]
    },
    process: [
      { phase: "Valutazione Patrimoniale", description: "Inventario completo del patrimonio: auto usata di modesto valore, piccolo conto corrente, nessun immobile di proprietà." },
      { phase: "Istanza di Liquidazione", description: "Presentazione dell'istanza per l'apertura della procedura di liquidazione controllata." },
      { phase: "Nomina Liquidatore", description: "Il Tribunale ha nominato un liquidatore che ha proceduto alla vendita del patrimonio disponibile." },
      { phase: "Riparto ai Creditori", description: "Distribuzione del ricavato (€8.000) ai creditori in proporzione ai rispettivi crediti." },
      { phase: "Esdebitazione", description: "Ottenimento dell'esdebitazione per il debito residuo non soddisfatto." }
    ],
    results: {
      reduction: 85,
      finalAmount: 8000,
      monthlyPayment: "Pagamento unico",
      duration: "5 mesi",
      additionalBenefits: [
        "Pensione integrale ripristinata",
        "Cancellazione di €44.000 di debito residuo",
        "Fine delle trattenute automatiche",
        "Ritrovata serenità in età avanzata"
      ]
    },
    timeline: "5 mesi dalla prima consulenza all'esdebitazione",
    testimonial: {
      quote: "A 68 anni mi vergognavo di non riuscire a pagare i debiti che avevo fatto per i miei figli. Mi sentivo un peso per tutti. L'esdebitazione mi ha restituito la dignità e la mia pensione. Finalmente posso vivere tranquillo i miei ultimi anni.",
      name: "Giovanni P.",
      city: "Torino"
    }
  },
  {
    id: 3,
    icon: Briefcase,
    category: "privato",
    title: "Ex Imprenditore con Debiti Residui Post-Chiusura",
    location: "Napoli",
    debtAmount: 158000,
    debtType: "Debiti Bancari + Fornitori + Contributi INPS",
    situation: "Ex titolare di una SNC nel settore della ristorazione, cessata a seguito della crisi COVID. Debiti residui verso istituti bancari per €95.000, fornitori per €35.000 e contributi INPS non versati per €28.000. Ora dipendente con stipendio netto di €1.600 mensili, con moglie e un figlio a carico.",
    consequences: [
      "Cartelle esattoriali per i contributi con minaccia di fermo amministrativo",
      "Decreto ingiuntivo bancario in fase di esecuzione",
      "Impossibilità di ottenere nuovi finanziamenti o carte di credito",
      "Rischio di pignoramento dello stipendio attuale"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Concordato Minore ex art. 74 e ss. CCI",
      requirements: [
        "Essere soggetto sovraindebitato non fallibile",
        "Proposta che assicuri il pagamento di almeno il 10% ai chirografari",
        "Approvazione dei creditori che rappresentino almeno il 50% dei crediti"
      ]
    },
    process: [
      { phase: "Analisi Posizione Debitoria", description: "Ricognizione completa dei debiti residui post-cessazione attività, con verifica della natura privilegiata o chirografaria di ciascun credito." },
      { phase: "Elaborazione Proposta", description: "Redazione della proposta di concordato minore con pagamento del 35% ai creditori chirografari e 100% ai privilegiati in 4 anni." },
      { phase: "Votazione Creditori", description: "I creditori rappresentanti oltre il 60% dei crediti hanno votato favorevolmente alla proposta." },
      { phase: "Omologa Tribunale", description: "Il Tribunale ha omologato il concordato, confermando la fattibilità del piano." }
    ],
    results: {
      reduction: 65,
      finalAmount: 55300,
      monthlyPayment: "€1.150",
      duration: "4 anni",
      additionalBenefits: [
        "Blocco di tutte le azioni esecutive",
        "Nessun pignoramento dello stipendio",
        "Regolarizzazione della posizione INPS",
        "Possibilità di ripartire con nuova attività in futuro"
      ]
    },
    timeline: "9 mesi dalla prima consulenza all'omologa",
    testimonial: {
      quote: "La chiusura del ristorante mi aveva lasciato con un peso enorme. Non vedevo via d'uscita e temevo di trascinare nel baratro anche la mia nuova vita da dipendente. Il concordato minore mi ha permesso di chiudere con il passato e guardare avanti con la mia famiglia.",
      name: "Antonio L.",
      city: "Napoli"
    }
  },
  {
    id: 4,
    icon: Users,
    category: "privato",
    title: "Garante/Fideiussore di Azienda Fallita",
    location: "Verona",
    debtAmount: 150000,
    debtType: "Fideiussione Bancaria Escussa",
    situation: "Socio di minoranza e fideiussore per €150.000 di un finanziamento bancario concesso alla SRL di cui era dipendente. L'azienda è fallita e la banca ha escusso la garanzia personale. Stipendio da dipendente (nuova azienda) di €1.800/mese, nessun patrimonio immobiliare, auto di modesto valore.",
    consequences: [
      "Decreto ingiuntivo esecutivo per l'intero importo della fideiussione",
      "Pignoramento di 1/5 dello stipendio già notificato",
      "Impossibilità di accedere a qualsiasi forma di credito",
      "Vita familiare gravemente compromessa dal debito"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Piano del Consumatore ex art. 67 e ss. CCI (Rito del Consumatore per debito da fideiussione)",
      requirements: [
        "Dimostrazione che il debito non deriva da attività imprenditoriale propria",
        "Meritevolezza: assenza di colpa nella gestione che ha portato al fallimento",
        "Piano sostenibile con le risorse disponibili"
      ]
    },
    process: [
      { phase: "Verifica Meritevolezza", description: "Analisi della posizione del fideiussore: socio di minoranza senza poteri gestori, dipendente dell'azienda. Nessuna responsabilità nella gestione che ha portato al fallimento." },
      { phase: "Redazione Piano", description: "Proposta di pagamento di €30.000 (20% del debito) in 84 rate mensili, compatibile con il reddito disponibile." },
      { phase: "Attestazione OCC", description: "L'OCC ha attestato la meritevolezza del debitore e la fattibilità del piano proposto." },
      { phase: "Omologa", description: "Il Tribunale ha omologato il piano, liberando il fideiussore dal debito residuo." }
    ],
    results: {
      reduction: 80,
      finalAmount: 30000,
      monthlyPayment: "€360",
      duration: "7 anni",
      additionalBenefits: [
        "Liberazione dalla fideiussione residua di €120.000",
        "Sblocco immediato del pignoramento stipendiale",
        "Cancellazione dalla Centrale Rischi post-procedura",
        "Possibilità di tornare ad avere un normale rapporto con le banche"
      ]
    },
    timeline: "8 mesi dalla prima consulenza all'omologa",
    testimonial: {
      quote: "Ho firmato quella fideiussione per aiutare l'azienda dove lavoravo da 15 anni. Mai avrei pensato di dover pagare €150.000 per il fallimento di altri. La procedura mi ha liberato da un peso che non mi faceva più vivere. Oggi respiro.",
      name: "Roberto F.",
      city: "Verona"
    }
  },
  // IMPRESE - 3 casi
  {
    id: 5,
    icon: Factory,
    category: "impresa",
    title: "SRL Manifatturiera in Crisi di Liquidità",
    location: "Bologna",
    debtAmount: 780000,
    debtType: "Debiti Bancari + Fornitori + Erario",
    situation: "SRL operante nel settore metalmeccanico con 15 dipendenti e fatturato di €2M annui. La perdita improvvisa del cliente principale (40% del fatturato) ha generato una crisi di liquidità. Debiti bancari per €480.000, verso fornitori per €180.000 ed Erario per €120.000. L'azienda era ancora operativa ma non riusciva a far fronte alle scadenze.",
    consequences: [
      "Protesti cambiari e segnalazione in Centrale Rischi",
      "Fornitori chiave che minacciavano l'interruzione delle forniture",
      "Cartelle esattoriali con fermo amministrativo sui veicoli aziendali",
      "Rischio di istanza di fallimento da parte di creditori"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Concordato Preventivo in Continuità Aziendale ex art. 84 e ss. CCI",
      requirements: [
        "Stato di crisi o insolvenza reversibile",
        "Piano industriale che dimostri la sostenibilità della continuità",
        "Attestazione di un professionista indipendente",
        "Approvazione dei creditori"
      ]
    },
    process: [
      { phase: "Due Diligence Aziendale", description: "Analisi approfondita della situazione economico-finanziaria, mappatura dei creditori, valutazione degli asset e del piano industriale." },
      { phase: "Piano di Risanamento", description: "Elaborazione del piano industriale con nuova strategia commerciale: diversificazione clienti e riduzione costi strutturali." },
      { phase: "Attestazione", description: "Un professionista indipendente ha attestato la veridicità dei dati e la fattibilità del piano di continuità." },
      { phase: "Proposta ai Creditori", description: "Proposta di pagamento: 45% ai chirografari in 4 anni, 100% ai privilegiati." },
      { phase: "Votazione e Omologa", description: "I creditori hanno approvato la proposta a maggioranza. Il Tribunale ha omologato il concordato." }
    ],
    results: {
      reduction: 45,
      finalAmount: 429000,
      monthlyPayment: "Rate trimestrali",
      duration: "4 anni",
      additionalBenefits: [
        "Continuità aziendale garantita",
        "Tutti i 15 dipendenti mantenuti",
        "Sblocco dei veicoli aziendali",
        "Nuova linea di credito bancaria post-omologa",
        "Ripresa delle forniture dai fornitori chiave"
      ]
    },
    timeline: "14 mesi dall'avvio alla chiusura della procedura",
    testimonial: {
      quote: "L'azienda era il lavoro di tre generazioni. Quando il nostro cliente principale ci ha lasciati, sembrava la fine. Il concordato in continuità ci ha permesso di ristrutturarci, trovare nuovi clienti e salvare tutti i posti di lavoro. Oggi l'azienda è più solida di prima.",
      name: "Paolo B.",
      city: "Bologna"
    }
  },
  {
    id: 6,
    icon: Store,
    category: "impresa",
    title: "Ristorante con Debiti Post-COVID",
    location: "Firenze",
    debtAmount: 152000,
    debtType: "Fornitori + Affitti Arretrati + Finanziamenti + INPS",
    situation: "Ristorante storico nel centro di Firenze con 6 dipendenti. La chiusura forzata durante il COVID e la successiva lenta ripresa avevano generato: debiti verso fornitori per €65.000, affitti arretrati per €24.000, prestito bancario per €45.000 e contributi INPS non versati per €18.000.",
    consequences: [
      "Minaccia di sfratto per morosità da parte del proprietario",
      "Fornitori che esigevano pagamenti a vista",
      "Impossibilità di accedere a nuovi finanziamenti",
      "Cartelle INPS con rischio di fermo amministrativo"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Accordo di Ristrutturazione dei Debiti ex art. 57 CCI",
      requirements: [
        "Accordo con creditori che rappresentino almeno il 60% dei crediti",
        "Attestazione di un professionista sulla fattibilità",
        "Regolare pagamento dei crediti estranei all'accordo"
      ]
    },
    process: [
      { phase: "Mappatura Creditori", description: "Identificazione di tutti i creditori con quantificazione precisa dei debiti e verifica della natura (privilegiata/chirografaria)." },
      { phase: "Negoziazione Diretta", description: "Trattative individuali con i principali creditori: proprietario dell'immobile, fornitori strategici, banca." },
      { phase: "Accordo Quadro", description: "Raggiungimento di accordi con creditori rappresentanti il 75% dei crediti: stralcio 50% chirografari, rinegoziazione affitto, moratoria bancaria." },
      { phase: "Attestazione e Deposito", description: "Attestazione del professionista e deposito dell'accordo presso il Tribunale." }
    ],
    results: {
      reduction: 50,
      finalAmount: 76000,
      monthlyPayment: "€2.100",
      duration: "3 anni",
      additionalBenefits: [
        "Rinegoziazione del contratto di locazione con canone ridotto del 25%",
        "Mantenimento dei rapporti con i fornitori chiave",
        "Salvaguardia di tutti i 6 posti di lavoro",
        "Attività rilanciata con nuovo concept gastronomico"
      ]
    },
    timeline: "6 mesi dalla prima consulenza alla pubblicazione dell'accordo",
    testimonial: {
      quote: "Il ristorante esiste dal 1975, lo ha fondato mio padre. Dopo il COVID ero pronto ad arrendermi. L'accordo di ristrutturazione ci ha dato il tempo e le condizioni per ripartire. Oggi lavoriamo meglio di prima del COVID.",
      name: "Francesca T.",
      city: "Firenze"
    }
  },
  {
    id: 7,
    icon: Building2,
    category: "impresa",
    title: "SAS Commerciale con Soci Garanti",
    location: "Vicenza",
    debtAmount: 415000,
    debtType: "Debiti Bancari (con garanzie personali) + Fornitori",
    situation: "SAS operante nel commercio all'ingrosso di prodotti alimentari. Debiti bancari per €320.000 assistiti da garanzie personali dei due soci, debiti verso fornitori per €95.000. La crisi del settore e la perdita di clienti chiave avevano reso impossibile la prosecuzione dell'attività. I soci, oltre alla società, rischiavano personalmente.",
    consequences: [
      "Escussione delle garanzie personali dei soci in corso",
      "Pignoramento dei beni personali dei soci (immobili, conti)",
      "Impossibilità di proseguire l'attività",
      "Rischio di fallimento con tutte le conseguenze personali"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Concordato Preventivo Liquidatorio ex art. 84 CCI + Esdebitazione Soci ex art. 278 CCI",
      requirements: [
        "Proposta di concordato con liquidazione di tutti gli asset",
        "Pagamento ai creditori almeno pari alla liquidazione fallimentare",
        "Per l'esdebitazione soci: requisiti di meritevolezza individuale"
      ]
    },
    process: [
      { phase: "Valutazione Asset", description: "Inventario e valutazione di tutti i beni aziendali: magazzino, attrezzature, crediti commerciali, avviamento." },
      { phase: "Piano Liquidatorio", description: "Elaborazione del piano di cessione controllata degli asset con stima di realizzo e proposta ai creditori: 35% ai chirografari." },
      { phase: "Concordato Società", description: "Approvazione del concordato liquidatorio da parte dei creditori e omologa del Tribunale." },
      { phase: "Esdebitazione Soci", description: "Contestuale presentazione delle istanze di esdebitazione per i soci persone fisiche, liberandoli dalle garanzie personali." }
    ],
    results: {
      reduction: 65,
      finalAmount: 145250,
      monthlyPayment: "Liquidazione",
      duration: "18 mesi per la liquidazione",
      additionalBenefits: [
        "Soci completamente liberati dalle garanzie personali",
        "Nessun pignoramento dei beni personali",
        "Cessazione ordinata dell'attività senza fallimento",
        "Possibilità per i soci di avviare nuove attività"
      ]
    },
    timeline: "18 mesi dall'avvio alla chiusura completa",
    testimonial: {
      quote: "Avevamo firmato fideiussioni per €320.000. Vedevamo sfumare tutto: la casa, i risparmi, il futuro. La procedura ha permesso di chiudere l'azienda in modo ordinato e, soprattutto, di liberarci dalle garanzie personali. È stata la nostra salvezza.",
      name: "Roberto e Franco V.",
      city: "Vicenza"
    }
  },
  // DEBITO FISCALE - 3 casi
  {
    id: 8,
    icon: Receipt,
    category: "fiscale",
    title: "Imprenditore Edile con Cartelle Esattoriali Multiple",
    location: "Roma",
    debtAmount: 380000,
    debtType: "IVA + IRPEF + Contributi INPS - Cartelle AER",
    situation: "Imprenditore edile con ditta individuale. Negli anni della crisi del settore (2012-2018) aveva accumulato cartelle esattoriali per IVA non versata, IRPEF, e contributi INPS per un totale di €380.000. La situazione era diventata paralizzante: conti pignorati, veicoli fermi, ipoteca sull'immobile aziendale.",
    consequences: [
      "Tutti i conti correnti aziendali e personali pignorati",
      "Veicoli aziendali con fermo amministrativo",
      "Ipoteca legale sull'immobile sede dell'attività",
      "Impossibilità di partecipare a gare d'appalto pubbliche (DURC irregolare)"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Transazione Fiscale ex art. 63 CCI nell'ambito del Concordato Preventivo",
      requirements: [
        "Proposta nell'ambito di una procedura concorsuale",
        "Pagamento integrale dell'IVA e delle ritenute (con possibilità di falcidia solo su sanzioni e interessi)",
        "Parere favorevole dell'Agenzia delle Entrate e dell'INPS"
      ]
    },
    process: [
      { phase: "Ricognizione del Debito", description: "Estratto di ruolo completo, verifica di ogni singola cartella, identificazione di eventuali vizi formali e sostanziali." },
      { phase: "Proposta Transattiva", description: "Elaborazione della proposta di transazione fiscale: pagamento del 30% del dovuto (capitale + interessi ridotti), stralcio di sanzioni e parte degli interessi." },
      { phase: "Parere degli Enti", description: "Presentazione della proposta all'Agenzia delle Entrate e all'INPS. Dopo analisi approfondita, entrambi hanno espresso parere favorevole." },
      { phase: "Omologa", description: "Il Tribunale ha omologato la transazione, rendendo vincolante l'accordo." }
    ],
    results: {
      reduction: 70,
      finalAmount: 114000,
      monthlyPayment: "€1.900",
      duration: "5 anni",
      additionalBenefits: [
        "Sblocco immediato di tutti i conti correnti",
        "Revoca del fermo amministrativo sui veicoli",
        "Cancellazione dell'ipoteca post-pagamento",
        "DURC regolare e possibilità di partecipare a gare",
        "Attività ripresa a pieno regime"
      ]
    },
    timeline: "12 mesi dalla prima consulenza all'omologa",
    testimonial: {
      quote: "Ero paralizzato. Non potevo lavorare, non potevo incassare, non potevo muovere i mezzi. La transazione fiscale mi ha ridato la vita. In 5 anni pagherò meno di un terzo di quello che dovevo, e nel frattempo posso lavorare normalmente.",
      name: "Giuseppe M.",
      city: "Roma"
    }
  },
  {
    id: 9,
    icon: Landmark,
    category: "fiscale",
    title: "Ex Partita IVA con Debito Contributivo INPS",
    location: "Bari",
    debtAmount: 78000,
    debtType: "Contributi INPS Gestione Commercianti",
    situation: "Ex commerciante che ha chiuso l'attività nel 2019. Debito contributivo verso l'INPS Gestione Commercianti per €78.000, accumulato tra il 2015 e il 2019. Numerose cartelle esattoriali, alcune delle quali già notificate come preavviso di pignoramento. Ora dipendente con stipendio netto di €1.500/mese.",
    consequences: [
      "Pignoramento di 1/5 dello stipendio già notificato",
      "Impossibilità di accedere alla pensione futura senza regolarizzazione",
      "Segnalazione CRIF con blocco del credito",
      "Ansia costante per le notifiche di nuove cartelle"
    ],
    legalFramework: {
      law: "D.Lgs. 14/2019 - Codice della Crisi d'Impresa e dell'Insolvenza",
      procedure: "Piano del Consumatore ex art. 67 e ss. CCI (il debito previdenziale è trattato come chirografario)",
      requirements: [
        "Qualifica di consumatore (non più attività d'impresa in corso)",
        "Il debito previdenziale è trattabile come credito chirografario",
        "Proposta sostenibile con il reddito da dipendente"
      ]
    },
    process: [
      { phase: "Analisi Cartelle", description: "Verifica di tutte le cartelle INPS: importi, periodi, eventuali decadenze o prescrizioni." },
      { phase: "Piano del Consumatore", description: "Presentazione del piano: pagamento del 25% del debito (€19.500) in 60 rate da €325." },
      { phase: "Attestazione OCC", description: "L'OCC ha attestato la fattibilità del piano e la meritevolezza del debitore." },
      { phase: "Omologa", description: "Il Tribunale ha omologato il piano, liberando il debitore per il 75% del debito." }
    ],
    results: {
      reduction: 75,
      finalAmount: 19500,
      monthlyPayment: "€325",
      duration: "5 anni",
      additionalBenefits: [
        "Blocco del pignoramento stipendiale",
        "Regolarizzazione della posizione contributiva",
        "Accesso futuro alla pensione garantito",
        "Fine dell'incubo delle cartelle"
      ]
    },
    timeline: "6 mesi dalla prima consulenza all'omologa",
    testimonial: {
      quote: "Quando ho chiuso il negozio pensavo di aver chiuso un capitolo. Invece le cartelle continuavano ad arrivare. €78.000 con uno stipendio da €1.500: impossibile. Il piano del consumatore mi ha liberato da un debito che non avrei mai potuto pagare.",
      name: "Lucia G.",
      city: "Bari"
    }
  },
  {
    id: 10,
    icon: Gavel,
    category: "fiscale",
    title: "Società con Avvisi di Accertamento Contestati",
    location: "Brescia",
    debtAmount: 280000,
    debtType: "IVA Contestata per Operazioni Inesistenti",
    situation: "SRL nel settore dei servizi che aveva ricevuto 3 avvisi di accertamento per complessivi €280.000 relativi a presunte operazioni inesistenti (fatture passive ritenute false dall'Amministrazione). Ricorsi pendenti presso la CTP, ma nel frattempo l'Agenzia aveva iscritto a ruolo le somme con fermo amministrativo sui veicoli aziendali.",
    consequences: [
      "Fermo amministrativo su tutti i veicoli aziendali",
      "Iscrizione di ipoteca sull'immobile aziendale",
      "Impossibilità di ottenere il DURC per partecipare a gare",
      "Blocco dell'operatività aziendale"
    ],
    legalFramework: {
      law: "D.Lgs. 218/1997 - Accertamento con Adesione + D.Lgs. 14/2019 CCI",
      procedure: "Accertamento con Adesione + eventuale Transazione Fiscale",
      requirements: [
        "Elementi per una rideterminazione dell'imponibile",
        "Disponibilità dell'Ufficio a negoziare",
        "Pagamento delle somme concordate"
      ]
    },
    process: [
      { phase: "Analisi Tecnica", description: "Studio approfondito degli accertamenti: verifica della documentazione, analisi delle contestazioni, individuazione dei punti deboli della pretesa erariale." },
      { phase: "Istanza di Adesione", description: "Presentazione delle istanze di accertamento con adesione per i 3 avvisi, producendo documentazione integrativa." },
      { phase: "Contraddittorio", description: "Incontri con l'Ufficio Accertatore: dimostrazione della regolarità di parte delle operazioni contestate." },
      { phase: "Accordo", description: "Rideterminazione dell'imponibile con riduzione del 55% della pretesa iniziale. Rateizzazione del dovuto." }
    ],
    results: {
      reduction: 55,
      finalAmount: 126000,
      monthlyPayment: "€2.625",
      duration: "4 anni",
      additionalBenefits: [
        "Sblocco immediato di tutti i veicoli aziendali",
        "Cancellazione dell'ipoteca a seguito del pagamento",
        "DURC regolare ripristinato",
        "Definizione di tutti i contenziosi pendenti"
      ]
    },
    timeline: "8 mesi dalla prima consulenza all'accordo definitivo",
    testimonial: {
      quote: "L'Agenzia ci contestava €280.000 per fatture che secondo loro erano false. Avevamo tutta la documentazione, ma intanto ci avevano bloccato tutto. L'accertamento con adesione ci ha permesso di dimostrare le nostre ragioni e ridurre drasticamente il dovuto.",
      name: "Marco e Stefano B.",
      city: "Brescia"
    }
  }
];

const categories = [
  { id: "tutti", label: "Tutti i Casi", icon: FileText },
  { id: "privato", label: "Privati", icon: User },
  { id: "impresa", label: "Imprese", icon: Building2 },
  { id: "fiscale", label: "Debito Fiscale", icon: Receipt },
];

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
};

const CasiStudio = () => {
  const [activeCategory, setActiveCategory] = useState("tutti");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });
  const { ref: casesRef, isInView: casesInView } = useInView({ threshold: 0.1 });
  const { ref: introRef, isInView: introInView } = useInView({ threshold: 0.2 });

  const totalCases = useAnimatedCounter({ end: 500, duration: 2000, isInView: statsInView });
  const avgReduction = useAnimatedCounter({ end: 65, duration: 2000, isInView: statsInView });
  const successRate = useAnimatedCounter({ end: 92, duration: 2000, isInView: statsInView });
  const totalValue = useAnimatedCounter({ end: 85, duration: 2000, isInView: statsInView });

  const filteredCases = activeCategory === "tutti" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Casi Risolti | RF Ristrutturazioni Debiti - Esdebitazione e Crisi d'Impresa</title>
        <meta name="description" content="Casi reali di esdebitazione e ristrutturazione del debito: privati, imprese e debiti fiscali. Procedure legali documentate con risultati concreti." />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs sm:text-sm hidden xs:inline">Torna al sito</span>
              </Link>
              <div className="h-5 sm:h-6 w-px bg-border hidden xs:block" />
              <Link to="/" className="flex items-center">
                <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-8 sm:h-10 w-auto" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground hidden md:inline">
                Casi Risolti
              </span>
              <Button variant="hero" size="sm" onClick={() => setIsContactOpen(true)}>
                Colloquio Gratuito
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 md:pt-20">
        {/* Hero with Background Image */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
          {/* Background Image (only on desktop) */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
            <OptimizedImage
              src={authorityImage}
              alt=""
              className="w-full h-full object-cover opacity-20"
              containerClassName="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs md:text-sm mb-4 md:mb-6">
                <Scale className="w-4 h-4" />
                Procedure Legali Documentate
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Casi <span className="text-primary">Reali</span> di Esdebitazione
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Ogni caso è stato risolto applicando le procedure previste dal Codice della Crisi d'Impresa 
                e dell'Insolvenza. Risultati documentati, non promesse.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework Introduction with Image */}
        <section ref={introRef as React.RefObject<HTMLElement>} className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Left Column: Text */}
              <div className="bg-background border border-border rounded-2xl p-6 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Il Quadro Normativo</h2>
                    <p className="text-sm md:text-base text-muted-foreground">Base giuridica delle procedure di esdebitazione</p>
                  </div>
                </div>
                
                <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground">
                  <p className="mb-4">
                    I casi presentati sono stati risolti applicando le procedure previste dal <strong className="text-foreground">Codice della Crisi d'Impresa e dell'Insolvenza</strong> (D.Lgs. 14/2019) 
                    e dalla precedente <strong className="text-foreground">Legge 3/2012</strong> sul sovraindebitamento.
                  </p>
                  
                  <p className="mb-6">Questi strumenti legali permettono a privati e imprese in difficoltà di:</p>
                  
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6">
                    {[
                      "Ottenere una riduzione legale del debito complessivo",
                      "Accedere a piani di pagamento sostenibili",
                      "Ottenere il blocco delle azioni esecutive",
                      "Raggiungere l'esdebitazione definitiva"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-muted/50 rounded-lg p-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs md:text-sm italic border-t border-border pt-4">
                    Ogni procedura richiede specifici requisiti e viene valutata caso per caso dal Tribunale competente 
                    o dagli Organismi di Composizione della Crisi (OCC).
                  </p>
                </div>
              </div>
              
              {/* Right Column: Image */}
              <div className="hidden lg:block">
                <OptimizedImage
                  src={authorityImage}
                  alt="Studio legale professionale"
                  className="w-full h-80 object-cover rounded-2xl"
                  containerClassName="shadow-lg rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section ref={statsRef as React.RefObject<HTMLElement>} className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{totalCases}+</p>
                <p className="text-xs md:text-base text-primary-foreground/80">Casi Gestiti</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{avgReduction}%</p>
                <p className="text-xs md:text-base text-primary-foreground/80">Riduzione Media</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{successRate}%</p>
                <p className="text-xs md:text-base text-primary-foreground/80">Tasso di Successo</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">€{totalValue}M+</p>
                <p className="text-xs md:text-base text-primary-foreground/80">Debiti Ristrutturati</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 md:py-6 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <Filter className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedCase(null);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all min-h-[40px] ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section ref={casesRef as React.RefObject<HTMLElement>} className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
              {filteredCases.map((caseItem, index) => (
                <div
                  key={caseItem.id}
                  className={`bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-card transition-all duration-500 ${
                    casesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${expandedCase === caseItem.id ? 'ring-2 ring-primary/20' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card Header */}
                  <div 
                    className="p-4 md:p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start md:items-center gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <caseItem.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-base md:text-lg font-bold text-foreground">{caseItem.title}</h3>
                            <span className={`px-2 py-0.5 rounded text-[10px] md:text-xs font-medium ${
                              caseItem.category === 'privato' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                              caseItem.category === 'impresa' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                              'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                            }`}>
                              {caseItem.category === 'privato' ? 'Privato' : 
                               caseItem.category === 'impresa' ? 'Impresa' : 'Fiscale'}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground">{caseItem.location} • {caseItem.debtType}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="text-left md:text-right">
                          <p className="text-lg md:text-2xl font-bold text-foreground">{formatCurrency(caseItem.debtAmount)}</p>
                          <p className="text-[10px] md:text-xs text-muted-foreground">Debito Iniziale</p>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full bg-primary/10 text-primary font-bold text-sm md:text-base">
                          <TrendingDown className="w-4 h-4 md:w-5 md:h-5" />
                          -{caseItem.results.reduction}%
                        </div>
                        {expandedCase === caseItem.id ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCase === caseItem.id && (
                    <div className="px-4 md:px-6 pb-6 pt-2 border-t border-border animate-fade-in">
                      {/* Situation & Consequences */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm md:text-base">
                            <Clock className="w-4 h-4 text-primary" />
                            Situazione Iniziale
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground mb-4">{caseItem.situation}</p>
                          
                          <h5 className="font-medium text-foreground mb-2 text-xs md:text-sm">Conseguenze in atto:</h5>
                          <ul className="space-y-1.5">
                            {caseItem.consequences.map((consequence, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                <span className="text-destructive mt-1">•</span>
                                {consequence}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm md:text-base">
                            <Scale className="w-4 h-4 text-primary" />
                            Quadro Giuridico
                          </h4>
                          <div className="bg-muted/50 rounded-lg p-3 md:p-4 mb-4">
                            <p className="text-xs md:text-sm font-medium text-foreground mb-1">{caseItem.legalFramework.law}</p>
                            <p className="text-xs md:text-sm text-primary font-semibold">{caseItem.legalFramework.procedure}</p>
                          </div>
                          
                          <h5 className="font-medium text-foreground mb-2 text-xs md:text-sm">Requisiti verificati:</h5>
                          <ul className="space-y-1.5">
                            {caseItem.legalFramework.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Process Timeline */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm md:text-base">
                          <Calendar className="w-4 h-4 text-primary" />
                          Il Percorso ({caseItem.timeline})
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                          {caseItem.process.map((step, idx) => (
                            <div key={idx} className="relative">
                              <div className="bg-muted/50 rounded-lg p-3 h-full">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                                    {idx + 1}
                                  </span>
                                  <span className="text-xs font-semibold text-foreground">{step.phase}</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-muted-foreground">{step.description}</p>
                              </div>
                              {idx < caseItem.process.length - 1 && (
                                <ArrowRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-5">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm md:text-base">
                            <TrendingDown className="w-4 h-4 text-primary" />
                            Risultati Ottenuti
                          </h4>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Riduzione</p>
                              <p className="text-2xl md:text-3xl font-bold text-primary">-{caseItem.results.reduction}%</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Importo Finale</p>
                              <p className="text-xl md:text-2xl font-bold text-foreground">{formatCurrency(caseItem.results.finalAmount)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Rata Mensile</p>
                              <p className="text-base md:text-lg font-semibold text-foreground">{caseItem.results.monthlyPayment}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Durata Piano</p>
                              <p className="text-base md:text-lg font-semibold text-foreground">{caseItem.results.duration}</p>
                            </div>
                          </div>
                          
                          <div className="border-t border-primary/20 pt-3">
                            <p className="text-xs font-medium text-foreground mb-2">Benefici aggiuntivi:</p>
                            <ul className="space-y-1">
                              {caseItem.results.additionalBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-muted/30 rounded-xl p-4 md:p-5 flex flex-col">
                          <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-3" />
                          <blockquote className="text-sm md:text-base text-foreground italic flex-1 mb-4">
                            "{caseItem.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3 pt-3 border-t border-border">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground text-sm">{caseItem.testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{caseItem.testimonial.city}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Background Image */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage
              src={ctaImage}
              alt=""
              className="w-full h-full object-cover"
              containerClassName="h-full"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6" />
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Anche Tu Puoi Uscire dai Debiti
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-8">
                Ogni situazione è diversa, ma la legge offre strumenti concreti. 
                Prenota un colloquio gratuito per valutare il tuo caso specifico.
              </p>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto"
              >
                Prenota Colloquio Gratuito
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default CasiStudio;
