import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
            movies.map((mv) => <div className="movie-card ">
              <MovieCard key={mv.title} movie={mv} /> </div>)
    );
  }
}

export default MovieList;
