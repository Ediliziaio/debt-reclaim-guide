import { Award, Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import authorityImage from "@/assets/authority-legal.jpg";

const AuthoritySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      text: "Studio legale focalizzato esclusivamente sulla tutela del debito",
    },
    {
      text: "Esperienza in situazioni finanziarie complesse",
    },
    {
      text: "Comunicazione chiara su tempi, costi e possibilità",
    },
    {
      text: "Nessuna pressione, nessuna illusione",
    },
  ];

  return (
    <section id="chi-siamo" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={authorityImage} 
                  alt="Ambiente legale professionale" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
            </div>

            {/* Right: Content */}
            <div>
              {/* Section header */}
              <div className="mb-10">
                <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">Perché sceglierci</span>
                </div>
                
                <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Specializzazione, chiarezza,{" "}
                  <span className="text-gradient-gold">responsabilità.</span>
                </h2>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-lg text-foreground">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
