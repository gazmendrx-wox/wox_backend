'use client'
import { useState , useEffect } from "react"
import Recipes from "@/components/Recipes"
import useFetch from "./useFetch";
import UserData from "@/components/UserData";
import CartsData from "@/components/CartsData";

export default function EffectHomework(){

    const { data: recipeData , loading: recipeLoading } = useFetch('https://dummyjson.com/recipes');
    const { data: userData , loading: userLoading } = useFetch('https://dummyjson.com/users');
    const { data: cartData , loading: cartLoading } = useFetch('https://dummyjson.com/carts');

    if(recipeLoading || userLoading || cartLoading){
        return <h1>Loading</h1>
    }

    return <div>
        <CartsData data={cartData}/>
        <UserData data={userData} />
        <Recipes data={recipeData}/>
        

        
    </div>
}