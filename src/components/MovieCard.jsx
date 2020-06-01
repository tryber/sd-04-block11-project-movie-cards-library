import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
    return (
      <div className='movie-card-body'>
        <div className='movie-card'>
          <img alt={title} className='movie-card-image'>{imagePath}</img>
          <h4 className='movie-card-title'>{title}</h4>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
        <div className='movie-card-rating'>
          <Rating className='rating' rating={rating} />
        </div>
      </div>

    )
  }
}
export default MovieCard;