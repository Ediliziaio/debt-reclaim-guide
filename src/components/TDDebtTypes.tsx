import { Link } from "react-router-dom";
import { Landmark, Truck, Receipt, Home, CreditCard, FileWarning, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const types = [
  {
    icon: Receipt,
    title: "Cartelle esattoriali",
    desc: "Agenzia Entrate Riscossione, INPS, Comuni",
    examples: ["IRPEF, IVA, IMU", "Contributi previdenziali", "Sanzioni amministrative"],
    href: "/risorse/cartella-esattoriale-cosa-fare",
    color: "bg-gold/15 text-gold-dark",
  },
  {
    icon: Landmark,
    title: "Banche e finanziarie",
    desc: "Mutui, prestiti, fidi, finanziamenti",
    examples: ["Mutuo non pagato", "Fido revocato", "Cessione del quinto"],
    href: "/risorse/debiti-banche-finanziarie",
    color: "bg-trust/15 text-trust-dark",
  },
  {
    icon: Truck,
    title: "Fornitori commerciali",
    desc: "Fatture insolute, decreti ingiuntivi",
    examples: ["Fatture scadute", "Decreto ingiuntivo", "Sospensione forniture"],
    href: "/risorse/debiti-fornitori",
    color: "bg-success/15 text-success-dark",
  },
  {
    icon: CreditCard,
    title: "Carte revolving",
    desc: "Carte di credito e revolving",
    examples: ["TAEG elevati", "Esposizione crescente", "Spirale di indebitamento"],
    href: "/servizi#privati",
    color: "bg-gold/15 text-gold-dark",
  },
  {
    icon: Home,
    title: "Mutuo e casa",
    desc: "Esecuzioni immobiliari, ipoteche",
    examples: ["Asta immobiliare", "Sospensione rate", "Rinegoziazione"],
    href: "/risorse/debiti-banche-finanziarie",
    color: "bg-trust/15 text-trust-dark",
  },
  {
    icon: FileWarning,
    title: "Pignoramenti in corso",
    desc: "Stipendio, conto, beni mobili",
    examples: ["Pignoramento stipendio", "Pignoramento conto", "Opposizione"],
    href: "/risorse/pignoramento-stipendio-limiti",
    color: "bg-destructive/15 text-destructive",
  },
];

const TDDebtTypes = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Tipologie di debiti</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
              Affrontiamo tutte le forme di esposizione debitoria.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Dal debito fiscale alla cartella esattoriale, dal mutuo bancario al pignoramento dello stipendio: spesso si presentano insieme, e vanno trattati con uno sguardo unitario.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
            <Link
              to={t.href}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-gold hover:shadow-card hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${t.color} flex items-center justify-center mb-4`}>
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy mb-1">{t.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{t.desc}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {t.examples.map((ex) => (
                  <li key={ex} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-gold-dark mt-1 text-xs">●</span>
                    {ex}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-sm font-semibold text-navy group-hover:text-gold-dark mt-auto pt-3 border-t border-border">
                Approfondisci <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDDebtTypes;
