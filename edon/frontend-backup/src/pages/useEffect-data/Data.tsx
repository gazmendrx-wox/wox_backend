import ProductList from "./ProductList";



export default function Data({data}) {


    return<>
        <ProductList data={data.products}/>
    </>
}