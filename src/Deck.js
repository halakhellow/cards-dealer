import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }
  componentDidMount() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ deck: data });
      });
  }
  render() {
    return (
      <div>
        <h1>Cards Dealer</h1>
      </div>
    );
  }
}

export default Deck;
