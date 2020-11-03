import React from "react";

class RandomCards extends React.Component {
  state = {
    card1: {},
  };

  componentDidMount() {
    this.getRandomCards();
  }

  getRandomCards() {
    fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((response) => response.json())
      .then((json) => this.setState({ card1: json }))
      .catch((error) => console.log(error));
  }
  render() {
    let image = this.state.card1.card_images;
    console.log(this.state.card1.card_images);
    console.log(image);

    return (
      <div className="random">
        <h3>{this.state.card1.name}</h3>
        <img
          src={image ? image[0].image_url_small : this.state.card1.name}
          alt="no Pic"
        />
      </div>
    );
  }
}

export default RandomCards;
