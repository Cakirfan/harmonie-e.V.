import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const Aktuell = () => {
  const [aktuelInfo, setAktuelInfo] = useState([]);

  useEffect(() => {
    const filteredInfo = hauptInfo.filter((info) => info.situation === "new");
    setAktuelInfo(filteredInfo);
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

  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  return (
    <div className="container-fluid bg-body-tertiary py-5 border-bottom border-3 border-top border-success">
      <h1 className="text-center text-dark mb-5 shadow-text">Aktuelles</h1>
      {aktuelInfo.map((info, i) => (
        <motion.div
          className="row my-5"
          key={i}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="col-md-9 d-flex flex-column flex-md-row g-4 mx-auto">
            <div className="col-12 col-md-5 mb-3 mb-md-0 aktuell-card">
              <img
                src={info.image}
                className="img-fluid rounded border border-5 border-dark shadow-lg aktuell-img w-100"
                alt="..."
              />
            </div>
            <div className="col-12 col-md-7 py-2">
              <div className="card-body d-flex flex-column h-100">
                <h3 className="text-success">{info.titel}</h3>
                <p className="fs-5 text-secondary text-justify mt-4">
                  {truncateText(info.desc2, 80)}
                </p>
                <div className="mt-auto d-flex justify-content-between">
                  <Link
                    to={`/aktuell/${info.id}`}
                    className="custom-link text-decoration-none "
                  >
                    <span className="fs-5 icon-link-hover">
                      Mehr <BsArrowRightSquareFill className="fs-5 icon" />
                    </span>
                  </Link>
                  <p className="card-text mb-auto">
                    <small className="text-secondary">
                      Die Veranstaltung fand am{" "}
                      <span className="text-dark">{info.date || "..."}</span> statt.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <hr className="col-md-9 border-3 shadow border-dark mt-5 mx-auto" />
        </motion.div>
      ))}
    </div>
  );
};

export default Aktuell;
