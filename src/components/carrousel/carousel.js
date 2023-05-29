import CarouselItem from "./carrouselItem";
import { useRef, useState, useEffect } from "react";
import CarouselControls from "./carouselControls";
import "./carousel.css";
import CarouselIndicator from "./carouselIndicators";

const Carousel = ({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    // if (autoplay) {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, interval);
    //}
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        //style={{ transform: "translateX(${-currentSlide * 100}%)" }}
      >
        {/* {slides.map((slide, index) => ( */}
        <CarouselItem
          slide={slides[currentSlide]}
          //p=-key={index}
          stopSlide={stopSlideTimer}
          startSlide={startSlideTimer}
        />
        {/* ))} */}
      </div>
      {indicators && (
        <CarouselIndicator
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
      )}
      {controls && <CarouselControls prev={prev} next={next} />}
    </div>
  );
};

export default Carousel;
