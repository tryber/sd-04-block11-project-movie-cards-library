import React from 'react';

class MovieCard extends React.Component {
	render() {
		const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
		return (
			<ul>
				<li>{imagePath}</li>
				<li>{title}</li>
				<li>{subtitle}</li>
				<li>{storyline}</li>
				<li>{rating}</li>
			</ul>
		);
	}
}

export default MovieCard;
