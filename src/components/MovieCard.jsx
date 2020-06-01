import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const { movieObj } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img
            src={movieObj.imagePath}
            alt={movieObj.title}
            className="movie-card-image"
          />
          <h4 className="movie-card-title">{movieObj.title}</h4>
          <h5 className="movie-card-subtitle">{movieObj.subtitle}</h5>
          <p className="movie-card-storyline">{movieObj.storyline}</p>
        </div>
        <Rating stars={movieObj.rating} />
      </div>
    );
  }
}

export default MovieCard;
