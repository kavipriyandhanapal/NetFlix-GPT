import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoPlay from "./VideoPlay";

const MainContainer = () => {
  const Movie = useSelector((store) => store?.Movies?.NewMoviesList);

  console.log(Movie);

  if (!Movie || Object.keys(Movie).length === 0) return null;

  console.log(Movie);

  const { original_title, overview, id } = Movie[0];

  return (
    <div >
      <Videotitle original_title={original_title} overview={overview} />
      <VideoPlay movieid={id} />
    </div>
  );
};

export default MainContainer;
