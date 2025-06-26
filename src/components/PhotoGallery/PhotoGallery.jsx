import { useEffect } from "react";
import "./PhotoGallery.scss";

const PhotoGallery = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="photo-gallery">
      <div className="photo-gallery__overlay" onClick={onClose} />
      <div className="photo-gallery__content">
        <button className="photo-gallery__close" onClick={onClose}>
          &times;
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button className="photo-gallery__prev" onClick={onPrev}>
          &larr;
        </button>
        <button className="photo-gallery__next" onClick={onNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
