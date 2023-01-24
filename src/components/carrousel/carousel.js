import CarouselItem from "./carrouselItem";
import { useState, useEffect } from "react";
import CarouselControls from "../../carouselControls";
import "./carousel.css";

export const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: "translateX(${-currentSlide * 100}%)" }}
      >
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
      <CarouselControls />
    </div>
  );
};
