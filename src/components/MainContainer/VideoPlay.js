import React from "react";
import useMovieTrailerHook from "../../Hooks/useMovieTrailerHook";
import { useSelector } from "react-redux";

const VideoPlay = ({ movieid }) => {
  useMovieTrailerHook(movieid);

  const Trailerkey = useSelector((store) => store.Movies?.MovieTrailer);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          Trailerkey.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlay;
