import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./moviesApi";

const initialState= {
    movies: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    
    async ({tags, search}) =>{
    const movies = await getMovies(tags, search)
        return movies
    }
    )

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchMovies.pending, (state) =>{
            state.isError= '';
            state.isLoading= true;

        })
        .addCase(fetchMovies.fulfilled, (state, action) =>{
            state.isLoading= false;
            state.movies= action.payload;
        })
        .addCase(fetchMovies.rejected, (state, action) =>{
            state.isLoading= false;
            state.movies = [];
            state.error= true;
            state.error = action.error?.message
        })
    } 
})

export default movieSlice.reducer;