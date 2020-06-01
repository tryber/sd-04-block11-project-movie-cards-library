import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { moviesArray } = this.props;
    return moviesArray.map((movie) => <MovieCard key={movie.title} movieObj={movie} />);
  }
}

export default MovieList;
