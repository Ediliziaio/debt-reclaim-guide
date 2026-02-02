import { XCircle, CheckCircle2, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const notForList = [
  "Chi cerca la bacchetta magica che cancella i debiti senza sforzo",
  "Chi vuole scorciatoie illegali o trucchetti improvvisati",
  "Chi non è disposto a seguire un percorso strutturato",
  "Chi vuole solo \"sentirsi dire che va tutto bene\"",
  "Chi pensa che basti ignorare il problema"
];

const forList = [
  "Chi ha debiti REALI e vuole uscirne con strumenti LEGALI",
  "Chi è disposto a seguire un metodo professionale",
  "Chi vuole chiarezza, non illusioni",
  "Chi cerca professionisti seri, non venditori di fumo",
  "Chi è pronto ad agire ORA per cambiare la propria situazione"
];

const RFTargetAudienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="target" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">È Per Te?</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Per Chi È{" "}
            <span className="text-primary">RF Ristrutturazioni Debiti</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siamo selettivi perché vogliamo aiutare chi possiamo davvero aiutare.
            Ecco come capire se siamo la scelta giusta per te.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* NOT FOR Column */}
          <div
            className={`bg-destructive/5 border-2 border-destructive/20 rounded-3xl p-6 md:p-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-destructive">
                NON È Per Te Se...
              </h3>
            </div>

            <ul className="space-y-4">
              {notForList.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FOR Column */}
          <div
            className={`bg-primary/5 border-2 border-primary/30 rounded-3xl p-6 md:p-8 relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Highlight Badge */}
            <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              QUESTO È PER TE
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                È Per Te Se...
              </h3>
            </div>

            <ul className="space-y-4">
              {forList.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-muted-foreground">
            Ti riconosci nella colonna verde?{" "}
            <span className="text-primary font-semibold">Allora possiamo aiutarti.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RFTargetAudienceSection;
