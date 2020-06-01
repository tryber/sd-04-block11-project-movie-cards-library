import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((mv) => <MovieCard key={mv.title} movie={mv} />)}
      </div>
    );
  }
}

export default MovieList;
