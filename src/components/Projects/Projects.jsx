import projectsData from "../../data/projectsData.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projets récents</h2>
      <div className="projects__grid">
        {projectsData
          .slice(-6)
          .reverse()
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              to={`/projets/${project.id}`}
            >
              {(project) => (
                <>
                  <h2>{project.title}</h2>
                  <div className="projects__infos">
                    <p>{project.ville}</p>
                    <p>{project.annee}</p>
                  </div>
                </>
              )}
            </ProjectCard>
          ))}
      </div>
    </section>
  );
};

export default Projects;
