import React from "react";
import { motion } from "framer-motion";

const Partner = () => {
  const partners = [
    {
      name: "Puzzle",
      href: "/images/partner/Logo_Puzzle-Frauen.png",
    },
    {
      name: "Ebru",
      href: "/images/partner/ebru_logo.png",
    },
    {
      name: "Lotus",
      href: "/images/partner/lotus_logo1.png",
    },
    {
      name: "Mozaik",
      href: "/images/partner/mozaik_logo.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="container d-flex flex-column px-4 mt-5">
      <span className="bg-warning text-white py-2 px-3 fw-semibold mx-auto fs-4 my-3">
        PARTNER
      </span>
      <motion.div
        className="d-grid d-md-flex flex-wrap align-content-center justify-content-evenly gap-5 mt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {partners.map((partner, i) => (
          <motion.span key={i} variants={itemVariants} className="d-flex align-items-center p-3 rounded-4 shadow-lg" style={{height: "12rem"}}>
            <img src={partner.href} alt={partner.name} width={170} />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Partner;
