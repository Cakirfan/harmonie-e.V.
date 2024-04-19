import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInfo,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/img/logo-harmonie.jpeg";
import { motion } from "framer-motion";


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      <motion.section
        className="container-fluid bg-success text-white p-5"
        style={{ marginTop: "5rem" }}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
            <motion.div className="text-center" variants={itemVariants}>
              <img src={logo} alt="logo" className="rounded" width={165} />
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
              <span className="fs-5">Tel: 0111 / 111 111 11</span>
              <span className="fs-5">EMail: info@harmonieneuss.de</span>
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
      <div className="container-fluid bg-success-subtle p-3">
        <div className="container mt-2">
          <p className="text-success text-center">
            ©<span>{new Date().getUTCFullYear()}</span> Harmonie e.V.. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
