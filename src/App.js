import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Grid from './components/Grid';
import Image from './components/ImageComponent';
import Title from './components/TitleComponent';
import Text from './components/TextComponent';

const id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
const token = process.env.REACT_APP_ACCESS_TOKEN

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(id, secret, token);

//arrays I would use to store image links from API call
let images =[];
let vimeoImages =[];

  client.request({
    method: 'GET',
    path: '/categories'
    //THIS FUNCTION RETURNS ME THE OBJECT BODY..which I need outside of this scope
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }
    console.log(body);
    //querying through data from the API call to find link of images
    //console.log(body.data[1].pictures.sizes[4].link)
    images = body.data
    //issue: I can't seem to get the data from body outside of the API call (set it to a global variable and refer it back inside my App component)
  })
  //how I would get an array of image links from the Vimeo API and use it in place of the placeholder images by mapping the components
  // for (let i =0; i <images.length; i++) {
  //   vimeoImages.append(i.pictures.sizes[4].link)
  // }

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

export default App;
