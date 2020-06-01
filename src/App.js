import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MovieList movies={data} />
      </div>
    </div>
  );
}

export default App;
