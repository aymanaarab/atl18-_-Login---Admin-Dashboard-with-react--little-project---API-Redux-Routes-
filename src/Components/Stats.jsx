import React from 'react'
import { useSelector } from 'react-redux';

export default function Stats() {
    const categories = useSelector((state) => state.categories.data);
    const produits = useSelector((state) => state.produits.data);
  return (

           <div className="Content">
          <div className="Categories">
            <span>Categories : {categories.length}</span>
          </div>
          <div className="Produits-stats">
            <span>Produits : {produits.length}</span>
          </div>
        </div>
    
    )
}
