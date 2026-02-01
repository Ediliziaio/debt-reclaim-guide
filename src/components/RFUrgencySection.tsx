import { useInView } from "@/hooks/useInView";
import { TrendingUp, AlertTriangle, Gavel, Clock, Ban, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineSteps = [
  {
    time: "Oggi",
    title: "Gli interessi maturano",
    description: "Ogni giorno che passa, il tuo debito cresce silenziosamente. Gli interessi non dormono mai.",
    icon: TrendingUp,
    severity: 1
  },
  {
    time: "1-3 Mesi",
    title: "Le pressioni aumentano",
    description: "Telefonate continue, lettere raccomandate, minacce legali. I creditori inaspriscono le azioni.",
    icon: AlertTriangle,
    severity: 2
  },
  {
    time: "3-6 Mesi",
    title: "Arrivano i pignoramenti",
    description: "Conto corrente bloccato, stipendio pignorato, beni sequestrati. La situazione precipita.",
    icon: Gavel,
    severity: 3
  },
  {
    time: "6-12 Mesi",
    title: "Le opzioni si riducono",
    description: "Molte soluzioni legali non sono più disponibili. I tempi stringono drammaticamente.",
    icon: Clock,
    severity: 4
  },
  {
    time: "Oltre 1 Anno",
    title: "Conseguenze irreversibili",
    description: "Perdita definitiva dei beni, segnalazione CRIF permanente, esclusione dal sistema creditizio.",
    icon: Ban,
    severity: 5
  }
];

const hopePoints = [
  "Utilizzare gli strumenti legali disponibili",
  "Ridurre il debito fino all'80%",
  "Bloccare i pignoramenti in corso",
  "Proteggere la tua casa e i tuoi beni",
  "Tornare finalmente a dormire la notte"
];

const RFUrgencySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getSeverityColor = (severity: number) => {
    switch (severity) {
      case 1: return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case 2: return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case 3: return "bg-red-500/20 text-red-400 border-red-500/30";
      case 4: return "bg-red-600/20 text-red-500 border-red-600/30";
      case 5: return "bg-red-700/20 text-red-600 border-red-700/30";
      default: return "bg-red-500/20 text-red-400 border-red-500/30";
    }
  };

  const getLineColor = (severity: number) => {
    switch (severity) {
      case 1: return "bg-yellow-500";
      case 2: return "bg-orange-500";
      case 3: return "bg-red-500";
      case 4: return "bg-red-600";
      case 5: return "bg-red-700";
      default: return "bg-red-500";
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-400 text-sm font-medium">Attenzione: Non Ignorare Questo</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Cosa Succede Se <span className="text-red-400">NON</span> Fai Nulla?
          </h2>
          
          <p className={`text-lg text-background/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Lascia che te lo dica chiaramente: <strong className="text-red-400">ogni giorno che passa senza agire, la tua situazione PEGGIORA.</strong>
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-700 transform md:-translate-x-1/2" />
            
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Desktop: Alternating layout */}
                <div className={`hidden md:flex w-full items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${getSeverityColor(step.severity)}`}>
                      {step.time}
                    </span>
                    <h3 className="text-xl font-bold text-background mb-2">{step.title}</h3>
                    <p className="text-background/60 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${getSeverityColor(step.severity)} ${isInView ? 'animate-pulse' : ''}`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>
                  
                  <div className="w-5/12" />
                </div>

                {/* Mobile: Left-aligned layout */}
                <div className="flex md:hidden items-start">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${getSeverityColor(step.severity)} ${isInView ? 'animate-pulse' : ''}`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="ml-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${getSeverityColor(step.severity)}`}>
                      {step.time}
                    </span>
                    <h3 className="text-lg font-bold text-background mb-1">{step.title}</h3>
                    <p className="text-background/60 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hope Section */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Gradient transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 rounded-3xl" />
            
            <div className="relative bg-navy/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Ma C'è Ancora <span className="text-gold">Tempo</span>
              </h3>
              
              <p className="text-background/70 text-lg mb-8">
                In questo momento, mentre stai leggendo, <strong className="text-gold">hai ancora tempo.</strong> Puoi ancora:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                {hopePoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-background/80">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className={`inline-block px-6 py-3 rounded-full bg-gold/20 border border-gold/30 transition-all duration-700 delay-1500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <p className="text-gold font-bold text-lg">
                  Però devi decidere. <span className="underline">ADESSO.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFUrgencySection;
