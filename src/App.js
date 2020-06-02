import React from 'react';
import './App.css';
import data from './data.js';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <div className="App">
      <MovieList movies={data} />
    </div>
  );
}

export default App;
