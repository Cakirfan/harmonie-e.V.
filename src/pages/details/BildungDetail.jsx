import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hauptInfo } from "../../helper/data";
import UpperSection from "../../components/UpperSection";
import FotoSwiper from "../../components/FotoSwiper";

const BildungDetail = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const { id } = useParams(); // Grab the category ID from the URL
    const [categoryDetails, setCategoryDetails] = useState(null);

    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
      const details = hauptInfo.find((info) => info.id.toString() === id);
      setCategoryDetails(details);
      console.log(categoryDetails);
    }, [id]);

    const handleShow = (imgSrc) => {
      setSelectedImage(imgSrc);
      setModalShow(true);
    };

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <div className="row">
        <div className="col col-md-8 mx-auto">
          <UpperSection
            categoryDetails={categoryDetails}
            setModalOpen={setModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
      <div className="col col-md-10 mx-auto">
        <FotoSwiper
          images={categoryDetails ? categoryDetails.images : []}
          handleShow={handleShow}
          selectedImage={selectedImage}
          setModalShow={setModalShow}
          modalShow={modalShow}
        />
      </div>
    </div>
  );
};

export default BildungDetail;
