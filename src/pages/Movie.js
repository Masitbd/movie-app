import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieDescription from '../components/description/movie/MovieDescription';
import Player from '../components/description/movie/Player';
import { fetchMovie } from '../components/movie/movieSlice';
import RelatedMovieList from '../list/RelatedMovieList';
import Loading from '../ui/Loading';

const Movie = () => {
   const dispatch = useDispatch()
   const {movieId}=useParams()


   const {movie,isLoading, isError, error } = useSelector(state => state.movie)
  

   useEffect((id)=>{
   dispatch(fetchMovie(movieId))
   },[dispatch, movieId])



   // what to render

   let content = null

   if(isLoading) <Loading/>

   if(!isLoading && isError)
   content=<div className='col-span-12'>{error}</div>
 

   if(!isLoading && !isError && !movie?.id)
   content=<div className='col-span-12'>{error}</div>
   content=<div className='col-span-12'>No video found</div>
 

   if(!isLoading && !isError && movie?.id)
   content=<div className='col-span-12'>{error}</div>
   content= <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
   <div class="grid grid-cols-3 gap-2 lg:gap-8">
       <div class="col-span-full w-full space-y-8 lg:col-span-2">
           <Player movie={movie} />

           <MovieDescription />
       </div>

       <RelatedMovieList />
   </div>
</div>


    return (
<section class="pt-6 pb-20">
       {content}
        </section>
    );
};

export default Movie;