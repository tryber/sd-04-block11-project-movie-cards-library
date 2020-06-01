import React from 'react';
import Rating from './Rating';
import { MovieCardStyle } from '../styles/styles';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <MovieCardStyle>
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </MovieCardStyle>
    );
  }
}

export default MovieCard;
