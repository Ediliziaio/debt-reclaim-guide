import { Users, Scale, Calculator, Linkedin, Mail } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import avvocatoRossi from "@/assets/avvocato-rossi.jpg";
import commercialistaFava from "@/assets/commercialista-fava.jpg";

interface Founder {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  icon: React.ReactNode;
}

const founders: Founder[] = [
  {
    name: "Avv. Armando Rossi",
    title: "Co-Fondatore",
    role: "Esperto in Procedure di Sovraindebitamento",
    image: avvocatoRossi,
    bio: "Oltre 15 anni di esperienza nella tutela dei debitori. Ha seguito personalmente centinaia di procedure di sovraindebitamento, ottenendo risultati straordinari per famiglie e piccoli imprenditori schiacciati dai debiti.",
    specialties: ["Legge 3/2012", "Esdebitazione", "Blocco Pignoramenti", "Negoziazione Creditoria"],
    icon: <Scale className="w-6 h-6" />
  },
  {
    name: "Dott. Comm. Roberto Fava",
    title: "Co-Fondatore",
    role: "Specialista in Ristrutturazione del Debito Aziendale",
    image: commercialistaFava,
    bio: "Commercialista con focus esclusivo sulla crisi d'impresa. Ha ristrutturato oltre €50 milioni di debito aziendale, salvando decine di imprese dalla chiusura e preservando centinaia di posti di lavoro.",
    specialties: ["Concordato Preventivo", "Transazione Fiscale", "Analisi Finanziaria", "Piano di Risanamento"],
    icon: <Calculator className="w-6 h-6" />
  }
];

const RFTeamSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="team" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-trust/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">I Fondatori</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Chi C'è Dietro{" "}
            <span className="text-primary">RF Debt Restructuring</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Due professionisti con competenze complementari, uniti dalla missione 
            di offrire la migliore assistenza nella gestione del debito.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                  {founder.icon}
                </div>

                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                    {founder.title}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    {founder.name}
                  </h3>
                  <p className="text-trust font-medium text-sm mt-1">
                    {founder.role}
                  </p>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-16 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-xl md:text-2xl text-white/80 italic font-light leading-relaxed">
            "La nostra forza è l'integrazione: dove l'avvocato vede la soluzione legale, 
            il commercialista vede la sostenibilità economica. <span className="text-primary font-medium not-italic">Insieme, costruiamo il tuo percorso di rinascita.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default RFTeamSection;
