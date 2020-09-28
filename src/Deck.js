import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawnCards: [] };
    this.getCard = this.getCard.bind(this);
  }

  componentDidMount() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ deck: data });
      });
  }

  getCard() {
    fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) alert("No more cards");
        else {
          let card = data.cards[0];
          console.log(data);
          this.setState((st) => ({
            drawnCards: [
              ...st.drawnCards,
              {
                id: card.code,
                image: card.image,
                alt: `${card.value}-${card.suit}`,
              },
            ],
          }));
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Cards Dealer</h1>
        <button onClick={this.getCard}>Get a card !</button>
      </div>
    );
  }
}

export default Deck;
