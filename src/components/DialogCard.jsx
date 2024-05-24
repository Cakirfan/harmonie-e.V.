import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const DialogCard = () => {
  const [dialogData, setDialogData] = useState([]);

  useEffect(() => {
    const dialogInfos = hauptInfo.filter((info) => info.type === "dialog");
    setDialogData(dialogInfos);
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
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
      {dialogData.map((item) => (
        <div
          className="col mx-auto"
          key={item.id}
          style={{ minWidth: "24rem" }}
        >
          <Link
            to={`/dialog/${item.id}`}
            className="custom-link text-decoration-none"
          >
            <div className="card custom-card overflow-hidden pointer-event">
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                height={250}
              />
              <div
                className="card-body overflow-y-hidden"
                style={{ height: "13rem" }}
              >
                <h5 className="card-title text-center fw-semibold">
                  {item.titel}
                </h5>
                <p className="card-text">{truncateText(item.desc, 40)}</p>
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

export default DialogCard;
