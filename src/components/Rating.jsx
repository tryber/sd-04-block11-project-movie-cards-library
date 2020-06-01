import React from 'react'

class Rating extends React.Component {
  render() {
    const { ratingValue } = this.props;

    return (
      <div className="movie-card-rating">
        Rating
        <div className="rating">{ratingValue}</div>
      </div>
    );
  }
}

export default Rating;
