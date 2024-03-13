export default function Product({id, title, description, price, discountPercentage}){
    return <p key={id}>
        {title}, {description}, {price}, {discountPercentage}
    </p>
}