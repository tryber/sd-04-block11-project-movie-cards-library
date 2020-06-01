import React from 'react'
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating,imagePath} = this.props.movie;
        
    return (
      <div className="movie-card">
        <img src={imagePath} className="movie-card-image" alt="Movie Cover" />
        <section className="movie-card-body">
          <header>
            <h4 className="movie-card-title">
              {title}
            </h4>
            <h5 className="movie-card-subtitle">
              {subtitle}
            </h5>
          </header>
          <p className="movie-card-storyline">
            {storyline}
          </p>
        </section>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;