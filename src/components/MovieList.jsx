import React from 'react';
import MovieCard from './MovieCard';

/* function forEachMovie() {
  return this.props.movies.map()
} */

function createMovieCard(movie) {
  return (
    <MovieCard key={movie.title} movie={movie} />
  );
}

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => createMovieCard(movie))}
      </div>
    );
  }
}

export default MovieList;
