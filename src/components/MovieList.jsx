import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
	render() {
		return (
			<div>
				{this.props.movies.map((movieElem) => (
					<MovieCard key={movieElem.title} movie={movieElem} />
				))}
			</div>
		);
	}
}

export default MovieList;
