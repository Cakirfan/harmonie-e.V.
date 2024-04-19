import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";


const FotoSwiper = ({images = [], handleShow, setModalShow, modalShow, selectedImage }) => {

    const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mt-3"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleShow(image)}>
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ scale: 0.9 }}
              style={{ maxHeight: "15rem" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Foto Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FotoSwiper;
