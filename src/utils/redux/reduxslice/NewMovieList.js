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
    }
  },
});

export const { addMovies, addMovieTrailer } = NewMovieSlice.actions;

export default NewMovieSlice.reducer;
