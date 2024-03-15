import React, { useState, useEffect } from 'react';
import '../use-effect-Homework/style.css'
import useFetch from './useFetch';
import Recipies from '../useEffect-data/Recipies';
import Data from '../useEffect-data/Data';
import Users from '../useEffect-data/Users';

export default function ProductContainer() {
  const { data: dataProducts, loading: loadingProducts } = useFetch('https://dummyjson.com/products')
  const { data: dataRecipes, loading: loadingrRcipes } = useFetch('https://dummyjson.com/recipes')
  const { data: dataUsers, loading: loadingUsers } = useFetch('https://dummyjson.com/users')
  
  

  if(loadingProducts) {
      return <div>loadingProducts</div>
  }

  if(loadingrRcipes) {
    return <div>loadingCarts</div>
  }

  if(loadingUsers) {
    return <div>loadingrRcipes</div>
  }

    console.log(dataUsers)


    return (
        <div className="product-container">
            <h1>Product Container</h1>
           <Data data={dataProducts} />
           <Recipies dataRecipes={dataRecipes.recipes}/>
           <Users  dataUsers={dataUsers.users}/>
        </div>
    );
}
