import React from "react";
export default function CarouselItem({ slide }) {
  return (
    <div className="carousel-item">
      <img src={slide} />
    </div>
  );
}
