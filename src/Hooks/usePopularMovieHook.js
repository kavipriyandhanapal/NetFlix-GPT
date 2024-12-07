import { fetchOptions } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux/reduxslice/NewMovieList";

const usePopularMovieHook = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      fetchOptions
    );
    const jsondata = await data.json();
    console.log(jsondata);

    dispatch(addPopularMovies(jsondata.results));

    console.log(jsondata);
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default usePopularMovieHook;
