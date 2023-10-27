import React from "react";
import '../character-cards.css'

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="card" key={this.props.name}>
        <div className="card-titles">
          <h3>{this.props.name}</h3>
          <h4>{this.props.nickname}</h4>
        </div>
        <img src={this.props.img} alt="" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default CharacterCard;
