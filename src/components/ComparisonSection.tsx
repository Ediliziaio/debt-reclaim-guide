import { Check, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ComparisonSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const comparisons = [
    { others: "Trattazione generica", us: "Specializzazione mirata" },
    { others: "Linguaggio tecnico confuso", us: "Chiarezza e comprensione" },
    { others: "Percorsi poco definiti", us: "Metodo strutturato" },
    { others: "Costi poco trasparenti", us: "Trasparenza fin dall'inizio" },
    { others: "Assistenza discontinua", us: "Affiancamento costante" },
  ];

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Non tutti gli studi affrontano il debito{" "}
              <span className="text-gold">allo stesso modo.</span>
            </h2>
          </div>

          {/* Comparison table */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <span className="text-muted-foreground text-sm uppercase tracking-wider">Approccio comune</span>
              </div>
              <div className="text-center">
                <span className="text-gold text-sm uppercase tracking-wider font-medium">Studio Tutela Debito</span>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 gap-4 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Others */}
                  <div className="flex items-center gap-4 p-4 md:p-6 bg-card rounded-lg border border-border">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base">{item.others}</span>
                  </div>
                  
                  {/* Us */}
                  <div className="flex items-center gap-4 p-4 md:p-6 bg-card rounded-lg border border-gold/20">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm md:text-base">{item.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
