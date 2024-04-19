import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { hauptInfo } from "../helper/data";

const Aktuell = () => {
  const [aktuelInfo, setAktuelInfo] = useState([]);

  useEffect(() => {
    const filteredInfo = hauptInfo.filter((info) => info.type === "newss");
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

  return (
    <div className="container-fluid bg-body-tertiary py-5 border-bottom border-3 border-top border-success">
      <h1 className="text-center text-dark mb-5">Aktuelles</h1>
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
            <div className="col-12 col-md-5 mb-3 mb-md-0">
              <img
                src="https://cdn.pixabay.com/photo/2023/10/25/19/25/blue-8341156_640.jpg"
                className="img-fluid rounded border border-5 border-dark shadow-lg"
                alt="..."
              />
            </div>
            <div className="col-12 col-md-7 py-2">
              <div className="card-body">
                <h3 className="text-success">{info.titel}</h3>
                <p className="fs-5 text-secondary mt-4">{info.desc}</p>
                <p className="fs-6 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam cupiditate nostrum aut corporis iusto, ex velit,
                  perspiciatis exercitationem porro magni totam commodi placeat
                  nemo natus veritatis optio autem dolores ad nulla? Maiores
                  repellat quisquam expedita, error qui aspernatur id nobis.
                  Eaque quis non, expedita quam dicta natus totam aliquid
                  officiis.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <span className="fs-5">
                  Mehr <BsArrowRightSquareFill className="fs-5" />
                </span>
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
