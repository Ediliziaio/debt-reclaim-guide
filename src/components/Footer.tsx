import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import rfLogo from "@/assets/rf-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La prima rete nazionale di Avvocati, Commercialisti e Consulenti del Lavoro specializzati in esdebitazione e crisi d'impresa.
              Ti affianchiamo con competenza, metodo e trasparenza.
            </p>
          </div>

          {/* Le Nostre Sedi */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Le Nostre Sedi
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Building className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">TORINO</p>
                  <p>Via Frejus 106</p>
                  <p>10137 Torino</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">NAPOLI</p>
                  <p>Via San Giacomo 24</p>
                  <p>Napoli (NA)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contatti
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href="tel:+393520179939" 
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  +39 352 017 9939
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href="mailto:info@ristrutturazionidebiti.it" 
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  info@ristrutturazionidebiti.it
                </a>
              </li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Orari
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Lun - Ven: 9:00 - 18:00</p>
                  <p>Sabato: 9:00 - 13:00</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RF Ristrutturazioni Debiti. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                Note Legali
              </a>
            </div>
          </div>
          
          {/* Dati Societari */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="text-center space-y-1">
              <p className="text-xs text-muted-foreground font-semibold">
                RF DEBT RESTRUCTURING ASSOCIAZIONE PROFESSIONALE
              </p>
              <p className="text-xs text-muted-foreground">
                Sede Legale: Via San Giacomo 24, Napoli (NA) • P.IVA: 10974001215
              </p>
              <p className="text-xs text-muted-foreground">
                PEC: <a href="mailto:ristrutturazionidebiti@pec.it" className="hover:text-gold transition-colors">ristrutturazionidebiti@pec.it</a>
              </p>
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 mt-6 text-center">
            Le informazioni contenute in questo sito non costituiscono consulenza legale. 
            Ogni situazione richiede una valutazione specifica. I risultati passati non garantiscono esiti futuri.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
