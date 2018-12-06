import React, { Component } from 'react';
import './App.css';
import Monsoon from './components/Monsoon';
import Beams from './components/Beams';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div>

          <Monsoon/>
          <Beams/>
      
        {/*
          <Carousel/>
        */}
      </div>
    );
  }
}

export default App;
