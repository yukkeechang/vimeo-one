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
var beam = "https://via.placeholder.com/200x300";
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
    let arrowNext = this.state.turnBlueNext ? <img className="arrow arrow-right"  src={blueNext}/> :<img  className="arrow arrow-right" src={whiteNext}/>
    let arrowPrev = this.state.turnBluePrev ? <img className="arrow arrow-left" src={bluePrev}/> :<img className="arrow arrow-left" src={whitePrev}/>
    return (
      <div>
        <div className="grid-carousel">
          <div onClick={this.prev.bind(this)} style={{backgroundColor: "#D8D8D8", position: "relative"}}>{arrowPrev}</div>
          <div style={{backgroundColor: "gray"}}><CarouselComponent current={this.state.current} images={images}/></div>
          <div onClick={this.next.bind(this)}  style={{backgroundColor: "#D8D8D8"}}>{arrowNext}</div>
        </div>
      </div>
    )
  }
}




export default Carousel;
//className="backgroundImage" style={{backgroundImage: "https://i.vimeocdn.com/video/595198868_505x160.jpg"}}
//style={{position:'relative', top: '50%', transform: 'translateY(-50)'}}
