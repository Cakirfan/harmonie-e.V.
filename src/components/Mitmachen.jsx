import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import KontaktModal from "./modals/KontaktModal";

const Mitmachen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  // Simulate a condition, e.g., footer appears after a user event or conditionally
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      <motion.div
        className="container-fluid bg-secondary-subtle mt-5 pb-5 shadow-sm"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <motion.span
            className="bg-warning text-white py-2 px-3 fw-semibold"
            variants={itemVariants}
          >
            MITMACHEN
          </motion.span>
          <div>
            <motion.h3
              className="mt-3 text-secondary mb-3"
              variants={itemVariants}
            >
              MITGLIEDSCHAFT
            </motion.h3>
            <motion.p
              className="text-secondary text-start mt-3 fs-6"
              variants={itemVariants}
            >
              Möchtest du uns unterstützen, hast aber wenig Zeit, dich
              persönlich einzubringen? Bitte kontaktiere uns per EMail unter{" "}
              <a href="mailto:info@harmonieneuss.de" className="text-danger">
                info@harmonieneuss.de
              </a>
            </motion.p>
            <div className="fs-4 mt-1">
              <button
                type="button"
                className="btn btn-sm btn-success rounded-3 border-0 px-3"
                onClick={handleShow}
              >
                <FaEnvelopeOpenText className="fs-5 mb-1 me-2" />
                <span className="py-2 fs-5">Mitgliedsformular</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <KontaktModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Mitmachen;
