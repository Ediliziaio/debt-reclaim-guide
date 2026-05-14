import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import { useState } from "react";
import TDContactModal from "@/components/TDContactModal";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pagina non trovata | Tutela Debito</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={() => setIsContactOpen(true)} />
        <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-white via-muted/40 to-white">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <div className="text-7xl md:text-9xl font-black text-gradient-hero mb-6">404</div>
            <h1 className="text-3xl md:text-4xl font-black text-navy mb-4">Pagina non trovata</h1>
            <p className="text-lg text-foreground/70 mb-8">
              La pagina che cerchi non esiste o è stata spostata. Torna alla home o contattaci se hai bisogno di aiuto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold w-full">
                  <Home className="mr-2 w-4 h-4" /> Torna alla home
                </Button>
              </Link>
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold"
              >
                <MessageCircle className="mr-2 w-4 h-4" /> Contattaci
              </Button>
            </div>
          </div>
        </main>
        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default NotFound;
