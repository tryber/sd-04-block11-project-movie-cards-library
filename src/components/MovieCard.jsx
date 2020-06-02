// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
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
