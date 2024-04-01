import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice.jsx";
import movieReducer  from "./movieSlice.jsx";
import gptReducer from "./gptSlice.jsx";
import configReducer from "./configSlice.jsx";
const appStore=configureStore(
  {
    reducer:{
      user:userReducer,
      movies:movieReducer,
      gpt:gptReducer,
      config:configReducer,
    },

  }
);
export default appStore;


