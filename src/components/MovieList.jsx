// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((eachMovie) => <MovieCard key={eachMovie.title} movie={eachMovie} />)}
      </div>
    );
  }
}

export default MovieList;
