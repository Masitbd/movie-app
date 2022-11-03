import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Footer from './ui/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/movies/:movieId' element={<Movie />} />
       </Routes>    
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
