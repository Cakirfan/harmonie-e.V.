import React, { useEffect, useState } from "react";
import AllInfo from "../components/AllInfo";
import { Carousel } from "react-bootstrap";
import aktuelles from "../assets/img/images/slider_aktuelles.jpg";
import { motion } from "framer-motion";

const Aktuelles = () => {
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
            src={aktuelles}
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
              AKTUELLES
            </motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex flex-column align-content-center justify-content-center">
        <h1 className="text-center text-secondary my-5">AKTUELLES</h1>
        <AllInfo />
      </div>
    </div>
  );
};

export default Aktuelles;
