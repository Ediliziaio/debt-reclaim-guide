import { AlertTriangle, CheckCircle2 } from "lucide-react";
import authorityImg from "@/assets/authority-legal.jpg";

const problems = [
  "Cartelle esattoriali ricevute",
  "Solleciti continui da banche o finanziarie",
  "Pignoramento su stipendio, conto o casa",
  "Difficoltà nella gestione delle rate",
  "Impossibilità di proseguire l'attività d'impresa",
];

const solutions = [
  {
    title: "Valutazione della procedura applicabile",
    desc: "Analizziamo la tua posizione e individuiamo, dove possibile, lo strumento normativo più adatto: L. 3/2012, CCII, definizione agevolata, contenzioso.",
  },
  {
    title: "Effetti delle procedure di sovraindebitamento",
    desc: "Il deposito della procedura può determinare la sospensione delle azioni esecutive in corso, secondo le condizioni previste dalla legge.",
  },
  {
    title: "Ristrutturazione del debito in piano sostenibile",
    desc: "Costruzione di un piano di pagamento parametrato alla tua reale capacità reddituale e patrimoniale, da sottoporre al Tribunale.",
  },
  {
    title: "Tutela del patrimonio nei limiti di legge",
    desc: "Valutazione delle protezioni previste dall'ordinamento per la prima casa, i beni strumentali e gli strumenti di lavoro.",
  },
];

const TDProblemSolution = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Situazione e strumenti</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
            Affrontare una situazione debitoria richiede un'analisi puntuale.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Ogni caso ha specificità proprie: tipo di creditori, importo, patrimonio, reddito. Per questo prima di proporre soluzioni serve una diagnosi precisa, basata sui documenti.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 mb-10">
          {/* Problems */}
          <div className="bg-muted/40 border border-border rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-navy">Situazioni che incontriamo</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-bold mt-0.5">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src={authorityImg}
              alt="Analisi documentale"
              className="rounded-2xl shadow-card w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-muted/40 border border-border rounded-2xl p-7 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-lg font-bold text-navy">Cosa possiamo valutare insieme</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-navy mb-1">{s.title}</div>
                  <div className="text-sm text-foreground/70 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDProblemSolution;
