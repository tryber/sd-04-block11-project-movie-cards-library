// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movieElem) =>
				(<MovieCard key={movieElem.title} movie={movieElem} />))}
      </div>
    );
  }
}

export default MovieList;
