import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const {movies} = this.props;
    return (
      <div>
        {movies.map(element => <MovieCard key={element.title} movie={element}/>)}
      </div>
    );
  }
}
