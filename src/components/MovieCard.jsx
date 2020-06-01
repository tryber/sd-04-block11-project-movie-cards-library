// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <h4>{this.props.subtitle}</h4>
          <h5>{this.props.rating}</h5>
          <p>{this.props.storyline}</p>
        </div>
        <div>
          <image src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
