import React from 'react';

import Rating from './Rating';

const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div className='movie-card'>
      <img className='movie-card-image' src={imagePath} alt='' />
      <div className='movie-card-body'>
        <h4 className='movie-card-title'>{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
      </div>
      <div className='movie-card-rating'>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default MovieCard;
