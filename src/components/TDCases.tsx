import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const cases = [
  {
    profile: "Imprenditore — settore edile",
    location: "Milano",
    before: 320000,
    after: 48000,
    duration: "14 mesi",
    procedure: "Concordato minore",
    story: "Cessazione attività con esposizione verso AdER e fornitori. Procedura di concordato minore omologata con piano di rientro parametrato al nuovo reddito.",
  },
  {
    profile: "Privato cittadino — pensionato",
    location: "Napoli",
    before: 78000,
    after: 0,
    duration: "11 mesi",
    procedure: "Esdebitazione dell'incapiente",
    story: "Posizione caratterizzata da assenza di patrimonio e reddito basso. Procedura ex art. 283 CCII conclusa con cancellazione integrale del debito residuo.",
  },
  {
    profile: "Famiglia — lavoratore dipendente",
    location: "Roma",
    before: 145000,
    after: 32000,
    duration: "9 mesi",
    procedure: "Piano del consumatore",
    story: "Stipendio sottoposto a pignoramento per cumulo di finanziamenti e cartelle. Piano omologato dal Tribunale e sospensione delle azioni esecutive in corso.",
  },
];

const formatEuro = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

const TDCases = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Casi seguiti</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Alcune procedure su cui abbiamo lavorato.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Per riservatezza riportiamo le informazioni in forma anonima. Ogni caso è diverso e gli esiti dipendono dai presupposti normativi e fattuali della singola posizione: non costituiscono garanzia di risultati analoghi.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 120}>
            <article
              className="bg-white rounded-2xl p-6 lg:p-7 border border-border shadow-card hover:shadow-primary hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-xs text-foreground/60 mb-1 font-semibold uppercase tracking-wider">{c.location}</div>
              <h3 className="font-bold text-navy mb-5">{c.profile}</h3>

              <div className="bg-navy rounded-xl p-5 mb-5 text-white">
                <div className="flex items-baseline justify-between mb-3 text-sm">
                  <span className="text-white/70">Esposizione iniziale</span>
                  <span className="font-semibold text-white/80">{formatEuro(c.before)}</span>
                </div>
                <div className="flex items-baseline justify-between pt-3 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-gold">Importo a piano</span>
                  <span className="text-xl font-bold text-gold">{formatEuro(c.after)}</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-5 text-sm">
                <div>
                  <span className="text-foreground/60">Procedura: </span>
                  <span className="font-semibold text-navy">{c.procedure}</span>
                </div>
                <div>
                  <span className="text-foreground/60">Durata: </span>
                  <span className="font-semibold text-navy">{c.duration}</span>
                </div>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mt-auto">{c.story}</p>
            </article>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/casi-risolti">
            <Button variant="outline" size="lg" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold">
              Vedi altri casi
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TDCases;
