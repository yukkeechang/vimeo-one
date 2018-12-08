import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Grid from './components/Grid';
import Image from './components/ImageComponent';
import Title from './components/TitleComponent';
import Text from './components/TextComponent';

class App extends Component {

  render() {
    let filler="Lorem ipsum dolor amet wolf cronut try-hard kombucha, venmo succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book live-edge yuccie. Thundercats squid glossier salvia gluten-free kitsch, af shabby chic godard swag poutine street art heirloom intelligentsia brooklyn. Kitsch air plant"
    return (
      <div className="hundred">
        <Grid>
          <div>
            <Title title="MONSOON III" color="black"/>
            <Text text={filler} color="black"/>
          </div>
          <Image image={"https://i.vimeocdn.com/video/595198868_505x160.jpg"}/>
        </Grid>
        <Grid gridClass="grid-beams">
          <div>
            <Title title="BEAMS" color="white"/>
            <Text text={filler} color="white"/>
          </div>
          <Image image={"https://i.vimeocdn.com/video/589972810_530x315.jpg"}/>
        </Grid>
        <Grid gridClass="grid-move">
          <Image image={"https://i.vimeocdn.com/video/590587169_530x315.jpg"}/>
          <div>
            <Title title="MOVE" color="black"/>
            <Text text={filler} color="black"/>
          </div>
        </Grid>
       <Carousel/>
      </div>
    );
  }
}

//amet wolf cronut try-hard kombucha, venmo succulents lo-fi cred offal migas cornhole semiotics. Seitan cray ethical austin coloring book live-edge yuccie. Thundercats squid glossier salvia gluten-free kitsch, af shabby chic godard swag poutine street art heirloom intelligentsia brooklyn. Kitsch air plant
export default App;
