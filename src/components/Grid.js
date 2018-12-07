import React, { Component } from 'react';
import '../App.css';
import '../components/ImageComponent.js';
import '../components/TitleComponent.js';

class Grid extends Component {
  render() {
    return (
      <div className={`grid ${this.props.gridClass || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Grid;
