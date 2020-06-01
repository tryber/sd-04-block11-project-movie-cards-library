import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { listaFilmes } = this.props;
    return (
      <section className="movie-list">
        {listaFilmes.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </section>
    );
  }
}

export default MovieList;
