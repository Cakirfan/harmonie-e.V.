import React, { useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Kontakt = () => {
  // Animasyon varyantları
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },
  };

  const socialIcons = [
    { href: "/", icon: <FaFacebookF /> },
    { href: "/", icon: <FaInstagram /> },
    { href: "/", icon: <FaTwitter /> },
    { href: "/", icon: <FaLinkedin /> },
  ];

  return (
    <motion.section
      className="container-fluid mt-md-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="row col-md-8 mx-auto justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <ContactInfo />
          <ContactDetails />
          <SocialIcons socialIcons={socialIcons} />
        </div>
        <div className="col-sm-12 col-lg-6">
          <ContactForm />
        </div>
      </div>
      <hr className="col-md-9 col-lg-8 mx-auto border-3 shadow border-danger my-5 px-2" />
      <LocationMap />
    </motion.section>
  );
};

const ContactInfo = () => (
  <section className="py-4 px-4 mt-3 bg-dark text-white rounded-2">
    <p>
      <span className="fw-semibold">Adresse: </span>Zufuhrstraße 2, 41462 Neuss
    </p>
    <p>
      <span className="fw-semibold">E-mail: </span>info@harmonieneuss.de
    </p>
    <p>
      <span className="fw-semibold">Telefon: </span>+49 123 456 789
    </p>
  </section>
);

const ContactDetails = () => (
  <div className="bg-dark text-white px-4 py-4 my-3 rounded-2">
    <p>
      Für Ihre Wünsche und Anregungen rufen Sie bitte unser Telefon an, senden
      Sie eine E-Mail oder füllen Sie das Formular aus.
    </p>
  </div>
);

const SocialIcons = ({ socialIcons }) => {
  return (
    <div className="rounded-2 overflow-hidden py-2 mb-3">
      <div className="bg-dark text-white p-4 pt-3">
        <p>
          Wir freuen uns auf jegliche Art der Kontaktaufnahme! Jede/r ist auf
          eine Tasse Kaffee/Tee eingeladen. Anfragen für Veranstaltungen, Kurse
          und Kooperationen sind besonders willkommen.
        </p>
        <p>Wir freuen auf Sie!</p>
      </div>

      <div className="bg-dark d-flex align-items-center justify-content-center gap-3 pb-4">
        {socialIcons.map((icon, index) => (
          <Link
            key={index}
            to={icon.href}
            className="text-decoration-none text-white border rounded-circle d-inline-flex justify-content-center align-items-center"
            style={{ width: "30px", height: "30px" }}
          >
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    tel: "",
    betreff: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Öğe animasyonları için varyantlar
  const itemVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.REACT_APP_EMAILJS_USER_ID}`,
        }
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toastSuccessNotify("E-mail başarıyla gönderildi!");
          // Formu sıfırla
          setFormData({
            from_name: "",
            email: "",
            tel: "",
            betreff: "",
            message: "",
          });
        },
        (error) => {
          console.log("Email sending error:", error.text);
          toastErrorNotify("E-mail gönderilirken hata oluştu.");
        }
      );
  };

  return (
    <motion.div
      className="border rounded-2 overflow-hidden bg-white mt-3"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      <h6 className="bg-dark text-white py-2 px-3">
        LASSEN SIE UNS EINE NACHRICHT
      </h6>
      <div className="bg-danger-subtle p-4">
        <form ref={form} onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-3">
            <label htmlFor="from_name" className="form-label">
              Vorname - Nachname <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-Mail <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Telephone input */}
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Telefon <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              required
            />
          </div>
          {/* Subject input */}
          <div className="mb-3">
            <label htmlFor="betreff" className="form-label">
              Betreff <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="betreff"
              name="betreff"
              value={formData.betreff}
              onChange={handleChange}
              required
            />
          </div>
          {/* Description textarea */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Ihre Nachricht <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" value="Send" className="btn btn-dark">
            Senden
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const LocationMap = () => (
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.865883288594!2d6.685873715746154!3d51.19844737958526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c9c2e6b3cd57%3A0x42307a4ff4d34f0!2sZufuhrstra%C3%9Fe%202%2C%2041462%20Neuss%2C%20Germany!5e0!3m2!1sen!2sus!4v1660046745621!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Kontakt;
