import React from 'react';
import MovieCard from './MovieCard';

function createMovieCard(movie) {
  return (
    <MovieCard key={movie.title} movie={movie} />
  );
}

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {this.props.movies.map((movie) => createMovieCard(movie))}
      </section>
    );
  }
}

export default MovieList;
