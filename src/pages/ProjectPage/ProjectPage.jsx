import { useParams, Navigate, useNavigate } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import Carousel from "../../components/Carousel/Carousel";
import "./ProjectPage.scss";
import Contact from "../../components/Contact/Contact";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    alert("Fonction partage à venir...");
  };

  if (!project) {
    return <Navigate to="/404" replace />;
  }
  return (
    <main className="project-page">
      <div className="project-page__carousel">
        <Carousel images={project.carouselImages} />
      </div>

      <section className="project-page__infos">
        <h1>{project.title}</h1>
        <ul>
          <li>
            <strong>Année :</strong> {project.annee}
          </li>
          <li>
            <strong>Ville :</strong> {project.ville}
          </li>
          <li>
            <strong>Surface :</strong> {project.surface} m²
          </li>
          <li>
            <strong>Type :</strong> {project.type}
          </li>
        </ul>
      </section>

      <section className="project-page__description">
        <p>{project.description}</p>
      </section>

      <section className="project-page__gallery">
        <h2>Plans du projet</h2>
        <div className="project-page__gallery-grid">
          {project.plans.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Plan ${index + 1}`}
              className="project-page__plan"
            />
          ))}
        </div>
      </section>

      <section className="project-page__actions">
        <button className="project-page__btn" onClick={handleBack}>
          Retour aux projets
        </button>
        <button
          className="project-page__btn project-page__btn--share"
          onClick={handleShare}
        >
          Partager
        </button>
      </section>
      <Contact />
    </main>
  );
};

export default ProjectPage;
