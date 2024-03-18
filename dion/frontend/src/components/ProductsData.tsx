import React from 'react';
import '../../pages/use-effect-data/style.css';

export default function ProductDetails({ id, title, description, price, brand, discountPercentage, category, rating, stock }) {
    return (
        <div key={id} className="product-details">
            <h2>Product Details</h2>
            <h3>Title: {title}</h3>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Brand: {brand}</p>
            <p>Discount Percentage: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}