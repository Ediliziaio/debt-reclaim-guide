import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";
import { Link } from "react-router-dom";

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">RF</span>
            <span className="text-lg font-semibold text-foreground hidden sm:block">Debt Restructuring</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["chi-siamo", "metodo", "casi-risolti", "statistiche"].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize">
                {id.replace("-", " ")}
              </button>
            ))}
            <Link 
              to="/rete" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors text-sm font-medium"
            >
              <Users className="w-4 h-4" />
              Per Professionisti
            </Link>
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Consulenza Gratuita
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {["chi-siamo", "metodo", "casi-risolti", "statistiche"].map((id) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left text-muted-foreground hover:text-primary transition-colors capitalize">
                  {id.replace("-", " ")}
                </button>
              ))}
              <Link 
                to="/rete" 
                className="flex items-center gap-2 text-secondary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-4 h-4" />
                Per Professionisti
              </Link>
              <Button variant="hero" className="mt-4" onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}>
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
