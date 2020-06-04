import React from 'react';
import './App.css';
import Header from './components/Header';
import Dados from './data';
import Lista from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />,
      <Lista dados={Dados} />
    </div>
  );
}

export default App;
