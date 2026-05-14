import { Scale, Lock, FileCheck, Users2, BadgeCheck, Headphones } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: Scale,
    title: "Strumenti normativi puntuali",
    desc: "Lavoriamo solo con istituti previsti dalla legge: L. 3/2012, CCII, leggi tributarie. Nessuna scorciatoia.",
  },
  {
    icon: Users2,
    title: "Squadra integrata",
    desc: "Avvocati e commercialisti analizzano la pratica insieme, fin dal primo colloquio.",
  },
  {
    icon: FileCheck,
    title: "Preventivo scritto",
    desc: "Costi comunicati per iscritto prima dell'incarico. Nessuna voce a sorpresa in corso d'opera.",
  },
  {
    icon: Lock,
    title: "Riservatezza professionale",
    desc: "Trattamento dei dati ai sensi del GDPR e nel rispetto del segreto professionale.",
  },
  {
    icon: BadgeCheck,
    title: "Diagnosi gratuita",
    desc: "Il primo colloquio e l'analisi documentale non comportano costi. Se non ci sono i presupposti, te lo diciamo.",
  },
  {
    icon: Headphones,
    title: "Aggiornamenti continui",
    desc: "Comunicazione regolare sull'andamento della pratica, accesso ai documenti, referente unico.",
  },
];

const TDWhyUs = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Perché sceglierci</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
                Sei caratteristiche del nostro lavoro.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Sappiamo che chi affronta una situazione debitoria ha già incontrato molte promesse generiche. Ecco i nostri impegni concreti.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
              <div
                className="group bg-muted/40 rounded-2xl p-6 border border-border hover:border-gold hover:bg-white hover:shadow-card transition-all duration-300 h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/25 transition-transform duration-300">
                  <r.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{r.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDWhyUs;
