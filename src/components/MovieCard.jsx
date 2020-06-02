// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
     return (
       <div className="movie-card-body">
            <img className="movie-card-image"
            src={this.props.movie.imagePath} alt="Movie Banner"/>
            <h4 className="movie-card-title">{this.props.movie.title}</h4>
            <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
            <p className="movie-card-storyline">{this.props.movie.storyline}</p>
            <Rating rating={this.props.movie.rating} />
       </div>
     );
  }
}

export default MovieCard;
