/**
 * DETYRA:
 * 
 * Nje page e cila shfrytezon useEffect per fetching of data nga https://dummyjson.com/docs
 * 
 * endpoint sipas zgjedhjes juaj - shembull, Products, Carts, Recipes etj
 * 
 * Kerkesa kryesore e detyres eshte demonstrimi i useEffect, edhe Atomic
 * design principles per ndarjen e komponentave.
 * 
 */

import CartsData from "@/components/CartsData";
import useFetch from "./useFetch";
import Recipes from "@/components/Recipes";
import UserData from "@/components/UserData";
export default function MyApp(){

    
    const {data : ProductsData, loading : ProductsLoading} = useFetch('https://dummyjson.com/carts')
    const {data : RecipesData, loading : RecipesLoading} = useFetch('https://dummyjson.com/recipes')
    const { data: Userdata , loading: userLoading} = useFetch('https://dummyjson.com/users')

    console.log(RecipesData, "data")

if(ProductsLoading || RecipesLoading || userLoading){
    return <h1> Loading</h1>
}



    


    return <div>
        <CartsData data={ProductsData}/>
        <Recipes data={RecipesData} />
        <UserData data={Userdata} />

    </div>
}