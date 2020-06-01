import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
        <>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={imagePath} alt="imagem do filme"/>
        <p>{storyline}</p>
        <p>{rating}</p>
        </>
    );
  }
}

export default MovieCard;
