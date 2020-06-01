import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <header className="App">
        <Header />
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
