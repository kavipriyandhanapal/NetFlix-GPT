import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reduxslice/UserSlice";
import MovieReducer from "./reduxslice/NewMovieList";
import GPTReducer from "./reduxslice/GPTSlice";
import ConfigReducer from "./reduxslice/ConfigSlice";

const appstore = configureStore({
  reducer: {
    User: UserSlice,
    Movies: MovieReducer,
    GPT: GPTReducer,
    Config: ConfigReducer,
  },
});

export default appstore;
