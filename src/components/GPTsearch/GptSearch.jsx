import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMAGE_URL } from "../../utils/Constants/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="background Image" src={BG_IMAGE_URL} />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
