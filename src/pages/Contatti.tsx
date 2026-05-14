import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDCoverage from "@/components/TDCoverage";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

const Contatti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const openContact = () => setIsContactOpen(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({ title: "Richiesta inviata", description: "Ti contattiamo entro 24h lavorative." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contatti | Tutela Debito — Richiedi la tua diagnosi gratuita</title>
        <meta name="description" content="Contatta Tutela Debito per la tua diagnosi gratuita. Telefono, email, WhatsApp o modulo di contatto. Risposta in 24 ore lavorative." />
        <link rel="canonical" href="https://tuteladebito.it/contatti" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl">
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Contatti</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Prenota una <span className="text-gold">diagnosi gratuita</span>.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Puoi raggiungerci telefonicamente, via email o compilando il modulo. Ti ricontattiamo entro 24 ore lavorative per fissare un primo colloquio riservato.
                </p>
              </div>
            </div>
          </section>

          {/* Quick contact options */}
          <section className="py-10 lg:py-12 bg-white border-y border-border">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <a href="tel:+390818671862" className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-6 hover:shadow-primary transition-all group">
                  <Phone className="w-9 h-9 text-gold mb-4" />
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Telefono fisso</div>
                  <div className="text-2xl font-black text-gold mb-1">081 18671862</div>
                  <div className="text-sm text-white/70">Lun-Ven 9:00-19:00</div>
                </a>
                <a href="tel:+393386115394" className="bg-success text-white rounded-2xl p-6 hover:shadow-primary transition-all group">
                  <MessageCircle className="w-9 h-9 text-white mb-4" />
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-1">Cellulare</div>
                  <div className="text-2xl font-black text-white mb-1">338 6115394</div>
                  <div className="text-sm text-white/80">Anche WhatsApp · risposta in 2h</div>
                </a>
                <a href="mailto:info@studioavvocatorossi.it" className="bg-muted text-navy rounded-2xl p-6 hover:shadow-card transition-all group">
                  <Mail className="w-9 h-9 text-navy mb-4" />
                  <div className="text-xs uppercase tracking-wider text-foreground/60 mb-1">Email</div>
                  <div className="text-base font-black text-navy mb-1 break-all">info@studioavvocatorossi.it</div>
                  <div className="text-sm text-foreground/70">Risposta in 24h</div>
                </a>
              </div>
            </div>
          </section>

          {/* Form section */}
          <section className="py-16 lg:py-24 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 max-w-6xl mx-auto">
                {/* Form */}
                <div className="bg-white rounded-2xl p-7 lg:p-10 shadow-card border border-border">
                  <h2 className="text-2xl lg:text-3xl font-black text-navy mb-2">Richiedi la diagnosi gratuita</h2>
                  <p className="text-foreground/70 mb-7">Bastano 2 minuti. Tutti i campi con * sono obbligatori.</p>

                  {isSuccess ? (
                    <div className="py-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">Richiesta ricevuta!</h3>
                      <p className="text-foreground/70 mb-6">Ti contattiamo entro 24 ore lavorative al numero indicato.</p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">Invia un'altra richiesta</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="c-name">Nome e cognome *</Label>
                          <Input id="c-name" name="name" required />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="c-phone">Telefono *</Label>
                          <Input id="c-phone" name="phone" type="tel" required />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="c-email">Email *</Label>
                        <Input id="c-email" name="email" type="email" required />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="c-profile">Sei un... *</Label>
                          <Select name="profile" required>
                            <SelectTrigger id="c-profile"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="privato">Privato cittadino</SelectItem>
                              <SelectItem value="imprenditore">Imprenditore / PMI</SelectItem>
                              <SelectItem value="professionista">Professionista</SelectItem>
                              <SelectItem value="commercialista">Commercialista / Avvocato</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="c-debt">Importo debito stimato *</Label>
                          <Select name="debt" required>
                            <SelectTrigger id="c-debt"><SelectValue placeholder="Seleziona" /></SelectTrigger>
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
                        <Label htmlFor="c-source">Tipo di creditori *</Label>
                        <Select name="source" required>
                          <SelectTrigger id="c-source"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ader">Agenzia Entrate Riscossione</SelectItem>
                            <SelectItem value="banche">Banche e finanziarie</SelectItem>
                            <SelectItem value="fornitori">Fornitori / commerciali</SelectItem>
                            <SelectItem value="misto">Più tipologie</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="c-message">Descrivi la tua situazione</Label>
                        <Textarea id="c-message" name="message" rows={4} placeholder="Es: pignoramento in corso, cartelle ricevute, azienda in difficoltà..." />
                      </div>

                      <label className="flex items-start gap-2 text-sm text-foreground/70">
                        <input type="checkbox" required className="mt-1" />
                        <span>Ho letto e accetto la <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I dati saranno trattati esclusivamente per gestire la richiesta.</span>
                      </label>

                      <Button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-gold-dark text-navy font-bold h-12 text-base">
                        {isSubmitting ? "Invio in corso..." : "Invia la richiesta"}
                      </Button>

                      <p className="text-xs text-center text-foreground/50">
                        <ShieldCheck className="inline w-3 h-3 mr-1" />
                        Riservato · Senza impegno · Risposta entro 24h lavorative
                      </p>
                    </form>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gold-dark" /> Orari
                    </h3>
                    <ul className="space-y-1.5 text-sm text-foreground/75">
                      <li className="flex justify-between"><span>Lunedì - Venerdì</span><span className="font-semibold">9:00 - 19:00</span></li>
                      <li className="flex justify-between"><span>Sabato</span><span className="font-semibold">9:30 - 13:00</span></li>
                      <li className="flex justify-between"><span>Domenica</span><span className="text-foreground/50">Chiuso</span></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold-dark" /> Sedi operative
                    </h3>
                    <div className="space-y-3 text-sm text-foreground/75">
                      <div>
                        <div className="font-semibold text-navy">Napoli</div>
                        <div>Via M. Cervantes 55/5 — 80133</div>
                      </div>
                      <div>
                        <div className="font-semibold text-navy">Milano</div>
                        <div>Via R. Boscovich 14 — 20124</div>
                      </div>
                      <div>
                        <div className="font-semibold text-navy">Torino</div>
                        <div>Corso Vittorio Emanuele II n. 168 — 10138</div>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-foreground/60 italic">
                      La maggior parte del lavoro avviene da remoto. Gli incontri in sede sono su appuntamento.
                    </p>
                  </div>

                  <div className="bg-gold/10 rounded-xl p-5 border border-gold/30">
                    <ShieldCheck className="w-6 h-6 text-gold-dark mb-2" />
                    <h4 className="font-bold text-navy mb-1.5">100% riservato</h4>
                    <p className="text-sm text-foreground/75">I tuoi dati restano tra noi. Non contattiamo creditori, parenti o datori di lavoro senza un tuo via libera scritto.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TDCoverage />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Contatti;
