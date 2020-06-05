import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <>
    <Header />
    <MovieList movies = {data} />
    </>
  );
}

export default App;
