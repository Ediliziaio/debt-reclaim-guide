import { useInView } from "@/hooks/useInView";

const MethodSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Analisi",
      description: "Analisi approfondita della tua posizione debitoria e documentale."
    },
    {
      number: "02",
      title: "Valutazione",
      description: "Valutazione delle opzioni legali realmente applicabili al tuo caso."
    },
    {
      number: "03",
      title: "Strategia",
      description: "Definizione di una strategia sostenibile e personalizzata."
    },
    {
      number: "04",
      title: "Affiancamento",
      description: "Supporto costante durante tutto il percorso fino alla risoluzione."
    }
  ];

  return (
    <section id="metodo" ref={ref} className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Un percorso strutturato.
              <br />
              <span className="text-muted-foreground">Nessuna improvvisazione.</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Big number */}
                <div className="text-7xl md:text-8xl font-bold text-gold/20 mb-4 transition-colors group-hover:text-gold/40">
                  {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className={`mt-16 text-sm text-muted-foreground text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Ogni intervento è valutato caso per caso, senza automatismi o promesse di risultato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
