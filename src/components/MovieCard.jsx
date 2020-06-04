import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const {title, subtitle, storyline} = this.props.movie;
    return (
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
      </div>
    );
  }
}
