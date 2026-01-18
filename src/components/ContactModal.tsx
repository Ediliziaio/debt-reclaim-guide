import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Richiesta inviata",
      description: "Ti contatteremo entro 24 ore lavorative.",
    });
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <DialogTitle className="font-heading text-xl text-foreground">
              Richiedi Consulenza
            </DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Compila il form per essere ricontattato. La tua richiesta è completamente riservata.
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">Richiesta Inviata!</h3>
            <p className="text-muted-foreground text-sm">Ti contatteremo al più presto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome e Cognome *</Label>
              <Input
                id="name"
                required
                placeholder="Mario Rossi"
                className="bg-background border-border focus:border-gold"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="mario@email.com"
                className="bg-background border-border focus:border-gold"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Telefono *</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+39 333 1234567"
                className="bg-background border-border focus:border-gold"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Descrivi brevemente la tua situazione</Label>
              <Textarea
                id="message"
                placeholder="Scrivi qui..."
                rows={3}
                className="bg-background border-border focus:border-gold resize-none"
              />
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                variant="hero" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Invio in corso..."
                ) : (
                  <>
                    Invia Richiesta
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Inviando questo form accetti la nostra Privacy Policy e acconsenti al trattamento dei tuoi dati.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
