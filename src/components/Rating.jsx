import React from 'react';
// implement Rating component here

class Rating extends React.Component {
  render() {
    // const { rating } = this.props.rating;
    return (
      <div>
        <span>{this.props.rating}</span>
      <div/>
    );
  }
}

export default Rating;
