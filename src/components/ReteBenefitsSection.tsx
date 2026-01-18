import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Target, 
  Wrench, 
  Award,
  ChevronDown,
  ChevronUp,
  Check
} from "lucide-react";

interface Benefit {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  details: string[];
}

const ReteBenefitsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      icon: GraduationCap,
      title: "Formazione Tecnica Specialistica",
      value: "€8.000/anno",
      description: "Percorso formativo completo su tutte le procedure",
      details: [
        "Legge 3/2012 e Codice della Crisi (D.Lgs. 14/2019)",
        "Procedure di esdebitazione del consumatore",
        "Piano del consumatore e accordo di composizione della crisi",
        "Concordato preventivo e accordi di ristrutturazione",
        "Transazione fiscale con Agenzia delle Entrate",
        "Webinar mensili + Masterclass trimestrali",
        "Accesso piattaforma e-learning riservata",
      ],
    },
    {
      icon: FileText,
      title: "Modelli e Procedure Standardizzate",
      value: "€12.000+",
      description: "50+ modelli di atti già testati e funzionanti",
      details: [
        "Ricorsi, istanze, relazioni, piani già pronti",
        "Checklist operative per ogni tipo di procedura",
        "Flowchart decisionali per scegliere la strategia giusta",
        "Database giurisprudenziale con 300+ sentenze commentate",
        "Template comunicazione con clienti, OCC, tribunali, creditori",
      ],
    },
    {
      icon: Users,
      title: "Coordinamento Tecnico Costante",
      value: "INESTIMABILE",
      description: "Supporto operativo su ogni pratica",
      details: [
        "Avvocato esperto dedicato per supporto legale",
        "Commercialista esperto per analisi finanziarie e piani",
        "Gruppo WhatsApp/Telegram riservato per confronto immediato",
        "Call settimanali di coordinamento con il team centrale",
        "Revisione atti prima del deposito (se richiesto)",
        "Affiancamento in tribunale per udienze complesse",
      ],
    },
    {
      icon: Target,
      title: "Acquisizione Clienti Qualificati",
      value: "€15-30.000/anno",
      description: "Lead generation nazionale per la rete",
      details: [
        "Campagne marketing nazionale (Google Ads, Facebook, LinkedIn)",
        "SEO e content marketing (primi posti su Google)",
        "Partnership con associazioni consumatori e imprenditori",
        "Distribuzione lead in base a zona geografica",
        "Tasso di conversione medio: 65%",
      ],
    },
    {
      icon: Wrench,
      title: "Strumenti Operativi Avanzati",
      value: "€3.000/anno",
      description: "Piattaforma gestionale riservata",
      details: [
        "CRM centralizzato per gestione clienti e pratiche",
        "Software di calcolo per piani di rientro e sostenibilità",
        "Repository documentale con tutti i modelli",
        "Sistema di ticketing per assistenza tecnica",
        "Area riservata con materiali sempre aggiornati",
      ],
    },
    {
      icon: Award,
      title: "Brand e Reputazione",
      value: "INCALCOLABILE",
      description: "Utilizzi il marchio RF Debt Restructuring",
      details: [
        "Presenza sul sito nazionale con scheda studio",
        "Logo e certificazione 'Membro Rete RF'",
        "Materiali di comunicazione brandizzati",
        "Credibilità immediata verso i clienti",
        "Associazione a un network riconosciuto",
      ],
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosa Ottieni Entrando Nella Rete <span className="text-primary">RF Debt Restructuring</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Clicca su ogni voce per vedere i dettagli completi
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <span className="text-lg font-bold text-primary">Valore: {benefit.value}</span>
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {expandedIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-border">
                      <div className="sm:hidden mb-4">
                        <span className="text-lg font-bold text-primary">Valore: {benefit.value}</span>
                      </div>
                      <ul className="space-y-2">
                        {benefit.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className={`bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center ${isInView ? 'animate-fade-up animation-delay-700' : 'opacity-0'}`}>
            <p className="text-lg text-white/80 mb-2">VALORE TOTALE DEL PACCHETTO:</p>
            <p className="text-4xl md:text-5xl font-bold text-white mb-4">€40.000-€60.000/anno</p>
            <p className="text-white/80">Cosa ti chiediamo in cambio? Continua a leggere...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteBenefitsSection;
