import React, { useState, useEffect } from 'react';
import '../use-effect-data/style.css'
import Data from '@/components/useEffect-data/Data';
import useFetch from './useFetch';

export default function ProductContainer() {
  const { data: dataProducts, loading: loadingProducts } = useFetch('https://dummyjson.com/products')
  

  if(loadingProducts) {
      console.log('loading...', loadingProducts)
  }

  if(!loadingProducts) {
      console.log('data', dataProducts)
  }

    console.log(dataProducts)


    return (
        <div className="product-container">
            <h1>Product Container</h1>
           {dataProducts && <Data dataProducts={dataProducts} />}
        </div>
    );
}


