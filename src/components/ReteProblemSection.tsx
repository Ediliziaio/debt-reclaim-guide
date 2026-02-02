import { XCircle, AlertTriangle, Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ReteProblemSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const problems = [
    "Non avevi le competenze tecniche specifiche per gestirlo al meglio?",
    "Ti mancava il coordinamento con un commercialista (o con un avvocato)?",
    "Non sapevi esattamente come impostare gli atti in modo ottimale?",
    "Preferivi evitare il rischio di errore su una pratica delicata?",
    "Non avevi precedenti solidi o procedure collaudate su cui basarti?",
  ];

  const requirements = [
    "Competenze tecniche precise (legali + contabili integrate)",
    "Coordinamento costante tra avvocato e commercialista",
    "Precedenti giurisprudenziali solidi e aggiornati",
    "Atti già testati su centinaia di casi reali",
    "Un metodo collaudato e replicabile",
    "Aggiornamento continuo sulle novità normative",
  ];

  const consequences = [
    "Rifiuti opportunità professionali importanti",
    "Rischi errori su pratiche complesse",
    "Lavori il triplo per risultati incerti",
    "I clienti vanno da chi è veramente specializzato",
    "Rimani fermo mentre altri colleghi crescono",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Opening Letter */}
          <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-muted-foreground mb-6">
              Caro Collega Avvocato, Caro Collega Dottore Commercialista,
            </p>
            <p className="text-xl text-foreground font-medium mb-8">
              Lascia che ti faccia una domanda diretta:
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Quante volte hai dovuto rifiutare un caso complesso di esdebitazione perché:
            </h2>
          </div>

          {/* Problem Checklist */}
          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 bg-destructive/5 border border-destructive/20 rounded-lg p-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>

          {/* Second Hook */}
          <div className={`bg-card border border-border rounded-xl p-8 mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
            <p className="text-lg text-foreground mb-4">
              E quante volte hai accettato il caso... ma poi ti sei trovato a <strong>studiare da zero</strong>, perdere tempo prezioso, improvvisare procedure, e chiederti se stavi davvero facendo la cosa giusta per il tuo cliente?
            </p>
          </div>

          {/* The Truth */}
          <div className={`mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-foreground">La Verità Che Nessuno Ti Dice</h3>
            </div>
            <p className="text-xl text-foreground mb-6">
              Il settore dell'esdebitazione e della crisi d'impresa è <strong className="text-destructive">estremamente specialistico</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Non basta conoscere "un po'" il Codice della Crisi. Non basta aver letto qualche articolo o seguito un webinar. Non basta improvvisarsi esperti.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">Per eccellere in questo settore servono:</p>
            <ul className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 text-foreground transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${900 + index * 80}ms` }}
                >
                  <Check className={`w-5 h-5 flex-shrink-0 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`} />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* The Problem Statement */}
          <div className={`bg-navy rounded-2xl p-8 text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
            <h3 className="text-xl font-bold mb-4">E il problema?</h3>
            <p className="text-lg text-white/80 mb-6">
              Se lavori da solo nel tuo studio, probabilmente <strong className="text-gold">NON hai tutto questo</strong>.
            </p>
            <p className="text-lg font-semibold mb-4">Risultato?</p>
            <div className="grid md:grid-cols-2 gap-4">
              {consequences.map((consequence, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${1300 + index * 100}ms` }}
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{consequence}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteProblemSection;
