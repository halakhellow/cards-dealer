import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawnCards: [], outOfCards: false };
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
        if (!data.success) this.setState({ outOfCards: true });
        else {
          let card = data.cards[0];
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
    let cards = this.state.drawnCards.map((card) => (
      <Card image={card.image} alt={card.alt} key={card.id} />
    ));
    return this.state.outOfCards ? (
      <h1>No More Cards!</h1>
    ) : (
      <div>
        <h1>Cards Dealer</h1>
        <button onClick={this.getCard}>Get a card !</button>
        <div>{cards}</div>
      </div>
    );
  }
}

export default Deck;
