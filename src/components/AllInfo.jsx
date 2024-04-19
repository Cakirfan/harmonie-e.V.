import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const AllInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    // Filtrelenmiş bilgileri güncellerken sadece gerekli durumlarda yapılacak.
    const filterInfo = () => {
      if (selectedCategory === "all") {
        return hauptInfo;
      } else {
        return hauptInfo.filter((info) => info.type === selectedCategory);
      }
    };

    setFilteredInfo(filterInfo());
  }, [selectedCategory]);

  // Her kategori için bir buton render eden fonksiyon
  const renderCategoryButtons = () => {
    const categories = ["all", "bildung", "dialog", "jugend", "newss"];
    return categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`btn fw-semibold fs-4 border mb-2 border-1 shadow-lg ${
          selectedCategory === category ? "active-button shadow-none" : ""
        }`}
        style={{ minWidth: "9rem" }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ));
  };

  // Info kartlarını render eden fonksiyon
  const renderInfoCards = () => {
    return filteredInfo.map((info, index) => (
      <div className="col" key={index}>
        <Link
          to={`/detail/${info.id}`}
          className="custom-link text-decoration-none"
        >
          <div className="card custom-card overflow-hidden">
            <img src={info.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-semibold">
                {info.title}
              </h5>
              <p className="card-text">{info.desc}</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Zuletzt aktualisiert vor {info.time} Minuten
              </small>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <section className="row d-flex justify-content-center mt-md-3 mx-auto">
      <div className="col col-md-9 col-lg-8 button-group d-flex flex-wrap justify-content-evenly">
        {renderCategoryButtons()}
      </div>
      <div className="col-sm-12 col-md-9 col-lg-8">
        <hr className="border-3 shadow border-danger my-5" />
      </div>
      <div className="col col-md-9 col-lg-8">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {renderInfoCards()}
        </div>
      </div>
    </section>
  );
};

export default AllInfo;
