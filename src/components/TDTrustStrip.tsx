import { Scale, BookOpen, Gavel, Building, Award, FileText } from "lucide-react";

const items = [
  { icon: Scale, label: "Ordine Avvocati" },
  { icon: BookOpen, label: "ODCEC" },
  { icon: Gavel, label: "Codice della Crisi" },
  { icon: Building, label: "Tribunale Civile" },
  { icon: Award, label: "Formazione continua" },
  { icon: FileText, label: "Studi legali partner" },
];

const TDTrustStrip = () => {
  return (
    <section className="bg-muted/40 border-b border-border py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-foreground/50 font-semibold mb-6">
          Riferimenti professionali e normativi
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-white rounded-lg border border-border text-foreground/60"
            >
              <it.icon className="w-4 h-4 text-navy" />
              <span className="text-xs font-medium text-foreground/70">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDTrustStrip;
