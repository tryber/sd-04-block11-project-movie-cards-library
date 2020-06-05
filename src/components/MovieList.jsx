import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
