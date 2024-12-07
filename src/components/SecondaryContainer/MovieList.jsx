import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
    console.log(movies);
    
  return (
    <div>
      <h1 className="text-2xl p-2 text-white">{title}</h1>
      <div className="flex overflow-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
