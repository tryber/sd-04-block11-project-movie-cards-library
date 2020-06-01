// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title } = this.props.movie;
    return (
      <div className="moviecard">
        <img src={imagePath} height="150px" alt={`${title} movie`} />

      </div>
    );
  }
}

export default MovieCard;
