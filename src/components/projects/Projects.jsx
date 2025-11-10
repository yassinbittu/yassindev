import React from "react";
import "./Projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      title: "QuickCart E-commerce App",
      image: project1,
      description:
        "A full-stack online store with product recommendations, cart, and admin dashboard.",
    },
    {
      title: "Business Website for SANA FASHION",
      image: project2,
      description:
        "Developed a stylish and mobile-friendly website for a local fashion business.",
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "Designed and built a responsive portfolio site to showcase my freelancing work.",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
