import Product from "./product"
export default function Produkti({products}){
    return <div>
        {
            products.map((product) => <Product id={product.id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage}/>)
        }
    </div>
}