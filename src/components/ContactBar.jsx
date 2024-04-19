import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactBar = () => {
  const socialMedia = [
    {
      name: "facebook",
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
    {
      name: "twitter",
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
  ];

  // Animasyon için varyantlar
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7, // Çocuk animasyonları arasındaki gecikme
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
        {/* Telefon ve E-mail animasyonları */}
        <motion.div className="d-flex me-5" variants={itemVariants}>
          <div className="ms-3 d-flex gap-2 fs-6">
            <span>
              <FaPhone />
            </span>
            <span className="text-danger">0111 / 999 999 99</span>
          </div>
          <span className="ms-3 fs-6">|</span>
          <div className="ms-3 d-flex gap-2 fs-6">
            <span>
              <FaEnvelope />
            </span>
            <span className="text-danger">info@harmonieneuss.de</span>
          </div>
        </motion.div>

        {/* Sosyal medya linkleri için animasyon */}
        <motion.div className="d-flex gap-3 ms-5 fs-6" variants={itemVariants}>
          {socialMedia.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              target="_blank"
              className="text-secondary"
            >
              {item.icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactBar;
