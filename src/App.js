import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies = {data} />
    </div>
  );
}

export default App;
