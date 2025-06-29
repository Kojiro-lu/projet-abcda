import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import projectsData from "../../data/projectsData.json";
import Carousel from "../../components/Carousel/Carousel";
import Contact from "../../components/Contact/Contact";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import "./ProjectPage.scss";
import { Helmet } from "react-helmet-async";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const project = projectsData.find((p) => p.id === id);
  if (!project) return <Navigate to="/404" replace />;

  const openGallery = (index) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const nextImage = () => {
    setGalleryIndex((prevIndex) => (prevIndex + 1) % project.plans.length);
  };

  const prevImage = () => {
    setGalleryIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.plans.length) % project.plans.length
    );
  };

  const handleBack = () => navigate(-1);
  const handleShare = () => alert("Fonction partage à venir...");

  return (
    <main className="project-page">
      <Helmet>
        <title>{`${project.title} – Cyril Bettremieux - ABCDA, architecte en Bretagne`}</title>
        <meta
          name="description"
          content={`Projet de ${project.type.toLowerCase()} situé à ${
            project.ville
          }, réalisé par Cyril Bettremieux, gérant d'ABCDA, en ${
            project.annee
          }. Surface : ${project.surface} m².`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${project.title} – Cyril Bettremieux, ABCDA Architecte`}
        />
        <meta
          property="og:description"
          content={`Projet de ${project.type.toLowerCase()} à ${
            project.ville
          }, ${
            project.surface
          } m², par Cyril Bettremieux (ABCDA - Architecte).`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.abcda.fr/projets/${project.id}`}
        />
        <meta property="og:image" content={project.carouselImages?.[0]} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} – Cyril Bettremieux, ABCDA Architecte`}
        />
        <meta
          name="twitter:description"
          content={`Découvrez ce projet de ${project.type.toLowerCase()} à ${
            project.ville
          } par Cyril Bettremieux - ABCDA, cabinet d’architecture.`}
        />
        <meta name="twitter:image" content={project.carouselImages?.[0]} />
      </Helmet>

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

      <div className="project-page__carousel">
        <Carousel images={project.carouselImages} variant="small" />
      </div>

      <section className="project-page__description">
        <h2>Description du Projet</h2>
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
              onClick={() => openGallery(index)}
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

      {galleryOpen && (
        <PhotoGallery
          images={project.plans}
          currentIndex={galleryIndex}
          onClose={closeGallery}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      <Contact />
    </main>
  );
};

export default ProjectPage;
