// implement Rating component here
import React from 'react';

function Rating({ rating }) {
  return (
    <div className="movie-card-rating">
      <span className="rating">{rating}</span>
    </div>
  );
}

export default Rating;
