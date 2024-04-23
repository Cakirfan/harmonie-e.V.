import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";

const FotoSwiper = ({ categoryDetails = [] }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const videoRefs = useRef([]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  const handleShow = (media, type) => {
    // Video açılmadan önce diğer tüm videoları durdur
    videoRefs.current.forEach((video) => video && video.pause());
    setSelectedMedia({ file: media, type });
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const renderMedia = (media, index) => {
    const handleClick = () =>
      handleShow(media, isVideo(media) ? "video" : "image");

    if (isVideo(media)) {
      return (
        <SwiperSlide key={index} onClick={handleClick}>
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Referansı kaydet
            src={media}
            controls
            style={{ width: "100%", maxHeight: "15rem" }}
            muted
          />
        </SwiperSlide>
      );
    } else {
      return (
        <SwiperSlide key={index} onClick={handleClick}>
          <motion.img
            src={media}
            alt={`Slide ${index + 1}`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            whileHover={{ scale: 0.9 }}
            style={{ maxHeight: "15rem" }}
          />
        </SwiperSlide>
      );
    }
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
        style={{
          cursor: "pointer",
        }}
      >
        {categoryDetails?.images.map(renderMedia)}
      </Swiper>
      <Modal
        show={modalShow}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Media Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMedia?.type === "video" ? (
            <video controls autoPlay className="img-fluid">
              <source src={selectedMedia.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <motion.img
              src={selectedMedia?.file}
              alt="Selected"
              className="img-fluid w-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FotoSwiper;
