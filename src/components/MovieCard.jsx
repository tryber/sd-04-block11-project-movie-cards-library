// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

function MovieCard({ title, subtitle, storyline, rating, imagePath }) {
  return (
    <div className="movie-card">
      <div>
        <img className="movie-card-image" src={imagePath} alt="Movie" />
      </div>
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
      <Rating rating={rating} alt="rating" />
    </div>
  );
}

export default MovieCard;
