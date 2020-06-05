import React, { Component } from 'react';

export default class Raiting extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}
