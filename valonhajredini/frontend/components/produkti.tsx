import Product from "./product"
import React from "react"
export default function Produkti({dataProducts}){
    return <div>
        {
            dataProducts.map((product) => <Product id={product.id} title={product.title} description={product.description} price={product.price}/>)
        }
    </div>
    
}