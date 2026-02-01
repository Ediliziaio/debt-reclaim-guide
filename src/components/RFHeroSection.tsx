import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hope.jpg";

interface RFHeroSectionProps {
  onOpenContact: () => void;
}

const RFHeroSection = ({ onOpenContact }: RFHeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-16 md:pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Hero Image - positioned right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Libertà dai debiti" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 md:pt-28 pb-12 md:pb-16 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-4 md:mb-6 opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary font-medium text-xs md:text-sm">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4" />
              La prima rete nazionale di esperti in esdebitazione
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 md:mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-gold">BASTA</span> Notti Insonni{" "}
            <br className="hidden sm:block" />
            Per I Debiti.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-navy-light font-medium mb-3 md:mb-4 opacity-0 animate-fade-up animation-delay-200">
            Finalmente la <span className="text-primary font-bold">PRIMA Rete Nazionale</span> che unisce 
            Avvocati e Commercialisti Specializzati in Esdebitazione e Crisi D'Impresa
          </p>

          {/* Hook question */}
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 opacity-0 animate-fade-up animation-delay-300 max-w-2xl">
            Se hai debiti che ti soffocano e stai cercando una via d'uscita <strong className="text-foreground">LEGALE</strong> che funzioni davvero... 
            hai 2 minuti per leggere questa lettera?
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-4 mb-8 md:mb-10 opacity-0 animate-fade-up animation-delay-400">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={onOpenContact}
              className="group w-full sm:w-auto text-sm md:text-base"
            >
              Prenota Consulenza Gratuita
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onOpenContact}
              className="w-full sm:w-auto text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Chiama Ora
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-6 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              </div>
              <span>100% Riservato</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              </div>
              <span>Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-[10px] md:text-xs">€0</span>
              </div>
              <span>Primo Colloquio Gratuito</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-600 hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-primary rounded-full animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
};

export default RFHeroSection;