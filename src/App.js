import React, { Component } from 'react';
import './App.css';
import Monsoon from './components/Monsoon';
import Beams from './components/Beams';

class App extends Component {
  render() {
    return (
      <div>
        <Monsoon/>
        <Beams/>
      </div>
    );
  }
}

export default App;
