import React from "react";

const Header = () => {
  return (
    <nav className="navbar nav-footer-back-color">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/src/assets/logo/logo.png"
            alt="Identidad Soberana"
            width="50"
            height="50"
          />
          <span className="ms-2 nav-title">Identidad Soberana</span>
        </a>
        <div className="social-icons">
          <a href="https://www.youtube.com" className="nav-title me-3">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com" className="nav-title me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" className="nav-title me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" className="nav-title">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
