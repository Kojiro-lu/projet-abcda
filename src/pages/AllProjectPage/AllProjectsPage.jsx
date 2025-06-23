import { useSearchParams } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./AllProjectsPage.scss";

const AllProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeType = searchParams.get("type") || "Tous";

  const projectTypes = [...new Set(projectsData.map((p) => p.type))];

  const filteredProjects =
    activeType && activeType !== "Tous"
      ? projectsData.filter((p) => p.type === activeType)
      : projectsData;

  const handleFilterClick = (type) => {
    if (type === activeType) {
      searchParams.delete("type");
    } else {
      searchParams.set("type", type);
    }
    setSearchParams(searchParams);
  };

  return (
    <section className="all-projects">
      <h1 className="all-projects__title">Tous les projets</h1>

      <div className="all-projects__filters">
        <button
          className={activeType === "Tous" ? "active" : ""}
          onClick={() => handleFilterClick("Tous")}
        >
          Tous
        </button>
        {projectTypes.map((type) => (
          <button
            key={type}
            className={activeType === type ? "active" : ""}
            onClick={() => handleFilterClick(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="all-projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            to={`/projets/${project.id}`}
          >
            {(project) => <h2>{project.title}</h2>}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsPage;
