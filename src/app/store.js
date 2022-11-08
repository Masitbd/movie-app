import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../components/movie/movieSlice';
import moviesReducer from '../features/movies/moviesSlice';
import tagsReducer from '../features/tags/tagsSlice';


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tags: tagsReducer,
    movie: movieReducer
  },
});
