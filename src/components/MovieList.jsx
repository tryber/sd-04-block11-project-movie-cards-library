import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movieList } = this.props;
    return (
      <section className="movie-list">
        {movieList.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </section>
    );
  }
}

export default MovieList;
