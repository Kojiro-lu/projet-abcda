import "./ContactMap.scss";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        allowFullScreen=""
        loading="lazy"
        title="Localisation ABCDA"
      ></iframe>
    </div>
  );
};

export default ContactMap;
