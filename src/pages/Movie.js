import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieDescription from '../components/description/movie/MovieDescription';
import Player from '../components/description/movie/Player';
import { fetchMovie } from '../features/movie/movieSlice';
import RelatedMovieList from '../list/RelatedMovieList';
import Loading from '../ui/Loading';

const Movie = () => {
   const dispatch = useDispatch()
   const {movieId}=useParams()


   const {movie,isLoading, isError, error } = useSelector(state => state.movie)
  

   useEffect((id)=>{
   dispatch(fetchMovie(movieId))
   },[dispatch, movieId])

const {id, tags} = movie || {}

   // what to render

   let content = null

   if(isLoading) <Loading/>

   if(!isLoading && isError)
   content=<div className='col-span-12'>{error}</div>
 

   if(!isLoading && !isError && !movie?.id)
   content=<div className='col-span-12'>{error}</div>
   content=<div className='col-span-12'>No video found</div>
 

   if(!isLoading && !isError && movie.id >0)
   content=<div className='col-span-12'>{error}</div>
   content= <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
   <div className="grid grid-cols-3 gap-2 lg:gap-8">
       <div className="col-span-full w-full space-y-8 lg:col-span-2">
           <Player movie={movie} />

           <MovieDescription />
       </div>
    
       
        <RelatedMovieList id={id} tags={tags} />
           
{/*  { console.log("related movie list", movie.id, movie.tags)} */}
   
   </div>
</div>


    return (
<section className="pt-6 pb-20">
       {content}
        </section>
    );
};

export default Movie;