// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
    render() {
        const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
        return (
            <div>
                 <img src={imagePath} />
                <div>
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <p>{storyline}</p>
                </div>
                <div>
                    <Rating rating={rating} />
                </div>
            </div>
        
        );

    }
}
export default MovieCard;