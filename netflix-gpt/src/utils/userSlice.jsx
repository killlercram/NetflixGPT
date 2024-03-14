import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:'user',
  initialState:null,
  reducers:{
    addUser:(state,action)=>{
      return action.payload;
      //initial state is null then it will return action.payload
    },
    // eslint-disable-next-line no-unused-vars
    removeUser:(state,action)=>{
      return null;//this will remove the user
    },
  },
});
//exporting the actions
export const {addUser,removeUser}=userSlice.actions;
//expoting the reducers
export default userSlice.reducer;
