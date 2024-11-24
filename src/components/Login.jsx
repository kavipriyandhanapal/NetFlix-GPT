import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
          alt="BackGroundImage"
        />
      </div>
      <form className="absolute bg-black my-40  text-white w-3/12 mx-auto right-0 left-0 p-10 opacity-150 rounded-lg">
        <h1 className="text-3xl font-bold p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            placeholder="Enter Your Name "
            className="p-3 m-2 w-full bg-gray-800"
          />
        )}
        <input
          className="p-3 m-2 w-full bg-gray-800"
          placeholder="Enter Email"
        />
        <input
          className="p-3 m-2 w-full  bg-gray-800"
          placeholder="Enter Password"
        />
        <button className="p-2 my-6 mx-2 w-full bg-red-600 rounded-sm">
          Sign In
        </button>
        <p onClick={handleIsSignIn} className="p-2 m-2 cursor-pointer">
          {isSignIn ? "New To NetFlix? SignUp" : "Already Customer? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
