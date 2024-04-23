import React from "react";
import { motion } from "framer-motion";
import "react-modal-video/css/modal-video.min.css";
import { Button, Modal } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa"; // React Icons kullanılarak play ikonu eklendi

const UpperSection = ({ categoryDetails, isModalOpen, setModalOpen }) => {
  if (!categoryDetails) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  };

  const videoSrc = categoryDetails.video; // Video URL is stored here
  const thumbnail = categoryDetails.images[0] || "default_thumbnail.jpg"; // Default or specified image thumbnail
  

  return (
    <motion.div
      className="upper-section container-fluid my-md-4 shadow-lg rounded-2 p-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="row">
        <h2 className="text-center mb-4">{categoryDetails.titel}</h2>
        <div className="col-12 col-md-7 text-content d-flex flex-column justify-content-center mb-3 h-100">
          <p className="fs-5 text-justify px-2" style={{ textIndent: "2em" }}>
            {categoryDetails.desc2 || categoryDetails.desc}
          </p>
          <p className="fs-5 text-justify px-2" style={{ textIndent: "2em" }}>
            {categoryDetails.desc3 || ""}
          </p>
          <div>
            <small className="text-secondary ms-2">
              Die Veranstaltung fand am{" "}
              <span className="text-dark">{categoryDetails.date}</span> statt.
            </small>
          </div>
        </div>
        <motion.div
          className="col-12 col-md-5 video-content mb-3 position-relative"
          variants={containerVariants}
        >
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-100 h-100 border border-3 border-dark"
            onClick={() => setModalOpen(true)}
            style={{ cursor: "pointer", width: "100%", maxHeight: "400px" }}
          />
          {videoSrc && (
            <FaPlayCircle
              className="play-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "4rem",
                pointerEvents: "none", // Bunu ekleyerek simgenin üzerine tıklama engellenir
              }}
            />
          )}
          <Modal
            show={isModalOpen}
            onHide={() => setModalOpen(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {videoSrc ? "Video Preview" : "Foto Preview"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {videoSrc ? (
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  style={{ width: "100%" }}
                ></video>
              ) : (
                <img
                  src={thumbnail}
                  alt="Video Thumbnail"
                  onClick={() => setModalOpen(true)}
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    maxHeight: "400px",
                  }}
                  height={600}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UpperSection;
