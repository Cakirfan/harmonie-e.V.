import React from "react";
import { FaQuestion } from "react-icons/fa";
import "./InfoBogen.css"

const InfoBogen = () => {
  return (
    
      <section className="bg-warning btn-help position-absolute z-3" style={{top: "8.5rem", left: "1.5rem"}}>
        <FaQuestion className="i fs-5"  />
        <div className="text-section">
          <h5 className="fw-semibold text-white">TITEL</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            itaque doloremque quaerat inventore porro dignissimos et quis, vitae
            nemo vero dolorum velit, cumque, voluptates nihil nam accusamus
            nulla rerum cupiditate?
          </p>
        </div>
      </section>
    
  );
};

export default InfoBogen;
