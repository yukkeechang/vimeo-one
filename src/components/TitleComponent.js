import React, { Component } from 'react';
import '../App.css';

const Title = (props) => {
  return (
    <h4 style={{fontSize:'20px', color:`${props.color}`}}>{props.title}</h4>
  )
}

export default Title;
