import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";
import { Link } from "react-router-dom";
import rfLogo from "@/assets/rf-logo-new.png";

interface RFHeaderProps {
  onOpenContact: () => void;
}

const RFHeader = ({ onOpenContact }: RFHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Dynamic colors based on scroll state
  const textColor = isScrolled ? "text-foreground" : "text-foreground";
  const mutedColor = isScrolled ? "text-muted-foreground" : "text-muted-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-8 md:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {["chi-siamo", "metodo", "casi-risolti", "statistiche"].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`text-sm ${mutedColor} hover:text-primary transition-colors capitalize`}>
                {id.replace("-", " ")}
              </button>
            ))}
            <Link 
              to="/rete" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold hover:bg-gold/30 transition-colors text-sm font-medium"
            >
              <Users className="w-4 h-4" />
              Per Professionisti
            </Link>
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Consulenza Gratuita
            </Button>
          </nav>

          <button className={`md:hidden p-2 ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col gap-3">
              {["chi-siamo", "metodo", "casi-risolti", "statistiche"].map((id) => (
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className="text-left py-2 text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {id.replace("-", " ")}
                </button>
              ))}
              <Link 
                to="/rete" 
                className="flex items-center gap-2 py-2 text-gold font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-4 h-4" />
                Per Professionisti
              </Link>
              <Button variant="hero" className="mt-2" onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}>
                Consulenza Gratuita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default RFHeader;