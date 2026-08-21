import { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Scale,
  Building2,
  Landmark,
  CheckCircle2,
  Navigation,
  Sparkles,
} from "lucide-react";
import {
  CITIES,
  CITY_SLUGS,
  EMAIL,
  PHONE_MAIN,
  PHONE_MOBILE,
  SAME_AS,
  SOCIAL_LINKEDIN,
  type City,
} from "@/data/cities";

const SITE = "https://www.tuteladebito.it";

const SERVICES = [
  { title: "Esdebitazione e sovraindebitamento", desc: "Cancellazione dei debiti per privati e famiglie ex L. 3/2012 e Codice della Crisi.", to: "/servizi" },
  { title: "Cartelle esattoriali e pignoramenti", desc: "Opposizione, rateizzazione, definizioni agevolate e blocco delle esecuzioni.", to: "/risorse/cartella-esattoriale-cosa-fare" },
  { title: "Crisi d'impresa", desc: "Composizione negoziata, concordato minore e liquidazione controllata.", to: "/risorse/composizione-negoziata" },
  { title: "Contenzioso tributario", desc: "Ricorsi contro accertamenti e cartelle davanti alla Corte di Giustizia Tributaria.", to: "/risorse/contenzioso-tributario-riforma" },
];

const buildSchemas = (city: City) => {
  const url = `${SITE}/studio-legale-${city.slug}`;
  const telephone = [PHONE_MAIN, PHONE_MOBILE];

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${url}#localbusiness`,
    "name": `Tutela Debito — Studio legale a ${city.name}`,
    "alternateName": "Studio Legale Avv. Armando Rossi",
    "url": url,
    "image": `${SITE}/og-image.png`,
    "logo": `${SITE}/logo-tutela-debito.png`,
    "description": `Studio legale a ${city.name} specializzato in esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario.`,
    "priceRange": "€€",
    "telephone": telephone,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": city.streetAddress,
      "addressLocality": city.name,
      "postalCode": city.postalCode,
      "addressRegion": city.province,
      "addressCountry": "IT",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng,
    },
    "areaServed": city.areaServed.map((name) => ({ "@type": "City", name })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    "parentOrganization": { "@id": `${SITE}/#organization` },
    "sameAs": SAME_AS,
    "founder": {
      "@type": "Person",
      "name": "Avv. Armando Rossi",
      "jobTitle": "Avvocato",
      "url": `${SITE}/chi-siamo`,
      "sameAs": [SOCIAL_LINKEDIN],
    },
    "knowsAbout": [
      "Esdebitazione",
      "Sovraindebitamento",
      "Crisi d'impresa",
      "Composizione negoziata",
      "Piano del consumatore",
      "Contenzioso tributario",
      "Cartella esattoriale",
      "Pignoramento",
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": `Studio legale ${city.name}`, "item": url },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return [legalService, breadcrumb, faq];
};

const slugFromPath = (pathname: string): City["slug"] | null => {
  const match = pathname.replace(/\/$/, "").match(/studio-legale-([a-z]+)$/);
  const slug = match?.[1] as City["slug"] | undefined;
  return slug && CITY_SLUGS.includes(slug) ? slug : null;
};

const StudioLegaleCitta = () => {
  const { pathname } = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const slug = slugFromPath(pathname);
  if (!slug) return <Navigate to="/contatti" replace />;
  const city = CITIES[slug];

  const url = `${SITE}/studio-legale-${city.slug}`;
  const title = `Studio legale debiti a ${city.name} | Tutela Debito`;
  const description = `Studio legale a ${city.name} per esdebitazione, cartelle esattoriali, pignoramenti e crisi d'impresa. ${city.streetAddress}. Prima diagnosi riservata.`;
  const mapsQuery = encodeURIComponent(`Tutela Debito ${city.streetAddress} ${city.postalCode} ${city.name}`);

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={`studio legale ${city.name}, avvocato debiti ${city.name}, esdebitazione ${city.name}, sovraindebitamento ${city.name}, cartella esattoriale ${city.name}, pignoramento ${city.name}, crisi d'impresa ${city.name}, avvocato ${city.name}`}
        canonical={url}
        jsonLd={buildSchemas(city)}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-20">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="container mx-auto px-4 relative">
              <nav aria-label="breadcrumb" className="text-sm text-white/60 mb-5">
                <Link to="/" className="hover:text-gold">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">Studio legale {city.name}</span>
              </nav>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/15 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-gold/30">
                <MapPin className="w-3.5 h-3.5" /> {city.name} · {city.region}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 max-w-3xl">
                Studio legale a {city.name} per debiti, esdebitazione e crisi d'impresa
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8">{city.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={openContact} className="bg-gold hover:bg-gold-dark text-navy font-bold">
                  Richiedi la diagnosi gratuita <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <a href={`tel:${PHONE_MAIN.replace(/[^+\d]/g, "")}`}>
                  <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold w-full sm:w-auto">
                    <Phone className="mr-2 w-4 h-4" /> {PHONE_MAIN.replace("+39-", "")}
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12 lg:py-16">
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 max-w-6xl mx-auto">
              {/* Main */}
              <div className="min-w-0 space-y-12" data-speakable="intro">
                {/* Servizi */}
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-gold-dark" /> Cosa facciamo a {city.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {SERVICES.map((s) => (
                      <Link key={s.title} to={s.to} className="group bg-white rounded-2xl border border-border p-5 hover:border-gold hover:shadow-card transition">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-navy leading-snug group-hover:text-gold-dark">{s.title}</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed mt-1">{s.desc}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Tribunale locale */}
                <section className="bg-muted/40 border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Landmark className="w-6 h-6 text-gold-dark" /> {city.tribunale}: la competenza locale
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">{city.local}</p>
                </section>

                {/* Aree servite */}
                <section>
                  <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-gold-dark" /> Aree servite
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {city.areaServed.map((a) => (
                      <span key={a} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground/75">{a}</span>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section>
                  <h2 className="text-2xl font-bold text-navy mb-5">Domande frequenti — {city.name}</h2>
                  {/* Q&A sempre nel DOM: un accordion terrebbe le risposte
                      fuori dall'HTML statico e quindi fuori dalla portata dei
                      crawler AI, che è esattamente il testo da far citare. */}
                  <div className="space-y-3">
                    {city.faq.map((f, i) => (
                      <div key={i} className="bg-white rounded-xl border border-border px-5 py-4">
                        <h3 className="font-semibold text-navy mb-2 leading-snug">{f.q}</h3>
                        <p className="text-foreground/75 leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar: sede */}
              <aside className="lg:sticky lg:top-24 self-start space-y-5">
                <div className="bg-white rounded-2xl border border-border p-6 shadow-card">
                  <h2 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold-dark" /> Sede di {city.name}
                  </h2>
                  <address className="not-italic space-y-3 text-sm text-foreground/80">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                      <span>{city.streetAddress}<br />{city.postalCode} {city.name} ({city.province})</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gold-dark shrink-0" />
                      <a href={`tel:${PHONE_MAIN.replace(/[^+\d]/g, "")}`} className="hover:text-gold-dark">{PHONE_MAIN.replace("+39-", "")}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-gold-dark shrink-0" />
                      <a href={`mailto:${EMAIL}`} className="hover:text-gold-dark break-all">{EMAIL}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                      <span>Lun–Ven, 9:00–18:00</span>
                    </div>
                  </address>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark">
                    <Navigation className="w-4 h-4" /> Indicazioni stradali
                  </a>
                </div>

                <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-6 shadow-card">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/15 text-gold rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-gold/30">
                    <Sparkles className="w-3 h-3" /> Diagnosi gratuita
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">Un colloquio riservato di 30 minuti per capire quali strumenti si applicano al tuo caso a {city.name}.</p>
                  <Button onClick={openContact} className="w-full bg-gold hover:bg-gold-dark text-navy font-bold">Prenota ora</Button>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default StudioLegaleCitta;
