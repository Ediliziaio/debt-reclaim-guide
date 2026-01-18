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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoTutelaDebito} 
              alt="Tutela Debito - Studio Legale" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("metodo")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Metodo
            </button>
            <button 
              onClick={() => scrollToSection("crisi-impresa")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Crisi d'Impresa
            </button>
            <button 
              onClick={() => scrollToSection("chi-siamo")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Chi Siamo
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("casi-risolti")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Casi Risolti
            </button>
            <button 
              onClick={() => scrollToSection("testimonianze")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonianze
            </button>
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Contattaci
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("metodo")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Metodo
              </button>
              <button 
                onClick={() => scrollToSection("crisi-impresa")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Crisi d'Impresa
              </button>
              <button 
                onClick={() => scrollToSection("chi-siamo")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("casi-risolti")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Casi Risolti
              </button>
              <button 
                onClick={() => scrollToSection("testimonianze")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonianze
              </button>
              <Button
                variant="hero"
                className="mt-4"
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