// import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { ToggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(()=>{
    const auth = getAuth();
const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    //lot of thing i can get form the user
    const {uid,email,displayName,photoURL} = user;
    // here i can update the store 
    //adding user
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});
return()=>unsubscribe();//will be called when component unmounts
  },[]);

  const handleGptSearchClick=()=>{
    //Toggle GPT search
    dispatch(ToggleGptSearchView())

  }
  
  const handleLanguageChange =(e)=>{
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52"
        src={LOGO}
        alt="logo"
      />

     {user && <div className="y-2 flex p-6 align-baseline">
    {showGptSearch && ( <select className="p-2 bg-gray-900 text-white m-2" onClick={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier}
        value={lang.identifier}>{lang.name}</option>)}
      </select>)}
      <button className="text-white rounded-lg text-lg py-2 px-4 mx-4 my-2 bg-purple-800" onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>

        <img
          className="w-auto h-12 rounded-xl"
          src={user.photoURL}
          alt="side_logo"
        ></img>
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
