// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((elements) => <MovieCard key={elements.title} movie={elements} />)}
      </div>
    );
  }
}
export default MovieList;
