import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const DialogCard = () => {

  const [dialogData, setDialogData] = useState([]);

  useEffect(() => {
    const dialogInfos = hauptInfo.filter((info) => info.type === "dialog");
    setDialogData(dialogInfos);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
      {dialogData.map((item) => (
        <div className="col" key={item.id}>
          <Link
            to={`/dialog/${item.id}`}
            className="custom-link text-decoration-none"
          >
            <div
              className="card custom-card overflow-hidden pointer-event"
              style={{ minWidth: "18rem" }}
            >
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">
                  {item.titel}
                </h5>
                <p className="card-text">{item.desc}</p>
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
