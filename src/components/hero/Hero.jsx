import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero-image.png"; 
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h3>Hello, I'm</h3>
        <h1><span>Yassin</span></h1>
        <h2>Full Stack Developer</h2>
        <p>
          I design and build beautiful, modern websites for businesses,
          startups, personal brands, and posters. Let’s bring your idea to life!
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hire-btn">Get Me</a>
          <div className="social-icons">
            <a href="https://chat.whatsapp.com/GmufFiDhunm3SnVVaRqZUE" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/mohammed-yassin-77a056260/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yassinbittu" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Yassin Developer" />
      </div>
    </section>
  );
};

export default Hero;
