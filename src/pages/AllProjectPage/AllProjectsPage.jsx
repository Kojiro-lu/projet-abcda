import { useSearchParams } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./AllProjectsPage.scss";
import Contact from "../../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

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
    <>
      <section className="all-projects">
        <Helmet>
          <title>
            Tous les projets – Cyril Bettremieux - ABCDA, architecte en Bretagne
          </title>
          <meta
            name="description"
            content="Découvrez tous les projets réalisés par ABCDA, cabinet d’architecture dirigé par Cyril Bettremieux : construction, rénovation, aménagement en Bretagne."
          />
          <meta
            property="og:title"
            content="Tous les projets – ABCDA Architecte"
          />
          <meta
            property="og:description"
            content="Explorez les projets d’architecture menés par Cyril Bettremieux (ABCDA) à travers la Bretagne. Logements, aménagements, rénovations…"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.abcda.fr/projets" />
          <meta property="og:image" content="/images/og-cover.webp" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Tous les projets – ABCDA Architecte"
          />
          <meta
            name="twitter:description"
            content="Découvrez les projets réalisés par le cabinet ABCDA : architecture sur mesure pour vos besoins en Bretagne."
          />
          <meta name="twitter:image" content="/images/og-cover.webp" />
        </Helmet>

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
      <Contact />
    </>
  );
};

export default AllProjectsPage;
