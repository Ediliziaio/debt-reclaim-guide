import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import rfLogo from "@/assets/rf-logo-new.png";

interface ReteHeaderProps {
  onOpenContact: () => void;
}

const ReteHeader = ({ onOpenContact }: ReteHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiudi menu mobile quando si fa scroll
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

  const navItems = [
    { id: "vantaggi", label: "Vantaggi" },
    { id: "guadagni", label: "Guadagni" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${isScrolled ? "shadow-soft border-b border-border" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-xs sm:text-sm hidden xs:inline">Torna al sito</span>
            </Link>
            <div className="h-5 sm:h-6 w-px bg-border hidden xs:block" />
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-8 sm:h-10 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {label}
              </button>
            ))}
            <Button variant="cta" size="sm" onClick={onOpenContact}>
              Richiedi Info
            </Button>
          </nav>

          {/* Animated Hamburger */}
          <button 
            className="md:hidden p-2 text-foreground relative w-11 h-11 flex items-center justify-center touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-menu-open overflow-hidden safe-bottom">
            <div className="flex flex-col gap-1">
              {navItems.map(({ id, label }, index) => (
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className="text-left py-3 px-2 min-h-[48px] text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all animate-menu-item"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {label}
                </button>
              ))}
              <Button 
                variant="cta" 
                className="mt-3 w-full min-h-[48px] animate-menu-item" 
                style={{ animationDelay: `${navItems.length * 50}ms` }}
                onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}
              >
                Richiedi Informazioni
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default ReteHeader;
