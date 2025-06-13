import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo ABCDA" />
        </Link>

        <nav className={`header__nav ${isOpen ? "is-open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projets
          </Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>

        <button className="header__burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
