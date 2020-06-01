import React from 'react';

class Rating extends React.Component {
  render() {
    const { stars } = this.props;
    return <p>{stars}</p>;
  }
}

export default Rating;
