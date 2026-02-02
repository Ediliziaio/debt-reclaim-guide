import { useState } from "react";
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Wrench, 
  Award,
  Rocket,
  ChevronDown,
  ChevronUp,
  Check
} from "lucide-react";

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const ReteBenefitsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      icon: GraduationCap,
      title: "Formazione Tecnica Specialistica Continua",
      description: "Percorso formativo completo su tutte le procedure del Codice della Crisi",
      details: [
        "Webinar mensili su novità normative e giurisprudenziali",
        "Workshop pratici su casi reali",
        "Sessioni di aggiornamento con esperti nazionali",
        "Accesso illimitato alla biblioteca digitale specializzata",
        "Certificazione riconosciuta al termine del percorso",
      ],
    },
    {
      icon: FileText,
      title: "Modelli e Procedure Standardizzate",
      description: "Oltre 50 modelli di atti già testati su centinaia di casi reali",
      details: [
        "Ricorsi per esdebitazione",
        "Piani del consumatore",
        "Accordi di ristrutturazione",
        "Memorie difensive",
        "Istanze e documentazione amministrativa",
      ],
    },
    {
      icon: Users,
      title: "Coordinamento Tecnico Costante",
      description: "Non sei mai solo di fronte a un problema complesso",
      details: [
        "Gruppo riservato per consulenze rapide",
        "Referente dedicato per ogni tipologia di pratica",
        "Revisione preventiva degli atti critici",
        "Supporto in fase di udienza e confronto con creditori",
        "Confronto continuo con colleghi esperti",
      ],
    },
    {
      icon: Wrench,
      title: "Strumenti Operativi Professionali",
      description: "Piattaforma gestionale riservata ai membri della rete",
      details: [
        "Database giurisprudenziale aggiornato settimanalmente",
        "Sistema di case management per tracciare ogni pratica",
        "Repository documentale con migliaia di precedenti",
        "Calendario scadenze e alert automatici",
        "Area riservata per formazione on-demand",
      ],
    },
    {
      icon: Award,
      title: "Posizionamento E Reputazione",
      description: "Utilizzi il marchio RF Ristrutturazioni Debiti, riconosciuto come punto di riferimento nazionale",
      details: [
        "Presenza sul sito nazionale con la tua scheda professionale",
        "Materiali di comunicazione professionali personalizzati",
        "Supporto nella costruzione della tua reputazione locale",
        "Network di referral con altri professionisti della rete",
        "Partecipazione a eventi e convegni nazionali",
      ],
    },
    {
      icon: Rocket,
      title: "Opportunità Di Sviluppo Continuo",
      description: "La rete è un ecosistema di crescita professionale",
      details: [
        "Possibilità di specializzarti in verticali specifiche",
        "Accesso a casi complessi e formativi",
        "Mentorship con i fondatori e i senior della rete",
        "Opportunità di diventare formatore per nuovi membri",
        "Sviluppo di competenze trasversali (negoziazione, mediazione, advisory)",
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosa Ottieni Entrando Nella Rete <span className="text-gold">RF Ristrutturazioni Debiti</span>
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
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-gold/10'}`}>
                      <benefit.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {expandedIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border">
                      <ul className="space-y-2">
                        {benefit.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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

          {/* Summary */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Il know-how che serve davvero, quando serve davvero. <span className="text-gold font-semibold">Tecnologia che potenzia la tua professionalità.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteBenefitsSection;
