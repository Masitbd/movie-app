import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../components/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
