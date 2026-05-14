import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TDContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TDContactModal = ({ isOpen, onClose }: TDContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Richiesta inviata",
      description: "Ti ricontattiamo entro 24h lavorative.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <DialogTitle className="text-xl text-navy text-left">Diagnosi gratuita del tuo debito</DialogTitle>
          </div>
          <p className="text-sm text-foreground/70 text-left">
            Compila il modulo: un nostro consulente ti ricontatta entro 24h con una prima valutazione. <strong>Tutto riservato.</strong>
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Richiesta ricevuta</h3>
            <p className="text-sm text-foreground/70">Ti contattiamo entro 24h lavorative.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="td-name">Nome e cognome *</Label>
                <Input id="td-name" name="name" required placeholder="Mario Rossi" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="td-phone">Telefono *</Label>
                <Input id="td-phone" name="phone" type="tel" required placeholder="+39 ___ _______" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="td-email">Email *</Label>
              <Input id="td-email" name="email" type="email" required placeholder="mario@email.it" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="td-profile">Sei un... *</Label>
                <Select name="profile" required>
                  <SelectTrigger id="td-profile"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="privato">Privato cittadino</SelectItem>
                    <SelectItem value="imprenditore">Imprenditore / PMI</SelectItem>
                    <SelectItem value="professionista">Professionista</SelectItem>
                    <SelectItem value="commercialista">Commercialista / Avvocato (partner)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="td-debt">Importo debito *</Label>
                <Select name="debt" required>
                  <SelectTrigger id="td-debt"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lt-30">Fino a 30.000 €</SelectItem>
                    <SelectItem value="30-100">30.000 - 100.000 €</SelectItem>
                    <SelectItem value="100-300">100.000 - 300.000 €</SelectItem>
                    <SelectItem value="gt-300">Oltre 300.000 €</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="td-message">Descrivi brevemente la tua situazione</Label>
              <Textarea
                id="td-message"
                name="message"
                rows={3}
                placeholder="Es: ho ricevuto cartelle esattoriali per 80.000€ e sono in difficoltà con il mutuo..."
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-foreground/70">
              <input type="checkbox" required className="mt-0.5" />
              <span>
                Ho letto e accetto la <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I dati saranno trattati per gestire la richiesta.
              </span>
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold h-11"
            >
              {isSubmitting ? "Invio in corso..." : "Richiedi diagnosi gratuita"}
            </Button>

            <p className="text-xs text-center text-foreground/50">
              🔒 Riservato · Senza impegno · Risposta entro 24h
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TDContactModal;
