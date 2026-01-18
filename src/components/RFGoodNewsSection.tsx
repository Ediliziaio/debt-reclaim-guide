import { useInView } from "@/hooks/useInView";
import { Check, TrendingDown, ShieldCheck, CreditCard, Moon } from "lucide-react";
import abstractBg from "@/assets/abstract-hope-bg.jpg";

const RFGoodNewsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const benefits = [
    {
      icon: TrendingDown,
      text: "Ridurre il tuo debito fino all'80%",
      detail: "(in alcuni casi documentati anche di più)",
    },
    {
      icon: ShieldCheck,
      text: "Bloccare pignoramenti e azioni esecutive",
      detail: "già in corso",
    },
    {
      icon: CreditCard,
      text: "Trasformare debiti insostenibili",
      detail: "in rate che puoi davvero permetterti",
    },
    {
      icon: Moon,
      text: "Tornare a dormire la notte",
      detail: "senza l'incubo dei creditori",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image with gradient */}
      <div className="absolute inset-0">
        <img 
          src={abstractBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              ✨ C'è Una Buona Notizia
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Anzi, Un'<span className="text-primary">Ottima</span> Notizia
            </h2>
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Esiste un modo <strong className="text-foreground">LEGALE</strong> per uscire da questa spirale.
              Non trucchetti. Non scorciatoie improvvisate.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-background border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-card hover:shadow-primary ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Check className={`w-5 h-5 text-primary transition-all duration-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ transitionDelay: `${600 + index * 100}ms` }} />
                      <p className="text-lg md:text-xl font-semibold text-foreground">
                        {benefit.text}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Caveat */}
          <div className={`text-center p-8 rounded-3xl bg-secondary/10 border border-secondary/20 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-foreground mb-4">
              <strong>Il problema?</strong> Questi strumenti funzionano <span className="text-secondary font-bold">SOLO</span> se:
            </p>
            <ul className="text-muted-foreground space-y-2 max-w-lg mx-auto">
              <li>✓ Hai al tuo fianco professionisti che li conoscono DAVVERO</li>
              <li>✓ Chi ti segue ha già gestito centinaia di casi simili al tuo</li>
              <li>✓ La strategia è costruita su DIRITTO, non su speranze</li>
            </ul>
            <p className="text-xl font-bold text-secondary mt-6">
              Ed è esattamente qui che entriamo in gioco noi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFGoodNewsSection;
