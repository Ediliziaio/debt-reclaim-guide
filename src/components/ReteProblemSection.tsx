import { useInView } from "@/hooks/useInView";
import { XCircle, AlertTriangle } from "lucide-react";

const ReteProblemSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const problems = [
    "Non avevi le competenze specifiche per gestire la pratica?",
    "Ti mancava il coordinamento con un commercialista (o con un avvocato)?",
    "Non sapevi esattamente come impostare gli atti?",
    "Avevi paura di sbagliare e compromettere il caso?",
    "Non avevi precedenti solidi su cui basarti?",
  ];

  const requirements = [
    "Competenze tecniche precise (legali + contabili)",
    "Coordinamento costante tra avvocato e commercialista",
    "Precedenti giurisprudenziali solidi",
    "Atti già testati e funzionanti",
    "Un metodo collaudato su centinaia di casi",
  ];

  const consequences = [
    "Perdi opportunità di fatturato importanti",
    "Rischi di sbagliare pratiche delicate",
    "Lavori il triplo per risultati incerti",
    "I clienti vanno altrove (da chi è specializzato)",
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Opening Letter */}
          <div className={`mb-16 transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground mb-6">
              Caro Collega Avvocato, Caro Collega Dottore Commercialista,
            </p>
            <p className="text-xl text-foreground font-medium mb-8">
              Lascia che ti faccia una domanda scomoda:
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Quante volte hai dovuto dire di <span className="text-destructive">NO</span> a un potenziale cliente con problemi di debito complessi perché:
            </h2>
          </div>

          {/* Problem Checklist */}
          <div className={`space-y-4 mb-12 transition-all duration-500 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-destructive/5 border border-destructive/20 rounded-lg p-4 transition-all duration-300 hover:border-destructive/40"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>

          {/* Second Hook */}
          <div className={`bg-card border border-border rounded-xl p-8 mb-12 transition-all duration-500 delay-150 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-foreground mb-4">
              E quante volte hai accettato il caso... ma poi hai <strong>brancolato nel buio</strong>, perdendo tempo prezioso, studiando da zero, improvvisando procedure, e chiedendoti se stavi facendo la cosa giusta?
            </p>
          </div>

          {/* The Brutal Truth */}
          <div className={`mb-12 transition-all duration-500 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-foreground">La verità è brutale:</h3>
            </div>
            <p className="text-xl text-foreground mb-6">
              Il settore dell'esdebitazione e della crisi d'impresa è <strong className="text-destructive">ESTREMAMENTE</strong> specialistico.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Non basta conoscere "un po'" il Codice della Crisi. Non basta aver letto qualche articolo. Non basta improvvisarsi.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">Servono:</p>
            <ul className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* The Problem Statement */}
          <div className={`bg-navy rounded-2xl p-8 text-white transition-all duration-500 delay-250 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold mb-4">E il problema?</h3>
            <p className="text-lg text-white/80 mb-6">
              Se lavori da solo nel tuo studio, probabilmente <strong className="text-amber-400">NON hai tutto questo</strong>.
            </p>
            <p className="text-lg font-semibold mb-4">Risultato?</p>
            <div className="grid md:grid-cols-2 gap-4">
              {consequences.map((consequence, index) => (
                <div key={index} className="flex items-start gap-3">
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