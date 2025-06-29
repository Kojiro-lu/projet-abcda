import Carousel from "../Carousel/Carousel";
import carouselData from "../../data/carouselData.json";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <Carousel images={carouselData} delay={7000} />
        <div className="hero__caption">
          <h1>
            Cyril Bettremieux, architecte DPLG à la tête d'ABCDA, vous
            accompagne dans la rénovation, l’extension ou la construction de
            votre maison en Bretagne.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
