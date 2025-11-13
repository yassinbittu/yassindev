import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mohammed Yassin | All Rights Reserved</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          {/* <a href="#projects">Projects</a> */}
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
