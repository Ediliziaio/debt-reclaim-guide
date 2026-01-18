import { useInView } from "@/hooks/useInView";

const StatisticsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { number: "500+", label: "Casi gestiti" },
    { number: "85%", label: "Pratiche risolte positivamente" },
    { number: "10+", label: "Anni di esperienza" },
    { number: "100%", label: "Riservatezza garantita" },
  ];

  return (
    <section ref={ref} className="py-32 bg-card relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gold mb-4 tracking-tight">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
