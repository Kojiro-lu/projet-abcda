import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page introuvable – ABCDA</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Cette page n'existe pas ou a été déplacée. Rendez-vous sur le site ABCDA pour découvrir nos projets d'architecture en Bretagne."
        />
      </Helmet>

      <div className="notfound">
        <h1>404</h1>
        <p>Oups ! Cette page n'existe pas.</p>
        <Link to="/" className="notfound__link">
          Retour à l’accueil
        </Link>
      </div>
    </>
  );
};

export default NotFound;
