import React from 'react';

class Rating extends React.Component {
  render() {
    const { stars } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{stars}</p>
      </div>
    );
  }
}

export default Rating;
