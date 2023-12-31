import React from "react";
import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="nav-footer-back-color text-center text-lg-start p-3">
      <div className="text-center mb-1 nav-title">
        Gustavo Salle Presidente 2024
      </div>
      <div className="text-center nav-title">
        <a className="text-decoration-none" href="https://identidadsoberana.org/">
          <img 
            src={Logo}
            alt="Identidad Soberana" 
            style={{ height: '100px' }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

