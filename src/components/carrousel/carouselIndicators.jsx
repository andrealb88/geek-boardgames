import React from "react";

 const CarouselIndicator = ({slides,currentIndex,switchIndex}) => {
    return(
        <div className="carousel-indicators">
            {slides.map((_,index) => (
            <button className={`carousel-indicator-item${currentIndex=index? " active":""}`} onClick={() => switchIndex(index)}></button>
            ))}
        </div>
    )
}

export default CarouselIndicator