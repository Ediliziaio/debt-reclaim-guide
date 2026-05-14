import { Search, FileText, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: Search, n: "01", title: "Diagnosi", duration: "48 ore", desc: "Analisi documentale gratuita della tua posizione." },
  { icon: FileText, n: "02", title: "Strategia", duration: "1-2 settimane", desc: "Scelta dello strumento normativo e preventivo scritto." },
  { icon: ShieldCheck, n: "03", title: "Deposito", duration: "Dalla firma", desc: "Atti depositati in Tribunale, effetti previsti dalla legge." },
  { icon: Sparkles, n: "04", title: "Esdebitazione", duration: "Variabile", desc: "Esecuzione del piano fino alla chiusura della procedura." },
];

const TDProcessFlow = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Il percorso in quattro fasi</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
              Dalla prima telefonata alla chiusura della procedura.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Ogni fase ha obiettivi, documenti e tempi definiti. Nessun passaggio è lasciato all'improvvisazione.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold via-gold-dark to-gold" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150} direction="up">
              <div className="relative group">
                {/* Step circle with icon */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-gold flex items-center justify-center shadow-card mb-5 group-hover:scale-110 group-hover:shadow-gold transition-all duration-300">
                    <s.icon className="w-10 h-10 text-navy" />
                    <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-navy text-gold text-sm font-bold flex items-center justify-center shadow-card">
                      {s.n}
                    </div>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-navy mb-3">
                    {s.duration}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed max-w-[260px]">{s.desc}</p>
                </div>

                {/* Arrow on mobile between steps */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 mb-0">
                    <ArrowRight className="w-6 h-6 text-gold-dark rotate-90" />
                  </div>
                )}
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDProcessFlow;
