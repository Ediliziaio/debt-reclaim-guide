import { Check, Sparkles } from "lucide-react";

const ReteSolutionSection = () => {
  const benefits = [
    "Formazione tecnica completa (legale + contabile)",
    "Coordinamento costante con professionisti esperti",
    "Modelli di atti già testati su centinaia di casi",
    "Procedure standardizzate che funzionano davvero",
    "Precedenti giurisprudenziali sempre aggiornati",
    "Affiancamento operativo su ogni pratica",
    "Opportunità di sviluppo attraverso la rete nazionale",
  ];

  const results = [
    "Acquisisci competenze altamente specialistiche",
    "Offri ai tuoi clienti un servizio di eccellenza",
    "Riduci drasticamente il rischio professionale",
    "Lavori con metodo scientifico (zero improvvisazione)",
    "Hai sempre un team di esperti al tuo fianco",
    "Ti posizioni come il riferimento nella tua zona",
  ];

  return (
    <section id="vantaggi" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">La Soluzione</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              La Soluzione Esiste <span className="text-gold">(Ed È Più Semplice Di Quanto Pensi)</span>
            </h2>
          </div>

          {/* Network Introduction */}
          <div className="bg-gradient-to-br from-primary/10 via-gold/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl text-foreground mb-6">
              <strong className="text-gold">RF Ristrutturazione Debiti</strong> è la <strong>PRIMA rete nazionale</strong> in Italia che unisce Avvocati e Commercialisti specializzati esclusivamente in:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-lg text-foreground">
                <Check className="w-6 h-6 text-gold" />
                <strong>Esdebitazione</strong> (consumatori, professionisti, piccole imprese)
              </li>
              <li className="flex items-center gap-3 text-lg text-foreground">
                <Check className="w-6 h-6 text-gold" />
                <strong>Codice della Crisi e dell'Insolvenza</strong> (procedure concorsuali)
              </li>
            </ul>
            <p className="text-lg text-foreground">
              Stiamo selezionando studi professionali in tutta Italia che vogliano crescere professionalmente attraverso un <strong>metodo strutturato</strong>, coordinamento tecnico centralizzato e accesso a competenze avanzate.
            </p>
          </div>

          {/* What You Get */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              In parole semplici: Ti diamo <span className="text-gold">gli strumenti per diventare un vero specialista</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-navy rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Risultato per te?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/90">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteSolutionSection;
