import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getCategories } from "../redux/CategorieSlice";
import { getProduits } from "../redux/ProduitSlice";
import Header from "./Header";
import Stats from "./Stats";


export default function Accuiel() {
  let navigate = useNavigate();
  const [lc, setlc] = useState(false);
  const [lp, setlp] = useState(false);
  const users =useSelector((state) => state.users.data);
console.log('usersfze',users);

  const user = useSelector((state) => state.users.selectedUserName);
const use = users?.filter ( u => u.email == user )
const username = use[0]?.name;
const useravatar = use[0]?.avatar;

console.log("udd",username)
  const categories = useSelector((state) => state.categories.data);
  const produits = useSelector((state) => state.produits.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProduits());
  }, [dispatch]);
  return (
    <div className="container">
     <Header username={username} useravatar={useravatar} />
      <div className="Menu-general">
        <div className="titre">
            
            <h1>
              Menu Generale  </h1>
              </div>
        {/* <Stats categories={categories} produits={produits}/> */}
        <div className="stats">
            <Link to={"Stats"}  >Statistique </Link>
            </div>
        <div className="lc">
          <Link to={"Categories"}>Liste des categories </Link>
        </div>
        <div className="lp">
          <Link to={"Produits"}>Liste des Produits </Link>
        </div>
      </div>
 {username && useravatar  ? <Outlet/> : null }
    
    </div>
  );
}
