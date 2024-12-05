import React from "react";
import Header from "./Header";
import useMovieUpdateHook from "../Hooks/useMovieUpdateHook";
import VideoPlay from "./MainContainer/VideoPlay";
import Videotitle from "./MainContainer/Videotitle";
import { useSelector } from "react-redux";

const Browse = () => {
  useMovieUpdateHook();
  const Movie = useSelector((store) => store?.Movies?.NewMoviesList);

  console.log(Movie);

  if (!Movie || Object.keys(Movie).length === 0) return null;

  console.log(Movie);

  const { original_title, overview, id } = Movie[1];

  return (
    <div>
      <Header />
      <Videotitle original_title={original_title} overview={overview} />
      <VideoPlay movieid={id}/>
    </div>
  );
};

export default Browse;
