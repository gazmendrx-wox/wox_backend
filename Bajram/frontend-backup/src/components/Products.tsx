import React from 'react';
import Product from './Product';

export default function Products({ data }) {
    const cartStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

 

    return (
        <div style={cartStyle}>
            <h3>Kjo cart me ID: {data.id} i takon Userit me ID: {data.userId}</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {data.products.map((product) => (
                    <li key={product.id}>
                        <Product
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    </li>
                ))}
            </ul>
            <p>
                <strong>Cmimi Total:</strong> {data.total} Euro<br />
                <strong>Cmimi me Zbritje:</strong> {data.discountedTotal} Euro
            </p>
        </div>
    );
}


