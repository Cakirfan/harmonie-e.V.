import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const FotoSwiper = ({ categoryDetails = [] }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const videoRefs = useRef([]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  const handleShow = (index) => {
    // Pause all videos before opening the modal
    videoRefs.current.forEach((video) => video && video.pause());
    setSelectedMediaIndex(index);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handlePrev = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categoryDetails.images.length - 1
    );
  };

  const handleNext = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex < categoryDetails.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    if (modalShow && selectedMediaIndex !== null) {
      // Perform any additional actions after the modal shows and media index is set
    }
  }, [modalShow, selectedMediaIndex]);

  const renderMedia = (media, index) => {
    const handleClick = () => handleShow(index);

    if (isVideo(media)) {
      return (
        <SwiperSlide key={index} onClick={handleClick}>
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Save reference
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
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          // 576px'ten itibaren küçük ekranlar için
          576: {
            slidesPerView: 2,
          },
          // 768px'ten itibaren orta ekranlar için
          768: {
            slidesPerView: 4,
          },
        }}
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
        className="modal-with-buttons"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Media Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative">
          <Button
            variant="secondary"
            onClick={handlePrev}
            className="overlay-button left"
          >
            &lt;
          </Button>
          {selectedMediaIndex !== null && (
            <>
              {isVideo(categoryDetails.images[selectedMediaIndex]) ? (
                <video controls autoPlay className="img-fluid">
                  <source
                    src={categoryDetails.images[selectedMediaIndex]}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <motion.img
                  src={categoryDetails.images[selectedMediaIndex]}
                  alt="Selected"
                  className="img-fluid w-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </>
          )}
          <Button
            variant="secondary"
            onClick={handleNext}
            className="overlay-button right"
          >
            &gt;
          </Button>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .overlay-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          z-index: 10;
        }
        .overlay-button.left {
          left: 10px;
        }
        .overlay-button.right {
          right: 10px;
        }
        .modal-with-buttons .modal-body {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default FotoSwiper;
