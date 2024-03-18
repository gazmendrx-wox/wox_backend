import React from 'react';
import Products from './Products';

export default function Carts({ data }) {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
    };

    return (
        <div style={containerStyle}>
            {data.map((cart) => (
                <Products key={cart.id} data={cart} />
            ))}
        </div>
    );
}