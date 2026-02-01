import { useState, useEffect } from "react";
import italyMapImage from "@/assets/italy-regions-map.png";

interface RegionData {
  name: string;
  studi: number;
  posti: number;
  status: "disponibile" | "pochi" | "quasi-completo";
  x: number;
  y: number;
}

// Coordinate ricalibrate con precisione per la mappa con regioni
const regions: RegionData[] = [
  { name: "Valle d'Aosta", studi: 0, posti: 2, status: "disponibile", x: 85, y: 105 },
  { name: "Piemonte", studi: 1, posti: 3, status: "disponibile", x: 110, y: 145 },
  { name: "Lombardia", studi: 3, posti: 3, status: "pochi", x: 175, y: 130 },
  { name: "Trentino-Alto Adige", studi: 0, posti: 3, status: "disponibile", x: 245, y: 70 },
  { name: "Veneto", studi: 2, posti: 2, status: "pochi", x: 280, y: 130 },
  { name: "Friuli-Venezia Giulia", studi: 0, posti: 3, status: "disponibile", x: 335, y: 115 },
  { name: "Liguria", studi: 1, posti: 2, status: "pochi", x: 130, y: 200 },
  { name: "Emilia-Romagna", studi: 3, posti: 1, status: "quasi-completo", x: 235, y: 185 },
  { name: "Toscana", studi: 2, posti: 2, status: "pochi", x: 195, y: 255 },
  { name: "Umbria", studi: 1, posti: 2, status: "pochi", x: 255, y: 295 },
  { name: "Marche", studi: 1, posti: 2, status: "pochi", x: 295, y: 270 },
  { name: "Lazio", studi: 2, posti: 2, status: "pochi", x: 245, y: 345 },
  { name: "Abruzzo", studi: 0, posti: 3, status: "disponibile", x: 300, y: 325 },
  { name: "Molise", studi: 0, posti: 2, status: "disponibile", x: 325, y: 365 },
  { name: "Campania", studi: 1, posti: 4, status: "disponibile", x: 295, y: 410 },
  { name: "Puglia", studi: 2, posti: 2, status: "pochi", x: 365, y: 400 },
  { name: "Basilicata", studi: 0, posti: 3, status: "disponibile", x: 335, y: 450 },
  { name: "Calabria", studi: 0, posti: 6, status: "disponibile", x: 325, y: 530 },
  { name: "Sicilia", studi: 1, posti: 5, status: "disponibile", x: 260, y: 650 },
  { name: "Sardegna", studi: 0, posti: 5, status: "disponibile", x: 80, y: 400 },
];

const statusConfig = {
  "disponibile": {
    color: "bg-primary",
    shadow: "0 0 10px 4px hsl(142 71% 45% / 0.5)",
    label: "Disponibile",
  },
  "pochi": {
    color: "bg-amber-500",
    shadow: "0 0 8px 3px hsl(38 92% 50% / 0.4)",
    label: "Pochi posti",
  },
  "quasi-completo": {
    color: "bg-destructive",
    shadow: "0 0 8px 3px hsl(0 84% 60% / 0.4)",
    label: "Quasi completo",
  },
};

const ReteMapSection = () => {
  const [activeRegion, setActiveRegion] = useState<RegionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (region: RegionData, x: number, y: number) => {
    if (isTouchDevice) {
      if (activeRegion?.name === region.name) {
        setActiveRegion(null);
      } else {
        setActiveRegion(region);
        setTooltipPosition({ x, y: y - 80 });
      }
    } else {
      setActiveRegion(region);
      setTooltipPosition({ x, y: y - 80 });
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setActiveRegion(null);
    }
  };

  // Marker size based on device
  const baseSize = isTouchDevice ? 24 : 16;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs md:text-sm mb-4 md:mb-6">
              Copertura Nazionale
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              La Rete in Italia
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {isTouchDevice ? "Tocca i punti" : "Passa il mouse sui punti"} per vedere i posti disponibili nella tua regione
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Map Container */}
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg select-none">
              {/* Italy Background Image */}
              <div className="relative w-full aspect-[2/3]">
                <img 
                  src={italyMapImage} 
                  alt="Mappa dell'Italia con regioni" 
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>

              {/* Interactive Markers */}
              <div className="absolute inset-0">
                {regions.map((region, index) => {
                  const config = statusConfig[region.status];
                  const markerSize = region.posti >= 4 ? baseSize + 6 : region.posti >= 2 ? baseSize + 3 : baseSize;
                  const isActive = activeRegion?.name === region.name;
                  
                  return (
                    <div
                      key={region.name}
                      className={`absolute cursor-pointer rounded-full border-2 border-white transition-transform duration-200 ${config.color} ${isActive ? 'scale-150 z-20' : 'hover:scale-125 hover:z-10'}`}
                      style={{
                        left: `${(region.x / 500) * 100}%`,
                        top: `${(region.y / 800) * 100}%`,
                        width: `${markerSize}px`,
                        height: `${markerSize}px`,
                        transform: `translate(-50%, -50%)${isActive ? ' scale(1.5)' : ''}`,
                        boxShadow: config.shadow,
                      }}
                      onMouseEnter={(e) => {
                        if (!isTouchDevice) {
                          const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (rect) {
                            handleInteraction(region, e.clientX - rect.left, e.clientY - rect.top);
                          }
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                      onClick={(e) => {
                        if (isTouchDevice) {
                          const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                          if (rect) {
                            handleInteraction(region, e.clientX - rect.left, e.clientY - rect.top);
                          }
                        }
                      }}
                    />
                  );
                })}
              </div>

              {/* Tooltip */}
              {activeRegion && (
                <div
                  className="absolute pointer-events-none z-30 bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl p-3 md:p-4 min-w-[180px] md:min-w-[220px] transform -translate-x-1/2 transition-all duration-200"
                  style={{ 
                    left: Math.min(Math.max(tooltipPosition.x, 100), 400), 
                    top: Math.max(tooltipPosition.y, 20),
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <span className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${statusConfig[activeRegion.status].color}`} />
                    <h4 className="font-bold text-foreground text-sm md:text-base">{activeRegion.name}</h4>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Studi attivi:</span>
                      <span className="font-semibold text-foreground">{activeRegion.studi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Posti disponibili:</span>
                      <span className="font-bold text-primary text-base md:text-lg">{activeRegion.posti}</span>
                    </div>
                    <div className="pt-1.5 md:pt-2 border-t border-border">
                      <span className={`inline-block px-2 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${
                        activeRegion.status === 'disponibile' ? 'bg-primary/20 text-primary' :
                        activeRegion.status === 'pochi' ? 'bg-amber-500/20 text-amber-600' :
                        'bg-destructive/20 text-destructive'
                      }`}>
                        {statusConfig[activeRegion.status].label}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend and Stats */}
            <div className="flex-1 space-y-4 md:space-y-8 w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <p className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">24</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Studi Attivi</p>
                </div>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors">
                  <p className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">14</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Regioni Coperte</p>
                </div>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <p className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">50+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Posti Disponibili</p>
                </div>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors">
                  <p className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">96%</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Tasso di Rinnovo</p>
                </div>
              </div>

              {/* Legend */}
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Legenda</h4>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary flex-shrink-0" style={{ boxShadow: statusConfig['disponibile'].shadow }} />
                    <span className="text-foreground text-xs md:text-sm">Disponibile - Molti posti liberi</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-500 flex-shrink-0" style={{ boxShadow: statusConfig['pochi'].shadow }} />
                    <span className="text-foreground text-xs md:text-sm">Pochi posti - Affrettati!</span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-destructive flex-shrink-0" style={{ boxShadow: statusConfig['quasi-completo'].shadow }} />
                    <span className="text-foreground text-xs md:text-sm">Quasi completo - Ultimi posti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteMapSection;
