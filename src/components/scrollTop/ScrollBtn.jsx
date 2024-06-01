import React, { useState, useEffect } from "react";
import "./ScrollBtn.css";
import { BsCapslockFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const ScrollBtn = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Kullanıcının sayfayı aşağı kaydırdığını izlemek için bir event listener ekliyoruz
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Temizlik işlemi - bileşen çözüldüğünde event listener'ı kaldırıyoruz
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrollTop ${
        showScrollButton ? "active" : ""
      } bg-black border border-2 border-white`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon className="text-white fs-3" icon={faAnglesUp} />
    </div>
  );
};

export default ScrollBtn;
