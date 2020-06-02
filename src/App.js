import React from 'react';
import './App.css';
import './data.js'
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
