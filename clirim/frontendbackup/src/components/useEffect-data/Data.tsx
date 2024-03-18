import ProductList from "./ProductList";

export default function Data({dataProducts}) {


    return<>
        <ProductList dataProducts={dataProducts.products}/>
    </>
}