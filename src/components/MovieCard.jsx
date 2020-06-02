// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating.jsx';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <img src={movie.imagePath} alt="Filme" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

export default MovieCard;
