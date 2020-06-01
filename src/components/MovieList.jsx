import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { moviesArray } = this.props;
    return (
      <div className="movie-list">
        {moviesArray.map((movie) => (
          <MovieCard key={movie.title} movieObj={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
