import { useInView } from "@/hooks/useInView";

const PositioningSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main statement */}
          <div className="mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Non risolviamo i debiti con{" "}
              <span className="line-through text-muted-foreground">scorciatoie</span>.
              <br />
              Li affrontiamo con{" "}
              <span className="text-gold">metodo legale.</span>
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Il nostro studio si occupa esclusivamente di <strong className="text-foreground">tutela del debitore</strong>. Analizziamo la tua situazione, individuiamo le soluzioni legali realmente applicabili e ti affianchiamo passo dopo passo.
              </p>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                L'obiettivo è aiutarti a riprendere <strong className="text-foreground">controllo e serenità</strong>, nel rispetto della normativa vigente. Con un approccio chiaro, responsabile e personalizzato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
