import { Search, FileText, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Diagnosi gratuita",
    duration: "48 ore",
    desc: "Analisi documentale della tua posizione: cartelle, contratti di finanziamento, esposizione bancaria, patrimonio, reddito. Al termine ti diciamo se la tua situazione può rientrare in una delle procedure previste dalla legge, e con quali presupposti.",
    bullets: ["Colloquio iniziale riservato", "Analisi documentale", "Indicazione delle procedure applicabili"],
  },
  {
    n: "02",
    icon: FileText,
    title: "Definizione della strategia",
    duration: "1-2 settimane",
    desc: "Avvocato e commercialista costruiscono insieme la proposta: scelta dello strumento normativo, redazione del piano, calcolo della sostenibilità. Ti forniamo un preventivo scritto con tempi e costi prima di procedere.",
    bullets: ["Piano scritto", "Tempi e costi preventivati", "Documentazione condivisa"],
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Deposito della procedura",
    duration: "Dalla firma",
    desc: "Predisposizione e deposito degli atti presso il Tribunale competente. A seconda della procedura attivata, possono prodursi gli effetti di legge sulle azioni esecutive in corso (ad esempio sospensione dei pignoramenti, ex art. 70 CCII).",
    bullets: ["Deposito atti in Tribunale", "Effetti previsti dalla legge", "Gestione comunicazioni creditori"],
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Esecuzione e chiusura",
    duration: "Variabile",
    desc: "Esecuzione del piano omologato dal giudice secondo i tempi e le modalità stabilite. Al termine della procedura, e nei casi previsti dalla normativa, si arriva all'esdebitazione o alla chiusura della crisi.",
    bullets: ["Esecuzione del piano", "Monitoraggio scadenze", "Esdebitazione finale (ove prevista)"],
  },
];

const TDMethod = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Il nostro metodo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
            Un percorso in quattro fasi.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Lavoriamo seguendo una sequenza precisa, dalla diagnosi iniziale alla chiusura della procedura. Ogni fase ha obiettivi e documenti chiari, condivisi con te in ogni momento.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-border shadow-card"
            >
              <div className="grid lg:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="flex items-center gap-4">
                  <div className="text-4xl lg:text-5xl font-bold text-gold/40 tabular-nums">{s.n}</div>
                  <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy">{s.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-navy">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="grid sm:grid-cols-3 gap-x-4 gap-y-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-gold-dark mt-1 text-xs">●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDMethod;
