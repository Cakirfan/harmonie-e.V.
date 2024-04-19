import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="container-fluid bg-body-tertiary py-5 mb-5 border-bottom border-3 border-success shadow-lg">
      <h1 className="text-center text-dark mb-5">Projekte</h1>
      <div className="row">
        <div className="col-xxl-9 offset-xxl-1 mx-auto">
          <div className="row">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card h-100">
                    <div className="card-img-wrapper">
                      <img
                        src={`https://via.placeholder.com/500?text=Foto+${
                          index + 1
                        }`}
                        className="card-img-top"
                        alt={`Foto ${index + 1}`}
                      />
                      <div className="card-img-overlay d-flex justify-content-center align-items-center">
                        <div className="text-content text-center">
                          <h3 className="card-title text-white">
                            Başlık {index + 1}
                          </h3>
                          <p className="card-text text-white fs-4">
                            Detaylar burada yer alacak.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekte;
