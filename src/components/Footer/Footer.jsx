import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link to="/" className="footer__link">
          Accueil
        </Link>
        <Link to="/projets" className="footer__link">
          Projets
        </Link>
        <Link to="/contact" className="footer__link">
          Contact
        </Link>
      </nav>

      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Ton Client. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
