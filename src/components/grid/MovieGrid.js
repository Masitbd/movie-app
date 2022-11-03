import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../ui/Loading';
import { fetchMovies } from '../movies/moviesSlice';
import MovieGridItem from './MovieGridItem';

const MovieGrid = () => {
   const dispatch =useDispatch();

   const {movies, isLoading, isError, error} = useSelector((state)=>state.movies)
   console.log(movies)


   useEffect(()=>{
    dispatch(fetchMovies())
   },[dispatch])


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
     content = movies.map((movie)=>{
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

               {/*  <!-- error section
                <div className="col-span-12">some error happened</div> --> */}
            </div>
        </section>
    </section>
    );
};

export default MovieGrid;