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

import useFetch from "../use-effect-homework/useFetch";
import Recipes from "@/components/Recipes";
export default function Carts(){

    
    const {data : RecipesData, loading : RecipesLoading} = useFetch('https://dummyjson.com/recipes')

if(RecipesData){
    console.log(RecipesData ," loading");
}

if(!RecipesLoading){
    console.log(RecipesData, "data")
}
    


    return <div>
       {RecipesData && <Recipes data={RecipesData}/>}
    </div>
}