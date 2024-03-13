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
'use client'
import Recipes from "@/components/Recipes"
import { useState , useEffect } from "react"

export default function EffectHomework(){

    const [recipes , setRecipes] = useState()

    useEffect(() => {
        const getRecipes = async () => {          
            fetch('https://dummyjson.com/recipes')
                .then(res => res.json())
                .then(data => setRecipes(data));
        }
        getRecipes()
    }, [])
    console.log(recipes)

    return <div>
        {recipes && <Recipes data={recipes.recipes}/>}
    </div>
}