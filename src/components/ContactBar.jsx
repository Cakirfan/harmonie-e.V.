import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "bootstrap";

const ContactBar = () => {
  const socialMedia = [
    {
      name: "whatsapp",
      href: "https://wa.me/4915566051266",
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      className: "text-success",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/profile.php?id=61558626041473&locale=de_DE",
      icon: <FaFacebook />,
      title: "Facebook",
      className: "text-info",
    },
    {
      name: "twitter",
      href: "https://twitter.com/harmonieneuss",
      icon: <FaTwitter />,
      title: "Twitter",
      className: "text-primary",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
      title: "Instagram",
      className: "text-warning",
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@harmonieneuss?lang=de-DE",
      icon: <FaTiktok />,
      title: "Tiktok",
      className: "text-success",
    },
  ];

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
        <motion.div className="d-flex me-5" variants={itemVariants}>
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
        <motion.div className="d-flex gap-2 ms-5 fs-6" variants={itemVariants}>
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className={item.className}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={item.title}
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
              >
                {item.icon}
              </button>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactBar;
