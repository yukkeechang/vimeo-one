import React, { Component } from 'react';
import '../App.css';
//TODO: move font style to CSS, re-order grid, add margin between the items
class Beams extends Component {
  render() {
    return (
      <div>
        <div className="grid grid-beams">
          <div>
            <h4 style={{fontSize: '20px'}}>BEAMS</h4>
            <p>Lorem ipsum dolor amet wolf cronut try-hard kombucha, venmo succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book live-edge yuccie. Thundercats squid glossier salvia gluten-free kitsch, af shabby chic godard swag poutine street art heirloom intelligentsia brooklyn. Kitsch air plant</p>
          </div>
          <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" className="responsive-img"/>
          <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className="responsive-img"/>
          <div>
            <h4 style={{fontSize: '20px'}}>MOVE 2</h4>
            <p>Lorem ipsum dolor amet wolf cronut try-hard kombucha, venmo succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book live-edge yuccie. Thundercats squid glossier salvia gluten-free kitsch, af shabby chic godard swag poutine street art heirloom intelligentsia brooklyn. Kitsch air plant</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Beams;
