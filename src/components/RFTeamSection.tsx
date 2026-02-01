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
  linkedin?: string;
  email?: string;
}

const founders: Founder[] = [
  {
    name: "Avv. Armando Rossi",
    title: "Co-Fondatore",
    role: "Avvocato Cassazionista, Esperto in Diritto d'Impresa",
    image: avvocatoRossi,
    bio: "Fondatore dello Studio Legale Armando Rossi & Partners, ideatore del brand 'Tutela Debito'. Già Presidente dell'Ordine degli Avvocati di Napoli e membro del Direttivo OCF, oggi Delegato per i rapporti con Imprese e Consumo. Autore e Direttore della Collana 'Business & Law', vanta numerose pubblicazioni in materia di contenzioso fiscale e bancario.",
    specialties: ["Codice della Crisi", "Esdebitazione", "Diritto Tributario", "Composizione Negoziata"],
    icon: <Scale className="w-6 h-6" />,
    linkedin: "https://www.linkedin.com/in/avvocato-armando-rossi/",
    email: "a.rossi@tuteladebito.it"
  },
  {
    name: "Dott. Comm. Roberto Fava",
    title: "Co-Fondatore",
    role: "Commercialista, Curatore Fallimentare",
    image: commercialistaFava,
    bio: "Oltre venti anni di esperienza come curatore fallimentare presso i Tribunali di Napoli, Nola e Torre Annunziata. Consulente Tecnico d'Ufficio presso il Tribunale delle Imprese di Napoli. Esperto nominato dalla Prefettura per misure di prevenzione collaborativa ai sensi del codice antimafia.",
    specialties: ["Concordato Preventivo", "Composizione Negoziata", "Business Plan", "Anatocismo e Usura"],
    icon: <Calculator className="w-6 h-6" />,
    linkedin: "https://www.linkedin.com/in/roberto-fava-commercialista/",
    email: "r.fava@tuteladebito.it"
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
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold uppercase tracking-wide">I Fondatori</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Chi C'è Dietro{" "}
            <span className="text-gold">RF Debt Restructuring</span>
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
                  {founder.linkedin && (
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {founder.email && (
                    <a 
                      href={`mailto:${founder.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                    {founder.title}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    {founder.name}
                  </h3>
                  <p className="text-gold-light font-medium text-sm mt-1">
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
                      className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs text-gold font-medium"
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
            il commercialista vede la sostenibilità economica. <span className="text-gold font-medium not-italic">Insieme, costruiamo il tuo percorso di rinascita.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default RFTeamSection;
