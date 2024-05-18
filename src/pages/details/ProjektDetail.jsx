import React, { useEffect, useState } from "react";
import { projekte } from "../../helper/data";
import UpperSection from "../../components/UpperSection";
import FotoSwiper from "../../components/FotoSwiper";
import { useParams } from "react-router-dom";

const ProjektDetail = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams(); // Grab the category ID from the URL
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const details = projekte.find((info) => info.id.toString() === id);
    if (details) {
      setCategoryDetails(details);
      console.log(details); // Log the fetched details directly
    } else {
      console.log("No details found for id:", id);
    }
  }, [id]);

  if (!categoryDetails) {
    return <div>Loading...</div>; // Or some error message
  }

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

export default ProjektDetail;
