import { useInView } from "@/hooks/useInView";
import { Search, FileText, Target, Users } from "lucide-react";

const RFMethodSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const steps = [
    { number: "01", icon: Search, title: "Analisi Approfondita", description: "Analizziamo TUTTA la tua posizione debitoria: ogni creditore, ogni importo, ogni documento." },
    { number: "02", icon: FileText, title: "Valutazione Opzioni", description: "Identifichiamo quale strumento giuridico è applicabile al TUO caso specifico." },
    { number: "03", icon: Target, title: "Strategia Personalizzata", description: "Costruiamo una strategia SU MISURA con numeri, leggi e sentenze concrete." },
    { number: "04", icon: Users, title: "Affiancamento Costante", description: "Ti seguiamo PASSO DOPO PASSO fino alla risoluzione completa." },
  ];

  return (
    <section id="metodo" ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Il Nostro Metodo in <span className="text-primary">4 Passi</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const isGold = index % 2 === 1; // 02 e 04 in oro
              const accentColor = isGold ? 'gold' : 'primary';
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-background border border-border hover:border-${accentColor} transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`text-6xl font-bold ${isGold ? 'text-gold/20 group-hover:text-gold/40' : 'text-primary/20 group-hover:text-primary/40'} transition-colors mb-4`}>
                    {step.number}
                  </div>
                  <step.icon className={`w-8 h-8 ${isGold ? 'text-gold' : 'text-primary'} mb-4`} />
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFMethodSection;
