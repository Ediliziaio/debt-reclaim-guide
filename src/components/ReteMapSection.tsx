import { useState } from "react";
import { useInView } from "@/hooks/useInView";

interface RegionData {
  name: string;
  studi: number;
  posti: number;
  status: "disponibile" | "pochi" | "quasi-completo";
  path: string;
}

const regions: RegionData[] = [
  { name: "Valle d'Aosta", studi: 0, posti: 2, status: "disponibile", path: "M 145 95 L 160 85 L 175 95 L 170 110 L 155 115 L 145 105 Z" },
  { name: "Piemonte", studi: 1, posti: 3, status: "disponibile", path: "M 120 100 L 145 95 L 155 115 L 170 110 L 180 130 L 195 145 L 180 175 L 150 180 L 130 165 L 115 140 L 120 115 Z" },
  { name: "Lombardia", studi: 3, posti: 3, status: "pochi", path: "M 180 95 L 220 90 L 250 95 L 265 110 L 270 140 L 255 160 L 225 165 L 195 155 L 180 175 L 195 145 L 180 130 Z" },
  { name: "Trentino-Alto Adige", studi: 0, posti: 3, status: "disponibile", path: "M 250 60 L 290 55 L 310 70 L 305 95 L 280 105 L 255 100 L 250 80 Z" },
  { name: "Veneto", studi: 2, posti: 2, status: "pochi", path: "M 265 100 L 280 105 L 305 95 L 330 100 L 340 120 L 330 145 L 295 150 L 270 140 L 265 115 Z" },
  { name: "Friuli-Venezia Giulia", studi: 0, posti: 3, status: "disponibile", path: "M 330 95 L 365 90 L 380 105 L 375 125 L 350 135 L 330 130 L 330 110 Z" },
  { name: "Liguria", studi: 1, posti: 2, status: "pochi", path: "M 130 175 L 150 180 L 180 185 L 210 195 L 195 215 L 155 210 L 125 195 Z" },
  { name: "Emilia-Romagna", studi: 3, posti: 1, status: "quasi-completo", path: "M 195 155 L 225 165 L 255 160 L 295 165 L 330 175 L 325 200 L 285 215 L 240 210 L 195 200 L 180 185 L 180 175 Z" },
  { name: "Toscana", studi: 2, posti: 2, status: "pochi", path: "M 195 200 L 240 210 L 285 215 L 290 245 L 275 280 L 240 295 L 210 275 L 190 240 L 180 215 Z" },
  { name: "Umbria", studi: 1, posti: 2, status: "pochi", path: "M 275 250 L 305 245 L 320 270 L 310 300 L 280 305 L 265 280 Z" },
  { name: "Marche", studi: 1, posti: 2, status: "pochi", path: "M 290 215 L 330 210 L 355 235 L 345 270 L 320 270 L 305 245 L 290 230 Z" },
  { name: "Lazio", studi: 2, posti: 2, status: "pochi", path: "M 240 295 L 275 280 L 280 305 L 310 300 L 330 330 L 320 365 L 280 375 L 250 355 L 230 320 Z" },
  { name: "Abruzzo", studi: 0, posti: 3, status: "disponibile", path: "M 320 270 L 345 270 L 365 295 L 355 330 L 330 330 L 310 300 Z" },
  { name: "Molise", studi: 0, posti: 2, status: "disponibile", path: "M 355 330 L 375 325 L 385 350 L 370 370 L 350 360 L 345 340 Z" },
  { name: "Campania", studi: 1, posti: 4, status: "disponibile", path: "M 320 365 L 350 360 L 370 370 L 385 400 L 370 435 L 340 445 L 310 420 L 300 385 Z" },
  { name: "Puglia", studi: 2, posti: 2, status: "pochi", path: "M 370 370 L 400 360 L 440 380 L 475 420 L 465 455 L 420 470 L 385 455 L 370 435 L 385 400 Z" },
  { name: "Basilicata", studi: 0, posti: 3, status: "disponibile", path: "M 370 435 L 385 455 L 405 480 L 385 505 L 355 495 L 340 460 L 340 445 Z" },
  { name: "Calabria", studi: 0, posti: 6, status: "disponibile", path: "M 355 495 L 385 505 L 395 545 L 380 590 L 350 620 L 330 600 L 340 550 L 345 515 Z" },
  { name: "Sicilia", studi: 1, posti: 5, status: "disponibile", path: "M 260 620 L 310 610 L 355 630 L 375 665 L 350 695 L 290 700 L 240 680 L 235 650 Z" },
  { name: "Sardegna", studi: 0, posti: 5, status: "disponibile", path: "M 80 350 L 115 340 L 140 370 L 145 430 L 130 490 L 100 510 L 70 480 L 65 410 L 70 370 Z" },
];

const statusColors = {
  "disponibile": "fill-primary/20 hover:fill-primary/40 stroke-primary",
  "pochi": "fill-amber-500/20 hover:fill-amber-500/40 stroke-amber-500",
  "quasi-completo": "fill-destructive/20 hover:fill-destructive/40 stroke-destructive",
};

const statusLabels = {
  "disponibile": "Disponibile",
  "pochi": "Pochi posti",
  "quasi-completo": "Quasi completo",
};

const statusDots = {
  "disponibile": "bg-primary",
  "pochi": "bg-amber-500",
  "quasi-completo": "bg-destructive",
};

const ReteMapSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, region: RegionData) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10,
    });
    setHoveredRegion(region);
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
              Passa il mouse sulle regioni per vedere i posti disponibili
            </p>
          </div>

          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Map */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <svg
                viewBox="0 0 500 750"
                className="w-full h-auto"
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {regions.map((region, index) => (
                  <path
                    key={region.name}
                    d={region.path}
                    className={`${statusColors[region.status]} stroke-2 cursor-pointer transition-all duration-300`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'scale(1)' : 'scale(0.95)',
                      transition: `opacity 0.5s ${index * 50}ms, transform 0.5s ${index * 50}ms, fill 0.3s`,
                    }}
                    onMouseMove={(e) => handleMouseMove(e, region)}
                  />
                ))}
              </svg>

              {/* Tooltip */}
              {hoveredRegion && (
                <div
                  className="absolute pointer-events-none z-10 bg-card border border-border rounded-xl shadow-lg p-4 min-w-[200px] transform -translate-x-1/2 -translate-y-full"
                  style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
                >
                  <h4 className="font-bold text-foreground mb-2">{hoveredRegion.name}</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Studi attivi: <span className="font-semibold text-foreground">{hoveredRegion.studi}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Posti disponibili: <span className="font-semibold text-primary">{hoveredRegion.posti}</span>
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`w-2 h-2 rounded-full ${statusDots[hoveredRegion.status]}`} />
                      <span className="font-medium">{statusLabels[hoveredRegion.status]}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend and Stats */}
            <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">24</p>
                  <p className="text-muted-foreground">Studi Attivi</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-secondary mb-2">14</p>
                  <p className="text-muted-foreground">Regioni Coperte</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Posti Disponibili</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-bold text-secondary mb-2">96%</p>
                  <p className="text-muted-foreground">Tasso di Rinnovo</p>
                </div>
              </div>

              {/* Legend */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-foreground mb-4">Legenda</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded bg-primary/30 border-2 border-primary" />
                    <span className="text-muted-foreground">Disponibile - Molti posti liberi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded bg-amber-500/30 border-2 border-amber-500" />
                    <span className="text-muted-foreground">Pochi posti - Affrettati!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded bg-destructive/30 border-2 border-destructive" />
                    <span className="text-muted-foreground">Quasi completo - Ultimi posti</span>
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