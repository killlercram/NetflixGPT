import { createSlice } from "@reduxjs/toolkit";
//this createSlice is a function which takes the objects
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    //this will show and hide my search view
    ToggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { ToggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
