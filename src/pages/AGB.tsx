import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const AGB = () => {
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
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen der HAG1 Vermögensverwaltungs GmbH, Lennebergstr. 30, 55124 Mainz (nachfolgend "Anbieter") und dem Nutzer (nachfolgend "Kunde"). Maßgeblich ist die zum Zeitpunkt des Vertragsschlusses gültige Fassung der AGB.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 2 Vertragsgegenstand</h2>
              <p>
                Der Anbieter stellt eine Plattform für Kryptowährungs-Trading mit KI-Unterstützung bereit. Die genauen Leistungen ergeben sich aus der jeweiligen Leistungsbeschreibung auf der Website des Anbieters.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 3 Vertragsschluss</h2>
              <p>
                Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar. Der Vertrag kommt durch Bestätigung des Anbieters zustande.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 4 Pflichten des Kunden</h2>
              <p>
                Der Kunde ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und seine Zugangsdaten geheim zu halten. Der Kunde trägt die Verantwortung für alle Aktivitäten, die unter seinem Konto stattfinden.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 5 Haftungsbeschränkung</h2>
              <p>
                Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit. Im Übrigen ist die Haftung auf vorhersehbare, vertragstypische Schäden beschränkt. Eine Haftung für entgangenen Gewinn oder sonstige Vermögensschäden ist ausgeschlossen.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 6 Risikohinweis</h2>
              <p>
                Der Handel mit Kryptowährungen ist mit erheblichen Risiken verbunden und kann zum Totalverlust des eingesetzten Kapitals führen. Vergangene Wertentwicklungen sind kein Indikator für zukünftige Ergebnisse. Der Kunde sollte nur Kapital einsetzen, dessen Verlust er verkraften kann.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">§ 7 Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Mainz, sofern der Kunde Kaufmann ist oder keinen allgemeinen Gerichtsstand in Deutschland hat. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;
