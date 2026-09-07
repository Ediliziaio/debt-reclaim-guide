import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShieldCheck } from "lucide-react";
import EicLeadForm from "@/components/EicLeadForm";

interface TDContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modale della diagnosi gratuita.
 *
 * Il modulo è quello di EdiliziaInCloud: le richieste finiscono nel CRM dello
 * studio. Prima qui c'era un form che simulava l'invio e mostrava "Richiesta
 * ricevuta" senza spedire nulla — nome, telefono, email e la descrizione della
 * situazione debitoria andavano persi.
 */
const TDContactModal = ({ isOpen, onClose }: TDContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <DialogTitle className="text-xl text-navy text-left">Diagnosi gratuita del tuo debito</DialogTitle>
          </div>
          <p className="text-sm text-foreground/70 text-left">
            Compila il modulo: un nostro consulente ti ricontatta con una prima valutazione.{" "}
            <strong>Tutto riservato.</strong>
          </p>
        </DialogHeader>

        <EicLeadForm title="Richiedi la diagnosi gratuita del tuo debito" />

        <p className="text-xs text-center text-foreground/50 pt-1">
          Riservato · Senza impegno · Preferisci parlarne?{" "}
          <a href="tel:+390818671862" className="text-navy underline">081 18671862</a>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default TDContactModal;
