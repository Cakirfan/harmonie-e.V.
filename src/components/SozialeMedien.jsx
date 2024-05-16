import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Tooltip } from "bootstrap";

const SozialeMedien = () => {
  useEffect(() => {
    // Bootstrap tooltip'leri başlat
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const sozialIcons = [
    {
      name: "whatsapp",
      href: "https://wa.me/4915566051266",
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      className: "text-success",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/profile.php?id=61558626041473&locale=de_DE",
      icon: <FaFacebook />,
      title: "Facebook",
      className: "text-info",
    },
    {
      name: "twitter",
      href: "https://twitter.com/harmonieneuss",
      icon: <FaTwitter />,
      title: "Twitter",
      className: "text-primary",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
      title: "Instagram",
      className: "text-warning",
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@harmonieneuss?lang=de-DE",
      icon: <FaTiktok />,
      title: "Tiktok",
      className: "text-success",
    },
  ];

  return (
    <>
      <div className="col-12 col-md-6 d-flex justify-content-end my-auto">
        {sozialIcons.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            target="_blank"
            className={icon.className}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={icon.title}
            rel="noreferrer"
          >
            <button
              type="button"
              className="btn btn-sm btn-outline-danger mx-1"
            >
              {icon.icon}
            </button>
          </a>
        ))}
      </div>
    </>
  );
};

export default SozialeMedien;
