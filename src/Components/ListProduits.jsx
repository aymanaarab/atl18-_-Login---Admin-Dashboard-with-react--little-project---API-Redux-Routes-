import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/CategorieSlice';
import { getProduits } from '../redux/ProduitSlice';

export default function ListProduits() {
  const produits = useSelector((state) => state.produits?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduits());
  }, [dispatch]);
    return (
    <div className='Produits'>
{
    produits.map(p=>
       <div key={p.id} className='Produit'> 
       <img src={p.images[0]} alt={p.title}/>
       <h6>price</h6>
       <p>description</p>
       <p>Categorie : {p.categorie?.name}</p>
        </div> 
    )
}
    </div>
  )
}
