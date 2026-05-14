import { Briefcase, Calendar, Users, Scale } from "lucide-react";
import TDHeroBackdrop from "./TDHeroBackdrop";
import Reveal from "./Reveal";

const stats = [
  {
    icon: Calendar,
    value: "Dal 2018",
    label: "Anni di attività",
    sub: "Esperienza maturata sul campo",
  },
  {
    icon: Briefcase,
    value: "500+",
    label: "Procedure seguite",
    sub: "Pratiche aperte negli anni",
  },
  {
    icon: Users,
    value: "Squadra integrata",
    label: "Avvocati e commercialisti",
    sub: "Competenze legali e fiscali",
  },
  {
    icon: Scale,
    value: "3 aree",
    label: "di competenza",
    sub: "Privati, imprese, tributario",
  },
];

const TDNumbers = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-navy text-white overflow-hidden">
      <TDHeroBackdrop />
      <div className="container mx-auto px-4 relative">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Lo studio in sintesi</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Un punto di riferimento per chi affronta una situazione debitoria complessa.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Non promettiamo risultati: lavoriamo con strumenti previsti dalla legge, con un metodo strutturato e un team multidisciplinare. Ogni caso è diverso, ogni percorso viene valutato singolarmente.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} direction="scale">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gold mb-2">{s.value}</div>
                <div className="font-semibold text-white text-sm mb-1">{s.label}</div>
                <div className="text-xs text-white/60">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDNumbers;
