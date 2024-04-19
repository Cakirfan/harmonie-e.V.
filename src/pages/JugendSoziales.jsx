import React, { useEffect, useState } from "react";
import { allInfo } from "../helper/data";
import JugendCard from "../components/JugendCard";
import { Carousel } from "react-bootstrap";
import jugend from "../assets/img/images/slider_jugend.jpg";
import { motion } from "framer-motion";

const JugendSoziales = () => {
  const subImage = allInfo.length > 0 ? allInfo[4].subInfo[0].image : "";

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
            src={jugend}
            className="d-block w-100"
            style={{ minHeight: "200px" }}
            alt="..."
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          />
          <Carousel.Caption className="d-block">
            <motion.span
              className="bg-success text-whitebg-success text-white py-2 py-md-3 px-3 fw-semibold custom-text-size"
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
              JUGEND & SOZIALES
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-8">
          <span className="bg-warning text-white py-2 px-3 fw-semibold">
            JUGENDARBEIT
          </span>
          <h1 className="fw-semibold mb-3 mt-5">Sozialwesen und Jugend</h1>
          <p className="text-justify text-secondary fs-5">
            Die Förderung der Jugend ist ein grundlegendes Element unserer
            gemeinnützigen Bemühungen im Harmonie e.V. Unser Bestreben liegt
            darin, junge Menschen auf dem Weg zu selbstständigen,
            handlungsfähigen und kritisch denkenden Erwachsenen zu begleiten,
            die einen konstruktiven Beitrag zur Gesellschaft leisten. Im Fokus
            unserer Jugendarbeit stehen allgemeingültige ethische Prinzipien wie
            Integrität, Toleranz, Anerkennung von Vielfalt, Wahrung der
            Menschenwürde, Übernahme von Verantwortung und Zivilcourage. Wir
            möchten den Herausforderungen der modernen Welt begegnen, indem wir
            zielgerichtete Angebote für Kinder und Jugendliche entwickeln. Diese
            sollen sie dazu motivieren, sich gesellschaftlich zu engagieren und
            aktiv an der Bewältigung lokaler und globaler Herausforderungen
            teilzunehmen.
          </p>
          <h5 className="fw-semibold mb-3 mt-5">
            Unsere Jugendarbeit umfasst vielfältige Initiativen:
          </h5>
          <ul className="list">
            <li className="list-group-item fs-5 text-secondary">
              - Projekte mit Jugendlichen, die kreative Ideen fördern.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              - Sosialevents, die Gemeinschaft und Zusammenhalt stärken.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              - Individuelle oder Gruppenschulungen für persönliche Entwicklung.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              - Veranstaltungen, die speziell für Jugendliche konzipiert sind.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              - Aktivitäten zur Förderung handwerklicher Fertigkeiten und
              Talente.
            </li>
          </ul>
          <p className="text-justify text-secondary fs-5">
            Wir setzen uns leidenschaftlich dafür ein, jungen Menschen eine
            vielseitige Plattform zu bieten, auf der sie ihre Interessen
            entfalten, lernen und wachsen können. Entdecke mit uns die Welt der
            Möglichkeiten!
          </p>
          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-8 mb-3">
          <div className="row g-0">
            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  JUGENDARBEIT
                </span>
                <h3 className="card-title text-secondary mt-3">
                  JUGEND & SOZIALES IN DER PRAXIS
                </h3>
                <p className="text-start mt-3">
                  Im Harmonie e.V. legen wir großen Wert auf Umwelt- und
                  Klimaschutz. Wir setzen uns dafür ein, die natürlichen
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
            <div className="col-md-6">
              <img
                src={subImage}
                className="img-fluid rounded-end w-100"
                alt="..."
                style={{ height: "34rem" }}
              />
            </div>
          </div>
          <hr className="border-3 shadow border-danger mt-5 mb-4" />
        </div>
      </section>
      <section className="container-fluid text-center">
        <span className="bg-warning text-white py-2 px-3 fw-semibold">
          JUGENDARBEIT
        </span>
        <h3 className="card-title text-secondary mt-3 mb-5">AKTUELLES</h3>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <JugendCard />
        </div>
      </section>
    </div>
  );
};

export default JugendSoziales;
