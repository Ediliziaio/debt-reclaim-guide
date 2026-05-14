import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";

interface TDHeroProps {
  onOpenContact: () => void;
}

const audienceCards = [
  {
    title: "Privati",
    desc: "Famiglie, lavoratori, pensionati con debiti che non riescono a gestire.",
    href: "/servizi#privati",
    bullets: ["L. 3/2012 e CCII", "Piano del consumatore", "Liquidazione controllata"],
  },
  {
    title: "Imprese",
    desc: "Imprenditori e PMI con debiti fiscali, bancari o verso fornitori.",
    href: "/servizi#imprese",
    bullets: ["Composizione negoziata", "Concordato preventivo", "Piano di risanamento"],
  },
  {
    title: "Contenzioso tributario",
    desc: "Cartelle, accertamenti, ingiunzioni di pagamento ricevute dall'AdER.",
    href: "/servizi#tributario",
    bullets: ["Ricorso tributario", "Sospensione riscossione", "Definizione agevolata"],
  },
];

const TDHero = ({ onOpenContact }: TDHeroProps) => {
  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
      <TDHeroBackdrop />

      <div className="container mx-auto px-4 py-14 lg:py-24 relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur text-white rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
              <ShieldCheck className="w-4 h-4 text-gold" />
              Esdebitazione · Crisi d'impresa · Tributario
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Una via legale per <br className="hidden md:block" />
              <span className="text-gold">gestire i tuoi debiti.</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Tutela Debito riunisce avvocati e commercialisti specializzati negli strumenti previsti dalla Legge 3/2012 e dal Codice della Crisi d'Impresa. Analizziamo la tua situazione e, dove la normativa lo consente, costruiamo insieme un percorso di gestione e riduzione del debito.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-6 w-full sm:w-auto"
              >
                Richiedi una diagnosi gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/metodo" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold text-base h-12 px-6 w-full"
                >
                  Scopri il metodo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> Trattamento riservato</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> Risposta entro 24h</span>
              <span className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-gold" /> Diagnosi senza impegno</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Studio legale specializzato in esdebitazione"
              className="rounded-2xl shadow-soft w-full aspect-[4/5] lg:aspect-[5/6] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-card border border-border max-w-[220px] hidden md:block">
              <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold mb-1">Aree di intervento</div>
              <div className="text-navy font-semibold text-sm leading-snug">
                Privati · Imprese · Contenzioso tributario
              </div>
            </div>
          </div>
        </div>

        {/* Audience cards */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {audienceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-white/5 hover:bg-white backdrop-blur rounded-xl p-6 border border-white/15 hover:border-gold text-white hover:text-navy"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-gold-dark" />
              </div>
              <p className="text-sm text-white/70 group-hover:text-foreground/70 mb-4 leading-relaxed">{card.desc}</p>
              <ul className="space-y-1">
                {card.bullets.map((b) => (
                  <li key={b} className="text-sm text-white/80 group-hover:text-foreground/80 flex items-start gap-2">
                    <span className="text-gold mt-1 text-xs">●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDHero;
