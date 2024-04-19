import React, { useEffect, useState } from "react";
import { hauptInfo } from "../helper/data";
import { Link } from "react-router-dom";

const BildungCard = () => {

  const [bildungData, setBildungData] = useState([]);

  useEffect(() => {
    const bildungInfos = hauptInfo.filter((info) => info.type === "bildung");
    setBildungData(bildungInfos);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
      {bildungData.map((item) => (
        <div className="col" key={item.id}>
          <Link
            to={`/bildung/${item.id}`}
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

export default BildungCard;
