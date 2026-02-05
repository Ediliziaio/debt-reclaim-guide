import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface StickyCTAProps {
  onOpenContact: () => void;
}

const StickyCTA = ({ onOpenContact }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up md:hidden">
      <Button 
        variant="hero" 
        size="lg" 
        onClick={onOpenContact}
        className="shadow-xl"
      >
        <Phone className="w-4 h-4" />
        Colloquio Gratuito
      </Button>
    </div>
  );
};

export default StickyCTA;
