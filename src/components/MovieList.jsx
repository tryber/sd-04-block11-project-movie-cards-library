// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <main className="movie-list">
      {movies.map((mov) => (
        <MovieCard
          key={mov.title}
          movie={mov}
        />
      ))}
    </main>
  );
}

export default MovieList;
