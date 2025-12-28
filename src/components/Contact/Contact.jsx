import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfos from "./ContactInfos/ContactInfos";
import ContactMap from "./ContactMap/ContactMap";
import "./Contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contactez-moi</h2>
      <p className="contact__intro">
        Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à
        me contacter.
      </p>

      <div className="contact__container">
        <ContactForm
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <ContactInfos />
      </div>

      <ContactMap className="mobile-hidden" />
    </section>
  );
};

export default Contact;
