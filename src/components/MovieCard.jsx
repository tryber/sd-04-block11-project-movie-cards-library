import React from "react";
import Rating from "./Rating";

class MovieCard extends React.Component {
	render() {
		const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
		return (
			<div className="movie-card">
				<img className="movie-card-image" src={imagePath} alt={title} />
				<div className="movie-card-body">
					<h4 className="title">{title}</h4>
					<h5 className="subtitle">{subtitle}</h5>
					<p className="movie-card-storyline">{storyline}</p>
					<Rating rating={rating} />
				</div>
			</div>
		);
	}
}

export default MovieCard;
