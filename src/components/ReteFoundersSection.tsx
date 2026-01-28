import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Award, Scale, Calculator, TrendingUp, Linkedin, Mail } from "lucide-react";
import avvocatoRossi from "@/assets/avvocato-rossi.jpg";
import commercialistaFava from "@/assets/commercialista-fava.jpg";

const ReteFoundersSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const casesCount = useAnimatedCounter({ end: 500, duration: 2000, isInView });
  const reductionCount = useAnimatedCounter({ end: 60, duration: 2000, isInView });
  const successCount = useAnimatedCounter({ end: 85, duration: 2000, isInView });
  const debtCount = useAnimatedCounter({ end: 50, duration: 2000, isInView });

  const founders = [
    {
      name: "Avv. Armando Rossi",
      role: "Fondatore & Coordinatore Legale",
      image: avvocatoRossi,
      icon: Scale,
      experience: "Avvocato Cassazionista, fondatore dello Studio Legale Armando Rossi & Partners e ideatore del brand 'Tutela Debito'. Già Presidente dell'Ordine degli Avvocati di Napoli, oggi Delegato per i rapporti con Imprese e Consumo.",
      highlight: "Autore della Collana 'Business & Law' (Edizioni Il Papavero), vanta pubblicazioni su quotidiani nazionali tra cui 'Il Riformista' in materia di crisi d'impresa.",
      linkedin: "https://www.linkedin.com/in/avvocato-armando-rossi/",
      email: "a.rossi@tuteladebito.it"
    },
    {
      name: "Dott. Comm. Roberto Fava",
      role: "Fondatore & Coordinatore Contabile",
      image: commercialistaFava,
      icon: Calculator,
      experience: "Curatore fallimentare presso i Tribunali di Napoli, Nola e Torre Annunziata con oltre venti anni di esperienza. CTU presso il Tribunale delle Imprese di Napoli ed esperto in gestione aziendale.",
      highlight: "Nominato dalla Prefettura di Napoli quale esperto in gestione aziendale ai sensi del codice antimafia per misure di prevenzione collaborativa.",
      linkedin: "https://www.linkedin.com/in/roberto-fava-commercialista/",
      email: "r.fava@tuteladebito.it"
    },
  ];

  const stats = [
    { value: casesCount, suffix: "+", label: "Casi Gestiti", icon: Award },
    { value: reductionCount, suffix: "%", label: "Riduzione Media Debito", icon: TrendingUp },
    { value: successCount, suffix: "%", label: "Tasso di Successo", icon: Award },
    { value: debtCount, suffix: "M+", prefix: "€", label: "Debiti Ristrutturati", icon: TrendingUp },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="chi-siamo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chi Siamo E Perché Dovresti Considerare <span className="text-primary">Seriamente</span> Questa Opportunità
            </h2>
            <p className="text-lg text-muted-foreground">
              RF Debt Restructuring è fondata e coordinata da:
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 mb-16 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {founders.map((founder, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group">
                <div className="aspect-square overflow-hidden relative">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                  {/* Social Links on Hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {founder.linkedin && (
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {founder.email && (
                      <a 
                        href={`mailto:${founder.email}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <founder.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm text-primary">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{founder.experience}</p>
                  <p className="text-foreground font-medium bg-primary/5 border border-primary/20 rounded-lg p-3">
                    {founder.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Method Statement */}
          <div className={`bg-navy rounded-2xl p-8 md:p-12 mb-12 text-center ${isInView ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
            <p className="text-xl text-white mb-8">
              Insieme abbiamo creato un <strong className="text-primary">metodo di lavoro collaudato</strong> su oltre 500 casi, con:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Di Cosa Si Occupa la Rete */}
          <div className={`mt-16 ${isInView ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Di Cosa Si Occupa la <span className="text-primary">Rete</span>
            </h3>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              L'associazione professionale tra l'Avvocato Armando Rossi e il Dott. Commercialista Roberto Fava è interamente dedicata alla gestione della crisi da debito delle Imprese e all'esdebitazione di consumatori, professionisti e piccoli imprenditori.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Crisi d'Impresa */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">Crisi d'Impresa</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Interventi per aziende in difficoltà con approccio integrato legale-contabile, applicando rigorosamente gli strumenti del Codice della Crisi e dell'Insolvenza.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Composizione negoziata</li>
                  <li>• Concordato minore</li>
                  <li>• Accordi di ristrutturazione</li>
                  <li>• Piani attestati</li>
                  <li>• Liquidazione controllata</li>
                </ul>
              </div>

              {/* Esdebitazione */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">Esdebitazione</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Supporto completo a consumatori, professionisti e piccoli imprenditori in tutte le fasi del percorso di liberazione dai debiti.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Piano del consumatore</li>
                  <li>• Ristrutturazione dei debiti</li>
                  <li>• Esdebitazione del debitore incapiente</li>
                  <li>• Analisi posizione debitoria</li>
                  <li>• Liberazione debiti residuali</li>
                </ul>
              </div>

              {/* Metodo Integrato */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">Metodo Integrato</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Valutiamo la sostenibilità aziendale, dialoghiamo con creditori, fisco e banche per chiudere il passato debitorio con soluzioni ordinate e legali.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Valutazione sostenibilità</li>
                  <li>• Dialogo con creditori</li>
                  <li>• Predisposizione piani</li>
                  <li>• Procedure davanti agli organi competenti</li>
                  <li>• Soluzione ordinata alla crisi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <p className="text-lg text-foreground">
              E ora vogliamo condividere questo metodo con una <strong className="text-primary">rete nazionale di studi professionali seri</strong>.
            </p>
            <p className="text-muted-foreground mt-4">
              Non stiamo cercando "affiliati" da spremere. Stiamo costruendo una rete di colleghi con cui lavorare fianco a fianco, crescere insieme e dominare un settore in fortissima espansione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteFoundersSection;
