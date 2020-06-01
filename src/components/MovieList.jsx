import React from 'react'

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
  }
}

export default MovieList;
