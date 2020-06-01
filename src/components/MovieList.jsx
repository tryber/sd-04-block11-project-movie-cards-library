import React from 'react';
import MovieCard from './MovieCard';
// implement MovieList component here

class MovieList extends React.Component {
  render() {
    const movieCards = this.props.movieList;
    return (
      <div>
        {movieCards.map((movieCard) => (
          <MovieCard key={movieCard.title} movie={movieCard} />
        ))}
      </div>
    );
  }
}

export default MovieList;
