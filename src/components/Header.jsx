import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/redux/reduxslice/UserSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/redux/reduxslice/UserSlice";
import { signOut } from "firebase/auth";
import { Netflix_Logo } from "../utils/Constants";
import { toggleGptPageView } from "../utils/redux/reduxslice/GPTSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((store) => store.User);
  console.log(User);

  const handleShowSearchView =()=>{    
    dispatch(toggleGptPageView());
    console.log('hi');
    
  }

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
          <button onClick={handleShowSearchView}>SEARCH</button>
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
