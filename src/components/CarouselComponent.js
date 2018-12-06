import React from 'react';
import '../Carousel.css';

//pass image array, current (index to display image)
const CarouselComponent = (props) => {
  return (
    <div>
      <div style={{backgroundColor: "green"}}><img className="carouselImage"/><img src={props.images[props.current]}/></div>
    </div>
  )
}
export default CarouselComponent;
