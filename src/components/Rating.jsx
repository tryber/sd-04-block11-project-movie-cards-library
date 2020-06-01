import React from 'react';

const Rating = ({ rating }) => (
  <div className="movie-card-rating">
    <p>Rating</p>
    <p className="rating">{ rating }</p>
  </div>
);

export default Rating;
