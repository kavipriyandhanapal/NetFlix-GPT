import React from "react";
import { MOVIECARD_URL } from "../../utils/Constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 pr-3 h-56">
      <img className="w-48 pr-3 h-56" alt="Now Playing movies" src={MOVIECARD_URL + movie?.poster_path} />
    </div>
  );
};

export default MovieCard;
