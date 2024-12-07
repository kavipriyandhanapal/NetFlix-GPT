import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const MovieLists = useSelector((store) => store?.Movies);
  console.log(MovieLists);

  return (
    MovieLists && (
      <div className="bg-black ">
        <div className=" -mt-36 relative pl-8 z-30">
          <MovieList
            title={"Now Playing Movies"}
            movies={MovieLists.NewMoviesList}
          />
          <MovieList
            title={"Trending Movies"}
            movies={MovieLists.trendingMovies}
          />
          <MovieList
            title={"Popular Movies"}
            movies={MovieLists.popularMovies}
          />
          <MovieList
            title={"UpComing Movies "}
            movies={MovieLists.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
