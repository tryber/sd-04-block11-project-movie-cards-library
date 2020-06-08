import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} />
        <h4 className="movie-card-title">{title}</h4>
      </div>
    );
  }
}

export default MovieCard;
