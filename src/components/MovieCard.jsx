// implement MovieCard component here

import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movieCard">
        <img src={imagePath} className="movieImage" alt="movie banner" />
        <h4 className="movieTitle">{title}</h4>
        <h5 className="movieSubtitle">{subtitle}</h5>
        <p className="movieParagraph">{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;