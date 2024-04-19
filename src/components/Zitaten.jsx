import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { zitaten } from "../helper/data";
import { motion } from "framer-motion";

SwiperCore.use([Autoplay]);


const Zitaten = () => {

  const defaultAvatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

  const swiperConfig = {
    spaceBetween: 30, // Adjust spacing between slides as needed
    slidesPerView: 1,
    autoplay: {
      delay: 9000, // Change delay for slide transition (in milliseconds)
      disableOnInteraction: false, // Allow manual swiping to pause autoplay
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      sm: {
        width: "75%",
      },
    },
  };

  return (
    <div className="container-fluid bg-success-subtle mt-5 py-5 shadow-lg">
      <Swiper {...swiperConfig}>
        {zitaten.map((zitat, i) => (
          <SwiperSlide key={i} className="bg-success-subtle">
            <motion.div
              className="d-flex flex-column align-items-center justify-content-center text-center mt-3 mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 1 }}
            >
              <img
                src={zitat.image || defaultAvatar}
                alt="Author"
                className="text-center rounded-circle border border-2 border-danger"
                style={{ width: "9rem", height: "9rem" }}
              />
              <div className="mt-3">
                <p className="fs-3 fw-semibold">
                  "<span>{zitat.zitat}</span>"
                </p>
                <h3>{zitat.autor}</h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Zitaten;
