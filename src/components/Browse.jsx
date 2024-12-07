import React from "react";
import Header from "./Header";
import useMovieUpdateHook from "../Hooks/useMovieUpdateHook";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import useTrendingMoviesHook from "../Hooks/useTrendingMoviesHook";
import usePopularMovieHook from "../Hooks/usePopularMovieHook";
import useUpcomingMoviesHook from "../Hooks/useUpcomingMoviesHook";
import GptSearch from "./GPTsearch/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useMovieUpdateHook();
  useTrendingMoviesHook();
  usePopularMovieHook();
  useUpcomingMoviesHook();

  const showGpt = useSelector((store) => store?.GPT?.showGptpage);
  console.log(showGpt);

  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          {/* <SecondaryContainer /> */}
        </>
      )}
    </div>
  );
};

export default Browse;
