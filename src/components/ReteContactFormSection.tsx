import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReteContactFormSection = () => {
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
    <section id="contatto" className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              Richiedi Informazioni <span className="text-gold">Senza Impegno</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base">Compila il form per ricevere la documentazione completa e valutare se questa opportunità di crescita professionale fa per te.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Nome */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="name" className="text-sm md:text-base">Nome e Cognome *</Label>
                <Input id="name" required className="h-11 md:h-10" />
              </div>
              
              {/* Qualifica */}
              <div className="space-y-1.5 md:space-y-2">
                <Label className="text-sm md:text-base">Qualifica *</Label>
                <RadioGroup defaultValue="avvocato" className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="avvocato" id="avvocato" />
                    <Label htmlFor="avvocato" className="cursor-pointer text-sm md:text-base">Avvocato</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercialista" id="commercialista" />
                    <Label htmlFor="commercialista" className="cursor-pointer text-sm md:text-base">Commercialista</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Albo */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="albo" className="text-sm md:text-base">N° Iscrizione Albo *</Label>
                <Input id="albo" required className="h-11 md:h-10" />
              </div>
              
              {/* Anno */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="anno" className="text-sm md:text-base">Anno Iscrizione *</Label>
                <Input id="anno" type="number" min="1980" max="2026" required className="h-11 md:h-10" />
              </div>
              
              {/* Studio */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="studio" className="text-sm md:text-base">Nome Studio *</Label>
                <Input id="studio" required className="h-11 md:h-10" />
              </div>
              
              {/* Città */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="citta" className="text-sm md:text-base">Città/Provincia *</Label>
                <Input id="citta" required className="h-11 md:h-10" />
              </div>
              
              {/* Telefono */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="telefono" className="text-sm md:text-base">Telefono *</Label>
                <Input id="telefono" type="tel" required className="h-11 md:h-10" />
              </div>
              
              {/* Email */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                <Input id="email" type="email" required className="h-11 md:h-10" />
              </div>
              
              {/* Anni attività */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="anni" className="text-sm md:text-base">Anni di attività professionale *</Label>
                <Input id="anni" type="number" min="3" required className="h-11 md:h-10" />
              </div>
              
              {/* Quando */}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="quando" className="text-sm md:text-base">Quando vorresti valutare l'inizio? *</Label>
                <Select>
                  <SelectTrigger className="h-11 md:h-10">
                    <SelectValue placeholder="Seleziona..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subito">Subito</SelectItem>
                    <SelectItem value="30gg">Entro 30 giorni</SelectItem>
                    <SelectItem value="60gg">Entro 60 giorni</SelectItem>
                    <SelectItem value="valuto">Sto valutando</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Perché */}
            <div className="mb-4 md:mb-6 space-y-1.5 md:space-y-2">
              <Label htmlFor="perche" className="text-sm md:text-base">Perché sei interessato a questa opportunità di specializzazione? *</Label>
              <Textarea id="perche" required rows={3} className="min-h-[80px] md:min-h-[100px]" />
            </div>
            
            {/* Submit */}
            <Button type="submit" variant="cta" size="lg" className="w-full h-12 md:h-11 text-base" disabled={isSubmitting}>
              {isSubmitting ? (
                "Invio in corso..."
              ) : (
                <>
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Invia Richiesta
                </>
              )}
            </Button>
            
            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-5 md:mt-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Risposta entro 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Nessun impegno</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReteContactFormSection;
