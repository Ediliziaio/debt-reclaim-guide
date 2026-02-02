import { useInView } from "@/hooks/useInView";
import { Scale, Calculator, Network, FileCheck, Users, Target } from "lucide-react";

const RFWhoWeAreSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const advantages = [
    {
      icon: FileCheck,
      text: "Stesso metodo di lavoro testato su oltre 500 casi",
    },
    {
      icon: Network,
      text: "Coordinamento tecnico-legale e contabile centralizzato",
    },
    {
      icon: Target,
      text: "Atti e procedure uniformi che hanno già dimostrato di funzionare",
    },
    {
      icon: Users,
      text: "Competenze integrate: avvocato + commercialista che lavorano INSIEME sul tuo caso",
    },
  ];

  return (
    <section id="chi-siamo" ref={ref} className="py-12 md:py-24 lg:py-32 bg-navy text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <span className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gold/20 text-gold font-semibold text-xs md:text-sm mb-4 md:mb-6 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              Chi Siamo
            </span>
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold">RF Ristrutturazioni Debiti</span>
            </h2>
            <p className={`text-base md:text-2xl opacity-90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              La <strong className="text-gold">PRIMA rete nazionale</strong> in Italia che unisce Avvocati esperti e Commercialisti specializzati esclusivamente in:
            </p>
          </div>

          {/* Services */}
          <div className={`grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gold/20 flex items-center justify-center mb-3 md:mb-4">
                <Scale className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Esdebitazione</h3>
              <p className="text-sm md:text-base opacity-80">Privati, professionisti, piccole imprese</p>
            </div>
            <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gold/20 flex items-center justify-center mb-3 md:mb-4">
                <Calculator className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Codice della Crisi</h3>
              <p className="text-sm md:text-base opacity-80">Procedure aziendali e dell'Insolvenza</p>
            </div>
          </div>

          {/* What it means */}
          <div className={`p-5 md:p-12 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 mb-8 md:mb-16 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
              Cosa significa "PRIMA rete nazionale"?
            </h3>
            <p className="text-sm md:text-lg opacity-90 text-center mb-6 md:mb-8 max-w-2xl mx-auto">
              Significa che non siamo uno studio isolato in una città. Siamo una rete coordinata di professionisti su tutto il territorio italiano, con:
            </p>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-base opacity-90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div className={`text-center transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
              Perché questo è un <span className="text-gold">vantaggio enorme</span> per te?
            </h3>
            <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Semplice: il debito è un problema che ha <strong>SEMPRE</strong> due facce.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
              <div className="flex items-center gap-2 md:gap-3 p-3 px-5 md:p-4 md:px-6 rounded-full bg-gold/20 text-gold text-sm md:text-base">
                <Scale className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">Faccia Legale</span>
              </div>
              <span className="text-2xl md:text-3xl font-bold text-gold">+</span>
              <div className="flex items-center gap-2 md:gap-3 p-3 px-5 md:p-4 md:px-6 rounded-full bg-gold-light/20 text-gold-light text-sm md:text-base">
                <Calculator className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold">Faccia Contabile</span>
              </div>
            </div>
            <p className="text-sm md:text-lg mt-6 md:mt-8 max-w-xl mx-auto">
              Se hai solo un avvocato, manca metà della soluzione.<br />
              Se hai solo un commercialista, manca l'altra metà.<br /><br />
              <strong className="text-gold text-lg md:text-xl">Noi abbiamo ENTRAMBI. Dal primo giorno.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFWhoWeAreSection;
