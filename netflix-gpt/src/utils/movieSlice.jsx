import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{//here movies will be there
    addNowPlayingMovies:null,
    trailerVideo:null,
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      //updating store/state
      state.addNowPlayingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
      //adding trailer

    }
  }
});
export const{addNowPlayingMovies,addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;