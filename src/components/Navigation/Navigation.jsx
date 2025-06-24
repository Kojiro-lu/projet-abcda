import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navigation.scss";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/#contact";
    } else {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`header__nav ${isOpen ? "is-open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Accueil
        </Link>
        <Link to="/projets" onClick={() => setIsOpen(false)}>
          Projets
        </Link>
        <a href="#contact" onClick={handleScrollToContact}>
          Contact
        </a>
      </nav>

      <button className="header__burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}

export default Navigation;
