import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <section className="movie-card-rating">
        <div className="rating">{this.props.rating}</div>
      </section>
    );
  }
}

export default Rating;
