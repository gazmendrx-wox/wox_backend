import Product from "./Product";

export default function CartProd({data}){
    return <ul style={{ listStyleType: 'none', padding: 0 }}>
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
}