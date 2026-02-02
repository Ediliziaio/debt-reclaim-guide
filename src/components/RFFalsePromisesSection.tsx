import { useInView } from "@/hooks/useInView";
import { X } from "lucide-react";

const RFFalsePromisesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const falsePromises = [
    {
      promise: '"Tranquillo, vedrai che si sistema..."',
      reality: "(e intanto gli interessi continuano a crescere come funghi)",
    },
    {
      promise: '"Paga un po\' alla volta..."',
      reality: "(e intanto il debito TRIPLICA invece di diminuire)",
    },
    {
      promise: '"Tanto non ti possono fare niente..."',
      reality: "(e poi ti arriva il pignoramento della casa)",
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro text */}
          <p className={`text-base md:text-xl text-muted-foreground mb-6 md:mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            E quante volte ti sei sentito dire:
          </p>

          {/* False promises with strikethrough effect */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-16">
            {falsePromises.map((item, index) => (
              <div
                key={index}
                className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-background border border-border transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + index * 150}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-lg md:text-2xl text-foreground font-semibold mb-1 md:mb-2 relative">
                      {item.promise}
                      {isInView && (
                        <span 
                          className="absolute left-0 top-1/2 h-0.5 bg-destructive animate-strikethrough"
                          style={{ animationDelay: `${500 + index * 200}ms` }}
                        />
                      )}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground italic">
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Truth statement */}
          <div className={`p-5 md:p-8 rounded-2xl md:rounded-3xl bg-navy text-background transition-all duration-700 delay-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
              La verità è questa:
            </h3>
            <p className="text-base md:text-xl leading-relaxed opacity-90">
              <strong>Ogni giorno che passa senza una strategia legale VERA, il tuo debito peggiora.</strong>
            </p>
            <p className="text-sm md:text-lg mt-3 md:mt-4 opacity-80">
              Gli interessi si accumulano. I creditori si incattiviscono. Le azioni legali si moltiplicano.
            </p>
            <p className="text-base md:text-xl mt-4 md:mt-6 font-semibold text-gold">
              E tu? Tu sei sempre più schiacciato, sempre più isolato, sempre più disperato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFFalsePromisesSection;
