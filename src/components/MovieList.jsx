import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((item) => {
      return <MovieCard key={item.title} movie={item} />;
    });
  }
}

export default MovieList;
