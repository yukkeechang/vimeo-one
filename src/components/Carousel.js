import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent';
import '../Carousel.css';

//Arrow Icons
import whiteNext from '../images/whiteNext.png';
import whitePrev from '../images/whitePrev.png';
import blueNext from '../images/blueNext.png';
import bluePrev from '../images/bluePrev.png';


//TODO last: change images, align arrows to imagees
var monsoon = "https://i.vimeocdn.com/video/595198868_505x160.jpg";
var beam = "https://i.vimeocdn.com/video/589972810_530x315.jpg";
var move = "https://i.vimeocdn.com/video/590587169_530x315.jpg";

const images = [beam, monsoon, move];
const size = images.length;


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      index: 0,
      turnBluePrev: false,
      turnBlueNext: false
    }
  }

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
    let arrowNext = this.state.turnBlueNext ? <img className="arrow" src={blueNext}/> :<img className="arrow" src={whiteNext}/>
    let arrowPrev = this.state.turnBluePrev ? <img className="arrow" src={bluePrev}/> :<img className="arrow" src={whitePrev}/>
    return (
      <div>
        <div className="grid-carousel">
          <div onClick={this.prev.bind(this)} style={{backgroundColor: "blue"}}>{arrowPrev}</div>
          <CarouselComponent current={this.state.current} images={images}/>
          <div onClick={this.next.bind(this)}  style={{backgroundColor: "red"}}>{arrowNext}</div>
        </div>
      </div>
    )
  }
}




export default Carousel;
//className="backgroundImage" style={{backgroundImage: "https://i.vimeocdn.com/video/595198868_505x160.jpg"}}
