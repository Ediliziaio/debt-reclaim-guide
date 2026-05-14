import { Link } from "react-router-dom";
import { Users2, Building2, Scale, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Users2,
    title: "Esdebitazione privati",
    target: "Famiglie, dipendenti, pensionati, ex-imprenditori",
    desc: "Procedure di sovraindebitamento previste dalla L. 3/2012 e dal Codice della Crisi (Titolo IV). Valutazione della procedura più adatta in base a reddito, patrimonio e composizione del debito.",
    bullets: [
      "Liquidazione controllata (art. 268 CCII)",
      "Piano del consumatore (artt. 67-73 CCII)",
      "Concordato minore (artt. 74-83 CCII)",
      "Esdebitazione dell'incapiente (art. 283 CCII)",
    ],
    href: "/servizi#privati",
  },
  {
    icon: Building2,
    title: "Crisi d'impresa",
    target: "Imprenditori, PMI, società di persone e capitali",
    desc: "Strumenti del Codice della Crisi e dell'Insolvenza per ristrutturare il debito d'impresa, salvaguardando, ove possibile, la continuità aziendale e il patrimonio personale del titolare.",
    bullets: [
      "Composizione negoziata (artt. 12-25 CCII)",
      "Concordato preventivo (artt. 84-120 CCII)",
      "Accordi di ristrutturazione (artt. 57-64 CCII)",
      "Piano attestato di risanamento (art. 56 CCII)",
    ],
    href: "/servizi#imprese",
  },
  {
    icon: Scale,
    title: "Contenzioso tributario",
    target: "Cartelle, accertamenti, ingiunzioni di pagamento",
    desc: "Assistenza nelle controversie con l'Agenzia Entrate Riscossione e gli enti impositori: verifica della legittimità delle pretese, valutazione dei vizi formali e degli strumenti deflattivi.",
    bullets: [
      "Ricorso tributario (D.lgs. 546/92)",
      "Sospensione della riscossione",
      "Definizione agevolata / rottamazione",
      "Verifica prescrizione e vizi di notifica",
    ],
    href: "/servizi#tributario",
  },
];

const TDServicesCards = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Aree di competenza</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Tre ambiti, un approccio integrato.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Le tre aree sono spesso intrecciate: un debito tributario può accompagnare una crisi d'impresa, una situazione personale critica può richiedere strumenti di sovraindebitamento. Per questo lavoriamo come team unico.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
            <Link
              to={s.href}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="bg-navy p-7 text-white">
                <s.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold mb-1.5">{s.title}</h3>
                <p className="text-sm text-white/70">{s.target}</p>
              </div>

              <div className="p-7 flex-1 flex flex-col bg-white">
                <p className="text-foreground/70 mb-5 leading-relaxed text-sm">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-gold-dark mt-1 text-xs">●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-navy font-semibold text-sm group-hover:text-gold-dark">
                  Approfondisci
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDServicesCards;
