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
              {(p) => (
                <>
                  <h3>{p.title}</h3>
                  <div className="projects__infos">
                    <p>{p.ville}</p>
                    <p>{p.annee}</p>
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
