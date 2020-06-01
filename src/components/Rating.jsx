import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">Popularidade do filme: {rating}</p>
    );
  }
}

export default Rating;
