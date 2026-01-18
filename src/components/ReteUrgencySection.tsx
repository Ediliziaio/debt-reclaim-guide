import { useInView } from "@/hooks/useInView";
import { MapPin, Zap, Clock, AlertTriangle } from "lucide-react";

const ReteUrgencySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const reasons = [
    {
      icon: MapPin,
      title: "Posti Limitati Per Zona",
      description: "Non accettiamo studi illimitati nella stessa area geografica.",
      detail: "Massimo 2-3 studi per provincia per evitare cannibalizzazione e garantire flusso costante di lead.",
      warning: "Se la tua zona è già coperta... non potrai più entrare.",
    },
    {
      icon: Zap,
      title: "Vantaggio Del First Mover",
      description: "Chi entra prima nella rete:",
      benefits: [
        "Si posiziona come 'lo studio di riferimento' nella zona",
        "Costruisce reputazione locale prima dei competitor",
        "Accumula esperienza e casi di successo",
        "Crea barriere all'ingresso per chi viene dopo",
      ],
      warning: "Chi entra dopo... deve rincorrere.",
    },
    {
      icon: Clock,
      title: "Il Mercato Non Aspetta",
      description: "Ogni giorno che passa:",
      costs: [
        "Altri colleghi stanno facendo domanda",
        "Potenziali clienti stanno andando da altri",
        "Tu stai perdendo fatturato",
        "Le tue competenze restano ferme",
      ],
      warning: "Il momento migliore per entrare era 3 anni fa. Il secondo momento migliore è ADESSO.",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Urgente</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché Devi Decidere <span className="text-primary">ADESSO</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              (E Non "Ci Penso")
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">MOTIVO #{index + 1}</span>
                      <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-foreground mb-4">{reason.description}</p>
                    
                    {reason.detail && (
                      <p className="text-muted-foreground mb-4">{reason.detail}</p>
                    )}
                    
                    {reason.benefits && (
                      <ul className="space-y-2 mb-4">
                        {reason.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {reason.costs && (
                      <ul className="space-y-2 mb-4">
                        {reason.costs.map((cost, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                            {cost}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <p className="font-semibold text-foreground bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
                      ⚠️ {reason.warning}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteUrgencySection;
