import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTshirt, FaHamburger, FaLaptop, FaShoppingBasket, FaGem } from "react-icons/fa";
import "./ServicePage.css";

const EcommercePage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Clothing & Fashion",
      icon: <FaTshirt className="icon" />,
    },
    {
      title: "Food Delivery",
      icon: <FaHamburger className="icon" />,
    },
    {
      title: "Electronics Store",
      icon: <FaLaptop className="icon" />,
    },
    {
      title: "Grocery & Essentials",
      icon: <FaShoppingBasket className="icon" />,
    },
    {
      title: "Jewelry & Luxury Items",
      icon: <FaGem className="icon" />,
    },
  ];

  return (
    <div className="service-detail">
      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h1>E-commerce Website Development</h1>
      <p>
        I build powerful e-commerce solutions with modern UI, integrated payment gateways, 
        product management systems, and secure backend APIs.
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
      <p>React.js, Node.js, Express, MongoDB, Stripe API, Tailwind CSS</p>
    </div>
  );
};

export default EcommercePage;
