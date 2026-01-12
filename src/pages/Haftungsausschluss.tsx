import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Haftungsausschluss = () => {
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
            Haftungsausschluss
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Haftung für Inhalte</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Risikohinweis für Kryptowährungen</h2>
              <p className="mb-4">
                <strong className="text-gold">Wichtiger Hinweis:</strong> Der Handel mit Kryptowährungen ist hochspekulativ und birgt erhebliche Risiken.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Kryptowährungen unterliegen starken Kursschwankungen (Volatilität)</li>
                <li>Es besteht das Risiko eines Totalverlustes des eingesetzten Kapitals</li>
                <li>Vergangene Wertentwicklungen sind keine Garantie für zukünftige Ergebnisse</li>
                <li>KI-gestützte Trading-Systeme können keine Gewinne garantieren</li>
                <li>Investieren Sie nur Kapital, dessen Verlust Sie sich leisten können</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Keine Anlageberatung</h2>
              <p>
                Die auf dieser Website bereitgestellten Informationen stellen keine Anlageberatung oder Empfehlung zum Kauf oder Verkauf von Kryptowährungen dar. Jeder Nutzer sollte vor einer Investitionsentscheidung eigene Recherchen durchführen und gegebenenfalls professionelle Beratung in Anspruch nehmen.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Kontakt</h2>
              <p>
                HAG1 Vermögensverwaltungs GmbH<br />
                Lennebergstr. 30<br />
                55124 Mainz<br />
                E-Mail: info@bitloonx.de
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Haftungsausschluss;
