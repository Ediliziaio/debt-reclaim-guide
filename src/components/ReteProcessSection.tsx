import { useInView } from "@/hooks/useInView";
import { 
  MessageSquare, 
  Phone, 
  FileText, 
  PenTool, 
  Trophy,
  Check
} from "lucide-react";

const ReteProcessSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const steps = [
    {
      icon: MessageSquare,
      step: "STEP 1",
      title: "Richiesta Informazioni",
      description: "Compila il form di contatto con:",
      details: [
        "Nome, cognome, qualifica (Avv./Dott. Comm.)",
        "Città/provincia di attività",
        "Breve descrizione del tuo studio",
        "Cosa ti interessa dell'opportunità di crescita",
      ],
      note: "Tempo richiesto: 3 minuti",
    },
    {
      icon: Phone,
      step: "STEP 2",
      title: "Call Conoscitiva (30 minuti)",
      description: "Parliamo con te per:",
      details: [
        "Capire se il profilo è compatibile con la rete",
        "Verificare se la tua zona è ancora disponibile",
        "Valutare se ci sono i presupposti per collaborare",
        "Rispondere a tutte le tue domande e perplessità",
      ],
      note: "Senza impegno. Senza pressioni. Solo un confronto professionale.",
    },
    {
      icon: FileText,
      step: "STEP 3",
      title: "Documentazione Completa",
      description: "Se c'è interesse reciproco, ricevi:",
      details: [
        "Contratto di rete dettagliato con tutti i termini",
        "Prospetto completo di diritti e doveri",
        "Overview del metodo operativo e degli strumenti",
        "Testimonianze dettagliate di studi già attivi",
        "Piano di onboarding personalizzato",
      ],
      note: "Hai 15 giorni per valutare tutto con calma e consultarti con chi vuoi.",
    },
    {
      icon: PenTool,
      step: "STEP 4",
      title: "Adesione e Onboarding",
      description: "Se decidi di procedere:",
      details: [
        "Firma del contratto di rete",
        "Accesso immediato a piattaforma e materiali formativi",
        "Inizio percorso formativo strutturato",
        "Assegnazione del tuo referente dedicato",
        "Pianificazione del tuo sviluppo professionale",
      ],
      note: "Entro 30 giorni sei operativo e pronto per le prime pratiche.",
    },
    {
      icon: Trophy,
      step: "STEP 5",
      title: "Primi Risultati",
      description: "Obiettivo: Gestire la prima pratica con successo entro 90 giorni",
      stats: [
        { value: "87%", label: "dei membri gestisce la prima pratica entro 60 giorni" },
        { value: "94%", label: "raggiunge piena operatività entro 6 mesi" },
        { value: "78%", label: "espande significativamente le competenze entro 12 mesi" },
      ],
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Come Funziona Il <span className="text-gold">Processo Di Selezione</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Selezioniamo con cura i professionisti che entrano nella rete. Non cerchiamo numeri, cerchiamo colleghi con cui costruire qualcosa di solido.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />

            {/* Steps */}
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-card border border-border rounded-xl p-4 md:p-6 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className={`text-xs md:text-sm font-semibold ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`}>{step.step}</span>
                          <h3 className="text-base md:text-lg font-bold text-foreground">{step.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        {step.details && (
                          <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`} />
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
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 transition-all duration-700 ${index % 2 === 0 ? 'bg-primary' : 'bg-gold'} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                      <step.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary-foreground' : 'text-navy-dark'}`} />
                    </div>

                    {/* Empty space for the other side */}
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

export default ReteProcessSection;
