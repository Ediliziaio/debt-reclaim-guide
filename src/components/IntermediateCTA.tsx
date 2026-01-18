import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface IntermediateCTAProps {
  onOpenContact: () => void;
  text?: string;
}

const IntermediateCTA = ({ 
  onOpenContact, 
  text = "Non aspettare che la situazione peggiori." 
}: IntermediateCTAProps) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-foreground font-medium text-center md:text-left">
            {text}
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onOpenContact}
            className="group whitespace-nowrap"
          >
            Parla con un esperto
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntermediateCTA;