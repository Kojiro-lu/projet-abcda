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
            ABCDA, votre architecte pour vos projets de rénovation et
            construction.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
