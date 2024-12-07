import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/redux/reduxslice/UserSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/redux/reduxslice/UserSlice";
import { signOut } from "firebase/auth";
import { Netflix_Logo } from "../utils/Constants/Constants";
import { toggleGptPageView } from "../utils/redux/reduxslice/GPTSlice";
import { LANGUAGE_OPTIONS } from "../utils/Constants/LanguageConstants";
import { changeLanguage } from "../utils/redux/reduxslice/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((store) => store.User);
  const GptSearch = useSelector((store) => store.GPT.showGptpage);
  console.log(User);

  const handleShowSearchView = () => {
    dispatch(toggleGptPageView());
    console.log("hi");
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email } = user.uid;
        dispatch(addUser({ user: uid, emailId: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubcribe();
  }, []);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  return (
    <div className=" w-screen absolute p-2 m-2 bg-gradient-to-b from-black/70 justify-between flex z-20">
      <img className="w-40" src={Netflix_Logo} alt="NetflixLogo" />
      {User && (
        <div className="flex">
          {GptSearch && (
            <select
              className="m-3 mx-3 p-2 bg-gray-800 text-white rounded-lg"
              onChange={handleChangeLanguage}
            >
              {LANGUAGE_OPTIONS.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleShowSearchView}>
            {GptSearch ? "HOME" : "SEARCH"}
          </button>
          <img />
          <button onClick={handelSignOut} className="bg-red-500">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
