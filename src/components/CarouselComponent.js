import React from 'react';
import '../Carousel.css';

//TODO: keep the button border and background inline styling in order to pass background image color

const CarouselComponent = (props) => {
  return (
    <div className="grid-component">
      <div><img className="carouselImage"src={props.images[props.current]}/></div>
      <div>
        <div className="title">title title</div>
        <div style={{padding: '10px'}}>filler text succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book </div>
        <div className="grid-button" style={{padding: '10px'}}>
          <div className="button" style={{backgroundColor: 'black', paddingBottom: '10px', paddingLeft: '10px'}}><p className="title">Buy Now</p></div>
          <div></div>
          <div className="button" style={{borderColor: '#10a96d', borderStyle: 'solid'}}><p className="title">Buy Later</p></div>
        </div>

      </div>

    </div>
  )
}
export default CarouselComponent;
