import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList.jsx';
import MovieCard from './components/MovieCard.jsx';

function App() {
  return (
    <>
    <Header />
    <MovieList movies = {data} />
    {/* <MovieCard movies={data} /> */}
    {/* <Rating /> */}
    </>
  );
}

export default App;
