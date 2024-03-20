import ProductsData from "./ProductsData"
export default function CartsData({data}){

    return <>
        <ProductsData data={data.carts} />
    </>

}