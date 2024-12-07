import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reduxslice/UserSlice";
import MovieReducer from "./reduxslice/NewMovieList";
import GPTReducer from "./reduxslice/GPTSlice"


const appstore = configureStore({
  reducer: {
    User: UserSlice,
    Movies: MovieReducer,
    GPT: GPTReducer,


  },
});

export default appstore;
