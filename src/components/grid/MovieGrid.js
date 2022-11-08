import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../ui/Loading';
import { fetchMovies } from '../../features/movies/moviesSlice';
import MovieGridItem from './MovieGridItem';
import Pagination from '../../ui/Pagination';
import VieweItem from '../../view/VieweItem';

const MovieGrid = () => {
   const dispatch =useDispatch();
    const[items, setItems]= useState()
   const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);


   const {movies, isLoading, isError, error} = useSelector((state)=>state.movies)
  


   useEffect(()=>{
    dispatch(fetchMovies())
   },[dispatch])


   useEffect(()=>{
    const movies= sessionStorage.getItem('cart')
    
    if(movies){
    const findRecent = JSON.parse(movies) 
    var unique = Array.from(new Set(findRecent.map(JSON.stringify))).map(JSON.parse);
    setItems(unique)
}
},[movies])

   const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

    
   let content;
   if(isLoading){
    
        content = <Loading />    
   }

   if(!isLoading && isError){
    
    content = <div className="col-span-12">{error}</div>    
}

if(!isLoading && !isError && movies.length === 0){
    
    content = content = <div className="col-span-12">No Movies found</div>   
}


if(!isLoading && !isError && movies.length > 0){
     content = currentPosts.map((movie)=>{
      return  <MovieGridItem key={movie.id} movie={movie} />
    })  
}
    
    return (
        <section className="pt-12">
            <section className="pt-12">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
               
              {content}

            </div>
        </section>
        <VieweItem items={items} />
        <Pagination
        totalPosts={movies.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
    </section>
    );
};

export default MovieGrid;