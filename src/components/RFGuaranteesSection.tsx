import { Shield, FileCheck, BookOpen, Route, ThumbsUp, Check, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const guarantees = [
  {
    icon: <FileCheck className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Valutazione Documentata",
    description: "Atti concreti, documenti verificati, precedenti reali. Niente promesse vuote, solo fatti."
  },
  {
    icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Riferimenti Normativi Chiari",
    description: "Ogni consiglio è supportato da articoli di legge e sentenze verificabili. Trasparenza totale."
  },
  {
    icon: <Route className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Percorso Chiaro",
    description: "Ogni passaggio, tempi e costi spiegati fin dal primo giorno. Nessuna sorpresa."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Soddisfatti o Rimborsati",
    description: "Se dopo la consulenza iniziale non possiamo aiutarti, ti rimborsiamo. Senza discussioni."
  }
];

const comparisonData = [
  { aspect: "Specializzazione", others: "Trattazione generica di ogni pratica", rf: "Focus ESCLUSIVO su gestione del debito" },
  { aspect: "Linguaggio", others: "Tecnico e incomprensibile", rf: "Chiarezza assoluta, senza gergo" },
  { aspect: "Team", others: "Solo avvocato OPPURE commercialista", rf: "Entrambi dal primo giorno" },
  { aspect: "Percorso", others: "Poco definito, \"vediamo come va\"", rf: "Metodo strutturato in 4 passi" },
  { aspect: "Costi", others: "Poco trasparenti, sorprese finali", rf: "Trasparenza totale fin da subito" },
  { aspect: "Supporto", others: "A singhiozzo, quando capita", rf: "Affiancamento costante dedicato" },
  { aspect: "Copertura", others: "Solo locale o regionale", rf: "Rete nazionale in tutta Italia" }
];

const RFGuaranteesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { ref: tableRef, isInView: tableInView } = useInView({ threshold: 0.1 });

  return (
    <section id="garanzie" className="py-12 md:py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-60 md:w-80 h-60 md:h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-60 md:w-80 h-60 md:h-80 bg-trust/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* PART A: Guarantees */}
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide">Le Nostre Garanzie</span>
            </div>
            
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              4 Garanzie{" "}
              <span className="text-primary">Concrete</span>
            </h2>
            
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Non promettiamo miracoli. Promettiamo professionalità, 
              trasparenza e risultati documentabili.
            </p>
          </div>

          {/* Guarantees Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-24">
            {guarantees.map((guarantee, index) => (
              <div
                key={guarantee.title}
                className={`group bg-background border border-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART B: Comparison Table */}
        <div ref={tableRef as React.RefObject<HTMLDivElement>}>
          {/* Table Header */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${tableInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Perché Scegliere{" "}
              <span className="text-primary">RF Ristrutturazioni Debiti?</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Ecco cosa ci distingue dagli altri studi legali e commercialisti generici.
            </p>
          </div>

          {/* Desktop: Comparison Table */}
          <div className={`hidden md:block max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all duration-700 delay-200 ${tableInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 md:p-6 font-heading font-bold text-foreground border-r border-border">
                Aspetto
              </div>
              <div className="p-4 md:p-6 font-heading font-bold text-muted-foreground border-r border-border text-center">
                Gli Altri
              </div>
              <div className="p-4 md:p-6 font-heading font-bold text-primary text-center bg-primary/5">
                RF Ristrutturazioni Debiti
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 border-t border-border transition-all duration-500 ${
                  tableInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="p-4 md:p-5 font-medium text-foreground border-r border-border text-sm md:text-base">
                  {row.aspect}
                </div>
                <div className="p-4 md:p-5 text-muted-foreground border-r border-border text-sm flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{row.others}</span>
                </div>
                <div className="p-4 md:p-5 text-foreground bg-primary/5 text-sm flex items-start gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{row.rf}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Comparison Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div
                key={row.aspect}
                className={`bg-background rounded-xl border border-border overflow-hidden transition-all duration-500 ${
                  tableInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                {/* Aspect Header */}
                <div className="px-4 py-3 bg-muted/50 border-b border-border">
                  <span className="font-heading font-bold text-foreground text-sm">
                    {row.aspect}
                  </span>
                </div>
                
                {/* Others */}
                <div className="px-4 py-3 border-b border-border">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-muted-foreground font-medium block mb-0.5">Gli Altri:</span>
                      <span className="text-xs text-muted-foreground">{row.others}</span>
                    </div>
                  </div>
                </div>
                
                {/* RF */}
                <div className="px-4 py-3 bg-primary/5">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-primary font-medium block mb-0.5">RF:</span>
                      <span className="text-xs text-foreground font-medium">{row.rf}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Satisfaction Badge */}
          <div className={`text-center mt-8 md:mt-12 transition-all duration-700 delay-700 ${tableInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="inline-flex items-center gap-2 md:gap-3 bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg text-sm md:text-base">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold">Garanzia Soddisfatti o Rimborsati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFGuaranteesSection;
