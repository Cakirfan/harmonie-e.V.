import React, { useEffect, useState } from "react";
import Typed from "typed.js";
// import InfoBogen from "../components/infoBogen/InfoBogen";
import { allInfo } from "../helper/data";
import { Carousel } from "react-bootstrap";
import uber from "../assets/img/images/slider_ueber.jpg";
import { motion } from "framer-motion";

const UberUns = () => {
  useEffect(() => {
    // Typed.js konfigürasyonu
    const options = {
      strings: ["Harmonie e.V."],
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 1500,
      loop: true,
    };

    // Typed.js örneği oluşturma ve bağlama
    const typed = new Typed(".auto-input", options);

    // Komponent kaldırıldığında Typed örneğini temizleme
    return () => {
      typed.destroy();
    };
  }, []); // Boş bağımlılık dizisi, komponent ilk oluşturulduğunda yalnızca bir kez çalışmasını sağlar

  const subImage = allInfo.length > 0 ? allInfo[0].subInfo[0].image : "";

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
      <Carousel id="carouselExample" className="carousel" indicators={false} controls={false}>
        <Carousel.Item>
          <motion.img
            src={uber}
            className="d-block w-100"
            style={{ minHeight: "200px" }}
            alt="..."
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          />
          <Carousel.Caption>
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
              ÜBER UNS
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex flex-column align-items-center justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-9 col-lg-8">
          <span className="bg-warning text-white py-2 px-3 fw-semibold">
            ÜBER UNS
          </span>
          <h1 className="mb-3 mt-5">
            Wilkommen in{" "}
            <span className="text-success fw-semibold auto-input"></span>
          </h1>
          <p className="text-justify text-secondary fs-5">
            Wir sind ein neu gegründeter Verein, der im Jahr 2023 ins Leben
            gerufen wurde. Unsere Hauptziele sind Bildung und kulturelle
            Aktivitäten, die einen fundamentalen Grundstein unserer Tätigkeiten
            bilden.
          </p>
          <p className="text-justify text-secondary fs-5">
            In der Vergangenheit haben wir eine Initiative namens 'Initiative
            neues Leben' ins Leben gerufen, welche wir gemeinsam mit unseren
            Gründungsmitgliedern bis zum Jahr 2023 erfolgreich umgesetzt haben.
            Aufgrund des Wachstums unserer Aktivitätsbereiche haben wir
            beschlossen, die Initiative in einen Verein umzuwandeln.
          </p>
          <p className="text-justify text-secondary fs-5">
            Seit Mai 2023 ist unser Verein offiziell registriert. Bislang haben
            wir uns besonders auf die Beratung in verschiedenen Bereichen für
            Einwanderer in Deutschland konzentriert. Unsere Mitglieder haben
            sich aktiv darum bemüht, Bildungs- und berufliche Seminare sowie
            Workshops zu organisieren, um zur Integration der Einwanderer in die
            Gesellschaft beizutragen. Darüber hinaus haben wir zahlreiche
            soziale Aktivitäten, Ausflüge und Teamaktivitäten für Familien,
            Jugendliche und Kinder angeboten, um einen Ort des Zusammentreffens
            und derGemeinschaft zu schaffen.
          </p>
          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-9 col-lg-8 mb-3">
          <div className="row g-0">
            <img
              src={subImage}
              className="img-fluid rounded-start col-md-6"
              alt="..."
              style={{ height: "27rem" }}
            />

            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  ÜBER UNS
                </span>
                <h3 className="card-title text-secondary mt-3">ZIELE</h3>
                <p className="text-start mt-3">
                  Eines der Hauptziele bei der Verwirklichung der gemeinnützigen
                  Arbeit unseres Vereins ist die Durchführung von
                  Veranstaltungen, die den interkulturellen und interreligiösen
                  Dialog sowie das demokratische und friedliebende Zusammenleben
                  fördern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberUns;
