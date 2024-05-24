import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInfo,
  FaLocationArrow,
  FaPhone,
  FaHandPointRight,
  FaHandPointDown,
} from "react-icons/fa";
import logo from "../assets/img/logo-harmonie.jpeg";
import { motion } from "framer-motion";
import SozialeMedien from "./SozialeMedien";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Component unmount olduğunda event listener'ı temizle
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate a condition, e.g., footer appears after a user event or conditionally
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const wavingHandVariants = {
    animate: {
      x: ["0%", "50%", "0%", "-20%", "0%"], // İkonun x ekseninde hareket edeceği yüzdeler
      transition: {
        x: {
          repeat: Infinity, // Animasyonun sürekli tekrar etmesi
          repeatType: "loop",
          duration: 3, // Her döngünün süresi
          ease: "easeInOut", // Animasyonun hızlanma ve yavaşlama şekli
        },
      },
    },
  };

  const mobileHandVariants = {
    animate: {
      y: ["0%", "50%", "0%", "10%", "0%"], // İkonun y ekseninde hareket edeceği yüzdeler
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <>
      <section className="bg-warning" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 mx-auto py-1">
            <div className="col col-md-6 d-flex text-dark fs-2 mb-md-0">
              <span>Kontaktieren Sie uns per </span>
              <motion.div
                className="fs-1 ms-3"
                style={{ height: "2rem" }}
                variants={isMobile ? mobileHandVariants : wavingHandVariants}
                animate="animate"
              >
                {isMobile ? (
                  <FaHandPointDown className="mb-5" />
                ) : (
                  <FaHandPointRight className="mb-5" />
                )}
              </motion.div>
            </div>
            <SozialeMedien />
          </div>
        </div>
      </section>
      <motion.section
        className="container-fluid bg-success text-white p-5"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
            <motion.div className="text-center" variants={itemVariants}>
              <img
                src={logo}
                alt="logo"
                className="rounded shadow-lg"
                width={165}
              />
            </motion.div>
            <motion.div
              className="d-flex flex-column justify-content-center align-content-center text-center"
              variants={itemVariants}
            >
              <span className="fs-2">
                <FaLocationArrow />
              </span>
              <h1 className="text-white">ADRESSE</h1>
              <span className="fs-5">Zufuhrstraße 2</span>
              <span className="fs-5">41462 Neuss</span>
            </motion.div>
            <motion.div
              className="d-flex flex-column justify-content-center align-content-center text-center"
              variants={itemVariants}
            >
              <span className="fs-2">
                <FaPhone />
              </span>
              <h1 className="text-white">KONTAKT</h1>
              <span className="fs-5">Tel: +49 15566 051266</span>
              <span className="fs-5">
                EMail:{" "}
                <a href="mailto:info@harmonieneuss.de" className="text-warning">
                  info@harmonieneuss.de
                </a>
              </span>
            </motion.div>
            <motion.div
              className="d-flex flex-column justify-content-center align-content-center text-center"
              variants={itemVariants}
            >
              <span className="fs-2">
                <FaInfo />
              </span>
              <h1 className="text-white">INFORMATION</h1>
              <span className="fs-5">
                <Link to="impressum" className="text-white">
                  Impressum
                </Link>{" "}
              </span>
              <span className="fs-5">
                <Link to="datenschutz" className="text-white">
                  Datenschutzerklärung
                </Link>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <div className="container-fluid bg-success-subtle p-2">
        <div className="container">
          <p className="text-success text-center mb-0">
            ©<span>{new Date().getUTCFullYear()}</span> Harmonie e.V.. Alle
            Rechte vorbehalten
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
