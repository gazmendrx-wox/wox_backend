import React, { useState, useEffect } from 'react';
import Data from '@/components/data';
import useFetch from './useFetch';
import Recipes from '@/components/Recipes';
import Users from '@/components/Users';

export default function ProductContainer() {
  const { data: dataProducts, loading: loadingProducts } = useFetch('https://dummyjson.com/products')
  const { data: dataRecipes, loading: loadingRecipes } = useFetch('https://dummyjson.com/recipes')
  const { data: dataUsers, loading: loadingUsers } = useFetch('https://dummyjson.com/users')
  

  if(loadingProducts || loadingRecipes) {
      return <h1>Loading data</h1>
  }


    console.log(dataProducts)


    return (
        <div className="product-container">
            <h1>Product Container</h1>
           <Data dataProducts={dataProducts.products} />
            <h1>Recipes Container</h1>
           <Recipes data={dataRecipes.recipes}/>
            <h1>Users Container</h1>
           <Users data={dataUsers.users}/>
        </div>
    );
}
