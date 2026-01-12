import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-casino-darker text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Impressum
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                HAG1 Vermögensverwaltungs GmbH<br />
                Lennebergstr. 30<br />
                55124 Mainz
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Handelsregister</h2>
              <p>
                Amtsgericht Mainz<br />
                HRB 33159
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Vertreten durch</h2>
              <p>Geschäftsführer: Tim Hahn</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
              <p>
                E-Mail: info@bitloonx.de<br />
                Website: <a href="https://bitloonx.de" className="text-gold hover:text-gold-light transition-colors">https://bitloonx.de</a>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE302273796
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Tim Hahn<br />
                Lennebergstr. 30<br />
                55124 Mainz
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
