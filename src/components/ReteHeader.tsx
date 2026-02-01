import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import rfLogo from "@/assets/rf-logo.png";

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
    { id: "testimonianze", label: "Testimonianze" },
    { id: "faq", label: "FAQ" },
  ];

  // Colori dinamici basati su scroll state
  const textColor = isScrolled ? "text-foreground" : "text-white";
  const mutedColor = isScrolled ? "text-muted-foreground" : "text-white/80";
  const borderColor = isScrolled ? "border-border" : "border-white/20";
  const dividerColor = isScrolled ? "bg-border" : "bg-white/30";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className={`flex items-center gap-1.5 sm:gap-2 ${mutedColor} hover:text-primary transition-colors`}>
              <ArrowLeft className="w-4 h-4" />
              <span className="text-xs sm:text-sm hidden xs:inline">Torna al sito</span>
            </Link>
            <div className={`h-5 sm:h-6 w-px ${dividerColor} hidden xs:block`} />
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={rfLogo} alt="RF Debt Restructuring" className="h-8 sm:h-10 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`text-sm ${mutedColor} hover:text-primary transition-colors`}>
                {label}
              </button>
            ))}
            <Button variant="hero" size="sm" onClick={onOpenContact}>
              Richiedi Info
            </Button>
          </nav>

          <button className={`md:hidden p-2 ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - con sfondo opaco */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${borderColor} animate-fade-in ${isScrolled ? "" : "bg-navy/95 backdrop-blur-md -mx-4 px-4"}`}>
            <div className="flex flex-col gap-3">
              {navItems.map(({ id, label }) => (
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className={`text-left py-2 ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors`}
                >
                  {label}
                </button>
              ))}
              <Button variant="hero" className="mt-2" onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}>
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
