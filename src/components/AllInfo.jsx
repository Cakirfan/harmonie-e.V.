import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const AllInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    const filterInfo = () => {
      if (selectedCategory === "all") {
        // Tüm kategorilerde 'all' seçildiğinde
        return hauptInfo;
      } else if (selectedCategory === "newss") {
        // Yalnızca 'newss' kategorisi için 'situation' 'new' olanları filtrele
        return hauptInfo.filter((info) => info.situation === "new");
      } else {
        // Diğer kategoriler için sadece 'type' üzerinden filtrele
        return hauptInfo.filter((info) => info.type === selectedCategory);
      }
    };

    setFilteredInfo(filterInfo());
  }, [selectedCategory, hauptInfo]); // hauptInfo ve selectedCategory değiştiğinde tetiklenir

  // Metni belirli bir kelime sayısına göre kısaltan yardımcı fonksiyon
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const renderCategoryButtons = () => {
    const categories = [
      "all",
      "bildung",
      "dialog",
      "integration",
      "jugend",
      "newss",
    ];
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
      <div className="col mx-auto" key={index} style={{ minWidth: "24rem" }}>
        <Link
          to={`/detail/${info.id}`}
          className="custom-link text-decoration-none"
        >
          <div className="card custom-card overflow-hidden">
            <img
              src={info.image}
              className="card-img-top"
              alt="..."
              height={250}
            />
            <div className="card-body" style={{ height: "13rem" }}>
              <h5 className="card-title text-center fw-semibold">
                {info.title}
              </h5>
              <p className="card-text">{truncateText(info.desc, 50)}</p>
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
          {renderInfoCards()}
        </div>
      </div>
    </section>
  );
};

export default AllInfo;
