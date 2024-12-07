import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/reduxslice/UserSlice";
import { BG_IMAGE_URL } from "../utils/Constants/Constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const Email = useRef();
  const Password = useRef();
  const Name = useRef();

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = validation(Email.current.value, Password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ displayName: displayName, photoURL: photoURL })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt="BackGroundImage" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black my-40  text-white w-3/12 mx-auto right-0 left-0 p-10 opacity-150 rounded-lg"
      >
        <h1 className="text-3xl font-bold p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={Name}
            placeholder="Enter Your Name "
            className="p-3 m-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={Email}
          className="p-3 m-2 w-full bg-gray-800"
          placeholder="Enter Email"
        />
        <input
          ref={Password}
          className="p-3 m-2 w-full  bg-gray-800"
          placeholder="Enter Password"
        />
        <p className="text-red-600 font-bold text-sm p-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-6 mx-2 w-full bg-red-600 rounded-sm"
        >
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
