// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <p>
        {title},
        {subtitle},
        {storyline},
        {rating},
        {imagePath},
      </p>
    );
  }
}

export default MovieCard; 