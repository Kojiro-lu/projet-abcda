import aboutData from "../../data/aboutData.json";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>{aboutData.title}</h2>
      <div className="about__container">
        <div className="about__text">
          {aboutData.description.map((paragraph, index) => (
            <p
              key={index}
              className={index === 1 || index === 2 ? "mobile-hidden" : ""}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about__image">
          <img src={aboutData.image} alt="Portrait de l'architecte" />
        </div>
      </div>
    </section>
  );
};

export default About;
