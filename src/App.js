import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={moviesArray} />
    </div>
  );
}

export default App;
