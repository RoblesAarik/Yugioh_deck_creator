import React from "react";

class RandomCards extends React.Component {
  state = {
    card1: {},
    card2: {},
  };

  componentDidMount() {
    this.getRandomCard1();
    this.getRandomCard2();
  }

  getRandomCard1() {
    fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((response) => response.json())
      .then((json) => this.setState({ card1: json }))
      .catch((error) => console.log(error));
  }
  getRandomCard2() {
    fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((response) => response.json())
      .then((json) => this.setState({ card2: json }))
      .catch((error) => console.log(error));
  }
  render() {
    let image1 = this.state.card1.card_images;
    let image2 = this.state.card2.card_images;
    console.log(image2);

    return (
      <div>
        <div className="random">
          <h3>{this.state.card1.name}</h3>
          <img
            src={image1 ? image1[0].image_url_small : this.state.card1.name}
            alt="no Pic"
          />
        </div>
        <div className="random">
          <h3>{this.state.card2.name}</h3>
          <img
            src={image2 ? image2[0].image_url_small : this.state.card2.name}
            alt="no Pic"
          />
        </div>
      </div>
    );
  }
}

export default RandomCards;
