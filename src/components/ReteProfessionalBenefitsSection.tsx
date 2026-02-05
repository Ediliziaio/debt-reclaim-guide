import { Scale, Calculator, Briefcase, Check, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

interface ReteProfessionalBenefitsSectionProps {
  onOpenContact: () => void;
}

const ReteProfessionalBenefitsSection = ({ onOpenContact }: ReteProfessionalBenefitsSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState<"avvocati" | "commercialisti" | "consulenti">("avvocati");

  const professionals = {
    avvocati: {
      icon: Scale,
      title: "Per gli Avvocati",
      color: "primary",
      subtitle: "Amplia le tue competenze legali nel settore della crisi",
      benefits: [
        {
          title: "Specializzazione Legale Certificata",
          description: "Acquisisci competenze specifiche nel Codice della Crisi d'Impresa e dell'Insolvenza, diventando un punto di riferimento per clienti e colleghi."
        },
        {
          title: "Modelli di Atti Già Testati",
          description: "Accesso a ricorsi, memorie, piani del consumatore e accordi di ristrutturazione già collaudati su centinaia di casi reali."
        },
        {
          title: "Coordinamento con Commercialisti",
          description: "Lavora in sinergia con professionisti contabili per garantire analisi finanziarie precise a supporto della strategia legale."
        },
        {
          title: "Supporto in Udienza",
          description: "Affiancamento e revisione preventiva degli atti critici prima del confronto con creditori e tribunali."
        },
        {
          title: "Casi Complessi Formativi",
          description: "Accedi a pratiche di alto profilo che accelerano la tua crescita professionale e il tuo portfolio."
        }
      ],
      cta: "Sono un Avvocato - Voglio Crescere"
    },
    commercialisti: {
      icon: Calculator,
      title: "Per i Commercialisti",
      color: "gold",
      subtitle: "Integra la consulenza sulla crisi nei tuoi servizi",
      benefits: [
        {
          title: "Competenze Integrate Legale-Contabili",
          description: "Formazione specifica sulla parte legale per comprendere e supportare al meglio le procedure di esdebitazione."
        },
        {
          title: "Analisi Patrimoniali Strutturate",
          description: "Metodologie collaudate per redigere relazioni patrimoniali, piani di liquidazione e attestazioni tecniche."
        },
        {
          title: "Gestione Crisi d'Impresa",
          description: "Diventa il consulente di riferimento per PMI e imprenditori che affrontano situazioni di sovraindebitamento."
        },
        {
          title: "Coordinamento con la Rete Legale",
          description: "Lavora fianco a fianco con avvocati specializzati per offrire un servizio completo ai tuoi clienti."
        },
        {
          title: "Nuova Linea di Fatturato",
          description: "Sviluppa un verticale redditizio che si integra perfettamente con i tuoi servizi contabili e fiscali."
        }
      ],
      cta: "Sono un Commercialista - Voglio Crescere"
    },
    consulenti: {
      icon: Briefcase,
      title: "Per i Consulenti del Lavoro",
      color: "primary",
      subtitle: "Proteggi i tuoi clienti dalle situazioni di crisi",
      benefits: [
        {
          title: "Intercettazione Precoce della Crisi",
          description: "Grazie al tuo accesso privilegiato ai dati aziendali, puoi identificare i primi segnali di difficoltà finanziaria."
        },
        {
          title: "Tutela dei Lavoratori",
          description: "Competenze per gestire al meglio le situazioni di crisi aziendale proteggendo i diritti dei dipendenti."
        },
        {
          title: "Consulenza Integrata",
          description: "Offri ai tuoi clienti imprenditori un servizio completo che include la gestione del sovraindebitamento."
        },
        {
          title: "Referral Qualificati",
          description: "Quando identifichi una situazione critica, hai una rete di specialisti pronti a intervenire con professionalità."
        },
        {
          title: "Formazione Specifica",
          description: "Percorso formativo dedicato alle specificità del Consulente del Lavoro nel contesto della crisi d'impresa."
        }
      ],
      cta: "Sono un Consulente del Lavoro - Voglio Crescere"
    }
  };

  const activeData = professionals[activeTab];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Vantaggi Specifici <span className="text-gold">Per La Tua Professione</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Ogni categoria professionale ha esigenze diverse. Scopri come la rete può aiutarti.
            </p>
          </div>

          {/* Tabs */}
          <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 md:mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {(Object.keys(professionals) as Array<keyof typeof professionals>).map((key) => {
              const prof = professionals[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all min-h-[48px] flex-1 ${
                    isActive
                      ? prof.color === "gold"
                        ? "bg-gold text-navy-dark"
                        : "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  <prof.icon className="w-5 h-5" />
                  <span className="text-sm md:text-base">{prof.title.replace("Per ", "")}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className={`bg-card border border-border rounded-2xl p-5 md:p-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${activeData.color === "gold" ? "bg-gold/10" : "bg-primary/10"}`}>
                <activeData.icon className={`w-7 h-7 ${activeData.color === "gold" ? "text-gold" : "text-primary"}`} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{activeData.title}</h3>
                <p className="text-muted-foreground">{activeData.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {activeData.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activeData.color === "gold" ? "bg-gold/10" : "bg-primary/10"}`}>
                    <Check className={`w-5 h-5 ${activeData.color === "gold" ? "text-gold" : "text-primary"}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onOpenContact}
                className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors min-h-[48px] ${
                  activeData.color === "gold"
                    ? "bg-gold hover:bg-gold/90 text-navy-dark"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {activeData.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Note */}
          <div className={`text-center mt-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">Lavoriamo insieme.</span> La sinergia tra Avvocati, Commercialisti e Consulenti del Lavoro è il nostro punto di forza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteProfessionalBenefitsSection;
