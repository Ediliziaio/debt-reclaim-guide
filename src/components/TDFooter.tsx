import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import logoTD from "@/assets/logo-tutela-debito.png";

const sedi = [
  {
    city: "Napoli",
    address: "Via M. Cervantes 55/5",
    cap: "80133 Napoli",
  },
  {
    city: "Milano",
    address: "Via R. Boscovich 14",
    cap: "20124 Milano",
  },
  {
    city: "Torino",
    address: "Corso Vittorio Emanuele II n. 168",
    cap: "10138 Torino",
  },
];

const TDFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-14 lg:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="bg-white inline-block rounded-lg p-2">
              <img src={logoTD} alt="Tutela Debito" className="h-12 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Studio legale e fiscale dedicato all'assistenza in materia di esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigazione</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-gold">Home</Link></li>
              <li><Link to="/chi-siamo" className="text-white/70 hover:text-gold">Chi siamo</Link></li>
              <li><Link to="/metodo" className="text-white/70 hover:text-gold">Il nostro metodo</Link></li>
              <li><Link to="/servizi" className="text-white/70 hover:text-gold">Servizi</Link></li>
              <li><Link to="/casi-risolti" className="text-white/70 hover:text-gold">Casi seguiti</Link></li>
              <li><Link to="/risorse" className="text-white/70 hover:text-gold">Risorse e blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Servizi</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/servizi#privati" className="text-white/70 hover:text-gold">Esdebitazione privati</Link></li>
              <li><Link to="/servizi#imprese" className="text-white/70 hover:text-gold">Crisi d'impresa</Link></li>
              <li><Link to="/servizi#tributario" className="text-white/70 hover:text-gold">Contenzioso tributario</Link></li>
              <li><Link to="/servizi#pignoramenti" className="text-white/70 hover:text-gold">Opposizione esecuzioni</Link></li>
              <li><Link to="/quiz" className="text-gold hover:text-gold-light font-medium">Test online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Informazioni di contatto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-white/70 leading-snug">
                  <a href="tel:+390818671862" className="hover:text-gold block">081 18671862</a>
                  <a href="tel:+393386115394" className="hover:text-gold block">338 6115394</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@studioavvocatorossi.it" className="text-white/70 hover:text-gold break-all">
                  info@studioavvocatorossi.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-white/70 leading-snug break-all">
                  <span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">PEC</span>
                  <a href="mailto:armandorossi@avvocatinapoli.legalmail.it" className="hover:text-gold">
                    armandorossi@avvocatinapoli.legalmail.it
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sedi row */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold" />
            Le nostre sedi
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sedi.map((s) => (
              <div
                key={s.city}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    Studio di {s.city}
                  </span>
                </div>
                <p className="text-sm text-white/85 leading-snug">{s.address}</p>
                <p className="text-sm text-white/60 leading-snug">{s.cap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {year} Tutela Debito. Tutti i diritti riservati. P.IVA — in fase di registrazione.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/cookie" className="hover:text-gold">Cookie Policy</Link>
            <Link to="/note-legali" className="hover:text-gold">Note legali</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TDFooter;
