
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-casino-darker relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="mb-4">
              <img src="https://i.imgur.com/Q191f5z.png" alt="bitloon Logo" className="h-14 object-contain" />
            </div>
            <p className="text-gray-400 mb-4">
              Die Zukunft des Krypto-Tradings mit KI-Unterstützung. Maximiere deine Renditen durch unseren fortschrittlichen Algorithmus.
            </p>
          </motion.div>
          
          {/* Links columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Plattform</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("cta")} className="text-gray-400 hover:text-gold transition-colors">Trading Bot</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-gold transition-colors">Status</button></li>
              <li><button onClick={() => scrollToSection("partners")} className="text-gray-400 hover:text-gold transition-colors">Partner</button></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("testimonials")} className="text-gray-400 hover:text-gold transition-colors">Erfahrungen</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-gold transition-colors">FAQ</button></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-gold transition-colors">Kontakt</button></li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} bitloon. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex space-x-6">
              <button onClick={() => {}} className="text-gray-400 hover:text-gold text-sm transition-colors">Impressum</button>
              <button onClick={() => {}} className="text-gray-400 hover:text-gold text-sm transition-colors">Datenschutz</button>
              <button onClick={() => {}} className="text-gray-400 hover:text-gold text-sm transition-colors">AGB</button>
              <button onClick={() => {}} className="text-gray-400 hover:text-gold text-sm transition-colors">Haftungsausschluss</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
