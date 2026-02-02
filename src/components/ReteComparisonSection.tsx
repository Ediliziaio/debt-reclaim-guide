import { Check, X, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface ReteComparisonSectionProps {
  onOpenContact: () => void;
}

const ReteComparisonSection = ({ onOpenContact }: ReteComparisonSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const dontInvest = [
    "Continuerai a rifiutare casi complessi (che andranno ad altri)",
    "Continuerai a lavorare solo su pratiche ordinarie",
    "Continuerai a non avere le competenze per fare la differenza",
    "Continuerai a vedere altri colleghi crescere e affermarsi",
    "Continuerai a lasciare sul tavolo opportunità professionali importanti",
    "Rimarrai un generalista in un mercato che premia gli specialisti",
  ];

  const doSpecialize = [
    "Acquisisci competenze riconosciute e certificate",
    "Accedi a opportunità professionali di alto livello",
    "Lavori con metodo scientifico (zero improvvisazione)",
    "Hai sempre un team di esperti al tuo fianco",
    "Sviluppi il tuo studio in un settore in forte crescita",
    "Ti affermi come punto di riferimento nella tua zona",
    "Costruisci una carriera professionale distintiva e gratificante",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Cosa Succede Se <span className="text-destructive">Rimani Fermo</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">Sii onesto con te stesso</p>
          </div>

          {/* Intro */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-lg text-foreground mb-4">
              Il mercato dell'esdebitazione sta <span className="text-gold font-semibold">crescendo rapidamente</span>.
            </p>
            <p className="text-muted-foreground mb-4">
              Sempre più persone e aziende cercano questi servizi.
              <br />
              E qualcuno li servirà con eccellenza.
            </p>
            <p className="text-xl font-bold text-foreground">
              La domanda è: sarai TU... o sarà un tuo collega più lungimirante?
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-12">
            {/* Don't Invest Column */}
            <div className={`bg-destructive/5 border border-destructive/20 rounded-2xl p-5 md:p-8 transition-all duration-700 ${isInView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground">Se NON investi nella tua specializzazione:</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {dontInvest.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${400 + index * 80}ms` }}
                  >
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialize Column */}
            <div className={`bg-gold/5 border border-gold/20 rounded-2xl p-5 md:p-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground">Se SCEGLI di specializzarti con la rete:</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {doSpecialize.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${400 + index * 80}ms` }}
                  >
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Statement */}
          <div className={`bg-navy rounded-2xl p-5 md:p-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <p className="text-lg md:text-xl text-white mb-4">La scelta è tua.</p>
            <p className="text-base md:text-lg text-white/70 mb-6">
              Ma tra 12 mesi la situazione sarà molto diversa.
            </p>
            <button 
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy-dark font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors min-h-[48px] w-full md:w-auto justify-center"
            >
              Scegli di Crescere Ora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteComparisonSection;
