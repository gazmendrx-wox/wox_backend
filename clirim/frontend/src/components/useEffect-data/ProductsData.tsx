// ProductDetails.js
import React from 'react';
import '../../pages/use-effect-data/style.css'

export default function ProductDetails({ id, title, description, price, brand }) {
    return (
        <div className="product-details"> {/* Apply the CSS class */}
            <h2>Product Details</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>{brand}</p>
        </div>
    );
}

