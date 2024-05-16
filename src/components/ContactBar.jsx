import React, { useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "bootstrap";
import SozialeMedien from "./SozialeMedien";

const ContactBar = () => {
  useEffect(() => {
    // Bootstrap tooltip'leri başlat
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="container-fluid bg-danger-subtle d-none d-md-flex justify-content-between py-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="col col-8 d-flex justify-content-between mx-auto">
        <motion.div className="col col-10 d-flex me-5" variants={itemVariants}>
          <div className="ms-3 d-flex gap-2 fs-6">
            <span>
              <FaPhone />
            </span>
            <span className="text-danger">+49 15566 051266</span>
          </div>
          <span className="ms-3 fs-6">|</span>
          <div className="ms-3 d-flex gap-2 fs-6">
            <span>
              <FaEnvelope />
            </span>
            <a href="mailto:info@harmonieneuss.de" className="text-danger">
              info@harmonieneuss.de
            </a>
          </div>
        </motion.div>
        <motion.div className="col col-2" variants={itemVariants}>
          <SozialeMedien />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactBar;
