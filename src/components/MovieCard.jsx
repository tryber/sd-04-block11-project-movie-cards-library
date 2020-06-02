// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <img src={movie.imagePath} alt="Filme" />
      </div>
    );
  }
}

export default MovieCard;
