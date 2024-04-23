import React, { useEffect, useState } from "react";
// import InfoBogen from "../components/infoBogen/InfoBogen";
import { allInfo } from "../helper/data";
import BildungCard from "../components/BildungCard";
import { Carousel } from "react-bootstrap";
import bildung from "../assets/img/images/slider_bildung.jpg";
import { motion } from "framer-motion";

const Bildung = () => {
  const subImage = allInfo.length > 0 ? allInfo[2].subInfo[0].image : "";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div style={windowWidth < 768 ? { marginTop: "-2.1rem" } : {}}>
      <Carousel
        id="carouselExample"
        className="carousel"
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <motion.img
            src={bildung}
            className="d-block w-100"
            style={{ minHeight: "200px" }}
            alt="..."
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          />
          <Carousel.Caption className="d-block">
            <motion.span
              className="bg-success text-white py-2 py-md-3 px-3 fw-semibold custom-text-size"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            >
              HARMONIE e.V - DAS KULTURHAUS
            </motion.span>
            <motion.h1
              className="text-white fw-semibold mt-3 my-lg-4"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
            >
              BILDUNG
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-8">
          <span className="bg-warning text-white py-2 px-3 fw-semibold">
            BILDUNG
          </span>
          <h1 className="fw-semibold mb-3 mt-5">Bildung</h1>
          <p className="text-justify text-secondary fs-5">
            Harmonie e.V. setzt einen hohen Stellenwert auf die Förderung und
            Weiterentwicklung der persönlichen Handlungskompetenz. Mit diesem
            Ziel vor Augen beabsichtigt der Verein, seinen Beitrag zu leisten
            und sich auf den Gebieten des Wissens und insbesondere der Bildung
            zu engagieren. Daher bitten wir Experten, Schulungs- und
            Familienseminare abzuhalten. In unseren Räumlichkeiten werden auch
            regelmäßig Gruppen für gemeinsames Lesen veranstaltet.
          </p>
          <h1 className="fw-semibold mb-3 mt-5">Umweltschutz</h1>
          <p className="text-justify text-secondary fs-5">
            Im Harmonie e.V. legen wir einen hohen Stellenwert auf den Schutz
            der Umwelt und des Klimas. Unser Engagement erstreckt sich darauf,
            natürliche Ressourcen zu schonen und nachhaltige Lebensstile zu
            unterstützen. Hierfür initiieren wir diverse Projekte und
            veranstalten Events im Bereich Umwelt und Nachhaltigkeit. Dazu
            gehören beispielsweise Workshops, Vorträge und Diskussionsforen, in
            denen wir uns mit aktuellen Umweltthemen beschäftigen und gemeinsam
            nach Lösungen suchen.
          </p>
          <p className="text-justify text-secondary fs-5">
            Zusätzlich engagieren wir uns in lokalen und regionalen Bewegungen,
            die sich für den Umweltschutz und die Förderung nachhaltiger
            Praktiken einsetzen.
          </p>
          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-8 mb-3">
          <div className="row g-0 shadow-lg">
            <div className="col-md-6">
              <img
                src={subImage}
                className="img-fluid rounded-start w-100"
                alt="..."
                style={{ height: "32rem" }}
              />
            </div>
            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  BILDUNGSANGEBOTE
                </span>
                <h3 className="card-title text-secondary mt-3">
                  UMWELT UND NACHHALTIGKEIT
                </h3>
                <p className="text-start mt-3">
                  Im Harmonie e.V. Kulturhaus legen wir großen Wert auf Umwelt-
                  und Klimaschutz. Wir setzen uns dafür ein, die natürlichen
                  Ressourcen zu schonen und nachhaltige Lebensweisen zu fördern.
                  Um dies zu erreichen, organisieren wir verschiedene Projekte
                  und Veranstaltungen rund um das Thema Umwelt und
                  Nachhaltigkeit.Dazu zählen zum Beispiel Workshops, Vorträge
                  und Diskussionsrunden, in denen wir uns mit aktuellen
                  Umweltthemen auseinandersetzen und gemeinsam nach Lösungen
                  suchen.
                </p>
                <p className="text-start mt-3">
                  Darüber hinaus beteiligen wir uns an lokalen und regionalen
                  Initiativen, die sich für den Schutz der Umwelt und die
                  Förderung nachhaltiger Praktiken einsetzen.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <hr className="border-3 shadow border-danger mt-5 mb-4" />
        </div>
      </section>
      <section className="container-fluid text-center">
        <span className="bg-warning text-white py-2 px-3 fw-semibold">
          BILDUNG
        </span>
        <h3 class="card-title text-secondary mt-3 mb-5">AKTUELLES</h3>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <BildungCard />
        </div>
      </section>
    </div>
  );
};

export default Bildung;
