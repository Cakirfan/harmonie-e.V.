import React, { useEffect, useState } from "react";
import { allInfo } from "../helper/data";
import DialogCard from "../components/DialogCard";
import { Carousel } from "react-bootstrap";
import dialog from "../assets/img/images/slider_kultur_dialog.jpg";
import { motion } from "framer-motion";

const Dialog = () => {
  const subImage = allInfo.length > 0 ? allInfo[1].subInfo[0].image : "";

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
            src={dialog}
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
              DIALOG & KULTUR
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="row d-flex justify-content-center mt-5 mx-auto">
        {/* <InfoBogen /> */}
        <div className="col col-md-8">
          <div className="custom-background">
            <span className="bg-warning text-white py-2 px-3 fw-semibold">
              DIALOG & KULTUR
            </span>
            <h1 className="fw-semibold mb-3 mt-5">
              Kulturelle Vielfalt & Dialog
            </h1>
            <p className="text-justify text-secondary fs-5">
              Abseits der kulturellen Vielfalt betonen wir im Harmonie e.V. die
              Bedeutung des interkulturellen und interreligiösen Austauschs. Wir
              sind davon überzeugt, dass eine offene Kommunikation und der
              Dialog zwischen Mitgliedern verschiedener Kulturen und Religionen
              entscheidend für ein ausgewogenes Zusammenleben in einer
              vielfältigen Gesellschaft sind. Daher bieten wir diverse
              Veranstaltungen und Begegnungsmöglichkeiten an, die den Austausch
              und das Verständnis zwischen den unterschiedlichen kulturellen und
              religiösen Gruppen fördern.
            </p>
            <p className="text-justify text-secondary fs-5">
              Zu diesen Events zählen beispielsweise Gesprächsrunden, Vorträge
              und gemeinsame Feierlichkeiten, bei denen sich Menschen mit
              unterschiedlichen Glaubensrichtungen und kulturellen Hintergründen
              treffen, sich austauschen und voneinander lernen können. Unser
              Ziel ist es, Vorurteile abzubauen, ein respektvolles Miteinander
              zu fördern und das Zusammenleben in unserer vielschichtigen und
              multireligiösen Gesellschaft zu stärken.
            </p>
            <h1 className="text-danger fw-semibold mb-3 mt-5">
              Kultur <span className="text-warning"> & </span>
              <span className="text-primary">Diversität</span>
            </h1>
            <p className="text-justify text-secondary fs-5">
              Im Harmonie e.V. sind wir uns der Diversität und Bedeutung von
              Kultur bewusst und bemühen uns, ein breites Spektrum an
              Aktivitäten und Veranstaltungen anzubieten. Unser kulturelles
              Programm reicht von Theateraufführungen und Konzerten bis hin zu
              Workshops und Seminaren, die das Verständnis für Interkulturalität
              fördern. Durch das Präsentieren, Pflegen und Weitergeben von
              Werten und Traditionen möchten wir Vorurteile abbauen und
              kulturelle Unterschiede als Bereicherung anerkennen. Respekt und
              Wertschätzung für alle Kulturen und Menschen stehen dabei im
              Mittelpunkt unserer Bemühungen.
            </p>
          </div>
          <hr className="border-3 shadow border-danger my-5" />
        </div>

        <div className="col col-md-8 mb-3">
          <div className="row g-0 shadow-lg">
            <div className="col-md-6 bg-success-subtle">
              <div className="card-body p-4 p-md-5">
                <span className="bg-warning text-white py-2 px-3 fw-semibold">
                  DIALOG & KULTUR
                </span>
                <h3 className="card-title text-secondary mt-3">KULTUR</h3>
                <p className="text-start mt-3 fs-6">
                  Im Harmonie e.V. Kulturhaus sind wir uns der Vielfalt und
                  Bedeutung von Kultur bewusst und bemühen uns, ein breites
                  Spektrum an Aktivitäten und Veranstaltungen anzubieten. Unser
                  kulturelles Angebot erstreckt sich von Theatervorstellungen
                  und Konzerten bis hin zu Workshops und Seminaren, die das
                  Verständnis für Interkulturalität fördern. Durch das
                  Vorstellen, Pflegen und Weitergeben von Werten und Traditionen
                  möchten wir Vorurteile abbauen und kulturelle Unterschiede als
                  Bereicherung anerkennen. Respekt und Wertschätzung gegenüber
                  allen Kulturen und Menschen stehen dabei im Mittelpunkt
                  unserer Arbeit.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={subImage}
                className="img-fluid rounded-end"
                alt="..."
                style={{ height: "27rem" }}
              />
            </div>
          </div>
          <hr className="border-3 shadow border-danger mt-5 mb-4" />
        </div>
      </section>
      <section className="container-fluid text-center">
        <span className="bg-warning text-white py-2 px-3 fw-semibold">
          KULTUR & DIALOG
        </span>
        <h3 className="card-title text-secondary mt-3 mb-5">AKTUELLES</h3>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <DialogCard />
        </div>
      </section>
    </div>
  );
};

export default Dialog;
