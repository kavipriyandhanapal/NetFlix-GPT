import { fetchOptions } from "../utils/Constants/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/redux/reduxslice/NewMovieList";

const useMovieUpdateHook = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      fetchOptions
    );
    const jsondata = await data.json();
    console.log(jsondata);

    dispatch(addMovies(jsondata.results));

    console.log(jsondata);
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useMovieUpdateHook;
