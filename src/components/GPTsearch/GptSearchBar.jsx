import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="what Would You Like to Watch Today?"
          className="p-4 m-4 col-span-9"
        ></input>
        <button className="bg-red-600 text-white m-4 px-4 col-span-3">SEARCH</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
