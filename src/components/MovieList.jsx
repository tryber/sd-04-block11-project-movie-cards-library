// implement MovieList component here
// Este componente representará toda a área com os cartões de filme
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {this.props.movies.map((film) => <MovieCard key={film.title} movie={film} />)}
      </section>
    );
  }
}

export default MovieList;
