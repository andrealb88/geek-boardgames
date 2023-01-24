import React, { useState } from "react";
import "./home.css";
import Carousel from "../../components/carrousel/carousel";

export function Home() {
  const slides = [
    "https://i.ytimg.com/vi/DCOICaqQoEY/maxresdefault.jpg",
    "https://unfilteredgamer.com/wp-content/uploads/2022/03/terraforming-mars-ares-expedition-review-header.jpg",
    "https://gamecows.com/wp-content/uploads/2022/06/Ark-Nova-Board-Game-Featured.jpg",
  ];
  return (
    <div className="container">
      {/* <h1 className="header-title1">PLAY A GAME EVERY DAY.</h1>
      <h1 className="header-title2">ALWAYS BE A WINNER</h1> */}
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img src={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
