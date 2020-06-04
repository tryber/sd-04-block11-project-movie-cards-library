// implement MovieList component here
import React from 'react';
import Cards from './MovieCard';

class MovieList extends React.Component {
    render() {
      const { movies } = this.props;
        return (
         <div>
           {movies.map(item => <Cards movies={item} />)}
         </div>
        )
    }
}

export default MovieList