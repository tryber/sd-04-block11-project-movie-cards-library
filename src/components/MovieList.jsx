import React from "react";
import movies from "../data";
import MovieCard from "./MovieCard.jsx";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    );
  }
}

export default MovieList;
