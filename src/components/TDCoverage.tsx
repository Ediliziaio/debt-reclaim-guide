import { Building2, Navigation, ShieldCheck } from "lucide-react";

const studios = [
  {
    city: "Torino",
    region: "Piemonte",
    area: "Nord",
    coverage: "Italia nord-occidentale",
  },
  {
    city: "Milano",
    region: "Lombardia",
    area: "Nord",
    coverage: "Italia centro-settentrionale",
  },
  {
    city: "Napoli",
    region: "Campania",
    area: "Sud",
    coverage: "Italia centro-meridionale",
  },
];

const TDCoverage = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Dove operiamo</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Lavoriamo in tutta Italia, con tre studi sul territorio.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Le sedi operative sono a <strong className="text-navy">Torino</strong>, <strong className="text-navy">Milano</strong> e <strong className="text-navy">Napoli</strong>. Da qui seguiamo pratiche in tutto il Paese: la maggior parte del lavoro avviene in modalità digitale — videocall, condivisione documenti, firma elettronica — quindi per molti adempimenti non è necessario incontrarsi fisicamente.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Quando occorre la presenza fisica per udienze, atti notarili o depositi in cancelleria, utilizziamo gli studi locali o ci coordiniamo con corrispondenti di fiducia, in modo da ridurre al minimo gli spostamenti del cliente.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-gold-dark mb-1">3</div>
                <div className="text-sm text-foreground/70">Studi operativi</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-gold-dark mb-1">100%</div>
                <div className="text-sm text-foreground/70">Pratiche gestibili da remoto</div>
              </div>
            </div>
          </div>

          {/* Studios — vertical stack of cards with connector */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-9 top-12 bottom-12 w-px bg-gradient-to-b from-gold via-gold-dark to-gold opacity-40 hidden sm:block" aria-hidden="true" />

            <div className="space-y-5 relative">
              {studios.map((s) => (
                <div
                  key={s.city}
                  className="group bg-white rounded-2xl border border-border hover:border-gold hover:shadow-card transition-all duration-300 p-5 lg:p-6 flex items-start gap-5"
                >
                  {/* Icon circle */}
                  <div className="relative shrink-0">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-card group-hover:scale-105 transition-transform">
                      <Building2 className="w-8 h-8 text-gold" />
                    </div>
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-gold text-navy text-[9px] font-black uppercase tracking-wider shadow">
                      {s.area}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl lg:text-2xl font-bold text-navy leading-tight">
                        Studio di {s.city}
                      </h3>
                      <span className="text-xs uppercase tracking-wider font-semibold text-foreground/50">
                        {s.region}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70 mb-3">
                      <Navigation className="w-3.5 h-3.5 text-gold-dark" />
                      <span>{s.coverage}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                      <span className="flex items-center gap-1.5 text-foreground/65">
                        <ShieldCheck className="w-3.5 h-3.5 text-success" />
                        Diagnosi gratuita
                      </span>
                      <span className="flex items-center gap-1.5 text-foreground/65">
                        <ShieldCheck className="w-3.5 h-3.5 text-success" />
                        Su appuntamento
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="text-xs text-foreground/55 italic mt-5 text-center leading-relaxed">
              Le sedi sono raggiungibili su appuntamento. Per la maggior parte degli adempimenti operiamo da remoto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDCoverage;
