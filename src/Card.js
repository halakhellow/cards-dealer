import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45,
      xPosition = Math.random() * 30,
      yPosition = Math.random() * 30;
    this.transform = `translate(${xPosition}px,${yPosition}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <img
        className="Card"
        src={this.props.image}
        alt={this.props.alt}
        style={{ transform: this.transform }}
      />
    );
  }
}

export default Card;
