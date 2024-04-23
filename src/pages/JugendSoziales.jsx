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
          <h2 className="fw-semibold mb-3 mt-5">
            Sozialwesen und Jugend bei{" "}
            <span className="text-success">Harmonie e.V.</span> :{" "}
            <span className="fs-4 text-secondary">
              Eine Zukunft voller Möglichkeiten
            </span>
          </h2>
          <p className="text-justify text-secondary fs-5">
            Harmonie e.V. sieht in der Jugendförderung ein grundlegendes Element
            seiner gemeinnützigen Bemühungen. Wir investieren leidenschaftlich
            in junge Menschen, indem wir sie auf ihrem Weg zu selbstständigen,
            handlungsfähigen und kritisch denkenden Erwachsenen unterstützen,
            die einen konstruktiven Beitrag zur Gesellschaft leisten. Dabei
            stehen ethische Prinzipien wie Integrität, Toleranz, Anerkennung von
            Vielfalt und Zivilcourage im Fokus unserer Arbeit.
          </p>

          <h5 className="fw-semibold mb-3 mt-5">
            Zielgerichtete Initiativen und Programme
          </h5>
          <ul className="list">
            <li className="list-group-item fs-5 text-secondary">
              <strong>Kreative und kulturelle Entfaltung:</strong> Durch
              Kunstworkshops, Sportveranstaltungen und kulturelle Ausflüge
              bieten wir Jugendlichen die Möglichkeit, ihre Fähigkeiten zu
              entdecken und zu entwickeln.
            </li>
            <li className="list-group-item fs-5 text-secondary my-2">
              <strong>Förderung von Gemeinschaft und Zusammenhalt:</strong>{" "}
              Sosialevents und speziell konzipierte Veranstaltungen für
              Jugendliche stärken das Gemeinschaftsgefühl und das
              Selbstvertrauen.
            </li>
            <li className="list-group-item fs-5 text-secondary">
              <strong>Persönliche und berufliche Entwicklung:</strong>{" "}
              Individuelle und Gruppenschulungen, Mentoring- und
              Beratungsdienste unterstützen die Jugendlichen in ihrer
              persönlichen und beruflichen Entwicklung. Erfahrene Erwachsene
              bauen Mentorenbeziehungen auf, die die Perspektiven der
              Jugendlichen erweitern und ihnen helfen, ihre Ziele zu erreichen.
            </li>
          </ul>

          <h4 className="fw-semibold mb-3 mt-5">
            Unterstützung bei der Verwirklichung der Ideale
          </h4>
          <p className="text-justify text-secondary fs-5">
            Wir ermutigen Jugendliche dazu, ihre eigenen Ideen zu präsentieren
            und umzusetzen. Unsere Plattform hilft ihnen, sich untereinander zu
            vernetzen und ihre Projekte erfolgreich vorzustellen.
          </p>

          <h4 className="fw-semibold mb-3 mt-5">Investition in die Zukunft</h4>
          <p className="text-justify text-secondary fs-5">
            Als Harmonie e.V. freuen wir uns, einen Beitrag dazu leisten zu
            können, dass Jugendliche ihre Potenziale entdecken und sich optimal
            auf die Zukunft vorbereiten. Über unsere Jugendplattform ermöglichen
            wir es den Jugendlichen, ihre Stärken zu erkennen, sich auszudrücken
            und einen positiven Beitrag zu ihrer Selbstverwirklichung zu
            leisten.
          </p>

          <h4 className="fw-semibold mb-3 mt-5">
            Entdecke mit uns die Welt der Möglichkeiten!
          </h4>
          <p className="text-justify text-secondary fs-5">
            Unsere vielfältigen Initiativen bieten jungen Menschen eine
            Plattform, auf der sie ihre Interessen entfalten, lernen und wachsen
            können. Entdecke mit uns die Welt der Möglichkeiten und gestalte
            aktiv die Zukunft mit.
          </p>

          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-8 my-3">
          <div className="row g-0 shadow-lg">
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
