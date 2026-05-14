import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logoTD from "@/assets/logo-tutela-debito.png";

interface TDHeaderProps {
  onOpenContact: () => void;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/metodo", label: "Metodo" },
  { to: "/servizi", label: "Servizi" },
  { to: "/casi-risolti", label: "Casi seguiti" },
  { to: "/risorse", label: "Risorse" },
  { to: "/contatti", label: "Contatti" },
];

const TDHeader = ({ onOpenContact }: TDHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy text-white text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 text-white/80">
            <span>Studio legale e fiscale per esdebitazione e crisi d'impresa</span>
          </div>
          <a href="tel:+390818671862" className="flex items-center gap-2 hover:text-gold">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">081 18671862</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/" className="flex items-center shrink-0" aria-label="Tutela Debito - Home">
              <img src={logoTD} alt="Tutela Debito" className="h-20 md:h-28 w-auto -my-4" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "text-navy bg-muted"
                        : "text-foreground/70 hover:text-navy hover:bg-muted/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/quiz"
                className="text-sm font-semibold text-navy hover:text-gold-dark"
              >
                Posso esdebitarmi?
              </Link>
              <Button
                onClick={onOpenContact}
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                Diagnosi gratuita
              </Button>
            </div>

            <button
              className="lg:hidden p-2 relative w-11 h-11 flex items-center justify-center text-navy touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Apri menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border bg-white">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 px-3 min-h-[48px] rounded-lg ${
                        isActive
                          ? "text-navy bg-muted font-semibold"
                          : "text-foreground/80 hover:text-navy hover:bg-muted/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/quiz"
                  className="block py-3 px-3 min-h-[48px] rounded-lg text-navy font-semibold hover:bg-muted/60"
                >
                  Posso esdebitarmi? →
                </Link>
                <a
                  href="tel:+390818671862"
                  className="flex items-center gap-2 py-3 px-3 min-h-[48px] rounded-lg text-foreground/80 hover:bg-muted/60"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">081 18671862</span>
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="mt-3 min-h-[48px] w-full bg-gold hover:bg-gold-dark text-navy font-semibold"
                >
                  Diagnosi gratuita
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default TDHeader;
