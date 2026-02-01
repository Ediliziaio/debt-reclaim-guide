import { useInView } from "@/hooks/useInView";
import { Check, Sparkles } from "lucide-react";

const ReteSolutionSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const benefits = [
    "Formazione tecnica specifica (legale + contabile)",
    "Coordinamento costante con professionisti esperti",
    "Modelli di atti già testati su centinaia di casi",
    "Procedure standardizzate che funzionano",
    "Precedenti giurisprudenziali aggiornati",
    "Affiancamento operativo su ogni pratica",
    "Flusso di clienti qualificati dalla rete nazionale",
  ];

  const results = [
    "Acquisisci competenze altamente specialistiche",
    "Moltiplichi il fatturato con pratiche ad alto valore",
    "Riduci drasticamente il rischio di errore",
    "Lavori con un metodo collaudato (non improvvisi)",
    "Hai sempre qualcuno di esperto a cui chiedere",
    "Accedi a un flusso costante di nuovi clienti",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="vantaggi" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">La Soluzione</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ma C'È Una Soluzione <span className="text-primary">(Ed È Esattamente Quello Che Stai Per Leggere)</span>
            </h2>
          </div>

          {/* Network Introduction */}
          <div className={`bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 mb-12 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">RF Ristrutturazione Debiti</strong> è la <strong>PRIMA rete nazionale</strong> in Italia che unisce Avvocati e Commercialisti specializzati esclusivamente in:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg text-foreground">
                <Check className="w-6 h-6 text-primary" />
                <strong>Esdebitazione</strong> (consumatori, professionisti, piccole imprese)
              </li>
              <li className="flex items-center gap-3 text-lg text-foreground">
                <Check className="w-6 h-6 text-primary" />
                <strong>Codice della Crisi e dell'Insolvenza</strong> (procedure concorsuali)
              </li>
            </ul>
            <p className="text-lg text-foreground">
              E stiamo cercando studi professionali in tutta Italia che vogliano entrare nella rete e lavorare con un <strong>metodo strutturato</strong>, coordinamento tecnico centralizzato e flusso costante di pratiche qualificate.
            </p>
          </div>

          {/* What You Get */}
          <div className={`mb-12 ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              In parole semplici: Ti diamo <span className="text-primary">tutto quello che ti serve</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className={`bg-navy rounded-2xl p-8 md:p-12 ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Risultato per te?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/90">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteSolutionSection;
