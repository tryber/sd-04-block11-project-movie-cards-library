// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div>
        Rating <div className="rating">{this.props.rating}</div>
      </div>
    );
  }
}

export default Rating;
