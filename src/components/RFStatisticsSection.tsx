import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Users, TrendingDown, Euro, CheckCircle, Star, Clock } from "lucide-react";

const RFStatisticsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Casi Gestiti",
      color: "primary",
    },
    {
      icon: TrendingDown,
      value: 60,
      suffix: "%",
      label: "Riduzione Media del Debito",
      color: "secondary",
    },
    {
      icon: Euro,
      value: 50,
      prefix: "€",
      suffix: "M+",
      label: "Debiti Ristrutturati",
      color: "primary",
    },
    {
      icon: CheckCircle,
      value: 85,
      suffix: "%",
      label: "Pratiche Risolte con Successo",
      color: "secondary",
    },
    {
      icon: Star,
      value: 95,
      suffix: "%",
      label: "Clienti Soddisfatti",
      color: "primary",
    },
    {
      icon: Clock,
      value: 20,
      suffix: "+",
      label: "Anni di Esperienza",
      color: "secondary",
    },
  ];

  return (
    <section id="statistiche" ref={ref} className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gold/5 rounded-full blur-[80px] md:blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              I Numeri Che Contano
            </h2>
            <p className={`text-base md:text-xl text-muted-foreground transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Le chiacchiere stanno a zero. Quello che conta sono i <strong className="text-foreground">RISULTATI</strong>.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Bottom explanation */}
          <div className={`mt-8 md:mt-16 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-background border border-border shadow-soft text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base md:text-xl text-foreground">
              <strong>Tradotto in soldoni?</strong>
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto">
              Se hai €100.000 di debiti, in media li riduciamo a €40.000.<br />
              Se hai €200.000, li portiamo a €80.000.
            </p>
            <p className="text-sm md:text-lg mt-4 md:mt-6 text-primary font-semibold">
              E la parte residua? La rateizziamo su 4-5 anni con importi che puoi DAVVERO sostenere.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 italic">
              Non sono promesse. Sono casi reali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: React.ComponentType<{ className?: string }>;
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    color: string;
  };
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
  const count = useAnimatedCounter({
    end: stat.value,
    duration: 2000,
    isInView,
  });

  const colorClasses = {
    primary: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      border: 'border-primary/20 hover:border-primary/40',
    },
    secondary: {
      bg: 'bg-gold/10',
      text: 'text-gold',
      border: 'border-gold/20 hover:border-gold/40',
    },
  };

  const colors = colorClasses[stat.color as keyof typeof colorClasses];

  return (
    <div
      className={`p-4 md:p-8 rounded-xl md:rounded-2xl bg-background border-2 ${colors.border} transition-all duration-500 shadow-card hover:shadow-soft ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl ${colors.bg} flex items-center justify-center mb-3 md:mb-4`}>
        <stat.icon className={`w-5 h-5 md:w-7 md:h-7 ${colors.text}`} />
      </div>
      <div className={`text-2xl md:text-4xl lg:text-5xl font-bold ${colors.text} mb-1 md:mb-2`}>
        {stat.prefix}
        {isInView ? count : 0}
        {stat.suffix}
      </div>
      <p className="text-xs md:text-base text-muted-foreground font-medium">
        {stat.label}
      </p>
    </div>
  );
};

export default RFStatisticsSection;
