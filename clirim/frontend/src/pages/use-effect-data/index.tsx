import React, { useState, useEffect } from 'react';
import '../use-effect-data/style.css'
import Data from '@/components/useEffect-data/Data';

export default function ProductContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            fetch("https://dummyjson.com/products")
              .then((res) => res.json())
              .then((data) => setData(data));
          } catch (error) {
            console.error("Error to load data");
          }
        };
    
        getProducts();
      }, []);


    console.log(data)


    return (
        <div className="product-container">
            <h1>Product Container</h1>
            <Data data={data} />
        </div>
    );
}


