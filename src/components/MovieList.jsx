import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // destructuring
    return (
      <div className="movie-list">
        {movies.map((movieMap) => // s/bigodes
          <MovieCard key={movieMap.title} movie={movieMap} />
        )};
      </div>
    );
  }
}

export default MovieList;

