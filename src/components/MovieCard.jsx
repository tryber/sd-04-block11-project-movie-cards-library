import React, { Component } from 'react';
import Raiting from './Rating';

export default class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
         <img src={imagePath} alt="Capa do Filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Raiting rating={rating} />
      </div>
    );
  }
}
