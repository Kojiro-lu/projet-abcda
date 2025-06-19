// ProjectCard.jsx
import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project, children }) => {
  return (
    <article className="project-card">
      {project.image && (
        <img src={project.image} alt={project.title || "Project image"} />
      )}
      <div className="project-card__overlay">
        <span className="project-card__overlay-btn">Voir le projet</span>
      </div>
      <div className="project-card__content">{children(project)}</div>
    </article>
  );
};

export default ProjectCard;
