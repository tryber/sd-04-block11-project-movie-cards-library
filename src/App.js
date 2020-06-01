import React from 'react';
import './App.css';
import movies from './data'
// import './components/Header'; Why does't work
import './components/MovieList';
import Header from './components/Header';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <div className='header'><Header></Header></div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
