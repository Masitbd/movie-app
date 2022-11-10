import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filter/filterSlice';
import movieReducer from '../features/movie/movieSlice';
import moviesReducer from '../features/movies/moviesSlice';
import relatedMoviesReducer from '../features/relatedMovies/relatedMoviesSlice';
import tagsReducer from '../features/tags/tagsSlice';





export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tags: tagsReducer,
    movie: movieReducer,
    relatedMovies: relatedMoviesReducer,
    filter: filterReducer

  },
});
