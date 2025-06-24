import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Une erreur est survenue. Merci de réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Merci de vérifier votre connexion.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contactez-moi</h2>
      <p className="contact__intro">
        Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à
        me contacter.
      </p>

      <div className="contact__container">
        {/* Formulaire */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input type="text" name="nom" placeholder="Nom" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea
            name="message"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit">Envoyer</button>

          {isSubmitted && (
            <p className="contact__success">
              Merci pour votre message ! Je vous répondrai rapidement.
            </p>
          )}
        </form>

        {/* Infos de contact */}
        <div className="contact__infos">
          <p>
            <strong>Mail :</strong> contact@abcda.fr
          </p>
          <p>
            <strong>Téléphone :</strong> 06 12 34 56 78
          </p>
          <p>
            <strong>Adresse :</strong> 12 Rue des Architectes, 35000 Rennes
          </p>

          <div className="contact__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen=""
          loading="lazy"
          title="Localisation ABCDA"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
