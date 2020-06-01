import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <p className="rating">{rating}</p>
    );
  }
}

export default Rating;
