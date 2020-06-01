// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';
import movies from './movies';

class MovieList extends React.Component {
  render() {
    return (
      <div className="moviesDiv">
        {movies.map((movie) => (
          <div>
            <MovieCard key={movie.title} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;