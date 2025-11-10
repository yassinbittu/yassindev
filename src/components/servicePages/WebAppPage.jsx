import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaServer, FaCloud } from "react-icons/fa";
import "./ServicePage.css";

const WebAppPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Dynamic Web Apps",
      icon: <FaLaptopCode className="icon" />,
    },
    {
      title: "Backend APIs",
      icon: <FaServer className="icon" />,
    },
    {
      title: "Cloud Integration",
      icon: <FaCloud className="icon" />,
    },
  ];

  return (
    <div className="service-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h1>Custom Web Application Development</h1>
      <p>
        I build dynamic and scalable web applications using the latest technologies, 
        integrating secure APIs, real-time features, and cloud services.
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
      <p>React.js, Node.js, Express, MongoDB, Firebase, AWS, Tailwind CSS</p>
    </div>
  );
};

export default WebAppPage;
