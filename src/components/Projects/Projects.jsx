import projectsData from "../../data/projectsCardsData.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projets récents</h2>
      <div className="projects__grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project}>
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
