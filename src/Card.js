import React, { Component } from "react";

class Card extends Component {
  render() {
    return <img src={this.props.image} alt={this.props.alt} />;
  }
}

export default Card;
