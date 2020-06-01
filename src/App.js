import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';

const MovieCards = movies.map(({ title, subtitle, storyline, imagePath, rating }) => (
  <li>
    <MovieCard
      key={title}
      title={title}
      subtitle={subtitle}
      storyline={storyline}
      src={imagePath}
      alt={title}
    />
    <Rating rating={rating} />
  </li>
));

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={MovieCards} />
    </div>
  );
}

export default App;
