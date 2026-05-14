import { ShieldCheck, Lock, BadgeCheck, FileText } from "lucide-react";
import Reveal from "./Reveal";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Diagnosi gratuita",
    desc: "Il primo colloquio e l'analisi documentale iniziale non comportano costi. Se valutiamo che non ci siano i presupposti, te lo comunichiamo apertamente.",
  },
  {
    icon: Lock,
    title: "Riservatezza",
    desc: "Le informazioni che ci affidi vengono trattate ai sensi del GDPR e nel rispetto del segreto professionale. Nessuna comunicazione esterna senza tua autorizzazione scritta.",
  },
  {
    icon: BadgeCheck,
    title: "Trasparenza sui costi",
    desc: "Preventivo scritto prima dell'incarico, con onorari, spese vive e termini di pagamento. Nessuna voce a sorpresa durante la pratica.",
  },
  {
    icon: FileText,
    title: "Comunicazione continua",
    desc: "Aggiornamenti regolari sull'andamento del caso, accesso alla documentazione, possibilità di rivolgere domande in qualsiasi fase della procedura.",
  },
];

const TDGuarantee = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Come lavoriamo</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Quattro impegni concreti.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Non promettiamo risultati — la legge stabilisce presupposti precisi e ogni caso ha la sua complessità. Quello che possiamo assicurare è il modo in cui lavoriamo.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} direction="scale">
            <div
              className="group bg-white rounded-2xl p-6 lg:p-7 border border-border hover:border-gold hover:shadow-card transition-all duration-300 h-full"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/25 transition-transform duration-300">
                <g.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">{g.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{g.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDGuarantee;
