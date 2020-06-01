import React from 'react';
import MovieCard from './MovieCard';
import { MovieListStyle } from '../styles/styles';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <MovieListStyle>
        {movies.map((film) => (
          <MovieCard key={film.title} movie={film} />
        ))}
      </MovieListStyle>
    );
  }
}

export default MovieList;
