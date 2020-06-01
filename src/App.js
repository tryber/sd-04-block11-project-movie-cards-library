import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import GlobalStyle from './styles/global';
import data from './data';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
