import React, { useEffect } from "react";
import { fetchOptions } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/redux/reduxslice/NewMovieList";

const useMovieTrailerHook = (movieid) => {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    console.log(movieid);

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      fetchOptions
    );
    const videosdata = await data.json();

    console.log(videosdata);

    const trailerVideo = videosdata.results.filter(
      (video) => video.type === "Trailer"
    );
    const firstTrailer = trailerVideo.length
      ? trailerVideo[0]
      : videosdata.results[0].type;

    dispatch(addMovieTrailer(firstTrailer));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return <div>useMovieTrailerHook</div>;
};

export default useMovieTrailerHook;
