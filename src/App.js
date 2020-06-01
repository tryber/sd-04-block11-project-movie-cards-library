import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
