import { createSlice } from "@reduxjs/toolkit";

const NewMovieSlice = createSlice({
  name: "newmovieslice",
  initialState: {
    NewMoviesList: {},
    MovieTrailer: {},
  },
  reducers: {
    addMovies: (state, action) => {
      state.NewMoviesList = action.payload;
    },
    addMovieTrailer:(state,action)=>{
          state.MovieTrailer=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload
    },
    addUpComingMovies:(state,action)=>{
      state.upComingMovies=action.payload
    }
  },
});

export const { addMovies, addMovieTrailer, addPopularMovies, addTrendingMovies, addUpComingMovies } = NewMovieSlice.actions;

export default NewMovieSlice.reducer;
