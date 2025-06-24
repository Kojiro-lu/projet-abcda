import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups ! Cette page n'existe pas.</p>
      <Link to="/" className="notfound__link">
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;
