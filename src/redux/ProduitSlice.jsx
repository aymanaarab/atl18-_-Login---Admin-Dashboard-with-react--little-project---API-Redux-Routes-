import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduits = createAsyncThunk(
  "produits/getProduits",
  async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products ");
    return res.data;
  }
);
const ProduitSlicer = createSlice({
  name: "Produits",
  initialState: {
    data: [],
    selectedCategorie: -1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduits.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const {} = ProduitSlicer.actions;
export default ProduitSlicer.reducer;
