import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navigation.scss";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projets" },
  { label: "Contact", to: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.to.startsWith("#")) {
      const section = document.getElementById(link.to.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/${link.to}`);
      }
    } else {
      navigate(link.to);
    }
  };

  return (
    <>
      <nav className={`header__nav ${isOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.to} onClick={handleLinkClick(link)}>
            {link.label}
          </a>
        ))}
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
