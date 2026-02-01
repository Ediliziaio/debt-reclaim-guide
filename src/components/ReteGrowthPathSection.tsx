import { Target, TrendingUp, Award, Check } from "lucide-react";

const ReteGrowthPathSection = () => {
  const years = [
    {
      icon: Target,
      year: "Primo Anno",
      subtitle: "Le Fondamenta",
      objective: "Acquisire competenze solide e gestire le prime pratiche con sicurezza",
      milestones: [
        "Completi il percorso formativo di base",
        "Gestisci le prime pratiche con affiancamento completo",
        "Costruisci la tua reputazione locale nel settore",
        "Sviluppi il metodo operativo nel tuo studio",
        "Inizi a ricevere referral da colleghi e clienti soddisfatti",
      ],
      color: "primary",
    },
    {
      icon: TrendingUp,
      year: "Secondo Anno",
      subtitle: "Il Consolidamento",
      objective: "Diventare autonomo e riconosciuto nel tuo territorio",
      milestones: [
        "Gestisci pratiche complesse in autonomia",
        "Espandi la tua rete di referral professionali",
        "Ti posizioni come riferimento nella tua zona",
        "Sviluppi specializzazioni verticali (es. crisi d'impresa o consumatori)",
        "Inizi a formare altri professionisti del tuo studio",
      ],
      color: "gold",
    },
    {
      icon: Award,
      year: "Terzo Anno",
      subtitle: "La Leadership",
      objective: "Affermarti come esperto riconosciuto e leader del settore",
      milestones: [
        "Sei riconosciuto come uno dei massimi esperti nella tua area",
        "Gestisci casi complessi di alto profilo",
        "Contribuisci alla formazione di nuovi membri della rete",
        "Sviluppi relazioni strategiche con istituzioni e ordini professionali",
        "Espandi ulteriormente le tue competenze e il tuo impatto",
      ],
      color: "primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Il Percorso Di Crescita <span className="text-gold">Professionale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Un piano chiaro per la tua evoluzione nel settore
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {years.map((year, index) => (
                <div 
                  key={index} 
                  className="relative"
                >
                  <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`bg-card border border-border rounded-2xl p-8 hover:border-${year.color}/30 transition-colors`}>
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${year.color === 'gold' ? 'bg-gold/10' : 'bg-primary/10'}`}>
                            <year.icon className={`w-6 h-6 ${year.color === 'gold' ? 'text-gold' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${year.color === 'gold' ? 'text-gold' : 'text-primary'}`}>{year.year}</h3>
                            <p className="text-foreground font-semibold">{year.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className={`text-muted-foreground mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <strong className="text-foreground">Obiettivo:</strong> {year.objective}
                        </p>
                        
                        <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                          {year.milestones.map((milestone, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${year.color === 'gold' ? 'text-gold' : 'text-primary'}`} />
                              <span className="text-foreground text-sm">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center z-10 border-4 border-background ${year.color === 'gold' ? 'bg-gold' : 'bg-primary'}`}>
                      <year.icon className={`w-7 h-7 ${year.color === 'gold' ? 'text-navy-dark' : 'text-primary-foreground'}`} />
                    </div>

                    {/* Empty space */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteGrowthPathSection;
