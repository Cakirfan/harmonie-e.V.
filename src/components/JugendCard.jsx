import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const JugendCard = () => {
  const [jugendData, setJugendData] = useState([]);

  useEffect(() => {
    const JugendInfos = hauptInfo.filter((info) => info.type === "jugend");
    setJugendData(JugendInfos);
  }, []);

  // Metni belirli bir kelime sayısına göre kısaltan yardımcı fonksiyon
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
      {jugendData.map((item) => (
        <div
          className="col mx-auto"
          key={item.id}
          style={{ minWidth: "24rem" }}
        >
          <Link
            to={`/jugend/${item.id}`}
            className="custom-link text-decoration-none"
          >
            <div
              className="card custom-card overflow-hidden pointer-event"
              style={{ minWidth: "18rem" }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                height={250}
              />
              <div className="card-body" style={{ height: "13rem" }}>
                <h5 className="card-title text-center fw-semibold">
                  {item.titel}
                </h5>
                <p className="card-text">
                  {truncateText(item.desc, 40)}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Zuletzt aktualisiert vor {item.time} Minuten
                </small>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JugendCard;
