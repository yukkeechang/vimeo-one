import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent';
import '../Carousel.css';
import '../App.css';
import nichts from '../images/nichts.png';
import vice from '../images/vice.png';

//Arrow Icons
import whiteNext from '../images/whiteNext.png';
import whitePrev from '../images/whitePrev.png';
import blueNext from '../images/blueNext.png';
import bluePrev from '../images/bluePrev.png';


// var monsoon = "https://i.vimeocdn.com/video/595198868_505x160.jpg";
// var beam = "https://i.vimeocdn.com/video/589972810_530x315.jpg";
// var move = "https://i.vimeocdn.com/video/590587169_530x315.jpg";
// const images = [beam, monsoon, move];

//used placeholder images to match carousel
let placeholder = "https://via.placeholder.com/200x250"
const images = [nichts, placeholder, vice];
const size = images.length;


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //For index in image array
      current: 0,
      index: 0,
      //For the arrow colors
      turnBluePrev: false,
      turnBlueNext: false
    }
  }

  //Functions to change index and current (basically functions for the carousel)
  prev() {
    this.state.index === 0 ?
    this.setState({index: size-1, current: size-1}) :
    this.setState({index: this.state.current-1, current: this.state.current-1 })
    this.setState({turnBluePrev: true, turnBlueNext: false})
  }
  next() {
    this.state.index === size-1 ?
    this.setState({index: 0, current: 0}) :
    this.setState({index: this.state.current+1, current: this.state.current+1 })
    this.setState({turnBluePrev: false, turnBlueNext: true})
  }


  render() {
    let imageUrl = images[this.state.current];
    let arrowNext = this.state.turnBlueNext ? <img className="arrow arrow-next"  src={blueNext}/> :<img  className="arrow arrow-next" src={whiteNext}/>
    let arrowPrev = this.state.turnBluePrev ? <img className="arrow arrow-prev" src={bluePrev}/> :<img className="arrow arrow-prev" src={whitePrev}/>
    return (
      <div className="hundred">
        <div id="gridCarousel">
          <div className="background"><img className="backgroundImage" src={imageUrl}/></div>
          <div className="prevDiv" onClick={this.prev.bind(this)}>{arrowPrev}</div>
          <div className="carouselContent"><CarouselComponent current={this.state.current} images={images}/></div>
          <div className="nextDiv" onClick={this.next.bind(this)}>{arrowNext}</div>
        </div>
      </div>
    )
  }
}

export default Carousel;
