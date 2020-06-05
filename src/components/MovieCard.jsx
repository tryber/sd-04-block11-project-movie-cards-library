import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-card">
        <img src={movies.imagePath} alt={movies.title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movies.title}</h4>
          <h5 className="movie-card-subtitle">{movies.subtitle}</h5>
          <p className="movie-card-storyline">{movies.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={movies.rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
