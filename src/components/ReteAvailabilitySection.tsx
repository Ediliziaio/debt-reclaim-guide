import { useInView } from "@/hooks/useInView";

const ReteAvailabilitySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const regions = [
    { name: "Lombardia", spots: "3 studi", status: "yellow" },
    { name: "Lazio", spots: "2 studi", status: "yellow" },
    { name: "Campania", spots: "4 studi", status: "green" },
    { name: "Sicilia", spots: "5 studi", status: "green" },
    { name: "Puglia", spots: "2 studi", status: "yellow" },
    { name: "Veneto", spots: "2 studi", status: "yellow" },
    { name: "Emilia-Romagna", spots: "1 studio", status: "red" },
    { name: "Piemonte", spots: "3 studi", status: "green" },
    { name: "Toscana", spots: "2 studi", status: "yellow" },
    { name: "Calabria", spots: "6 studi", status: "green" },
    { name: "Sardegna", spots: "5 studi", status: "green" },
    { name: "Altre regioni", spots: "Contattaci", status: "green" },
  ];

  const statusColors = { green: "bg-primary/20 text-primary", yellow: "bg-amber-500/20 text-amber-600", red: "bg-destructive/20 text-destructive" };
  const statusLabels = { green: "Disponibili", yellow: "Pochi posti", red: "Quasi completo" };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Disponibilità <span className="text-gold">Per Regione</span>
          </h2>
          <p className={`text-center text-muted-foreground mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>Aggiornamento Febbraio 2026</p>
          
          <div className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold text-foreground text-sm">
              <span>Regione</span><span className="text-center">Posti Disponibili</span><span className="text-right">Status</span>
            </div>
            {regions.map((region, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 border-t border-border items-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <span className="text-foreground">{region.name}</span>
                <span className="text-center text-muted-foreground">{region.spots}</span>
                <span className="text-right"><span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[region.status as keyof typeof statusColors]}`}>{statusLabels[region.status as keyof typeof statusLabels]}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteAvailabilitySection;
