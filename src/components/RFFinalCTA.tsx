import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Mail } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import handshakeImage from "@/assets/handshake-trust.jpg";

interface RFFinalCTAProps {
  onOpenContact: () => void;
}

const RFFinalCTA = ({ onOpenContact }: RFFinalCTAProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={handshakeImage} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-background">
          <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6 md:mb-8 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Shield className="w-7 h-7 md:w-10 md:h-10 text-gold" />
          </div>
          
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Prenota Un Colloquio <span className="text-gold">Gratuito</span>
          </h2>
          
          <p className={`text-sm md:text-lg opacity-90 mb-6 md:mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Analizziamo la TUA situazione specifica. Ti diciamo se e come possiamo aiutarti. 
            <strong className="text-gold"> Nessun impegno.</strong>
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="hero" size="xl" onClick={onOpenContact} className="w-full sm:w-auto min-h-[52px]">
              Prenota Ora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-xs md:text-sm opacity-80">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
              <span>Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm opacity-80">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
              <span>100% Riservato</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm opacity-80">
              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
              <span>Senza Impegno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFFinalCTA;
