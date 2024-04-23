import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hauptInfo } from "../../helper/data";
import UpperSection from "../../components/UpperSection";
import FotoSwiper from "../../components/FotoSwiper";

const AllInfoDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { categoryId } = useParams(); // Grab the category ID from the URL
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const details = hauptInfo.find((info) => info.id.toString() === categoryId);
    setCategoryDetails(details);
    console.log(categoryDetails);
  }, [categoryId]);

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
      <div className="col col-md-12 mx-auto">
        <FotoSwiper categoryDetails={categoryDetails} />
      </div>
    </div>
  );
};

export default AllInfoDetails;
