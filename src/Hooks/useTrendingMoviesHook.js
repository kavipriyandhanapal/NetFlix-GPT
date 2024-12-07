import { fetchOptions } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/redux/reduxslice/NewMovieList";

const useTrendingMoviesHook = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      fetchOptions
    );
    const jsondata = await data.json();
    console.log(jsondata);

    dispatch(addTrendingMovies(jsondata.results));

    console.log(jsondata);
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useTrendingMoviesHook;
