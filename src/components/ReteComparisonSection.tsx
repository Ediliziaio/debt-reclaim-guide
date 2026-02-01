import { useInView } from "@/hooks/useInView";
import { Check, X, ArrowRight } from "lucide-react";

interface ReteComparisonSectionProps {
  onOpenContact: () => void;
}

const ReteComparisonSection = ({ onOpenContact }: ReteComparisonSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const dontJoin = [
    "Continuerai a dire NO a clienti potenziali (che andranno altrove)",
    "Continuerai a lavorare su pratiche a basso valore aggiunto",
    "Continuerai a non avere le competenze per gestire casi complessi",
    "Continuerai a vedere altri colleghi crescere in questo settore",
    "Continuerai a lasciare sul tavolo €50.000-€100.000/anno di fatturato",
  ];

  const doJoin = [
    "Acquisisci competenze altamente specialistiche",
    "Accedi a un flusso costante di clienti qualificati",
    "Lavori con un metodo collaudato (zero improvvisazione)",
    "Hai sempre supporto di colleghi esperti",
    "Moltiplichi il fatturato con pratiche ad alto valore",
    "Ti posizioni come esperto nella tua zona",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosa Succede Se <span className="text-destructive">NON</span> Entri Nella Rete?
            </h2>
            <p className="text-lg text-muted-foreground">(La Verità Scomoda)</p>
          </div>

          {/* Intro */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            <p className="text-lg text-foreground mb-4">
              Lascia che sia brutalmente onesto:
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              Il mercato dell'esdebitazione sta <span className="text-primary">esplodendo</span>.
            </p>
            <p className="text-muted-foreground">
              Sempre più persone e aziende hanno bisogno di questi servizi.
              <br />
              E qualcuno li servirà.
            </p>
            <p className="text-xl font-bold text-foreground mt-4">
              La domanda è: sarai TU... o sarà un tuo collega più smart?
            </p>
          </div>

          {/* Comparison Grid */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {/* Don't Join Column */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Se NON entri nella rete:</h3>
              </div>
              <ul className="space-y-4">
                {dontJoin.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Column */}
            <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Se ENTRI nella rete:</h3>
              </div>
              <ul className="space-y-4">
                {doJoin.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Statement */}
          <div className={`bg-navy rounded-2xl p-8 text-center ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <p className="text-xl text-white mb-4">La scelta è tua.</p>
            <p className="text-lg text-white/70 mb-6">
              Ma tra 12 mesi la situazione sarà molto diversa.
            </p>
            <button 
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy-dark font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Scegli di Entrare Ora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteComparisonSection;
