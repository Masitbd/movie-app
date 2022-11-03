import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import tagsReducer from '../features/tags/tagsSlice';


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tags: tagsReducer
  },
});
