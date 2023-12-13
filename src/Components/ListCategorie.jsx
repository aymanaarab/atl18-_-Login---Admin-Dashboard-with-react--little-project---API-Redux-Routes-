import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, modifier } from "../redux/CategorieSlice";
import { getProduits } from "../redux/ProduitSlice";

export default function ListCategorie() {
  const categories = useSelector((state) => state.categories.data);
  const cat = useSelector((state) => state.categories.selectedCategorie);
  const produits = useSelector((state) => state.produits.data);
  const produitfilt= produits.filter((c)=>c.category.name==cat)
  console.log("produits filtrees",produitfilt)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProduits());
  }, [dispatch]);
  function handlechange (e){
    dispatch(modifier(e.target.value))
    }
  return (
  <div>


  <form>
  <label>Liste des Categories: </label>
    <select value={cat} onChange={handlechange}>
      <option value={""}>----Select Categorie-----</option>
      {categories.map((c,i) => 
  

        <option key={i} value={c.name}>{c.name}
        </option>
  
     
      )
     
      }
    </select>
    
  </form>
  <div className="Produits">
  {produitfilt.map((p)=>
      <div key={p.id} className='Produit'> 
      <img src={p.images[0]} alt={p.title}/>
      <h6>price</h6>
      <p>description</p>
      <p>Categorie : {p.categorie?.name}</p>
       </div> 

  )}
  </div>
  
  </div> )
}
