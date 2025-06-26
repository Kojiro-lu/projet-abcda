import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";

const Carousel = ({ images = [], delay = 7000, variant = "default" }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, delay);
    return () => clearInterval(interval);
  }, [length, delay]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div
      className={`carousel ${variant}`}
      role="region"
      aria-label="Carrousel d’illustrations du site ABCDA"
    >
      <div
        className="carousel__content"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel__slide">
            <img
              src={typeof image === "string" ? image : image.src}
              alt={typeof image === "string" ? `Image ${index + 1}` : image.alt}
              loading="lazy"
              className="carousel__image"
            />
          </div>
        ))}
      </div>

      <button
        className="carousel__btn prev"
        onClick={prevSlide}
        aria-label="Image précédente"
      >
        <img
          src={arrowLeft}
          alt=""
          aria-hidden="true"
          className="carousel__arrow-icon"
        />
      </button>

      <button
        className="carousel__btn next"
        onClick={nextSlide}
        aria-label="Image suivante"
      >
        <img
          src={arrowRight}
          alt=""
          aria-hidden="true"
          className="carousel__arrow-icon"
        />
      </button>

      <div className="carousel__dots" role="tablist">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel__dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Aller à l'image ${idx + 1}`}
            aria-selected={idx === current}
            tabIndex={idx === current ? 0 : -1}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
