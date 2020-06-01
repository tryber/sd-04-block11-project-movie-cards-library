import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
    <p>
        <strong>{title}</strong>,
        {subtitle},
        {imagePath},
        {storyline},
        {rating},
    </p>
    );
  }
}

export default MovieCard;