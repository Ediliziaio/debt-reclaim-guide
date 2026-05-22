import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDMethod from "@/components/TDMethod";
import TDProcessFlow from "@/components/TDProcessFlow";
import TDWhyUs from "@/components/TDWhyUs";
import TDGuarantee from "@/components/TDGuarantee";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { CheckCircle2, X } from "lucide-react";

const cautious = [
  "Promesse di risultato senza analisi della pratica",
  "Costi non comunicati in modo preventivo",
  "Approccio puramente legale o puramente fiscale",
  "Stesso strumento applicato a situazioni diverse",
];

const ourApproach = [
  "Analisi documentale come primo passo",
  "Preventivo scritto, comunicato in anticipo",
  "Avvocato e commercialista sulla stessa pratica",
  "Strumento individuato sulla base del caso specifico",
];

const Metodo = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <>
      <Helmet>
        <title>Il nostro metodo in 4 fasi | Tutela Debito</title>
        <meta name="description" content="Il metodo Tutela Debito in 4 fasi operative: diagnosi della posizione debitoria, definizione della strategia legale, deposito della procedura, esecuzione e chiusura." />
        <meta name="keywords" content="metodo esdebitazione, procedura sovraindebitamento, strategia legale debiti, diagnosi debiti" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tuteladebito.it/metodo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Il nostro metodo in 4 fasi | Tutela Debito" />
        <meta property="og:description" content="Diagnosi, strategia, deposito ed esecuzione: il percorso operativo dello studio." />
        <meta property="og:url" content="https://tuteladebito.it/metodo" />
        <meta property="og:image" content="https://tuteladebito.it/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tuteladebito.it/" },
            { "@type": "ListItem", "position": 2, "name": "Metodo", "item": "https://tuteladebito.it/metodo" },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl">
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Il nostro metodo</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Come gestiamo <span className="text-gold">ogni pratica</span>.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Un percorso strutturato in quattro fasi. Ogni fase ha obiettivi precisi, documenti definiti e tempi indicativi. Non promettiamo risultati: lavoriamo con metodo all'interno del perimetro previsto dalla normativa.
                </p>
              </div>
            </div>
          </section>

          <TDProcessFlow />
          <TDMethod />

          {/* Comparison */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10">
                <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Differenze di approccio</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                  Cosa caratterizza il nostro lavoro.
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
                <div className="bg-muted/40 border border-border rounded-2xl p-7 lg:p-8">
                  <h3 className="text-lg font-bold text-navy mb-5">A cosa prestare attenzione</h3>
                  <ul className="space-y-3">
                    {cautious.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-foreground/75">
                        <X className="w-4 h-4 text-destructive mt-1 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/40 border border-border rounded-2xl p-7 lg:p-8">
                  <h3 className="text-lg font-bold text-navy mb-5">Il nostro modo di lavorare</h3>
                  <ul className="space-y-3">
                    {ourApproach.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-success mt-1 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <TDGuarantee />
          <TDWhyUs />
          <TDFinalCTA onOpenContact={openContact} />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Metodo;
