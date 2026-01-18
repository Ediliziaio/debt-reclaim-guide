import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Euro, TrendingUp, Target, Briefcase, Users, Award } from "lucide-react";

const ReteEarningsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const annualRevenue = useAnimatedCounter({ end: 120000, duration: 2000, isInView });
  const roiPercent = useAnimatedCounter({ end: 1500, duration: 2000, isInView });
  const retention = useAnimatedCounter({ end: 85, duration: 1500, isInView });

  const practiceTypes = [
    {
      type: "Esdebitazione Privati",
      minFee: "3.000",
      maxFee: "8.000",
      annualVolume: "8-12 pratiche",
      icon: Users,
    },
    {
      type: "Piano del Consumatore",
      minFee: "5.000",
      maxFee: "12.000",
      annualVolume: "4-8 pratiche",
      icon: Briefcase,
    },
    {
      type: "Crisi d'Impresa PMI",
      minFee: "15.000",
      maxFee: "50.000",
      annualVolume: "2-4 pratiche",
      icon: TrendingUp,
    },
    {
      type: "Concordato Preventivo",
      minFee: "30.000",
      maxFee: "100.000+",
      annualVolume: "1-2 pratiche",
      icon: Award,
    },
  ];

  const projections = [
    { year: "Primo Anno (conservativo)", min: 55000, max: 80000, progress: 40 },
    { year: "Secondo Anno (realistico)", min: 120000, max: 180000, progress: 70 },
    { year: "Terzo Anno (ottimistico)", min: 200000, max: 300000, progress: 100 },
  ];

  const advantages = [
    { value: "85%", label: "del fatturato rimane a te", icon: Euro },
    { value: "0%", label: "revenue share su clienti propri", icon: Target },
    { value: "€8.000", label: "formazione inclusa nel valore", icon: Award },
    { value: "€0", label: "costi di marketing", icon: TrendingUp },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="guadagni" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Potenziale di Guadagno
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quanto Puoi <span className="text-gradient-primary">Guadagnare</span> Con La Rete
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numeri reali, basati sui risultati dei nostri partner. Il tuo studio può crescere esponenzialmente.
            </p>
          </div>

          {/* Main Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
              <Euro className="w-10 h-10 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-bold mb-2">€{annualRevenue.toLocaleString()}</p>
              <p className="text-white/80">Fatturato Medio Annuo</p>
              <p className="text-sm text-white/60 mt-2">dopo il secondo anno</p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 text-white text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-bold mb-2">+{roiPercent}%</p>
              <p className="text-white/80">ROI Medio</p>
              <p className="text-sm text-white/60 mt-2">sul contributo annuale</p>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white text-center">
              <Target className="w-10 h-10 mx-auto mb-4 opacity-90" />
              <p className="text-5xl font-bold mb-2">{retention}%</p>
              <p className="text-white/80">A Te Rimane</p>
              <p className="text-sm text-white/60 mt-2">su pratiche dalla rete</p>
            </div>
          </div>

          {/* Practice Types Grid */}
          <div className={`mb-16 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Valore Medio Per Tipologia di Pratica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practiceTypes.map((practice, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <practice.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2">{practice.type}</h4>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">€{practice.minFee}</span>
                        <span className="text-muted-foreground">-</span>
                        <span className="text-2xl font-bold text-primary">€{practice.maxFee}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{practice.annualVolume}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Projections */}
          <div className={`bg-card border border-border rounded-2xl p-8 mb-16 ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Proiezioni di Fatturato Aggiuntivo
            </h3>
            <div className="space-y-8">
              {projections.map((proj, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{proj.year}</span>
                    <span className="text-lg font-bold text-primary">
                      €{proj.min.toLocaleString()} - €{proj.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isInView ? `${proj.progress}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Economic Advantages */}
          <div className={`${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Vantaggi Economici Concreti
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {advantages.map((adv, index) => (
                <div 
                  key={index}
                  className="bg-muted/50 border border-border rounded-2xl p-6 text-center hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <adv.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">{adv.value}</p>
                  <p className="text-sm text-muted-foreground">{adv.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className={`mt-16 bg-navy rounded-2xl p-8 md:p-12 text-center ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <blockquote className="text-xl md:text-2xl text-white/90 font-medium mb-6 italic">
              "Nel primo anno ho fatturato €72.000 solo con le pratiche dalla rete. 
              Il contributo annuale si è ripagato con la prima pratica di crisi d'impresa."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Avv. Marco R.</p>
                <p className="text-white/60 text-sm">Partner dal 2023, Milano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteEarningsSection;