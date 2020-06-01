import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  const { movie: { title, subtitle, storyline, imagePath, rating } } = props;
  return (
    <div>
      <img src={imagePath} alt={title} />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating} />
    </div>
  );
}

export default MovieCard;
