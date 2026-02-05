import { MapPin, Users, Briefcase, RefreshCw, Compass, Building2, Sun, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RegionData {
  name: string;
  studi: number;
  posti: number;
  status: "disponibile" | "pochi" | "quasi-completo";
}

interface ZoneData {
  name: string;
  icon: typeof Compass;
  regions: string[];
  studios: number;
  spots: number;
  status: "disponibile" | "pochi" | "quasi-completo";
  gradient: string;
}

const regions: RegionData[] = [
  { name: "Lombardia", studi: 3, posti: 3, status: "pochi" },
  { name: "Veneto", studi: 2, posti: 2, status: "pochi" },
  { name: "Piemonte", studi: 1, posti: 3, status: "disponibile" },
  { name: "Emilia-Romagna", studi: 3, posti: 1, status: "quasi-completo" },
  { name: "Liguria", studi: 1, posti: 2, status: "pochi" },
  { name: "Friuli-Venezia Giulia", studi: 0, posti: 3, status: "disponibile" },
  { name: "Trentino-Alto Adige", studi: 0, posti: 3, status: "disponibile" },
  { name: "Valle d'Aosta", studi: 0, posti: 2, status: "disponibile" },
  { name: "Toscana", studi: 2, posti: 2, status: "pochi" },
  { name: "Lazio", studi: 2, posti: 2, status: "pochi" },
  { name: "Umbria", studi: 1, posti: 2, status: "pochi" },
  { name: "Marche", studi: 1, posti: 2, status: "pochi" },
  { name: "Abruzzo", studi: 0, posti: 3, status: "disponibile" },
  { name: "Molise", studi: 0, posti: 2, status: "disponibile" },
  { name: "Campania", studi: 1, posti: 4, status: "disponibile" },
  { name: "Puglia", studi: 2, posti: 2, status: "pochi" },
  { name: "Basilicata", studi: 0, posti: 3, status: "disponibile" },
  { name: "Calabria", studi: 0, posti: 6, status: "disponibile" },
  { name: "Sicilia", studi: 1, posti: 5, status: "disponibile" },
  { name: "Sardegna", studi: 0, posti: 5, status: "disponibile" },
];

const zones: ZoneData[] = [
  {
    name: "Nord Italia",
    icon: Compass,
    regions: ["Lombardia", "Veneto", "Piemonte", "Emilia-Romagna", "Liguria", "Friuli-VG", "Trentino-AA", "Valle d'Aosta"],
    studios: 10,
    spots: 19,
    status: "pochi",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Centro Italia",
    icon: Building2,
    regions: ["Toscana", "Lazio", "Umbria", "Marche", "Abruzzo", "Molise"],
    studios: 6,
    spots: 13,
    status: "pochi",
    gradient: "from-gold/10 to-gold/5",
  },
  {
    name: "Sud e Isole",
    icon: Sun,
    regions: ["Campania", "Puglia", "Calabria", "Sicilia", "Sardegna", "Basilicata"],
    studios: 4,
    spots: 25,
    status: "disponibile",
    gradient: "from-primary/10 to-gold/5",
  },
];

const statusConfig = {
  "disponibile": {
    label: "Disponibile",
    badgeClass: "bg-primary/20 text-primary border-primary/30",
    dotClass: "bg-primary",
  },
  "pochi": {
    label: "Pochi posti",
    badgeClass: "bg-amber-500/20 text-amber-600 border-amber-500/30",
    dotClass: "bg-amber-500",
  },
  "quasi-completo": {
    label: "Quasi completo",
    badgeClass: "bg-destructive/20 text-destructive border-destructive/30",
    dotClass: "bg-destructive",
  },
};

interface ReteMapSectionProps {
  onOpenContact?: () => void;
}

const ReteMapSection = ({ onOpenContact }: ReteMapSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const studiCount = useAnimatedCounter({ end: 24, duration: 2000, isInView });
  const regioniCount = useAnimatedCounter({ end: 14, duration: 2000, isInView });
  const postiCount = useAnimatedCounter({ end: 57, duration: 2000, isInView });
  const rinnovoCount = useAnimatedCounter({ end: 96, duration: 2000, isInView });

  const scrollToContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="mappa" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="outline" className="mb-4 md:mb-6 bg-primary/10 text-primary border-primary/20">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Copertura Nazionale
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              La Rete in <span className="text-gold">Tutta Italia</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionisti selezionati in ogni regione, con posti limitati per garantire esclusività territoriale
            </p>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {[
              { value: studiCount, suffix: "", label: "Studi Attivi", icon: Users, color: "text-primary" },
              { value: regioniCount, suffix: "", label: "Regioni Coperte", icon: MapPin, color: "text-gold" },
              { value: postiCount, suffix: "+", label: "Posti Disponibili", icon: Briefcase, color: "text-primary" },
              { value: rinnovoCount, suffix: "%", label: "Tasso di Rinnovo", icon: RefreshCw, color: "text-gold" },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color} mb-2 md:mb-3`} />
                <p className={`text-2xl md:text-4xl font-bold ${stat.color} mb-1`}>
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Geographic Zones */}
          <div className={`mb-10 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-lg md:text-2xl font-bold text-foreground text-center mb-6 md:mb-8">
              Zone Geografiche
            </h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {zones.map((zone, index) => (
                <div 
                  key={zone.name}
                  className={`bg-gradient-to-br ${zone.gradient} border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-background border border-border">
                      <zone.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg">{zone.name}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {zone.regions.map((region) => (
                      <span key={region} className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
                        {region}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{zone.studios}</p>
                        <p className="text-xs text-muted-foreground">Studi attivi</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{zone.spots}</p>
                        <p className="text-xs text-muted-foreground">Posti liberi</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig[zone.status].badgeClass}`}>
                      {statusConfig[zone.status].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Availability Table */}
          <div className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="p-4 md:p-6 border-b border-border bg-muted/30">
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Disponibilità Regionale
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Aggiornamento: Febbraio 2026
              </p>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Regione</th>
                    <th className="text-center p-4 font-semibold text-foreground">Studi Attivi</th>
                    <th className="text-center p-4 font-semibold text-foreground">Posti Disponibili</th>
                    <th className="text-center p-4 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {regions.map((region, index) => (
                    <tr key={region.name} className={`border-t border-border hover:bg-muted/30 transition-colors ${index % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
                      <td className="p-4 font-medium text-foreground">{region.name}</td>
                      <td className="p-4 text-center text-muted-foreground">{region.studi}</td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-primary text-lg">{region.posti}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig[region.status].badgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[region.status].dotClass}`} />
                          {statusConfig[region.status].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-border max-h-[400px] overflow-y-auto">
              {regions.map((region) => (
                <div key={region.name} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{region.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {region.studi} studi • <span className="text-primary font-semibold">{region.posti} posti</span>
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusConfig[region.status].badgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[region.status].dotClass}`} />
                    {statusConfig[region.status].label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-10 md:mt-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
            <Button variant="cta" size="lg" onClick={scrollToContact} className="px-8">
              Verifica Disponibilità Nella Tua Zona
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteMapSection;