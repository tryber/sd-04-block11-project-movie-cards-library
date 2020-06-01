import React from 'react'

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <section className="movie-card-rating">
        <div className="rating">{rating}</div>
      </section>
    );
  }
}

export default Rating;
