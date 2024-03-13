/**
 * DETYRA:
 * 
 * Nje page e cila shfrytezon useEffect per fetching of data nga https://dummyjson.com/docs
 * 
 * endpoint sipas zgjedhjes juaj - shembull, Products, Carts, Recipes etj
 * 
 * Kerkesa kryesore e detyres eshte demonstrimi i useEffect, edhe Atomic
 * design principles per ndarjen e komponentave.
 * 
 */

import React, { useState, useEffect } from 'react';
import Data from '../useEffect-data/Data';
import './../../pages/use-effect-Homework/style.css'


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

      if (!data) {
        return <div>Loading...</div>;
    }
    console.log(data)

    return (
        <div className="product-container"> {/* Apply the CSS class */}
            <h1>Product Container</h1>
            <Data data={data} />
        </div>
    );
}