import React from "react";

const Videotitle = ({ original_title, overview }) => {
  console.log(original_title, overview);

  return (
    <div className="absolute text-white px-16 pt-[20%] bg-gradient-to-r from-black w-screen aspect-video" >
      <h1 className="text-5xl font-bold"> {original_title}</h1>
      <p className="py-2 my-5 w-1/4 text-xl"> {overview} </p>
      <div>
        <button className=" bg-white  text-black p-2 px-10 text-lg bg-opacity-50 rounded-lg hover:opacity-80">▶️ Play</button>
        <button className="bg-white text-white p-2 px-10 text-lg bg-opacity-50 rounded-lg mx-2">More Info</button>
      </div>
    </div>
  );
};

export default Videotitle;
