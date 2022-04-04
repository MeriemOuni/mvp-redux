import React from 'react';
import AddMovie from './Components/AddMovie';
import MoviesList from './Components/MoviesList';
import StarRating from './Components/StarRating'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddMovie/>
      <StarRating />
      <MoviesList/>
    </div>
  );
}

export default App;
