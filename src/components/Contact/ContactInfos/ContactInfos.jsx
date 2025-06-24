import "./ContactInfos.scss";

const ContactInfos = () => {
  return (
    <div className="contact-infos">
      <p>
        <strong>Mail :</strong> contact@abcda.fr
      </p>
      <p>
        <strong>Téléphone :</strong> 06 12 34 56 78
      </p>
      <p>
        <strong>Adresse :</strong> 12 Rue des Architectes, 35000 Rennes
      </p>

      <div className="contact-infos__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactInfos;
