import React from 'react';
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((e) => <MovieCard key={e.title} movies={e} />)}
      </div>
    );
  }
}

export default MoviesList;
