import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface TDStickyCTAProps {
  onOpenContact: () => void;
}

const TDStickyCTA = ({ onOpenContact }: TDStickyCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-soft safe-bottom">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href="tel:+390818671862"
          className="flex items-center justify-center gap-2 py-3 rounded-lg bg-navy text-white font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Chiama
        </a>
        <Button
          onClick={onOpenContact}
          className="bg-gold hover:bg-gold-dark text-navy font-semibold text-sm h-12"
        >
          Diagnosi gratuita
        </Button>
      </div>
    </div>
  );
};

export default TDStickyCTA;
