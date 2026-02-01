import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { 
  Home, Building2, Receipt, Briefcase, User, Store, CreditCard, Factory,
  ArrowRight, TrendingDown, Calendar, Clock, CheckCircle2, Quote, ArrowLeft, Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

interface CaseStudy {
  id: number;
  icon: React.ElementType;
  category: "privato" | "impresa" | "fiscale";
  title: string;
  location: string;
  debtAmount: string;
  debtType: string;
  situation: string;
  procedure: string;
  timeline: string;
  results: string[];
  reduction: string;
  quote: string;
  quoteName: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    icon: Home,
    category: "privato",
    title: "Famiglia Rossi",
    location: "Milano",
    debtAmount: "€120.000",
    debtType: "Mutuo + Prestiti + Carte Revolving",
    situation: "Famiglia monoreddito con 2 figli. Mutuo ipotecario, 3 prestiti personali e 2 carte revolving. Lo stipendio era già pignorato per 1/5 e rischiavano di perdere la casa di proprietà.",
    procedure: "Piano del Consumatore (L. 3/2012)",
    timeline: "8 mesi dalla prima consulenza all'omologa",
    results: [
      "Debito ridotto da €120.000 a €24.000 (-80%)",
      "Rata mensile sostenibile di €400 per 5 anni",
      "Casa di proprietà salvata",
      "Sblocco stipendio dal pignoramento",
      "Vita familiare normalizzata"
    ],
    reduction: "80%",
    quote: "Pensavamo di perdere tutto. Grazie a RF Ristrutturazione Debiti abbiamo salvato la nostra casa e ricostruito la nostra vita. Oggi guardiamo al futuro con speranza.",
    quoteName: "Marco R., Milano"
  },
  {
    id: 2,
    icon: Building2,
    category: "impresa",
    title: "PMI Manifatturiera",
    location: "Bologna",
    debtAmount: "€500.000",
    debtType: "Debiti Bancari + Fornitori + Contributi",
    situation: "SRL con 12 dipendenti nel settore meccanico. Debiti verso banche, fornitori e contributi INPS arretrati. L'azienda era sull'orlo del fallimento con rischio di perdere tutti i posti di lavoro.",
    procedure: "Concordato Preventivo in Continuità",
    timeline: "14 mesi dall'avvio alla chiusura",
    results: [
      "Debito ridotto del 45%",
      "Azienda rimasta operativa durante tutta la procedura",
      "12 posti di lavoro salvati",
      "Rapporti con i fornitori chiave preservati",
      "Nuova linea di credito bancaria post-procedura"
    ],
    reduction: "45%",
    quote: "Il concordato ci ha permesso di salvare l'azienda di famiglia costruita in 30 anni. Oggi siamo più forti di prima e abbiamo salvato tutti i nostri dipendenti.",
    quoteName: "Paolo B., Bologna"
  },
  {
    id: 3,
    icon: Receipt,
    category: "fiscale",
    title: "Imprenditore Edile",
    location: "Roma",
    debtAmount: "€280.000",
    debtType: "Debiti Fiscali (IVA + IRPEF + Contributi)",
    situation: "Imprenditore edile con debiti IVA, IRPEF e contributi non pagati accumulati in 5 anni di crisi del settore. Conti correnti pignorati, veicoli fermi, impossibilità di lavorare.",
    procedure: "Transazione Fiscale con Agenzia delle Entrate",
    timeline: "10 mesi dalla proposta all'accordo",
    results: [
      "Riduzione del 65% del debito fiscale",
      "Sblocco immediato dei conti correnti",
      "Sblocco dei veicoli aziendali",
      "Rateizzazione del residuo in 5 anni",
      "Attività ripresa a pieno regime"
    ],
    reduction: "65%",
    quote: "Ero paralizzato dai debiti fiscali. Non potevo più lavorare, i conti erano bloccati. Oggi sono tornato a costruire e a vivere serenamente.",
    quoteName: "Giuseppe M., Roma"
  },
  {
    id: 4,
    icon: Briefcase,
    category: "privato",
    title: "Ex Partita IVA",
    location: "Napoli",
    debtAmount: "€90.000",
    debtType: "Debiti Residui Post-Chiusura Attività",
    situation: "Professionista che ha chiuso la partita IVA dopo il COVID. Debiti residui verso fornitori, banche e Fisco che non poteva più pagare con il solo stipendio da dipendente.",
    procedure: "Esdebitazione del Sovraindebitato",
    timeline: "6 mesi dall'istanza all'esdebitazione",
    results: [
      "Esdebitazione TOTALE del debito",
      "Cancellazione definitiva per legge",
      "Nuovo inizio senza pendenze",
      "Possibilità di aprire nuova P.IVA",
      "Accesso al credito ripristinato"
    ],
    reduction: "100%",
    quote: "La chiusura della mia attività mi aveva lasciato un macigno di debiti. L'esdebitazione mi ha dato una seconda possibilità. Oggi ho ripreso a lavorare senza paura.",
    quoteName: "Antonio L., Napoli"
  },
  {
    id: 5,
    icon: User,
    category: "privato",
    title: "Pensionato",
    location: "Torino",
    debtAmount: "€45.000",
    debtType: "Carte Revolving + Prestiti Personali",
    situation: "Pensionato con pensione minima che aveva accumulato debiti per aiutare i figli in difficoltà. Tre carte revolving e due prestiti personali con rate insostenibili.",
    procedure: "Piano del Consumatore",
    timeline: "5 mesi dall'istanza all'omologa",
    results: [
      "Debito ridotto da €45.000 a €9.000 (-80%)",
      "Rata mensile di €150 sostenibile",
      "Pensione non più pignorata",
      "Serenità ritrovata in età avanzata",
      "Figli sollevati dal senso di colpa"
    ],
    reduction: "80%",
    quote: "A 72 anni pensavo che la mia vita fosse finita per colpa dei debiti. Invece ho ritrovato la serenità. Grazie di cuore.",
    quoteName: "Giovanni P., Torino"
  },
  {
    id: 6,
    icon: Store,
    category: "impresa",
    title: "Commerciante",
    location: "Firenze",
    debtAmount: "€180.000",
    debtType: "Debiti Fornitori + Affitto + Bancari",
    situation: "Negozio di abbigliamento in centro storico. Crisi post-COVID con calo vendite dell'80%. Debiti verso fornitori, affitti arretrati e finanziamenti bancari.",
    procedure: "Accordo di Composizione della Crisi",
    timeline: "9 mesi dall'avvio alla chiusura",
    results: [
      "Debito ridotto del 55%",
      "Rinegoziazione contratto di affitto",
      "Accordo con fornitori principali",
      "Attività rilanciata con nuovo format",
      "Dipendenti mantenuti"
    ],
    reduction: "55%",
    quote: "Il mio negozio esiste da 40 anni. Grazie a questa procedura non ho dovuto abbassare la serranda definitivamente.",
    quoteName: "Francesca T., Firenze"
  },
  {
    id: 7,
    icon: CreditCard,
    category: "privato",
    title: "Famiglia con Mutuo Underwater",
    location: "Bari",
    debtAmount: "€220.000",
    debtType: "Mutuo Ipotecario Superiore al Valore Casa",
    situation: "Coppia con mutuo stipulato nel 2008 al picco del mercato immobiliare. Valore casa crollato del 40%, debito residuo superiore al valore dell'immobile, rate insostenibili.",
    procedure: "Ristrutturazione del Debito Ipotecario",
    timeline: "12 mesi dalla negoziazione all'accordo",
    results: [
      "Debito allineato al valore reale dell'immobile",
      "Riduzione rata del 35%",
      "Casa mantenuta",
      "Differenza di €80.000 stralciata",
      "Nuovo piano sostenibile a 20 anni"
    ],
    reduction: "36%",
    quote: "Il mutuo ci stava strangolando. Oggi paghiamo una rata che possiamo permetterci e la casa è salva.",
    quoteName: "Laura e Marco D., Bari"
  },
  {
    id: 8,
    icon: Factory,
    category: "impresa",
    title: "SAS Artigiana",
    location: "Vicenza",
    debtAmount: "€350.000",
    debtType: "Debiti Misti (Banche, Fisco, Fornitori)",
    situation: "Azienda artigiana del settore orafo con 8 dipendenti. Crisi del settore lusso, calo ordini, debiti accumulati verso banche, Erario e fornitori di materie prime.",
    procedure: "Concordato Preventivo con Cessio Bonorum",
    timeline: "16 mesi dall'avvio alla chiusura",
    results: [
      "Debito ridotto del 60%",
      "Cessione controllata dell'azienda",
      "6 dipendenti riassunti dal nuovo proprietario",
      "Soci liberati dai debiti personali",
      "Esdebitazione completa dei garanti"
    ],
    reduction: "60%",
    quote: "Abbiamo dovuto cedere l'azienda, ma almeno abbiamo salvato i nostri dipendenti e siamo usciti puliti dai debiti.",
    quoteName: "Roberto e Franco V., Vicenza"
  },
];

const categories = [
  { id: "tutti", label: "Tutti i Casi" },
  { id: "privato", label: "Privati" },
  { id: "impresa", label: "Imprese" },
  { id: "fiscale", label: "Debiti Fiscali" },
];

const CasiStudio = () => {
  const [activeCategory, setActiveCategory] = useState("tutti");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });
  const { ref: casesRef, isInView: casesInView } = useInView({ threshold: 0.1 });

  const totalCases = useAnimatedCounter({ end: 500, duration: 2000, isInView: statsInView });
  const avgReduction = useAnimatedCounter({ end: 60, duration: 2000, isInView: statsInView });
  const successRate = useAnimatedCounter({ end: 85, duration: 2000, isInView: statsInView });
  const totalValue = useAnimatedCounter({ end: 50, duration: 2000, isInView: statsInView });

  const filteredCases = activeCategory === "tutti" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Casi Studio | RF Ristrutturazione Debiti - Storie di Successo</title>
        <meta name="description" content="Scopri come abbiamo aiutato famiglie e imprese a uscire dal debito. Casi reali con risultati documentati: riduzione media del 60%." />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">Torna al sito</span>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">RF</span>
                <span className="text-lg font-semibold text-foreground hidden sm:block">Casi Studio</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                Casi Reali, Risultati Documentati
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Storie di <span className="text-primary">Rinascita</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Scopri come abbiamo aiutato famiglie e imprese a uscire dal debito e ricominciare. 
                Ogni storia è vera, ogni risultato è documentato.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section ref={statsRef} className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{totalCases}+</p>
                <p className="text-primary-foreground/80">Casi Gestiti</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{avgReduction}%</p>
                <p className="text-primary-foreground/80">Riduzione Media</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{successRate}%</p>
                <p className="text-primary-foreground/80">Tasso Successo</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">€{totalValue}M+</p>
                <p className="text-primary-foreground/80">Debiti Ristrutturati</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section ref={casesRef} className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {filteredCases.map((caseItem, index) => (
                <div
                  key={caseItem.id}
                  className={`bg-card border border-border rounded-2xl overflow-hidden shadow-card transition-all duration-500 ${
                    casesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div 
                    className="p-6 md:p-8 cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <caseItem.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-foreground">{caseItem.title}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              caseItem.category === 'privato' ? 'bg-blue-100 text-blue-700' :
                              caseItem.category === 'impresa' ? 'bg-purple-100 text-purple-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {caseItem.category === 'privato' ? 'Privato' : 
                               caseItem.category === 'impresa' ? 'Impresa' : 'Fiscale'}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{caseItem.location} • {caseItem.debtType}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-foreground">{caseItem.debtAmount}</p>
                          <p className="text-sm text-muted-foreground">Debito Iniziale</p>
                        </div>
                        <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold">
                          <TrendingDown className="w-5 h-5" />
                          -{caseItem.reduction}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCase === caseItem.id && (
                    <div className="px-6 md:px-8 pb-8 pt-4 border-t border-border animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              Situazione Iniziale
                            </h4>
                            <p className="text-muted-foreground">{caseItem.situation}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-primary" />
                              Procedura Utilizzata
                            </h4>
                            <p className="text-secondary font-medium">{caseItem.procedure}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              Tempistiche
                            </h4>
                            <p className="text-muted-foreground">{caseItem.timeline}</p>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              Risultati Ottenuti
                            </h4>
                            <ul className="space-y-2">
                              {caseItem.results.map((result, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quote */}
                          <div className="p-4 rounded-xl bg-muted/50 border border-border">
                            <Quote className="w-6 h-6 text-primary/40 mb-2" />
                            <p className="text-foreground italic mb-2">"{caseItem.quote}"</p>
                            <p className="text-sm text-muted-foreground font-medium">— {caseItem.quoteName}</p>
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

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                La Tua Storia Potrebbe Essere La Prossima
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Non aspettare che la situazione peggiori. Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contatto">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Richiedi Consulenza Gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Torna al Sito
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CasiStudio;