import React from "react";
import "./home.css";
import Carousel from "../../../components/carrousel/carousel";

export function Home() {
  const slides = [
    "https://i.ytimg.com/vi/DCOICaqQoEY/maxresdefault.jpg",
    "https://unfilteredgamer.com/wp-content/uploads/2022/03/terraforming-mars-ares-expedition-review-header.jpg",
    "https://gamecows.com/wp-content/uploads/2022/06/Ark-Nova-Board-Game-Featured.jpg",
  ];
  return (
    <div className="container">
      <div className="home">
        <div className="home-inner">
          <Carousel slides={slides} />
        </div>
        <div className="quotes">
          <img
            src="https://ih1.redbubble.net/image.1889966854.5963/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
            alt="gamer-quote-1"
          ></img>
          <img
            src="https://ih1.redbubble.net/image.967398882.3526/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="gamer-quote-2"
          ></img>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_bOcNKvjb-NyMlFwqxOkfCPieb1CJcLImN1CsyPqtLXrk7lTn1BG_fUTso1W-SCoblo&usqp=CAU"
            alt="gamer-quote-3"
          ></img>
        </div>
      </div>
      <div className="intro">
        <h1 className="header-title1">PLAY A GAME EVERY DAY.</h1>
        <h1 className="header-title2">ALWAYS BE A WINNER</h1>
        <h2 className="first-parragraph">
          "Welcome to Board Game Fan - the ultimate destination for board game
          enthusiasts! Whether you're a seasoned player or new to the world of
          tabletop gaming, we have everything you need to explore and enjoy this
          exciting hobby. Browse our vast collection of games, from classic
          titles to the latest releases, and discover new favorites to add to
          your collection. With our community of players and resources for
          learning and improving your skills, you'll find endless opportunities
          to connect, learn, and have fun. Join us today and let's start
          playing!"
        </h2>
      </div>
    </div>
  );
}
