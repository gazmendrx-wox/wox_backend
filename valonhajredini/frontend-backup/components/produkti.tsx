import React from 'react';
import ProductDetails from './product';
export default function ProductList({ dataProducts }) {

    // if (!data) {
    //     return <div>Loading...</div>;
    // }
    
    console.log(dataProducts, 'data')
    return (
        <div>
            <h2>Product List</h2>
            <ul className="product-list">
                {dataProducts.map(product => (
                    <p key={product.id} className="product-item">
                        <ProductDetails
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            brand={product.brand}
                            discountPercentage={product.discountPercentage}
                            category={product.category}
                            rating={product.rating}
                            stock={product.stock}
                        />
                    </p>
                ))}
            </ul>
        </div>
    );
}