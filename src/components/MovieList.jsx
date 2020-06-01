// implement MovieList component here
import MovieCard from "./MovieCard";
import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(m => <MovieCard key={m.title} movie={m} />)}
      </div>
    );
  }
}

export default MovieList;
