import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p>Nota do filme: {rating}</p>
    );
  }
}

export default Rating;
