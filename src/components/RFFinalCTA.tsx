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
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={handshakeImage} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-background">
          <div className={`w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Shield className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Prenota Una Consulenza <span className="text-primary">Gratuita</span>
          </h2>
          
          <p className={`text-lg opacity-90 mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Analizziamo la TUA situazione specifica. Ti diciamo se e come possiamo aiutarti. 
            <strong className="text-primary"> Nessun impegno.</strong>
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="hero" size="xxl" onClick={onOpenContact} className="w-full sm:w-auto">
              Prenota Ora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className={`flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Phone className="w-4 h-4 text-primary" />
              <span>Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Riservato</span>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Mail className="w-4 h-4 text-primary" />
              <span>Senza Impegno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFFinalCTA;
