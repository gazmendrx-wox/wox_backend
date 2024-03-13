import React from "react"
export default function Product({id, title, description, price}){
    return <p key={id}>
        {title}, {description}, {price}
    </p>
}