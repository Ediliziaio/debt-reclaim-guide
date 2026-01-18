import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "vantaggi", label: "Vantaggi" },
    { id: "pricing", label: "Costi" },
    { id: "testimonianze", label: "Testimonianze" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Torna al sito</span>
            </Link>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span className="text-2xl font-bold text-primary">RF</span>
              <span className="text-lg font-semibold text-foreground hidden sm:block">Rete Professionisti</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {label}
              </button>
            ))}
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Richiedi Informazioni
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(({ id, label }) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </button>
              ))}
              <Button variant="hero" className="mt-4" onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}>
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
