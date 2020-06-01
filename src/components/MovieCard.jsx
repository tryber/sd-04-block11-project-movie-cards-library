// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={imagePath} />

        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>

        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default MovieCard;
