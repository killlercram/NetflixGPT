import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice.jsx";
import movieReducer  from "./movieSlice.jsx";
const appStore=configureStore(
  {
    reducer:{
      user:userReducer,
      movies:movieReducer,
    },

  }
);
export default appStore;


