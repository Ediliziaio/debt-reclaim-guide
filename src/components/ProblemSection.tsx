import { useInView } from "@/hooks/useInView";

const ProblemSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const falsePromises = [
    {
      myth: '"Vedrai, si sistema tutto da solo..."',
      reality: "E intanto le lettere degli avvocati si accumulano sulla scrivania."
    },
    {
      myth: '"Paga un po\' alla volta, tanto..."',
      reality: "E intanto gli interessi triplicano e la situazione peggiora."
    },
    {
      myth: '"Non ti possono fare niente..."',
      reality: "E intanto arriva il pignoramento."
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-destructive/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              È finita l'era delle{" "}
              <span className="text-gold">soluzioni improvvisate</span>{" "}
              che peggiorano la situazione.
            </h2>
            <p className={`text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Quante volte ti sei sentito dire queste frasi?
            </p>
          </div>

          {/* False promises grid */}
          <div className="space-y-8">
            {falsePromises.map((item, index) => (
              <div
                key={index}
                className={`border-l-2 border-gold/30 pl-8 py-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <p className="text-2xl md:text-3xl text-muted-foreground italic mb-4">
                  {item.myth}
                </p>
                <p className="text-lg md:text-xl text-foreground font-medium">
                  {item.reality}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className={`mt-20 pt-12 border-t border-border transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl md:text-3xl text-foreground font-semibold">
              Ogni decisione presa senza una guida legale{" "}
              <span className="text-destructive">può peggiorare il quadro.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
