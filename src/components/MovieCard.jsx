// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <p>
        <h4>{title}</h4>,
        <h5>{subtitle}</h5>,
        <p>{storyline}</p>,
        <Rating rating={rating} />,
        <img src={imagePath} alt="texto da imagem" />,
      </p>
    );
  }
}

export default MovieCard;
