import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaLaptopCode, FaFileAlt } from "react-icons/fa";
import "./ServicePage.css";

const PortfolioPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Personal Portfolio",
      icon: <FaFileAlt className="icon" />,
    },
    {
      title: "Showcase Projects",
      icon: <FaLaptopCode className="icon" />,
    },
    {
      title: "Professional Profile",
      icon: <FaGlobe className="icon" />,
    },
  ];

  return (
    <div className="service-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h1>Portfolio Website Development</h1>
      <p>
        I create personal websites to showcase your work, skills, and achievements, 
        helping you stand out professionally.
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
      <p>React.js, HTML, CSS, JavaScript, Tailwind CSS, Netlify/Vercel</p>
    </div>
  );
};

export default PortfolioPage;
