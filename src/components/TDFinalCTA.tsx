import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import handshakeImg from "@/assets/handshake-trust.jpg";
import TDHeroBackdrop from "./TDHeroBackdrop";

interface TDFinalCTAProps {
  onOpenContact: () => void;
}

const TDFinalCTA = ({ onOpenContact }: TDFinalCTAProps) => {
  return (
    <section className="relative py-16 lg:py-20 bg-navy text-white overflow-hidden">
      <TDHeroBackdrop />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Iniziamo dal primo colloquio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Una valutazione gratuita per capire se possiamo aiutarti.
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Il primo passo è un colloquio riservato di circa 30 minuti, gratuito e senza impegno. Analizziamo insieme la tua posizione e ti diciamo onestamente se rientri nei presupposti previsti dalla legge.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-7 w-full sm:w-auto"
              >
                Richiedi diagnosi gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="tel:+390818671862" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold text-base h-12 px-7 w-full"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  081 18671862
                </Button>
              </a>
            </div>

            <p className="text-sm text-white/60">
              Vuoi capire prima se rientri nei presupposti?{" "}
              <Link to="/quiz" className="text-gold hover:text-gold-light underline">
                Fai il test online
              </Link>
              .
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src={handshakeImg}
              alt="Consulenza professionale"
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDFinalCTA;
