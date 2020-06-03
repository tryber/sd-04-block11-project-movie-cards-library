import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      // prettier-ignore
      <section className="movie-list">
        {movies.map(item => <MovieCard key={item.title} movie={item} />)}
      </section>
    );
  }
}

export default MovieList;
