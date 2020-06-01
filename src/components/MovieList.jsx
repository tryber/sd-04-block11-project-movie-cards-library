// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
      {movies.map((elemento) => <MovieCard movie={elemento} key={elemento.title} />)}
      </div>
    );
  }
}

export default MovieList;
