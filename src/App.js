import React from 'react';
import './App.css';
import data from './data.js';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <MovieList movies={data} />
      </div>
    </>
  );
}

export default App;
