// implement MovieCard component here

import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movieCard">
        <img src={imagePath} className="movieImage" alt="movie banner" />
        <h4 className="movieTitle">{title}</h4>
        <h5 className="movieSubtitle">{subtitle}</h5>
        <p className="movieParagraph">{storyline}</p>
      <h3 className="rating">{<Rating />}: {rating}</h3>
      </div>
    );
  }
}

export default MovieCard;
