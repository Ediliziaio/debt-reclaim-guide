import { useInView } from "@/hooks/useInView";
import { Home, Building2, Receipt, Briefcase, ArrowRight, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RFCaseStudiesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const cases = [
    {
      icon: Home,
      title: "Famiglia Monoreddito",
      subtitle: "€120.000 di Debiti",
      situation: "Mutuo ipotecario, 3 prestiti personali, 2 carte revolving. Rischio di perdere la casa.",
      solution: "Procedura di esdebitazione con riduzione dell'80% del debito.",
      results: ["Debito: €120.000 → €24.000", "Rata: €400/mese per 5 anni", "Casa salvata"],
      reduction: "80%",
    },
    {
      icon: Building2,
      title: "PMI Manifatturiera",
      subtitle: "€500.000 di Debiti",
      situation: "Azienda con 12 dipendenti. Debiti bancari, fornitori, contributi arretrati.",
      solution: "Concordato preventivo con ristrutturazione del debito.",
      results: ["Debito ridotto del 45%", "Attività salvata e operativa", "12 posti di lavoro preservati"],
      reduction: "45%",
    },
    {
      icon: Receipt,
      title: "Imprenditore Edile",
      subtitle: "€280.000 di Debiti Fiscali",
      situation: "IVA, IRPEF, contributi non pagati. Conti correnti pignorati.",
      solution: "Transazione fiscale con Agenzia delle Entrate.",
      results: ["Riduzione del 65% del debito", "Sblocco conti e veicoli", "Attività riprende"],
      reduction: "65%",
    },
    {
      icon: Briefcase,
      title: "Ex Titolare Partita IVA",
      subtitle: "€90.000 di Debiti",
      situation: "Attività chiusa. Debiti residui con fornitori, banche, Fisco.",
      solution: "Piano del consumatore con esdebitazione totale.",
      results: ["Esdebitazione TOTALE", "Nuovo inizio garantito", "Debiti cancellati per legge"],
      reduction: "100%",
    },
  ];

  return (
    <section id="casi-risolti" ref={ref} className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              Casi Reali
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Persone Reali. Risultati Reali.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-soft ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <caseItem.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{caseItem.title}</h3>
                      <p className="text-sm text-muted-foreground">{caseItem.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    <TrendingDown className="w-4 h-4" />
                    -{caseItem.reduction}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{caseItem.situation}</p>
                <p className="text-sm font-medium text-secondary mb-4">{caseItem.solution}</p>
                
                <div className="space-y-2">
                  {caseItem.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <Link to="/casi-studio">
              <Button variant="outline" size="lg" className="group">
                Vedi Tutti i Casi Studio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFCaseStudiesSection;
