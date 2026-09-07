import { useState } from "react";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDCoverage from "@/components/TDCoverage";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import EicLeadForm from "@/components/EicLeadForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

const Contatti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);


  return (
    <>
      <SEO
        title="Contatti | Tutela Debito — Napoli, Milano, Torino"
        description="Contatta Tutela Debito per una diagnosi riservata della tua posizione. Telefono, email, WhatsApp o modulo di contatto. Sedi a Napoli, Milano e Torino."
        keywords="contatti studio legale debiti, avvocato esdebitazione contatti, Napoli Milano Torino"
        robots="index, follow, max-image-preview:large"
        canonical="https://www.tuteladebito.it/contatti"
        ogTitle="Contatti | Tutela Debito"
        ogDescription="Telefono, email, WhatsApp o modulo. Sedi a Napoli, Milano e Torino."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://www.tuteladebito.it/contatti",
            "name": "Contatti Tutela Debito",
            "mainEntity": {
              "@type": "LegalService",
              "name": "Tutela Debito",
              "telephone": ["+39-081-18671862", "+39-338-6115394"],
              "email": "info@studioavvocatorossi.it",
              "url": "https://www.tuteladebito.it",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tuteladebito.it/" },
              { "@type": "ListItem", "position": 2, "name": "Contatti", "item": "https://www.tuteladebito.it/contatti" },
            ],
          },
        ]}
      />

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
                  <p className="text-foreground/70 mb-7">
                    Compila il modulo: la richiesta arriva direttamente allo studio e ti
                    ricontattiamo con una prima valutazione. Tutto riservato.
                  </p>

                  <EicLeadForm title="Richiedi la diagnosi gratuita del tuo debito" />
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
