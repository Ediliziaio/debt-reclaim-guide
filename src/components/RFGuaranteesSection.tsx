import { Shield, FileCheck, BookOpen, Route, ThumbsUp, Check, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const guarantees = [
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Valutazione Documentata",
    description: "Atti concreti, documenti verificati, precedenti reali. Niente promesse vuote, solo fatti."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Riferimenti Normativi Chiari",
    description: "Ogni consiglio è supportato da articoli di legge e sentenze verificabili. Trasparenza totale."
  },
  {
    icon: <Route className="w-8 h-8" />,
    title: "Percorso Chiaro",
    description: "Ogni passaggio, tempi e costi spiegati fin dal primo giorno. Nessuna sorpresa."
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
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
    <section id="garanzie" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-trust/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* PART A: Guarantees */}
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Le Nostre Garanzie</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              4 Garanzie{" "}
              <span className="text-primary">Concrete</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Non promettiamo miracoli. Promettiamo professionalità, 
              trasparenza e risultati documentabili.
            </p>
          </div>

          {/* Guarantees Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {guarantees.map((guarantee, index) => (
              <div
                key={guarantee.title}
                className={`group bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART B: Comparison Table */}
        <div ref={tableRef as React.RefObject<HTMLDivElement>}>
          {/* Table Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${tableInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perché Scegliere{" "}
              <span className="text-primary">RF Debt Restructuring?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ecco cosa ci distingue dagli altri studi legali e commercialisti generici.
            </p>
          </div>

          {/* Comparison Table */}
          <div className={`max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all duration-700 delay-200 ${tableInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 md:p-6 font-heading font-bold text-foreground border-r border-border">
                Aspetto
              </div>
              <div className="p-4 md:p-6 font-heading font-bold text-muted-foreground border-r border-border text-center">
                Gli Altri
              </div>
              <div className="p-4 md:p-6 font-heading font-bold text-primary text-center bg-primary/5">
                RF Debt Restructuring
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

          {/* Satisfaction Badge */}
          <div className={`text-center mt-12 transition-all duration-700 delay-700 ${tableInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-lg">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Garanzia Soddisfatti o Rimborsati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFGuaranteesSection;
