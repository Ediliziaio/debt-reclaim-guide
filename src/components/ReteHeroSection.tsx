import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, RefreshCw } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import heroImage from "@/assets/rete-hero-team.jpg";

interface ReteHeroSectionProps {
  onOpenContact: () => void;
}

const ReteHeroSection = ({ onOpenContact }: ReteHeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-12 md:pt-20 pb-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage 
          src={heroImage} 
          alt="Team di professionisti" 
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-8 animate-fade-up">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
            <span className="text-xs md:text-sm font-medium text-gold">Per Avvocati, Commercialisti e Consulenti del Lavoro</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-up animation-delay-100">
            SMETTI Di Lavorare Da Solo Su Casi Complessi Di{" "}
            <span className="text-gradient-hero">Debito</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-2 md:mb-4 animate-fade-up animation-delay-200">
            Entra Nella <strong className="text-gold">PRIMA Rete Nazionale</strong> Specializzata In Esdebitazione E Crisi D'Impresa
          </p>

          <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-8 animate-fade-up animation-delay-300">
            (E Diventa Il Professionista Di Riferimento Nel Tuo Territorio)
          </p>

          {/* Hook Text */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 mb-6 md:mb-10 animate-fade-up animation-delay-400">
            <p className="text-white/90 text-sm md:text-lg leading-relaxed">
              Se gestisci (o vorresti gestire) pratiche di esdebitazione e crisi d'impresa ma ti mancano 
              <strong className="text-gold"> know-how, coordinamento o un metodo collaudato</strong>... 
              hai 3 minuti per scoprire come cambiare completamente il tuo approccio professionale?
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-up animation-delay-500">
            <Button variant="cta" size="lg" onClick={onOpenContact} className="text-sm md:text-lg px-6 md:px-8 min-h-[48px] md:py-6 w-full sm:w-auto">
              Richiedi Informazioni
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-8 min-h-[48px] md:py-6 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              onClick={() => document.getElementById('vantaggi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri i Vantaggi
            </Button>
          </div>

          {/* Stats Row - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 animate-fade-up animation-delay-600">
            {[
              { icon: Users, value: "24", label: "Studi nella Rete" },
              { icon: MapPin, value: "14", label: "Regioni Coperte" },
              { icon: RefreshCw, value: "96%", label: "Tasso di Rinnovo" },
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
    </section>
  );
};

export default ReteHeroSection;
