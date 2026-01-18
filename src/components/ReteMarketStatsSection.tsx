import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { TrendingUp, Euro, Search, Heart, BarChart3 } from "lucide-react";

const ReteMarketStatsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const growthCount = useAnimatedCounter({ end: 340, duration: 2000, isInView });
  const concordatiCount = useAnimatedCounter({ end: 180, duration: 2000, isInView });
  const specializedCount = useAnimatedCounter({ end: 12, duration: 2000, isInView });
  const demandCount = useAnimatedCounter({ end: 80, duration: 2000, isInView });
  const referralCount = useAnimatedCounter({ end: 65, duration: 2000, isInView });
  const lifetimeCount = useAnimatedCounter({ end: 40, duration: 2000, isInView });

  const stats = [
    {
      icon: TrendingUp,
      title: "DATO #1: Esplosione Delle Richieste",
      highlight: `+${growthCount}%`,
      highlightSuffix: " pratiche sovraindebitamento (2019-2024)",
      subValue: `+${concordatiCount}%`,
      subLabel: " concordati preventivi nello stesso periodo",
      conclusion: "Il mercato è ENORME e in continua espansione.",
      color: "primary",
    },
    {
      icon: Euro,
      title: "DATO #2: Valore Medio Delle Pratiche",
      values: [
        { label: "Esdebitazione privati", range: "€3.000-€8.000" },
        { label: "Piano del consumatore", range: "€5.000-€12.000" },
        { label: "Crisi d'impresa PMI", range: "€15.000-€50.000" },
        { label: "Concordato preventivo", range: "€30.000-€100.000+" },
      ],
      conclusion: "Fatturato MOLTO superiore rispetto alle pratiche tradizionali.",
      color: "secondary",
    },
    {
      icon: Search,
      title: "DATO #3: Domanda Insoddisfatta",
      highlight: `Solo ${specializedCount}%`,
      highlightSuffix: " degli studi legali è specializzato in esdebitazione",
      subValue: `Oltre ${demandCount}%`,
      subLabel: " dei potenziali clienti non trova professionisti competenti",
      conclusion: "Domanda altissima, offerta scarsa. Mercato libero per chi sa muoversi.",
      color: "trust",
    },
    {
      icon: Heart,
      title: "DATO #4: Fidelizzazione Del Cliente",
      highlight: "3-5 anni",
      highlightSuffix: " di rapporto continuativo medio",
      subValue: `${referralCount}%`,
      subLabel: " tasso di referral (ogni cliente porta un altro cliente)",
      extraValue: `€15k-€${lifetimeCount}k`,
      extraLabel: " lifetime value medio a cliente",
      conclusion: "Non sono 'una tantum'. Sono relazioni durature e altamente profittevoli.",
      color: "primary",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Dati di Mercato</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              I Numeri Del Mercato
            </h2>
            <p className="text-xl text-primary font-semibold">
              (Perché Questo È Il Momento Giusto)
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-2xl p-8 hover:border-${stat.color}/30 transition-colors ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{stat.title}</h3>
                </div>

                {stat.values ? (
                  <div className="space-y-3 mb-6">
                    {stat.values.map((v, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{v.label}</span>
                        <span className="font-bold text-foreground">{v.range}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground mb-2">
                      <span className="text-primary">{stat.highlight}</span>
                      <span className="text-lg font-normal text-muted-foreground">{stat.highlightSuffix}</span>
                    </div>
                    {stat.subValue && (
                      <div className="text-lg text-foreground">
                        <span className="font-semibold text-secondary">{stat.subValue}</span>
                        <span className="text-muted-foreground">{stat.subLabel}</span>
                      </div>
                    )}
                    {stat.extraValue && (
                      <div className="text-lg text-foreground mt-2">
                        <span className="font-semibold text-primary">{stat.extraValue}</span>
                        <span className="text-muted-foreground">{stat.extraLabel}</span>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-sm font-medium text-primary bg-primary/5 border border-primary/20 rounded-lg p-3">
                  Tradotto: {stat.conclusion}
                </p>
              </div>
            ))}
          </div>

          {/* Final Question */}
          <div className={`text-center bg-navy rounded-2xl p-8 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <p className="text-xl text-white mb-2">La domanda è:</p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              Vuoi rimanere <span className="text-destructive">fuori</span> da questo mercato... 
              o vuoi <span className="text-primary">entrarci</span> con tutti gli strumenti giusti?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteMarketStatsSection;
