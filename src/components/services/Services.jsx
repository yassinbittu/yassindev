import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import {
  FaShoppingCart,
  FaBriefcase,
  FaLaptopCode,
  FaGlobe,
  FaPaintBrush,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "E-commerce Website",
      description: "Modern online stores with payment gateway, cart, and product management systems.",
      icon: <FaShoppingCart className="icon" />,
      link: "/services/ecommerce",
    },
    {
      title: "Business Website",
      description: "Professional and responsive websites to represent your business online.",
      icon: <FaBriefcase className="icon" />,
      link: "/services/business",
    },
    {
      title: "Custom Web App",
      description: "Dynamic and scalable web applications built with the latest technologies.",
      icon: <FaLaptopCode className="icon" />,
      link: "/services/webapp",
    },
    {
      title: "Portfolio Website",
      description: "Personal websites to showcase your work, skills, and achievements.",
      icon: <FaGlobe className="icon" />,
      link: "/services/portfolio",
    },
    {
      title: "Poster Design",
      description: "Creative and eye-catching poster designs for events, promotions, and more.",
      icon: <FaPaintBrush className="icon" />,
      link: "/services/poster",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-link">
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
