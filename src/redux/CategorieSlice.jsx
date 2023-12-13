import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getcategories",
  async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories ");
    return res.data;
  }
);
const CategoriesSlicer = createSlice({
  name: "Categories",
  initialState: {
    data: [],
    selectedCategorie: -1,
  },
  reducers: {
    modifier : (state,action)=>{
      state.selectedCategorie = action.payload
  }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const {modifier} = CategoriesSlicer.actions;
export default CategoriesSlicer.reducer;
