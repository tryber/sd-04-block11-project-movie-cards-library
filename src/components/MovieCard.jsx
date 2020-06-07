import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt={title}/>
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <h4>{storyline}</h4>
        </div>
        <div>
          <Rating rating={rating}/>
        </div>
      </div>
    );
  }
}

export default MovieCard;
