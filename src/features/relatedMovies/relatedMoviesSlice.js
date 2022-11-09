import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedMovies } from "./relatedMoviesApi";

const initialState= {
    relatedMovies: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedMovies = createAsyncThunk(
    'relatedMovies/fetchRelatedMovies',
    async ({tags, id}) =>{
        const relatedMovies = await getRelatedMovies({tags, id})
        return relatedMovies
    }
    )

const RelatedMoviesSlice = createSlice({
    name: 'RelatedMovies',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchRelatedMovies.pending, (state) =>{
            state.isError= false;
            state.isLoading= true;

        })
        .addCase(fetchRelatedMovies.fulfilled, (state, action) =>{
            state.isLoading= false;
            state.relatedMovies= action.payload;
        })
        .addCase(fetchRelatedMovies.rejected, (state, action) =>{
            state.isLoading= false;
            state.relatedMovies = [];
            state.error= true;
            state.error = action.error?.message
        })
    } 
})

export default RelatedMoviesSlice.reducer;