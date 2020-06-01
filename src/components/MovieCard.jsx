// implement MovieCard component here
// renderizando cada filme
// Props `title`, `subtitle`, `storyline`, `imagePath` e `rating`
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div className="rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
