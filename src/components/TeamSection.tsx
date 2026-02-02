import { Users, Linkedin } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import OptimizedImage from "@/components/ui/optimized-image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Avv. Marco Rossi",
    role: "Fondatore & Senior Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Oltre 20 anni di esperienza in diritto bancario e tutela del debitore. Specializzato in procedure di sovraindebitamento e negoziazione con istituti di credito.",
    linkedin: "#"
  },
  {
    name: "Avv. Laura Bianchi",
    role: "Partner - Crisi d'Impresa",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Esperta in ristrutturazione aziendale, concordato preventivo e transazione fiscale. Ha gestito oltre 150 procedure di crisi d'impresa.",
    linkedin: "#"
  },
  {
    name: "Dott. Alessandro Conti",
    role: "Consulente Finanziario",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Analisi finanziaria e supporto nella valutazione delle posizioni debitorie. Collabora con lo studio per la pianificazione strategica dei casi.",
    linkedin: "#"
  },
  {
    name: "Dott.ssa Giulia Ferretti",
    role: "Office Manager",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    bio: "Coordinamento dello studio, gestione clienti e organizzazione pratiche. Primo punto di contatto per assistenza e appuntamenti.",
    linkedin: "#"
  },
  {
    name: "Avv. Paolo Martini",
    role: "Collaboratore Esterno - Diritto Tributario",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Specialista in contenzioso tributario, accertamenti fiscali e ricorsi. Collabora con lo studio per le pratiche di transazione fiscale.",
    linkedin: "#"
  },
  {
    name: "Dott.ssa Elena Russo",
    role: "Paralegal Senior",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Supporto legale specializzato, ricerche giurisprudenziali e preparazione documentazione per le procedure di sovraindebitamento.",
    linkedin: "#"
  },
  {
    name: "Dott. Luca Benedetti",
    role: "Collaboratore Esterno - Commercialista",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Analisi bilanci, perizie contabili e supporto tecnico per le procedure concorsuali e di ristrutturazione del debito aziendale.",
    linkedin: "#"
  }
];

const TeamSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="team" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">IL TEAM</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professionisti dedicati.{" "}
            <span className="text-gold">Al tuo fianco.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un team di esperti con competenze complementari, uniti dalla missione 
            di offrirti la migliore assistenza legale nella gestione del debito.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                
                {/* LinkedIn Button */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:border-gold hover:text-primary-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm">
            Il nostro studio si avvale inoltre di una rete di{" "}
            <span className="text-foreground font-medium">collaboratori specializzati</span>{" "}
            in diverse aree del diritto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
