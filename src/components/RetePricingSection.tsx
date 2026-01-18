import { useInView } from "@/hooks/useInView";
import { Check, Euro, Percent, UserCheck } from "lucide-react";

const RetePricingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const includedItems = [
    { item: "Tutta la formazione tecnica", value: "€8.000" },
    { item: "Tutti i modelli e le procedure", value: "€12.000" },
    { item: "Coordinamento e supporto illimitato", value: "INESTIMABILE" },
    { item: "Lead generation nazionale", value: "€15-30.000" },
    { item: "Piattaforma e strumenti", value: "€3.000" },
    { item: "Brand e reputazione", value: "INCALCOLABILE" },
  ];

  const requirements = [
    "Avvocato iscritto all'Albo da almeno 3 anni",
    "OPPURE Commercialista iscritto all'Albo da almeno 3 anni",
    "Studio professionale attivo (anche monolocale va benissimo)",
    "Partita IVA regolare e polizza RC professionale",
    "Disponibilità a seguire le procedure della rete",
    "Interesse genuino per il settore esdebitazione/crisi",
  ];

  const notRequired = [
    "Esperienza pregressa specifica (ti formiamo noi)",
    "Studio grande o strutturato (anche studi individuali)",
    "Investimenti in marketing (lo facciamo noi)",
    "Software costosi (ti diamo tutto noi)",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosa Ti Chiediamo <span className="text-primary">(E Perché È Un Investimento, Non Un Costo)</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Annual Contribution */}
            <div className={`bg-card border-2 border-primary rounded-2xl p-8 ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Euro className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Contributo Annuale Alla Rete</h3>
                  <p className="text-muted-foreground">Tutto incluso, nessun costo nascosto</p>
                </div>
              </div>

              <div className="text-center py-6 mb-6 bg-primary/5 rounded-xl">
                <div className="text-5xl font-bold text-primary mb-2">€3.600</div>
                <div className="text-lg text-muted-foreground">+IVA/anno</div>
                <div className="mt-4 text-sm text-foreground">
                  Pagamento: <strong>€900+IVA</strong> ogni 3 mesi
                  <br />
                  <span className="text-primary">o annuale anticipato con sconto 10%</span>
                </div>
              </div>

              <h4 className="font-bold text-foreground mb-4">Cosa include:</h4>
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-foreground text-sm">{item.item}</span>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Sharing */}
            <div className={`bg-card border border-border rounded-2xl p-8 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Percent className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Revenue Sharing</h3>
                  <p className="text-muted-foreground">Solo sulle pratiche dalla rete</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Per pratiche dalla rete centrale (lead generation):</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Alla rete</span>
                    <span className="text-lg font-bold text-secondary">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rimane a te</span>
                    <span className="text-lg font-bold text-primary">85%</span>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Esempio pratico:</h4>
                  <p className="text-sm text-muted-foreground mb-3">Pratica di esdebitazione: fatturi €6.000</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Alla rete</span>
                    <span className="font-semibold text-foreground">€900</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rimane a te</span>
                    <span className="text-lg font-bold text-primary">€5.100</span>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-xl p-6">
                  <h4 className="font-bold mb-2">Per pratiche acquisite autonomamente:</h4>
                  <p className="text-3xl font-bold text-primary">0%</p>
                  <p className="text-white/70 text-sm mt-1">È tutto tuo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className={`grid md:grid-cols-2 gap-8 ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Requisiti di Adesione</h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">NON serve:</h3>
              <ul className="space-y-3">
                {notRequired.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">✗</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetePricingSection;
