import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hauptInfo } from "../../helper/data";
import UpperSection from "../../components/UpperSection";
import FotoSwiper from "../../components/FotoSwiper";

const JugendDetail = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams(); // Grab the category ID from the URL
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const details = hauptInfo.find((info) => info.id.toString() === id);
    setCategoryDetails(details);
    console.log(categoryDetails);
  }, [id]);

  return (
    <div
      className="d-flex flex-column align-items-center my-md-5"
      style={{ marginTop: "-2rem" }}
    >
      <div className="row">
        <div className="col col-md-8 mx-auto">
          <UpperSection
            categoryDetails={categoryDetails}
            setModalOpen={setModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
      <div className="col col-md-12 mx-auto">
        <FotoSwiper categoryDetails={categoryDetails} />
      </div>
    </div>
  );
};

export default JugendDetail;
