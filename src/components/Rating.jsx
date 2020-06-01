import React from 'react';
// implement Rating component here

class Rating extends React.Component {
  render() {
    // const { rating } = this.props.rating;
    return (
      <div>
        <p>{this.props.rating}</p>
      </div>
    );
  }
}

export default Rating;
