import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import heroImage from "@/assets/hero-lawyer.jpg";

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gold glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div>
            {/* Small tag */}
            <div className="mb-8 opacity-0 animate-fade-up">
              <span className="text-muted-foreground text-sm tracking-widest uppercase">
                Studio Legale Specializzato
              </span>
            </div>

            {/* Main headline - BOLD */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] mb-8 opacity-0 animate-fade-up animation-delay-100">
              Una guida legale chiara per{" "}
              <span className="text-gold">uscire dai debiti</span>{" "}
              e tornare a vivere con serenità.
            </h1>

            {/* Subtitle - grey italic */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-up animation-delay-200 italic font-light">
              Ti affianchiamo con competenza, metodo e trasparenza per affrontare situazioni finanziarie complesse.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-6 opacity-0 animate-fade-up animation-delay-300">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onOpenContact}
                className="group"
              >
                Richiedi una consulenza riservata
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <span className="text-muted-foreground text-sm self-center">
                Primo colloquio gratuito · Nessun impegno
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative opacity-0 animate-fade-up animation-delay-200 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <OptimizedImage 
                src={heroImage} 
                alt="Studio legale professionale" 
                className="w-full h-[500px] object-cover"
                containerClassName="w-full h-[500px]"
                priority={true}
              />
              {/* Gold overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-gold/20 rounded-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
