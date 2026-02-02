import { useInView } from "@/hooks/useInView";

const RFEmpathySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const painPoints = [
    "Quante notti hai passato sveglio negli ultimi mesi pensando ai debiti?",
    "Quante volte hai aperto la cassetta della posta con il cuore in gola, terrorizzato dall'ennesima lettera dell'avvocato, dall'ennesima cartella esattoriale, dall'ennesimo pignoramento?",
    "Quante volte hai fatto finta di niente quando squillava il telefono perché sapevi che dall'altra parte c'era l'ennesimo creditore che ti pressava?",
  ];

  return (
    <section ref={ref} className="py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-destructive/5 rounded-full blur-[100px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section intro */}
          <div className="mb-8 md:mb-16">
            <p className={`text-base md:text-xl text-navy-light mb-4 md:mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Caro Imprenditore, Professionista o Privato Cittadino sommerso dai debiti,
            </p>
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Lascia che ti faccia una domanda diretta:
            </h2>
          </div>

          {/* Pain points */}
          <div className="space-y-4 md:space-y-8 mb-8 md:mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-muted/50 border border-border transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive font-bold text-sm md:text-base">?</span>
                </div>
                <p className="text-base md:text-xl text-foreground font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFEmpathySection;
