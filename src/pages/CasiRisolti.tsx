import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDStatsChart from "@/components/TDStatsChart";
import TDCoverage from "@/components/TDCoverage";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { TrendingDown, MapPin, Calendar, FileText } from "lucide-react";

type Category = "all" | "privati" | "imprese" | "tributario";

const allCases = [
  {
    id: 1,
    category: "imprese",
    profile: "Imprenditore edile",
    age: 52,
    location: "Milano",
    before: 320000,
    after: 48000,
    reduction: 85,
    duration: "14 mesi",
    procedure: "Concordato minore",
    creditors: "AdER, fornitori, banche",
    story: "Azienda chiusa nel 2020, debiti con AdER e fornitori per oltre 300k€. Patrimonio personale a rischio. Oggi paga 48.000€ in 5 anni, ha riavviato un'attività di consulenza tecnica.",
  },
  {
    id: 2,
    category: "privati",
    profile: "Pensionata",
    age: 67,
    location: "Napoli",
    before: 78000,
    after: 0,
    reduction: 100,
    duration: "11 mesi",
    procedure: "Esdebitazione del debitore incapiente",
    creditors: "Cessioni del quinto, prestiti familiari",
    story: "Pensione di 720€, nessun patrimonio. Debiti accumulati per aiutare i figli. Procedura ex art. 283 CCII: debiti integralmente cancellati. Vive serenamente con la sola pensione.",
  },
  {
    id: 3,
    category: "privati",
    profile: "Famiglia con mutuo",
    age: 41,
    location: "Roma",
    before: 145000,
    after: 32000,
    reduction: 78,
    duration: "9 mesi",
    procedure: "Piano del consumatore",
    creditors: "Finanziarie, AdER",
    story: "Stipendio pignorato per finanziarie e cartelle. Mutuo sulla prima casa a rischio. Piano del consumatore: pignoramento bloccato, 380€/mese per 7 anni, casa salva.",
  },
  {
    id: 4,
    category: "imprese",
    profile: "PMI manifatturiera",
    age: 0,
    location: "Brescia",
    before: 1200000,
    after: 480000,
    reduction: 60,
    duration: "22 mesi",
    procedure: "Composizione negoziata",
    creditors: "Banche, AdER, fornitori",
    story: "Azienda con 18 dipendenti, crisi post-Covid, debiti bancari e fiscali. Composizione negoziata: continuità aziendale, accordo con banche al 40%, AdER rateizzata 8 anni.",
  },
  {
    id: 5,
    category: "tributario",
    profile: "Professionista",
    age: 48,
    location: "Bari",
    before: 95000,
    after: 12000,
    reduction: 87,
    duration: "16 mesi",
    procedure: "Ricorso tributario + Rottamazione",
    creditors: "Agenzia Entrate Riscossione",
    story: "Accertamento da 95k€ per redditi non dichiarati anni 2014-2016. Ricorso vinto su un'annualità, rottamazione delle restanti: pagati 12k€ in 4 anni, niente sanzioni né interessi.",
  },
  {
    id: 6,
    category: "privati",
    profile: "Ex-imprenditore",
    age: 58,
    location: "Torino",
    before: 230000,
    after: 23000,
    reduction: 90,
    duration: "13 mesi",
    procedure: "Liquidazione controllata",
    creditors: "Banche, AdER, INPS",
    story: "Società di persone fallita nel 2019, debiti personali da fideiussioni. Liquidazione controllata: ceduto un terreno, debiti cancellati al 90%, oggi lavora come dipendente.",
  },
  {
    id: 7,
    category: "tributario",
    profile: "Artigiano",
    age: 55,
    location: "Verona",
    before: 56000,
    after: 0,
    reduction: 100,
    duration: "8 mesi",
    procedure: "Annullamento per prescrizione",
    creditors: "Comune (TARI), AdER",
    story: "Cartelle TARI per oltre 10 anni mai notificate correttamente. Ricorso accolto: tutte le cartelle annullate per prescrizione e vizi di notifica. Niente pagamenti.",
  },
  {
    id: 8,
    category: "privati",
    profile: "Lavoratore dipendente",
    age: 36,
    location: "Palermo",
    before: 42000,
    after: 8500,
    reduction: 80,
    duration: "10 mesi",
    procedure: "Piano del consumatore",
    creditors: "Finanziarie, carte di credito",
    story: "Sovraindebitamento per carte revolving e finanziarie. Stipendio pignorato al 20%. Piano del consumatore al 20% del debito: 240€/mese per 3 anni, pignoramento sbloccato.",
  },
  {
    id: 9,
    category: "imprese",
    profile: "Società commerciale",
    age: 0,
    location: "Firenze",
    before: 480000,
    after: 144000,
    reduction: 70,
    duration: "18 mesi",
    procedure: "Accordo di ristrutturazione",
    creditors: "Banche, fornitori",
    story: "Negozio centro storico, crisi liquidità post-2020. Accordo di ristrutturazione omologato con 75% creditori: pagato il 30%, attività ancora operativa con 6 dipendenti.",
  },
];

const formatEuro = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "Tutti i casi" },
  { id: "privati", label: "Privati" },
  { id: "imprese", label: "Imprese" },
  { id: "tributario", label: "Tributario" },
];

const CasiRisolti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [filter, setFilter] = useState<Category>("all");
  const openContact = () => setIsContactOpen(true);

  const visible = filter === "all" ? allCases : allCases.filter((c) => c.category === filter);

  return (
    <>
      <Helmet>
        <title>Casi seguiti: esdebitazione, crisi d'impresa, tributario | Tutela Debito</title>
        <meta name="description" content="Selezione di procedure seguite dallo studio in materia di esdebitazione, sovraindebitamento, crisi d'impresa, opposizione a pignoramenti e contenzioso tributario." />
        <meta name="keywords" content="casi esdebitazione, esempi sovraindebitamento, casi reali crisi d'impresa, procedure concluse" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tuteladebito.it/casi-risolti" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Casi seguiti | Tutela Debito" />
        <meta property="og:description" content="Selezione di procedure seguite dallo studio." />
        <meta property="og:url" content="https://tuteladebito.it/casi-risolti" />
        <meta property="og:image" content="https://tuteladebito.it/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tuteladebito.it/" },
            { "@type": "ListItem", "position": 2, "name": "Casi seguiti", "item": "https://tuteladebito.it/casi-risolti" },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-24">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl">
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Casi seguiti</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Alcune procedure su cui <span className="text-gold">abbiamo lavorato</span>.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Una selezione di pratiche seguite dallo studio. Per riservatezza le informazioni sono presentate in forma anonima.
                </p>
                <p className="text-sm text-white/60 leading-relaxed bg-white/5 border border-white/10 rounded-lg p-3">
                  <strong className="text-white/80">Nota.</strong> Gli esiti riportati riguardano i singoli casi e dipendono dai presupposti normativi e fattuali della singola posizione. Non costituiscono garanzia di risultati analoghi in situazioni diverse.
                </p>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 bg-white border-y border-border sticky top-16 lg:top-20 z-30 backdrop-blur bg-white/95">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      filter === f.id
                        ? "bg-navy text-white"
                        : "bg-muted text-navy hover:bg-gold/20"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Cases grid */}
          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {visible.map((c) => (
                  <article key={c.id} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-primary transition-all border border-border flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-navy">
                        {c.category === "privati" ? "Privato" : c.category === "imprese" ? "Impresa" : "Tributario"}
                      </span>
                      <span className="text-xs text-foreground/50">#{String(c.id).padStart(4, "0")}</span>
                    </div>

                    <h3 className="font-bold text-navy mb-1">{c.profile}{c.age > 0 ? `, ${c.age} anni` : ""}</h3>
                    <div className="flex items-center gap-3 text-xs text-foreground/60 mb-5">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {c.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {c.duration}</span>
                    </div>

                    <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-4 mb-4 text-white">
                      <div className="flex items-baseline justify-between mb-2 text-sm">
                        <span className="text-white/60">Debito iniziale</span>
                        <span className="font-bold line-through text-white/50">{formatEuro(c.before)}</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs uppercase tracking-wider text-gold/80">Pagato finale</span>
                        <span className="text-2xl font-black text-gold">{formatEuro(c.after)}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/10">
                        <TrendingDown className="w-4 h-4 text-success" />
                        <span className="text-sm font-bold text-success">-{c.reduction}%</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-sm mb-4">
                      <div className="flex items-start gap-2">
                        <FileText className="w-3.5 h-3.5 text-gold-dark mt-1 shrink-0" />
                        <span><span className="text-foreground/60">Procedura: </span><span className="font-semibold text-navy">{c.procedure}</span></span>
                      </div>
                      <div className="text-foreground/60 ml-5">
                        Creditori: <span className="text-foreground/80">{c.creditors}</span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed mt-auto">{c.story}</p>
                  </article>
                ))}
              </div>

              {visible.length === 0 && (
                <p className="text-center text-foreground/60 py-12">Nessun caso in questa categoria.</p>
              )}
            </div>
          </section>

          <TDStatsChart />
          <TDCoverage />
          <TDFinalCTA onOpenContact={openContact} />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default CasiRisolti;
