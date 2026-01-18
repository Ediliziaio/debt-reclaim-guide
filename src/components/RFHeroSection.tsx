import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hope.jpg";

interface RFHeroSectionProps {
  onOpenContact: () => void;
}

const RFHeroSection = ({ onOpenContact }: RFHeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
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

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Shield className="w-4 h-4" />
              La prima rete nazionale di esperti in esdebitazione
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-primary">BASTA</span> Notti Insonni{" "}
            <br className="hidden md:block" />
            Per I Debiti.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-navy-light font-medium mb-4 opacity-0 animate-fade-up animation-delay-200">
            Finalmente la <span className="text-secondary font-bold">PRIMA Rete Nazionale</span> che unisce 
            Avvocati e Commercialisti Specializzati in Esdebitazione e Crisi D'Impresa
          </p>

          {/* Hook question */}
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-300 max-w-2xl">
            Se hai debiti che ti soffocano e stai cercando una via d'uscita <strong className="text-foreground">LEGALE</strong> che funzioni davvero... 
            hai 2 minuti per leggere questa lettera?
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 opacity-0 animate-fade-up animation-delay-400">
            <Button 
              variant="hero" 
              size="xxl" 
              onClick={onOpenContact}
              className="group w-full sm:w-auto"
            >
              Prenota Consulenza Gratuita
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={onOpenContact}
              className="w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Chiama Ora
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span>100% Riservato</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              <span>Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">€0</span>
              </div>
              <span>Primo Colloquio Gratuito</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
};

export default RFHeroSection;
