import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReteContactFormSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Richiesta Inviata!", description: "Ti contatteremo entro 24 ore per fissare una call conoscitiva." });
    }, 1500);
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contatto" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Richiedi Informazioni <span className="text-primary">ADESSO</span></h2>
            <p className="text-white/70">Senza Impegno</p>
          </div>

          <form onSubmit={handleSubmit} className={`bg-card rounded-2xl p-8 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div><Label htmlFor="name">Nome e Cognome *</Label><Input id="name" required className="mt-2" /></div>
              <div><Label>Qualifica *</Label><RadioGroup defaultValue="avvocato" className="flex gap-4 mt-2"><div className="flex items-center space-x-2"><RadioGroupItem value="avvocato" id="avvocato" /><Label htmlFor="avvocato">Avvocato</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="commercialista" id="commercialista" /><Label htmlFor="commercialista">Commercialista</Label></div></RadioGroup></div>
              <div><Label htmlFor="albo">N° Iscrizione Albo *</Label><Input id="albo" required className="mt-2" /></div>
              <div><Label htmlFor="anno">Anno Iscrizione *</Label><Input id="anno" type="number" min="1980" max="2026" required className="mt-2" /></div>
              <div><Label htmlFor="studio">Nome Studio *</Label><Input id="studio" required className="mt-2" /></div>
              <div><Label htmlFor="citta">Città/Provincia *</Label><Input id="citta" required className="mt-2" /></div>
              <div><Label htmlFor="telefono">Telefono *</Label><Input id="telefono" type="tel" required className="mt-2" /></div>
              <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" required className="mt-2" /></div>
              <div><Label htmlFor="anni">Anni di attività *</Label><Input id="anni" type="number" min="3" required className="mt-2" /></div>
              <div><Label htmlFor="quando">Quando vorresti iniziare? *</Label><Select><SelectTrigger className="mt-2"><SelectValue placeholder="Seleziona..." /></SelectTrigger><SelectContent><SelectItem value="subito">Subito</SelectItem><SelectItem value="30gg">Entro 30 giorni</SelectItem><SelectItem value="60gg">Entro 60 giorni</SelectItem><SelectItem value="valuto">Sto valutando</SelectItem></SelectContent></Select></div>
            </div>
            <div className="mb-6"><Label htmlFor="perche">Perché vuoi entrare nella rete? *</Label><Textarea id="perche" required className="mt-2" rows={3} /></div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Invio in corso..." : <><Send className="w-5 h-5 mr-2" />Invia Richiesta</>}</Button>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground"><div className="flex items-center gap-2"><Clock className="w-4 h-4" />Risposta entro 24h</div><div className="flex items-center gap-2"><Shield className="w-4 h-4" />Nessun impegno</div></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReteContactFormSection;
