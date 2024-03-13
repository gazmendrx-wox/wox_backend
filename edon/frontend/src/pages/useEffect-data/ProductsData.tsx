// ProductList.js
import React from 'react';
import './../../pages/use-effect-Homework/style.css'

export default function ProductDetails({ id, title, description, price, brand, discountPercentage, rating, category }) {
    return (
        <div className="product-details"> {/* Apply the CSS class */}
            <h2 key={id}>Product Details</h2>
            <h3>title: {title}</h3>
            <p>description :{description}</p>
            <p>Price: {price}</p>
            <p>brand: {brand}</p>
            <p>discountPercentage: {discountPercentage}</p>
            <p>rating: {rating}</p>
            <p>category: {category}</p>
        </div>
    );
}

