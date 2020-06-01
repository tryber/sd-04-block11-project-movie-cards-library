import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const { movieObj } = this.props;
    return (
      <>
        <img src={movieObj.imagePath} alt={movieObj.title} />
        <h3>{movieObj.title}</h3>
        <h4>{movieObj.subtitle}</h4>
        <p>{movieObj.storyline}</p>
        <Rating stars={movieObj.rating} />
      </>
    );
  }
}

export default MovieCard;
