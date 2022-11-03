import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Home />
      <Movie />
    </div>
  );
}

export default App;
