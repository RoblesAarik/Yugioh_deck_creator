import React from "react";

class CardList extends React.Component {
  state = {
    cards: [],
    card: {},
  };

  //   getCard = (card) => {
  //     this.setState({ card: card });
  //   };

  getCards() {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => response.json())
      .then((json) => this.setState({ cards: json }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.cards);
    return (
      <div>
        <h1>Cards</h1>
      </div>
    );
  }

  componentDidMount() {
    this.getCards();
  }
}

export default CardList;
