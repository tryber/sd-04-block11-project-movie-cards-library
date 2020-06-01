// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className="moviecard">
        <img src={imagePath} height="150px" alt={`${title} movie`} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating key={title} rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
