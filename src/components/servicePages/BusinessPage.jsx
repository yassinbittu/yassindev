import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaGlobe, FaLaptopCode } from "react-icons/fa";
import "./ServicePage.css";

const BusinessPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Professional Website",
      icon: <FaBriefcase className="icon" />,
    },
    {
      title: "Corporate Website",
      icon: <FaGlobe className="icon" />,
    },
    {
      title: "Custom Web App",
      icon: <FaLaptopCode className="icon" />,
    },
  ];

  return (
    <div className="service-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h1>Business Website Development</h1>
      <p>
        I build professional and responsive websites to represent your business online.
      </p>

      <h3>Categories I build:</h3>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h4>{category.title}</h4>
          </div>
        ))}
      </div>

      <h3>Tech Stack:</h3>
      <p>React.js, Node.js, Express, MongoDB, Tailwind CSS</p>
    </div>
  );
};

export default BusinessPage;
