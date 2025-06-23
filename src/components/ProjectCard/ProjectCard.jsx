import "./ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, children, to }) => {
  return (
    <Link to={to} className="project-card-link">
      <article className="project-card">
        {project.imageCards && (
          <img
            src={project.imageCards}
            alt={project.title || "Project image"}
          />
        )}
        <div className="project-card__overlay">
          <span className="project-card__overlay-btn">Voir le projet</span>
        </div>
        <div className="project-card__content">{children(project)}</div>
      </article>
    </Link>
  );
};

export default ProjectCard;
