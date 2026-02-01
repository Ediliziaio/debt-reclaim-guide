import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import heroImage from "@/assets/rete-hero-team.jpg";

interface ReteHeroSectionProps {
  onOpenContact: () => void;
}

const ReteHeroSection = ({ onOpenContact }: ReteHeroSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Team di professionisti" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-8 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
            <span className="text-xs md:text-sm font-medium text-gold">Per Avvocati e Commercialisti</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            SMETTI Di Lavorare Da Solo Su Casi Complessi Di{" "}
            <span className="text-gradient-hero">Debito</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-base md:text-xl lg:text-2xl text-white/90 mb-2 md:mb-4 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            Entra Nella <strong className="text-gold">PRIMA Rete Nazionale</strong> Specializzata In Esdebitazione E Crisi D'Impresa
          </p>

          <p className={`text-sm md:text-lg text-white/70 mb-6 md:mb-8 ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            (E Moltiplica Fatturato E Competenze)
          </p>

          {/* Hook Text */}
          <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 mb-6 md:mb-10 ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <p className="text-white/90 text-sm md:text-lg leading-relaxed">
              Se gestisci (o vorresti gestire) pratiche di esdebitazione e crisi d'impresa ma ti mancano 
              <strong className="text-gold"> know-how, coordinamento o un flusso costante di clienti</strong>... 
              hai 3 minuti per leggere questa proposta?
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <Button variant="cta" size="lg" onClick={onOpenContact} className="text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
              Richiedi Informazioni
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              onClick={() => document.getElementById('vantaggi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri i Vantaggi
            </Button>
          </div>

          {/* Stats Row - Responsive */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 ${isInView ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
            {[
              { icon: Briefcase, value: "24", label: "Studi nella Rete" },
              { icon: TrendingUp, value: "€95k", label: "Fatturato Medio/Anno" },
              { icon: Users, value: "96%", label: "Tasso di Rinnovo" },
            ].map((stat, index) => (
              <div key={index} className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-0 sm:bg-transparent sm:text-center">
                <div className="flex items-center gap-2 sm:flex-col sm:gap-0">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-gold sm:mx-auto sm:mb-2" />
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-gold rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default ReteHeroSection;