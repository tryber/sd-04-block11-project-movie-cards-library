// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title } = this.props.movie;
    return (
      <div className='moviecard'>
        <p>Temp</p>
        <img src={imagePath} alt={`${title} movie image`} />

      </div>
    );
  }
}

export default MovieCard;