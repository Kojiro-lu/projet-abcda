import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./SocialIcons.scss";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    </div>
  );
}

export default SocialIcons;
