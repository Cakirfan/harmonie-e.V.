import React, { useEffect, useState } from "react";
import Gründung from "../components/Gründung";
import Spende from "../components/Spende";
import { Carousel } from "react-bootstrap";
import home from "../assets/img/images/slider_ueber.jpg";
import { motion } from "framer-motion";
import Projekte from "../components/Projekte";
import Aktuell from "../components/Aktuell";
import Zitaten from "../components/Zitaten";

const Home = () => {
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
            src={home}
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
              className="mt-2 mt-md-4 text-white text-smaller"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
            >
              KULTUR, KUNST UND LITERATUR
            </motion.h1>
            <motion.p
              className="fs-6 fw-semibold my-auto"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
            >
              Gemeinsame Werte Definieren
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="row d-flex justify-content-center mt-5 mx-auto">
        <div
          className="h-100"
          style={{ height: "100%", backgroundColor: "#fff" }}
        >
          <Gründung />
          <Zitaten />
          <Aktuell />
          <Projekte />
          <Spende />
        </div>
      </div>
    </div>
  );
};

export default Home;
