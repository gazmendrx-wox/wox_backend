import React, { useState, useEffect } from 'react';
import '../use-effect-data/style.css'
import Data from '@/components/useEffect-data/Data';
import useFetch from './useFetch';
import Recipies from '@/components/useEffect-data/Recipies';
import Users from '@/components/useEffect-data/Users';

export default function ProductContainer() {
  const { data: dataProducts, loading: loadingProducts } = useFetch('https://dummyjson.com/products')
  const { data: dataRecipes, loading: loadingrRcipes } = useFetch('https://dummyjson.com/recipes')
  const { data: dataUsers, loading: loadingUsers } = useFetch('https://dummyjson.com/users')
  
  

  if(loadingProducts) {
      return <div>loadingProducts</div>
  }

  if(loadingrRcipes) {
    return <div>loadingrRcipes</div>
  }

  if(loadingUsers) {
    return <div>loadingUsers</div>
  }

    console.log(dataUsers)


    return (
        <div className="product-container">
            <h1>Product Container</h1>
           <Data dataProducts={dataProducts} />
           <Recipies dataRecipes={dataRecipes}/>
           <Users  dataUsers={dataUsers}/>
        </div>
    );
}


