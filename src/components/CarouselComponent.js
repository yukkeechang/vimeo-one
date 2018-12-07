import React from 'react';
import '../Carousel.css';
import '../App.css';
import hexIcon from '../images/hexIcon.png';

const CarouselComponent = (props) => {
  return (
    <div className="grid-component">
      <div><img className="carouselImage"src={props.images[props.current]}/></div>
      <div className="carouselT">
        <div className="text text-title">title title</div>
        <div className="text text-description">filler text succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book </div>
        <div className="grid-button">
          <div className="button" style={{backgroundColor: 'gray', paddingBottom: '10px'}}>
            <div className="internal-button">
              <img className="hexIcon" src={hexIcon}/>
              <div className="text text-button">Buy Now</div>
            </div>
          </div>
          {/*placeholder empty div for padding*/}
          <div></div>
          <div className="button" style={{borderColor: 'white', borderStyle: 'solid'}}><div className="text text-button"> Watch Trailer</div></div>
        </div>
      </div>
    </div>
  )
}
export default CarouselComponent;
