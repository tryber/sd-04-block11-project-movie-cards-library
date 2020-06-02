// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((mov) => <MovieCard key={mov.title} movie={mov} />)}
      </div>
    );
  }
}

export default MovieList;
