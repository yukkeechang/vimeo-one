import React, { Component } from 'react';
import '../App.css';

const Image = (props) => {
  return (
    <img src={props.image} className={"responsive-img" || `${props.className}`}/>
  )
}

export default Image;
