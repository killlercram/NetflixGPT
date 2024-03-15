// import React from 'react'
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse"
 import Login from "./Login"
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch=useDispatch();
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },

  ]);
  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //lot of thing i can get form the user
    const {uid,email,displayName,photoURL} = user;
    // here i can update the store 
    //adding user
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
  } else {
    // User is signed out
    dispatch(removeUser());
  }
});

  })
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body