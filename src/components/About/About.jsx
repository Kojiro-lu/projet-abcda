import aboutData from "../../data/aboutData.json";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__text">
          <h2>{aboutData.title}</h2>
          {aboutData.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
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
