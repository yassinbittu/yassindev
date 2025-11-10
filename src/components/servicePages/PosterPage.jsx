import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPaintBrush, FaPalette, FaImage } from "react-icons/fa";
import "./ServicePage.css";

const PosterPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Event Posters",
      icon: <FaPaintBrush className="icon" />,
    },
    {
      title: "Promotional Posters",
      icon: <FaPalette className="icon" />,
    },
    {
      title: "Creative Designs",
      icon: <FaImage className="icon" />,
    },
  ];

  return (
    <div className="service-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h1>Poster Design Services</h1>
      <p>
        I create creative and eye-catching poster designs for events, promotions, and marketing campaigns, 
        helping your brand stand out visually.
      </p>

      <h3>Categories I design:</h3>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <h4>{category.title}</h4>
          </div>
        ))}
      </div>

      <h3>Tools & Tech:</h3>
      <p>Adobe Photoshop, Illustrator, Canva, Figma</p>
    </div>
  );
};

export default PosterPage;
