import React, { Component } from 'react';
import '../Carousel.css';
import '../App.css';
import {CSSTransitionGroup} from 'react-transition-group';

//TODO last: change images, change
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
      index: 0
    }
  }

  prev() {
    this.state.index === 0 ?
    this.setState({index: size-1, current: size-1}) :
    this.setState({index: this.state.current-1, current: this.state.current-1 })
  }
  next() {
    this.state.index === size-1 ?
    this.setState({index: 0, current: 0}) :
    this.setState({index: this.state.current+1, current: this.state.current+1 })
  }
  render() {
    return (
      <div>
        <div className="backgroundImage" style={{backgroundImage: "https://i.vimeocdn.com/video/595198868_505x160.jpg"}}>
        <div onClick={this.prev.bind(this)}>◀︎</div>
        <div onClick={this.next.bind(this)}>▶︎</div>
        <img src={images[this.state.current]} className="responsive-img"/>
        </div>
      </div>
    )
  }
}




export default Carousel;
//
// console.log("prev clicked")
// console.log("index now: "+this.state.index)
// console.log("current now: "+this.state.current)

// console.log("index after set state "+this.state.index)
// console.log("current after set state "+this.state.current)
