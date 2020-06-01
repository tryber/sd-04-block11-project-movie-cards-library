import React from 'react';
import Rating from './Rating';
// implement MovieCard component here

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt={this.props.subtitle} /><br />
          <h4>{this.props.movie.title}</h4>
          <h5>{this.props.movie.subtitle}</h5>
          <p>{this.props.movie.storyline}</p>
          {/* <span>{this.props.movie.rating}</span><br /> */}
          <Rating rating={this.props.movie.rating} />
      </div>
    );
  }
}

export default MovieCard;
