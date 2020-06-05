import React from 'react';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <p>{movie.title}</p>
      </div>
    );
  }
}

export default MovieCard;
