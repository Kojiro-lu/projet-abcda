import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = ({ isSubmitted, setIsSubmitted }) => {
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <input type="text" name="nom" placeholder="Nom" required />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <textarea name="message" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>

      {isSubmitted && (
        <p className="contact-form__success">
          Merci pour votre message ! Je vous répondrai rapidement.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
