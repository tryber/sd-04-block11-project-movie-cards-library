import React from 'react';
import Rating from './Rating';
// implement MovieCard component here

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>
          <img src={movie.imagePath} alt={movie.subtitle} />
          <br />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </div>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

export default MovieCard;
