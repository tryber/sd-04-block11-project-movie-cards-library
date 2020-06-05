// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((x) => <MovieCard key={x.title} movie={x} />)}
      </div>
    );
  }
}

export default MovieList;
