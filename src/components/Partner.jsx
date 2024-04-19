import React from "react";
import { motion } from "framer-motion";


const Partner = () => {
  const partners = [
    {
      name: "",
      logo: "https://cdn.pixabay.com/photo/2024/01/30/08/53/ai-generated-8541533_640.png",
      href: "",
    },
    {
      name: "",
      logo: "https://cdn.pixabay.com/photo/2017/08/24/07/40/annotation-2675672_640.png",
      href: "",
    },
    {
      name: "",
      logo: "https://cdn.pixabay.com/photo/2024/01/30/08/53/ai-generated-8541531_640.png",
      href: "",
    },
    {
      name: "",
      logo: "https://cdn.pixabay.com/photo/2024/02/09/09/52/pen-8562720_1280.png",
      href: "",
    },
    {
      name: "",
      logo: "https://cdn.pixabay.com/photo/2024/02/16/20/02/lawyer-8578265_640.png",
      href: "",
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
      <span className="bg-warning text-white py-2 px-3 fw-semibold mx-auto">
        PARTNER
      </span>
      <motion.div
        className="d-grid d-md-flex flex-wrap align-content-center justify-content-evenly gap-5 mt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {partners.map((partner, i) => (
          <motion.span key={i} variants={itemVariants}>
            <img src={partner.logo} alt={partner.name} width={150} />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Partner;
