import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return <div>{movies.map((item, index) => <MovieCard key={index} movie={item} />)}</div>;
  }
}

export default MovieList;
