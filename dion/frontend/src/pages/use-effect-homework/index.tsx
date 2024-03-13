
import useFetch from "./useFetch";

export default function EffectHomework(){
const {data : ProductsData loading : ProductsLoading} = useFetch("https://dumyjson.com/carts")
if(ProductsLoading){
    console.log(ProductsLoading,"loading");
}
if(!ProductsLoading){
    console.log(ProductsData,"data")
}
return <div>
    {ProductsData&&<CartsData data={ProductsData}/>}
</div>

}