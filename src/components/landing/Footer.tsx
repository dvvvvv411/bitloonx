
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-casino-darker border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                CryptoBot
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-md">
              Revolutionäres KI-gestütztes Krypto-Trading. Automatisierte Trades mit modernster Technologie für optimale Renditen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Vorteile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("cta")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Trading Bot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Erfahrungen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("partners")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Kontaktformular
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} CryptoBot. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-xs">
            Impressum | Datenschutz | AGB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
