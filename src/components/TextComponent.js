import React, { Component } from 'react';


const TextComponent = (props) => {
  return (
    <p style={{color:`${props.color}`}}>{props.text}</p>
  )
}

export default TextComponent;
