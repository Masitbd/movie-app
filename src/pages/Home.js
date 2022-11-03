import React from 'react';
import MovieGrid from '../components/grid/MovieGrid';
import Navbar from '../components/navbar/Navbar';
import Tags from '../components/tags/Tags';
import Footer from '../ui/Footer';
import Pagination from '../ui/Pagination';

const Home = () => {
    return (
        <>
          <Tags />
          <MovieGrid />
          <Pagination />
        </>
    );
};

export default Home;