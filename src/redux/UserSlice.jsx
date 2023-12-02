import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "users/getusers",
    async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/users ");
      return res.data;
    }
  );
  const UserSlice = createSlice(
    {
        name : "users",
        initialState : {
            data: [],
            selectedUserId : -1,
            selectedUserName : "",

        },
        reducers : {
            modifier : (state,action)=>{
                state.selectedUserName= action.payload
            }
        },
        extraReducers : (builder)=>{
            builder.addCase(getUsers.fulfilled, (state, action) => {
            //   console.log("fetched users", action.payload )
                state.data = action.payload   })
        }
    }
  )
  export const {modifier} = UserSlice.actions;
  export default UserSlice.reducer;