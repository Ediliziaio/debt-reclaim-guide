import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { TrendingUp, Search, Heart, Sparkles } from "lucide-react";

const ReteMarketStatsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const growthCount = useAnimatedCounter({ end: 340, duration: 2000, isInView });
  const concordatiCount = useAnimatedCounter({ end: 180, duration: 2000, isInView });
  const specializedCount = useAnimatedCounter({ end: 12, duration: 2000, isInView });
  const demandCount = useAnimatedCounter({ end: 80, duration: 2000, isInView });
  const referralCount = useAnimatedCounter({ end: 65, duration: 2000, isInView });

  const stats = [
    {
      icon: TrendingUp,
      title: "Un Mercato In Forte Espansione",
      highlight: `+${growthCount}%`,
      highlightSuffix: " pratiche sovraindebitamento (2019-2024)",
      subValue: `+${concordatiCount}%`,
      subLabel: " concordati preventivi nello stesso periodo",
      conclusion: "Il mercato è in forte crescita e la domanda di professionisti qualificati supera di gran lunga l'offerta.",
      color: "primary",
    },
    {
      icon: Search,
      title: "Domanda Insoddisfatta",
      highlight: `Solo ${specializedCount}%`,
      highlightSuffix: " degli studi legali è specializzato in esdebitazione",
      subValue: `Oltre ${demandCount}%`,
      subLabel: " dei potenziali clienti non trova professionisti competenti",
      conclusion: "C'è spazio per chi vuole crescere davvero in un settore ad alto valore professionale.",
      color: "gold",
    },
    {
      icon: Heart,
      title: "Relazioni Professionali Durature",
      highlight: "3-5 anni",
      highlightSuffix: " di rapporto continuativo medio",
      subValue: `${referralCount}%`,
      subLabel: " tasso di referral (ogni cliente ne porta altri)",
      conclusion: "Non sono pratiche \"una tantum\". Sono relazioni professionali durature che costruiscono la tua reputazione nel tempo.",
      color: "primary",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Opportunità</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché Questo È Il Momento Giusto <span className="text-gold">Per Specializzarsi</span>
            </h2>
          </div>

          {/* Stats Grid - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-2xl p-8 hover:border-${stat.color}/30 transition-colors`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color === 'gold' ? 'bg-gold/10' : 'bg-primary/10'}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color === 'gold' ? 'text-gold' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{stat.title}</h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    <span className={stat.color === 'gold' ? 'text-gold' : 'text-primary'}>{stat.highlight}</span>
                    <span className="text-sm font-normal text-muted-foreground">{stat.highlightSuffix}</span>
                  </div>
                  {stat.subValue && (
                    <div className="text-lg text-foreground">
                      <span className={`font-semibold ${stat.color === 'gold' ? 'text-gold' : 'text-primary'}`}>{stat.subValue}</span>
                      <span className="text-muted-foreground">{stat.subLabel}</span>
                    </div>
                  )}
                </div>

                <p className={`text-sm font-medium bg-primary/5 border border-primary/20 rounded-lg p-3 ${stat.color === 'gold' ? 'text-gold' : 'text-primary'}`}>
                  {stat.conclusion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteMarketStatsSection;
