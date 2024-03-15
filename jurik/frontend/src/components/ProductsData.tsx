import Product from "./Product";
export default function ProductsData({ data }) {



    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
    } 

    const cartStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    } 

    return (
        <div style={containerStyle}>
            {data.map((cart) => (
                <div key={cart.id} style={cartStyle}>
                    <h3>Kjo cart me ID: {cart.id} i takon Userit me ID: {cart.userId}</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {cart.products.map((product) => (
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
                        <strong>Cmimi Total:</strong> {cart.total} Euro<br />
                        <strong>Cmimi me Zbritje:</strong> {cart.discountedTotal} Euro
                    </p>
                </div>
            ))}
        </div>
    );
}
