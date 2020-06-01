// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';
import movies from './movies';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    return (
      <div className="moviesDiv">
        {movies.map((movie, index) => (
          <div className="cardMovie">
            <MovieCard key={movie.name} movie={movie} />
            <Rating key={movie.rating} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
