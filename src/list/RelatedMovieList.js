import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedMovies } from '../features/relatedMovies/relatedMoviesSlice';
import Loading from '../ui/Loading';
import RelatedMovie from './RelatedMovie';

const RelatedMovieList = ({id, tags}) => {
    console.log("current",id, tags);
    const dispatch = useDispatch()

    const {relatedMovies, isLoading, isError, error}= useSelector(state => state.relatedMovies)
    //console.log("related movies",relatedMovies); this related videos come form store ***

    useEffect(()=>{
        dispatch(fetchRelatedMovies({tags, id}))
        console.log(fetchRelatedMovies({tags, id}))
    },[dispatch, tags, id])

    // what to render

    let conetent = null
    if(isLoading) conetent = <Loading />
    if(!isLoading && isError) conetent = <div className='col-span-12'>{error}</div>
    if(!isLoading && !isError && relatedMovies?.length === 0) conetent = <div className='col-span-12'>No video found</div>
    if(!isLoading && !isError && relatedMovies?.length > 0) conetent = relatedMovies.map(movie =>(
        <RelatedMovie key={movie.id} movie= {movie} />
    ))
    return (
        <div
        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >
        {conetent}
        
    </div>

    );
};

export default RelatedMovieList;