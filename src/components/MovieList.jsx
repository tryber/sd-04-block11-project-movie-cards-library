import React from 'react';
import MovieCard from './MovieCard';
// implement MovieList component here

class MovieList extends React.Component {
    render() {
        const filmList = this.props.movieList;
        return (
            <>
                {filmList.map(film => <MovieCard key={film.title} movie={film} />)}
            </>
        )
    }
}

export default MovieList;