import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './components/movies';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={movies} />

    </div>
  );
}

export default App;
