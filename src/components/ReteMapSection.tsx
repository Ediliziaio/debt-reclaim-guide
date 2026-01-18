import { useState } from "react";
import { useInView } from "@/hooks/useInView";

interface RegionData {
  name: string;
  studi: number;
  posti: number;
  status: "disponibile" | "pochi" | "quasi-completo";
  x: number;
  y: number;
}

const regions: RegionData[] = [
  { name: "Valle d'Aosta", studi: 0, posti: 2, status: "disponibile", x: 160, y: 105 },
  { name: "Piemonte", studi: 1, posti: 3, status: "disponibile", x: 155, y: 150 },
  { name: "Lombardia", studi: 3, posti: 3, status: "pochi", x: 225, y: 130 },
  { name: "Trentino-Alto Adige", studi: 0, posti: 3, status: "disponibile", x: 280, y: 80 },
  { name: "Veneto", studi: 2, posti: 2, status: "pochi", x: 305, y: 130 },
  { name: "Friuli-Venezia Giulia", studi: 0, posti: 3, status: "disponibile", x: 355, y: 115 },
  { name: "Liguria", studi: 1, posti: 2, status: "pochi", x: 175, y: 200 },
  { name: "Emilia-Romagna", studi: 3, posti: 1, status: "quasi-completo", x: 260, y: 195 },
  { name: "Toscana", studi: 2, posti: 2, status: "pochi", x: 235, y: 260 },
  { name: "Umbria", studi: 1, posti: 2, status: "pochi", x: 290, y: 285 },
  { name: "Marche", studi: 1, posti: 2, status: "pochi", x: 325, y: 260 },
  { name: "Lazio", studi: 2, posti: 2, status: "pochi", x: 280, y: 345 },
  { name: "Abruzzo", studi: 0, posti: 3, status: "disponibile", x: 340, y: 310 },
  { name: "Molise", studi: 0, posti: 2, status: "disponibile", x: 365, y: 355 },
  { name: "Campania", studi: 1, posti: 4, status: "disponibile", x: 340, y: 410 },
  { name: "Puglia", studi: 2, posti: 2, status: "pochi", x: 420, y: 420 },
  { name: "Basilicata", studi: 0, posti: 3, status: "disponibile", x: 375, y: 465 },
  { name: "Calabria", studi: 0, posti: 6, status: "disponibile", x: 365, y: 555 },
  { name: "Sicilia", studi: 1, posti: 5, status: "disponibile", x: 305, y: 660 },
  { name: "Sardegna", studi: 0, posti: 5, status: "disponibile", x: 105, y: 430 },
];

const statusConfig = {
  "disponibile": {
    color: "bg-primary",
    glow: "shadow-[0_0_20px_8px_hsl(142_71%_45%/0.6)]",
    glowHover: "hover:shadow-[0_0_35px_15px_hsl(142_71%_45%/0.8)]",
    pulse: true,
    label: "Disponibile",
  },
  "pochi": {
    color: "bg-amber-500",
    glow: "shadow-[0_0_15px_5px_hsl(38_92%_50%/0.5)]",
    glowHover: "hover:shadow-[0_0_30px_12px_hsl(38_92%_50%/0.7)]",
    pulse: false,
    label: "Pochi posti",
  },
  "quasi-completo": {
    color: "bg-destructive",
    glow: "shadow-[0_0_15px_5px_hsl(0_84%_60%/0.5)]",
    glowHover: "hover:shadow-[0_0_30px_12px_hsl(0_84%_60%/0.7)]",
    pulse: false,
    label: "Quasi completo",
  },
};

const ReteMapSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (region: RegionData, x: number, y: number) => {
    setHoveredRegion(region);
    setTooltipPosition({ x, y });
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              Copertura Nazionale
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              La Rete in Italia
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Passa il mouse sui punti per vedere i posti disponibili nella tua regione
            </p>
          </div>

          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Map Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Italy Background Map SVG */}
              <svg
                viewBox="0 0 500 750"
                className="w-full h-auto"
              >
                {/* Italy silhouette as background - simplified shape */}
                <defs>
                  <linearGradient id="italyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(142 71% 45%)" stopOpacity="0.05" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Full Italy Path - stylized background */}
                <path
                  d="M 145 95 L 160 85 L 175 95 L 180 95 L 220 90 L 250 95 L 250 60 L 290 55 L 310 70 L 330 95 L 365 90 L 380 105 L 375 125 L 350 135 L 330 145 L 295 150 L 295 165 L 330 175 L 355 235 L 345 270 L 365 295 L 375 325 L 400 360 L 440 380 L 475 420 L 465 455 L 420 470 L 385 455 L 405 480 L 395 545 L 380 590 L 350 620 L 355 630 L 375 665 L 350 695 L 290 700 L 240 680 L 235 650 L 260 620 L 310 610 L 330 600 L 340 550 L 345 515 L 355 495 L 340 460 L 340 445 L 310 420 L 300 385 L 280 375 L 250 355 L 230 320 L 240 295 L 210 275 L 190 240 L 180 215 L 155 210 L 125 195 L 130 165 L 115 140 L 120 115 L 120 100 Z M 80 350 L 115 340 L 140 370 L 145 430 L 130 490 L 100 510 L 70 480 L 65 410 L 70 370 Z"
                  fill="url(#italyGradient)"
                  stroke="hsl(217 91% 60%)"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  className="transition-all duration-500"
                />
              </svg>

              {/* Interactive Markers */}
              <div className="absolute inset-0">
                {regions.map((region, index) => {
                  const config = statusConfig[region.status];
                  const markerSize = region.posti >= 4 ? 18 : region.posti >= 2 ? 14 : 12;
                  
                  return (
                    <div
                      key={region.name}
                      className={`absolute cursor-pointer transition-all duration-300 ease-out
                        ${config.color} ${config.glow} ${config.glowHover}
                        rounded-full border-2 border-white/50
                        hover:scale-150 hover:z-20
                        ${config.pulse ? 'animate-pulse-glow' : ''}
                      `}
                      style={{
                        left: `${(region.x / 500) * 100}%`,
                        top: `${(region.y / 750) * 100}%`,
                        width: `${markerSize}px`,
                        height: `${markerSize}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: isInView ? 1 : 0,
                        transitionDelay: `${index * 80}ms`,
                      }}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                        if (rect) {
                          handleMouseEnter(region, 
                            e.clientX - rect.left, 
                            e.clientY - rect.top - 80
                          );
                        }
                      }}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      {/* Inner pulse ring for available spots */}
                      {config.pulse && (
                        <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Tooltip */}
              {hoveredRegion && (
                <div
                  className="absolute pointer-events-none z-30 bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl p-4 min-w-[220px] transform -translate-x-1/2 transition-all duration-200"
                  style={{ 
                    left: tooltipPosition.x, 
                    top: tooltipPosition.y,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-3 h-3 rounded-full ${statusConfig[hoveredRegion.status].color}`} />
                    <h4 className="font-bold text-foreground">{hoveredRegion.name}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Studi attivi:</span>
                      <span className="font-semibold text-foreground">{hoveredRegion.studi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Posti disponibili:</span>
                      <span className="font-bold text-primary text-lg">{hoveredRegion.posti}</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        hoveredRegion.status === 'disponibile' ? 'bg-primary/20 text-primary' :
                        hoveredRegion.status === 'pochi' ? 'bg-amber-500/20 text-amber-600' :
                        'bg-destructive/20 text-destructive'
                      }`}>
                        {statusConfig[hoveredRegion.status].label}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend and Stats */}
            <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">24</p>
                  <p className="text-muted-foreground">Studi Attivi</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors">
                  <p className="text-4xl font-bold text-secondary mb-2">14</p>
                  <p className="text-muted-foreground">Regioni Coperte</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Posti Disponibili</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors">
                  <p className="text-4xl font-bold text-secondary mb-2">96%</p>
                  <p className="text-muted-foreground">Tasso di Rinnovo</p>
                </div>
              </div>

              {/* Legend */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-foreground mb-4">Legenda</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_4px_hsl(142_71%_45%/0.5)] animate-pulse" />
                    <span className="text-foreground">Disponibile - Molti posti liberi</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_8px_3px_hsl(38_92%_50%/0.4)]" />
                    <span className="text-foreground">Pochi posti - Affrettati!</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full bg-destructive shadow-[0_0_8px_3px_hsl(0_84%_60%/0.4)]" />
                    <span className="text-foreground">Quasi completo - Ultimi posti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for pulse glow animation */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px 5px hsl(142 71% 45% / 0.5);
          }
          50% {
            box-shadow: 0 0 30px 12px hsl(142 71% 45% / 0.8);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ReteMapSection;