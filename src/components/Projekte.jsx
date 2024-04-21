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

  const images = [
    "https://cdn.pixabay.com/photo/2017/01/17/15/24/network-1987209_640.jpg",
    "https://cdn.pixabay.com/photo/2018/01/26/09/06/people-3108155_640.jpg",
    "https://cdn.pixabay.com/photo/2017/08/29/08/39/industry-2692459_640.jpg",
    "https://cdn.pixabay.com/photo/2018/02/02/17/14/triangle-3125882_640.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/20/40/drawing-933207_640.jpg",
    "https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_640.jpg",
    "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_640.jpg",
    "https://cdn.pixabay.com/photo/2017/06/04/20/48/implement-2372179_640.jpg",
  ];

  const leftImages = images.slice(0, 3); // İlk 3 resim
  const rightImages = images.slice(5); // Son 3 resim

  return (
    <div className="container-fluid bg-body-tertiary py-5 mb-5 border-bottom border-3 border-success shadow-lg">
      <div className="text-center mb-5">
        <h1 className=" text-dark shadow-text">Projekte</h1>
      </div>

      <div className="row">
        <div className="col-xxl-10 offset-xxl-1 mx-auto">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-3">
              {leftImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card project-card mb-4">
                    <img
                      src={image}
                      alt={`Foto ${index + 1}`}
                      className="card-img-top"
                      height={200}
                    />
                    <div className="card-img-overlay">
                      <h3 className="card-title">Başlık {index + 1}</h3>
                      <p className="card-text">Detaylar burada yer alacak.</p>
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
                    src={images[3]}
                    alt="Foto 4"
                    className="card-img-top"
                    height={650}
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">Başlık 4</h3>
                    <p className="card-text">Detaylar burada yer alacak.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="col-lg-3">
              {rightImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card project-card mb-4">
                    <img
                      src={image}
                      alt={`Foto ${index + 1}`}
                      className="card-img-top"
                      height={200}
                    />
                    <div className="card-img-overlay">
                      <h3 className="card-title">Başlık {index + 1}</h3>
                      <p className="card-text">Detaylar burada yer alacak.</p>
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
