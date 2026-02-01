import { useInView } from "@/hooks/useInView";
import { 
  MessageSquare, 
  Phone, 
  FileText, 
  PenTool, 
  Trophy,
  ArrowRight,
  Check
} from "lucide-react";

const ReteProcessSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const steps = [
    {
      icon: MessageSquare,
      step: "STEP 1",
      title: "Richiesta Informazioni",
      description: "Compila il form oppure chiamaci",
      details: [
        "Nome, cognome, qualifica (Avv./Dott. Comm.)",
        "Città/provincia di attività",
        "Breve descrizione del tuo studio",
        "Cosa ti interessa dell'adesione",
      ],
    },
    {
      icon: Phone,
      step: "STEP 2",
      title: "Call Conoscitiva (30 minuti)",
      description: "Parliamo con te per capire:",
      details: [
        "Se il profilo è compatibile",
        "Se la tua zona è ancora disponibile",
        "Se ci sono i presupposti per collaborare",
        "Se hai domande o dubbi specifici",
      ],
      note: "Senza impegno. Senza pressioni.",
    },
    {
      icon: FileText,
      step: "STEP 3",
      title: "Invio Documentazione Completa",
      description: "Se c'è interesse reciproco, ricevi:",
      details: [
        "Contratto di rete dettagliato",
        "Prospetto economico completo",
        "Overview del metodo operativo",
        "Testimonianze studi già attivi",
        "Piano di onboarding",
      ],
      note: "Hai 15 giorni per valutare tutto con calma.",
    },
    {
      icon: PenTool,
      step: "STEP 4",
      title: "Firma e Onboarding",
      description: "Se decidi di procedere:",
      details: [
        "Firma del contratto di rete",
        "Pagamento primo trimestre (€900+IVA)",
        "Accesso immediato a piattaforma e materiali",
        "Inizio percorso formativo",
        "Assegnazione referente dedicato",
      ],
      note: "Entro 30 giorni sei operativo sulla prima pratica.",
    },
    {
      icon: Trophy,
      step: "STEP 5",
      title: "Primi Risultati",
      description: "Obiettivo: prima pratica chiusa entro 90 giorni",
      stats: [
        { value: "87%", label: "chiude prima pratica entro 60 giorni" },
        { value: "94%", label: "recupera contributo entro 6 mesi" },
        { value: "78%", label: "quadruplica fatturato entro 12 mesi" },
      ],
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Come Funziona Il <span className="text-primary">Processo Di Adesione</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              (I Prossimi Passi)
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className={`text-sm font-semibold ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`}>{step.step}</span>
                          <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        {step.details && (
                          <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {step.stats && (
                          <div className="space-y-3">
                            {step.stats.map((stat, i) => (
                              <div key={i} className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                <span className="text-2xl font-bold text-gold">{stat.value}</span>
                                <span className="text-sm text-muted-foreground">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {step.note && (
                          <p className={`text-sm font-medium mt-4 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`}>{step.note}</p>
                        )}
                      </div>
                    </div>

                    {/* Icon (center) */}
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 ${index % 2 === 0 ? 'bg-primary' : 'bg-gold'}`}>
                      <step.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-navy-dark'}`} />
                    </div>

                    {/* Empty space for the other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow to Contact */}
          <div className={`mt-12 text-center ${isInView ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
            <ArrowRight className="w-8 h-8 text-primary mx-auto animate-bounce-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteProcessSection;
