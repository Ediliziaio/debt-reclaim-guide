import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoTutelaDebito from "@/assets/logo-tutela-debito.png";

interface HeaderProps {
  onOpenContact: () => void;
}

const Header = ({ onOpenContact }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiudi menu mobile su scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Colori dinamici basati su scroll state
  const textColor = isScrolled ? "text-foreground" : "text-white";
  const mutedColor = isScrolled ? "text-muted-foreground" : "text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoTutelaDebito} 
              alt="Tutela Debito - Studio Legale" 
              className="h-8 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection("metodo")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Metodo
            </button>
            <button 
              onClick={() => scrollToSection("crisi-impresa")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Crisi d'Impresa
            </button>
            <button 
              onClick={() => scrollToSection("chi-siamo")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Chi Siamo
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("casi-risolti")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Casi Risolti
            </button>
            <button 
              onClick={() => scrollToSection("testimonianze")}
              className={`text-sm ${mutedColor} hover:text-primary transition-colors`}
            >
              Testimonianze
            </button>
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Contattaci
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden py-4 border-t animate-fade-in ${isScrolled ? "border-border" : "border-white/20 bg-navy/95 backdrop-blur-md -mx-4 px-4"}`}>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection("metodo")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Metodo
              </button>
              <button 
                onClick={() => scrollToSection("crisi-impresa")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Crisi d'Impresa
              </button>
              <button 
                onClick={() => scrollToSection("chi-siamo")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("casi-risolti")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Casi Risolti
              </button>
              <button 
                onClick={() => scrollToSection("testimonianze")}
                className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
              >
                Testimonianze
              </button>
              <Button
                variant="hero"
                className="mt-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
              >
                Contattaci
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;