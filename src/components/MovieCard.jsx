import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;

    return (
      <div>
        <img src={imagePath} alt="imagem do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
