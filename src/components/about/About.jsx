import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-tagline">
        <span className= "desigin">Design </span>→ {" "}
        <span className="develop">Develop</span> → {" "}
        <span className="deliver">Deliver</span>
        </p>

        <p className="about-text">
          I’m a passionate <strong>Full Stack Developer</strong> dedicated to turning creative ideas into interactive, modern, and user-friendly digital experiences. 
          I focus on building responsive web applications that blend <strong>beautiful design</strong> with <strong>powerful functionality</strong>.
        </p>

        <p className="about-text">
          My goal is to provide every client with a <strong>friendly experience</strong>, 
          delivering high-quality solutions <strong>on time</strong> and at the <strong>best possible price</strong>. 
          I believe in understanding your needs first, crafting the perfect design, developing it efficiently, 
          and delivering results that exceed expectations.
        </p>

        <p className="about-text">
          Whether it’s a business website, portfolio, or custom web app — I’m here to bring your vision to life with clean code, 
          smooth animations, and attention to every detail.
        </p>
        <a href="#contact" className="hire-btn">Get Me</a>
      </div>
    </section>
  );
}
