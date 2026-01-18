import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { TrendingUp, Calculator } from "lucide-react";

const ReteROISection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const conservativeTotal = useAnimatedCounter({ end: 58680, duration: 2000, isInView });
  const conservativeROI = useAnimatedCounter({ end: 1530, duration: 2000, isInView });
  const realisticTotal = useAnimatedCounter({ end: 139425, duration: 2000, isInView });
  const realisticROI = useAnimatedCounter({ end: 3773, duration: 2000, isInView });

  const conservativeData = [
    { label: "Contributo rete (costo)", value: "-€3.600", negative: true },
    { label: "Pratiche da lead rete (8/anno)", value: "+€40.800", positive: true },
    { label: "Meno revenue sharing 15%", value: "-€6.120", negative: true },
    { label: "Pratiche autonome (4/anno)", value: "+€24.000", positive: true },
  ];

  const realisticData = [
    { label: "Contributo rete (costo)", value: "-€3.600", negative: true },
    { label: "Pratiche da lead rete (15/anno)", value: "+€76.500", positive: true },
    { label: "Meno revenue sharing 15%", value: "-€11.475", negative: true },
    { label: "Pratiche autonome (8/anno)", value: "+€48.000", positive: true },
    { label: "Referral clienti (5/anno)", value: "+€30.000", positive: true },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Analisi Economica</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Facciamo Due Conti
            </h2>
            <p className="text-xl text-muted-foreground">
              (Perché I Numeri Parlano Chiaro)
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Conservative Scenario */}
            <div className={`bg-card border border-border rounded-2xl overflow-hidden ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
              <div className="bg-secondary/10 p-6 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">SCENARIO CONSERVATIVO</h3>
                <p className="text-muted-foreground">(primo anno di adesione)</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {conservativeData.map((row, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-foreground">{row.label}</span>
                      <span className={`font-semibold ${row.negative ? 'text-destructive' : 'text-primary'}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-navy rounded-xl p-6 text-center">
                  <p className="text-white/70 text-sm mb-1">TOTALE FATTURATO LORDO</p>
                  <p className="text-3xl font-bold text-white mb-3">
                    +€{conservativeTotal.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-xl font-bold text-primary">ROI: +{conservativeROI}%</span>
                  </div>
                  <p className="text-white/60 text-sm mt-2">nel primo anno</p>
                </div>
              </div>
            </div>

            {/* Realistic Scenario */}
            <div className={`bg-card border-2 border-primary rounded-2xl overflow-hidden ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
              <div className="bg-primary/10 p-6 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">SCENARIO REALISTICO</h3>
                    <p className="text-muted-foreground">(dal secondo anno)</p>
                  </div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Consigliato
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {realisticData.map((row, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-foreground">{row.label}</span>
                      <span className={`font-semibold ${row.negative ? 'text-destructive' : 'text-primary'}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-center">
                  <p className="text-white/80 text-sm mb-1">TOTALE FATTURATO LORDO</p>
                  <p className="text-4xl font-bold text-white mb-3">
                    +€{realisticTotal.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-6 h-6 text-white" />
                    <span className="text-2xl font-bold text-white">ROI: +{realisticROI}%</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2">dal secondo anno</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={`text-center ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <p className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-6 py-4 text-foreground">
              <strong className="text-primary">Questi non sono numeri inventati.</strong>
              <br />
              Sono le medie reali degli studi già nella rete da 12-24 mesi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteROISection;
