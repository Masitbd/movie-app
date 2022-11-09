import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie } from "./movieApi";


const initialState= {
    movie: {},
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie',
    async (id) =>{
        const movie = await getMovie(id)
       // console.log('call movie',movie);
        return movie
    }
    )

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchMovie.pending, (state) =>{
            state.isError= '';
            state.isLoading= true;

        })
        .addCase(fetchMovie.fulfilled, (state, action) =>{
            state.isLoading= false;
            state.movie= action.payload;
        })
        .addCase(fetchMovie.rejected, (state, action) =>{
            state.isLoading= false;
            state.movie = {};
            state.error= true;
            state.error = action.error?.message
        })
    } 
})

export default movieSlice.reducer;