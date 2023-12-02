import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice, { getUsers } from "./UserSlice";
import CategorieSlice, { getCategories } from "./CategorieSlice";
import ProduitSlice from "./ProduitSlice";

const reducer = combineReducers({
  users: UserSlice,
  categories: CategorieSlice,
  produits: ProduitSlice
});
const store = configureStore({
  reducer,
});
export default store;