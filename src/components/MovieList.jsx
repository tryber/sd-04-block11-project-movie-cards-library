// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    console.log(this.props);
    const { movies } = this.props;
    console.log(movies);
    return (
      <div/>
    );
  }
}

export default MovieList;
