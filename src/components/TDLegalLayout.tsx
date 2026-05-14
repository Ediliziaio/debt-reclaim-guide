import { useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TDHeader from "./TDHeader";
import TDFooter from "./TDFooter";
import TDContactModal from "./TDContactModal";
import TDHeroBackdrop from "./TDHeroBackdrop";
import { FileText, Shield, Cookie, ArrowLeft } from "lucide-react";

interface TDLegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdate: string;
  icon: "file" | "shield" | "cookie";
  metaDescription: string;
  canonicalPath: string;
  children: ReactNode;
}

const iconMap = { file: FileText, shield: Shield, cookie: Cookie };

const TDLegalLayout = ({ title, subtitle, lastUpdate, icon, metaDescription, canonicalPath, children }: TDLegalLayoutProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <>
      <Helmet>
        <title>{title} | Tutela Debito</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://tuteladebito.it${canonicalPath}`} />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10 py-14 lg:py-20">
            <TDHeroBackdrop />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-gold mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> Torna alla home
                </Link>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Informativa</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                      {title}
                    </h1>
                  </div>
                </div>
                {subtitle && (
                  <p className="text-lg text-white/80 leading-relaxed mt-4 ml-16">
                    {subtitle}
                  </p>
                )}
                <p className="text-sm text-white/60 mt-4 ml-16">
                  Ultimo aggiornamento: <strong className="text-white/80">{lastUpdate}</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto legal-content">
                {children}
              </div>
            </div>
          </section>
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default TDLegalLayout;
