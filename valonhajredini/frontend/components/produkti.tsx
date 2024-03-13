import Product from "./product"
import React from "react"
export default function Produkti({data}){
    if(!data){
        return <h1>Loading...</h1>
    }else{
            return <div>
        {
            data.map((product) => <Product id={product.id} title={product.title} description={product.description} price={product.price}/>)
        }
    </div>
    }
}