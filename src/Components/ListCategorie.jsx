import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/CategorieSlice";
import { getProduits } from "../redux/ProduitSlice";

export default function ListCategorie() {
  const categories = useSelector((state) => state.categories.data);
  const produits = useSelector((state) => state.produits.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProduits());
  }, [dispatch]);
  return <div>
   <h1>djdd</h1>
  </div>;
}
