import React, { useEffect, useState } from "react";
import { allInfo } from "../helper/data";
import MigrationCard from "../components/MigrationCard";
import { Carousel } from "react-bootstrap";
import migration from "../assets/img/images/slider_fluechtlingsarbeit.jpg";
import { motion } from "framer-motion";

const MigrationsArbeit = () => {
  const subImage = allInfo.length > 0 ? allInfo[3].subInfo[0].image : "";

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
            src={migration}
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
              FLÜCHTLINGSARBEIT
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-8">
          <span className="bg-warning text-white py-2 px-3 fw-semibold">
            Migrationsarbeit
          </span>
          <h1 className="fw-semibold mb-3 mt-5">Migration</h1>
          <p className="text-justify text-secondary fs-5">
            Harmonie e.V. Verein setzt sich seit einigen Jahren für die
            Förderung von Bildung und die Integration von Menschen verschiedener
            Nationen und Kulturen ein. Als der deutsche Staat in den Jahren 2015
            bis 2022 Hunderttausenden geflüchteten Menschen humanitäre
            Unterstützung gewährte und diese in das Land aufnahm, waren nur
            wenige über die Herausforderungen im Klaren, die ehrenamtliche
            Arbeit erfordert, um neu angekommene Menschen hier zu integrieren.
            In dieser Situation wurden alle Bürger des Landes dazu aufgerufen,
            dem Staat durch freiwilliges Engagement zu helfen. Auch wir als
            Verein sahen es als unsere Pflicht an, unsere bereits bestehende
            Gruppe von Freiwilligen für den Bereich "Flüchtlingshilfe" zu
            mobilisieren.
          </p>
          <p className="text-justify text-secondary fs-5">
            Sind Sie ein Neuankömmling/Flüchtling und benötigen Unterstützung
            während Ihrer ersten Integrationsphase? Leben Sie bereits seit
            einiger Zeit in Neuss und möchten ein neues soziales Umfeld in Ihrer
            neuen Heimatstadt aufbauen?
          </p>
          <h1 className="fw-semibold mb-3 mt-5">Eingliederungsbesuche</h1>
          <p className="text-justify text-secondary fs-5">
            In der ersten Phase der Integration von Geflüchteten ist ein rascher
            Austausch mit der lokalen Gesellschaft von entscheidender Bedeutung,
            um Ängste zu reduzieren, Beziehungen zu knüpfen und somit den
            Integrationsprozess zu beschleunigen. Als Verein ermutigen wir daher
            Geflüchtete, Besuche bei unterschiedlichen Persönlichkeiten und
            Einrichtungen in ihren jeweiligen Städten und Gemeinden zu
            unternehmen, und unterstützen sie bei der Organisation solcher
            Treffen.
          </p>
          <p className="text-justify text-secondary fs-5">
            Wir sind erfreut darüber, dass wir auf diese Weise eine Verbindung
            zwischen Geflüchteten und den jeweiligen Institutionen bzw.
            Persönlichkeiten herstellen können, und möchten uns bereits jetzt
            für die gastfreundliche Aufnahme bedanken.
          </p>
          <hr className="border-3 shadow border-danger my-5" />
        </div>
        <div className="col col-md-8 mb-3">
          <div className="row g-0">
            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  MIGRATIONSARBEIT
                </span>
                <h3 className="card-title text-secondary mt-3">
                  INTEGRATIONSBESUCHE
                </h3>
                <p className="text-start mt-3">
                  In der ersten Integrationsphase der Flüchtlinge ist der
                  schnelle Kontakt zur hiesigen Gesellschaft von großer
                  Bedeutung, um Ängste abzubauen, Berührungspunkte herzustellen
                  und somit die Integration zu beschleunigen. Als Verein
                  motivieren wir daher Flüchtlinge, Besuche zu verschiedenen
                  Persönlichkeiten und Einrichtungen in ihren jeweiligen Städten
                  und Gemeinden zu unternehmen und unterstützen sie bei der
                  Organisation dieser Treffen.
                </p>
                <p className="text-start mt-3">
                  Wir freuen uns sehr, dass wir in diesem Zusammenhang eine
                  Brücke zwischen Flüchtlingen und den jeweiligen Institutionen
                  bzw. Persönlichkeiten bauen können und bedanken uns jetzt
                  schon für die Gastfreundschaft..
                </p>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={subImage}
                className="img-fluid rounded-end w-100"
                alt="..."
                style={{ height: "33.5rem" }}
              />
            </div>
          </div>
          <hr className="border-3 shadow border-danger mt-5 mb-4" />
        </div>
      </section>
      <section className="container-fluid text-center">
        <span className="bg-warning text-white py-2 px-3 fw-semibold">
          MIGRATIONSARBEIT
        </span>
        <h3 className="card-title text-secondary mt-3 mb-5">AKTUELLES</h3>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <MigrationCard />
        </div>
      </section>
    </div>
  );
};

export default MigrationsArbeit;
