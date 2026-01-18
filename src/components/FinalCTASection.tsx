import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Phone } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ctaImage from "@/assets/cta-handshake.jpg";

interface FinalCTASectionProps {
  onOpenContact: () => void;
}

const FinalCTASection = ({ onOpenContact }: FinalCTASectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={ctaImage} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card" />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className={`w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-8 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Shield className="w-10 h-10 text-gold" />
          </div>
          
          {/* Headline */}
          <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Il primo passo è capire.{" "}
            <span className="text-gradient-gold">Il secondo è farsi affiancare.</span>
          </h2>
          
          {/* Subtext */}
          <p className={`text-lg text-muted-foreground mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Una consulenza legale può aiutarti a fare chiarezza e valutare le possibili strade, senza impegno.
          </p>
          
          {/* CTA */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="hero" size="xl" onClick={onOpenContact}>
              Prenota ora una consulenza legale riservata
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className={`flex flex-wrap items-center justify-center gap-6 mt-10 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-gold" />
              <span>Risposta entro 24h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-gold" />
              <span>100% riservato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
