import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{//here movies will be there
    addNowPlayingMovies:null,
    trailerVideo:null,
    addPopularMovies:null,
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      //updating store/state
      state.addNowPlayingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
      //adding trailer

    },
    addPopularMovies:(state,action)=>{
      state.addPopularMovies=action.payload;
    }
  }
});
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies}=movieSlice.actions;
export default movieSlice.reducer;