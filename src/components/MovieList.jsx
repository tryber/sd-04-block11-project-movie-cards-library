// implement MovieList component here
import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default MovieList;
