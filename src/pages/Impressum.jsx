import React from "react";
import { motion } from "framer-motion";

const Impressum = () => {

   const containerVariants = {
     hidden: { opacity: 0, x: -100 },
     visible: {
       opacity: 1,
       x: 0,
       transition: {
         when: "beforeChildren",
         staggerChildren: 0.7,
       },
     },
   };


  return (
    <motion.section
      className="container mt-5 shadow-lg p-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-4">
        <h3 className="mb-3">Angaben gemäß § 5 TMG</h3>
        <div className="lh-sm mb-5">
          <p className="text-secondary">Harmonie e.V.</p>
          <p className="text-secondary">Zufuhrstraße 2</p>
          <p className="text-secondary">41462 Neuss</p>
        </div>
        <div className="mb-4 lh-sm mb-5">
          <p className="text-secondary">Vereinsregister: VR 3165</p>
          <p className="text-secondary">Steuernummer: 122/5789</p>
          <p className="text-secondary">
            Registergericht: Amtsgericht Neuss
          </p>
        </div>{" "}
        <div className="mb-4 lh-sm mb-5">
          <p className="text-secondary">Telefon: +49 15566 051266</p>
          <p className="text-secondary">EMail: info@harmonieneuss.de</p>
        </div>
        <div className="mb-5 lh-sm">
          <p className="text-secondary">
            Kontaktdaten des Verantwortlichen für Datenschutz
          </p>
          <p className="mb-2 text-secondary">
            Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die
            Kontaktdaten der verantwortlichen Person bzw. Stelle:
          </p>
          <p className="mb-2 text-secondary">
            Vertretungsberechtigt: Vorstandsvorsitzender – Selcuk Akdag
          </p>
          <p className="mb-2 text-secondary">
            E-Mail-Adresse: info@harmonieneuss.de{" "}
          </p>
          <p className="mb-2 text-secondary">Telefon: +49 15566 051266</p>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-3">Bildernachweis</h3>
        <p className="mb-2 text-secondary">
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind
          urheberrechtlich geschützt.
        </p>
        <p className="mb-2 text-secondary mb-4">
          Die Bilderrechte liegen bei Harmonie e.V..
        </p>
        <p className="mb-2 text-secondary">
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
          unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
          Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie
          zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
          notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte
          unserer Seite rechtlich verfolgen.{" "}
        </p>
        <p className="mb-2 text-secondary">
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
          verletzen, bitten wir Sie uns zu kontaktieren.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="mb-3">Haftung für Links auf dieser Webseite</h3>
        <p className="mb-2 text-secondary">
          Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt
          wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht
          für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten
          und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen
          sind und wir Links sofort entfernen würden, wenn uns
          Rechtswidrigkeiten bekannt werden.
        </p>
        <p className="mb-2 text-secondary">
          Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
          wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="mb-3">Haftung für Inhalte dieser Website</h3>
        <p className="mb-2 text-secondary mb-4">
          Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen
          uns korrekte und aktuelle Informationen bereitzustellen. Leider können
          wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website
          übernehmen, speziell für jene, die seitens Dritter bereitgestellt
          wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von ihnen
          übermittelten oder gespeicherten Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mb-2 text-secondary mb-4">
          Unsere Verpflichtungen zur Entfernung von Informationen oder zur
          Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch
          im Falle unserer Nichtverantwortlichkeit davon unberührt.
        </p>{" "}
        <p className="mb-2 text-secondary">
          Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
          bitte wir Sie uns umgehend zu kontaktieren, damit wir die
          rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
          im Impressum.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="mb-3">EU-Streitschlichtung</h3>
        <p className="mb-2 text-secondary mb-4">
          Gemäß Verordnung über Online-Streitbeilegung in
          Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
          Online-Streitbeilegungsplattform (OS-Plattform) informieren.
        </p>
        <p className="mb-2 text-secondary mb-4">
          Verbraucher haben die Möglichkeit, Beschwerden an die Online
          Streitbeilegungsplattform der Europäischen Kommission unter
          http://ec.europa.eu/odr?tid=321840501 zu richten. Die dafür
          notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
        </p>
        <p className="mb-2 text-secondary mb-4">
          Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
          verpflichtet sind, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>{" "}
        <p className="mb-2 text-secondary">
          Alle Texte sind urheberrechtlich geschützt.
        </p>
      </div>
    </motion.section>
  );
};

export default Impressum;
