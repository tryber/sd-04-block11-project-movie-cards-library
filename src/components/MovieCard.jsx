import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} />
      </div>
    );
  }
}

export default MovieCard;
