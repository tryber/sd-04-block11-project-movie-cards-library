
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
          <img src={imagePath} alt={title}/>
      </div>
    );
  }
}

export default MovieCard;