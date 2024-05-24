import React from "react";
import { motion } from "framer-motion";
import "react-modal-video/css/modal-video.min.css";
import { Button, Modal } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa"; // React Icons kullanılarak play ikonu eklendi
import { useNavigate } from "react-router-dom";

const UpperSection = ({ categoryDetails, isModalOpen, setModalOpen }) => {
  const navigate = useNavigate();

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
      className="upper-section container-fluid my-md-2 shadow-lg rounded-2 px-3 py-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="row">
        <div className="d-flex justify-content-center align-items-center mb-4 mb-md-5">
          <h2 className="text-center">{categoryDetails.titel}</h2>
          <Button variant="secondary position-absolute start-0 ms-5" onClick={() => navigate(-1)}>
            Zurück
          </Button>
        </div>
        <div className="row mx-auto">
          <div className="col-12 col-xl-7 text-content d-flex flex-column justify-content-center mb-3 order-1 order-xl-0">
            <p
              className="fs-5 text-justify px-md-2"
              style={{ textIndent: "2em" }}
            >
              {categoryDetails.desc2 || categoryDetails.desc}
            </p>
            <p
              className="fs-5 text-justify px-md-2"
              style={{ textIndent: "2em" }}
            >
              {categoryDetails.desc3 || ""}
            </p>
            <p
              className="fs-5 text-justify px-md-2"
              style={{ textIndent: "2em" }}
            >
              {categoryDetails.desc4 || ""}
            </p>
            <div>
              <small className="text-secondary ms-2">
                Die Veranstaltung fand am{" "}
                <span className="text-dark">
                  {categoryDetails.date || "..."}
                </span>{" "}
                statt.
              </small>
            </div>
          </div>
          <motion.div
            className="col-12 col-xl-5 video-content mb-3 position-relative"
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
                <Button onClick={() => setModalOpen(false)}>Schließen</Button>
              </Modal.Footer>
            </Modal>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpperSection;
