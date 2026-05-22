import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDProcessFlow from "@/components/TDProcessFlow";
import TDDebtTypes from "@/components/TDDebtTypes";
import TDHeroBackdrop from "@/components/TDHeroBackdrop";
import { Users2, Building2, Scale, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "privati",
    icon: Users2,
    title: "Esdebitazione privati",
    subtitle: "Per famiglie, lavoratori, pensionati ed ex-imprenditori",
    intro: "Quando i debiti diventano insostenibili, la legge italiana mette a disposizione strumenti concreti per cancellarli — totalmente o parzialmente. Il nostro lavoro è scegliere quello giusto per il tuo caso.",
    tools: [
      {
        name: "Liquidazione controllata",
        desc: "Riferimento: art. 268 CCII. Permette di cedere il patrimonio ai creditori in cambio della cancellazione del debito residuo. Adatta a chi ha qualche bene aggredibile.",
      },
      {
        name: "Piano del consumatore (ristrutturazione)",
        desc: "Riferimento: art. 67-73 CCII. Per chi ha reddito stabile: si propone un piano di pagamento sostenibile (anche al 20-30% del debito) approvato dal Tribunale.",
      },
      {
        name: "Concordato minore",
        desc: "Riferimento: art. 74-83 CCII. Per ex-imprenditori e professionisti: permette di ristrutturare il debito mantenendo l'attività.",
      },
      {
        name: "Esdebitazione del debitore incapiente",
        desc: "Riferimento: art. 283 CCII. Per chi non ha nulla: i debiti vengono cancellati senza alcun pagamento. Una volta nella vita.",
      },
    ],
    audience: "Sei nel posto giusto se: hai debiti per più di 30.000€, sei pignorato o lo stai per essere, vivi nell'angoscia delle telefonate e delle lettere dei creditori.",
  },
  {
    id: "imprese",
    icon: Building2,
    title: "Crisi d'impresa",
    subtitle: "Per imprenditori, PMI e società con debiti operativi",
    intro: "Il Codice della Crisi (CCII) ha riscritto le regole: oggi un'impresa in difficoltà può ristrutturare il debito MANTENENDO la continuità operativa. Niente fallimento — soluzioni di rilancio.",
    tools: [
      {
        name: "Composizione negoziata",
        desc: "Strumento riservato e stragiudiziale (artt. 12-25 CCII). Si lavora con i creditori principali per ristrutturare il debito senza coinvolgere il Tribunale. Adatto a imprese ancora operative.",
      },
      {
        name: "Concordato preventivo",
        desc: "Procedura giudiziale (artt. 84-120 CCII). Permette di proporre ai creditori un piano di pagamento parziale, mantenendo continuità o liquidando in modo ordinato.",
      },
      {
        name: "Accordi di ristrutturazione",
        desc: "Procedura ibrida (artt. 57-64 CCII). Si negozia con almeno il 60% dei creditori (30% se 'ad efficacia estesa'), poi si chiede omologa al Tribunale.",
      },
      {
        name: "Piano attestato di risanamento",
        desc: "Strumento privato (art. 56 CCII). Piano industriale e finanziario asseverato da un professionista indipendente. Mantiene riservatezza totale.",
      },
    ],
    audience: "Sei nel posto giusto se: hai un'azienda in difficoltà finanziaria, debiti con Erario/INPS, fornitori che non vengono pagati, banche che hanno revocato gli affidamenti, ma c'è ancora valore da proteggere.",
  },
  {
    id: "tributario",
    icon: Scale,
    title: "Contenzioso tributario",
    subtitle: "Per chi ha ricevuto cartelle, accertamenti, ingiunzioni",
    intro: "Non tutte le cartelle che ricevi sono dovute. Errori formali, vizi di notifica, prescrizioni decorse: spesso si può ottenere l'annullamento integrale o sospensione immediata.",
    tools: [
      {
        name: "Ricorso tributario",
        desc: "Impugnazione di cartelle, accertamenti o atti dell'Agenzia Entrate davanti alla Corte di Giustizia Tributaria. Termine perentorio: 60 giorni dalla notifica.",
      },
      {
        name: "Sospensione cartelle",
        desc: "Istanza di sospensione della riscossione (art. 47 D.lgs. 546/92). Blocca pignoramenti e ipoteche in attesa della sentenza.",
      },
      {
        name: "Definizione agevolata / Rottamazione",
        desc: "Adesione alle finestre di rottamazione: pagamento del solo capitale, niente sanzioni né interessi. Ti aiutiamo a valutare convenienza e rate.",
      },
      {
        name: "Annullamento per prescrizione",
        desc: "Cartelle 'vecchie' (5 anni per tributi locali, 10 per imposte erariali in molti casi): si può chiedere l'annullamento per intervenuta prescrizione.",
      },
    ],
    audience: "Sei nel posto giusto se: hai ricevuto cartelle esattoriali, ingiunzioni di pagamento, fermi amministrativi, ipoteche dell'AdER. Non rassegnarti: spesso c'è margine per ridurre o annullare.",
  },
  {
    id: "pignoramenti",
    icon: Scale,
    title: "Blocco pignoramenti",
    subtitle: "Quando hai poco tempo: pignoramento in arrivo o già attivo",
    intro: "Se sei già stato pignorato o stai per esserlo, agire velocemente fa la differenza. Esistono strumenti che, depositati in Tribunale, sospendono immediatamente l'esecuzione.",
    tools: [
      {
        name: "Sospensione esecutiva nel sovraindebitamento",
        desc: "Il deposito di un'istanza di sovraindebitamento sospende i pignoramenti in essere e quelli futuri. Effetto: immediato.",
      },
      {
        name: "Opposizione all'esecuzione",
        desc: "Se il pignoramento è viziato (notifica errata, prescrizione, importo sbagliato) si può ottenere l'annullamento.",
      },
      {
        name: "Conversione del pignoramento",
        desc: "Pagamento di una somma minore concordata con il giudice per chiudere l'esecuzione e liberare lo stipendio o il bene pignorato.",
      },
    ],
    audience: "Sei nel posto giusto se: hai ricevuto un atto di precetto, un pignoramento di stipendio/conto/casa, un'ipoteca giudiziale. Ogni giorno conta — contattaci subito.",
  },
];

const Servizi = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Servizi: esdebitazione, crisi d'impresa, contenzioso tributario | Tutela Debito</title>
        <meta name="description" content="Aree di competenza dello studio: esdebitazione del privato (L. 3/2012 e CCII), composizione negoziata della crisi d'impresa, contenzioso tributario, opposizione esecuzioni e pignoramenti." />
        <meta name="keywords" content="esdebitazione, crisi d'impresa, contenzioso tributario, opposizione pignoramento, composizione negoziata, piano del consumatore, liquidazione controllata" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://tuteladebito.it/servizi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Servizi | Tutela Debito" />
        <meta property="og:description" content="Esdebitazione, crisi d'impresa, contenzioso tributario, opposizione esecuzioni." />
        <meta property="og:url" content="https://tuteladebito.it/servizi" />
        <meta property="og:image" content="https://tuteladebito.it/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tuteladebito.it/" },
            { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://tuteladebito.it/servizi" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": { "@type": "LegalService", "name": "Tutela Debito", "url": "https://tuteladebito.it" },
          "areaServed": { "@type": "Country", "name": "Italia" },
          "serviceType": [
            "Esdebitazione del privato",
            "Composizione negoziata della crisi d'impresa",
            "Contenzioso tributario",
            "Opposizione a esecuzioni e pignoramenti",
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
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Aree di competenza</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Gli strumenti che <span className="text-gold">possiamo attivare</span>.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Quattro ambiti d'intervento: esdebitazione per privati, crisi d'impresa, contenzioso tributario, opposizione alle esecuzioni. Ogni strumento ha presupposti normativi precisi: la diagnosi serve proprio a capire quale sia applicabile al tuo caso.
                </p>
              </div>

              {/* Quick nav */}
              <div className="mt-8 flex flex-wrap gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-semibold text-white hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Service sections */}
          {sections.map((s, idx) => (
            <section
              key={s.id}
              id={s.id}
              className={`py-16 lg:py-24 scroll-mt-24 ${idx % 2 === 0 ? "bg-white" : "bg-muted/40"}`}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-navy text-gold flex items-center justify-center shrink-0">
                      <s.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-black text-navy mb-2">{s.title}</h2>
                      <p className="text-gold-dark font-semibold">{s.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-foreground/75 leading-relaxed mb-10">{s.intro}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {s.tools.map((tool) => (
                      <div key={tool.name} className="bg-white rounded-xl p-6 border border-border shadow-card">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-navy mb-2">{tool.name}</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">{tool.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-5 mb-8">
                    <p className="text-navy font-medium leading-relaxed">{s.audience}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={openContact}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-navy font-bold"
                    >
                      Richiedi diagnosi per il tuo caso
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <TDProcessFlow />
          <TDDebtTypes />
          <TDFinalCTA onOpenContact={openContact} />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Servizi;
