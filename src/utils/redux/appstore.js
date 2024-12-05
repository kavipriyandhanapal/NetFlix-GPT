import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reduxslice/UserSlice";
import MovieReducer from "./reduxslice/NewMovieList";

const appstore = configureStore({
  reducer: {
    User: UserSlice,
    Movies: MovieReducer,
  },
});

export default appstore;
