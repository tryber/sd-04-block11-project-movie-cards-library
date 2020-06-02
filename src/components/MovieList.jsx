// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

function MovieList() {
  return (
    <main className="movie-list">
      {movies.map((mov) => (
        <MovieCard
          title={mov.title}
          subtitle={mov.subtitle}
          rating={mov.rating}
          storyline={mov.storyline}
          imagePath={mov.imagePath}
        />
      ))}
    </main>
  );
}

export default MovieList;
