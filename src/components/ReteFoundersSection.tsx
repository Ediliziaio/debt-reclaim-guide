import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Award, Scale, Calculator, TrendingUp } from "lucide-react";
import avvocatoRossi from "@/assets/avvocato-rossi.jpg";
import commercialistaFava from "@/assets/commercialista-fava.jpg";

const ReteFoundersSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const casesCount = useAnimatedCounter({ end: 500, duration: 2000, isInView });
  const reductionCount = useAnimatedCounter({ end: 60, duration: 2000, isInView });
  const successCount = useAnimatedCounter({ end: 85, duration: 2000, isInView });
  const debtCount = useAnimatedCounter({ end: 50, duration: 2000, isInView });

  const founders = [
    {
      name: "Avv. Armando Rossi",
      role: "Fondatore & Coordinatore Legale",
      image: avvocatoRossi,
      icon: Scale,
      experience: "20+ anni di esperienza in diritto bancario, procedure di sovraindebitamento e tutela del debitore.",
      highlight: "Ha gestito personalmente oltre 250 pratiche di esdebitazione con un tasso di successo dell'87%.",
    },
    {
      name: "Dott. Comm. Roberto Fava",
      role: "Fondatore & Coordinatore Contabile",
      image: commercialistaFava,
      icon: Calculator,
      experience: "20+ anni di esperienza in ristrutturazione del debito aziendale, concordati preventivi, transazioni fiscali e analisi finanziarie complesse.",
      highlight: "Ha salvato oltre 30 aziende dal fallimento preservando centinaia di posti di lavoro.",
    },
  ];

  const stats = [
    { value: casesCount, suffix: "+", label: "Casi Gestiti", icon: Award },
    { value: reductionCount, suffix: "%", label: "Riduzione Media Debito", icon: TrendingUp },
    { value: successCount, suffix: "%", label: "Tasso di Successo", icon: Award },
    { value: debtCount, suffix: "M+", prefix: "€", label: "Debiti Ristrutturati", icon: TrendingUp },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="chi-siamo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chi Siamo E Perché Dovresti Considerare <span className="text-primary">Seriamente</span> Questa Opportunità
            </h2>
            <p className="text-lg text-muted-foreground">
              RF Debt Restructuring è fondata e coordinata da:
            </p>
          </div>

          {/* Founders Grid */}
          <div className={`grid md:grid-cols-2 gap-8 mb-16 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {founders.map((founder, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <founder.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm text-primary">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{founder.experience}</p>
                  <p className="text-foreground font-medium bg-primary/5 border border-primary/20 rounded-lg p-3">
                    {founder.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Method Statement */}
          <div className={`bg-navy rounded-2xl p-8 md:p-12 mb-12 text-center ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <p className="text-xl text-white mb-8">
              Insieme abbiamo creato un <strong className="text-primary">metodo di lavoro collaudato</strong> su oltre 500 casi, con:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <p className="text-lg text-foreground">
              E ora vogliamo condividere questo metodo con una <strong className="text-primary">rete nazionale di studi professionali seri</strong>.
            </p>
            <p className="text-muted-foreground mt-4">
              Non stiamo cercando "affiliati" da spremere. Stiamo costruendo una rete di colleghi con cui lavorare fianco a fianco, crescere insieme e dominare un settore in fortissima espansione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteFoundersSection;
