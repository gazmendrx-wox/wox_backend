// ProductList.js
import React from 'react';
import ProductsData from './ProductsData';
import './../../pages/use-effect-data/style.css'
export default function ProductList({ data }) {

    if (!data) {
        return <div>Loading...</div>;
    }
    console.log(data, 'data')
    return (
        <div>
            <h2>Product List</h2>
            <ul className="product-list"> {/* Apply the CSS class */}
                {data.map(product => (
                    <li key={product.id} className="product-item"> {/* Apply the CSS class */}
                        <ProductsData
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            brand={product.brand}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
