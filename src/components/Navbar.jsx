import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo-harmonie.jpeg";
import { NavLink } from "react-router-dom";
import ContactBar from "./ContactBar";
import { Offcanvas } from "bootstrap";
import { motion } from "framer-motion";

const Navbar = ({ setSelectedMenuItem }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const [logoWidth, setLogoWidth] = useState(110); // Logo genişliği için yeni state
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const offcanvasNavbarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowContactBar(false);
        setLogoWidth(windowWidth < 768 ? 50 : 70); // Adjust logo size on scroll and screen width
      } else {
        setShowContactBar(true);
        setLogoWidth(windowWidth < 768 ? 80 : 110); // Adjust logo size based on screen width
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial adjustment
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

  const closeNavbar = () => {
    setIsNavbarOpen(false); // Durumu güncelle

    // Offcanvas instance'ını direkt kullanarak kapat
    if (offcanvasNavbarRef.current) {
      const bsOffcanvasInstance = Offcanvas.getInstance(
        offcanvasNavbarRef.current
      );
      if (bsOffcanvasInstance) {
        bsOffcanvasInstance.hide();
      } else {
        // Offcanvas instance'ı bulunamadıysa, yeni bir instance oluştur ve kapat
        const bsOffcanvas = new Offcanvas(offcanvasNavbarRef.current);
        bsOffcanvas.hide();
      }
    }
  };

  const menuItems = [
    { name: "ÜBER UNS", path: "/uberUns" },
    { name: "DIALOG & KULTUR", path: "/dialog" },
    { name: "BILDUNG", path: "/bildung" },
    { name: "FLÜCHTLINGSARBEIT", path: "/migration" },
    { name: "JUGEND & SOZIALES", path: "/jugend" },
    { name: "AKTUELLES", path: "/aktuelles" },
    { name: "KONTAKT", path: "/kontakt" },
  ];


  return (
    <div className="fixed-top border-bottom border-danger border-5 mx-auto">
      <div className="bg-white d-none d-lg-block">
        {showContactBar && <ContactBar />}
      </div>
      <nav className="navbar navbar-expand-lg bg-white d-flex flex-column shadow-lg">
        <div className="col col-md-8 d-flex align-content-between justify-content-between ">
          <motion.div
            className="flex-grow-1"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 1,
              repeatDelay: 1,
            }}
          >
            <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
              <img
                src={logo}
                alt="Logo-Harmonie"
                width={logoWidth} // Logo genişliğini dinamik olarak ayarla
                className="rounded-2 ms-2"
              />
            </NavLink>
          </motion.div>

          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{ fontSize: windowWidth < 768 ? "0.75rem" : "1rem" }} // Adjust button font size based on screen width
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end d-lg-none w-50"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            ref={offcanvasNavbarRef} //
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menü
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {menuItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to={item.path}
                      onClick={closeNavbar}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="collapse navbar-collapse d-none d-lg-block flex-grow-0">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item, index) => (
                <li
                  className={`nav-item responsive-font-size text-center fw-semibold px-2 ${
                    index !== menuItems.length - 1 ? "border-end" : ""
                  }`}
                  key={index}
                  style={
                    index === menuItems.length - 1
                      ? { borderRight: "none" }
                      : {}
                  }
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={item.path}
                    onClick={() => {
                      setSelectedMenuItem(item.name);
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
