import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {projekte} from "../helper/data"

const Projekte = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate a condition, e.g., footer appears after a user event or conditionally
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      },
    },
  };


  const leftInfo = projekte.slice(0, 3); // İlk 3 resim
  const rightInfo = projekte.slice(5); // Son 3 resim

  return (
    <div
      className="container-fluid py-5 mb-5 border-bottom border-3 border-success shadow-lg">
      <div className="text-center mb-5">
        <h1 className=" text-dark shadow-text">Projekte</h1>
      </div>

      <div className="row">
        <div className="col-xxl-10 offset-xxl-1 mx-auto">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-3">
              {leftInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card project-card mb-4">
                    <img
                      src={info.image}
                      alt={`Foto ${index + 1}`}
                      className="card-img-top"
                      height={200}
                    />
                    <div className="card-img-overlay text-center">
                      <h3 className="card-title">{info.titel}</h3>
                      <p className="card-text">{info.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column */}
            <div className="col-lg-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView={isVisible ? "visible" : "hidden"}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="card project-card mb-4">
                  <img
                    src={projekte[3].image}
                    alt="Foto 4"
                    className="card-img-top img-standard"
                    height={650}
                  />
                  <div className="card-img-overlay text-center">
                    <h3 className="card-title">{projekte[3].titel}</h3>
                    <p className="card-text">{projekte[3].desc}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="col-lg-3">
              {rightInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card project-card mb-4">
                    <img
                      src={info.image}
                      alt={`Foto ${index + 1}`}
                      className="card-img-top"
                      height={200}
                    />
                    <div className="card-img-overlay text-center">
                      <h3 className="card-title">{info.titel}</h3>
                      <p className="card-text">{info.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekte;
