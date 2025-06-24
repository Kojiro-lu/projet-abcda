import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo ABCDA" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
