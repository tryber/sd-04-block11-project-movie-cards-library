// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>
          <h2>{movie.title}</h2>
          <h4>{movie.subtitle}</h4>
          <Rating rating={movie.rating} />
          <p>{movie.storyline}</p>
        </div>
        <div>
          <img src={movie.imagePath} alt={movie.title} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
