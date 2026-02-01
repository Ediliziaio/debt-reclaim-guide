import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { ArrowRight, Minus, Plus } from "lucide-react";

interface ReteFinalCTASectionProps {
  onOpenContact: () => void;
}

const ReteFinalCTASection = ({ onOpenContact }: ReteFinalCTASectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const stayPath = [
    "Continua a lavorare come hai sempre fatto",
    "Rifiuta i casi complessi",
    "Guarda altri colleghi specializzarsi e crescere",
    "Tra un anno sarai nello stesso punto, forse più indietro rispetto al mercato",
  ];

  const growPath = [
    "Investi nella tua formazione specialistica",
    "Entra in una rete di professionisti eccellenti",
    "Diventa il punto di riferimento nel tuo territorio",
    "Tra un anno sarai un professionista diverso, con competenze che oggi non hai",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-gradient-to-br from-navy via-navy to-navy-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Il Momento Di Decidere È <span className="text-gold">Adesso</span>
            </h2>
            <p className="text-xl text-white/80">Hai due strade davanti:</p>
          </div>

          {/* Two Paths */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {/* Stay Path */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <Minus className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-white">Strada 1: Rimanere dove sei</h3>
              </div>
              <ul className="space-y-4">
                {stayPath.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grow Path */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">Strada 2: Scegliere di crescere</h3>
              </div>
              <ul className="space-y-4">
                {growPath.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Message */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <p className="text-lg text-white/80 mb-6">
              La differenza tra un professionista che cresce e uno che rimane fermo non è il talento.
            </p>
            <p className="text-2xl font-bold text-gold mb-8">
              È la scelta di investire nella propria evoluzione professionale.
            </p>
            <p className="text-xl text-white font-semibold">
              Cosa Farai Tu?
            </p>
          </div>

          {/* CTA */}
          <div className={`text-center ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <Button 
              variant="cta" 
              size="xxl" 
              onClick={onOpenContact}
              className="text-lg px-12"
            >
              Richiedi Informazioni Ora
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-white/50 text-sm mt-4">
              RF Ristrutturazione Debiti - La prima rete nazionale specializzata in esdebitazione e crisi d'impresa
            </p>
            <p className="text-gold/70 text-sm mt-2">
              Costruiamo insieme l'eccellenza professionale nel settore della crisi da debito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteFinalCTASection;
