import { fetchOptions } from "../utils/Constants/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/redux/reduxslice/NewMovieList";

const useUpcomingMoviesHook = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      fetchOptions
    );
    const jsondata = await data.json();
    console.log(jsondata);

    dispatch(addUpComingMovies(jsondata.results));

    console.log(jsondata);
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useUpcomingMoviesHook;
